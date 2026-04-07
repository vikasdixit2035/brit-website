"use client";

import { useState, useEffect } from "react";

import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import PainPoints from "@/components/sections/PainPoints";
import Solution from "@/components/sections/Solution";
import Outcomes from "@/components/sections/Outcomes";
import Testimonials from "@/components/sections/Testimonials";
import Programs from "@/components/sections/Programs";
import StickyForm from "@/components/sections/StickyForm";
export default function Home() {
  const [banner, setBanner] = useState(true);

  return (
    <>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      {/* 1. Hero */}
      <Hero />

      {/* Logo Strip for initial trust */}
      <LogoStrip />

      {/* 2. Pain Points */}
      <PainPoints />

      {/* 3. Solution */}
      <Solution />

      {/* 4. Outcomes */}
      <Outcomes />

      {/* 5. Proof (Testimonials) */}
      <Testimonials />

      {/* 6. Programme Snapshot */}
      <Programs />

      {/* 7. Sticky Form */}
      <StickyForm />

      <Footer />
    </>
  );
}
