import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export const theme = {
  dark: "#24101f",
  darkAlt: "#160914",
  paper: "#f7f3ea",
  olive: "#746d5c",
  gold: "#d4af37",
  goldBright: "#f5c242",
  orange: "#d95700",
  ink: "#241a1f",
  muted: "#6f665c",
  line: "#ded6c8",
} as const;

export function ThemePattern({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 opacity-50 ${className}`}
      style={{
        background:
          "radial-gradient(circle at 50% 45%, rgba(245,194,66,0.16), transparent 32%), repeating-radial-gradient(circle at 50% 50%, rgba(255,255,255,0.08) 0 1px, transparent 1px 18px)",
      }}
    />
  );
}

export function ThemeShell({ children }: { children: ReactNode }) {
  return <main className="min-h-screen bg-[#f7f3ea] text-[#241a1f]">{children}</main>;
}

export function ThemeLabel({ children, dark = false }: { children: ReactNode; dark?: boolean }) {
  return (
    <p className={`text-xs font-black uppercase tracking-[0.28em] ${dark ? "text-[#f5c242]" : "text-[#c45118]"}`}>
      {children}
    </p>
  );
}

export function ThemeHero({
  eyebrow,
  title,
  text,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative overflow-hidden bg-[#24101f] px-5 pb-20 pt-36 text-white md:px-8 lg:pt-40">
      <ThemePattern />
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(36,16,31,0.98),rgba(36,16,31,0.9)_58%,rgba(217,87,0,0.16))]" />
      <div className="relative z-10 mx-auto max-w-6xl text-center">
        <ThemeLabel dark>{eyebrow}</ThemeLabel>
        <h1 className="mx-auto mt-5 max-w-4xl text-5xl font-black leading-[0.98] tracking-tight md:text-7xl">
          {title}
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/72 md:text-lg">{text}</p>
        {children}
      </div>
    </section>
  );
}

export function ThemeCTA({
  title,
  text,
  primaryHref = "/contact",
  primaryLabel = "Book Free Consultation",
  secondaryHref = "/courses",
  secondaryLabel = "Explore Courses",
}: {
  title: ReactNode;
  text: string;
  primaryHref?: string;
  primaryLabel?: string;
  secondaryHref?: string;
  secondaryLabel?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-[#24101f] px-5 py-20 text-center text-white md:px-8">
      <ThemePattern />
      <div className="relative z-10 mx-auto max-w-3xl">
        <ThemeLabel dark>Courses. Community. Career.</ThemeLabel>
        <h2 className="mt-4 text-4xl font-semibold leading-tight md:text-5xl">{title}</h2>
        <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-white/72 md:text-base">{text}</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link href={primaryHref} className="btn-gold lg">
            {primaryLabel}
          </Link>
          <Link href={secondaryHref} className="btn-outline btn-outline-white">
            {secondaryLabel}
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
