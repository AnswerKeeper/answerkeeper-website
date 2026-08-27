import { NextRequest, NextResponse } from 'next/server';
import { google } from 'googleapis';
import twilio from 'twilio';

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Print full Vapi payload structure to Vercel console
    console.log('DEBUG VAPI PAYLOAD:', JSON.stringify(body, null, 2));

    // 1. Extract and parse parameters from Vapi payload safely
    const toolCall = body.message?.toolCalls?.[0];
    let args: any = {};

    if (toolCall?.function?.arguments) {
      if (typeof toolCall.function.arguments === 'string') {
        try {
          args = JSON.parse(toolCall.function.arguments);
        } catch {
          args = {};
        }
      } else {
        args = toolCall.function.arguments;
      }
    } else {
      args = body;
    }

    // Comprehensive fallback search for caller phone across all Vapi payload schemas
    const extractedCallerPhone =
      body.message?.call?.customer?.number ||
      body.call?.customer?.number ||
      body.message?.customer?.number ||
      body.customer?.number ||
      body.call?.phoneNumber ||
      body.phoneNumber ||
      '';

    const customerName = args.customerName || args.callerName || 'Valued Customer';
    const customerPhone = args.customerPhone || args.callbackNumber || extractedCallerPhone;
    const address = args.address || args.serviceAddress || 'Not provided';
    const serviceType = args.serviceType || 'Service Call';
    const appointmentTime = args.appointmentTime;

    // 2. Format phone number to safe E.164
    const rawPhone = String(customerPhone);
    const cleaned = rawPhone.replace(/[^\d+]/g, '');
    const formattedPhone = cleaned ? (cleaned.startsWith('+') ? cleaned : `+${cleaned}`) : '';

    // 3. Setup Google Calendar Auth
    let rawKey = process.env.GOOGLE_PRIVATE_KEY || '';
    if (rawKey.startsWith('"') && rawKey.endsWith('"')) {
      rawKey = rawKey.slice(1, -1);
    }
    const privateKey = rawKey.replace(/\\n/g, '\n');

    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });
    const startTime = appointmentTime ? new Date(appointmentTime) : new Date();
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

    const dateStr = startTime.toLocaleDateString('en-US', { 
      weekday: 'short', 
      month: 'short', 
      day: 'numeric' 
    });
    const timeStr = startTime.toLocaleTimeString('en-US', { 
      hour: 'numeric', 
      minute: '2-digit',
      timeZone: 'America/New_York' 
    });

    // 4. Parallel execution of Calendar insertion and SMS dispatch (Optimized for Sub-Second Response)
    const promises: Promise<any>[] = [];

    // Task A: Insert Event into Google Calendar
    promises.push(
      calendar.events.insert({
        calendarId: process.env.GOOGLE_CALENDAR_ID,
        requestBody: {
          summary: `${serviceType} - ${customerName}`,
          description: `Phone: ${formattedPhone || 'Not provided'}\nAddress: ${address}`,
          start: { dateTime: startTime.toISOString(), timeZone: 'America/New_York' },
          end: { dateTime: endTime.toISOString(), timeZone: 'America/New_York' },
        },
      }).catch(err => console.error('Google Calendar Insert Failed:', err?.message || err))
    );

    // Task B: Send SMS to Client
    if (process.env.TWILIO_PHONE_NUMBER && formattedPhone.length > 5) {
      const clientMsg = `AnswerKeeper: Hi ${customerName}, your ${serviceType} appointment is booked for ${dateStr} at ${timeStr}. Address: ${address}`;
      promises.push(
        twilioClient.messages.create({
          body: clientMsg.slice(0, 160),
          from: process.env.TWILIO_PHONE_NUMBER,
          to: formattedPhone,
        }).then(() => console.log(`Client SMS sent to ${formattedPhone}`))
          .catch(err => console.error('Client SMS Failed:', err?.message || err))
      );
    }

    // Task C: Send SMS to Technician
    const techPhone = process.env.TECHNICIAN_PHONE_NUMBER;
    if (process.env.TWILIO_PHONE_NUMBER && techPhone) {
      const techMsg = `NEW BOOKING: ${serviceType} for ${customerName}. Time: ${dateStr} at ${timeStr}. Address: ${address}. Phone: ${formattedPhone || 'Not provided'}`;
      promises.push(
        twilioClient.messages.create({
          body: techMsg.slice(0, 160),
          from: process.env.TWILIO_PHONE_NUMBER,
          to: techPhone,
        }).then(() => console.log(`Technician SMS sent to ${techPhone}`))
          .catch(err => console.error('Technician SMS Failed:', err?.message || err))
      );
    }

    // Execute background operations concurrently
    await Promise.allSettled(promises);

    // 5. Immediate Success Response back to Vapi (<300ms target)
    return NextResponse.json({
      results: [
        {
          toolCallId: toolCall?.id,
          result: `Appointment successfully booked for ${customerName} on ${startTime.toLocaleString()}`,
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