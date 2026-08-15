"use client";

import { useState } from "react";
import { Calculator, ArrowRight, AlertCircle } from "lucide-react";

export function RevenueCalculator() {
  const [jobValue, setJobValue] = useState(550);
  const [missedCalls, setMissedCalls] = useState(6);

  // Math calculations
  const weeklyLoss = jobValue * missedCalls;
  const monthlyLoss = weeklyLoss * 4;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <section className="border-t border-border bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3.5 py-1.5 text-xs font-semibold text-blue shadow-xs transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/30 hover:bg-blue-100/50 cursor-pointer">
            <Calculator size={14} />
            <span>Interactive ROI Calculator</span>
          </div>

          <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            How Much Are Missed Calls Costing Your Shop?
          </h2>
          <p className="mt-3 text-base leading-relaxed text-navy-muted sm:text-lg">
            See the exact revenue leaking out of your business when unanswered calls go straight to your competitors.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          {/* Controls Column */}
          <div className="rounded-2xl border border-border bg-surface p-6 shadow-sm transition-all duration-300 hover:border-blue/30 hover:shadow-lg sm:p-8 lg:col-span-7">
            {/* Slider 1: Average Job Value */}
            <div>
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-navy">
                  Average Plumbing / HVAC Job Value
                </label>
                <span className="font-mono text-lg font-bold text-blue transition-transform duration-150 hover:scale-105">
                  ${jobValue}
                </span>
              </div>
              <input
                type="range"
                min="150"
                max="2000"
                step="50"
                value={jobValue}
                onChange={(e) => setJobValue(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-border accent-blue transition-all duration-150 hover:opacity-90"
              />
              <div className="mt-1 flex justify-between text-xs text-navy-soft">
                <span>$150 (Service Call)</span>
                <span>$2,000+ (Full Install/Repair)</span>
              </div>
            </div>

            {/* Slider 2: Missed Calls per Week */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <label className="text-sm font-semibold text-navy">
                  Missed / Unanswered Calls Per Week
                </label>
                <span className="font-mono text-lg font-bold text-blue transition-transform duration-150 hover:scale-105">
                  {missedCalls} calls
                </span>
              </div>
              <input
                type="range"
                min="1"
                max="30"
                step="1"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-border accent-blue transition-all duration-150 hover:opacity-90"
              />
              <div className="mt-1 flex justify-between text-xs text-navy-soft">
                <span>1 call / week</span>
                <span>30 calls / week</span>
              </div>
            </div>

            <div className="mt-8 flex items-start gap-3 rounded-xl border border-amber-200 bg-amber-50/60 p-4 text-xs text-amber-900 shadow-xs transition-all duration-300 hover:border-amber-300 hover:bg-amber-50">
              <AlertCircle size={18} className="shrink-0 text-amber-600" />
              <p>
                <strong>Did you know?</strong> Most residential callers hang up without leaving a voicemail if no one answers quickly.
              </p>
            </div>
          </div>

          {/* Results Display Column */}
          <div className="flex flex-col justify-between rounded-2xl border border-navy bg-navy p-6 text-white shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-navy/20 sm:p-8 lg:col-span-5">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-blue-mid">
                Estimated Lost Revenue
              </span>

              <div className="mt-4">
                <span className="text-xs text-blue-mid">Monthly Revenue Leaking</span>
                <div className="mt-1 flex items-baseline gap-1 font-[family-name:var(--font-outfit)] text-4xl font-extrabold text-white sm:text-5xl transition-transform duration-300 hover:scale-[1.02]">
                  <span>${monthlyLoss.toLocaleString()}</span>
                  <span className="text-xs font-normal text-blue-mid">/mo</span>
                </div>
              </div>

              <div className="mt-6 border-t border-white/10 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-blue-mid">Yearly Impact:</span>
                  <span className="font-mono font-bold text-red-400">
                    -${yearlyLoss.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-blue-mid transition-all duration-300 hover:bg-white/10">
                AnswerKeeper captures these calls 24/7 for a fraction of a single job cost.
              </div>

              <a
                href="https://tally.so/r/D49rpE"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl bg-blue px-6 text-sm font-semibold text-white shadow-lg shadow-blue/20 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-blue-dark hover:shadow-xl hover:shadow-blue/30"
              >
                Stop Losing Jobs Now
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}