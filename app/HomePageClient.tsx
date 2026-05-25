"use client";

import { useState } from "react";

import TopBanner from "@/components/layout/TopBanner";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

import Hero from "@/components/sections/Hero";
import LogoStrip from "@/components/sections/LogoStrip";
import PainPoints from "@/components/sections/PainPoints";
// import Solution from "@/components/sections/Solution";
import Outcomes from "@/components/sections/Outcomes";
import Testimonials from "@/components/sections/Testimonials";
import IndustryExperts from "@/components/sections/IndustryExperts";
import Programs from "@/components/sections/Programs";
import NextCohort from "@/components/sections/NextCohort";
import {
  AboutTrust,
  BenefitsGrid,
  BlogAndContact,
  CertificateAndChooser,
  PlacementJourney,
} from "@/components/sections/EngagementSections";
import FinalCTA from "@/components/sections/FinalCTA";
import FAQ from "@/components/sections/FAQ";
import StickyForm from "@/components/sections/StickyForm";
export default function Home() {
  const [banner, setBanner] = useState(true);

  return (
    <>
      <TopBanner visible={banner} onClose={() => setBanner(false)} />
      <Navbar hasBanner={banner} />

      {/* 1. Hero */}
      <Hero />

      {/* Recruiting partners */}
      <LogoStrip />

      {/* Brand trust */}
      <AboutTrust />

      {/* 2. Pain Points */}
      <PainPoints />

      {/* 3. Solution */}
      {/* <Solution /> */}

      {/* What learners get */}
      <BenefitsGrid />

      {/* Certificate and course chooser */}
      <CertificateAndChooser />

      {/* 4. Outcomes */}
      <Outcomes />

      {/* Career outcomes and salary clarity */}
      {/* <CareerOutcomes /> */}

      {/* Curriculum preview */}
      {/* <CurriculumSection /> */}

      {/* Portfolio projects */}
      {/* <Projects /> */}

      {/* 5. Proof (Testimonials) */}
      <Testimonials />

      {/* 6. Industry Experts */}
      <IndustryExperts />

      {/* Placement journey */}
      <PlacementJourney />

      {/* 7. Programme Snapshot */}
      <Programs />

      {/* Cohort urgency */}
      <NextCohort />

      {/* Blog and contact */}
      <BlogAndContact />

      {/* 8. Final CTA */}
      <FinalCTA />

      {/* 9. FAQ */}
      <FAQ />

      {/* 10. Sticky Form */}
      <StickyForm />

      <Footer />
    </>
  );
}
