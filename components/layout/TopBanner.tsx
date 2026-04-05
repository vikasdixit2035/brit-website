"use client";

import { useState, useEffect, useRef } from "react";

// --- Configuration & Helpers ---
const BRAND_RED = "#FF0033"; // AlmaBetter brand red
const BRAND_CYAN = "#00E5FF"; // Cyan/teal for "Free" badge
const BANNER_YELLOW_START = "#ffe55c";
const BANNER_YELLOW_END = "#ffb057";

// --- Private Helper Icons for Top Banner ---
// Paper plane / Send style icon from image
function BannerSendIcon({ fill }: { fill: string }) {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill={fill} style={{ transform: "translateY(1px)" }}>
      {/* Heavy share/send arrow with curved background */}
      <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z" />
    </svg>
  );
}

// Key-shaped stopwatch icon from image
function BannerStopwatchIcon({ fill }: { fill: string }) {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {/* Outer ring of the key shape */}
      <circle cx="12" cy="13" r="10" strokeWidth="2.5" />
      {/* Hand / Dial indicator */}
      <polyline points="12 8 12 13 16 15" strokeWidth="2.5" />
      {/* Stem / Winder */}
      <path d="M12 3v3M9.5 4.5L12 3l2.5 1.5M10.5 4a1.5 1.5 0 011.5-1.5 1.5 1.5 0 011.5 1.5V4" strokeWidth="2" />
    </svg>
  );
}

// --- Component Definition ---

interface TopBannerProps {
  visible: boolean;
  onClose: () => void;
}

export default function TopBanner({ visible, onClose }: TopBannerProps) {
  const [scrolled, setScrolled] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);

  // Scroll handler for navbar shadow
  useEffect(() => {
    const fn = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, []);

  if (!visible) return null;

  return (
    <>
      <style>{`
        /* Global structure structure */
        .alma-header * {
          box-sizing: border-box;
          font-family: system-ui, -apple-system, sans-serif;
        }

        /* Fixed container */
        .header-fixed-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 100;
          display: flex;
          flex-direction: column;
        }

        /* --- Top Banner --- */
        .banner-bar {
          background: linear-gradient(90deg, ${BANNER_YELLOW_START} 0%, ${BANNER_YELLOW_END} 100%);
          width: 100%;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center; /* Centered content */
          position: relative;
        }
        .banner-content {
          display: flex;
          align-items: center;
          gap: 24px;
          padding: 0 20px;
        }
        .banner-item {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .banner-text-bold {
          color: #000000;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
        }
        .banner-text-medium {
          color: #000000;
          font-weight: 500;
          font-size: 0.9rem;
        }
        .banner-cta-btn {
          background: ${BRAND_RED};
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 6px 16px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          transition: background 0.2s;
        }
        .banner-cta-btn:hover {
          background: #d6002b;
        }
        .banner-close-btn {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #000;
          font-size: 20px;
          font-weight: bold;
          cursor: pointer;
          opacity: 0.5;
          transition: opacity 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 4px;
        }
        .banner-close-btn:hover {
          opacity: 1;
        }

        /* --- Navbar --- */
        .nav-bar {
          background: #000000;
          width: 100%;
          padding: 16px 0;
          transition: box-shadow 0.3s ease;
        }
        .nav-content {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          maxWidth: 1400px;
          margin: 0 auto;
          padding: 0 40px;
        }

        /* Left section (Logo + Courses) */
        .nav-left {
          display: flex;
          align-items: center;
          gap: 24px;
        }
        .logo-text {
          font-size: 1.7rem;
          font-weight: 700;
          letter-spacing: -0.03em;
          color: #ffffff;
          text-decoration: none;
        }
        .logo-text-bold {
          border-bottom: 3px solid ${BRAND_RED};
          padding-bottom: 2px;
        }

        /* Courses Button (Distinctive white) */
        .nav-courses-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          color: ${BRAND_RED};
          font-weight: 700;
          font-size: 0.95rem;
          background: #ffffff;
          border: none;
          border-radius: 6px;
          cursor: pointer;
          padding: 10px 18px;
          white-space: nowrap;
          transition: background 0.2s;
        }
        .nav-courses-btn:hover {
          background: #f1f5f9;
        }
        .courses-icon {
          stroke: ${BRAND_RED};
          transition: transform 0.2s;
        }

        /* Right section (Links + Sign In) */
        .nav-right {
          display: flex;
          align-items: center;
          gap: 36px;
        }
        .nav-link {
          color: #ffffff;
          font-size: 0.95rem;
          font-weight: 500;
          text-decoration: none;
          position: relative;
        }
        .nav-link:hover {
          color: #d1d5db;
        }
        /* Positions Free Badge */
        .free-badge {
          position: absolute;
          top: -14px;
          right: -10px;
          background: ${BRAND_CYAN};
          color: #000;
          font-size: 0.6rem;
          font-weight: 700;
          text-transform: uppercase;
          padding: 2px 6px;
          border-radius: 4px;
          line-height: 1.2;
        }

        /* Sign In Button */
        .nav-signin-btn {
          background: ${BRAND_RED};
          color: #ffffff;
          border: none;
          border-radius: 6px;
          padding: 10px 24px;
          font-size: 0.95rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s;
        }
        .nav-signin-btn:hover {
          background: #d6002b;
        }

        /* Ensure content below header isn't hidden */
        .header-spacer {
          height: 104px; /* ~40px banner + ~64px navbar */
        }
      `}</style>

      <div className="alma-header">
        <div className="header-fixed-container">
          {/* --- Top Banner (centered, fixed) --- */}
          <div className="banner-bar">
            <div className="banner-content">
              {/* Send icon + Text */}
              <div className="banner-item">
                <BannerSendIcon fill="#000000" />
                <span className="banner-text-bold">Book a live demo session</span>
              </div>

              {/* Stopwatch + Text */}
              <div className="banner-item">
                <BannerStopwatchIcon fill="#000000" />
                <span className="banner-text-medium">Next cohort starts on 10 Apr, 2026</span>
              </div>

              {/* Button */}
              <button className="banner-cta-btn">Book Now</button>
            </div>
            
            <button className="banner-close-btn" onClick={onClose} aria-label="Close banner">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

          {/* --- Navbar (fixed) --- */}
          <nav className="nav-bar" style={{ boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.5)" : "none" }}>
            <div className="nav-content">
              {/* Left section: Logo + Courses Button */}
              <div className="nav-left">
                {/* Logo recreated with text & underline */}
                <a href="/" className="logo-text">
                  Alma<span className="logo-text-bold">Better</span>
                </a>

                {/* Courses Trigger (white button) */}
                <div ref={dropRef} style={{ position: "relative" }}>
                  <button className="nav-courses-btn">
                    Courses
                    <svg className="courses-icon" width="14" height="14" viewBox="0 0 24 24" fill="none" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="6 9 12 15 18 9" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Right section: Links + Sign In Button */}
              <div className="nav-right">
                <a href="#placements" className="nav-link">Placements</a>
                <a href="#masterclass" className="nav-link">Masterclass</a>
                {/* Free badge is absolute within this relative link */}
                <a href="#practice" className="nav-link">
                  <span className="free-badge">Free</span>
                  Practice
                </a>
                <a href="#hire" className="nav-link">Hire From Us</a>
                <a href="#more" className="nav-link">More</a>

                {/* Sign In button */}
                <a href="/login" className="nav-signin-btn">
                  Sign In
                </a>
              </div>
            </div>
          </nav>
        </div>

        {/* Spacer to push content down from the fixed header */}
        <div className="header-spacer" />
      </div>
    </>
  );
}