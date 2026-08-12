export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    
    // Vapi sends arguments as a JSON string
    const toolCall = body.message?.toolCalls?.[0];
    let args;
    try {
      // Parse the string into an actual object
      args = JSON.parse(toolCall?.function?.arguments || '{}');
    } catch (e) {
      args = body; // Fallback
    }

    const {
      customerName = 'Valued Customer',
      customerPhone = '',
      serviceType = 'Service Call',
      address = 'Not provided',
      appointmentTime
    } = args;

    // ... (keep your existing Twilio and Auth logic) ...

    // FORCE date parsing: Do not use new Date(appointmentTime) which relies on server local time.
    // If appointmentTime is "2026-08-13T13:00:00-04:00", we parse it as a Date object.
    const startTime = new Date(appointmentTime);
    const endTime = new Date(startTime.getTime() + 30 * 60 * 1000);

    // Explicitly convert to ISOString for Google
    // Google Calendar API accepts RFC3339 format (ISO 8601)
    await calendar.events.insert({
      calendarId: process.env.GOOGLE_CALENDAR_ID,
      requestBody: {
        summary: `${serviceType} - ${customerName}`,
        description: `Phone: ${customerPhone}\nAddress: ${address}`,
        start: { dateTime: startTime.toISOString() },
        end: { dateTime: endTime.toISOString() },
      },
    });

    // ...
