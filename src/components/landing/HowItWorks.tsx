import { Phone, Siren, ClipboardCheck, BellRing } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Unanswered Call Directs to AnswerKeeper",
    description:
      "When your team is on a job or unable to answer, the incoming call forwards automatically so no potential customer hits voicemail or hangs up.",
    icon: Phone,
  },
  {
    number: "02",
    title: "Emergency & Job Details Gathered",
    description:
      "AnswerKeeper collects essential job information, identifies urgent HVAC or plumbing emergencies, and captures complete customer contact details.",
    icon: Siren,
  },
  {
    number: "03",
    title: "Service Request Organized",
    description:
      "The request details are structured into a clean job summary, ensuring critical emergency details are prioritized accurately.",
    icon: ClipboardCheck,
  },
  {
    number: "04",
    title: "Technicians Notified Instantly",
    description:
      "Your team receives prompt alerts with all gathered job details, keeping your technicians informed without disrupting active jobs.",
    icon: BellRing,
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden border-t border-border bg-white py-20 sm:py-28">
      
      {/* Pink & Purple Diagonal Wave Gradient Background */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0 opacity-40"
      >
        {/* Pink Glow - Bottom Left */}
        <div className="absolute -bottom-24 -left-20 h-[550px] w-[700px] rotate-[-18deg] rounded-full bg-gradient-to-tr from-pink-600 via-rose-500 to-pink-400 opacity-30 blur-[90px]" />

        {/* Purple / Blue Iris Ribbon - Center to Top Right */}
        <div className="absolute -top-20 -right-20 h-[650px] w-[850px] rotate-[-25deg] rounded-full bg-gradient-to-bl from-purple-600 via-[#5A4FCF] to-indigo-400 opacity-25 blur-[100px]" />

        {/* Diagonal Line Pattern Overlay */}
        <div
          className="absolute inset-0 opacity-15"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #5A4FCF,
              #5A4FCF 1px,
              transparent 1px,
              transparent 12px
            )`,
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-[#5A4FCF]">
            How It Works
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Seamless Call Handling for Busy Contractors
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            From unanswered calls to rapid dispatch, AnswerKeeper keeps your operations running effortlessly.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step) => (
            <article
              key={step.number}
              className="group relative rounded-2xl border border-border/80 bg-white/90 p-6 shadow-sm backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#5A4FCF]/40 hover:bg-white hover:shadow-xl hover:shadow-[#5A4FCF]/10 cursor-pointer"
            >
              <div className="flex items-center justify-between">
                <span className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-[#5A4FCF]/30 transition-colors duration-300 group-hover:text-[#5A4FCF]">
                  {step.number}
                </span>
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#5A4FCF]/10 text-[#5A4FCF] transition-colors duration-300 group-hover:bg-[#5A4FCF] group-hover:text-white">
                  <step.icon size={18} strokeWidth={1.75} />
                </div>
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-lg font-semibold text-navy">
                {step.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}