"use client";

import Image from "next/image";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import { Briefcase, Building2, Rocket, Star, TrendingUp, Trophy, Users, Zap } from "lucide-react";
import useReveal from "@/hooks/useReveal";

type PartnerLogo = {
  src: string;
  alt: string;
};

const legacyPartners: PartnerLogo[] = [
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company1.webp", alt: "Hiring partner company 1 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company2.webp", alt: "Hiring partner company 2 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company3.webp", alt: "Hiring partner company 3 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company5.webp", alt: "Hiring partner company 5 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company6.webp", alt: "Hiring partner company 6 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company7.webp", alt: "Hiring partner company 7 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company8.webp", alt: "Hiring partner company 8 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company9.webp", alt: "Hiring partner company 9 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company10.webp", alt: "Hiring partner company 10 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company11.webp", alt: "Hiring partner company 11 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company12.webp", alt: "Hiring partner company 12 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company13.webp", alt: "Hiring partner company 13 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company14.webp", alt: "Hiring partner company 14 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company15.webp", alt: "Hiring partner company 15 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company16.webp", alt: "Hiring partner company 16 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company17.webp", alt: "Hiring partner company 17 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company18.webp", alt: "Hiring partner company 18 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company19.webp", alt: "Hiring partner company 19 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company20.webp", alt: "Hiring partner company 20 logo" },
];

const localPartnerFiles = [
  "Accenture.webp",
  "Allianz logo.webp",
  "DataBricks logo.webp",
  "Evergreen logo.webp",
  "Google Deeo mind logo.webp",
  "HSBC logo.webp",
  "Harrods logo.webp",
  "JP morragn logo.webp",
  "Legal & general Logo.webp",
  "Moonplay logo.webp",
  "Nivoda logo.webp",
  "Poly ai logo.webp",
  "Sky logo.webp",
  "Stat sports logo.webp",
  "arm logo.webp",
  "artemis.webp",
  "blackswan.webp",
  "bumble logo.webp",
  "capgemini.webp",
  "cgi.webp",
  "cityfootball.webp",
  "cloudfare logo.webp",
  "coinbase.webp",
  "confluent.webp",
  "couchbase.webp",
  "cycle.webp",
  "deliveroo.webp",
  "elastic logo.webp",
  "goldman logo.webp",
  "graphcore.webp",
  "mck.webp",
  "monzo.webp",
  "natwest.webp",
  "nvidia.webp",
  "ocado.webp",
  "oodle.webp",
  "pure DC.webp",
  "rackspace.webp",
  "revolut.webp",
  "skyscanner.webp",
  "snowflake.webp",
  "softcat logo.webp",
  "synthesia.webp",
  "thoughts.webp",
  "toluna.webp",
  "tractable.webp",
  "truelayer logo.webp",
  "watson logo.webp",
  "wayfair.webp",
  "wayve.webp",
  "wise.webp",
  "zopa.webp",
];

const localPartners: PartnerLogo[] = localPartnerFiles.map((file) => ({
  src: `/companies/${encodeURIComponent(file)}`,
  alt: file.replace(/\.webp$/i, "").replace(/[_-]+/g, " ").replace(/\s+/g, " ").trim(),
}));

const localSplitPoint = Math.ceil(localPartners.length / 2);
const localRowOne = localPartners.slice(0, localSplitPoint);
const localRowTwo = localPartners.slice(localSplitPoint);
const legacyTrack = [...legacyPartners, ...legacyPartners];
const localTrackOne = [...localRowOne, ...localRowOne];
const localTrackTwo = [...localRowTwo, ...localRowTwo];

function LogoCard({ partner }: { partner: PartnerLogo }) {
  return (
    <div className="logo-box">
      <Image
        src={partner.src}
        alt={partner.alt}
        width={160}
        height={44}
        loading="lazy"
        style={{ width: "auto", height: "auto", maxWidth: "100%", maxHeight: "100%" }}
      />
    </div>
  );
}

type PlacementCard = {
  icon: LucideIcon;
  metric: string;
  label: string;
  background: string;
  iconColor: string;
  accent?: LucideIcon;
};

const placementCards: PlacementCard[] = [
  {
    icon: Users,
    metric: "847+",
    label: "Professionals Placed in Jobs",
    background: "#EFF6FF",
    iconColor: "#2563EB",
  },
  {
    icon: Star,
    metric: "4.8/5",
    label: "Professional Satisfaction",
    background: "#ECFDF3",
    iconColor: "#16A34A",
    accent: Star,
  },
  {
    icon: TrendingUp,
    metric: "98%",
    label: "Job Placement Success",
    background: "#FAF5FF",
    iconColor: "#9333EA",
  },
  {
    icon: Building2,
    metric: "150+",
    label: "Hiring Partners",
    background: "#FFF7ED",
    iconColor: "#EA580C",
  },
];

const placementProofs: { icon: LucideIcon; text: string; color: string }[] = [
  { icon: Trophy, text: "#1 Rated Data Analytics Program in UK", color: "#F59E0B" },
  { icon: Zap, text: "4.9/5 Average Professional Rating", color: "#FBBF24" },
  { icon: Briefcase, text: "Job Placement Guarantee", color: "#92400E" },
  { icon: Rocket, text: "95% Career Success Rate", color: "#2563EB" },
];

