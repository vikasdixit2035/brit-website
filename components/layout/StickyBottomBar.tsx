"use client";

import { SITE_PHONE_DISPLAY, SITE_PHONE_UK } from "@/lib/site";

export default function StickyBottomBar() {
  return (
    <>
      <style>{`
        .sticky-bottom-bar {
          position: fixed;
          bottom: 0;
          left: 0;
          width: 100%;
          z-index: 999;
          background:
            linear-gradient(90deg, rgba(29, 78, 216, 0.98) 0%, rgba(255, 255, 255, 0.98) 52%, rgba(212, 175, 55, 0.98) 100%);
          border-top: 1px solid rgba(29, 78, 216, 0.18);
          padding: 10px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: system-ui, -apple-system, sans-serif;
          box-shadow: 0 -4px 18px rgba(29, 78, 216, 0.12);
        }

        .sticky-bottom-bar__content {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
          padding: 0 20px;
        }

        .sticky-bottom-bar__icon {
          font-size: 1rem;
        }

        .sticky-bottom-bar__text {
          color: #1f2937;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        .sticky-bottom-bar__text--bold {
          font-weight: 700;
          color: #0f172a;
        }

        .sticky-bottom-bar__divider {
          color: rgba(15, 23, 42, 0.28);
          margin: 0 4px;
          font-weight: 300;
        }

        .sticky-bottom-bar__phone {
          color: #1d4ed8;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 0.2s;
        }

        .sticky-bottom-bar__phone:hover {
          color: #b45309;
          text-decoration: underline;
        }

        .sticky-bottom-bar__cta {
          color: #b45309;
          font-weight: 800;
          font-size: 0.88rem;
          text-decoration: none;
          text-transform: uppercase;
          letter-spacing: 0.03em;
          margin-left: 4px;
          transition: color 0.2s;
          cursor: pointer;
        }

        .sticky-bottom-bar__cta:hover {
          color: #92400e;
          text-decoration: underline;
        }

        /* Add bottom padding to body so footer content isn't hidden behind the bar */
        body {
          padding-bottom: 46px;
        }

        @media (max-width: 600px) {
          .sticky-bottom-bar {
            padding: 8px 10px;
          }
          .sticky-bottom-bar__text,
          .sticky-bottom-bar__phone,
          .sticky-bottom-bar__cta {
            font-size: 0.75rem;
          }
          .sticky-bottom-bar__content {
            gap: 4px;
          }
        }
      `}</style>

      <div className="sticky-bottom-bar" id="sticky-bottom-bar">
        <div className="sticky-bottom-bar__content">
          <span className="sticky-bottom-bar__icon">🎓</span>
          <span className="sticky-bottom-bar__text sticky-bottom-bar__text--bold">
            Need Help? Get Career Guidance
          </span>
          <span className="sticky-bottom-bar__divider">|</span>
          <span className="sticky-bottom-bar__text">Call Us at</span>
          <a href={`tel:${SITE_PHONE_UK}`} className="sticky-bottom-bar__phone">
            {SITE_PHONE_DISPLAY}
          </a>
          <span className="sticky-bottom-bar__text">or</span>
          <a href="/contact" className="sticky-bottom-bar__cta">
            BOOK FREE CONSULTATION »
          </a>
        </div>
      </div>
    </>
  );
}
