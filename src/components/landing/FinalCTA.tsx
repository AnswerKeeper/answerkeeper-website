import { ArrowRight } from "lucide-react";

export function FinalCTA() {
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
              Ready to stop missing plumbing jobs?
            </h2>
            <p className="mt-4 text-base leading-relaxed text-blue-mid sm:text-lg">
              See how AnswerKeeper answers your line, flags emergencies, and
              books appointments—live on a free walkthrough tailored to your
              shop.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <a
                href="mailto:answerkeeper.app@gmail.com?subject=Book%20a%20Free%20Demo"
                className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue px-6 text-sm font-semibold text-white shadow-lg shadow-black/20 transition hover:bg-blue-dark sm:w-auto"
              >
                Book a Free Demo
                <ArrowRight size={16} />
              </a>
              <a
                href="#how-it-works"
                className="inline-flex h-12 w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 text-sm font-semibold text-white transition hover:bg-white/10 sm:w-auto"
              >
                Watch 90-Second Demo
              </a>
            </div>
            <p className="mt-5 text-xs text-blue-mid/80">
              No long contracts to start. Setup usually takes less than a day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
