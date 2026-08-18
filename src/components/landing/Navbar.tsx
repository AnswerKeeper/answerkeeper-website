"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/pricing", label: "Pricing" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-xl transition-all duration-300 dark:bg-slate-950/85 dark:border-slate-800">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="/" className="group flex items-center gap-3 transition-opacity duration-200 hover:opacity-90">
          <Image
            src="/answerkeeper-logo.png"
            alt="AnswerKeeper"
            width={40}
            height={40}
            priority
            className="transition-transform duration-300 ease-out group-hover:scale-105"
          />

          <span className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-navy dark:text-white">
            AnswerKeeper
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-muted transition-all duration-200 hover:-translate-y-0.5 hover:text-[#5A4FCF] dark:text-slate-300 dark:hover:text-purple-400"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <ThemeToggle />
          <a
            href="https://tally.so/r/D49rpE"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-[#5A4FCF] px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-[#5A4FCF]/25 transition-all duration-300 ease-out hover:-translate-y-0.5 hover:bg-[#5A4FCF]/90 hover:shadow-md hover:shadow-[#5A4FCF]/30 active:translate-y-0"
          >
            Book a Free Demo
          </a>
        </div>

        <div className="flex items-center gap-3 md:hidden">
          <ThemeToggle />
          <button
            type="button"
            aria-label={open ? "Close menu" : "Open menu"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy transition-colors hover:bg-surface dark:text-slate-200 dark:hover:bg-slate-900 md:hidden"
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-white px-5 py-4 shadow-lg dark:border-slate-800 dark:bg-slate-950 md:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy-muted transition-colors hover:bg-surface hover:text-[#5A4FCF] dark:text-slate-300 dark:hover:bg-slate-900 dark:hover:text-purple-400"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://tally.so/r/D49rpE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-[#5A4FCF] px-4 py-3 text-center text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:bg-[#5A4FCF]/90"
            >
              Book a Free Demo
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}