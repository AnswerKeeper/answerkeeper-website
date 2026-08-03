"use client";

import { useState } from "react";
import { DemoModal } from "./DemoModal";
import { ArrowRight, Play } from "lucide-react";

export function Hero() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#e8f1ff_0%,transparent_55%),linear-gradient(180deg,#ffffff_0%,#f5f8fc_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(11,31,58,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-8 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="animate-fade-up font-[family-name:var(--font-outfit)] text-4xl font-bold tracking-tight text-navy sm:text-5xl md:text-6xl">
            AnswerKeeper
          </p>

          <div className="mt-5 inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue">
            Built for Home Service Businesses
          </div>

          <h1 className="animate-fade-up-delay-1 mt-5 font-[family-name:var(--font-outfit)] text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-5xl">
            Every Customer Gets an Answer.
          </h1>

          <p className="animate-fade-up-delay-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg">
            While you&apos;re serving customers in the field, AnswerKeeper responds instantly, captures every service request, books appointments, and keeps your team informed—so you never lose work because you couldn&apos;t answer the phone.
          </p>

          <div className="animate-fade-up-delay-3 mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://tally.so/r/D49rpE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue px-6 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition hover:bg-blue-dark sm:w-auto"
            >
              Book a Free Demo
              <ArrowRight size={16} aria-hidden="true" />
            </a>

            <button
              type="button"
              onClick={() => setDemoOpen(true)}
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 py-3 text-sm font-semibold text-navy transition hover:border-blue hover:text-blue"
            >
              <Play size={14} aria-hidden="true" />
              Watch 90-Second Demo
            </button>
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm text-navy-muted">
            <span>✓ Built for Plumbing &amp; HVAC</span>
            <span>✓ Answers Calls 24/7</span>
            <span>✓ Works With Your Existing Number</span>
            <span>✓ Setup in Minutes</span>
            <span>✓ No Long-Term Contracts</span>
          </div>
        </div>
      </div>

      <div className="relative mt-10 w-full sm:mt-14">
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
        <HeroProductVisual />
      </div>

      <DemoModal open={demoOpen} onClose={() => setDemoOpen(false)} />
    </section>
  );
}