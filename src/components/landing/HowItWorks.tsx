const steps = [
  {
    number: "01",
    title: "Forward your business line",
    description:
      "Connect your existing plumbing number in minutes. Missed and after-hours calls route to AnswerKeeper automatically.",
  },
  {
    number: "02",
    title: "AI answers like your shop",
    description:
      "Callers hear a professional greeting, get asked the right questions, and receive clear next steps—no robotic dead ends.",
  },
  {
    number: "03",
    title: "You get the job details instantly",
    description:
      "Emergencies trigger SMS alerts. Appointments land on your calendar. Every lead is ready for your tech to take over.",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            How it works
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Up and running in three simple steps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            No new hardware. No complicated phone system. Just more answered
            calls and booked jobs.
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
                className="relative rounded-2xl border border-border bg-surface p-6 text-center md:bg-white md:text-left"
              >
                <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue font-[family-name:var(--font-outfit)] text-sm font-bold text-white shadow-md shadow-blue/25 md:mx-0">
                  {step.number}
                </span>
                <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-lg font-semibold text-navy">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
