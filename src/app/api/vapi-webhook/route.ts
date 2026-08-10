import { NextResponse } from "next/server";
import { google } from "googleapis";
import twilio from "twilio";

const twilioClient = twilio(
  process.env.TWILIO_ACCOUNT_SID,
  process.env.TWILIO_AUTH_TOKEN
);

const calendarAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth: calendarAuth });

const CLIENT_CONFIGS: Record<string, { ownerMobile: string; calendarId: string; name: string }> = {
  "+17246704030": {
    ownerMobile: process.env.NOTIFICATION_MOBILE || "+2348132531208",
    calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
    name: "Pittsburgh Plumbing & HVAC",
  },
};

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const messageType = payload.message?.type;

    if (messageType === "end-of-call-report") {
      const call = payload.message?.call || {};
      const analysis = payload.message?.analysis || {};
      const structuredData = analysis.structuredData || {};

      const customerNumber = call.customer?.number || "Unknown Caller";
      const dialedNumber = call.phoneNumber?.number || "+17246704030";
      const summary = analysis.summary || "No call summary provided.";
      
      const client = CLIENT_CONFIGS[dialedNumber] || CLIENT_CONFIGS["+17246704030"];

      const isEmergency = Boolean(structuredData.isEmergency);
      const appointmentTime = structuredData.appointmentTime 
        ? new Date(structuredData.appointmentTime) 
        : new Date(Date.now() + 3600 * 1000);

      if (isEmergency) {
        await twilioClient.messages.create({
          body: `?? EMERGENCY CALL ALERT [${client.name}]\nFrom: ${customerNumber}\nSummary: ${summary}`,
          from: process.env.TWILIO_PHONE_NUMBER,
          to: client.ownerMobile,
        });
      }

      const startTime = appointmentTime.toISOString();
      const endTime = new Date(appointmentTime.getTime() + 60 * 60 * 1000).toISOString();

      await calendar.events.insert({
        calendarId: client.calendarId,
        requestBody: {
          summary: `${isEmergency ? "?? EMERGENCY: " : "Standard Intake: "} Customer ${customerNumber}`,
          description: `Customer Phone: ${customerNumber}\nSummary: ${summary}`,
          start: { dateTime: startTime },
          end: { dateTime: endTime },
        },
      });

      return NextResponse.json({ status: "success" }, { status: 200 });
    }

    return NextResponse.json({ status: "ignored" }, { status: 200 });
  } catch (error: any) {
    console.error("Vapi Webhook Error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
