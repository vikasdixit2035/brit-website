"use client";

import { Icons } from "@/components/ui/Icons";
import useReveal from "@/hooks/useReveal";

export default function Pricing() {
  const r = useReveal();
  return (
    <section id="pricing" className="section s-pricing" ref={r.ref}>
      <div className={`section-inner ${r.cls}`}>
        <div className="price-card" style={{ maxWidth: '800px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 800, color: 'white', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Invest in a Career That Pays Back
          </h2>
          <p className="price-desc" style={{ fontSize: '1.2rem', maxWidth: '500px' }}>
            One program, everything included. No hidden fees. Start your journey today.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', width: '100%', marginTop: '32px', marginBottom: '40px' }}>
            <ul className="price-list" style={{ margin: 0 }}>
              {[
                "Complete training (4–6 months)", "All projects + code reviews",
                "Industry mentorship sessions", "Placement support & career coaching"
              ].map((f, i) => <li key={i}><Icons.CheckCircle />&nbsp; {f}</li>)}
            </ul>
            <ul className="price-list" style={{ margin: 0 }}>
              {[
                "Resume & portfolio review", "Mock interviews with experts",
                "Lifetime community access", "Certificate of completion",
              ].map((f, i) => <li key={i}><Icons.CheckCircle />&nbsp; {f}</li>)}
            </ul>
          </div>
          <div className="hero-ctas" style={{ justifyContent: 'center' }}>
            <a href="#final-cta" className="btn-gold lg pulse">Enroll Now</a>
            <a href="#faq" className="btn-outline btn-outline-white hidden-mobile">Have questions?</a>
          </div>
          <p className="price-note" style={{ marginTop: '24px' }}>Flexible EMI starting from ₹8,333/mo</p>
        </div>
      </div>
    </section>
  );
}
