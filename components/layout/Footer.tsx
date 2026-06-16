import Image from "next/image";
import Link from "next/link";
import { Globe2, Mail, MapPin, MessageCircle, Phone, Send, Share2 } from "lucide-react";
import { SITE_ADDRESS_LINES, SITE_EMAIL, SITE_PHONE_DISPLAY, SITE_PHONE_UK } from "@/lib/site";

const footerGroups = [
  {
    title: "Programs",
    links: [
      ["Data Analytics", "/courses/data-analytics"],
      ["Data Science", "/courses/data-science"],
      ["Agentic AI", "/courses/ai-automation"],
      ["Generative AI", "/courses/gen-ai"],
      ["All Courses", "/courses"],
    ],
  },
  {
    title: "Company",
    links: [
      ["About Us", "/about"],
      ["Success Stories", "/#proof"],
      ["Reviews", "/reviews"],
      ["Pricing", "/pricing"],
      ["Careers", "/careers"],
    ],
  },
  {
    title: "Resources",
    links: [
      ["Blog", "/blog"],
      ["Resources", "/resources"],
      ["Placement", "/placement"],
      ["Pay Fees", "/pay"],
      ["FAQ", "/#faq"],
    ],
  },
] as const;

export default function Footer() {
  return (
    <footer className="bg-[#160914] px-5 py-16 text-white md:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[1.25fr_2fr_1.2fr]">
          <div>
            <Link href="/" className="inline-flex items-center gap-3 text-xl font-black text-white">
              <Image
                src="/britinstitute_v1.png"
                alt="Brit Institute logo"
                width={34}
                height={34}
                className="rounded-md"
              />
              Brit <span className="text-[#d4af37]">Institute</span>
            </Link>
            <p className="mt-5 max-w-sm text-sm leading-7 text-white/62">
              Industry-led AI and Data Analytics programmes designed for the UK job market, practical portfolios, and career confidence.
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-3">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[#d4af37]">{group.title}</h4>
                <ul className="mt-5 space-y-3">
                  {group.links.map(([label, href]) => (
                    <li key={href}>
                      <Link href={href} className="text-sm font-semibold text-white/58 transition hover:text-white">
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h4 className="text-xs font-black uppercase tracking-[0.24em] text-[#d4af37]">Contact</h4>
            <div className="mt-5 space-y-4 text-sm font-semibold text-white/64">
              <a href={`mailto:${SITE_EMAIL}`} className="flex items-center gap-3 transition hover:text-white">
                <Mail size={17} className="text-[#d95700]" />
                {SITE_EMAIL}
              </a>
              <a href={`tel:${SITE_PHONE_UK}`} className="flex items-center gap-3 transition hover:text-white">
                <Phone size={17} className="text-[#d95700]" />
                {SITE_PHONE_DISPLAY}
              </a>
              <address className="flex gap-3 not-italic">
                <MapPin size={17} className="mt-1 shrink-0 text-[#d95700]" />
                <span>
                  {SITE_ADDRESS_LINES.map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
                </span>
              </address>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6 pt-8 text-sm text-white/45 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-wrap gap-5">
            <Link href="/privacy-policy" className="transition hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms" className="transition hover:text-white">
              Terms and Conditions
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {[Globe2, MessageCircle, Send, Share2].map((Icon, index) => (
              <a
                key={index}
                href="/contact"
                aria-label="Brit Institute social link"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-white/52 transition hover:border-[#d4af37] hover:text-white"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>

          <span>© {new Date().getFullYear()} Brit Institute. All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
