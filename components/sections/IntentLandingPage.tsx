import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Footer from "@/components/layout/Footer";

type ContentSection = {
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type ComparisonRow = {
  topic: string;
  first: string;
  second: string;
};

type IntentLandingPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  breadcrumb: string;
  trustItems: string[];
  sections: ContentSection[];
  primaryCta?: { href: string; label: string };
  secondaryCta?: { href: string; label: string };
  comparison?: {
    title: string;
    firstLabel: string;
    secondLabel: string;
    rows: ComparisonRow[];
  };
  relatedLinks: Array<{ href: string; label: string; description: string }>;
};

export default function IntentLandingPage({
  eyebrow,
  title,
  intro,
  breadcrumb,
  trustItems,
  sections,
  primaryCta = { href: "/contact", label: "Book Free Career Consultation" },
  secondaryCta = { href: "/courses/data-analytics", label: "Explore Data Analyst Programme" },
  comparison,
  relatedLinks,
}: IntentLandingPageProps) {
  return (
    <main className="min-h-screen bg-[#f7f3ea] text-[#241a1f]">
      <section className="relative overflow-hidden bg-[#24101f] px-5 pb-20 pt-32 text-white md:px-8 md:pb-24">
        <div aria-hidden="true" className="absolute inset-0 bg-[radial-gradient(circle_at_80%_10%,rgba(212,175,55,0.2),transparent_32%),radial-gradient(circle_at_10%_90%,rgba(217,87,0,0.2),transparent_32%)]" />
        <div className="relative z-10 mx-auto max-w-6xl">
          <nav aria-label="Breadcrumb" className="mb-8 flex gap-2 text-sm font-semibold text-white/60">
            <Link href="/" className="hover:text-white">Home</Link>
            <span aria-hidden="true">/</span>
            <span className="text-white">{breadcrumb}</span>
          </nav>
          <div className="max-w-4xl">
            <p className="text-xs font-black uppercase tracking-[0.24em] text-[#f5c242]">{eyebrow}</p>
            <h1 className="mt-5 text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">{title}</h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/76 md:text-xl">{intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={primaryCta.href} className="btn-gold lg">{primaryCta.label}</Link>
              <Link href={secondaryCta.href} className="btn-outline btn-outline-white">{secondaryCta.label}</Link>
            </div>
          </div>
          <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {trustItems.map((item) => (
              <div key={item} className="rounded-md border border-white/14 bg-white/8 p-4 text-sm font-black leading-6">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <div className="px-5 py-20 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl space-y-20">
          {sections.map((section, index) => (
            <section key={section.title} className={`grid gap-8 lg:grid-cols-[0.8fr_1.2fr] ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
              <div>
                <p className="text-xs font-black uppercase tracking-[0.22em] text-[#c45118]">Step {index + 1}</p>
                <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">{section.title}</h2>
              </div>
              <div className="rounded-2xl border border-[#ded6c8] bg-white p-7 shadow-[0_16px_40px_rgba(36,26,31,0.05)] md:p-9">
                <div className="space-y-4 text-base leading-8 text-[#6f665c]">
                  {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                </div>
                {section.bullets && (
                  <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                    {section.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-3 rounded-xl bg-[#f7f3ea] p-4 text-sm font-bold leading-6">
                        <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#d95700]" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}

          {comparison && (
            <section>
              <h2 className="text-3xl font-semibold leading-tight md:text-4xl">{comparison.title}</h2>
              <div className="mt-8 overflow-x-auto rounded-2xl border border-[#ded6c8] bg-white">
                <table className="w-full min-w-[680px] border-collapse text-left">
                  <thead className="bg-[#24101f] text-white">
                    <tr>
                      <th className="p-5 text-sm font-black">Compare</th>
                      <th className="p-5 text-sm font-black">{comparison.firstLabel}</th>
                      <th className="p-5 text-sm font-black">{comparison.secondLabel}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparison.rows.map((row) => (
                      <tr key={row.topic} className="border-t border-[#ded6c8] align-top">
                        <th scope="row" className="p-5 text-sm font-black">{row.topic}</th>
                        <td className="p-5 text-sm leading-7 text-[#6f665c]">{row.first}</td>
                        <td className="p-5 text-sm leading-7 text-[#6f665c]">{row.second}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </div>
      </div>

      <section className="bg-[#746d5c] px-5 py-20 text-white md:px-8">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-semibold md:text-4xl">Continue Planning Your Data Analyst Career</h2>
          <div className="mt-8 grid gap-4 md:grid-cols-3">
            {relatedLinks.map((link) => (
              <Link key={link.href} href={link.href} className="rounded-2xl border border-white/16 bg-[#24101f] p-6 transition hover:-translate-y-1">
                <h3 className="text-xl font-black">{link.label}</h3>
                <p className="mt-3 text-sm leading-7 text-white/70">{link.description}</p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-black text-[#f5c242]">Explore <ArrowRight size={16} /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#24101f] px-5 py-20 text-center text-white md:px-8">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-semibold leading-tight md:text-5xl">Turn Your Career Plan into Practical Progress</h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/72">Speak with an advisor about your starting point, the skills you need, programme fees and the career support available.</p>
          <Link href="/contact" className="btn-gold lg mt-8">Book Free Career Consultation</Link>
        </div>
      </section>
      <Footer />
    </main>
  );
}
