export default function PricingPage() {
    return (
      <main className="min-h-screen bg-slate-50 px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Pricing
          </p>
  
          <h1 className="mt-3 text-4xl font-bold text-slate-900">
            Simple pricing for your business
          </h1>
  
          <p className="mt-4 text-lg text-slate-600">
            Professional 24/7 call answering for plumbing and HVAC businesses.
          </p>
  
          <div className="mx-auto mt-10 max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
            <h2 className="text-xl font-semibold text-slate-900">
              AnswerKeeper Monthly
            </h2>
  
            <div className="mt-5">
              <span className="text-5xl font-bold text-slate-900">$149</span>
              <span className="ml-2 text-slate-500">/month</span>
            </div>
  
            <p className="mt-3 text-sm text-slate-500">
              Unlimited calls · No long-term contract
            </p>
  
            <ul className="mt-8 space-y-3 text-left text-sm text-slate-700">
              <li>✓ 24/7 call answering</li>
              <li>✓ Emergency call detection</li>
              <li>✓ SMS notifications</li>
              <li>✓ Appointment scheduling</li>
              <li>✓ Customer information capture</li>
            </ul>
  
            <a
              href="https://tally.so/r/D49rpE"
              className="mt-8 block rounded-lg bg-blue-600 px-6 py-3 text-center font-semibold text-white hover:bg-blue-700"
            >
              Book a Free Demo
            </a>
          </div>
        </div>
      </main>
    );
  }