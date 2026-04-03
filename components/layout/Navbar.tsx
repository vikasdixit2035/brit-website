"use client";

import { useState, useEffect, useRef } from "react";

const BRIT_BLUE = "#1D4ED8";
const INSTITUTE_GOLD = "#D4AF37";

// Badge colour map (matches topBadge strings from DB)
const BADGE_COLOURS: Record<string, { bg: string; text: string }> = {
  FEATURED: { bg: "#EF4444", text: "#fff" },
  "MOST POPULAR": { bg: "#8B5CF6", text: "#fff" },
  "IN DEMAND": { bg: "#10B981", text: "#fff" },
  "AI LEADER": { bg: INSTITUTE_GOLD, text: "#1a1a1a" },
};

function badgeStyle(label: string) {
  return BADGE_COLOURS[label?.toUpperCase()] ?? { bg: BRIT_BLUE, text: "#fff" };
}

interface Course {
  _id: string;
  slug: string;
  topBadge: string;
  title: string;
  desc: string;
  duration: string;
  iconName: string;
}

export default function Navbar({ hasBanner }: { hasBanner: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [navTop, setNavTop] = useState(hasBanner ? 38 : 0);
  const [courses, setCourses] = useState<Course[]>([]);
  const [dropOpen, setDropOpen] = useState(false);
  const dropRef = useRef<HTMLDivElement>(null);
  let closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  // ── Scroll handler ─────────────────────────────────────────────────────────
  useEffect(() => {
    const fn = () => {
      const sy = window.scrollY;
      setScrolled(sy > 50);
      setNavTop(hasBanner ? Math.max(0, 38 - sy) : 0);
    };
    window.addEventListener("scroll", fn, { passive: true });
    fn();
    return () => window.removeEventListener("scroll", fn);
  }, [hasBanner]);

  // ── Fetch courses once ─────────────────────────────────────────────────────
  useEffect(() => {
    fetch("http://localhost:4000/api/courses")
      .then((r) => r.ok ? r.json() : Promise.reject())
      .then((json) => setCourses((json.data ?? []).slice(0, 6)))
      .catch(() => { });
  }, []);

  // ── Close dropdown on outside click ────────────────────────────────────────
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropRef.current && !dropRef.current.contains(e.target as Node)) {
        setDropOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const openDrop = () => { if (closeTimer.current) clearTimeout(closeTimer.current); setDropOpen(true); };
  const closeDrop = () => { closeTimer.current = setTimeout(() => setDropOpen(false), 180); };

  return (
    <>
      {/* ── Dropdown styles ──────────────────────────────────────────────── */}
      <style>{`
        .courses-dropdown {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          width: 680px;
          background: #ffffff;
          border-radius: 20px;
          box-shadow: 0 20px 60px rgba(29, 78, 216, 0.15), 0 4px 16px rgba(0,0,0,0.08);
          border: 1.5px solid rgba(29, 78, 216, 0.12);
          padding: 0;
          overflow: hidden;
          z-index: 100;
          animation: dropFadeIn 0.22s cubic-bezier(.16,1,.3,1);
        }
        @keyframes dropFadeIn {
          from { opacity: 0; transform: translateX(-50%) translateY(-8px); }
          to   { opacity: 1; transform: translateX(-50%) translateY(0);    }
        }
        .drop-header {
          background: linear-gradient(135deg, ${BRIT_BLUE} 0%, #2563EB 100%);
          padding: 18px 24px 16px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drop-header-title {
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          opacity: 0.9;
        }
        .drop-header-link {
          color: ${INSTITUTE_GOLD};
          font-size: 0.78rem;
          font-weight: 700;
          text-decoration: none;
          letter-spacing: 0.04em;
          display: flex;
          align-items: center;
          gap: 4px;
          transition: opacity .2s;
        }
        .drop-header-link:hover { opacity: .75; }

        .drop-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
        }
        .drop-item {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 16px 20px;
          border-right: 1px solid rgba(0,0,0,0.05);
          border-bottom: 1px solid rgba(0,0,0,0.05);
          text-decoration: none;
          background: #fff;
          transition: background 0.15s;
          cursor: pointer;
        }
        .drop-item:hover { background: #EFF6FF; }
        .drop-item:nth-child(even) { border-right: none; }

        .drop-icon-wrap {
          flex-shrink: 0;
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: linear-gradient(135deg, ${BRIT_BLUE} 0%, #3B82F6 100%);
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }
        .drop-icon-wrap svg { stroke: #fff; }

        .drop-item-body { flex: 1; min-width: 0; }
        .drop-item-name {
          font-size: 0.88rem;
          font-weight: 700;
          color: #111827;
          line-height: 1.3;
          margin-bottom: 4px;
        }
        .drop-item-detail {
          font-size: 0.76rem;
          color: #6B7280;
          line-height: 1.4;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
        .drop-badge {
          display: inline-block;
          font-size: 0.63rem;
          font-weight: 800;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding: 2px 7px;
          border-radius: 99px;
          margin-bottom: 5px;
        }
        .drop-footer {
          background: #F8FAFF;
          border-top: 1.5px solid rgba(29,78,216,0.08);
          padding: 14px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .drop-footer-text {
          font-size: 0.8rem;
          color: #6B7280;
          font-weight: 500;
        }
        .drop-footer-cta {
          background: ${BRIT_BLUE};
          color: #fff;
          font-size: 0.8rem;
          font-weight: 700;
          border: none;
          border-radius: 99px;
          padding: 8px 20px;
          cursor: pointer;
          transition: background .2s, transform .15s;
          text-decoration: none;
        }
        .drop-footer-cta:hover { background: #1e40af; transform: translateY(-1px); }

        /* Courses trigger hover underline */
        .nav-courses-trigger {
          position: relative;
          display: flex;
          align-items: center;
          gap: 5px;
          color: #4B5563;
          font-weight: 600;
          font-size: 0.95rem;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
          font-family: inherit;
          transition: color .2s;
        }
        .nav-courses-trigger:hover, .nav-courses-trigger[data-open="true"] { color: ${BRIT_BLUE}; }
        .nav-courses-trigger::after {
          content: '';
          position: absolute;
          bottom: -2px; left: 0; right: 0;
          height: 2px;
          background: ${BRIT_BLUE};
          border-radius: 2px;
          transform: scaleX(0);
          transition: transform .2s;
        }
        .nav-courses-trigger:hover::after,
        .nav-courses-trigger[data-open="true"]::after { transform: scaleX(1); }

        .chevron-icon {
          transition: transform .2s;
          flex-shrink: 0;
        }
        .chevron-icon[data-open="true"] { transform: rotate(180deg); }
      `}</style>

      <nav
        style={{
          top: navTop,
          width: "100%",
          position: "fixed",
          zIndex: 50,
          boxSizing: "border-box",
          background: "#ffffff",
          boxShadow: scrolled ? "0 4px 20px rgba(0,0,0,0.07)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
          transition: "all 0.3s ease",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "14px 24px",
            boxSizing: "border-box",
            position: "relative",
          }}
        >
          {/* ── Logo ────────────────────────────────────────────────────── */}
          <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0, textDecoration: "none" }}>
            <img src="/britinstitute.png" alt="Brit Institute" style={{ height: "40px", width: "auto", borderRadius: "4px" }} />
            <span style={{ marginLeft: "12px", fontSize: "1.25rem", fontWeight: 800 }}>
              <span style={{ color: BRIT_BLUE }}>Brit</span>
              <span style={{ color: INSTITUTE_GOLD, marginLeft: "6px" }}>Institute</span>
            </span>
          </a>

          {/* ── Nav Links ───────────────────────────────────────────────── */}
          <div style={{ display: "flex", alignItems: "center", gap: "32px" }}>

            {/* Courses with dropdown */}
            <div ref={dropRef} style={{ position: "relative" }}>
              <button
                className="nav-courses-trigger"
                data-open={dropOpen ? "true" : "false"}
                onMouseEnter={openDrop}
                onMouseLeave={closeDrop}
                onClick={() => setDropOpen((p) => !p)}
                aria-haspopup="true"
                aria-expanded={dropOpen}
              >
                Courses
                {/* Chevron */}
                <svg className="chevron-icon" data-open={dropOpen ? "true" : "false"} width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </button>

              {/* ── Dropdown ──────────────────────────────────────────── */}
              {dropOpen && (
                <div
                  className="courses-dropdown"
                  onMouseEnter={openDrop}
                  onMouseLeave={closeDrop}
                >
                  {/* Header */}
                  <div className="drop-header">
                    <span className="drop-header-title">Popular Courses</span>
                    <a href="#courses" className="drop-header-link" onClick={() => setDropOpen(false)}>
                      View All
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </a>
                  </div>

                  {/* Grid of courses */}
                  <div className="drop-grid">
                    {courses.length === 0 ? (
                      // Loading skeletons
                      Array.from({ length: 4 }).map((_, i) => (
                        <div key={i} className="drop-item" style={{ opacity: 0.5 }}>
                          <div className="drop-icon-wrap" style={{ background: "#E5E7EB" }} />
                          <div style={{ flex: 1 }}>
                            <div style={{ height: 12, background: "#E5E7EB", borderRadius: 6, marginBottom: 6, width: "80%" }} />
                            <div style={{ height: 10, background: "#F3F4F6", borderRadius: 6, width: "60%" }} />
                          </div>
                        </div>
                      ))
                    ) : (
                      courses.map((course) => {
                        const badge = badgeStyle(course.topBadge);
                        return (
                            <a
                              key={course._id}
                              href={`/courses/${course.slug}`}
                              className="drop-item"
                              onClick={() => setDropOpen(false)}
                            >
                            {/* Icon */}
                            <div className="drop-icon-wrap">
                              <CourseIcon name={course.iconName} />
                            </div>

                            {/* Text */}
                            <div className="drop-item-body">
                              {course.topBadge && (
                                <span
                                  className="drop-badge"
                                  style={{ background: badge.bg, color: badge.text }}
                                >
                                  {course.topBadge}
                                </span>
                              )}
                              <div className="drop-item-name">{course.title}</div>
                              <div className="drop-item-detail">
                                <ClockIcon /> {course.duration}
                              </div>
                            </div>
                          </a>
                        );
                      })
                    )}
                  </div>

                  {/* Footer */}
                  <div className="drop-footer">
                    <span className="drop-footer-text">
                      🎓 Industry-leading certification programs
                    </span>
                    <a href="#apply" className="drop-footer-cta" onClick={() => setDropOpen(false)}>
                      Apply Now →
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Other links */}
            {[
              { href: "#why", label: "Why Brit Institute" },
              { href: "#placement", label: "Placement Support" },
              { href: "#stories", label: "Success Stories" },
              { href: "/about", label: "About Us" },
              { href: "/contact", label: "Contact Us" },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  color: "#4B5563",
                  fontWeight: 600,
                  fontSize: "0.95rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = BRIT_BLUE)}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
              >
                {label}
              </a>
            ))}
          </div>

          {/* ── CTA Button ──────────────────────────────────────────────── */}
          <a
            href="#apply"
            style={{
              padding: "12px 28px",
              fontSize: "0.95rem",
              borderRadius: "99px",
              fontWeight: 700,
              background: BRIT_BLUE,
              color: "#ffffff",
              textDecoration: "none",
              transition: "background 0.2s ease, transform 0.2s ease",
              boxShadow: "0 4px 16px rgba(29,78,216,0.3)",
              flexShrink: 0,
              border: `2px solid ${BRIT_BLUE}`,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "#1e40af";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = BRIT_BLUE;
              e.currentTarget.style.transform = "translateY(0)";
            }}
          >
            Apply Now
          </a>
        </div>
      </nav>
    </>
  );
}

