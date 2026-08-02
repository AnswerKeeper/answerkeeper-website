import { PhoneMissed, Clock, Wrench } from "lucide-react";

const problems = [
  {
    icon: PhoneMissed,
    title: "Customers Don't Wait",
description:
  "When no one answers, most homeowners immediately call another plumbing or HVAC company. Every missed call creates an opportunity for a competitor."
  },
  {
    icon: Clock,
    title: "Emergency Jobs Happen Anytime",
description:
  "Burst pipes, broken air conditioners, and urgent repairs don't wait for office hours. Customers need help immediately, not voicemail."
  },
  {
    icon: Wrench,
    title: "You Can't Be in Two Places at Once",
description:
  "While you're helping one customer, new calls continue to come in. Constant interruptions reduce productivity, while missed calls reduce revenue."
  },
];

export function Problem() {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
          Why Businesses Miss Customers
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
          Every Missed Call Is a Missed Opportunity
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
          Great service doesn't matter if customers can't reach you. For plumbing and HVAC businesses, every unanswered call can become a lost appointment, a lost emergency job, or a customer who hires someone else.
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
