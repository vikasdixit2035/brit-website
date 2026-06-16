"use client";

import { useState } from "react";

import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BritInspiredHome from "@/components/sections/BritInspiredHome";
import FAQ from "@/components/sections/FAQ";

export default function Home() {
  const [banner, setBanner] = useState(true);

  return (
    <>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      <BritInspiredHome />
      <FAQ />
      <Footer />
    </>
  );
}
