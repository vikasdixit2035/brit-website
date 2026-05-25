"use client";

import { useState } from "react";
import useReveal from "@/hooks/useReveal";
import { trackLead } from "@/lib/analytics";
import { DEFAULT_PHONE_COUNTRY_CODE, PHONE_COUNTRY_CODES } from "@/components/ui/phoneCountryCodes";

export default function StickyForm() {
  const { revealRef, cls } = useReveal();
  
  const [formData, setFormData] = useState({
    name: "",
    phoneCountry: DEFAULT_PHONE_COUNTRY_CODE,
    phone: "",
    email: "",
    course: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const API_URL = process.env.NODE_ENV === "development" 
        ? "http://localhost:4000/api/leads" 
        : "https://api.britinstitute.uk/api/leads";

      const { phoneCountry, phone, ...rest } = formData;
      const payload = {
        ...rest,
        phone: `${phoneCountry} ${phone.trim()}`.trim(),
        source: "Brit Institute Website - Sticky Form",
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        trackLead({
          formName: "sticky_form",
          source: payload.source,
          course: formData.course,
        });
        alert("Success! We will contact you soon.");
        setFormData({ name: "", phoneCountry: DEFAULT_PHONE_COUNTRY_CODE, email: "", phone: "", course: "" });
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <section id="sticky-form" className="w-full bg-[#0c0a09] py-24 font-sans border-t border-white/10" ref={revealRef}>
      <div className={`max-w-[800px] mx-auto px-6 ${cls}`}>
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight mb-4">
            Get Full Programme Details
          </h2>
          <p className="text-gray-300">
            Fill out the form below and our career experts will reach out to you shortly.
          </p>
        </div>
        
        <form onSubmit={handleSubmit} className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <input 
              type="text" 
              placeholder="Name*" 
              required
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-[#D4AF37] transition-colors" 
            />
            <div className="flex gap-2">
              <div className="relative w-[44%]">
                <select
                  value={formData.phoneCountry}
                  onChange={e => setFormData({ ...formData, phoneCountry: e.target.value })}
                  className="w-full appearance-none rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-[#D4AF37] transition-colors"
                >
                  {PHONE_COUNTRY_CODES.map((country) => (
                    <option key={country.value} value={country.value} className="text-black">
                      {country.label}
                    </option>
                  ))}
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              <input 
                type="tel" 
                placeholder="Phone*" 
                required
                value={formData.phone}
                onChange={e => setFormData({ ...formData, phone: e.target.value })}
                className="flex-1 rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-[#D4AF37] transition-colors" 
              />
            </div>
          </div>
          <div className="mb-4">
            <input 
              type="email" 
              placeholder="Email*" 
              required
              value={formData.email}
              onChange={e => setFormData({ ...formData, email: e.target.value })}
              className="w-full rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white placeholder-white/50 outline-none focus:border-[#D4AF37] transition-colors" 
            />
          </div>
          <div className="mb-6 relative">
            <select 
              required
              value={formData.course}
              onChange={e => setFormData({ ...formData, course: e.target.value })}
              className="w-full appearance-none rounded-xl border border-white/20 bg-black/40 px-4 py-4 text-sm text-white outline-none focus:border-[#D4AF37] transition-colors [&>option]:text-black"
            >
              <option value="" disabled>Course Interest*</option>
              <option value="Data Analyst and Gen AI Certification Program">Data Analyst and Gen AI Certification Program</option>
              <option value="Data Science & Machine Learning Certification Program">Data Science & Machine Learning Certification Program</option>
              <option value="Agentic AI Certification Program">Agentic AI Certification Program</option>
              <option value="Generative AI Certificaation Program">Generative AI Certificaation Program</option>
            </select>
            <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2">
              <svg width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 1.5L6 6.5L11 1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </div>
          <button type="submit" className="w-full rounded-xl bg-[#D4AF37] hover:bg-white hover:text-black py-4 text-base font-bold text-black transition-colors">
            Book Free Consultation
          </button>
        </form>
      </div>
    </section>
  );
}
