"use client";

import Link from "next/link";
import { useState } from "react";
import { Icons } from "@/components/ui/Icons";
import { trackLead } from "@/lib/analytics";
import { DEFAULT_PHONE_COUNTRY_CODE, PHONE_COUNTRY_CODES } from "@/components/ui/phoneCountryCodes";

export default function CourseLeadForm({ courseTitle }: { courseTitle: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCountry: DEFAULT_PHONE_COUNTRY_CODE,
    phone: "",
    course: courseTitle,
    purpose: "",
    agreed: false
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreed) {
      alert("Please agree to the Terms & Conditions.");
      return;
    }
    
    try {
      const { phoneCountry, phone, ...rest } = formData;
      const payload = {
        ...rest,
        phone: `${phoneCountry} ${phone.trim()}`.trim(),
        source: "Course Lead Form",
      };

      const res = await fetch("/api/course-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      if (res.ok) {
        trackLead({
          formName: "course_lead_form",
          source: payload.source,
          course: formData.course,
        });
        alert("Success! We will contact you soon.");
        setFormData({
          ...formData,
          name: "",
          email: "",
          phoneCountry: DEFAULT_PHONE_COUNTRY_CODE,
          phone: "",
          purpose: "",
          agreed: false,
        });
      } else {
        alert("Failed to submit. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Please try again.");
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.08)] p-8 sticky top-28 border border-gray-100">
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-gray-900 mb-1">
          Talk to an <span className="text-[#10B981]">Expert</span>
        </h3>
        <p className="text-sm text-gray-500">Fill in the details to get started</p>
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        {/* Full Name */}
        <div>
          <input
            type="text"
            placeholder="Full Name*"
            required
            value={formData.name}
            onChange={e => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all text-sm"
          />
        </div>

        {/* Email Id */}
        <div>
          <input
            type="email"
            placeholder="Email Id*"
            required
            value={formData.email}
            onChange={e => setFormData({ ...formData, email: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all text-sm"
          />
        </div>

        {/* Phone */}
        <div className="flex gap-2">
          <div className="relative w-[42%]">
            <select
              value={formData.phoneCountry}
              onChange={e => setFormData({ ...formData, phoneCountry: e.target.value })}
              className="w-full appearance-none border border-gray-300 rounded-md px-3 py-3 bg-gray-50 outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all text-sm text-gray-700"
            >
              {PHONE_COUNTRY_CODES.map((country) => (
                <option key={country.value} value={country.value}>
                  {country.label}
                </option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
              <Icons.ChevronDown />
            </div>
          </div>
          <input
            type="tel"
            placeholder="Phone*"
            required
            value={formData.phone}
            onChange={e => setFormData({ ...formData, phone: e.target.value })}
            className="flex-1 px-4 py-3 rounded-md border border-gray-300 outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all text-sm"
          />
        </div>

        {/* Purpose */}
        <div className="relative mt-2">
          <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">Purpose*</label>
          <select
            required
            value={formData.purpose}
            onChange={e => setFormData({ ...formData, purpose: e.target.value })}
            className="w-full px-4 py-3 rounded-md border border-gray-300 outline-none focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea] transition-all text-sm appearance-none bg-white cursor-pointer"
          >
            <option value="">Select an option</option>
            <option value="career_change">Career Change</option>
            <option value="upskill">Upskilling</option>
            <option value="placement">Placement Assistance</option>
          </select>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500">
            <Icons.ChevronDown />
          </div>
        </div>

        {/* Checkbox */}
        <div className="flex items-start gap-3 mt-2">
          <input 
            type="checkbox" 
            id="agree"
            required
            checked={formData.agreed}
            onChange={e => setFormData({ ...formData, agreed: e.target.checked })}
            className="mt-1 accent-[#10B981] w-4 h-4 cursor-pointer"
          />
          <label htmlFor="agree" className="text-xs text-gray-600 leading-relaxed cursor-pointer">
            I agree to Brit Institute&apos;s <Link href="/terms" className="font-semibold text-gray-900 underline">Terms & Conditions</Link> and <Link href="/privacy-policy" className="font-semibold text-gray-900 underline">Privacy Policy</Link>.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3.5 bg-[#a855f7] hover:bg-[#9333ea] text-white rounded-md font-bold text-[15px] mt-2 transition-colors flex items-center justify-center gap-2"
        >
          Submit <span className="font-bold">→</span>
        </button>
      </form>
    </div>
  );
}
