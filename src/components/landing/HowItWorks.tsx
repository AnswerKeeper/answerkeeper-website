const steps = [
  {
    number: "01",
    title: "Connect Your Business Number",
description:
  "Keep the phone number your customers already know. Incoming calls are routed to AnswerKeeper whenever your team can't answer."
  },
  {
    number: "02",
    title: "Every Customer Gets a Professional Response",
description:
  "AnswerKeeper greets callers, collects the information you need, identifies urgent service requests, and keeps the conversation professional from start to finish."
  },
  {
    number: "03",
    title: "Your Team Takes It From There",
description:
  "Service requests, customer details, and appointment information are delivered to your team so they can respond quickly and stay focused on serving customers."
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
          How AnswerKeeper Works
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          From Customer Call to Booked Job in Minutes
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
          Getting started is simple. Keep your existing business number while AnswerKeeper helps you answer every customer, capture service requests, and keep your technicians informed.
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