// ── Tiny inline SVG icons (no extra dep) ─────────────────────────────────────
function ClockIcon() {
  return (
    <svg
      style={{ display: "inline", verticalAlign: "middle", marginRight: 4 }}
      width="12" height="12" viewBox="0 0 24 24"
      fill="none" stroke="#9CA3AF" strokeWidth="2"
      strokeLinecap="round" strokeLinejoin="round"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

const ICON_PATHS: Record<string, React.ReactElement> = {
  BarChart: <><line x1="18" y1="20" x2="18" y2="10" /><line x1="12" y1="20" x2="12" y2="4" /><line x1="6" y1="20" x2="6" y2="14" /></>,
  Code: <><polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" /></>,
  Layers: <><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></>,
  Brain: <><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96-.46 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-1.14" /></>,
  Database: <><ellipse cx="12" cy="5" rx="9" ry="3" /><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3" /><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" /></>,
  Cpu: <><rect x="4" y="4" width="16" height="16" rx="2" /><rect x="9" y="9" width="6" height="6" /><line x1="9" y1="1" x2="9" y2="4" /><line x1="15" y1="1" x2="15" y2="4" /><line x1="9" y1="20" x2="9" y2="23" /><line x1="15" y1="20" x2="15" y2="23" /></>,
  LineChart: <><polyline points="22 12 18 12 15 21 9 3 6 12 2 12" /></>,
  BotMessageSquare: <><path d="M12 6V2H8" /><path d="m8 18-4 4V8a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2Z" /><path d="M2 12h2" /><path d="M9 11v2" /><path d="M15 11v2" /></>,
};

function CourseIcon({ name }: { name: string }) {
  const paths = ICON_PATHS[name] ?? ICON_PATHS.BarChart;
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      {paths}
    </svg>
  );
}