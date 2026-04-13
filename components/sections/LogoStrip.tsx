"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const companiesRow1 = [
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company1.webp", alt: "Hiring partner company 1 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company2.webp", alt: "Hiring partner company 2 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company3.webp", alt: "Hiring partner company 3 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company5.webp", alt: "Hiring partner company 5 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company6.webp", alt: "Hiring partner company 6 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company7.webp", alt: "Hiring partner company 7 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company8.webp", alt: "Hiring partner company 8 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company9.webp", alt: "Hiring partner company 9 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company10.webp", alt: "Hiring partner company 10 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company11.webp", alt: "Hiring partner company 11 logo" }
];

const companiesRow2 = [
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company12.webp", alt: "Hiring partner company 12 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company13.webp", alt: "Hiring partner company 13 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company14.webp", alt: "Hiring partner company 14 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company15.webp", alt: "Hiring partner company 15 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company16.webp", alt: "Hiring partner company 16 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company17.webp", alt: "Hiring partner company 17 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company18.webp", alt: "Hiring partner company 18 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company19.webp", alt: "Hiring partner company 19 logo" },
  { src: "https://d1qnndbrfkpp2h.cloudfront.net/static-images/companies/company20.webp", alt: "Hiring partner company 20 logo" }
];

export default function LogoStrip() {
  return (
    <section style={{
      background: "linear-gradient(90deg, #FFFFFF 0%, #F0F7FF 100%)",
      padding: "80px 0",
      color: "#0F172A",
      fontFamily: "var(--font-inter), sans-serif",
      overflow: "hidden"
    }}>
      <style>{`
        .scrolling-track-left {
          display: flex;
          width: max-content;
          animation: scrollLeft 40s linear infinite;
        }
        .scrolling-track-right {
          display: flex;
          width: max-content;
          animation: scrollRight 40s linear infinite;
        }
        
        .scrolling-track-left:hover, .scrolling-track-right:hover {
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
          background: #FFFFFF;
          border-radius: 12px;
          height: 64px;
          width: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 12px;
          padding: 16px;
          flex-shrink: 0;
          box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        }

        .logo-box img {
          max-width: 100%;
          max-height: 100%;
          object-fit: contain;
          transition: transform 0.3s ease;
        }
        
        .logo-box:hover img {
          transform: scale(1.05);
        }
      `}</style>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>

        {/* Header Section */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "60px", flexWrap: "wrap", gap: "24px" }}>
          <div style={{ maxWidth: "700px" }}>
            <h2 style={{ fontSize: "2.4rem", fontWeight: 800, marginBottom: "16px", color: "#0F172A", letterSpacing: "-0.02em" }}>
              Professional Courses and Placements in the UK
            </h2>
            <p style={{ fontSize: "1.05rem", color: "#475569", lineHeight: 1.6 }}>
              Top-tier training programs designed for individuals looking to upskill, pursue professional courses, and secure prominent placements in the UK.
            </p>
          </div>
          <Link href="/contact" style={{
            background: "#D4AF37", // Brit Institute Gold
            color: "#111827",
            padding: "16px 32px",
            borderRadius: "8px",
            fontWeight: 700,
            fontSize: "1rem",
            border: "none",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            cursor: "pointer",
            boxShadow: "0 10px 25px rgba(212, 175, 55, 0.3)",
            whiteSpace: "nowrap",
            transition: "transform 0.2s, background 0.2s"
          }}
            className="btn-gold"
          >
            Start A Free Demo
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
          </Link>
        </div>

      </div>

      {/* Scrolling Logos */}
      <div style={{ display: "flex", flexDirection: "column", gap: "24px", marginBottom: "80px", position: "relative" }}>

        {/* Row 1 - Left scroll */}
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="scrolling-track-left" aria-hidden="true">
            {[...companiesRow1, ...companiesRow1].map((src, i) => (
              <div key={`r1-${i}`} className="logo-box">
                <Image src={src.src} alt={src.alt} width={148} height={40} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

        {/* Row 2 - Right scroll */}
        <div style={{ display: "flex", overflow: "hidden" }}>
          <div className="scrolling-track-right" aria-hidden="true">
            {[...companiesRow2, ...companiesRow2].map((src, i) => (
              <div key={`r2-${i}`} className="logo-box">
                <Image src={src.src} alt={src.alt} width={148} height={40} loading="lazy" />
              </div>
            ))}
          </div>
        </div>

      </div>

      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px" }}>
        {/* Divider with Text */}
        <div style={{ display: "flex", alignItems: "center", gap: "20px", marginBottom: "40px" }}>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, transparent, rgba(30,64,175,0.1))" }} />
          <div style={{ background: "#EFF6FF", color: "#1D4ED8", padding: "6px 20px", borderRadius: "99px", fontSize: "0.9rem", fontWeight: 700, border: "1px solid rgba(29, 78, 216, 0.2)" }}>
            Curriculum Designed to Propel Your Career
          </div>
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to left, transparent, rgba(30,64,175,0.1))" }} />
        </div>

        {/* 4 Feature Cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" }}>
          {[
            { text: "Immersive learning experience that blends theory with practical application.", icon: <LineChartIcon /> },
            { text: "Results-driven learning journeys to empower you with the skills for success.", icon: <StarIcon /> },
            { text: "Learning Pathways tailored to specific roles and career goals.", icon: <CheckCircleIcon /> },
            { text: "Equip yourself with the skills required to thrive in the future job market.", icon: <LockIcon /> }
          ].map((item, idx) => (
            <div key={idx} style={{
              background: "#FFFFFF",
              borderRadius: "16px",
              padding: "24px",
              display: "flex",
              gap: "16px",
              alignItems: "center",
              boxShadow: "0 4px 20px rgba(0,0,0,0.15)"
            }}>
              <div style={{ width: "48px", height: "48px", borderRadius: "10px", background: "#EFF6FF", display: "flex", alignItems: "center", justifyContent: "center", color: "#1D4ED8", flexShrink: 0 }}>
                {item.icon}
              </div>
              <p style={{ color: "#374151", fontSize: "0.9rem", lineHeight: 1.5, margin: 0, fontWeight: 600 }}>
                {item.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function LineChartIcon() { return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>; }
function StarIcon() { return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>; }
function CheckCircleIcon() { return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>; }
function LockIcon() { return <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>; }
