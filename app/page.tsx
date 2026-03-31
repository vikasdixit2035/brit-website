"use client";

import { useState } from "react";

import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import StatsStrip from "@/components/sections/StatsStrip";
import Programs from "@/components/sections/Programs";
import Outcomes from "@/components/sections/Outcomes";
import Highlights from "@/components/sections/Highlights";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import CurriculumSection from "@/components/sections/CurriculumSection";
import HowItWorks from "@/components/sections/HowItWorks";
import Placement from "@/components/sections/Placement";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

/* ══════════════════════════════════════════
   PAGE — Full assembly
   ══════════════════════════════════════════ */
export default function Home() {
  const [banner, setBanner] = useState(true);

  return (
    <>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />
      <Hero />
      <StatsStrip />
      <LogoStrip />
      <Programs />
      <Outcomes />
      <Highlights />
      <CurriculumSection />
      <Projects />
      <Testimonials />
      <HowItWorks />
      <Placement />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
