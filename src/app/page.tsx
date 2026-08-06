"use client";

import { useState } from "react";

import {
  Navbar,
  Hero,
  Problem,
  Features,
  HowItWorks,
  Benefits,
  Testimonials,
  FAQ,
  FinalCTA,
  Footer,
} from "@/components/landing";

import { DemoModal } from "@/components/landing/DemoModal";

export default function Home() {
  const [demoOpen, setDemoOpen] = useState(false);

  return (
    <div id="top" className="flex min-h-full flex-col">
      <Navbar />

      <main className="flex-1">
        <Hero onWatchDemo={() => setDemoOpen(true)} />

        <Problem />

        <Features />

        <HowItWorks />

        <Benefits />

        <Testimonials />

        <FAQ />

        <FinalCTA onWatchDemo={() => setDemoOpen(true)} />
      </main>

      <Footer />

      <DemoModal
        open={demoOpen}
        onClose={() => setDemoOpen(false)}
      />
    </div>
  );
}