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

    // Diagnostic log to catch full Vapi payload structure in Vercel logs
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
      '';

    // Support all parameter naming conventions
    const customerName = args.customerName || args.callerName || 'Valued Customer';
    const customerPhone = args.customerPhone || args.callbackNumber || extractedCallerPhone;
    const address = args.address || args.serviceAddress || 'Not provided';
    const serviceType = args.serviceType || 'Service Call';
    const appointmentTime = args.appointmentTime;

    // 2. Format phone number to safe E.164
    const rawPhone = String(customerPhone);
    const cleaned = rawPhone.replace(/[^\d+]/g, '');
    const formattedPhone = cleaned ? (cleaned.startsWith('+') ? cleaned : `+${cleaned}`) : '';

    // 3. Format Google Private Key
    let rawKey = process.env.GOOGLE_PRIVATE_KEY || '';
    if (rawKey.startsWith('"') && rawKey.endsWith('"')) {
      rawKey = rawKey.slice(1, -1);
    }
    const privateKey = rawKey.replace(/\\n/g, '\n');

    // 4. Authenticate Google Calendar API
    const auth = new google.auth.JWT({
      email: process.env.GOOGLE_CLIENT_EMAIL,
      key: privateKey,
      scopes: ['https://www.googleapis.com/auth/calendar'],
    });

    const calendar = google.calendar({ version: 'v3', auth });

    // 5. Parse Appointment Time & Duration
    const startTime = appointmentTime ? new Date(appointmentTime) : new Date();
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

    // 6. Insert Event into Google Calendar
    await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: {
        summary: `${serviceType} - ${customerName}`,
        description: `Phone: ${formattedPhone || 'Not provided'}\nAddress: ${address}`,
        start: { 
          dateTime: startTime.toISOString(),
          timeZone: 'America/New_York'
        },
        end: { 
          dateTime: endTime.toISOString(),
          timeZone: 'America/New_York'
        },
      },
    });

    // 7. Send Twilio SMS Notifications (Dual Dispatch: Client & Technician)
    if (process.env.TWILIO_PHONE_NUMBER) {
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

      // A. Send SMS to Client/Caller
      if (formattedPhone.length > 5) {
        try {
          const clientMsg = `AnswerKeeper: Hi ${customerName}, your ${serviceType} appointment is booked for ${dateStr} at ${timeStr}. Address: ${address}`;
          await twilioClient.messages.create({
            body: clientMsg.slice(0, 160),
            from: process.env.TWILIO_PHONE_NUMBER,
            to: formattedPhone,
          });
          console.log(`Client SMS successfully sent to ${formattedPhone}`);
        } catch (smsErr: any) {
          console.error('Client Twilio SMS Failed:', smsErr?.message || smsErr);
        }
      } else {
        console.warn('Skipped Client SMS: No valid caller phone detected.');
      }

      // B. Send SMS to Technician/Owner (if TECHNICIAN_PHONE_NUMBER env variable exists)
      const techPhone = process.env.TECHNICIAN_PHONE_NUMBER;
      if (techPhone) {
        try {
          const techMsg = `NEW BOOKING: ${serviceType} for ${customerName}. Time: ${dateStr} at ${timeStr}. Address: ${address}. Phone: ${formattedPhone || 'Not provided'}`;
          await twilioClient.messages.create({
            body: techMsg.slice(0, 160),
            from: process.env.TWILIO_PHONE_NUMBER,
            to: techPhone,
          });
          console.log(`Technician SMS successfully sent to ${techPhone}`);
        } catch (techSmsErr: any) {
          console.error('Technician Twilio SMS Failed:', techSmsErr?.message || techSmsErr);
        }
      }
    }

    // 8. Return Success to Vapi
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