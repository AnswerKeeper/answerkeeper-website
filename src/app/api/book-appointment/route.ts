import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import twilio from 'twilio';

// Initialize Twilio Client
const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Extract parameters from Vapi request
    const {
      customerName,
      customerPhone,
      serviceType,
      address,
      appointmentTime
    } = body.message?.toolCalls?.[0]?.function?.arguments || body;

    // Safe E.164 Phone Formatting
    const rawPhone = customerPhone || '';
    const cleanedPhone = String(rawPhone).replace(/[^\d+]/g, '');
    const formattedPhone = cleanedPhone.startsWith('+') 
      ? cleanedPhone 
      : `+${cleanedPhone}`;

    // Google Calendar Event Creation
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    const startDate = new Date(appointmentTime);
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

    const event = {
      summary: `${serviceType || 'Service Call'} - ${customerName}`,
      description: `Phone: ${formattedPhone}\nAddress: ${address}`,
      start: {
        dateTime: startDate.toISOString(),
      },
      end: {
        dateTime: endDate.toISOString(),
      },
    };

    await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || 'primary',
      requestBody: event,
    });

    // Twilio SMS Dispatch
    if (process.env.TWILIO_PHONE_NUMBER && formattedPhone.length > 5) {
      try {
        await twilioClient.messages.create({
          body: `Hi ${customerName || 'there'}, your appointment for ${serviceType || 'service'} is confirmed for ${startDate.toLocaleString()} at ${address}.`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: formattedPhone,
        });
      } catch (smsError) {
        console.error('Twilio SMS Error:', smsError);
      }
    }

    return NextResponse.json({
      results: [
        {
          toolCallId: body.message?.toolCalls?.[0]?.id,
          result: 'Appointment successfully booked and confirmation sent.',
        },
      ],
    });
  } catch (error) {
    console.error('Booking Error:', error);
    return NextResponse.json(
      { error: 'Failed to book appointment' },
      { status: 500 }
    );
  }
}
