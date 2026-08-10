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
    
    const requestedIsoTime = args.appointmentTime;
    if (!requestedIsoTime) {
      return NextResponse.json({ available: true, message: "Time slot is available." });
    }

    const start = new Date(requestedIsoTime);
    const end = new Date(start.getTime() + 60 * 60 * 1000); // 1-hour window

    const eventsResponse = await calendar.events.list({
      calendarId: process.env.GOOGLE_CALENDAR_ID || "primary",
      timeMin: start.toISOString(),
      timeMax: end.toISOString(),
      singleEvents: true,
    });

    const conflicts = eventsResponse.data.items || [];
    const isAvailable = conflicts.length === 0;

    return NextResponse.json({
      result: {
        available: isAvailable,
        requestedTime: start.toISOString(),
        message: isAvailable 
          ? "The requested time slot is completely open." 
          : "That time slot is already booked. Please ask the customer for an alternative time."
      }
    });
  } catch (error: any) {
    console.error("Availability Check Error:", error);
    return NextResponse.json({ available: true, error: error.message }, { status: 200 });
  }
}