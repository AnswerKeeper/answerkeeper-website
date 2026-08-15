import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body className="bg-slate-950 text-slate-100 antialiased selection:bg-emerald-500 selection:text-slate-950">
        {children}
      </body>
    </html>
  );
}
