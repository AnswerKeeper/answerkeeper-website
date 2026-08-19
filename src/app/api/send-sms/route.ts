import { NextResponse } from 'next/server';
import twilio from 'twilio';

export async function POST(req: Request) {
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_TOLL_FREE_NUMBER || process.env.TWILIO_MESSAGING_NUMBER;

    if (!accountSid || !authToken || !twilioNumber) {
      console.error('Missing Twilio environment variables');
      return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
    }

    const client = twilio(accountSid, authToken);
    const body = await req.json();

    const args = body.message?.toolCalls?.[0]?.function?.arguments || {};
    const callerNumber = body.message?.call?.customer?.number;

    const recipient = args.recipient_number || callerNumber;
    const name = args.customer_name || 'Customer';
    const issue = args.issue_description || 'Service Request';
    const address = args.service_address || 'Provided address';

    if (!recipient) {
      return NextResponse.json({ error: 'Missing phone number' }, { status: 400 });
    }

    const message = await client.messages.create({
      body: `Hi ${name}, your dispatch request for "${issue}" at ${address} has been confirmed. A technician will reach out shortly. - AnswerKeeper`,
      from: twilioNumber,
      to: recipient,
    });

    return NextResponse.json({
      results: [{ result: `SMS confirmation dispatched successfully. SID: ${message.sid}` }],
    });
  } catch (error: any) {
    console.error('Error sending SMS:', error);
    return NextResponse.json({ error: error.message || 'Failed to send SMS' }, { status: 500 });
  }
}