function StatCard({ card }: { card: PlacementCard }) {
  const Icon = card.icon;
  const Accent = card.accent;

  return (
    <div
      style={{
        borderRadius: "22px",
        border: "1px solid rgba(226, 232, 240, 0.7)",
        background: card.background,
        padding: "28px 20px 26px",
        boxShadow: "0 18px 38px rgba(15,23,42,0.10)",
        textAlign: "center",
        minHeight: "156px",
      }}
    >
      <div style={{ marginBottom: "12px", color: card.iconColor }}>
        <Icon size={34} strokeWidth={2.3} style={{ margin: "0 auto" }} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "6px",
          fontSize: "2rem",
          fontWeight: 900,
          color: "#020617",
          letterSpacing: 0,
          lineHeight: 1,
          marginBottom: "10px",
        }}
      >
        <span>{card.metric}</span>
        {Accent && <Accent size={30} fill="#FACC15" color="#FACC15" strokeWidth={1.8} />}
      </div>
      <div style={{ fontSize: "0.95rem", fontWeight: 700, color: "#334155", lineHeight: 1.45 }}>
        {card.label}
      </div>
    </div>
  );
}

export default function LogoStrip() {
  const { revealRef } = useReveal();

  return (
    <section
      ref={revealRef}
      style={{
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)",
        padding: "48px 0 36px",
        color: "#0F172A",
        fontFamily: "var(--font-inter), sans-serif",
        overflow: "hidden",
      }}
    >
      <style>{`
        .scrolling-track-left,
        .scrolling-track-right {
          display: flex;
          width: max-content;
          will-change: transform;
        }

        .scrolling-track-left {
          animation: scrollLeft 72s linear infinite;
        }

        .scrolling-track-right {
          animation: scrollRight 72s linear infinite;
        }

        .scrolling-track-left:hover,
        .scrolling-track-right:hover {
          animation-play-state: paused;
        }

        @keyframes scrollLeft {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        @keyframes scrollRight {
          from { transform: translateX(-50%); }
          to { transform: translateX(0); }
        }

        .logo-box {
          background: rgba(255, 255, 255, 0.9);
          border: 1px solid rgba(148, 163, 184, 0.18);
          border-radius: 16px;
          height: 64px;
          width: 176px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 10px;
          padding: 12px 14px;
          flex-shrink: 0;
          box-shadow: 0 10px 30px rgba(15, 23, 42, 0.08);
          backdrop-filter: blur(8px);
          transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
        }

        .logo-box:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 40px rgba(15, 23, 42, 0.12);
          border-color: rgba(212, 175, 55, 0.35);
        }

        .logo-box img {
          width: auto;
          height: auto;
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }

        .logo-box:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <div className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 lg:px-14">
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "28px",
            flexWrap: "wrap",
            gap: "16px",
          }}
        >
          <div style={{ maxWidth: "1040px", flex: "1 1 760px" }}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                marginBottom: "14px",
                borderRadius: "999px",
                border: "1px solid rgba(212,175,55,0.22)",
                background: "rgba(212,175,55,0.08)",
                padding: "7px 12px",
                color: "#9A6B00",
                fontSize: "0.8rem",
                fontWeight: 500,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
              }}
            >
              Our Recruiting Partners
            </div>

          </div>

          <Link href="/courses" className="btn-outline btn-outline-blue" style={{ whiteSpace: "nowrap", alignSelf: "flex-start", marginTop: "8px" }}>
            Explore Courses
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "10px", position: "relative" }}>
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="scrolling-track-left" aria-hidden="true">
            {legacyTrack.map((partner, i) => (
              <LogoCard key={`left-${partner.alt}-${i}`} partner={partner} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="scrolling-track-right" aria-hidden="true">
            {localTrackOne.map((partner, i) => (
              <LogoCard key={`middle-${partner.alt}-${i}`} partner={partner} />
            ))}
          </div>
        </div>

        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="scrolling-track-left" aria-hidden="true">
            {localTrackTwo.map((partner, i) => (
              <LogoCard key={`bottom-${partner.alt}-${i}`} partner={partner} />
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-8 max-w-[1400px] px-6 md:px-10 lg:px-14">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "22px" }}>
          {placementCards.map((card) => (
            <StatCard key={card.metric} card={card} />
          ))}
        </div>
      </div>

      <div
        style={{
          marginTop: "48px",
          background: "#FFFFFF",
          borderTop: "1px solid rgba(226, 232, 240, 0.9)",
          borderBottom: "1px solid rgba(226, 232, 240, 0.9)",
          boxShadow: "0 18px 35px rgba(15,23,42,0.10)",
        }}
      >
        <div
          className="mx-auto max-w-[1400px] px-6 md:px-10 lg:px-14"
          style={{
            padding: "28px 0",
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "20px",
          }}
        >
          {placementProofs.map(({ icon: Icon, text, color }) => (
            <div
              key={text}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "8px",
                padding: "8px",
                color: "#1E293B",
                fontSize: "0.95rem",
                fontWeight: 800,
                lineHeight: 1.45,
                textAlign: "center",
              }}
            >
              <Icon size={18} color={color} fill={text.startsWith("#1") ? color : "none"} strokeWidth={2.5} />
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
