"use client";

import Link from "next/link";
import { FormEvent, useState } from "react";
import { Download, X } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import { trackLead } from "@/lib/analytics";
import { DEFAULT_PHONE_COUNTRY_CODE, PHONE_COUNTRY_CODES } from "@/components/ui/phoneCountryCodes";

type BrochureDownloadButtonProps = {
  brochureHref: string;
  downloadName: string;
  courseTitle: string;
  variant?: "primary" | "secondary";
};

export default function BrochureDownloadButton({
  brochureHref,
  downloadName,
  courseTitle,
  variant = "secondary",
}: BrochureDownloadButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneCountry: DEFAULT_PHONE_COUNTRY_CODE,
    phone: "",
    purpose: "",
    agreed: false,
  });

  const buttonClass =
    variant === "primary"
      ? "w-full sm:w-auto px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold text-[15px] transition-all flex items-center justify-center gap-2 shadow-lg shadow-purple-200"
      : "w-full sm:w-auto px-8 py-4 bg-white border border-gray-200 hover:bg-gray-50 text-gray-900 rounded-xl font-bold text-[16px] transition-all shadow-sm flex items-center justify-center gap-2 hover:-translate-y-0.5";

  const startDownload = () => {
    const link = document.createElement("a");
    link.href = brochureHref;
    link.download = downloadName;
    document.body.appendChild(link);
    link.click();
    link.remove();
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setError("");

    if (!formData.agreed) {
      setError("Please agree to the Terms & Conditions.");
      return;
    }

    try {
      setIsSubmitting(true);
      const API_URL =
        process.env.NODE_ENV === "development"
          ? "http://localhost:4000/api/leads"
          : "https://api.britinstitute.uk/api/leads";

      const payload = {
        name: formData.name.trim(),
        email: formData.email.trim(),
        phone: `${formData.phoneCountry} ${formData.phone.trim()}`.trim(),
        course: courseTitle,
        purpose: formData.purpose,
        source: "Course Brochure Download",
        message: `Brochure download request: ${courseTitle}`,
      };

      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        throw new Error("Submission failed");
      }

      trackLead({
        formName: "course_brochure_download_form",
        source: payload.source,
        course: courseTitle,
      });

      setFormData({
        name: "",
        email: "",
        phoneCountry: DEFAULT_PHONE_COUNTRY_CODE,
        phone: "",
        purpose: "",
        agreed: false,
      });
      setIsOpen(false);
      startDownload();
    } catch (err) {
      console.error(err);
      setError("Failed to save your details. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <button type="button" onClick={() => setIsOpen(true)} className={buttonClass}>
        Download Brochure <Download className={variant === "primary" ? "w-4 h-4" : "w-5 h-5 text-gray-500"} />
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/60 px-4 py-6">
          <div className="relative max-h-[92vh] w-full max-w-[540px] overflow-y-auto rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
            <button
              type="button"
              onClick={() => {
                setIsOpen(false);
                setError("");
              }}
              className="absolute right-4 top-4 rounded-full p-2 text-gray-500 transition-colors hover:bg-gray-100 hover:text-gray-900"
              aria-label="Close brochure form"
            >
              <X className="h-5 w-5" />
            </button>

            <div className="mb-6 pr-8">
              <p className="mb-2 text-xs font-bold uppercase tracking-[0.16em] text-purple-600">Course Brochure</p>
              <h3 className="text-2xl font-extrabold leading-tight text-gray-900">Get the brochure for {courseTitle}</h3>
              <p className="mt-2 text-sm leading-6 text-gray-600">
                Fill in your details and the brochure will download once your enquiry is saved.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Full Name*"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea]"
              />
              <input
                type="email"
                placeholder="Email Id*"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea]"
              />
              <div className="flex gap-2">
                <div className="relative w-[42%]">
                  <select
                    value={formData.phoneCountry}
                    onChange={(e) => setFormData({ ...formData, phoneCountry: e.target.value })}
                    className="w-full appearance-none rounded-md border border-gray-300 bg-gray-50 px-3 py-3 text-sm text-gray-700 outline-none transition-all focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea]"
                  >
                    {PHONE_COUNTRY_CODES.map((country) => (
                      <option key={country.value} value={country.value}>
                        {country.label}
                      </option>
                    ))}
                  </select>
                  <div className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                    <Icons.ChevronDown />
                  </div>
                </div>
                <input
                  type="tel"
                  placeholder="Phone*"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="min-w-0 flex-1 rounded-md border border-gray-300 px-4 py-3 text-sm outline-none transition-all focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea]"
                />
              </div>
              <div className="relative">
                <label className="absolute -top-2.5 left-3 bg-white px-1 text-xs text-gray-500">Purpose*</label>
                <select
                  required
                  value={formData.purpose}
                  onChange={(e) => setFormData({ ...formData, purpose: e.target.value })}
                  className="w-full cursor-pointer appearance-none rounded-md border border-gray-300 bg-white px-4 py-3 text-sm outline-none transition-all focus:border-[#9333ea] focus:ring-1 focus:ring-[#9333ea]"
                >
                  <option value="">Select an option</option>
                  <option value="career_change">Career Change</option>
                  <option value="upskill">Upskilling</option>
                  <option value="placement">Placement Assistance</option>
                </select>
                <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-gray-500">
                  <Icons.ChevronDown />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="brochure-agree"
                  required
                  checked={formData.agreed}
                  onChange={(e) => setFormData({ ...formData, agreed: e.target.checked })}
                  className="mt-1 h-4 w-4 cursor-pointer accent-[#10B981]"
                />
                <label htmlFor="brochure-agree" className="cursor-pointer text-xs leading-relaxed text-gray-600">
                  I agree to Brit Institute&apos;s{" "}
                  <Link href="/terms" className="font-semibold text-gray-900 underline">Terms & Conditions</Link> and{" "}
                  <Link href="/privacy-policy" className="font-semibold text-gray-900 underline">Privacy Policy</Link>.
                </label>
              </div>

              {error && <p className="rounded-md bg-red-50 px-3 py-2 text-sm font-medium text-red-700">{error}</p>}

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 flex w-full items-center justify-center gap-2 rounded-md bg-[#a855f7] py-3.5 text-[15px] font-bold text-white transition-colors hover:bg-[#9333ea] disabled:cursor-not-allowed disabled:bg-gray-400"
              >
                {isSubmitting ? "Saving..." : "Submit & Download"} <Download className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
