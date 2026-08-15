"use client";

import React from "react";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Phone } from "lucide-react";

export default function ThankYouPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-white text-navy">
      {/* Background Gradients */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,#e8f1ff_0%,transparent_55%),linear-gradient(180deg,#ffffff_0%,#f5f8fc_100%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(rgba(11,31,58,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(11,31,58,0.04)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
      />

      <div className="relative mx-auto max-w-6xl px-5 pb-16 pt-16 sm:px-8 sm:pt-24 lg:pt-28">
        <div className="mx-auto max-w-3xl text-center">
          
          {/* Status Badge */}
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-green-200 bg-green-50 px-4 py-2 text-sm font-semibold text-green-700 shadow-xs">
            <CheckCircle2 size={16} />
            Trial Request Received
          </div>

          <h1 className="animate-fade-up-delay-1 mt-5 font-[family-name:var(--font-outfit)] text-3xl font-semibold leading-[1.15] tracking-tight text-navy sm:text-4xl md:text-5xl">
            You're All Set! Welcome to AnswerKeeper.
          </h1>

          <p className="animate-fade-up-delay-2 mx-auto mt-5 max-w-2xl text-base leading-relaxed text-navy-muted sm:text-lg">
            Your 14-day free trial request has been registered. Our onboarding team is setting up your dispatch environment and will reach out shortly.
          </p>

          <div className="animate-fade-up-delay-3 mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl bg-blue px-6 text-sm font-semibold text-white shadow-lg shadow-blue/25 transition-all duration-300 ease-out hover:-translate-y-1 hover:bg-blue-dark hover:shadow-xl hover:shadow-blue/35 sm:w-auto"
            >
              Return Home
              <ArrowRight size={16} aria-hidden="true" />
            </Link>

            <a
              href="tel:+14127252760"
              className="inline-flex h-14 w-full items-center justify-center gap-2 rounded-xl border border-border bg-white px-6 text-sm font-semibold text-navy shadow-xs transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue hover:text-blue hover:shadow-md sm:w-auto"
            >
              <Phone size={16} aria-hidden="true" />
              Test Live Demo: +1 (412) 725-2760
            </a>
          </div>
        </div>

        {/* Hero Motion Visual Section */}
        <div className="relative mt-12 w-full sm:mt-16">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-white to-transparent" />
          <ThankYouVisual />
        </div>
      </div>
    </main>
  );
}

function ThankYouVisual() {
  return (
    <div className="animate-float-soft mx-auto max-w-5xl px-5 sm:px-8">
      <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_8px_40px_rgba(11,31,58,0.08)] transition-all duration-300 hover:shadow-[0_12px_50px_rgba(11,31,58,0.12)]">
        
        {/* Window Topbar */}
        <div className="flex items-center gap-2 border-b border-border bg-surface px-4 py-3">
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="h-2.5 w-2.5 rounded-full bg-border-strong" />
          <span className="ml-3 text-xs font-medium text-navy-soft">
            Live Dispatch Onboarding Status
          </span>
        </div>

        {/* Content Layout */}
        <div className="grid gap-0 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="border-b border-border p-5 sm:p-7 lg:border-b-0 lg:border-r">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-blue">
                  Account Setup
                </p>
                <p className="mt-1 font-[family-name:var(--font-outfit)] text-xl font-semibold text-navy">
                  Dispatch Line Activation
                </p>
                <p className="mt-1 text-sm text-navy-muted">
                  Status: Initializing customize Phone Agent
                </p>
              </div>
              
              <div className="relative flex h-11 w-11 shrink-0 items-center justify-center">
                <span className="animate-pulse-ring absolute inset-0 rounded-full bg-blue/30" />
                <span className="relative flex h-9 w-9 items-center justify-center rounded-full bg-blue text-xs font-bold text-white shadow-xs">
                  ACTIVE
                </span>
              </div>
            </div>

            <div className="mt-6 space-y-3">
              <ChatBubble
                who="AnswerKeeper"
                text="Welcome aboard! Your 14-day free trial environment has been initiated."
                tone="ai"
              />
              <ChatBubble
                who="System"
                text="Instructions to connect your phone number and Google Calendar have been sent to your email."
                tone="ai"
              />
            </div>
          </div>

          <div className="bg-surface/70 p-5 sm:p-7">
            <p className="text-xs font-semibold uppercase tracking-wider text-navy-soft">
              Trial Specifications
            </p>
            <div className="mt-4 space-y-3">
              <InfoRow label="Access Plan" value="14-Day Free Trial" highlight />
              <InfoRow label="Dispatch Availability" value="24/7 Response Time" />
              <InfoRow label="Calendar Integration" value="Google Calendar Sync" />
              <InfoRow label="Setup Support" value="Assisted Onboarding" />
            </div>

            <div className="mt-6 rounded-xl border border-blue-mid bg-blue-soft px-4 py-3 shadow-xs transition-all duration-300 hover:border-blue hover:shadow-md">
              <p className="text-sm font-semibold text-navy">
                What happens next?
              </p>
              <p className="mt-1 text-xs leading-relaxed text-navy-muted">
                Follow the onboarding email steps to forward your calls whenever you are busy on a job site.
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
        className={`max-w-[92%] rounded-2xl px-3.5 py-2.5 text-left transition-all duration-300 hover:scale-[1.01] sm:max-w-[85%] ${
          isAi
            ? "rounded-tl-md bg-blue-soft text-navy hover:shadow-xs"
            : "rounded-tr-md bg-navy text-white hover:shadow-xs"
        }`}
      >
        <p className={`text-[11px] font-semibold ${isAi ? "text-blue" : "text-blue-mid"}`}>
          {who}
        </p>
        <p className="mt-0.5 text-sm leading-relaxed whitespace-pre-line">{text}</p>
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
    <div className="flex items-center justify-between gap-3 rounded-xl border border-border bg-white px-3.5 py-2.5 transition-all duration-300 hover:-translate-y-0.5 hover:border-blue/40 hover:shadow-xs">
      <span className="text-xs font-medium text-navy-soft">{label}</span>
      <span
        className={`text-right text-sm font-semibold ${
          highlight ? "text-blue" : "text-navy"
        }`}
      >
        {value}
      </span>
    </div>
  );
}