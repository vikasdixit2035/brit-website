"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

import useReveal from "@/hooks/useReveal";
import { faqItems } from "@/lib/faqData";

export default function FAQ() {
  const { revealRef, cls } = useReveal();
  const [openIndex, setOpenIndex] = useState(0);
  const midpoint = Math.ceil(faqItems.length / 2);
  const leftFaqs = faqItems.slice(0, midpoint);
  const rightFaqs = faqItems.slice(midpoint);

  const renderFaqColumn = (items: typeof faqItems, offset: number) => (
    <div className="space-y-3">
      {items.map((faq, index) => {
        const globalIndex = offset + index;
        const isOpen = openIndex === globalIndex;
        const panelId = `faq-panel-${globalIndex}`;
        const buttonId = `faq-button-${globalIndex}`;

        return (
          <article
            key={faq.question}
            className={`group overflow-hidden rounded-2xl border bg-white transition-all duration-300 ${
              isOpen
                ? "border-amber-300 shadow-[0_14px_32px_-22px_rgba(180,138,48,0.35)]"
                : "border-slate-200 hover:border-slate-300 hover:shadow-[0_10px_24px_-20px_rgba(15,23,42,0.2)]"
            }`}
          >
            <button
              id={buttonId}
              type="button"
              className="flex w-full items-center justify-between gap-4 px-4 py-4 text-left outline-none transition-colors md:px-5 md:py-4"
              onClick={() => setOpenIndex(isOpen ? -1 : globalIndex)}
              aria-expanded={isOpen}
              aria-controls={panelId}
            >
              <h3 className="pr-2 text-[15px] font-semibold leading-snug text-slate-900 md:text-base">
                {faq.question}
              </h3>

              <span
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                  isOpen
                    ? "border-amber-300 bg-amber-400 text-white"
                    : "border-slate-200 bg-slate-50 text-slate-500 group-hover:border-amber-200 group-hover:text-amber-600"
                }`}
              >
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                />
              </span>
            </button>

            <div
              id={panelId}
              role="region"
              aria-labelledby={buttonId}
              className="overflow-hidden"
              style={{
                maxHeight: isOpen ? "1000px" : "0px",
                opacity: isOpen ? 1 : 0,
                transition:
                  "max-height 320ms cubic-bezier(.4,0,.2,1), opacity 240ms ease",
              }}
            >
              <div className="px-4 pb-4 md:px-5 md:pb-5">
                <div className="border-t border-slate-100 pt-3">
                  <p className="whitespace-pre-line text-sm leading-6 text-slate-600 md:text-[15px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            </div>
          </article>
        );
      })}
    </div>
  );

  return (
    <section
      id="faq"
      ref={revealRef}
      className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-white py-24 font-sans text-slate-900"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(251,191,36,0.12),_transparent_36%),radial-gradient(circle_at_bottom_right,_rgba(148,163,184,0.12),_transparent_30%)]" />

      <div className={`relative z-10 mx-auto max-w-[1440px] px-6 md:px-12 lg:px-20 ${cls}`}>
        <div className="mx-auto mb-12 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-slate-900 md:text-4xl lg:text-[2.9rem]">
            Frequently Asked Questions About Becoming a <span className="text-amber-600">Data Analyst in the UK</span>
          </h2>
          <p className="mx-auto max-w-xl text-sm leading-relaxed text-slate-600 md:text-base">
            Clear answers about our programmes, eligibility, delivery format,
            placement support, and next steps.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4">
          {renderFaqColumn(leftFaqs, 0)}
          {renderFaqColumn(rightFaqs, midpoint)}
        </div>
      </div>
    </section>
  );
}
