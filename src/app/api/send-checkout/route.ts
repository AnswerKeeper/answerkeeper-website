import { NextResponse } from 'next/server';
import twilio from 'twilio';

function formatE164(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  // Standard US 10-digit
  if (cleaned.length === 10) return `+1${cleaned}`;
  // Standard US 11-digit starting with 1
  if (cleaned.length === 11 && cleaned.startsWith('1')) return `+${cleaned}`;
  // International numbers (e.g. +234...)
  return phone.startsWith('+') ? phone : `+${cleaned}`;
}

export async function POST(req: Request) {
  console.log("=== /api/send-checkout ROUTE HIT ===");
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
    console.log("Incoming Checkout Payload:", JSON.stringify(body, null, 2));

    const args = body.message?.toolCalls?.[0]?.function?.arguments || {};
    const callerNumber = body.message?.call?.customer?.number;

    // Fall back to caller ID if recipient_number is missing or prompt-passed as empty
    const rawRecipient = args.recipient_number || args.phone_number || callerNumber;

    if (!rawRecipient) {
      console.error('No recipient phone number found in payload');
      return NextResponse.json({ error: 'Missing phone number' }, { status: 400 });
    }

    const recipient = formatE164(rawRecipient);
    const name = args.customer_name || 'Contractor';
    const checkoutUrl = 'https://answerkeeper.app/checkout'; // Replace with your actual Stripe or payment link

    const message = await client.messages.create({
      body: `Hi ${name}, here is your AnswerKeeper activation link: ${checkoutUrl} — Complete enrollment to start your 14-day free trial!`,
      from: twilioNumber,
      to: recipient,
    });

    console.log(`Checkout SMS Sent Successfully! SID: ${message.sid} To: ${recipient}`);

    return NextResponse.json({
      results: [{ result: `Activation checkout link sent successfully via SMS to ${recipient}. SID: ${message.sid}` }],
    });
  } catch (error: any) {
    console.error('Twilio Execution Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send checkout SMS' }, { status: 500 });
  }
}