"use client";

import useReveal from "@/hooks/useReveal";
import { Clock, Users, AlertCircle } from "lucide-react";

export default function NextCohort() {
  const r = useReveal();

  return (
    <section
      id="next-cohort"
      ref={r.ref}
      style={{
        padding: "80px 28px",
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        color: "white",
      }}
    >
      <div
        className={`section-inner ${r.cls}`}
        style={{ maxWidth: "760px", margin: "0 auto", textAlign: "center" }}
      >
        {/* Urgency badge */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "8px",
            background: "rgba(239,68,68,0.15)",
            border: "1px solid rgba(239,68,68,0.4)",
            color: "#f87171",
            borderRadius: "99px",
            padding: "6px 18px",
            fontSize: "0.8rem",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            marginBottom: "32px",
          }}
        >
          <AlertCircle size={14} />
          Limited Seats Available
        </div>

        <h2
          style={{
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "16px",
            lineHeight: 1.2,
          }}
        >
          Next Cohort
        </h2>

        <p
          style={{
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.7)",
            marginBottom: "40px",
            maxWidth: "540px",
            margin: "0 auto 40px",
          }}
        >
          Secure your place before applications close. Once seats are filled, the
          next opportunity may be months away.
        </p>

        {/* Info pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: "20px",
            marginBottom: "48px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "14px 24px",
              minWidth: "220px",
            }}
          >
            <Clock size={20} style={{ color: "#facc15" }} />
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "4px",
                }}
              >
                Applications Closing
              </div>
              <div style={{ fontWeight: 700, fontSize: "1rem", color: "white" }}>
                [DATE]
              </div>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              borderRadius: "12px",
              padding: "14px 24px",
              minWidth: "220px",
            }}
          >
            <Users size={20} style={{ color: "#34d399" }} />
            <div style={{ textAlign: "left" }}>
              <div
                style={{
                  fontSize: "0.72rem",
                  color: "rgba(255,255,255,0.5)",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginBottom: "4px",
                }}
              >
                Seats Remaining
              </div>
              <div style={{ fontWeight: 700, fontSize: "1rem", color: "white" }}>
                Limited
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
            fontSize: "1.1rem",
            padding: "16px 40px",
            borderRadius: "12px",
          }}
        >
          Apply Now — Secure Your Seat
        </a>
      </div>
    </section>
  );
}
