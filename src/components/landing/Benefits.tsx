"use client";

import { useState, useRef } from "react";
import { DollarSign, Moon, ShieldCheck, Users } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Capture More Service Opportunities",
    description:
      "Every answered call gives your business a better chance to win new customers before they contact another company.",
  },
  {
    icon: Moon,
    title: "Stay Available After Hours",
    description:
      "Customers can still reach your business outside normal working hours, helping you capture urgent enquiries and after-hours opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Deliver a Professional Customer Experience",
    description:
      "Every caller receives a consistent, professional response that reflects the quality of your business from the very first conversation.",
  },
  {
    icon: Users,
    title: "Keep Your Team Focused",
    description:
      "Technicians can concentrate on serving customers instead of constantly stopping to answer incoming calls throughout the day.",
  },
];

function BenefitCard({
  benefit,
}: {
  benefit: (typeof benefits)[number];
}) {
  const cardRef = useRef<HTMLElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="group relative overflow-hidden rounded-2xl border border-slate-200/80 bg-white/90 p-6 shadow-sm backdrop-blur-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-[#5A4FCF]/40 hover:shadow-xl hover:shadow-[#5A4FCF]/10 cursor-pointer"
    >
      {/* Interactive Cursor Tracking Spotlight */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(350px circle at ${mousePos.x}px ${mousePos.y}px, rgba(90, 79, 207, 0.08), transparent 80%)`,
        }}
      />

      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-xl bg-[#5A4FCF]/10 text-[#5A4FCF] transition-all duration-300 group-hover:bg-[#5A4FCF] group-hover:text-white group-hover:shadow-md group-hover:shadow-[#5A4FCF]/25">
        <benefit.icon size={20} strokeWidth={1.75} />
      </div>

      <h3 className="relative z-10 mt-5 font-[family-name:var(--font-outfit)] text-base font-semibold text-slate-800">
        {benefit.title}
      </h3>

      <p className="relative z-10 mt-2 text-sm leading-relaxed text-slate-600">
        {benefit.description}
      </p>
    </article>
  );
}

export function Benefits() {
  return (
    <section
      id="benefits"
      className="relative overflow-hidden border-t border-slate-200 bg-white py-20 sm:py-28 text-slate-900"
    >
      {/* Light, Unique & Elegant Background Design */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-0">
        {/* Soft Ambient Pastel Glows */}
        <div className="absolute top-0 left-1/4 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-indigo-50/80 blur-[90px]" />
        <div className="absolute bottom-0 right-1/4 h-[500px] w-[500px] translate-x-1/2 rounded-full bg-pink-50/80 blur-[90px]" />

        {/* Diagonal Strike Line Texture */}
        <div
          className="absolute inset-0 opacity-[0.06]"
          style={{
            backgroundImage: `repeating-linear-gradient(
              -45deg,
              #5A4FCF,
              #5A4FCF 1.5px,
              transparent 1.5px,
              transparent 12px
            )`,
          }}
        />

        {/* Unique Geometric Geometric Network Wireframe (Top-Left) */}
        <svg
          className="absolute -top-16 -left-16 h-[550px] w-[550px] text-[#5A4FCF]/15"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <line x1="100" y1="0" x2="100" y2="200" />
          <line x1="0" y1="100" x2="200" y2="100" />
          <line x1="29.29" y1="29.29" x2="170.71" y2="170.71" />
          <line x1="170.71" y1="29.29" x2="29.29" y2="170.71" />
          <polygon points="100,15 185,100 100,185 15,100" />
          <polygon points="100,35 165,100 100,165 35,100" />
          <polygon points="100,55 145,100 100,145 55,100" />
          <polygon points="100,75 125,100 100,125 75,100" />
        </svg>

        {/* Complementary Geometric Network Wireframe (Bottom-Right) */}
        <svg
          className="absolute -bottom-20 -right-20 h-[500px] w-[500px] text-pink-500/15"
          viewBox="0 0 200 200"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
        >
          <line x1="100" y1="0" x2="100" y2="200" />
          <line x1="0" y1="100" x2="200" y2="100" />
          <line x1="29.29" y1="29.29" x2="170.71" y2="170.71" />
          <line x1="170.71" y1="29.29" x2="29.29" y2="170.71" />
          <polygon points="100,20 180,100 100,180 20,100" />
          <polygon points="100,40 160,100 100,160 40,100" />
          <polygon points="100,60 140,100 100,140 60,100" />
        </svg>
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-[#5A4FCF]">
              Built for Home Service Businesses
            </p>

            {/* Un-bolded, Light Elegance Heading */}
            <h2 className="mt-3 font-[family-name:var(--font-outfit)] text-3xl font-normal tracking-tight text-slate-800 sm:text-4xl">
              Built Around the Way Plumbing & HVAC Businesses Work
            </h2>

            <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
              AnswerKeeper turns every ring into a captured opportunity—so your
              plumbing business grows even when you’re elbows-deep in a repair.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <BenefitCard key={benefit.title} benefit={benefit} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}