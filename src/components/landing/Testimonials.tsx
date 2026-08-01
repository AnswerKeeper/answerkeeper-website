const testimonials = [
  {
    quote:
      "We used to lose two or three emergency calls a week after 6 PM. AnswerKeeper books them while we’re still wrapping up the last job of the day.",
    name: "Derek Holt",
    role: "Owner, Holt Family Plumbing",
    location: "Austin, TX",
  },
  {
    quote:
      "The SMS alerts are the game-changer. My on-call tech knows the address and the issue before they even call the customer back.",
    name: "Priya Nair",
    role: "Operations Manager, ClearFlow Services",
    location: "San Jose, CA",
  },
  {
    quote:
      "I was skeptical about AI answering our phones. Customers say it sounds like our office—and we’re booking Saturdays we used to miss entirely.",
    name: "Marcus Bell",
    role: "Owner, Bell & Sons Plumbing",
    location: "Charlotte, NC",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Testimonials
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Plumbing shops that stopped missing calls
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            Real outcomes from owners who put AnswerKeeper on their business
            line.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {testimonials.map((item) => (
            <blockquote
              key={item.name}
              className="flex h-full flex-col rounded-2xl border border-border bg-surface p-6"
            >
              <p className="flex-1 text-sm leading-relaxed text-navy">
                “{item.quote}”
              </p>
              <footer className="mt-6 border-t border-border pt-4">
                <p className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-navy">
                  {item.name}
                </p>
                <p className="mt-0.5 text-xs text-navy-muted">{item.role}</p>
                <p className="mt-0.5 text-xs text-navy-soft">{item.location}</p>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
