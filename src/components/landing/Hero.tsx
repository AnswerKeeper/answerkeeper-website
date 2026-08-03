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

function HeroProductVisual() {
  return (
    <div className="animate-float-soft mx-auto max-w-5xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-t-2xl border border-b-0 border-border bg-white shadow-[0_-8px_40px_rgba(11,31,58,0.08)]">
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="ml-3 text-xs font-medium text-navy-soft">
            Live AnswerKeeper Call
          </span>
        </div>

        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-border p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue">
                  Incoming Customer Call
                </p>
                <p className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-semibold text-navy">
                  Emergency Plumbing Call
                </p>
                <div className="mt-2 inline-flex items-center rounded-full bg-red-600 px-3 py-1 text-xs font-bold text-white">
                  🚨 Emergency Service Request
                </div>
                <p className="mt-1 text-sm text-navy-muted">
                  Caller: Maria Santos · (415) 555-0182
                </p>
              </div>
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-blue/30" />
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-blue text-xs font-bold text-white">
                  LIVE
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <ChatBubble
                who="AnswerKeeper"
                text="Thanks for calling Apex Plumbing. I can help right away—Can you briefly describe what's happening so I can schedule the right technician?"
                tone="ai"
              />
              <ChatBubble
                who="Maria"
                text="Yes, A pipe burst under the kitchen sink and water is everywhere."
                tone="caller"
              />
              <ChatBubble
                who="AnswerKeeper"
                text="Thanks. I've marked this as an emergency and booked the earliest available technician.

                You'll receive a confirmation by text shortly."
                tone="ai"
              />
            </div>
          </div>

          <div className="bg-surface/70 p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Appointment Confirmed
            </p>
            <div className="mt-4 space-y-3">
            <InfoRow label="Service" value="Emergency Pipe Burst Repair" />
            <InfoRow label="Priority" value="High — Same Night" highlight />
            <InfoRow label="Address" value="482 Oak Street, Unit 2" />
            <InfoRow label="Arrival Window" value="Tonight, 7:30–9:00 PM" />
            <InfoRow label="Technician" value="Dispatch Confirmed" />
            </div>
            <div className="mt-6 rounded-xl border border-blue-mid bg-blue-soft px-4 py-3">
              <p className="text-sm font-semibold text-navy">
                Lead booked while you were on a job
              </p>
              <p className="mt-1 text-xs leading-relaxed text-navy-muted">
                While you finished your current job, AnswerKeeper scheduled the next one and notified your technician automatically.
              </p>
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
  tone: "ai" | "caller";
}) {
  const isAi = tone === "ai";
  return (
    <div className={`flex ${isAi ? "justify-start" : "justify-end"}`}>
      <div
        className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-left sm:max-w-[85%] ${isAi
            ? "rounded-tl-md bg-blue-soft text-navy"
            : "rounded-tr-md bg-navy text-white"
          }`}
      >
        <p className={`text-[11px] font-semibold ${isAi ? "text-blue" : "text-blue-mid"}`}>
          {who}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed">{text}</p>
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
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-3.5 py-2.5">
      <span className="text-xs font-medium text-navy-soft">{label}</span>
      <span
        className={`text-right text-sm font-semibold ${highlight ? "text-blue" : "text-navy"
          }`}
      >
        {value}
      </span>
    </div>
  );
}
