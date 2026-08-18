"use client";

import { ArrowRight, Phone, Play, ShieldCheck, Zap } from "lucide-react";

type HeroProps = {
  onWatchDemo?: () => void;
};

export function Hero({ onWatchDemo }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-white text-slate-900 pt-12 pb-24">
      {/* Background Image Container */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0 select-none overflow-hidden">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-contain object-top"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 pb-8 pt-10 sm:px-8 sm:pt-16 lg:pt-20">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-900/10 bg-white/80 px-4 py-1.5 text-xs font-bold text-slate-900 shadow-xs backdrop-blur-md transition-all duration-300 hover:scale-105">
            <Zap size={13} className="text-[#5A4FCF] fill-[#5A4FCF]" />
            <span>Built for Plumbing &amp; HVAC Contractors</span>
          </div>

          {/* Main Headline */}
          <h1 className="mt-6 font-[family-name:var(--font-outfit)] text-4xl font-medium leading-[1.18] tracking-tight text-slate-900 sm:text-5xl md:text-6xl">
            Never Lose Another $500+ Job to a <span className="text-[#5A4FCF] font-semibold">Missed Call.</span>
          </h1>

          {/* Subtitle */}
          <p className="mx-auto mt-6 max-w-2xl text-base font-normal leading-relaxed text-slate-800 sm:text-lg">
            A customized 24/7 phone dispatch system that triages emergencies, captures job details, and books appointments on your Google Calendar—so you never lose callers to the competition while on a job site.
          </p>

          {/* CTAs */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+14127252760"
              className="inline-flex h-14 w-full items-center justify-center gap-2.5 rounded-xl bg-[#5A4FCF] px-7 text-sm font-bold text-white shadow-lg shadow-[#5A4FCF]/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#5A4FCF]/90 hover:shadow-[#5A4FCF]/40 sm:w-auto"
            >
              <Phone size={16} aria-hidden="true" />
              <span>Call Live Demo: +1 (412) 725-2760</span>
            </a>

            <a
              href="https://tally.so/r/D49rpE"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/90 px-7 text-sm font-bold text-slate-800 shadow-xs backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#5A4FCF]/30 hover:bg-[#5A4FCF]/5 hover:text-[#5A4FCF] sm:w-auto"
            >
              <span>Start 14-Day Free Trial</span>
              <ArrowRight size={16} aria-hidden="true" className="text-[#5A4FCF]" />
            </a>

            {onWatchDemo && (
              <button
                type="button"
                onClick={onWatchDemo}
                className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white/80 px-6 text-sm font-bold text-slate-700 backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-[#5A4FCF]/30 hover:bg-[#5A4FCF]/5 hover:text-[#5A4FCF] sm:w-auto cursor-pointer"
              >
                <Play size={14} aria-hidden="true" className="text-[#5A4FCF] fill-[#5A4FCF]" />
                <span>Watch Demo</span>
              </button>
            )}
          </div>

          {/* Trust Badges */}
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-xs font-semibold text-slate-700">
            <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-[#5A4FCF]" /> Built for Plumbing &amp; HVAC</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-[#5A4FCF]" /> Answers Calls 24/7</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-[#5A4FCF]" /> Works With Existing Number</span>
            <span className="flex items-center gap-1.5"><ShieldCheck size={15} className="text-[#5A4FCF]" /> 14-Day Free Trial</span>
          </div>
        </div>
      </div>

      {/* Product Visual Container */}
      <div className="relative z-10 mt-6 w-full sm:mt-10">
        <HeroProductVisual />
      </div>
    </section>
  );
}

function HeroProductVisual() {
  return (
    <div className="mx-auto max-w-5xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-slate-950 shadow-[0_25px_70px_-15px_rgba(90,79,207,0.25)] backdrop-blur-xl transition-all duration-300">
        
        {/* Top Window Header */}
        <div className="flex items-center justify-between border-b border-slate-800 bg-slate-900/90 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-slate-700" />
            <span className="h-3 w-3 rounded-full bg-slate-700" />
            <span className="h-3 w-3 rounded-full bg-slate-700" />
            <span className="ml-3 text-xs font-mono font-medium text-slate-400">
              answerkeeper-live-dispatch
            </span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-950/60 px-2.5 py-0.5 text-[11px] font-bold text-emerald-400 border border-emerald-800/60">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live Call Connected
            </span>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          
          {/* Left Panel: Conversation (Gradient Mesh Style matching Image 1) */}
          <div className="relative border-b border-slate-800/80 p-6 sm:p-8 lg:border-b-0 lg:border-r overflow-hidden bg-slate-950">
            {/* Organic CSS Glows */}
            <div aria-hidden className="pointer-events-none absolute -top-16 -left-16 h-64 w-64 rounded-full bg-rose-600/30 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute -bottom-16 -right-16 h-72 w-72 rounded-full bg-emerald-600/25 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-teal-500/15 blur-3xl" />

            <div className="relative z-10">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-teal-400">
                    Incoming Call Intake
                  </p>
                  <p className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-bold text-white">
                    Emergency Plumbing Request
                  </p>
                  <div className="mt-2 inline-flex items-center rounded-full bg-rose-950/70 border border-rose-800/60 px-3 py-1 text-xs font-bold text-rose-300 backdrop-blur-md">
                    🚨 Same-Day Emergency
                  </div>
                  <p className="mt-2 text-xs text-slate-300">
                    Caller: <span className="text-white font-semibold">Maria Santos</span> · (415) 555-0182
                  </p>
                </div>

                <div className="relative flex h-10 w-10 shrink-0 items-center justify-center">
                  <span className="animate-ping absolute inset-0 rounded-full bg-[#5A4FCF]/40" />
                  <span className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#5A4FCF] text-[10px] font-bold text-white shadow-md">
                    LIVE
                  </span>
                </div>
              </div>

              {/* Conversation Bubbles */}
              <div className="mt-6 space-y-3.5">
                <ChatBubble
                  who="AnswerKeeper Assistant"
                  text="Thanks for calling Apex Plumbing. I can help right away—Can you briefly describe what's happening so I can dispatch the right team?"
                  tone="assistant"
                />
                <ChatBubble
                  who="Maria (Caller)"
                  text="A pipe burst under my kitchen sink and water is leaking everywhere!"
                  tone="caller"
                />
                <ChatBubble
                  who="AnswerKeeper Assistant"
                  text={`Understood. I've logged this as an emergency and booked our technician for tonight between 7:30–9:00 PM.\n\nA confirmation SMS has been sent to your phone.`}
                  tone="assistant"
                />
              </div>
            </div>
          </div>

          {/* Right Panel: Instant Booking Summary (Deep Ocean Blue Style matching Image 2) */}
          <div className="relative p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-slate-950">
            {/* Deep Blue/Pink Accent Ambient Glows */}
            <div aria-hidden className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-blue-700/30 blur-3xl" />
            <div aria-hidden className="pointer-events-none absolute top-10 -right-20 h-64 w-64 rounded-full bg-rose-500/20 blur-3xl" />

            <div className="relative z-10 flex flex-col justify-between h-full">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Automated Dispatch Ticket
                </p>
                <div className="mt-4 space-y-2.5">
                  <InfoRow label="Service Type" value="Pipe Burst Emergency" />
                  <InfoRow label="Priority" value="High — Dispatch Priority" highlight />
                  <InfoRow label="Address" value="482 Oak Street, Unit 2" />
                  <InfoRow label="Arrival Window" value="Tonight, 7:30–9:00 PM" />
                  <InfoRow label="Google Calendar" value="Synced Automatically" />
                </div>
              </div>

              <div className="mt-6 rounded-xl border border-purple-500/30 bg-purple-950/40 p-4 shadow-md backdrop-blur-md">
                <p className="text-xs font-bold text-purple-300">
                  ⚡ $650 Service Call Secured
                </p>
                <p className="mt-1 text-xs leading-relaxed text-slate-300">
                  AnswerKeeper qualified the caller and booked your calendar while you were busy working.
                </p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

function ChatBubble({
  who,
  text,
  tone,
}: {
  who: string;
  text: string;
  tone: "assistant" | "caller";
}) {
  const isAssistant = tone === "assistant";
  return (
    <div className={`flex ${isAssistant ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[90%] rounded-2xl px-4 py-3 text-left transition-all ${
          isAssistant
            ? "rounded-tl-xs bg-slate-900/80 text-slate-100 border border-slate-700/60 backdrop-blur-md shadow-xs"
            : "rounded-tr-xs bg-[#5A4FCF] text-white shadow-md"
        }`}
      >
        <p className={`text-[10px] font-bold uppercase tracking-wide ${isAssistant ? "text-teal-300" : "text-purple-200"}`}>
          {who}
        </p>
        <p className="mt-1 text-xs leading-relaxed whitespace-pre-line">{text}</p>
      </div>
    </div>
  );
}

function InfoRow({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div className="flex items-center justify-between gap-3 rounded-xl border border-slate-800 bg-slate-900/80 px-3.5 py-2.5 shadow-2xs backdrop-blur-md">
      <span className="text-xs font-medium text-slate-400">{label}</span>
      <span
        className={`text-right text-xs font-bold ${
          highlight ? "text-purple-400" : "text-slate-100"
        }`}
      >
        {value}
      </span>
    </div>
  );
}