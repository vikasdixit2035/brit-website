"use client";

import { useEffect } from "react";

export default function OpenOfferModalOnMount() {
  useEffect(() => {
    const timer = window.setTimeout(() => {
      window.dispatchEvent(new CustomEvent("brit:open-offer-modal"));
    }, 0);

    return () => window.clearTimeout(timer);
  }, []);

  return null;
}
