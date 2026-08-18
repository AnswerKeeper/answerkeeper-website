"use client";

import { useState, useRef } from "react";
import { Calculator, ArrowRight, AlertCircle } from "lucide-react";

export function RevenueCalculator() {
  const [jobValue, setJobValue] = useState(550);
  const [missedCalls, setMissedCalls] = useState(6);

  // Mouse position state for card & button cursor highlights
  const cardRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLAnchorElement>(null);
  const [cardMousePos, setCardMousePos] = useState({ x: 0, y: 0 });
  const [btnMousePos, setBtnMousePos] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setCardMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleBtnMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!btnRef.current) return;
    const rect = btnRef.current.getBoundingClientRect();
    setBtnMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  // Math calculations
  const weeklyLoss = jobValue * missedCalls;
  const monthlyLoss = weeklyLoss * 4;
  const yearlyLoss = monthlyLoss * 12;

  return (
    <section className="relative overflow-hidden border-t border-slate-200 bg-white py-20 sm:py-28 text-slate-900">
      
      {/* Light & Elegant Background with High-Visibility Cobweb Net */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-0"
      >
        {/* Soft Ambient Pastel Glows */}
        <div className="absolute -top-24 right-0 h-[500px] w-[500px] rounded-full bg-indigo-50/80 blur-[80px]" />
        <div className="absolute -bottom-24 left-0 h-[500px] w-[500px] rounded-full bg-pink-50/80 blur-[80px]" />

        {/* Diagonal Strike Lines Pattern */}
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #5A4FCF,
              #5A4FCF 1.5px,
              transparent 1.5px,
              transparent 10px
            )`,
          }}
        />

        {/* Prominent Center-Right Cobweb Grid Accent */}
        <svg
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[700px] w-[700px] text-[#5A4FCF]/20"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.6"
        >
          {/* Radial Strands */}
          <line x1="100" y1="0" x2="100" y2="200" />
          <line x1="0" y1="100" x2="200" y2="100" />
          <line x1="29.29" y1="29.29" x2="170.71" y2="170.71" />
          <line x1="170.71" y1="29.29" x2="29.29" y2="170.71" />
          
          {/* Web Rings */}
          <polygon points="100,10 190,100 100,190 10,100" />
          <polygon points="100,25 175,100 100,175 25,100" />
          <polygon points="100,40 160,100 100,160 40,100" />
          <polygon points="100,55 145,100 100,145 55,100" />
          <polygon points="100,70 130,100 100,130 70,100" />
          <polygon points="100,85 115,100 100,115 85,100" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#5A4FCF]/20 bg-[#5A4FCF]/5 px-3.5 py-1.5 text-xs font-medium text-[#5A4FCF]">
            <Calculator size={14} />
            <span>Interactive ROI Calculator</span>
          </div>

          {/* Un-bolded, Light Elegance Heading */}
          <h2 className="mt-4 font-[family-name:var(--font-outfit)] text-3xl font-normal tracking-tight text-slate-800 sm:text-4xl">
            How Much Are Missed Calls Costing Your Shop?
          </h2>
          <p className="mt-3 text-base text-slate-600 sm:text-lg">
            See the exact revenue leaking out of your business when unanswered calls go straight to your competitors.
          </p>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-12 lg:items-center">
          
          {/* Controls Column (Light Card with Interactive Cursor Spotlight) */}
          <div
            ref={cardRef}
            onMouseMove={handleCardMouseMove}
            className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm sm:p-8 lg:col-span-7 transition-all duration-300 hover:border-[#5A4FCF]/40 hover:shadow-md"
          >
            {/* Cursor Tracking Spotlight Effect */}
            <div
              className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              style={{
                background: `radial-gradient(450px circle at ${cardMousePos.x}px ${cardMousePos.y}px, rgba(90, 79, 207, 0.08), transparent 80%)`,
              }}
            />

            {/* Slider 1: Average Job Value */}
            <div className="relative z-10">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Average Plumbing / HVAC Job Value
                </label>
                <span className="font-mono text-lg font-semibold text-[#5A4FCF]">
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
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-[#5A4FCF]"
              />
              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>$150 (Service Call)</span>
                <span>$2,000+ (Full Install)</span>
              </div>
            </div>

            {/* Slider 2: Missed Calls per Week */}
            <div className="relative z-10 mt-8">
              <div className="flex items-center justify-between">
                <label className="text-sm font-medium text-slate-700">
                  Missed / Unanswered Calls Per Week
                </label>
                <span className="font-mono text-lg font-semibold text-[#5A4FCF]">
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
                className="mt-3 h-2 w-full cursor-pointer appearance-none rounded-lg bg-slate-100 accent-[#5A4FCF]"
              />
              <div className="mt-1 flex justify-between text-xs text-slate-400">
                <span>1 call / week</span>
                <span>30 calls / week</span>
              </div>
            </div>

            <div className="relative z-10 mt-8 flex items-start gap-3 rounded-xl border border-amber-200/60 bg-amber-50/50 p-4 text-xs text-amber-900">
              <AlertCircle size={18} className="shrink-0 text-amber-600" />
              <p>
                <span className="font-semibold">Did you know?</span> Most callers hang up without leaving a voicemail if no one answers quickly.
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="flex flex-col justify-between rounded-2xl border border-slate-800 bg-slate-900 p-6 text-white shadow-lg sm:p-8 lg:col-span-5">
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-purple-300">
                Estimated Lost Revenue
              </span>

              <div className="mt-4">
                <span className="text-xs text-slate-400">Monthly Revenue Leaking</span>
                <div className="mt-1 flex items-baseline gap-1 font-[family-name:var(--font-outfit)] text-4xl font-bold text-white sm:text-5xl">
                  <span>${monthlyLoss.toLocaleString()}</span>
                  <span className="text-xs font-normal text-slate-400">/mo</span>
                </div>
              </div>

              <div className="mt-6 border-t border-slate-800 pt-4">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-400">Yearly Impact:</span>
                  <span className="font-mono font-semibold text-rose-400">
                    -${yearlyLoss.toLocaleString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <div className="rounded-xl border border-slate-800 bg-slate-800/50 p-4 text-xs text-slate-300">
                AnswerKeeper captures these calls 24/7 for a fraction of a single job cost.
              </div>

              {/* Dynamic Interactive Button with Radial Cursor Spotlight Highlight */}
              <a
                ref={btnRef}
                onMouseMove={handleBtnMouseMove}
                href="https://tally.so/r/D49rpE"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative mt-4 inline-flex h-12 w-full items-center justify-center gap-2 overflow-hidden rounded-xl bg-[#5A4FCF] px-6 text-sm font-medium text-white shadow-md transition-all duration-300 hover:bg-[#5A4FCF]/90 hover:shadow-lg hover:-translate-y-0.5"
              >
                {/* Button Cursor Glow */}
                <div
                  className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(120px circle at ${btnMousePos.x}px ${btnMousePos.y}px, rgba(255, 255, 255, 0.35), transparent 80%)`,
                  }}
                />

                <span className="relative z-10 flex items-center gap-2">
                  Stop Losing Jobs Now
                  <ArrowRight size={16} className="transition-transform duration-200 group-hover:translate-x-1" />
                </span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}