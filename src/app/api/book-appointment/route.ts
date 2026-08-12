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

    // Extract parameters from Vapi payload
    const toolCall = body.message?.toolCalls?.[0];
    const args = toolCall?.function?.arguments || body;

    const {
      customerName = 'Valued Customer',
      customerPhone = '',
      serviceType = 'Service Call',
      address = 'Not provided',
      appointmentTime
    } = args;

    // 1. Instant E.164 Phone Sanitization
    const rawPhone = String(customerPhone);
    const cleaned = rawPhone.replace(/[^\d+]/g, '');
    const formattedPhone = cleaned.startsWith('+') ? cleaned : `+${cleaned}`;

    // 2. Decode Google Private Key
    let rawKey = process.env.GOOGLE_PRIVATE_KEY || '';
    if (rawKey.startsWith('"') && rawKey.endsWith('"')) {
      rawKey = rawKey.slice(1, -1);
    }
    const privateKey = rawKey.replace(/\\n/g, '\n');

    // 3. Configure Google Auth
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // 4. Calculate Time Slots
    const startDate = appointmentTime ? new Date(appointmentTime) : new Date();
    const endDate = new Date(startDate.getTime() + 30 * 60 * 1000);

    // 5. Execute Calendar Insertion
    const calendarId = process.env.GOOGLE_CALENDAR_ID;
    
    await calendar.events.insert({
      calendarId: calendarId,
      requestBody: {
        summary: `${serviceType} - ${customerName}`,
        description: `Phone: ${formattedPhone}\nAddress: ${address}`,
        start: { dateTime: startDate.toISOString() },
        end: { dateTime: endDate.toISOString() },
      },
    });

    // 6. Execute Twilio SMS
    if (process.env.TWILIO_PHONE_NUMBER && formattedPhone.length > 5) {
      try {
        await twilioClient.messages.create({
          body: `Hi ${customerName}, your ${serviceType} appointment is confirmed for ${startDate.toLocaleString('en-US', { timeZone: 'America/New_York' })} at ${address}.`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: formattedPhone,
        });
      } catch (smsErr) {
        console.error('Twilio SMS Error:', smsErr);
      }
    }

    // Return instant success response back to Vapi
    return NextResponse.json({
      results: [
        {
          toolCallId: toolCall?.id,
          result: `Appointment successfully booked for ${customerName} on ${startDate.toLocaleString()}`,
        },
      ],
    });
  } catch (error: any) {
    console.error('Booking Execution Failed:', error?.message || error);
    return NextResponse.json(
      { error: 'Failed to complete booking execution', details: error?.message },
      { status: 500 }
    );
  }
}
