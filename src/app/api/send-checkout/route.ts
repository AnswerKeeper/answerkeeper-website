import { NextResponse } from 'next/server';
import twilio from 'twilio';

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parameters = body.message?.functionCall?.parameters;

    if (!parameters) {
      return NextResponse.json({ error: 'Missing parameters' }, { status: 400 });
    }

    const { customerName, recipient } = parameters;

    // Direct link to your live pricing page
    const checkoutUrl = 'https://www.answerkeeper.app/pricing';
    const messageBody = `Hi ${customerName}! Here is the link to complete your enrollment for AnswerKeeper ($149/mo): ${checkoutUrl}`;

    // Send via Twilio Verified Toll-Free sender
    await twilioClient.messages.create({
      body: messageBody,
      from: process.env.TWILIO_TOLL_FREE_NUMBER,
      to: recipient,
    });

    return NextResponse.json({
      results: [
        {
          toolCallId: body.message.functionCall.id,
          result: `Subscription link sent successfully to ${recipient}.`
        }
      ]
    });

  } catch (error) {
    console.error('Error in send-checkout webhook:', error);
    return NextResponse.json({ error: 'Failed to send subscription link' }, { status: 500 });
  }
}
