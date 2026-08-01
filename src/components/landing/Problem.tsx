import { PhoneMissed, Clock, Wrench } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Missed calls mean missed revenue",
    description:
      "When you’re under a sink or between jobs, every unanswered ring is a homeowner who books the next plumber on their list.",
  },
  {
    icon: Clock,
    title: "Emergencies don’t wait for business hours",
    description:
      "Burst pipes and flooded basements happen at 11 PM. If nobody picks up, that high-value job goes to whoever answers first.",
  },
  {
    icon: Wrench,
    title: "Answering while working slows you down",
    description:
      "Stopping mid-repair to take a call hurts the job in front of you—and still leaves the new lead without a clear next step.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            The problem
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Your phone rings while your hands are full
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            Plumbing shops lose jobs not because of skill—but because nobody was
            free to answer when the customer needed help.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6 transition hover:border-blue-mid hover:bg-blue-soft/30"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue shadow-sm ring-1 ring-border">
                <item.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-lg font-semibold text-navy">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
