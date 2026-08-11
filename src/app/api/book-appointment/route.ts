import { NextResponse } from "next/server";
import { google } from "googleapis";

const calendarAuth = new google.auth.GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_CLIENT_EMAIL,
    private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/calendar"],
});

const calendar = google.calendar({ version: "v3", auth: calendarAuth });

export async function POST(req: Request) {
  try {
    const payload = await req.json();
    const args = payload.message?.functionCall?.parameters || payload;
    
    const { callerName, serviceType, appointmentTime, serviceAddress, callbackNumber } = args;

    if (!appointmentTime) {
      return NextResponse.json({ success: false, message: "Appointment time is required." });
    }

    const start = new Date(appointmentTime);
    const end = new Date(start.getTime() + 60 * 60 * 1000);

    const event = await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
      requestBody: {
        summary: `${serviceType || "Service Request"} - ${callerName || "Customer"}`,
        description: `Customer: ${callerName || "N/A"}\nPhone: ${callbackNumber || "N/A"}\nAddress: ${serviceAddress || "N/A"}`,
        start: { dateTime: start.toISOString() },
        end: { dateTime: end.toISOString() },
      },
    });

    return NextResponse.json({
      result: {
        success: true,
        eventId: event.data.id,
        message: `Appointment successfully booked on calendar for ${start.toLocaleString()}.`
      }
    });
  } catch (error: any) {
    console.error("Booking Error:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 200 });
  }
}
