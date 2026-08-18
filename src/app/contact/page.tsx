export default function ContactPage() {
  return (
    <main className="relative min-h-screen overflow-hidden border-t border-purple-200/50 bg-gradient-to-b from-purple-50 via-amber-50/30 to-indigo-50/50 py-16">
      {/* Tiny Light Stripe Pattern Outside Border */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-multiply" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(147, 51, 234, 0.12) 0px,
            rgba(147, 51, 234, 0.12) 16px,
            transparent 16px,
            transparent 32px
          )`
        }}
      />

      {/* Tiny Spiderweb / Micro-Mesh Dot Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.25) 1px, transparent 1px),
                            radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px'
        }}
      />

      {/* Glowing Ambient Background Orbs */}
      <div className="pointer-events-none absolute -left-20 top-20 z-0 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 z-0 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-purple-100 bg-white/90 p-8 shadow-xl shadow-purple-950/5 backdrop-blur-md sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-700">
            Company
          </p>

          <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            We'd Love to Hear From You
          </h1>

          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            If you're interested in AnswerKeeper or have questions about the
            platform, feel free to reach out.
          </p>

          <div className="mt-8 space-y-6">
            {/* General Enquiries Card */}
            <div className="rounded-xl border border-purple-100 bg-purple-50/40 p-6">
              <h2 className="text-xl font-semibold text-slate-900">
                General Enquiries
              </h2>

              <p className="mt-3 text-sm text-slate-600">
                Email:
              </p>

              <a
                href="mailto:support@answerkeeper.app"
                className="mt-1 inline-block font-semibold text-purple-600 hover:text-purple-700 hover:underline"
              >
                support@answerkeeper.app
              </a>
            </div>

            {/* Support Hours Card */}
            <div className="rounded-xl border border-purple-100 bg-white/80 p-6 shadow-sm">
              <h3 className="font-[family-name:var(--font-outfit)] text-lg font-semibold text-slate-900">
                Support Hours
              </h3>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Monday–Friday<br />
                9:00 AM–5:00 PM (Central Time)
              </p>

              <p className="mt-4 text-sm leading-relaxed text-slate-700">
                <strong className="font-semibold text-purple-900">AnswerKeeper answers customer calls 24/7.</strong> These hours
                apply only to direct support inquiries.
              </p>
            </div>

            {/* Demo Requests Card */}
            <div className="rounded-xl border border-purple-100 bg-purple-50/40 p-6">
              <h2 className="text-xl font-semibold text-slate-900">
                Demo Requests
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                To request a demonstration of AnswerKeeper, please email us and
                we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}