import type { Metadata } from "next";
import "./globals.css";
import MouseGlow from "@/components/MouseGlow";

export const metadata: Metadata = {
  title: "AnswerKeeper | 24/7 AI Call Handling & Dispatch",
  description: "Automated call triage and dispatch for HVAC and plumbing contractors.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950 transition-colors duration-300 dark:bg-slate-950 dark:text-slate-100">
        <MouseGlow />
        {children}
      </body>
    </html>
  );
}