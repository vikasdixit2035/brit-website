import Image from "next/image";
import Link from "next/link";
import { SITE_ADDRESS_LINES, SITE_EMAIL, SITE_PHONE_UK } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="footer" style={{ background: 'var(--white)', color: 'var(--gray-600)', borderTop: '1px solid var(--gray-100)' }}>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="f-logo" style={{ color: 'var(--blue-900)', display: 'flex', alignItems: 'center', gap: '8px' }}>
            <Image src="/britinstitute_v1.png" alt="Brit Institute logo" width={24} height={24} style={{ width: '24px', height: '24px', borderRadius: '4px' }} />
            Brit Institute
          </div>
          <p style={{ color: 'var(--gray-500)' }}>Industry-led AI & Data Analytics programs, designed for the UK job market.</p>
        </div>
        <div className="f-col">
          <h4 style={{ color: 'var(--blue-900)' }}>Programs</h4>
          <ul>
            <li><Link href="/courses/data-analytics" style={{ color: 'var(--gray-500)' }}>Data Analyst and Gen AI Certification Program</Link></li>
            <li><Link href="/courses/data-science" style={{ color: 'var(--gray-500)' }}>Data Science, Machine Learning and Gen AI Certification Program</Link></li>
            <li><Link href="/courses/ai-automation" style={{ color: 'var(--gray-500)' }}>Agentic AI Certification Program</Link></li>
            <li><Link href="/courses/gen-ai" style={{ color: 'var(--gray-500)' }}>Generative AI Certification Program</Link></li>
            <li><Link href="/courses" style={{ color: 'var(--blue-600)', fontWeight: 500 }}>View All Courses</Link></li>
          </ul>
        </div>
        <div className="f-col">
          <h4 style={{ color: 'var(--blue-900)' }}>Company</h4>
          <ul>
            <li><Link href="/about" style={{ color: 'var(--gray-500)' }}>About Us</Link></li>
            <li><Link href="/#proof" style={{ color: 'var(--gray-500)' }}>Success Stories</Link></li>
            <li><Link href="/blog" style={{ color: 'var(--gray-500)' }}>Blog</Link></li>
            <li><Link href="/careers" style={{ color: 'var(--gray-500)' }}>Careers</Link></li>
          </ul>
        </div>
        <div className="f-col">
          <h4 style={{ color: 'var(--blue-900)' }}>Contact</h4>
          <ul>
            <li><a href="/contact" style={{ color: 'var(--gray-500)' }}>Contact Us</a></li>
            <li><a href={`mailto:${SITE_EMAIL}`} style={{ color: 'var(--gray-500)' }}>{SITE_EMAIL}</a></li>
            <li><a href={`tel:${SITE_PHONE_UK}`} style={{ color: 'var(--gray-500)' }}>{SITE_PHONE_UK}</a></li>
            <li>
              <address style={{ color: 'var(--gray-500)', lineHeight: 1.6, fontStyle: 'normal' }}>
                {SITE_ADDRESS_LINES.map((line) => (
                  <div key={line}>{line}</div>
                ))}
              </address>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom" style={{ borderTop: '1px solid var(--gray-100)', color: 'var(--gray-400)', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '32px', paddingBottom: '32px', gap: '16px' }}>
        <div style={{ display: 'flex', gap: '32px', justifyContent: 'center' }}>
          <Link href="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>Privacy Policy</Link>
          <Link href="/terms" style={{ color: 'inherit', textDecoration: 'none', fontWeight: 500 }}>Terms & Conditions</Link>
        </div>
        <span style={{ fontSize: '0.9rem' }}>© {new Date().getFullYear()} Brit Institute. All rights reserved.</span>
        <span style={{ fontSize: '0.85rem' }}>Brit Institute is a subsidiary of Learnify Ops.</span>
      </div>
    </footer>
  );
}
