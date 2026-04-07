"use client";

import useReveal from "@/hooks/useReveal";
import { AlertCircle, Target, BookX, TrendingDown } from "lucide-react";

const painPoints = [
  {
    icon: TrendingDown,
    title: "Stagnant Progression",
    detail: "Working hard but not seeing career progression",
  },
  {
    icon: Target,
    title: "Lack of Direction",
    detail: "Unsure how to enter data or AI roles",
  },
  {
    icon: BookX,
    title: "Theory Over Practice",
    detail: "Learning online but lacking real-world application",
  },
  {
    icon: AlertCircle,
    title: "No Clear Path",
    detail: "No clear path to a high-paying tech career",
  },
];

export default function PainPoints() {
  const r = useReveal();

  return (
    <section
      id="pain-points"
      ref={r.ref}
      style={{
        position: "relative",
        padding: "100px 0 80px",
        background: "#0c0a09", // Very dark background
        overflow: "hidden",
      }}
    >
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
            Stuck in a Role with{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #f87171, #ef4444)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Limited Growth?
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
          {painPoints.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(2ef,68,68,0.2)",
                  borderRadius: "16px",
                  padding: "32px 24px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: "12px",
                    background: "rgba(239,68,68,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 20,
                  }}
                >
                  <Icon size={24} color="#f87171" strokeWidth={2} />
                </div>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--white)", marginBottom: "8px" }}>
                  {point.title}
                </h3>
                <p style={{ fontSize: "0.95rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.5, margin: 0 }}>
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
