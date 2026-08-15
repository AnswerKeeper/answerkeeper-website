import { AlertTriangle, ShieldAlert, CheckCircle2 } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "The Problem",
    badge: "Lost Revenue",
    badgeStyle: "bg-red-50 text-red-600 border-red-200",
    description:
      "Most homeowners with a burst pipe or broken AC won't leave a voicemail—they hang up and immediately call the next shop on Google.",
  },
  {
    icon: ShieldAlert,
    title: "The Friction",
    badge: "Job Site Reality",
    badgeStyle: "bg-amber-50 text-amber-600 border-amber-200",
    description:
      "You can't answer the phone safely while driving, under a sink, or up in an attic working on a complex service job.",
  },
  {
    icon: CheckCircle2,
    title: "The AnswerKeeper Fix",
    badge: "24/7 Dispatch",
    badgeStyle: "bg-emerald-50 text-emerald-600 border-emerald-200",
    description:
      "Our custom system steps in on the 3rd ring to triage emergencies, collect job details, and handle dispatch for you.",
  },
];

export function Problem() {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Built for the Job Site
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            When you’re under a sink or up in an attic, missed calls mean lost revenue.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            Stop losing high-value plumbing and HVAC leads to the competition just because your hands are full.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-border bg-surface p-6 transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue-mid hover:bg-blue-soft/30 hover:shadow-xl hover:shadow-blue/5 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white text-blue shadow-sm ring-1 ring-border transition-all duration-300 group-hover:scale-105 group-hover:border-blue/30 group-hover:shadow-md">
                    <item.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium transition-transform duration-300 group-hover:scale-105 ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-lg font-semibold text-navy">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {item.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}