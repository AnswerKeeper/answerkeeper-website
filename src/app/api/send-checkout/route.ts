import { NextResponse } from 'next/server';
import twilio from 'twilio';

function formatE164(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  if (cleaned.length === 10) return `+1${cleaned}`;
  if (cleaned.length === 11 && cleaned.startsWith('1')) return `+${cleaned}`;
  return phone.startsWith('+') ? phone : `+${cleaned}`;
}

export async function POST(req: Request) {
  console.log("=== /api/send-checkout ROUTE HIT ===");
  try {
    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const twilioNumber = process.env.TWILIO_TOLL_FREE_NUMBER || process.env.TWILIO_MESSAGING_NUMBER || '+18665788768';

    if (!accountSid || !authToken) {
      console.error('Missing Twilio credentials');
      return NextResponse.json({ error: 'Missing Twilio credentials' }, { status: 500 });
    }

    const client = twilio(accountSid, authToken);
    const body = await req.json();

    const args = body.message?.toolCalls?.[0]?.function?.arguments || {};
    const callerNumber = body.message?.call?.customer?.number;
    const rawRecipient = args.recipient_number || args.phone_number || callerNumber;

    if (!rawRecipient) {
      return NextResponse.json({ error: 'Missing phone number' }, { status: 400 });
    }

    const recipient = formatE164(rawRecipient);
    const name = args.customer_name || 'Contractor';
    
    // Check if the request is specifically for a free trial
    const isFreeTrial = args.is_free_trial || args.plan_type === 'trial' || args.request_type === 'trial';

    const tallyFormUrl = 'https://tally.so/r/D49rpE';
    const paddleCheckoutUrl = 'https://answerkeeper.app/checkout';

    const targetUrl = isFreeTrial ? tallyFormUrl : paddleCheckoutUrl;
    const messageBody = isFreeTrial
      ? `Hi ${name}, here is your link to start your 14-day free trial (no card required): ${targetUrl} - AnswerKeeper`
      : `Hi ${name}, here is your activation link to complete enrollment: ${targetUrl} - AnswerKeeper`;

    const message = await client.messages.create({
      body: messageBody,
      from: twilioNumber,
      to: recipient,
    });

    console.log(`SMS Sent (${isFreeTrial ? 'Trial' : 'Paid'}) SID: ${message.sid} To: ${recipient}`);

    return NextResponse.json({
      results: [{ result: `Link sent successfully via SMS to ${recipient}. SID: ${message.sid}` }],
    });
  } catch (error: any) {
    console.error('Twilio Execution Error:', error);
    return NextResponse.json({ error: error.message || 'Failed to send SMS' }, { status: 500 });
  }
}