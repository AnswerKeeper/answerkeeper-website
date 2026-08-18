Set-Content -Path "src\app\api\send-sms\route.ts" -Value @'
import { NextResponse } from 'next/server';
import twilio from 'twilio';

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_MESSAGING_NUMBER;

const client = twilio(accountSid, authToken);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // Extract parameters passed from Vapi
    const args = body.message?.toolCalls?.[0]?.function?.arguments || {};
    const callerNumber = body.message?.call?.customer?.number;

    const recipient = args.recipient_number || callerNumber;
    const name = args.customer_name || 'Customer';
    const issue = args.issue_description || 'Service Request';
    const address = args.service_address || 'Provided address';

    if (!recipient) {
      return NextResponse.json({ error: 'Missing phone number' }, { status: 400 });
    }

    // Send SMS via Twilio
    const message = await client.messages.create({
      body: `Hi ${name}, your dispatch request for "${issue}" at ${address} has been confirmed. A technician will reach out shortly. - AnswerKeeper`,
      from: twilioNumber,
      to: recipient,
    });

    console.log('SMS sent successfully, SID:', message.sid);

    return NextResponse.json({
      results: [{ result: 'SMS confirmation dispatched successfully.' }],
    });
  } catch (error: any) {
    console.error('Error sending SMS:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
'@