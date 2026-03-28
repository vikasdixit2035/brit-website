import { Icons } from "@/components/ui/Icons";

export default function LogoStrip() {
  return (
    <section className="logo-strip">
      <div className="logo-strip-inner">
        <div className="logo-strip-logos" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', gap: '60px' }}>
          {["Microsoft", "IBM", "Meta", "Google Cloud", "Amazon Web Services", "Deloitte"].map((name) => (
            <div key={name} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--gray-400)', fontWeight: 700, fontSize: '1.2rem', opacity: 0.7, transition: 'opacity 0.3s', cursor: 'pointer' }} className="hover-opacity-100">
              {/* Simulating logo visuals */}
              {name === 'Google Cloud' && <span style={{ color: '#4285F4' }}>G</span>}
              {name === 'Microsoft' && <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" /></svg>}
              {name}
            </div>
          ))}
          <a href="#" style={{ color: 'var(--gray-500)', display: 'flex', alignItems: 'center', padding: '8px', borderRadius: '50%', background: 'var(--gray-50)' }}>
            <Icons.ArrowRight />
          </a>
        </div>
      </div>
    </section>
  );
}
