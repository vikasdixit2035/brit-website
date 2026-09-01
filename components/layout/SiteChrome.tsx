"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/layout/Navbar";
import TopBanner from "@/components/layout/TopBanner";

const TOP_BANNER_STORAGE_KEY = "brit-institute-top-banner-closed";

export default function SiteChrome() {
  const [banner, setBanner] = useState(false);

  useEffect(() => {
    const frame = window.requestAnimationFrame(() => {
      setBanner(window.localStorage.getItem(TOP_BANNER_STORAGE_KEY) !== "true");
    });
    return () => window.cancelAnimationFrame(frame);
  }, []);

  const closeBanner = () => {
    window.localStorage.setItem(TOP_BANNER_STORAGE_KEY, "true");
    setBanner(false);
  };

  return (
    <>
      <TopBanner visible={banner} onClose={closeBanner} />
      <Navbar hasBanner={banner} />
    </>
  );
}
