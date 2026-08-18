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
    <section className="relative overflow-hidden border-t border-purple-300/40 bg-gradient-to-r from-[#6b21a8] via-[#a855f7] via-60% to-[#ea580c] py-20 sm:py-28 text-white">
      {/* Curved Gradient Ribbon Effect */}
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-40 mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(ellipse 120% 80% at 20% 50%, rgba(219, 39, 119, 0.6), transparent),
                            radial-gradient(ellipse 100% 100% at 80% 50%, rgba(249, 115, 22, 0.8), transparent)`
        }}
      />
      <div 
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage: `repeating-radial-gradient(circle at 0% 100%, rgba(255,255,255,0.2) 0px, rgba(255,255,255,0.2) 2px, transparent 2px, transparent 40px)`
        }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-amber-300">
            Early Access
          </p>

          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-normal tracking-tight text-white sm:text-4xl">
            Now Onboarding Plumbing & HVAC Businesses
          </h2>

          <p className="mt-4 text-base leading-relaxed text-purple-100 sm:text-lg">
            AnswerKeeper is currently onboarding early customers and improving
            the platform with feedback from real home service businesses.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article
              key={item.title}
              className="rounded-2xl border border-white/20 bg-slate-950/60 p-6 shadow-xl backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-amber-300/60 hover:shadow-2xl hover:shadow-purple-950/50 cursor-pointer"
            >
              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-white">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-200">
                {item.description}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-12 rounded-3xl border border-white/30 bg-slate-950/70 p-8 text-center shadow-2xl backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-amber-300/60 hover:shadow-purple-950/60">
          <h3 className="font-[family-name:var(--font-outfit)] text-2xl font-bold text-white">
            Interested in Becoming an Early Customer?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-200">
            If you run a plumbing or HVAC business and want to stop missing
            customer calls, we'd love to show you how AnswerKeeper works and
            hear your feedback.
          </p>

          <a
            href="https://tally.so/r/D49rpE"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-amber-500 to-orange-600 px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:from-amber-400 hover:to-orange-500 shadow-lg shadow-orange-950/50 hover:shadow-xl hover:-translate-y-0.5"
          >
            Book a Free Demo
          </a>
        </div>
      </div>
    </section>
  );
}