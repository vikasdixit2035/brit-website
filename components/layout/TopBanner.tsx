"use client";

// --- Configuration & Helpers ---
const BRAND_BLUE = "#24101F";
const BRAND_GOLD = "#D4AF37";
const UPCOMING_BATCH_DATE = " 24 october 2026";

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
          background: linear-gradient(90deg, ${BRAND_BLUE}, #3a1831 58%, #d95700);
          width: 100%;
          min-height: 40px;
          padding: 6px 0;
          display: flex;
          align-items: center;
          justify-content: center; /* Centered content */
          position: relative;
          overflow: hidden;
        }
        .banner-content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 24px;
          padding: 0 64px 0 20px;
          max-width: 100%;
          min-width: 0;
          flex-wrap: nowrap;
        }
        .banner-item {
          display: flex;
          align-items: center;
          gap: 8px;
          min-width: 0;
        }
        .banner-text-bold {
          color: #ffffff;
          font-weight: 700;
          font-size: 0.9rem;
          letter-spacing: -0.01em;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .banner-text-medium {
          color: #ffffff;
          font-weight: 500;
          font-size: 0.9rem;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .banner-cta-btn {
          background: ${BRAND_GOLD};
          color: #000000;
          border: none;
          border-radius: 6px;
          padding: 6px 16px;
          font-size: 0.85rem;
          font-weight: 700;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s;
          white-space: nowrap;
          flex-shrink: 0;
        }
        .banner-cta-btn:hover {
          background: #facc15;
        }
        .banner-close-btn {
          position: absolute;
          right: 20px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          color: #ffffff;
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

        /* --- Responsive Top Banner --- */
        @media (max-width: 980px) {
          .banner-cohort-item {
            display: none !important;
          }
          .banner-content {
            gap: 12px;
            padding-right: 56px;
          }
        }
        @media (max-width: 560px) {
          .banner-bar {
            min-height: 48px;
          }
          .banner-content {
            gap: 8px;
            padding: 0 48px 0 12px;
          }
          .banner-text-bold,
          .banner-text-medium {
            font-size: 0.72rem;
          }
          .banner-cta-btn {
            padding: 4px 10px;
            font-size: 0.72rem;
            border-radius: 5px;
          }
          .banner-close-btn {
            right: 10px;
          }
          .header-spacer {
            height: 48px;
          }
        }
        @media (max-width: 480px) {
          .banner-content {
            gap: 6px;
            padding-right: 44px; /* Space for absolute close button */
          }
          .banner-bar {
            min-height: 52px;
          }
          .header-spacer {
            height: 52px;
          }
        }

        /* Ensure content below header isn't hidden */
        .header-spacer {
          height: 40px; /* 40px banner */
        }
      `}</style>

      <div className="alma-header">
        <div className="header-fixed-container">
          {/* --- Top Banner (centered, fixed) --- */}
          <div className="banner-bar">
            <div className="banner-content">
              {/* Send icon + Text */}
              <div className="banner-item">
                <BannerSendIcon fill="#ffffff" />
                <span className="banner-text-bold">Upcoming Batch: Data, AI and Automation Careers</span>
              </div>

              {/* Stopwatch + Text */}
              <div className="banner-item banner-cohort-item">
                <BannerStopwatchIcon fill="#ffffff" />
                <span className="banner-text-medium">Upcoming batches : {UPCOMING_BATCH_DATE}</span>
              </div>

              {/* Button */}
              <a href="/apply" className="banner-cta-btn">Apply Now</a>
            </div>

            <button className="banner-close-btn" onClick={onClose} aria-label="Close banner">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
          </div>

        </div>

        {/* Spacer to push content down from the fixed header */}
        <div className="header-spacer" />
      </div>
    </>
  );
}
