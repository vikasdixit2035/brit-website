"use client";

import { Icons } from "@/components/ui/Icons";
import useReveal from "@/hooks/useReveal";

export default function Outcomes() {
  const r = useReveal();

  return (
    <section
      id="outcomes"
      ref={r.ref}
      style={{
        padding: "120px 28px",
        background:
          "radial-gradient(circle at top left, #f8fafc 0%, #ffffff 100%)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* subtle glow */}
      <div
        style={{
          position: "absolute",
          top: "-100px",
          left: "-100px",
          width: "300px",
          height: "300px",
          background: "rgba(59,130,246,0.08)",
          filter: "blur(100px)",
          borderRadius: "50%",
        }}
      />

      <div className={`section-inner ${r.cls}`}>
        <div
          className="outcomes-split"
          style={{
            gap: "80px",
            alignItems: "center",
          }}
        >
          {/* ================= LEFT: SALARY CARD ================= */}
          <div
            style={{
              background:
                "linear-gradient(135deg, #0a0f1e 0%, #1e293b 100%)",
              borderRadius: "24px",
              padding: "40px",
              color: "white",
              position: "relative",
              overflow: "hidden",
              boxShadow: "0 30px 80px rgba(15, 29, 50, 0.25)",
              transform: "perspective(1000px) rotateY(4deg)",
            }}
          >
            {/* glow */}
            <div
              style={{
                position: "absolute",
                top: "-60px",
                right: "-60px",
                width: "220px",
                height: "220px",
                background: "rgba(212,168,83,0.15)",
                filter: "blur(100px)",
                borderRadius: "50%",
              }}
            />

            {/* Header */}
            <div style={{ marginBottom: "28px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <div
                  style={{
                    fontSize: "0.85rem",
                    opacity: 0.7,
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <Icons.Star /> Average Graduate Salary
                </div>

                <span
                  style={{
                    background: "#facc15",
                    color: "#0f172a",
                    padding: "6px 14px",
                    borderRadius: "999px",
                    fontSize: "0.75rem",
                    fontWeight: 700,
                    boxShadow: "0 6px 20px rgba(212,168,83,0.4)",
                  }}
                >
                  ↑ 85% placed
                </span>
              </div>

              <div
                style={{
                  fontSize: "2.6rem",
                  fontWeight: 800,
                  marginTop: "10px",
                  letterSpacing: "-0.02em",
                }}
              >
                £52,000
              </div>
            </div>

            {/* Bars */}
            <div
              style={{
                display: "flex",
                alignItems: "flex-end",
                gap: "12px",
                height: "160px",
              }}
            >
              {[
                { h: "35%", label: "Entry", color: "#3b82f6" },
                { h: "55%", label: "Mid", color: "#3b82f6" },
                { h: "70%", label: "Avg", color: "#60a5fa" },
                { h: "85%", label: "Senior", color: "#c5a059" },
                { h: "100%", label: "Top", color: "#facc15" },
              ].map((b, i) => (
                <div
                  key={i}
                  style={{
                    flex: 1,
                    height: b.h,
                    borderRadius: "8px 8px 0 0",
                    background: `linear-gradient(to top, ${b.color}, ${b.color}cc)`,
                    position: "relative",
                    boxShadow:
                      b.color === "#facc15"
                        ? "0 10px 40px rgba(212,168,83,0.4)"
                        : "0 6px 20px rgba(59,130,246,0.2)",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      bottom: "-24px",
                      left: "50%",
                      transform: "translateX(-50%)",
                      fontSize: "0.7rem",
                      opacity: 0.6,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ================= RIGHT: ROLES ================= */}
          <div>
            <div style={{ marginBottom: "40px" }}>
              <h2
                style={{
                  fontSize: "2.4rem",
                  fontWeight: 800,
                  letterSpacing: "-0.03em",
                  marginBottom: "12px",
                }}
              >
                Where You Could Be in{" "}
                <span style={{ color: "#c5a059" }}>6–12 Months</span>
              </h2>

              <p
                style={{
                  fontSize: "1.05rem",
                  color: "var(--gray-500)",
                  maxWidth: "520px",
                  lineHeight: 1.7,
                }}
              >
                We don’t just teach — we position you for high-paying UK roles
                through real projects and hiring network access.
              </p>
            </div>

            <div className="o-roles" style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                {
                  icon: "📊",
                  title: "Data Analyst",
                  salary: "£35,000 – £55,000",
                },
                {
                  icon: "🧠",
                  title: "Data Scientist",
                  salary: "£45,000 – £75,000",
                },
                {
                  icon: "⚙️",
                  title: "AI / Automation Specialist",
                  salary: "£50,000 – £80,000",
                },
              ].map((r, i) => (
                <div
                  key={i}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    padding: "18px 20px",
                    borderRadius: "14px",
                    background: "white",
                    border: "1px solid var(--gray-100)",
                    transition: "all 0.3s ease",
                    cursor: "pointer",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 12px 40px rgba(0,0,0,0.08)";
                    e.currentTarget.style.borderColor = "#3b82f6";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = "none";
                    e.currentTarget.style.borderColor = "var(--gray-100)";
                  }}
                >
                  <div
                    style={{
                      width: "42px",
                      height: "42px",
                      borderRadius: "10px",
                      background: "#eff6ff",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "1.1rem",
                    }}
                  >
                    {r.icon}
                  </div>

                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontWeight: 600,
                        fontSize: "0.95rem",
                        color: "var(--gray-900)",
                      }}
                    >
                      {r.title}
                    </div>
                    <div
                      style={{
                        fontSize: "0.85rem",
                        color: "#c5a059",
                        fontWeight: 600,
                      }}
                    >
                      {r.salary}
                    </div>
                  </div>

                  <div
                    style={{
                      transition: "transform 0.3s",
                    }}
                  >
                    <Icons.ArrowRight />
                  </div>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: "28px",
                fontSize: "0.9rem",
                color: "var(--gray-500)",
              }}
            >
              <strong style={{ color: "var(--gray-800)" }}>
                Industries:
              </strong>{" "}
              Technology, Finance, Consulting, Startups
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}