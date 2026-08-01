import {
  PhoneCall,
  Siren,
  MessageSquareText,
  CalendarCheck,
  ClipboardList,
  HardHat,
  type LucideIcon,
} from "lucide-react";

const features: {
  icon: LucideIcon;
  title: string;
  description: string;
}[] = [
  {
    icon: PhoneCall,
    title: "24/7 Call Answering",
    description:
      "Every call gets a professional answer—nights, weekends, and holidays—so homeowners never hit voicemail when they need a plumber.",
  },
  {
    icon: Siren,
    title: "Emergency Call Detection",
    description:
      "AnswerKeeper recognizes urgent language like “flooding,” “no water,” or “gas smell,” then prioritizes the lead for immediate follow-up.",
  },
  {
    icon: MessageSquareText,
    title: "Instant SMS Alerts",
    description:
      "The moment a job is captured, your on-call tech gets a text with the caller, address, issue, and urgency—before the customer hangs up.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Scheduling",
    description:
      "Book diagnostics, repairs, and service windows directly into your calendar while the customer is still on the line.",
  },
  {
    icon: ClipboardList,
    title: "Lead Capture",
    description:
      "Name, phone, address, problem details, and preferred timing are logged automatically—no sticky notes, no forgotten callbacks.",
  },
  {
    icon: HardHat,
    title: "Works While You're Busy",
    description:
      "Stay focused on the job in front of you. AnswerKeeper handles the phone so you don’t lose the next one.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Features
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Built for plumbing shops that can&apos;t afford a missed ring
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            Everything you need to answer, qualify, and book—without hiring a
            full-time receptionist.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-border bg-white p-6 shadow-sm shadow-navy/[0.03] transition duration-300 hover:-translate-y-0.5 hover:border-blue-mid hover:shadow-md hover:shadow-blue/10"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-soft text-blue transition group-hover:bg-blue group-hover:text-white">
                <feature.icon size={20} strokeWidth={1.75} />
              </div>
              <h3 className="mt-5 font-[family-name:var(--font-outfit)] text-lg font-semibold text-navy">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-navy-muted">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
