"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean>(false);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <button
      onClick={() => setIsDark(!isDark)}
      className="flex items-center gap-2 rounded-full border border-purple-200 bg-white/80 px-3.5 py-1.5 text-xs font-semibold text-slate-700 shadow-sm backdrop-blur-md transition-all hover:border-purple-400 dark:border-purple-800 dark:bg-slate-900/80 dark:text-purple-200"
      aria-label="Toggle visual theme"
    >
      <span>{isDark ? "🌙 Dark" : "☀️ Light"}</span>
    </button>
  );
}