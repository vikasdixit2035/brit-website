"use client";

import { useState, useEffect } from "react";

import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import Programs from "@/components/sections/Programs";
import Outcomes from "@/components/sections/Outcomes";
import Highlights from "@/components/sections/Highlights";
import Projects from "@/components/sections/Projects";
import Testimonials from "@/components/sections/Testimonials";
import HowItWorks from "@/components/sections/HowItWorks";
import FinalCTA from "@/components/sections/FinalCTA";
import OfferModal from "@/components/ui/OfferModal";

/* ══════════════════════════════════════════
   PAGE — Brit Institute Homepage
   Layout follows the final copy document:
   Hero → Social Proof Strip → Choose Your Path →
   Career Outcomes → Programme Highlights →
   Projects & Portfolio → Testimonials →
   How It Works → Final CTA
   ══════════════════════════════════════════ */
export default function Home() {
  const [banner, setBanner] = useState(true);
  const [offerModalOpen, setOfferModalOpen] = useState(false);

  useEffect(() => {
    const handleCTAClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest("a");
      const button = target.closest("button");
      
      const isCTA = (el: HTMLElement | null) => {
        if (!el) return false;
        const text = el.textContent?.toLowerCase() || "";
        const href = el.getAttribute("href") || "";
        return (
          el.classList.contains("btn-gold") ||
          text.includes("enroll") ||
          text.includes("register") ||
          href === "#final-cta" ||
          text.includes("consultation")
        );
      };

      if (isCTA(link) || isCTA(button)) {
        e.preventDefault();
        setOfferModalOpen(true);
      }
    };

    document.addEventListener("click", handleCTAClick);
    return () => document.removeEventListener("click", handleCTAClick);
  }, []);

  return (
    <>
      <OfferModal isOpen={offerModalOpen} onClose={() => setOfferModalOpen(false)} />
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      {/* 1. Hero */}
      <Hero />

      {/* 2. Company Strip (formerly Enterprise Solutions + Logo Strip) */}
      <LogoStrip />

      {/* 3. Choose Your Path */}
      <Programs />

      {/* 4. Career Outcomes Snapshot */}
      <Outcomes />

      {/* 5. Programme Highlights */}
      <Highlights />

      {/* 6. Testimonials */}
      <Testimonials />

      {/* 7. Projects and Portfolio */}
      <Projects />

      {/* 8. How It Works */}
      <HowItWorks />

      {/* 9. Final CTA */}
      <FinalCTA />

      <Footer />
    </>
  );
}
