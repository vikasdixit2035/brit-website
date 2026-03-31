export default function FinalCTA() {
  return (
    <section id="final-cta" className="final-cta" style={{ background: 'var(--blue-600)', padding: '120px 28px' }}>
      <div className="final-inner">
        <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em' }}>Book a consultation to understand the right programme</h2>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>Start building a high-paying career in AI or data today.</p>

        <div style={{ marginTop: '24px', background: 'rgba(255,255,255,0.1)', padding: '16px 24px', borderRadius: '12px', display: 'inline-block' }}>
          <p style={{ margin: 0, fontWeight: 700, color: '#FFD700' }}>Next Cohort</p>
          <p style={{ margin: '4px 0 0 0', fontSize: '0.9rem' }}>Limited seats available. Applications closing on: <strong>Next Friday</strong></p>
        </div>

        <div style={{ marginTop: '40px' }}>
          <a href="#" className="btn-gold lg pulse" style={{ background: 'white', color: 'var(--blue-700)', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>Book Free Consultation</a>
        </div>
      </div>
    </section>
  );
}
