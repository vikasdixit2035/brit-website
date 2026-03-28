import Image from "next/image";
import { Icons } from "@/components/ui/Icons";

export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="hero-bg">
        <div className="arc arc-1" />
        <div className="arc arc-2" />
        <div className="arc arc-3" />
        <div className="glow glow-1" />
        <div className="glow glow-2" />
      </div>

      <div className="hero-main">
        {/* ── LEFT: Copy ── */}
        <div className="hero-left anim-slide-r">
          <div className="hero-badges">
            <span className="hero-badge gold">
              <Icons.Star />
              Popular
            </span>
            <span className="hero-badge">
              <Icons.Calendar />
              16 - 24 weeks
            </span>
          </div>

          <h1 style={{ fontStyle: "italic", fontWeight: 900, letterSpacing: "-0.04em", fontSize: "clamp(3rem, 5vw, 4.5rem)" }}>
            Become skilled
          </h1>

          <p className="hero-desc" style={{ fontSize: "1.2rem", maxWidth: "540px", color: "rgba(255,255,255,0.9)" }}>
            <strong>Courses</strong> offer flexible, self-paced learning and industry-recognized certificates to help boost your AI & Data career in the UK.
          </p>

          <div className="hero-ctas">
            <a href="#programs" className="btn-gold lg pulse">
              Browse all courses
            </a>
          </div>

          <div className="hero-proof" style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="hero-proof-item">
              <Icons.CheckCircle />
              Avg Salary: £35K – £70K
            </div>
            <div className="hero-proof-item">
              <Icons.CheckCircle />
              Real Projects
            </div>
            <div className="hero-proof-item">
              <Icons.CheckCircle />
              Career Mentorship
            </div>
          </div>
        </div>

        {/* ── RIGHT: Testimonial & Visual ── */}
        <div className="hero-right anim-slide-l d3">
          <div className="hero-person-wrap" style={{ position: 'relative' }}>
            <Image
              src="/hero-person.png"
              alt="Successful AI professional"
              width={500}
              height={500}
              className="hero-person-img"
              priority
              style={{ objectFit: 'cover' }}
            />

            {/* edX style quote text block instead of standard card */}
            <div className="hero-quote-card flex-desktop edx-quote" style={{ background: 'transparent', border: 'none', boxShadow: 'none', backdropFilter: 'none', position: 'absolute' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div className="quote-mark" style={{ color: "var(--gold-400)", fontSize: "4rem", lineHeight: "0.8", fontFamily: "serif", fontWeight: "bold" }}>"</div>
                <div>
                  <h3 style={{ color: 'white', fontSize: '1.4rem', fontWeight: 700, lineHeight: 1.4, margin: '0 0 16px 0' }}>
                    You can certify your knowledge in everything you are willing to learn and that is amazing.
                  </h3>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <div style={{ width: '24px', height: '1px', background: 'var(--gold-400)' }} />
                    NexusAI online learner
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-stat-pill hidden-mobile" style={{ top: '80px', right: '-30px' }}>
              <div className="val">£70K+</div>
              <div className="lbl">Top Salary Package</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
