import PaddlePricing from "@/components/PaddlePricing";

export default function PricingPage() {
  return (
    <main className="relative min-h-screen overflow-hidden border-t border-purple-200/50 bg-gradient-to-b from-purple-50 via-amber-50/30 to-indigo-50/50 py-16">
      {/* Dark Outer Radial Background Gradient */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-80"
        style={{
          background: `radial-gradient(ellipse at 50% 50%, transparent 20%, rgba(30, 11, 54, 0.25) 60%, rgba(15, 2, 28, 0.55) 100%)`
        }}
      />

      {/* Tiny Dark Purple & Orange Stripe Pattern Outside Border */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-30 mix-blend-multiply" 
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            rgba(88, 28, 135, 0.3) 0px,
            rgba(88, 28, 135, 0.3) 12px,
            rgba(234, 88, 12, 0.2) 12px,
            rgba(234, 88, 12, 0.2) 24px,
            transparent 24px,
            transparent 36px
          )`
        }}
      />

      {/* Tiny Spiderweb / Micro-Mesh Dot Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, rgba(147, 51, 234, 0.3) 1px, transparent 1px),
                            radial-gradient(circle at 0% 0%, rgba(147, 51, 234, 0.35) 1px, transparent 1px)`,
          backgroundSize: '24px 24px, 48px 48px'
        }}
      />

      {/* Glowing Ambient Background Orbs */}
      <div className="pointer-events-none absolute -left-20 top-20 z-0 h-96 w-96 rounded-full bg-purple-400/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-20 bottom-20 z-0 h-96 w-96 rounded-full bg-amber-400/20 blur-3xl" />

      <section className="relative z-10 mx-auto max-w-4xl px-6">
        <div className="rounded-2xl border border-purple-100 bg-white/95 p-8 shadow-2xl shadow-purple-950/10 backdrop-blur-md sm:p-10">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-semibold uppercase tracking-wider text-purple-700">
              Product
            </p>

            <h1 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Simple pricing for your business
            </h1>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              Professional 24/7 call answering for plumbing and HVAC businesses.
            </p>

            {/* Clean White Inner Product Card */}
            <div className="mx-auto mt-10 max-w-md rounded-2xl border border-purple-200/80 bg-white p-8 shadow-md transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-purple-400 hover:shadow-2xl hover:shadow-purple-950/10">
              <h2 className="font-[family-name:var(--font-outfit)] text-xl font-bold text-slate-900">
                AnswerKeeper
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Professional 24/7 call answering
              </p>

              {/* Styled Container Overriding Paddle Button Styles */}
              <div className="mt-6 [&_button]:w-full [&_button]:rounded-xl [&_button]:bg-gradient-to-r [&_button]:from-purple-700 [&_button]:to-purple-900 [&_button]:px-6 [&_button]:py-3 [&_button]:font-semibold [&_button]:text-white [&_button]:shadow-lg [&_button]:shadow-purple-950/20 [&_button]:transition-all [&_button]:duration-200 hover:[&_button]:from-purple-800 hover:[&_button]:to-purple-950 hover:[&_button]:shadow-xl hover:[&_button]:scale-[1.02] [&_a]:w-full [&_a]:rounded-xl [&_a]:bg-gradient-to-r [&_a]:from-purple-700 [&_a]:to-purple-900 [&_a]:px-6 [&_a]:py-3 [&_a]:font-semibold [&_a]:text-white [&_a]:shadow-lg [&_a]:shadow-purple-950/20 [&_a]:transition-all [&_a]:duration-200 hover:[&_a]:from-purple-800 hover:[&_a]:to-purple-950 hover:[&_a]:shadow-xl hover:[&_a]:scale-[1.02]">
                <PaddlePricing />
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}