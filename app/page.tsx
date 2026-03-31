"use client";

import { useState } from "react";

import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import StatsStrip from "@/components/sections/StatsStrip";
import Programs from "@/components/sections/Programs";
import Outcomes from "@/components/sections/Outcomes";
import Highlights from "@/components/sections/Highlights";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import NextCohort from "@/components/sections/NextCohort";
import FinalCTA from "@/components/sections/FinalCTA";

/* ══════════════════════════════════════════
   PAGE — Brit Institute Homepage
   Layout follows the final copy document:
   Hero → Social Proof Strip → Choose Your Path →
   Career Outcomes → Programme Highlights →
   Projects & Portfolio → Testimonials →
   How It Works → Next Cohort → Final CTA
   ══════════════════════════════════════════ */
export default function Home() {
  const [banner, setBanner] = useState(true);

  return (
    <>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Social Proof Strip */}
      <StatsStrip />

      {/* 3. Choose Your Path */}
      <Programs />

      {/* 4. Career Outcomes Snapshot */}
      <Outcomes />

      {/* 5. Programme Highlights */}
      <Highlights />

      {/* 6. Projects and Portfolio */}
      <Projects />

      {/* 7. Testimonials */}
      <Testimonials />

      {/* 8. How It Works */}
      <HowItWorks />

      {/* 9. Next Cohort */}
      <NextCohort />

      {/* 10. Final CTA */}
      <FinalCTA />

      <Footer />
    </>
  );
}
