export default function TermsPage() {
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
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
            Legal
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Terms of Service
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Last Updated: August 4, 2026
          </p>

          <p className="mt-4 text-sm text-slate-500">
            Welcome to AnswerKeeper. AnswerKeeper is a service operated by
            AnswerKeeper Technologies (Business Name Registration No. 9746137,
            registered with the Corporate Affairs Commission). By using
            our website and services, you agree to these Terms of Service.
          </p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Use of Our Services
              </h2>
              <p className="mt-2">
                AnswerKeeper provides call answering, appointment capture, and customer
                communication tools for home service businesses, including plumbing and
                HVAC companies.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Customer Responsibilities
              </h2>
              <p className="mt-2">
                Customers are responsible for ensuring that information submitted to
                AnswerKeeper is accurate and lawful.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                SMS &amp; Telephone Communications
              </h2>

              <p className="mt-2">
                By submitting your phone number through our website or communicating with
                AnswerKeeper, you consent to receive automated and non-automated phone
                calls and text messages related to your inquiry, appointment scheduling,
                customer support, service updates, and other communications directly
                related to the services you request.
              </p>

              <p className="mt-3">
                Consent is not a condition of purchase. Message frequency varies.
                Message and data rates may apply. You may opt out of SMS communications
                at any time by replying <strong className="font-semibold text-slate-900">STOP</strong>. For assistance,
                reply <strong className="font-semibold text-slate-900">HELP</strong> or contact us directly through our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Service Availability
              </h2>
              <p className="mt-2">
                We continuously improve our platform but cannot guarantee uninterrupted
                availability at all times.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Contact
              </h2>
              <p className="mt-2">
                Questions regarding these Terms may be sent to:
              </p>
              <a
                href="mailto:answerkeeper.app@gmail.app"
                className="mt-2 inline-block font-semibold text-purple-600 hover:text-purple-700 hover:underline"
              >
                answerkeeper.app@gmail.app
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}