"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Will customers know they’re talking to AI?",
    answer:
      "AnswerKeeper greets callers with your business name and speaks in a natural, professional voice. Most homeowners simply want a fast answer and a booked appointment—and that’s exactly what they get.",
  },
  {
    question: "How fast can we get set up?",
    answer:
      "Most plumbing shops are live the same day. Forward your existing number, share your service area and hours, and AnswerKeeper starts answering with your branding.",
  },
  {
    question: "What happens on true emergencies?",
    answer:
      "Urgent keywords trigger priority handling. AnswerKeeper captures the details, books the earliest available window, and sends an instant SMS to your on-call technician so nothing sits in a queue.",
  },
  {
    question: "Can it schedule into our existing calendar?",
    answer:
      "Yes. AnswerKeeper books appointments into the calendar you already use, respecting the windows and capacity rules you set for diagnostics, repairs, and emergency slots.",
  },
  {
    question: "Do we need new phone hardware?",
    answer:
      "No. Keep your current business number and phones. AnswerKeeper works through call forwarding—no new desk phones, no PBX overhaul.",
  },
  {
    question: "What if we want a human to take over?",
    answer:
      "You can review every call's summary and full transcript directly—we'll get this to you right after each call. A self-serve dashboard and live warm-transfer to your team are on our roadmap.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="relative overflow-hidden border-t border-purple-200/50 bg-gradient-to-b from-purple-50 via-amber-50/30 to-indigo-50/50 py-20 sm:py-28">
      {/* Visible Stripe Pattern Background */}
      <div 
        className="absolute inset-0 z-0 opacity-40 mix-blend-multiply" 
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
      
      {/* Glowing Accent Orbs */}
      <div className="absolute -top-24 left-1/2 z-0 h-96 w-[600px] -translate-x-1/2 rounded-full bg-purple-300/30 blur-3xl pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-purple-700">
            FAQ
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Questions from plumbing owners
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Straight answers about how AnswerKeeper fits into a real shop.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ease-out hover:-translate-y-0.5 shadow-md ${
                  isOpen 
                    ? "border-purple-500 bg-slate-950 text-white shadow-purple-900/20 shadow-xl" 
                    : "border-slate-800 bg-slate-900 text-white hover:border-purple-400 hover:shadow-lg"
                }`}
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-[family-name:var(--font-outfit)] text-base font-semibold text-slate-100 sm:text-lg">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={20}
                    className={`shrink-0 text-slate-400 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-purple-400" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 text-sm leading-relaxed text-slate-300 sm:text-base">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}