import { Icons } from "@/components/ui/Icons";

export default function LogoStrip() {
  return (
    <section className="logo-strip" style={{ background: "#ffffff", padding: "16px 0", borderBottom: "1px solid #eaeaea", zIndex: 20, position: "relative" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 24px", display: "flex", flexDirection: "column", gap: "20px" }}>
        
        {/* Row 1: Trusted by */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", flexWrap: "wrap", borderBottom: "1px solid #f3f4f6", paddingBottom: "12px" }}>
          <span style={{ fontWeight: 700, color: "#4B5563", fontSize: "0.9rem" }}>Trusted by</span>
          {["Microsoft", "Standard Chartered", "TATA", "UST Global", "HackerRank", "AT&T"].map((name) => (
             <div key={name} style={{ color: "#9CA3AF", fontWeight: 700, fontSize: "1rem", display: "flex", alignItems: "center", gap: "6px" }}>
               {name === 'Microsoft' && <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M11.4 24H0V12.6h11.4V24zM24 24H12.6V12.6H24V24zM11.4 11.4H0V0h11.4v11.4zm12.6 0H12.6V0H24v11.4z" /></svg>}
               {name === 'TATA' && <span style={{color: "#1D4ED8", fontSize: "1.1rem", fontWeight: 900}}>TATA</span>}
               {name === 'AT&T' && <span style={{color: "#3B82F6", fontSize: "1.1rem", fontWeight: 900}}>AT&T</span>}
               {name !== 'TATA' && name !== 'AT&T' && name}
             </div>
          ))}
        </div>

        {/* Row 2: Partnering */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "12px" }}>
          <span style={{ fontWeight: 700, color: "#111827", fontSize: "1rem" }}>Partnering with World's Leading Governing Bodies</span>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "24px", flexWrap: "wrap" }}>
            {["AXELOS", "IASSC", "ICAgile", "Scrum.org", "Scrum Alliance"].map((name) => (
               <div key={name} style={{ 
                 background: "#ffffff", border: "1px solid #e5e7eb", 
                 padding: "6px 16px", borderRadius: "6px", 
                 color: "#4b5563", fontWeight: 600, fontSize: "0.85rem",
                 boxShadow: "0 1px 2px rgba(0,0,0,0.05)"
               }}>
                 {name}
               </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
