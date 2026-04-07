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
import OfferModal from "@/components/ui/OfferModal";

/* ══════════════════════════════════════════
   PAGE — Brit Institute Homepage
   Layout follows the Ads-Ready copy:
   Hero → Logo Strip → Pain Points →
   Solution → Outcomes → Proof →
   Programme Snapshot → Sticky Form
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
        if (el.closest("form")) return false; // Ignore submit buttons inside forms
        
        const text = el.textContent?.toLowerCase() || "";
        const href = el.getAttribute("href") || "";
        return (
          el.classList.contains("btn-gold") ||
          text.includes("enroll") ||
          text.includes("register") ||
          text.includes("apply now") ||
          text.includes("talk to career expert") ||
          text.includes("get course details") ||
          text.includes("consultation") ||
          href === "#final-cta" ||
          href === "/login"
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
