const highlights = [
  {
    title: "Now Onboarding Early Customers",
    description:
      "AnswerKeeper is currently working with early plumbing and HVAC businesses to refine the platform using real-world feedback.",
  },
  {
    title: "Built With Service Businesses",
    description:
      "Every improvement is guided by conversations with plumbers, HVAC contractors, and other home service professionals.",
  },
  {
    title: "See It Before You Commit",
    description:
      "Book a personalized demo to see how AnswerKeeper fits into your business before becoming an early customer.",
  },
];

export function Testimonials() {
  return (
    <section className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            Early Access
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Now Onboarding Plumbing & HVAC Businesses
          </h2>

          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            AnswerKeeper is currently onboarding early customers and improving
            the platform with feedback from real home service businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-border bg-surface p-6"
            >
              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-navy">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-navy-muted">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-blue-200 bg-blue-50 p-8 text-center">
          <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-semibold text-navy">
            Interested in Becoming an Early Customer?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-navy-muted">
            If you run a plumbing or HVAC business and want to stop missing
            customer calls, we'd love to show you how AnswerKeeper works and
            hear your feedback.
          </p>

          <a
            href="https://tally.so/r/D49rpE"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-dark"
          >
            Book a Free Demo
          </a>
        </div>

      </div>
    </section>
  );
}