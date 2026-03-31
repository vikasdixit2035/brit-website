"use client";

import useReveal from "@/hooks/useReveal";
import { Clock, Users, Sparkles } from "lucide-react";

export default function NextCohort() {
  const r = useReveal();

  return (
    <section
      id="next-cohort"
      ref={r.ref}
      style={{
        padding: "100px 28px",
        background: "linear-gradient(135deg, #0a0f1e 0%, #0f172a 40%, #1e293b 100%)",
        color: "white",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Soft Glow Background */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          right: "-100px",
          width: "400px",
          height: "400px",
          background: "rgba(212,168,83,0.12)",
          filter: "blur(120px)",
          borderRadius: "50%",
        }}
      />

      <div
        className={`section-inner ${r.cls}`}
        style={{
          maxWidth: "780px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Premium Badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(212,168,83,0.12)",
            border: "1px solid rgba(212,168,83,0.3)",
            color: "#facc15",
            borderRadius: "999px",
            padding: "8px 20px",
            fontSize: "0.75rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "28px",
            backdropFilter: "blur(8px)",
          }}
        >
          <Sparkles size={14} />
          Next Intake Open
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "18px",
            lineHeight: 1.2,
          }}
        >
          Secure Your Seat in the{" "}
          <span style={{ color: "#facc15" }}>Next Cohort</span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "48px",
            maxWidth: "560px",
            marginInline: "auto",
            lineHeight: 1.7,
          }}
        >
          Applications are closing soon. Join a select group of learners
          preparing for high-paying careers in the UK. Once seats are filled,
          admissions will close for this cycle.
        </p>

        {/* Info Cards */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "22px",
            marginBottom: "52px",
          }}
        >
          {/* Deadline */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "18px 26px",
              minWidth: "240px",
              backdropFilter: "blur(12px)",
            }}
          >
            <Clock size={22} style={{ color: "#facc15" }} />
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "4px",
                }}
              >
                Application Deadline
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                28 March 2026
              </div>
            </div>
          </div>

          {/* Seats */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "14px",
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "16px",
              padding: "18px 26px",
              minWidth: "240px",
              backdropFilter: "blur(12px)",
            }}
          >
            <Users size={22} style={{ color: "#3b82f6" }} />
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.08em",
                  marginBottom: "4px",
                }}
              >
                Remaining Seats
              </div>
              <div style={{ fontWeight: 700, fontSize: "1.05rem" }}>
                Only 12 Left
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <a
          href="#final-cta"
          className="btn-gold lg pulse"
          style={{
            display: "inline-block",
            fontSize: "1.05rem",
            padding: "18px 44px",
            borderRadius: "999px",
            letterSpacing: "0.02em",
          }}
        >
          Apply Now — Start Your UK Career
        </a>

        {/* Trust Line */}
        <p
          style={{
            marginTop: "18px",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.4)",
          }}
        >
          No prior experience required • Placement-focused training
        </p>
      </div>
    </section>
  );
}