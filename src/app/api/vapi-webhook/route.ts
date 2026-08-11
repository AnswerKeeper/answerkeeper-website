import { NextResponse } from "next/server";
import { google } from "googleapis";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const message = body.message;

    console.log("Incoming Vapi Message Type:", message?.type);

    // Handle tool-calls or function-call payload types
    if (message?.type === "tool-calls" || message?.type === "function-call") {
      const toolCall = message.toolCalls?.[0];
      const toolCallId = toolCall?.id || message.toolCallId || "call_default";

      // Extract function name and raw arguments
      const functionName =
        toolCall?.function?.name || message.functionCall?.name;
      let rawArgs =
        toolCall?.function?.arguments || message.functionCall?.parameters || {};

      // If Vapi sent arguments as a stringified JSON string, parse it
      if (typeof rawArgs === "string") {
        try {
          rawArgs = JSON.parse(rawArgs);
        } catch (e) {
          console.error("Failed to parse tool call arguments string:", e);
        }
      }

      console.log(`Executing Function: ${functionName}`, rawArgs);

      if (functionName === "book_appointment") {
        const {
          callerName,
          serviceType,
          appointmentTime,
          serviceAddress,
          callbackNumber,
          clientId = "default",
        } = rawArgs;

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

        // Fetch client credentials from Supabase
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
                result: `Failed: Could not find credentials for client ${clientId}.`,
              },
            ],
          });
        }

        // Format private key
        const formattedPrivateKey = client.private_key
          .replace(/^"|"$/g, "")
          .replace(/\\n/g, "\n");

        // Authenticate Google Calendar
        const auth = new google.auth.GoogleAuth({
          credentials: {
            client_email: client.client_email,
            private_key: formattedPrivateKey,
          },
          scopes: ["https://www.googleapis.com/auth/calendar"],
        });

        const calendar = google.calendar({ version: "v3", auth });

        // Calculate start and end times
        const startIso = new Date(appointmentTime).toISOString();
        const endIso = new Date(
          new Date(appointmentTime).getTime() + 30 * 60000
        ).toISOString();

        // Insert event into Google Calendar
        await calendar.events.insert({
          calendarId: client.calendar_id,
          requestBody: {
            summary: `${serviceType || "Appointment"} - ${callerName || "Customer"}`,
            description: `Phone: ${callbackNumber || "N/A"}\nAddress: ${serviceAddress || "N/A"}`,
            start: { dateTime: startIso },
            end: { dateTime: endIso },
          },
        });

        console.log("Successfully inserted event into Google Calendar.");

        return NextResponse.json({
          results: [
            {
              toolCallId,
              result: `Success! The appointment for ${callerName || "the caller"} has been booked for ${startIso}.`,
            },
          ],
        });
      }
    }

    return NextResponse.json({ status: "ignored" });
  } catch (err: any) {
    console.error("Vapi Webhook Error:", err);
    return NextResponse.json(
      { error: err.message || "Internal Server Error" },
      { status: 500 }
    );
  }
}