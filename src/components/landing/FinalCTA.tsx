import { ArrowRight, Phone } from "lucide-react";

type FinalCTAProps = {
  onWatchDemo?: () => void;
};

export function FinalCTA({ onWatchDemo }: FinalCTAProps) {
  return (
    <section id="final-cta" className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="relative overflow-hidden rounded-3xl bg-navy px-6 py-14 text-center sm:px-12 sm:py-16">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-20 -top-20 h-64 w-64 rounded-full bg-blue/30 blur-3xl"
          />
          <div
            aria-hidden
            className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-blue/20 blur-3xl"
          />

          <div className="relative mx-auto max-w-2xl">
            <h2 className="font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              Ready to stop losing $500+ plumbing &amp; HVAC jobs?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-blue-mid sm:text-lg">
              Start capturing every caller, triaging emergency calls, and filling your Google Calendar automatically.
            </p>
            
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="https://tally.so/r/D49rpE"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue px-6 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-blue-dark sm:w-auto"
              >
                Start 14-Day Free Trial
                <ArrowRight size={16} />
              </a>
              
              <a
                href="tel:+14127252760"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                <Phone size={14} />
                Call Live Demo: +1 (412) 725-2760
              </a>
            </div>

            {/* Risk Reversal Banner */}
            <div className="mt-8 inline-block rounded-full border border-white/10 bg-white/5 px-5 py-2 text-xs sm:text-sm font-medium text-blue-mid">
              14-Day Free Trial • No Credit Card Required • Setup Takes 2 Minutes
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}