import { DollarSign, Moon, ShieldCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Book more high-value jobs",
    description:
      "Emergency and after-hours calls are often your most profitable work. AnswerKeeper keeps those conversations from going cold.",
  },
  {
    icon: Moon,
    title: "Cover nights without overtime",
    description:
      "Stop paying someone to sit by the phone after dark. Your line stays covered while your team rests for the next job.",
  },
  {
    icon: ShieldCheck,
    title: "Never leave a caller hanging",
    description:
      "Homeowners get clear answers, booking options, and confirmation—building trust before your truck even arrives.",
  },
  {
    icon: Users,
    title: "Free your techs to do the work",
    description:
      "Less phone tag between jobs means faster completions, happier crews, and a shop that scales without chaos.",
  },
];

export function Benefits() {
  return (
    <section id="benefits" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wider text-blue">
              Benefits
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
              More jobs booked. Less time chained to the phone.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
              AnswerKeeper turns every ring into a captured opportunity—so your
              plumbing business grows even when you’re elbows-deep in a repair.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.title}
                className="rounded-2xl border border-border bg-white p-5 transition hover:border-blue-mid"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-soft text-blue">
                  <benefit.icon size={18} strokeWidth={1.75} />
                </div>
                <h3 className="mt-4 font-[family-name:var(--font-outfit)] text-base font-semibold text-navy">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
