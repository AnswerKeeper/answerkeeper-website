export default function PrivacyPage() {
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
            Privacy Policy
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Effective Date: July 30, 2026 · Last Updated: August 4, 2026
          </p>

          <p className="mt-4 text-sm text-slate-500">
            This Privacy Policy applies to AnswerKeeper, a service operated by
            AnswerKeeper Technologies (Business Name Registration No. 9746137,
            registered with the CAC).
          </p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-slate-600">
            <p className="text-base text-slate-700">
              AnswerKeeper respects your privacy and is committed to protecting your
              personal information.
            </p>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Information We Collect
              </h2>
              <p className="mt-2">
                We may collect names, phone numbers, email addresses, service
                addresses, and appointment information submitted through our website or
                during customer calls.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Call Recording &amp; Transcription
              </h2>
              <p className="mt-2">
                Calls to and from AnswerKeeper-enabled phone numbers may be recorded
                and transcribed for quality assurance, service improvement, and
                record-keeping purposes. By calling or interacting with an
                AnswerKeeper-enabled phone number, callers consent to this recording
                and transcription. Call recordings and transcripts are retained for as
                long as necessary to provide our services and are accessible to the
                business being represented on the call.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                How We Use Information
              </h2>
              <p className="mt-2">
                Information is used solely to answer customer inquiries, schedule
                appointments, provide requested services, and improve AnswerKeeper.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Information Sharing
              </h2>
              <p className="mt-2">
                We do not sell personal information. Information is shared only with
                authorized service providers (including telephony, artificial
                intelligence, and scheduling providers) when necessary to deliver our
                services.
              </p>
              <p className="mt-3">
                No mobile information will be shared with third parties/affiliates for
                marketing/promotional purposes. All the above categories exclude text
                messaging originator opt-in data and consent; this information will
                not be shared with any third parties.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">
                Data Retention
              </h2>
              <p className="mt-2">
                We retain call recordings, transcripts, and customer information for
                as long as reasonably necessary to provide our services, comply with
                legal obligations, and resolve disputes. Businesses using AnswerKeeper
                may request deletion of their data by contacting us below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-slate-900">Contact</h2>
              <p className="mt-2">
                Questions regarding this Privacy Policy can be sent to:
              </p>
              <a
                href="mailto:support@answerkeeper.app"
                className="mt-2 inline-block font-semibold text-purple-600 hover:text-purple-700 hover:underline"
              >
                support@answerkeeper.app
              </a>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}