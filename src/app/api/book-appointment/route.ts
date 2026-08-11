import { NextResponse } from "next/server";
import { google } from "googleapis";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // Support Vapi toolCalls, legacy functionCall, or flat payload
    const toolCall = payload.message?.toolCalls?.[0];
    const toolCallId = toolCall?.id || "call_default";

    const args =
      toolCall?.function?.arguments ||
      payload.message?.functionCall?.parameters ||
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
        results: [
          {
            toolCallId,
            result: "Failed: Appointment time was not provided.",
          },
        ],
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
        results: [
          {
            toolCallId,
            result: `Failed: Could not find client credentials for ${clientId}.`,
          },
        ],
      });
    }

    // 2. Format private key
    const formattedPrivateKey = client.private_key
      .replace(/^"|"$/g, "")
      .replace(/\\n/g, "\n");

    // 3. Authenticate Google Calendar
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: client.client_email,
        private_key: formattedPrivateKey,
      },
      scopes: ["https://www.googleapis.com/auth/calendar"],
    });

    const calendar = google.calendar({ version: "v3", auth });

    // 4. Set start and end times
    const startIso = new Date(appointmentTime).toISOString();
    const endIso = new Date(
      new Date(appointmentTime).getTime() + 30 * 60000
    ).toISOString();

    // 5. Build event
    const event = {
      summary: `${serviceType || "Appointment"} - ${callerName || "Customer"}`,
      description: `Phone: ${callbackNumber || "N/A"}\nAddress: ${serviceAddress || "N/A"}`,
      start: { dateTime: startIso },
      end: { dateTime: endIso },
    };

    // 6. Insert event
    await calendar.events.insert({
      calendarId: client.calendar_id,
      requestBody: event,
    });

    // 7. Return Vapi-compliant tool result
    return NextResponse.json({
      results: [
        {
          toolCallId,
          result: `Success! The appointment for ${callerName || "the caller"} has been booked for ${startIso}.`,
        },
      ],
    });
  } catch (err: any) {
    console.error("Booking Error:", err);
    return NextResponse.json({
      results: [
        {
          toolCallId: "call_error",
          result: `Error booking appointment: ${err.message}`,
        },
      ],
    });
  }
}