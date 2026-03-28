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
import Testimonials from "@/components/sections/Testimonials";
import CurriculumSection from "@/components/sections/CurriculumSection";
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
      <LogoStrip />
      <Programs />
      <Outcomes />
      <Testimonials />
      <CurriculumSection />
      <StatsStrip />
      <Placement />
      <Pricing />
      <FAQ />
      <FinalCTA />
      <Footer />
    </>
  );
}
