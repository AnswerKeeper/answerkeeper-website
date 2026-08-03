"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">

      <a href="/" className="flex items-center gap-3">
  <Image
    src="/answerkeeper-logo.png"
    alt="AnswerKeeper"
    width={40}
    height={40}
    priority
  />

  <span className="font-[family-name:var(--font-outfit)] text-lg font-semibold tracking-tight text-navy">
    AnswerKeeper
  </span>
</a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-navy-muted transition-colors hover:text-navy"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex">
          <a
            href="https://tally.so/r/D49rpE"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl bg-blue px-4 py-2 text-sm font-semibold text-white shadow-sm shadow-blue/25 transition hover:bg-blue-dark"
          >
            Book a Free Demo
          </a>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg text-navy md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>

      </div>

      {open && (
        <div className="border-t border-border bg-white px-5 py-4 md:hidden">

          <nav className="flex flex-col gap-1">

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-navy-muted hover:bg-surface hover:text-navy"
              >
                {link.label}
              </a>
            ))}

            <a
              href="https://tally.so/r/D49rpE"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-xl bg-blue px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Book a Free Demo
            </a>

          </nav>

        </div>
      )}
    </header>
  );
}