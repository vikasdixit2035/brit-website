"use client";

import { useEffect, useRef, useState } from "react";

/* ───────────────────────────────────────────────
   AI‑themed icon carousel items
   ─────────────────────────────────────────────── */
const CAROUSEL_ITEMS = [
  { label: "Data Analytics", icon: "analytics" },
  { label: "AI Language Processing", icon: "language" },
  { label: "Autonomous Edge AI", icon: "edge" },
  { label: "Computer Vision", icon: "vision" },
  { label: "Machine Learning", icon: "ml" },
  { label: "Deep Learning", icon: "deep" },
  { label: "Natural Language", icon: "nlp" },
  { label: "Robotics AI", icon: "robotics" },
  { label: "Generative AI", icon: "genai" },
  { label: "Neural Networks", icon: "neural" },
];

export default function Outcomes() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(2);
  const [isAnimating, setIsAnimating] = useState(false);

  /* auto-advance carousel every 3s */
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true);
      setActiveIdx((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  /* after animation ends, reset flag */
  useEffect(() => {
    const t = setTimeout(() => setIsAnimating(false), 1400);
    return () => clearTimeout(t);
  }, [activeIdx]);

  return (
    <section id="outcomes" className="outcomes-master-section">
      <style>{`
        /* ─────────── ROOT SECTION ─────────── */
        .outcomes-master-section {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: stretch;
          justify-content: space-between;
          gap: 0;
          overflow: hidden;
          background: #0F172A;
          padding: 0 64px;
          box-shadow: 0 4px 36px 0 rgba(0,0,0,0.16);
          font-family: system-ui, -apple-system, 'Segoe UI', sans-serif;
        }
        @media (min-width: 1120px) {
          .outcomes-master-section {
            flex-direction: row;
            gap: 80px;
          }
        }
        @media (max-width: 768px) {
          .outcomes-master-section { padding: 0 16px; }
        }

        /* ─────────── BLUR GLOW ─────────── */
        .glow-tl {
          position: absolute;
          left: -108px; top: -156px;
          z-index: 30;
          width: 138px; height: 260px;
          transform: rotate(-139.7deg);
          background: #1D4ED8;
          filter: blur(180px);
          pointer-events: none;
        }
        .glow-br {
          position: absolute;
          right: -108px; bottom: -156px;
          z-index: 30;
          width: 138px; height: 260px;
          transform: rotate(-139.7deg);
          background: #1D4ED8;
          filter: blur(180px);
          pointer-events: none;
        }

        /* ─────────── FREE TAG ─────────── */
        .free-tag {
          position: absolute;
          left: -70px; top: 10px;
          z-index: 30;
          display: flex;
          height: 36px; width: 200px;
          transform: rotate(-37.16deg);
          align-items: center;
          justify-content: center;
          gap: 10px;
          border-radius: 8px;
          border: 0.4px solid rgba(31,31,31,0.20);
          background: #F6D29E;
          padding: 6px 10px;
          font-size: 12px;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: -0.28px;
          line-height: 1.4;
          color: #fff;
          backdrop-filter: blur(40px);
        }
        @media (min-width: 768px) {
          .free-tag {
            left: -88px; top: 5px;
            width: 240px;
            padding: 7px 12px;
            font-size: 13px;
          }
        }
        @media (min-width: 1024px) {
          .free-tag {
            left: -90px; top: 20px;
            width: 269px;
            padding: 8px 14px;
            font-size: 14px;
          }
        }
        .free-tag-text {
          background: #D4AF37;
          -webkit-text-fill-color: #0F172A;
          background-clip: unset;
          font-weight: 900;
          font-size: 16px;
          letter-spacing: 2px;
        }

        /* ─────────── LEFT CONTENT ─────────── */
        .outcomes-left {
          position: relative;
          z-index: 10;
          display: flex;
          width: 100%;
          flex-direction: column;
          padding-top: 64px;
          padding-bottom: 40px;
        }
        @media (min-width: 768px) {
          .outcomes-left {
            padding-top: 56px;
            padding-bottom: 56px;
          }
        }
        @media (min-width: 1120px) {
          .outcomes-left { max-width: 560px; }
        }

        .outcomes-heading {
          font-size: 20px;
          font-weight: 600;
          line-height: 1;
          color: #fff;
        }
        @media (min-width: 768px) {
          .outcomes-heading { font-size: 32px; }
        }
        .outcomes-heading-italic {
          font-style: italic;
          color: #D4AF37;
        }
        .outcomes-subtitle {
          margin-top: 8px;
          font-size: 14px;
          line-height: 1.5;
          color: #cccccc;
        }
        @media (min-width: 768px) {
          .outcomes-subtitle { font-size: 16px; }
        }

        /* ─────── STATS ROW ─────── */
        .outcomes-stats-row {
          margin-top: 24px;
          display: flex;
          flex-wrap: wrap;
          gap: 16px 48px;
          font-size: 14px;
          color: rgba(255,255,255,0.9);
        }
        @media (min-width: 768px) {
          .outcomes-stats-row {
            flex-direction: row;
            align-items: center;
            gap: 40px;
            font-size: 16px;
          }
        }
        .outcomes-stat-item {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          gap: 4px;
          font-weight: 600;
          line-height: 1.5;
          color: #D4AF37;
        }
        .outcomes-stat-label {
          font-weight: 400;
          color: rgba(255,255,255,0.9);
        }

        /* ─────── CTA BUTTON ─────── */
        .outcomes-cta-row {
          margin-top: 32px;
          display: flex;
          gap: 24px;
        }
        .outcomes-cta-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 6px;
          border: 1px solid #D4AF37;
          background: #D4AF37;
          color: #0F172A;
          padding: 0 20px;
          height: 48px;
          font-size: 14px;
          font-weight: 600;
          line-height: 24px;
          cursor: pointer;
          transition: background 0.15s, transform 0.15s;
          text-transform: capitalize;
          white-space: nowrap;
        }
        .outcomes-cta-btn:hover {
          background: #B08D2C;
          transform: translateY(-1px);
        }

        /* ─────────── RIGHT CAROUSEL ─────────── */
        .outcomes-right {
          position: relative;
          min-height: 300px;
          flex: 1;
          color: #fff;
        }

        /* Background pattern */
        .carousel-bg-pattern {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 50%;
          background-size: contain;
          background-position: center top;
          background-repeat: no-repeat;
          display: none;
        }
        .carousel-bg-pattern-bottom {
          position: absolute;
          bottom: 0; left: 0;
          width: 100%; height: 50%;
          transform: rotate(180deg);
          background-size: contain;
          background-position: center top;
          background-repeat: no-repeat;
          display: none;
        }
        @media (min-width: 768px) {
          .carousel-bg-pattern,
          .carousel-bg-pattern-bottom { display: block; }
        }

        /* Edge fade */
        .carousel-fade-left {
          position: absolute;
          left: 0; top: 0;
          z-index: 10;
          height: 100%; width: 50%;
          background: linear-gradient(90deg, #0F172A 0%, rgba(0,0,0,0) 20%);
          pointer-events: none;
        }
        .carousel-fade-right {
          position: absolute;
          right: 0; top: 0;
          z-index: 10;
          height: 100%; width: 50%;
          background: linear-gradient(270deg, #0F172A 0%, rgba(0,0,0,0) 20%);
          pointer-events: none;
        }

        /* Carousel wrapper */
        .carousel-container {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .carousel-track-wrap {
          width: 100%;
          height: 340px;
          padding-top: 30px;
          overflow: hidden;
          position: relative;
        }
        .carousel-track {
          display: flex;
          transition: transform 1.4s ease;
        }
        .carousel-slide {
          flex: 0 0 224px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 16px;
          text-align: center;
        }
        .carousel-icon-wrap {
          width: 114px;
          height: 114px;
          margin-bottom: 16px;
          transition: transform 1.4s linear;
        }
        .carousel-icon-wrap.active {
          transform: scale(1);
        }
        .carousel-icon-wrap.inactive {
          transform: scale(0.4);
        }
        .carousel-label {
          margin-bottom: 8px;
          white-space: nowrap;
          font-size: 14px;
          font-weight: 600;
          font-style: italic;
          color: #D4AF37;
          transition: opacity 1.4s;
        }
        @media (min-width: 768px) {
          .carousel-label { font-size: 16px; }
        }
        .carousel-label.active { opacity: 1; }
        .carousel-label.inactive { opacity: 0; }

        /* ─── dot pattern background ─── */
        .outcomes-dotgrid {
          position: absolute;
          inset: 0;
          z-index: 1;
          opacity: 0.04;
          background-image:
            radial-gradient(circle, #BDA077 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
        }
      `}</style>

      {/* Glows */}
      <div className="glow-tl" />
      <div className="glow-br" />

      {/* Dot-grid pattern */}
      <div className="outcomes-dotgrid" />

      {/* FREE tag */}
      <div className="free-tag">
        <span className="free-tag-text">FREE</span>
      </div>

      {/* ═══ LEFT CONTENT ═══ */}
      <div className="outcomes-left">
        <div>
          <h2 className="outcomes-heading">
            <span className="outcomes-heading-italic">Master</span> AI for a
            Future-Ready Career
          </h2>
          <p className="outcomes-subtitle">
            Unlock the &quot;Ultimate GenAI Handbook&quot; and kickstart your AI
            learning today for FREE!
          </p>
        </div>

        {/* Stats */}
        <div className="outcomes-stats-row">
          <div className="outcomes-stat-item">
            50K+
            <span className="outcomes-stat-label">Downloads</span>
          </div>
          <div className="outcomes-stat-item">
            4.9/5
            <span className="outcomes-stat-label">Rating</span>
          </div>
          <div className="outcomes-stat-item">
            30+
            <span className="outcomes-stat-label">Hours Content</span>
          </div>
        </div>

        {/* CTA */}
        <div className="outcomes-cta-row">
          <button className="outcomes-cta-btn" type="button">
            Unlock Free AI Ebook
          </button>
        </div>
      </div>

      {/* ═══ RIGHT CAROUSEL ═══ */}
      <div className="outcomes-right">
        {/* edge fades */}
        <div className="carousel-fade-left" />
        <div className="carousel-fade-right" />

        <div className="carousel-container">
          <div className="carousel-track-wrap">
            <div
              ref={trackRef}
              className="carousel-track"
              style={{
                transform: `translate3d(${-activeIdx * 224 + 224}px, 0, 0)`,
              }}
            >
              {CAROUSEL_ITEMS.map((item, i) => (
                <div className="carousel-slide" key={i}>
                  <div
                    className={`carousel-icon-wrap ${i === activeIdx ? "active" : "inactive"
                      }`}
                  >
                    <CarouselIcon type={item.icon} />
                  </div>
                  <h3
                    className={`carousel-label ${i === activeIdx ? "active" : "inactive"
                      }`}
                  >
                    {item.label}
                  </h3>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════════════════════
   SVG icon per carousel slide
   ═══════════════════════════════════════ */
function CarouselIcon({ type }: { type: string }) {
  const fill = "#D4AF37";
  const fillLight = "#E5C158";
  const size = "100%";

  switch (type) {
    case "analytics":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      );
    case "medical":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 104 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M98.2656 39.651C96.0245 39.651 94.1281 41.0992 93.4041 43.099H77.5781V32.7552H91.3698C92.318 32.7552 93.0938 31.9794 93.0938 31.0313V25.5491C95.0935 24.825 96.5417 22.9286 96.5417 20.6875C96.5417 17.843 94.2143 15.5156 91.3698 15.5156C88.5253 15.5156 86.1979 17.843 86.1979 20.6875C86.1979 22.9286 87.646 24.825 89.6458 25.5491V29.3073H77.5781V27.5833C77.5781 22.8252 73.7165 18.9635 68.9583 18.9635H62.0625V10.0334C64.0623 9.30938 65.5104 7.41302 65.5104 5.17188C65.5104 2.32734 63.1831 0 60.3385 0C57.494 0 55.1667 2.32734 55.1667 5.17188C55.1667 7.41302 56.6148 9.30938 58.6146 10.0334V18.9635H44.8229V10.0334C46.8227 9.30938 48.2708 7.41302 48.2708 5.17188C48.2708 2.32734 45.9435 0 43.099 0C40.2544 0 37.9271 2.32734 37.9271 5.17188C37.9271 7.41302 39.3752 9.30938 41.375 10.0334V18.9635H34.4792C29.721 18.9635 25.8594 22.8252 25.8594 27.5833V29.3073H13.7917V25.5491C15.7915 24.825 17.2396 22.9286 17.2396 20.6875C17.2396 17.843 14.9122 15.5156 12.0677 15.5156C9.22318 15.5156 6.89583 17.843 6.89583 20.6875C6.89583 22.9286 8.34396 24.825 10.3438 25.5491V31.0313C10.3438 31.9794 11.1195 32.7552 12.0677 32.7552H25.8594V43.099H10.0334C9.30938 41.0992 7.41302 39.651 5.17188 39.651C2.32734 39.651 0 41.9784 0 44.8229C0 47.6675 2.32734 49.9948 5.17188 49.9948C7.41302 49.9948 9.30938 48.5467 10.0334 46.5469H25.8594V56.8906H12.0677C11.1195 56.8906 10.3438 57.6664 10.3438 58.6146V64.0968C8.34396 64.8208 6.89583 66.7172 6.89583 68.9583C6.89583 71.8029 9.22318 74.1302 12.0677 74.1302C14.9122 74.1302 17.2396 71.8029 17.2396 68.9583C17.2396 66.7172 15.7915 64.8208 13.7917 64.0968V60.3385H25.8594V62.0625C25.8594 66.8206 29.721 70.6823 34.4792 70.6823H41.375V79.6124C39.3752 80.3365 37.9271 82.2328 37.9271 84.474C37.9271 87.3185 40.2544 89.6458 43.099 89.6458C45.9435 89.6458 48.2708 87.3185 48.2708 84.474C48.2708 82.2328 46.8227 80.3365 44.8229 79.6124V70.6823H58.6146V79.6124C56.6148 80.3365 55.1667 82.2328 55.1667 84.474C55.1667 87.3185 57.494 89.6458 60.3385 89.6458C63.1831 89.6458 65.5104 87.3185 65.5104 84.474C65.5104 82.2328 64.0623 80.3365 62.0625 79.6124V70.6823H68.9583C73.7165 70.6823 77.5781 66.8206 77.5781 62.0625V60.3385H89.6458V64.0968C87.646 64.8208 86.1979 66.7172 86.1979 68.9583C86.1979 71.8029 88.5253 74.1302 91.3698 74.1302C94.2143 74.1302 96.5417 71.8029 96.5417 68.9583C96.5417 66.7172 95.0935 64.8208 93.0938 64.0968V58.6146C93.0938 57.6664 92.318 56.8906 91.3698 56.8906H77.5781V46.5469H93.4041C94.1281 48.5467 96.0245 49.9948 98.2656 49.9948C101.11 49.9948 103.438 47.6675 103.438 44.8229C103.438 41.9784 101.11 39.651 98.2656 39.651Z"
            fill={fill}
          />
        </svg>
      );

    case "language":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 74 96"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M36.86 12.73C33.34 12.73 30.5 9.88 30.5 6.36C30.5 2.85 33.34 0 36.86 0C40.37 0 43.22 2.85 43.22 6.36C43.22 9.88 40.37 12.73 36.86 12.73ZM13 35V52.49C13 55.12 15.15 57.26 17.77 57.26H55.95C58.57 57.26 60.72 55.12 60.72 52.49V35C60.72 32.37 58.57 30.22 55.95 30.22H17.77C15.15 30.22 13 32.37 13 35ZM19.36 41.36C19.36 38.73 21.51 36.58 24.13 36.58C26.76 36.58 28.91 38.73 28.91 41.36C28.91 43.98 26.76 46.13 24.13 46.13C21.51 46.13 19.36 43.98 19.36 41.36ZM49.58 46.13C46.96 46.13 44.81 43.98 44.81 41.36C44.81 38.73 46.96 36.58 49.58 36.58C52.21 36.58 54.36 38.73 54.36 41.36C54.36 43.98 52.21 46.13 49.58 46.13Z"
            fill={fill}
          />
          <path
            d="M66.81 33.4V31.81C66.81 23.92 60.38 17.5 52.49 17.5H38.18V11.14C38.18 10.26 37.46 9.54 36.58 9.54C35.71 9.54 34.99 10.26 34.99 11.14V17.5H33.4C32.53 17.5 31.81 18.21 31.81 19.09C31.81 19.96 32.53 20.68 33.4 20.68H52.49C58.63 20.68 63.63 25.67 63.63 31.81V54.08C63.63 57.6 60.78 60.44 57.26 60.44H15.91C12.39 60.44 9.54 57.6 9.54 54.08V31.81C9.54 25.67 14.54 20.68 20.68 20.68C21.55 20.68 22.27 19.96 22.27 19.09C22.27 18.21 21.55 17.5 20.68 17.5C12.79 17.5 6.36 23.92 6.36 31.81V33.4C2.85 33.4 0 36.25 0 39.77V46.13C0 49.64 2.85 52.49 6.36 52.49V54.08C6.36 59.35 10.64 63.63 15.91 63.63H27.04V66.81H19.09C14.7 66.81 11.13 70.37 11.13 74.76C11.13 86.17 20.41 95.44 31.81 95.44H41.36C52.76 95.44 62.03 86.17 62.03 74.76C62.03 70.37 58.47 66.81 54.08 66.81H46.13V63.63H57.26C62.53 63.63 66.81 59.35 66.81 54.08V52.49C70.32 52.49 73.17 49.64 73.17 46.13V39.77C73.17 36.25 70.32 33.4 66.81 33.4Z"
            fill={fill}
          />
          <path
            d="M46.27 74.76H27.18C25.42 74.76 24 76.18 24 77.94V81.12C24 82.88 25.42 84.3 27.18 84.3H46.27C48.03 84.3 49.45 82.88 49.45 81.12V77.94C49.45 76.18 48.03 74.76 46.27 74.76Z"
            fill={fill}
          />
        </svg>
      );

    case "edge":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 114 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M56.6 86.93C54.29 86.93 52.41 88.81 52.41 91.12C52.41 93.43 54.29 95.32 56.6 95.32C58.91 95.32 60.8 93.43 60.8 91.12C60.8 88.81 58.91 86.93 56.6 86.93ZM56.6 91.66C56.31 91.66 56.07 91.42 56.07 91.12C56.07 90.83 56.31 90.59 56.6 90.59C56.9 90.59 57.14 90.83 57.14 91.12C57.14 91.42 56.9 91.66 56.6 91.66Z"
            fill={fill}
          />
          <path
            d="M95.33 56.16H90.45V52.98H95.75C96.38 52.98 96.89 52.47 96.89 51.84C96.89 51.21 96.38 50.7 95.75 50.7H82.39C81.76 50.7 81.25 51.21 81.25 51.84C81.25 52.47 81.76 52.98 82.39 52.98H88.17V56.16H83.3C82.44 56.16 81.74 56.86 81.74 57.72V59.65C78.83 59.46 69.9 58.67 65.19 54.26C64.98 54.09 64.76 53.95 64.51 53.85V48.04C64.51 45.96 63.67 43.92 62.21 42.46C61.24 41.49 60.05 40.79 58.81 40.45C58.53 40.37 58.25 40.31 57.97 40.26V35.5C58.1 35.47 58.24 35.45 58.37 35.42C61.3 34.63 63.35 31.95 63.35 28.91C63.35 25.19 60.32 22.16 56.6 22.16C52.88 22.16 49.85 25.19 49.85 28.91C49.85 31.97 51.91 34.65 54.82 35.41C55.1 35.49 55.39 35.55 55.69 35.6V40.2C55.27 40.25 54.85 40.32 54.43 40.45C51.05 41.4 48.69 44.52 48.69 48.04V54.04C48.57 54.11 48.46 54.19 48.36 54.29C43.75 58.59 35.07 59.43 32.26 59.59V57.72C32.26 56.86 31.56 56.16 30.7 56.16H25.83V52.98H31.61C32.24 52.98 32.75 52.47 32.75 51.84C32.75 51.21 32.24 50.7 31.61 50.7H18.25C17.62 50.7 17.11 51.21 17.11 51.84C17.11 52.47 17.62 52.98 18.25 52.98H23.55V56.16H18.67C17.81 56.16 17.11 56.86 17.11 57.72V66.78C17.11 70.4 20.05 73.34 23.67 73.34H25.71C29.11 73.34 31.91 70.73 32.23 67.41H36.9L43.54 75.58C44.27 76.49 45.36 77.01 46.53 77.01H47.4V81.51H43.64C42.13 81.51 40.9 82.74 40.9 84.25V97.98C40.9 99.49 42.13 100.72 43.64 100.72H69.57C71.08 100.72 72.31 99.49 72.31 97.98V84.25C72.31 82.74 71.08 81.51 69.57 81.51H65.8V77.01H67.03C68.21 77.01 69.3 76.49 70.02 75.58L76.68 67.41H81.33C82.06 70.71 84.88 73.34 88.29 73.34H90.33C93.95 73.34 96.89 70.4 96.89 66.78V57.72C96.89 56.86 96.19 56.16 95.33 56.16Z"
            fill={fill}
          />
          <path
            d="M62.8 76.06V84.09C62.8 84.32 62.85 84.53 62.93 84.72C62.97 84.82 63.03 84.88 63.06 84.93C63.12 85.02 63.18 85.14 63.28 85.23C63.57 85.53 63.97 85.71 64.42 85.71H72.91L77.02 91.51C75.97 93.08 76 95.12 77.08 96.65C78.52 98.69 81.34 99.17 83.38 97.73C85.42 96.29 85.91 93.46 84.47 91.42C83.39 89.89 81.47 89.18 79.65 89.65L74.97 83.03C74.95 83 74.92 82.98 74.89 82.98H74.89C74.59 82.68 74.2 82.47 73.74 82.47H66.04V76.06H62.8Z"
            fill={fillLight}
          />
          <path
            d="M55.84 76.06V89.73C54.09 90.4 52.93 92.08 52.93 93.95C52.93 96.45 54.95 98.48 57.45 98.48C59.95 98.48 61.98 96.45 61.98 93.96C61.98 92.08 60.82 90.4 59.07 89.73V76.06H55.84Z"
            fill={fillLight}
          />
          <path
            d="M48.77 76.06V82.47H41.07C40.61 82.47 40.2 82.68 39.91 82.98H39.91C39.88 82.98 39.85 83 39.83 83.03L35.15 89.65C33.33 89.18 31.41 89.89 30.33 91.42C28.89 93.46 29.37 96.29 31.41 97.73C33.45 99.17 36.28 98.69 37.72 96.65C38.81 95.12 38.83 93.08 37.79 91.52L41.89 85.71H50.39C50.83 85.71 51.23 85.53 51.52 85.23C51.62 85.14 51.68 85.02 51.74 84.93C51.77 84.88 51.83 84.82 51.88 84.72C51.96 84.53 52 84.32 52 84.09V76.06H48.77Z"
            fill={fillLight}
          />
        </svg>
      );

    case "vision":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 114 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M86.27 64.66C81.86 64.78 78.35 68.39 78.35 72.8C78.35 77.29 81.99 80.93 86.48 80.93C90.98 80.93 94.62 77.29 94.62 72.8C94.62 68.31 90.99 64.67 86.5 64.66H86.27ZM86.48 68.22C89.05 68.25 91.06 70.29 91.06 72.8C91.06 75.33 89.01 77.37 86.48 77.37C83.95 77.37 81.91 75.33 81.91 72.8C81.91 70.27 83.95 68.22 86.48 68.22Z"
            fill={fill}
          />
          <path
            d="M28.5 64.66C24.09 64.78 20.58 68.39 20.58 72.8C20.58 77.29 24.22 80.93 28.71 80.93C33.21 80.93 36.85 77.29 36.85 72.8C36.85 68.31 33.22 64.67 28.73 64.66H28.5ZM28.71 68.22C31.28 68.25 33.29 70.29 33.29 72.8C33.29 75.33 31.24 77.37 28.71 77.37C26.19 77.37 24.14 75.33 24.14 72.8C24.14 70.27 26.19 68.22 28.71 68.22Z"
            fill={fill}
          />
          <path
            d="M42.58 43.17C42.11 43.17 41.63 43.18 41.16 43.2C37.36 43.32 33.59 43.81 29.91 44.76C25.52 45.9 21.31 47.68 17.28 49.75C16.06 50.38 14.85 51.04 13.66 51.72C12.52 52.28 11.8 53.46 11.8 54.74C11.8 55.13 11.86 55.52 11.99 55.89C12.07 56.13 12.15 56.37 12.22 56.62C12.73 58.33 12.97 60.14 12.65 61.89C12.36 63.54 11.58 65.09 11.22 66.77C11.08 67.42 11 68.09 11.07 68.75C11.15 69.42 11.38 70.09 11.81 70.61C12.32 71.23 13.05 71.6 13.81 71.81C14.56 72.03 15.34 72.09 16.1 72.17C16.92 72.26 17.74 72.37 18.55 72.51C18.71 67.01 23.21 62.63 28.72 62.63C34.33 62.63 38.89 67.18 38.89 72.8V72.8C38.89 73.37 38.84 73.94 38.75 74.5H76.46C76.36 73.94 76.32 73.37 76.32 72.8C76.32 67.19 80.86 62.63 86.48 62.63C92.1 62.63 96.65 67.19 96.65 72.8C96.65 73.39 96.6 73.97 96.5 74.55C98.86 74.47 101.21 74.29 103.55 74.01C104.57 73.9 105.61 73.76 106.54 73.29C107.28 72.91 107.92 72.33 108.31 71.59C108.79 70.69 108.86 69.64 108.81 68.64C108.76 67.64 108.6 66.66 108.61 65.68C108.62 64.19 109.04 62.73 109.23 61.23C109.24 61.15 109.25 61.08 109.25 61.01C109.25 60.5 108.94 60.05 108.46 59.87L108.34 59.82C104.5 58.26 100.54 57 96.53 56C91.08 54.65 85.53 53.75 79.94 53.33C76.46 51.25 72.81 49.47 69.03 48.02C63.72 45.99 58.16 44.62 52.53 43.84C49.24 43.39 45.91 43.15 42.58 43.17Z"
            fill={fill}
          />
        </svg>
      );

    case "ml":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 114 114"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M33.48 56.97C33.48 68.83 43.1 78.45 54.97 78.45V99.93H51.84C48.47 99.93 45.76 97.21 45.76 93.85C45.76 88.45 39.22 85.74 35.39 89.56C33.02 91.94 29.17 91.94 26.79 89.56L22.37 85.14C19.99 82.76 19.99 78.91 22.37 76.55C26.19 72.71 23.48 66.17 18.08 66.17C14.72 66.17 12 63.46 12 60.1V53.84C12 50.47 14.72 47.76 18.08 47.76C23.48 47.76 26.19 41.22 22.37 37.39C19.99 35.02 19.99 31.17 22.37 28.79L26.79 24.37C29.17 21.99 33.02 21.99 35.39 24.37C39.22 28.19 45.76 25.48 45.76 20.08C45.76 16.72 48.47 14 51.84 14H54.97V35.48C43.1 35.48 33.48 45.1 33.48 56.97Z"
            fill={fill}
          />
          <path
            d="M41.68 50.83H80.67C83.25 50.83 85.76 49.89 87.74 48.17L93.96 42.73C94.6 42.17 94.66 41.19 94.09 40.56C93.54 39.92 92.56 39.86 91.93 40.42L85.73 45.86C84.32 47.08 82.52 47.76 80.67 47.76H41.68C40.83 47.76 40.14 48.45 40.14 49.29C40.14 50.14 40.83 50.83 41.68 50.83ZM85.65 58.5C86.5 58.5 87.19 57.81 87.19 56.97C87.19 56.12 86.5 55.43 85.65 55.43H39.62C38.78 55.43 38.09 56.12 38.09 56.97C38.09 57.81 38.78 58.5 39.62 58.5H85.65Z"
            fill="#E1C9A6"
          />
          <circle cx="71.84" cy="29.35" r="4.6" fill={fill} />
          <circle cx="84.12" cy="20.14" r="4.6" fill={fill} />
          <circle cx="71.84" cy="83.05" r="4.6" fill={fill} />
          <circle cx="84.12" cy="92.26" r="4.6" fill={fill} />
          <circle cx="96.4" cy="38.55" r="4.6" fill={fill} />
          <circle cx="96.4" cy="73.85" r="4.6" fill={fill} />
          <circle cx="90.26" cy="56.97" r="4.6" fill={fill} />
        </svg>
      );

    case "deep":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Layered neural network style icon */}
          <rect x="10" y="20" width="25" height="25" rx="5" fill={fill} opacity="0.6" />
          <rect x="38" y="10" width="25" height="25" rx="5" fill={fill} opacity="0.8" />
          <rect x="66" y="20" width="25" height="25" rx="5" fill={fill} opacity="0.6" />
          <rect x="10" y="55" width="25" height="25" rx="5" fill={fill} opacity="0.6" />
          <rect x="38" y="65" width="25" height="25" rx="5" fill={fill} opacity="0.8" />
          <rect x="66" y="55" width="25" height="25" rx="5" fill={fill} opacity="0.6" />
          <line x1="35" y1="32" x2="38" y2="22" stroke={fillLight} strokeWidth="2" />
          <line x1="63" y1="22" x2="66" y2="32" stroke={fillLight} strokeWidth="2" />
          <line x1="35" y1="68" x2="38" y2="78" stroke={fillLight} strokeWidth="2" />
          <line x1="63" y1="78" x2="66" y2="68" stroke={fillLight} strokeWidth="2" />
          <line x1="50" y1="35" x2="50" y2="65" stroke={fillLight} strokeWidth="2" />
        </svg>
      );

    case "nlp":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Chat/language bubble with brain */}
          <path
            d="M20 25C20 19.48 24.48 15 30 15H70C75.52 15 80 19.48 80 25V55C80 60.52 75.52 65 70 65H55L40 80V65H30C24.48 65 20 60.52 20 55V25Z"
            fill={fill}
            opacity="0.9"
          />
          <circle cx="38" cy="40" r="4" fill="#1F1F1F" />
          <circle cx="50" cy="40" r="4" fill="#1F1F1F" />
          <circle cx="62" cy="40" r="4" fill="#1F1F1F" />
          <path
            d="M35 52C35 52 42 58 50 58C58 58 65 52 65 52"
            stroke="#1F1F1F"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      );

    case "robotics":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Robot head */}
          <rect x="25" y="30" width="50" height="40" rx="8" fill={fill} />
          <circle cx="50" cy="25" r="5" fill={fillLight} />
          <line x1="50" y1="30" x2="50" y2="25" stroke={fillLight} strokeWidth="3" />
          <circle cx="38" cy="47" r="6" fill="#1F1F1F" />
          <circle cx="62" cy="47" r="6" fill="#1F1F1F" />
          <circle cx="38" cy="47" r="3" fill={fillLight} />
          <circle cx="62" cy="47" r="3" fill={fillLight} />
          <rect x="40" y="58" width="20" height="4" rx="2" fill="#1F1F1F" />
          <rect x="20" y="42" width="5" height="16" rx="2.5" fill={fill} />
          <rect x="75" y="42" width="5" height="16" rx="2.5" fill={fill} />
          <rect x="32" y="75" width="10" height="15" rx="3" fill={fill} />
          <rect x="58" y="75" width="10" height="15" rx="3" fill={fill} />
        </svg>
      );

    case "genai":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Sparkle / magic wand AI */}
          <path
            d="M50 10L55 30L75 25L60 40L80 50L60 60L75 75L55 70L50 90L45 70L25 75L40 60L20 50L40 40L25 25L45 30Z"
            fill={fill}
          />
          <circle cx="50" cy="50" r="12" fill="#1F1F1F" />
          <text
            x="50"
            y="56"
            textAnchor="middle"
            fill={fill}
            fontSize="14"
            fontWeight="bold"
            fontFamily="system-ui"
          >
            AI
          </text>
        </svg>
      );

    case "neural":
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Neural network nodes */}
          {/* Layer 1 */}
          <circle cx="20" cy="25" r="8" fill={fill} />
          <circle cx="20" cy="50" r="8" fill={fill} />
          <circle cx="20" cy="75" r="8" fill={fill} />
          {/* Layer 2 */}
          <circle cx="50" cy="35" r="8" fill={fill} />
          <circle cx="50" cy="65" r="8" fill={fill} />
          {/* Layer 3 */}
          <circle cx="80" cy="50" r="8" fill={fill} />
          {/* Connections */}
          <line x1="28" y1="25" x2="42" y2="35" stroke={fillLight} strokeWidth="1.5" />
          <line x1="28" y1="25" x2="42" y2="65" stroke={fillLight} strokeWidth="1" opacity="0.5" />
          <line x1="28" y1="50" x2="42" y2="35" stroke={fillLight} strokeWidth="1.5" />
          <line x1="28" y1="50" x2="42" y2="65" stroke={fillLight} strokeWidth="1.5" />
          <line x1="28" y1="75" x2="42" y2="65" stroke={fillLight} strokeWidth="1.5" />
          <line x1="28" y1="75" x2="42" y2="35" stroke={fillLight} strokeWidth="1" opacity="0.5" />
          <line x1="58" y1="35" x2="72" y2="50" stroke={fillLight} strokeWidth="1.5" />
          <line x1="58" y1="65" x2="72" y2="50" stroke={fillLight} strokeWidth="1.5" />
        </svg>
      );

    default:
      return (
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="50" cy="50" r="30" fill={fill} />
        </svg>
      );
  }
}