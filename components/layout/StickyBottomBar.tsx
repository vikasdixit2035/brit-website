"use client";

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
          background: linear-gradient(90deg, #fce4ec 0%, #f8bbd0 50%, #fce4ec 100%);
          border-top: 1px solid #f48fb1;
          padding: 10px 0;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          font-family: system-ui, -apple-system, sans-serif;
          box-shadow: 0 -2px 12px rgba(0, 0, 0, 0.08);
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
          color: #37474f;
          font-size: 0.88rem;
          font-weight: 500;
          letter-spacing: 0.01em;
        }

        .sticky-bottom-bar__text--bold {
          font-weight: 700;
          color: #1a237e;
        }

        .sticky-bottom-bar__divider {
          color: #90a4ae;
          margin: 0 4px;
          font-weight: 300;
        }

        .sticky-bottom-bar__phone {
          color: #1a237e;
          font-weight: 700;
          font-size: 0.88rem;
          text-decoration: none;
          transition: color 0.2s;
        }

        .sticky-bottom-bar__phone:hover {
          color: #d50000;
          text-decoration: underline;
        }

        .sticky-bottom-bar__cta {
          color: #d50000;
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
          color: #b71c1c;
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
          <a href="tel:+447520664011" className="sticky-bottom-bar__phone">
            +447520664011
          </a>
          <span className="sticky-bottom-bar__text">or</span>
          <a href="#final-cta" className="sticky-bottom-bar__cta">
            REGISTER FOR FREE »
          </a>
        </div>
      </div>
    </>
  );
}
