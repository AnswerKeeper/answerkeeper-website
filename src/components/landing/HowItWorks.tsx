const steps = [
  {
    number: "01",
    title: "30-Second Setup",
    description: (
      <>
        Turn on conditional call forwarding on your existing line (
        <code className="rounded bg-blue-50 px-1.5 py-0.5 font-mono text-xs font-semibold text-blue border border-blue-200">
          *71
        </code>
        ). No new phone numbers or complex migration required.
      </>
    ),
  },
  {
    number: "02",
    title: "Smart Triage & Detail Capture",
    description:
      "AnswerKeeper greets the caller on the 3rd ring, assesses urgency (Active Leak / No Heat vs. Routine Call), and collects all property and job details automatically.",
  },
  {
    number: "03",
    title: "Calendar Booking & Emergency Alert",
    description:
      "Standard service calls get booked directly on your Google Calendar. Urgent emergency calls trigger an immediate SMS alert straight to your cell phone.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            3 Frictionless Steps
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            How AnswerKeeper Works
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            Keep your existing business number while AnswerKeeper triages emergencies, captures job details, and fills your dispatch schedule automatically.
          </p>
        </div>

        <div className="relative mt-14">
          <div
            aria-hidden
            className="pointer-events-none absolute left-[16%] right-[16%] top-10 hidden h-px bg-gradient-to-r from-transparent via-blue-mid to-transparent md:block"
          />
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <li
                key={step.number}
                className="relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 text-center md:bg-white md:text-left transition hover:border-blue-mid hover:shadow-sm"
              >
                <div>
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue font-[family-name:var(--font-outfit)] text-sm font-bold text-white shadow-md shadow-blue/25 md:mx-0">
                    {step.number}
                  </span>
                  <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-lg font-semibold text-navy">
                    {step.title}
                  </h3>
                  <div className="mt-2 text-sm leading-relaxed text-navy-muted">
                    {step.description}
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}