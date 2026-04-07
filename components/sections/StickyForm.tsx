"use client";

import useReveal from "@/hooks/useReveal";

export default function StickyForm() {
  const r = useReveal();

  return (
    <section id="sticky-form" className="w-full bg-[#0c0a09] py-24 font-sans border-t border-white/10" ref={r.ref}>
      <div className={`max-w-[800px] mx-auto px-6 ${r.cls}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Get Full Programme Details
          </h2>
          <p className="text-gray-400">
            Fill out the form below and our career experts will reach out to you shortly.
          </p>
        </div>
        
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Name" 
              className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-[#D4AF37] transition-colors" 
            />
            <input 
              type="tel" 
              placeholder="Phone" 
              className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-[#D4AF37] transition-colors" 
            />
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email" 
              className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-[#D4AF37] transition-colors" 
            />
          </div>
          <div className="mb-6 relative">
            <select 
              defaultValue="" 
              className="w-full appearance-none rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-[#D4AF37] transition-colors [&>option]:text-black"
            >
              <option value="" disabled>Course Interest</option>
              <option value="data-analytics">Data Analytics</option>
              <option value="data-science">Data Science & Machine Learning</option>
              <option value="ai-automation">AI & Automation</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <button className="w-full rounded-xl bg-[#D4AF37] hover:bg-white hover:text-black py-4 text-base font-bold text-black transition-colors">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
}
