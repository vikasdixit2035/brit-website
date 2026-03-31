"use client";

import useReveal from "@/hooks/useReveal";
import { GraduationCap, Code2, Briefcase } from "lucide-react";

export default function HowItWorks() {
  const r = useReveal();

  const steps = [
    {
      icon: <GraduationCap size={28} />,
      num: "01",
      title: "Learn with Clarity",
      desc: "Structured, mentor-led sessions designed for real-world understanding — not just theory.",
      color: "#3b82f6",
    },
    {
      icon: <Code2 size={28} />,
      num: "02",
      title: "Build Real Projects",
      desc: "Work on industry-grade projects that make your profile stand out to UK employers.",
      color: "#c5a059",
    },
    {
      icon: <Briefcase size={28} />,
      num: "03",
      title: "Land Your Job",
      desc: "Get end-to-end career support including resume, interviews, and placement guidance.",
      color: "#22c55e",
    },
  ];

  return (
    <section
      id="how-it-works"
      ref={r.ref}
      style={{
        padding: "110px 28px",
        background:
          "linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle background glow */}
      <div
        style={{
          position: "absolute",
          top: "-80px",
          left: "-80px",
          width: "300px",
          height: "300px",
          background: "rgba(59,130,246,0.08)",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      <div
        className={`section-inner ${r.cls}`}
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Header */}
        <div
          className="section-head"
          style={{ textAlign: "center", marginBottom: "64px" }}
        >
          <div
            style={{
              display: "inline-block",
              background: "var(--blue-50)",
              color: "var(--blue-600)",
              padding: "6px 14px",
              borderRadius: "999px",
              fontSize: "0.75rem",
              fontWeight: 700,
              marginBottom: "14px",
              letterSpacing: "0.06em",
              textTransform: "uppercase",
            }}
          >
            Simple Process
          </div>

          <h2
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3rem)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "var(--gray-900)",
              marginBottom: "12px",
            }}
          >
            Your Journey to a{" "}
            <span style={{ color: "#c5a059" }}>High-Paying Career</span>
          </h2>

          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--gray-500)",
              maxWidth: "520px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            A proven, step-by-step system designed to take you from beginner to
            job-ready — without confusion.
          </p>
        </div>

        {/* Steps */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "28px",
          }}
        >
          {steps.map((s, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                padding: "40px 28px",
                borderRadius: "24px",
                background: "white",
                border: "1px solid var(--gray-100)",
                boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
                transition: "all 0.4s ease",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "translateY(-6px)";
                e.currentTarget.style.boxShadow =
                  "0 20px 50px rgba(0,0,0,0.08)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "translateY(0)";
                e.currentTarget.style.boxShadow =
                  "0 10px 30px rgba(0,0,0,0.04)";
              }}
            >
              {/* Number watermark */}
              <div
                style={{
                  position: "absolute",
                  top: "16px",
                  right: "18px",
                  fontSize: "2.5rem",
                  fontWeight: 900,
                  color: "var(--gray-100)",
                }}
              >
                {s.num}
              </div>

              {/* Icon */}
              <div
                style={{
                  width: "56px",
                  height: "56px",
                  borderRadius: "16px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: `${s.color}15`,
                  color: s.color,
                  marginBottom: "18px",
                }}
              >
                {s.icon}
              </div>

              {/* Title */}
              <h4
                style={{
                  fontSize: "1.25rem",
                  fontWeight: 700,
                  marginBottom: "10px",
                  color: "var(--gray-900)",
                }}
              >
                {s.title}
              </h4>

              {/* Desc */}
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--gray-500)",
                  lineHeight: 1.7,
                }}
              >
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}