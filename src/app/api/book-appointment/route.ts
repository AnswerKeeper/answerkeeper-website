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

    // Support both parameter naming conventions (Vapi Schema vs Custom backend)
    const customerName = args.customerName || args.callerName || 'Valued Customer';
    const customerPhone = args.customerPhone || args.callbackNumber || '';
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
        start: { dateTime: startTime.toISOString() },
        end: { dateTime: endTime.toISOString() },
      },
    });

    // 7. Send Twilio SMS Notification
    if (process.env.TWILIO_PHONE_NUMBER && formattedPhone.length > 5) {
      try {
        // Format a short, single-segment message (under 160 chars)
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

        const smsMessage = `AnswerKeeper: Hi ${customerName}, your ${serviceType} appointment is booked for ${dateStr} at ${timeStr}. Address: ${address}`;

        await twilioClient.messages.create({
          body: smsMessage.slice(0, 160), // Hard cap to guarantee 1 segment
          from: process.env.TWILIO_PHONE_NUMBER,
          to: formattedPhone,
        });
        console.log(`SMS successfully queued for ${formattedPhone}`);
      } catch (smsErr: any) {
        console.error('Twilio SMS Error:', smsErr?.message || smsErr);
      }
    }
