export default function FinalCTA() {
  return (
    <section id="final-cta" className="final-cta" style={{ background: 'var(--blue-600)', padding: '120px 28px' }}>
      <div className="final-inner">
        <h2 style={{ fontSize: '3rem', letterSpacing: '-0.03em' }}>
          Book a consultation to understand the right programme
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.9)' }}>
          Start building a high-paying career in AI or data today.
        </p>

        <div style={{ marginTop: '40px' }}>
          <a href="#" className="btn-gold lg pulse" style={{ background: 'white', color: 'var(--blue-700)', boxShadow: '0 8px 30px rgba(0,0,0,0.1)' }}>
            Book Free Consultation
          </a>
        </div>
      </div>
    </section>
  );
}
