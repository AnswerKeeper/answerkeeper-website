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
      "You can set rules to warm-transfer to a live team member during business hours, or review every transcript and recording from your dashboard after the call.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="border-t border-border bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wider text-blue">
            FAQ
          </p>
          <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-semibold tracking-tight text-navy sm:text-4xl">
            Questions from plumbing owners
          </h2>
          <p className="mt-4 text-base leading-relaxed text-navy-muted sm:text-lg">
            Straight answers about how AnswerKeeper fits into a real shop.
          </p>
        </div>

        <div className="mt-12 space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all duration-300 ease-out hover:-translate-y-1 hover:border-blue/40 hover:shadow-lg hover:shadow-blue/10"
              >
                <button
                  type="button"
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left cursor-pointer"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                >
                  <span className="font-[family-name:var(--font-outfit)] text-sm font-semibold text-navy sm:text-base">
                    {faq.question}
                  </span>
                  <ChevronDown
                    size={18}
                    className={`shrink-0 text-navy-soft transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-blue" : ""
                    }`}
                  />
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-navy-muted">
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