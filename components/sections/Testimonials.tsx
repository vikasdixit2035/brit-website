"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Icons } from "@/components/ui/Icons";
import useReveal from "@/hooks/useReveal";

export default function Testimonials() {
  const { ref, cls } = useReveal();
  const [statsVisible, setStatsVisible] = useState(false);
  const [learnersTrained, setLearnersTrained] = useState(0);
  const [transitionRate, setTransitionRate] = useState(0);
  const data = [
    {
      name: "Daniel Robertson", role: "AI Engineer, London", avatar: "/avatar-1.png",
      quote: "The structured roadmap plus the career team's dedicated support made my transition from marketing to an AI Engineer role in London seamless and fast."
    },
    {
      name: "Priya Sharma", role: "Data Analyst, Birmingham", avatar: "/avatar-2.png",
      quote: "Building real-world ML models and AI-powered dashboards gave me the practical portfolio I needed to confidently ace my technical interviews."
    }
  ];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStatsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.35 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [ref]);

  useEffect(() => {
    if (!statsVisible) return;

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceMotion) {
      const timer = window.setTimeout(() => {
        setLearnersTrained(550);
        setTransitionRate(92);
      }, 0);
      return () => window.clearTimeout(timer);
    }

    const duration = 1300;
    const start = performance.now();
    let frame = 0;

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setLearnersTrained(Math.round(550 * eased));
      setTransitionRate(Math.round(92 * eased));

      if (progress < 1) {
        frame = window.requestAnimationFrame(tick);
      } else {
        setLearnersTrained(550);
        setTransitionRate(92);
      }
    };

    frame = window.requestAnimationFrame(tick);
    return () => window.cancelAnimationFrame(frame);
  }, [statsVisible]);

  return (
    <section id="proof" className="section s-testimonials" ref={ref} style={{ background: "#0F172A", padding: "96px 28px" }}>
      <div className={`section-inner ${cls}`} style={{ maxWidth: "1100px", margin: "0 auto", padding: "0 24px" }}>
        <div className="section-head" style={{ textAlign: "center", marginBottom: "48px" }}>
          <h2 className="section-title" style={{ color: "var(--white)", fontSize: "clamp(2rem, 3.5vw, 2.8rem)", fontWeight: 800, marginBottom: "24px" }}>Learner Outcomes</h2>

          <div style={{
            display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "24px",
            marginBottom: "48px"
          }}>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "16px 24px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold-400)" }}>{learnersTrained}+</div>
              <div style={{ color: "var(--white)", opacity: 0.8 }}>Learners Trained</div>
            </div>
            <div style={{ background: "rgba(255,255,255,0.05)", padding: "16px 24px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold-400)" }}>{transitionRate}%</div>
              <div style={{ color: "var(--white)", opacity: 0.8 }}>Transitioned into New Roles</div>
            </div>
            <div style={{ background: "rgba(255, 255, 255, 0.05)", padding: "16px 24px", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.1)" }}>
              <div style={{ fontSize: "2rem", fontWeight: 800, color: "var(--gold-400)" }}>Yes</div>
              <div style={{ color: "var(--white)", opacity: 0.8 }}>Real-world Projects Completed</div>
            </div>
          </div>
        </div>
        <div className="test-grid" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
          {data.map((t, i) => (
            <div className="t-card" key={i} style={{
              display: 'flex', flexDirection: 'column', height: '100%',
              background: "rgba(255,255,255,0.02)", padding: "32px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.05)"
            }}>
              <div className="t-stars" style={{ marginBottom: '24px', display: 'flex', gap: '4px', color: '#D4AF37' }}>
                <Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star /><Icons.Star />
              </div>
              <p className="t-quote" style={{ fontSize: '1.05rem', color: 'rgba(255,255,255,0.9)', flex: 1, fontStyle: "italic", lineHeight: 1.6 }}>&ldquo;{t.quote}&rdquo;</p>
              <div className="t-author" style={{ marginTop: '24px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', alignItems: 'center', gap: '16px' }}>
                <Image src={t.avatar} alt={t.name} width={48} height={48} className="t-avatar" style={{ border: 'none', borderRadius: '50%' }} />
                <div>
                  <div className="t-name" style={{ fontSize: '1rem', fontWeight: 600, color: "var(--white)" }}>{t.name}</div>
                  <div className="t-role" style={{ fontSize: '0.85rem', color: "rgba(255,255,255,0.75)" }}>{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
