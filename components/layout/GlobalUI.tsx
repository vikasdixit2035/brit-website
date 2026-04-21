"use client";

import { useState, useEffect } from "react";
import OfferModal from "@/components/ui/OfferModal";

export default function GlobalUI() {
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
          el.classList.contains("nav-signin-btn") ||
          el.classList.contains("drawer-signin-btn") ||
          text.includes("enroll") ||
          text.includes("register") ||
          text.includes("apply now") ||
          text.includes("talk to career expert") ||
          text.includes("get course details") ||
          text.includes("consultation") ||
          href === "#final-cta" ||
          href.includes("#sticky-form")
        );
      };

      if (isCTA(link) || isCTA(button)) {
        // If it's a "login" link or "apply now", open the modal
        // We only prevent default if it's intended to be a CTA modal trigger
        e.preventDefault();
        setOfferModalOpen(true);
      }
    };

    document.addEventListener("click", handleCTAClick);
    return () => document.removeEventListener("click", handleCTAClick);
  }, []);

  useEffect(() => {
    const handleOfferModalRequest = () => {
      setOfferModalOpen(true);
    };

    window.addEventListener("brit:open-offer-modal", handleOfferModalRequest);
    return () => window.removeEventListener("brit:open-offer-modal", handleOfferModalRequest);
  }, []);

  return (
    <>
      <OfferModal isOpen={offerModalOpen} onClose={() => setOfferModalOpen(false)} />
    </>
  );
}
