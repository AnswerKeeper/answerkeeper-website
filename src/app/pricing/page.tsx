import PaddlePricing from "@/components/PaddlePricing";

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
            AnswerKeeper
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Professional 24/7 call answering
          </p>

          <PaddlePricing />
        </div>
      </div>
    </main>
  );
}