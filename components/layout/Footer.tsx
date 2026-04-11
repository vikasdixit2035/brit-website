export default function Footer() {
  return (
    <footer className="footer" style={{ background: 'var(--white)', color: 'var(--gray-600)', borderTop: '1px solid var(--gray-100)' }}>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="f-logo" style={{ color: 'var(--blue-900)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <img src="/britinstitute.png" alt="Brit Institute Logo" style={{ height: '24px', width: 'auto', borderRadius: '4px' }} />
            Brit Institute
          </div>
          <p style={{ color: 'var(--gray-500)' }}>Industry-led AI & Data Analytics programs, designed for the UK job market.</p>
        </div>
        <div className="f-col">
          <h4 style={{ color: 'var(--blue-900)' }}>Programs</h4>
          <ul>
            <li><a href="#programs" style={{ color: 'var(--gray-500)' }}>Agentic AI</a></li>
            <li><a href="#programs" style={{ color: 'var(--gray-500)' }}>Data Analytics</a></li>
            <li><a href="#curriculum" style={{ color: 'var(--gray-500)' }}>Curriculum</a></li>
            <li><a href="#placement" style={{ color: 'var(--gray-500)' }}>Placement</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h4 style={{ color: 'var(--blue-900)' }}>Company</h4>
          <ul>
            <li><a href="/about" style={{ color: 'var(--gray-500)' }}>About Us</a></li>
            <li><a href="#testimonials" style={{ color: 'var(--gray-500)' }}>Success Stories</a></li>
            <li><a href="#" style={{ color: 'var(--gray-500)' }}>Blog</a></li>
            <li><a href="#" style={{ color: 'var(--gray-500)' }}>Careers</a></li>
          </ul>
        </div>
        <div className="f-col">
          <h4 style={{ color: 'var(--blue-900)' }}>Contact</h4>
          <ul>
            <li><a href="/contact" style={{ color: 'var(--gray-500)' }}>Contact Us</a></li>
            <li><a href="#" style={{ color: 'var(--gray-500)' }}>info@britinstitute.uk</a></li>
            <li><a href="tel:+447520664003" style={{ color: 'var(--gray-500)' }}>+44 7520 664 003</a></li>
            <li><a href="#" style={{ color: 'var(--gray-500)' }}>LinkedIn</a></li>
            <li><a href="#" style={{ color: 'var(--gray-500)' }}>Twitter</a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ borderTop: '1px solid var(--gray-100)', color: 'var(--gray-400)' }}>
        <span>© {new Date().getFullYear()} Brit Institute. All rights reserved.</span>
        <div style={{ display: 'flex', gap: '24px' }}>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</a>
          <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
