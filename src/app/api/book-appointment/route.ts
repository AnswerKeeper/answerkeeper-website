import { NextResponse } from "next/server";
import { google } from "googleapis";
import { createClient } from "@supabase/supabase-js";

// Initialize Supabase admin client
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // Extract arguments from Vapi function call, tool call, or raw payload
    const args =
      payload.message?.functionCall?.parameters ||
      payload.message?.toolCalls?.[0]?.function?.arguments ||
      payload;

    const {
      callerName,
      serviceType,
      appointmentTime,
      serviceAddress,
      callbackNumber,
      clientId = "default",
    } = args;

    if (!appointmentTime) {
      return NextResponse.json({
        success: false,
        message: "Appointment time is required.",
      });
    }

    // 1. Fetch client credentials from Supabase
    const { data: client, error: dbError } = await supabase
      .from("clients")
      .select("*")
      .eq("client_id", clientId)
      .single();

    if (dbError || !client) {
      return NextResponse.json({
        success: false,
        message: `Client credentials not found for client_id: ${clientId}`,
      });
    }

    // 2. Format private key properly to avoid OpenSSL decoder errors
    const formattedPrivateKey = client.private_key
      .replace(/^"|"$/g, "")
      .replace(/\\n/g, "\n");

    // 3. Authenticate with Google Calendar
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: client.client_email,
        private_key: formattedPrivateKey,
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // 4. Calculate start and end times (default 30-minute duration)
    const startIso = new Date(appointmentTime).toISOString();
    const endIso = new Date(
      new Date(appointmentTime).getTime() + 30 * 60000
    ).toISOString();

    // 5. Build event object
    const event = {
      summary: `${serviceType || "Appointment"} - ${callerName || "Customer"}`,
      description: `Phone: ${callbackNumber || "N/A"}\nAddress: ${serviceAddress || "N/A"}`,
      start: { dateTime: startIso },
      end: { dateTime: endIso },
    };

    // 6. Insert event into Google Calendar
    const calendarResponse = await calendar.events.insert({
      calendarId: client.calendar_id,
      requestBody: event,
    });

    return NextResponse.json({
      success: true,
      message: "Appointment booked successfully.",
      eventId: calendarResponse.data.id,
    });
  } catch (err: any) {
    console.error("Booking Error:", err);
    return NextResponse.json({
      success: false,
      error: err.message || "Failed to book appointment.",
    });
  }
}