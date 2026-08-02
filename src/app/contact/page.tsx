export default function ContactPage() {
  return (
    <main className="bg-white">
      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8 sm:py-28">
        <p className="text-sm font-semibold uppercase tracking-wider text-blue">
          Contact
        </p>

        <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-4xl font-bold tracking-tight text-navy sm:text-5xl">
          We'd Love to Hear From You
        </h1>

        <p className="mt-6 text-lg leading-relaxed text-navy-muted">
          If you're interested in AnswerKeeper or have questions about the
          platform, feel free to reach out.
        </p>

        <div className="mt-12 rounded-2xl border border-border bg-surface p-8">
          <h2 className="text-xl font-semibold text-navy">
            General Enquiries
          </h2>

          <p className="mt-4 text-navy-muted">
            Email:
          </p>

          <p className="font-semibold text-blue">
            answerkeeper.app@gmail.com
          </p>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-navy">
              Business Hours
            </h2>

            <p className="mt-4 text-navy-muted">
              Monday – Friday
            </p>

            <p className="text-navy">
              9:00 AM – 5:00 PM
            </p>
          </div>

          <div className="mt-8">
            <h2 className="text-xl font-semibold text-navy">
              Demo Requests
            </h2>

            <p className="mt-4 text-navy-muted">
              To request a demonstration of AnswerKeeper, please email us and
              we'll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}