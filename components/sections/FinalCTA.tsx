"use client";

import Link from "next/link";
import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      id="final-cta"
      style={{
        padding: "120px 28px",
        background:
          "linear-gradient(135deg, #0a0f1e 0%, #0f172a 40%, #1e293b 100%)",
        position: "relative",
        overflow: "hidden",
        textAlign: "center",
      }}
    >
      {/* Glow Effect */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "600px",
          background: "rgba(212,168,83,0.12)",
          filter: "blur(140px)",
          borderRadius: "50%",
        }}
      />

      <div
        className="final-inner"
        style={{
          maxWidth: "720px",
          margin: "0 auto",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Badge */}
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
          Limited Consultation Slots
        </div>

        {/* Heading */}
        <h2
          style={{
            fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
            fontWeight: 800,
            letterSpacing: "-0.03em",
            marginBottom: "18px",
            lineHeight: 1.2,
            color: "white",
          }}
        >
          Get a Personalised{" "}
          <span style={{ color: "#facc15" }}>Career Roadmap</span>
        </h2>

        {/* Subtext */}
        <p
          style={{
            fontSize: "1.15rem",
            color: "rgba(255,255,255,0.65)",
            marginBottom: "48px",
            lineHeight: 1.7,
          }}
        >
          Speak with our advisors to understand the exact path to land a
          high-paying job in the UK. No confusion, no guesswork — just a clear
          plan tailored to you.
        </p>

        {/* CTA Button */}
        <div style={{ marginBottom: "18px" }}>
          <Link
            href="/contact"
            className="btn-gold lg pulse"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "1.05rem",
              padding: "18px 44px",
              borderRadius: "999px",
              letterSpacing: "0.02em",
            }}
          >
            Book Free Consultation
            <ArrowRight size={18} />
          </Link>
        </div>

        {/* Trust Line */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "18px",
            flexWrap: "wrap",
            fontSize: "0.8rem",
            color: "rgba(255,255,255,0.45)",
            marginTop: "10px",
          }}
        >
          <span style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <ShieldCheck size={14} color="#22c55e" />
            No spam
          </span>
          <span>•</span>
          <span>Free guidance session</span>
          <span>•</span>
          <span>UK career focused</span>
        </div>
      </div>
    </section>
  );
}
