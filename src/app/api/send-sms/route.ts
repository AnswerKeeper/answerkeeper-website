import { NextResponse } from 'next/server';
import twilio from 'twilio';

function formatE164(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) return `+1${cleaned}`;
  if (cleaned.length === 11 && cleaned.startsWith('1')) return `+${cleaned}`;
  return phone.startsWith('+') ? phone : `+${cleaned}`;
}

export async function POST(req: Request) {
  console.log("=== /api/send-sms ROUTE HIT ===");
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_TOLL_FREE_NUMBER || process.env.TWILIO_MESSAGING_NUMBER || '+18665788768';

    if (!accountSid || !authToken) {
      console.error('Missing Twilio credentials in environment variables');
      return NextResponse.json({ error: 'Missing Twilio credentials' }, { status: 500 });
    }

    const client = twilio(accountSid, authToken);
    const body = await req.json();
    console.log("Incoming Payload:", JSON.stringify(body, null, 2));

    const args = body.message?.toolCalls?.[0]?.function?.arguments || {};
    const callerNumber = body.message?.call?.customer?.number;
    const rawRecipient = args.recipient_number || callerNumber;

    if (!rawRecipient) {
      console.error('No recipient number found in payload');
      return NextResponse.json({ error: 'Missing phone number' }, { status: 400 });
    }

    const recipient = formatE164(rawRecipient);
    const name = args.customer_name || 'Customer';
    const issue = args.issue_description || 'Service Request';
    const address = args.service_address || 'Provided address';

    const message = await client.messages.create({
      body: `Hi ${name}, your dispatch request for "${issue}" at ${address} has been confirmed. A technician will reach out shortly. - AnswerKeeper`,
      from: twilioNumber,
      to: recipient,
    });

    console.log(`Twilio Message Sent Successfully! SID: ${message.sid} To: ${recipient}`);

    return NextResponse.json({
      results: [{ result: `SMS confirmation dispatched successfully to ${recipient}. SID: ${message.sid}` }],
    });
  } catch (error: any) {
    console.error('Twilio Execution Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send SMS' }, { status: 500 });
  }
}