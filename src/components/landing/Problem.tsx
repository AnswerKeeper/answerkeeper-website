import { AlertTriangle, ShieldAlert, CheckCircle2 } from "lucide-react";

const problems = [
  {
    icon: AlertTriangle,
    title: "The Problem",
    badge: "Lost Revenue",
    badgeStyle: "bg-red-500/10 text-red-400 border-red-500/30",
    description:
      "Most homeowners with a burst pipe or broken AC won't leave a voicemail—they hang up and immediately call the next shop on Google.",
  },
  {
    icon: ShieldAlert,
    title: "The Friction",
    badge: "Job Site Reality",
    badgeStyle: "bg-amber-500/10 text-amber-400 border-amber-500/30",
    description:
      "You can't answer the phone safely while driving, under a sink, or up in an attic working on a complex service job.",
  },
  {
    icon: CheckCircle2,
    title: "The AnswerKeeper Fix",
    badge: "24/7 Dispatch",
    badgeStyle: "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
    description:
      "Our custom system steps in on the 3rd ring to triage emergencies, collect job details, and handle dispatch for you.",
  },
];

export function Problem() {
  return (
    <section className="relative overflow-hidden border-t border-slate-800 bg-slate-950 py-20 text-white sm:py-28">
      
      {/* Darkened Wave Glows & High-Contrast Strike Line Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-80"
      >
        {/* Dark Deep Magenta/Pink Glow - Bottom Left */}
        <div className="absolute -bottom-28 -left-20 h-[600px] w-[750px] rotate-[-18deg] rounded-full bg-gradient-to-tr from-pink-800/40 via-rose-700/25 to-transparent blur-[120px]" />

        {/* Deep Blue Iris Glow - Top Right */}
        <div className="absolute -top-28 -right-20 h-[700px] w-[900px] rotate-[-25deg] rounded-full bg-gradient-to-bl from-purple-800/50 via-[#5A4FCF]/35 to-transparent blur-[130px]" />

        {/* Bold Diagonal Strike Line Texture */}
        <div
          className="absolute inset-0 opacity-25"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #5A4FCF,
              #5A4FCF 2px,
              transparent 2px,
              transparent 10px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#5A4FCF]">
            Built for the Job Site
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-slate-100 sm:text-4xl">
            When you’re under a sink or up in an attic, missed calls mean lost revenue.
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Stop losing high-value plumbing and HVAC leads to the competition just because your hands are full.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {problems.map((item) => (
            <article
              key={item.title}
              className="group relative flex flex-col justify-between rounded-2xl border border-slate-800/80 bg-slate-900/80 p-6 backdrop-blur-xl transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#5A4FCF]/60 hover:bg-slate-900 hover:shadow-2xl hover:shadow-[#5A4FCF]/20 cursor-pointer"
            >
              <div>
                <div className="flex items-center justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-800 text-[#5A4FCF] shadow-sm ring-1 ring-slate-700/80 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#5A4FCF] group-hover:text-white group-hover:ring-[#5A4FCF]">
                    <item.icon size={20} strokeWidth={1.75} />
                  </div>
                  <span className={`rounded-full border px-2.5 py-0.5 text-xs font-medium transition-transform duration-300 group-hover:scale-105 ${item.badgeStyle}`}>
                    {item.badge}
                  </span>
                </div>

                <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-lg font-semibold text-slate-100">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-300">
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