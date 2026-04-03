import Image from "next/image";
import { Icons } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <>
      <style>{`
        .hero-section {
          position: relative;
          background: #ffffff;
          overflow: hidden;
          display: flex;
          align-items: center;
          min-height: 100vh;
        }

        .hero-bg-grid {
          position: absolute;
          top: 120px;
          left: 45%;
          width: 200px;
          height: 200px;
          background-image: radial-gradient(#d1d5db 2px, transparent 2px);
          background-size: 20px 20px;
          opacity: 0.5;
          z-index: 0;
          pointer-events: none;
        }

        .hero-image-container {
          position: absolute;
          top: 0;
          right: 0;
          width: 55%;
          height: 100%;
          z-index: 1;
        }

        .hero-image {
          width: 120%;
          height: 100%;
          margin-left: -10%;
          object-fit: cover;
          object-position: top center;
          clip-path: url(#hero-curve);
        }

        .hero-wave-container {
          position: absolute;
          bottom: 0;
          left: 9px;
          right: 0;
          width: 94%;
          height: 280px;
          z-index: 5;
          pointer-events: none;
        }

        .hero-stats-container {
          position: absolute;
          bottom: 50px;
          right: max(5%, calc((100vw - 1200px) / 2));
          display: flex;
          gap: 40px;
          pointer-events: auto;
          padding: 0 24px;
          z-index: 10;
          align-items: center;
        }

        .stat-val { font-size: 2.5rem; font-weight: 800; color: #ffffff; line-height: 1; }
        .stat-label { font-size: 0.85rem; color: #E0E7FF; margin-top: 8px; }
        .stat-divider { width: 1px; height: 50px; background: rgba(255,255,255,0.2); }

        .hero-content-container {
          position: relative;
          z-index: 10;
          margin: 0 auto;
          width: 90%;
          padding: 0 24px;
          display: flex;
        }

        .hero-text-block {
          width: 100%;
          max-width: 580px;
          padding-top: 80px;
          padding-bottom: 140px;
        }

        .hero-cards-grid {
          display: flex;
          gap: 16px;
          margin-bottom: 48px;
          max-width: 550px;
        }

        .hero-card {
          flex: 1;
          background: #ffffff;
          padding: 20px 12px;
          border-radius: 16px;
          box-shadow: 0 10px 40px -10px rgba(0,0,0,0.1);
          border: 1px solid #F3F4F6;
          display: flex;
          flex-direction: column;
          gap: 12px;
          align-items: center;
          text-align: center;
        }

        .hero-buttons {
          display: flex;
          flex-wrap: wrap;
          gap: 16px;
          z-index: 20;
        }

        .btn-primary {
          background: #2e1065;
          color: #ffffff;
          padding: 16px 32px;
          border-radius: 99px;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          box-shadow: 0 10px 25px -5px rgba(46, 16, 101, 0.4);
          transition: all 0.3s ease;
        }

        .btn-secondary {
          background: #ffffff;
          color: #2e1065;
          padding: 16px 32px;
          border-radius: 99px;
          border: 1px solid #2e1065;
          font-size: 1rem;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          text-decoration: none;
          transition: all 0.3s ease;
        }

        /* --- TABLET RESPONSIVE --- */
        @media (max-width: 1024px) {
          .hero-image-container { width: 50%; }
          .hero-stats-container { bottom: 30px; gap: 20px; right: 24px; }
          .stat-val { font-size: 2rem; }
          .hero-text-block { max-width: 500px; padding-bottom: 100px; }
          .hero-cards-grid { flex-wrap: wrap; }
          .hero-card { min-width: 140px; }
        }

        /* --- MOBILE RESPONSIVE --- */
        @media (max-width: 768px) {
          .hero-section {
            display: block;
            padding-top: 40px;
            padding-bottom: 220px; /* Space for wave at bottom */
          }
          .hero-bg-grid { display: none; }
          
          .hero-content-container { width: 100%; padding: 0 16px; }
          .hero-text-block { max-width: 100%; padding-top: 0; padding-bottom: 20px; }
          
          /* Stack image under text natively */
          .hero-image-container {
            position: relative;
            width: 100%;
            height: 350px;
            margin-top: 20px;
          }
          .hero-image {
            width: 100%;
            margin-left: 0;
            clip-path: none; /* Remove clipping on mobile */
            border-radius: 0 0 0 40px; /* Stylized alternate border */
          }
          
          /* Fix Wave Full Width */
          .hero-wave-container { left: 0; width: 100%; height: 180px; }
          
          /* Center Stats */
          .hero-stats-container {
            width: 100%;
            right: 0;
            bottom: 20px;
            justify-content: center;
            flex-wrap: wrap;
            gap: 20px;
            padding: 0 10px;
            text-align: center;
          }
          .stat-val { font-size: 1.8rem; }
          .stat-divider { display: none; } /* Hide divider for cleaner mobile layout */
          
          .hero-cards-grid { flex-direction: column; gap: 12px; }
          .hero-card { flex-direction: row; text-align: left; padding: 16px; }
          .hero-card br { display: none; } /* Prevent awkward text breaks */
          
          .hero-buttons { flex-direction: column; }
          .btn-primary, .btn-secondary { width: 100%; }
        }
      `}</style>

      <section className="hero-section" id="hero">

        <div className="hero-bg-grid" />

        <div className="hero-image-container">
          <svg width="0" height="0" style={{ position: "absolute" }}>
            <defs>
              <clipPath id="hero-curve" clipPathUnits="objectBoundingBox">
                <path d="M 0 0 L 1 0 L 1 1 L 0 1 Q 0.12 0.5 0 0 Z" />
              </clipPath>
            </defs>
          </svg>
          <img
            src="/hero-person.png"
            alt="Students in the UK"
            className="hero-image"
          />
        </div>

        <div className="hero-wave-container">
          <svg viewBox="0 0 1440 280" preserveAspectRatio="none" style={{ width: "100%", height: "100%", display: "block" }}>
            <defs>
              <linearGradient id="wave-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#2e1065" />
                <stop offset="100%" stopColor="#1e1b4b" />
              </linearGradient>
            </defs>
            <path fill="url(#wave-grad)" d="M0,280 C200,280 400,180 800,100 C1100,40 1300,20 1440,0 L1440,280 L0,280 Z" />
          </svg>
        </div>

        <div className="hero-stats-container">
          <div>
            <div className="stat-val">10,00+</div>
            <div className="stat-label">Students Trained</div>
          </div>
          <div className="stat-divider" />
          <div>
            <div className="stat-val">95%</div>
            <div className="stat-label">Placement Success</div>
          </div>
          <div className="stat-divider" />
          <div>
            <div className="stat-val">150+</div>
            <div className="stat-label">Hiring Partners</div>
          </div>
        </div>

        <div className="hero-content-container">
          <div className="hero-text-block">

            <div style={{
              display: "inline-block",
              background: "linear-gradient(90deg, #1E3A8A, #E11D48)",
              padding: "8px 20px", borderRadius: "99px",
              color: "#fff", fontWeight: 700, fontSize: "0.85rem", letterSpacing: "0.05em",
              marginBottom: "24px", boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
            }}>
              LEARN • UPSKILL • SUCCEED
            </div>

            <h1 style={{
              fontSize: "clamp(2.8rem, 4vw, 4rem)", fontWeight: 800,
              color: "#111827", lineHeight: 1.15,
              margin: "0 0 20px 0", letterSpacing: "-0.02em"
            }}>
              Your Future Starts<br />
              Here. <span style={{ color: "#6D28D9" }}>Learn. Grow.</span><br />
              <span style={{ color: "#6D28D9" }}>Get Placed</span> in the UK.
            </h1>

            <p style={{
              fontSize: "1.1rem", color: "#4B5563", lineHeight: 1.6,
              maxWidth: "480px", marginBottom: "48px"
            }}>
              Join industry-focused courses with guaranteed placement support and build a successful career in the UK tech industry.
            </p>

            <div className="hero-cards-grid">
              <div className="hero-card">
                <div style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F3FF", borderRadius: "12px", color: "#6D28D9" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                    <polyline points="10 8 6 12 10 16"></polyline>
                    <polyline points="14 8 18 12 14 16"></polyline>
                  </svg>
                </div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>Industry-Aligned<br />Courses</span>
              </div>

              <div className="hero-card">
                <div style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", background: "#F5F3FF", borderRadius: "12px", color: "#6D28D9" }}>
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                  </svg>
                </div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>100% Placement<br />Support</span>
              </div>

              <div className="hero-card">
                <div style={{ width: "48px", height: "48px", display: "flex", alignItems: "center", justifyContent: "center", borderRadius: "12px", border: "1px solid #E5E7EB", overflow: "hidden" }}>
                  <svg viewBox="0 0 60 30" style={{ width: "36px", height: "24px", borderRadius: "4px" }}>
                    <clipPath id="rect-clip"><rect width="60" height="30" rx="3" ry="3" /></clipPath>
                    <g clipPath="url(#rect-clip)">
                      <rect width="60" height="30" fill="#012169" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#ffffff" strokeWidth="6" />
                      <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" />
                      <path d="M30,0 L30,30 M0,15 L60,15" stroke="#ffffff" strokeWidth="10" />
                      <path d="M30,0 L30,30 M0,15 L60,15" stroke="#C8102E" strokeWidth="6" />
                    </g>
                  </svg>
                </div>
                <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#111827", lineHeight: 1.3 }}>Launch Your Career<br />in the UK</span>
              </div>
            </div>

            <div className="hero-buttons">
              <a href="#courses" className="btn-primary pulse">
                Explore Courses <Icons.ArrowRight />
              </a>
              <a href="#counselling" className="btn-secondary">
                <Icons.Calendar /> Book a Free Counselling
              </a>
            </div>

          </div>
        </div>

      </section>
    </>
  );
}