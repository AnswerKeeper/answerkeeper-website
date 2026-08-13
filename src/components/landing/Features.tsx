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
    title: "Never Miss Another Customer",
    description:
      "Every incoming call is answered professionally, helping your business capture more customers even when your team is busy on-site.",
  },
  {
    icon: Siren,
    title: "Capture Emergency Service Requests",
    description:
      "Urgent plumbing and HVAC calls are identified immediately so high-priority jobs receive the attention they need without delay.",
  },
  {
    icon: MessageSquareText,
    title: "Keep Your Team Informed",
    description:
      "Important job details are shared instantly with your technicians, so everyone knows where to go and what the customer needs.",
  },
  {
    icon: CalendarCheck,
    title: "Book More Appointments",
    description:
      "Turn incoming enquiries into scheduled appointments before customers start calling another company.",
  },
  {
    icon: ClipboardList,
    title: "Every Customer Request Captured",
    description:
      "Customer details, service requests, and appointment information are organized in one place, making follow-up simple and reliable.",
  },
  {
    icon: HardHat,
    title: "Stay Focused on the Job",
    description:
      "Finish the work in front of you without worrying about missed calls or interrupted customers. AnswerKeeper keeps your business moving.",
  },
];

export function Features() {
  return (
    <section id="features" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Why AnswerKeeper
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Built for Plumbing & HVAC Businesses That Can't Afford to Miss Customers
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            Every missed call is a missed opportunity. AnswerKeeper helps plumbing and HVAC businesses answer every customer, capture emergency requests, book more appointments, and keep technicians focused on the job they're already doing.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="group rounded-2xl border border-border bg-white p-6 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-blue/40 hover:shadow-xl hover:shadow-blue/10 cursor-pointer"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue/10 text-blue transition-colors duration-300 group-hover:bg-blue group-hover:text-white">
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