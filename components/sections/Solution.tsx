"use client";

import useReveal from "@/hooks/useReveal";
import { Briefcase, Code, Wrench, GraduationCap } from "lucide-react";

const solutions = [
  {
    icon: Briefcase,
    title: "Industry-Ready",
    detail: "Industry-relevant curriculum aligned with UK job roles",
  },
  {
    icon: Code,
    title: "Hands-On Experience",
    detail: "Hands-on projects to build a strong portfolio",
  },
  {
    icon: Wrench,
    title: "Modern Tools",
    detail: "Tools and skills used in real data, AI, and automation jobs",
  },
  {
    icon: GraduationCap,
    title: "For Everyone",
    detail: "Designed for beginners and working professionals",
  },
];

export default function Solution() {
  const r = useReveal();

  return (
    <section
      id="solution"
      ref={r.ref}
      style={{
        position: "relative",
        padding: "80px 0 100px",
        background: "var(--blue-deep)",
        overflow: "hidden",
      }}
    >
      {/* Background decorations */}
      <div aria-hidden style={{ position: "absolute", inset: 0, pointerEvents: "none", overflow: "hidden" }}>
        <div style={{
          position: "absolute", width: 600, height: 600, borderRadius: "50%",
          top: "50%", left: "50%", transform: "translate(-50%, -50%)",
          background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)",
          filter: "blur(40px)",
        }} />
      </div>

      <div className={`section-inner ${r.cls}`} style={{ position: "relative", zIndex: 1, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <h2
            style={{
              fontSize: "clamp(2rem, 3.5vw, 2.8rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--white)",
              margin: "0 0 16px",
              lineHeight: 1.15,
            }}
          >
            A Structured Path to a{" "}
            <span
              style={{
                background: "linear-gradient(135deg, var(--gold-400), var(--gold-300))",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              High-Growth Career
            </span>
          </h2>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {solutions.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.1)",
                  borderTop: "3px solid var(--gold-400)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                  transition: "transform 0.3s ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
              >
                <div
                  style={{
                    width: 56,
                    height: 56,
                    borderRadius: "14px",
                    background: "rgba(212,168,83,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={28} color="var(--gold-400)" strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--white)", marginBottom: "12px" }}>
                  {point.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, margin: 0 }}>
                  {point.detail}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
