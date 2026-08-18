import { ArrowRight, Phone } from "lucide-react";

type FinalCTAProps = {
  onWatchDemo?: () => void;
};

export function FinalCTA({ onWatchDemo }: FinalCTAProps) {
  return (
    <section id="final-cta" className="relative overflow-hidden border-t border-purple-200/50 bg-gradient-to-b from-purple-50 via-amber-50/30 to-indigo-50/50 py-20 sm:py-28">
      {/* Visible Stripe Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply pointer-events-none" 
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

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 px-6 py-14 text-center shadow-2xl shadow-purple-950/20 transition-all duration-300 hover:border-purple-500/50 hover:shadow-purple-900/30 sm:px-12 sm:py-16">
          
          {/* Glowing Purple Accents */}
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-purple-600/30 blur-3xl transition-opacity duration-500 opacity-80"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-indigo-600/30 blur-3xl transition-opacity duration-500 opacity-80"
          />

          <div className="relative z-10 mx-auto max-w-2xl">
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to stop losing $500+ plumbing &amp; HVAC jobs?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
              Start capturing every caller, triaging emergency calls, and filling your Google Calendar automatically.
            </p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://tally.so/r/D49rpE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-6 text-sm font-semibold text-white shadow-lg shadow-purple-950/50 transition-all duration-300 ease-out hover:-translate-y-1 hover:from-purple-500 hover:to-indigo-500 hover:shadow-xl hover:shadow-purple-500/25 sm:w-auto"
              >
                Start 14-Day Free Trial
                <ArrowRight size={16} />
              </a>
              
              <a
                href="tel:+14127252760"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-6 text-sm font-semibold text-slate-200 transition-all duration-300 ease-out hover:-translate-y-1 hover:border-purple-500/50 hover:bg-slate-800 hover:text-white sm:w-auto"
              >
                <Phone size={14} className="text-purple-400" />
                Call Live Demo: +1 (412) 725-2760
              </a>
            </div>

            {/* Risk Reversal Banner */}
            <div className="mt-8 inline-block rounded-full border border-purple-500/20 bg-purple-950/40 px-5 py-2 text-xs sm:text-sm font-medium text-purple-300 transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-900/50 hover:text-white cursor-pointer">
              14-Day Free Trial • No Credit Card Required • Setup Takes 2 Minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}