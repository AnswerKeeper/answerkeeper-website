export default function RefundPolicyPage() {
  return (
    <main className="relative min-h-screen overflow-hidden border-t border-purple-200/50 bg-gradient-to-b from-purple-50 via-amber-50/30 to-indigo-50/50 py-16">
      {/* Light Stripe Background Pattern */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-40 mix-blend-multiply" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(147, 51, 234, 0.12) 0px,
            rgba(147, 51, 234, 0.12) 20px,
            transparent 20px,
            transparent 40px
          )`
        }}
      />

      {/* Spiderweb / Geometric Mesh Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.25) 1px, transparent 1px),
                            radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.3) 1px, transparent 1px)`,
          backgroundSize: '32px 32px, 64px 64px'
        }}
      />

      {/* Glowing Ambient Orbs Outside Card */}
      <div className="pointer-events-none absolute -left-20 top-20 z-0 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 z-0 h-96 w-96 rounded-full bg-amber-300/30 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-3xl px-6">
        <div className="rounded-2xl border border-purple-100 bg-white/90 p-8 shadow-xl shadow-purple-950/5 backdrop-blur-md sm:p-10">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-700">
            Legal
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
            Refund Policy
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Effective date: August 8, 2026
          </p>

          <div className="mt-10 space-y-8 text-sm leading-7 text-slate-600">
            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                Subscription service
              </h2>
              <p className="mt-2">
                AnswerKeeper provides a monthly subscription service for
                businesses. Subscriptions are billed monthly at the time of
                purchase and automatically renew each month unless cancelled.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                Cancellation
              </h2>
              <p className="mt-2">
                You may cancel your subscription at any time. Cancellation
                prevents future recurring charges but does not automatically
                refund the current billing period.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                Refunds
              </h2>
              <p className="mt-2">
                Subscription payments are generally non-refundable once a
                billing period has started. If you believe you were charged
                incorrectly, please contact us so we can review the issue.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                Billing issues
              </h2>
              <p className="mt-2">
                Billing errors or exceptional circumstances may be reviewed on
                a case-by-case basis.
              </p>
            </section>

            <section>
              <h2 className="text-lg font-semibold text-slate-900">
                Contact
              </h2>
              <p className="mt-2">
                For questions about cancellations, refunds, or billing, contact
                us at{" "}
                <a
                  href="mailto:support@answerkeeper.app"
                  className="font-medium text-purple-600 hover:text-purple-700 hover:underline"
                >
                  support@answerkeeper.app
                </a>
                .
              </p>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}