export type SiteVariant = "main" | "chatbot";

export type SiteConfig = {
  variant: SiteVariant;
  siteUrl: string;
  siteHost: string;
  siteName: string;
  canonicalPathPrefix: string;
};

type HeaderStore = {
  get(name: string): string | null;
};

const DEFAULT_MAIN_SITE_URL = "https://britinstitute.uk";
const DEFAULT_CHATBOT_SITE_URL = "https://chat.britinstitute.uk";
const DEFAULT_MAIN_SITE_NAME = "Brit Institute";
const DEFAULT_CHATBOT_SITE_NAME = "Brit Institute Career Chatbot";
const CHATBOT_INTERNAL_PATH = "/career-chatbot";

function normalizeSiteUrl(value: string | undefined, fallback: string) {
  const normalized = (value ?? fallback).trim().replace(/\/+$/, "");
  return normalized.length > 0 ? normalized : fallback;
}

function getHostFromUrl(url: string) {
  return new URL(url).host.toLowerCase();
}

export const MAIN_SITE_URL = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL, DEFAULT_MAIN_SITE_URL);
export const CHATBOT_SITE_URL = normalizeSiteUrl(
  process.env.NEXT_PUBLIC_CHATBOT_SITE_URL,
  DEFAULT_CHATBOT_SITE_URL,
);
export const MAIN_SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME?.trim() || DEFAULT_MAIN_SITE_NAME;
export const CHATBOT_SITE_NAME =
  process.env.NEXT_PUBLIC_CHATBOT_SITE_NAME?.trim() || DEFAULT_CHATBOT_SITE_NAME;
export const CHATBOT_SITE_HOST = getHostFromUrl(CHATBOT_SITE_URL);
export const MAIN_SITE_HOST = getHostFromUrl(MAIN_SITE_URL);
export const CHATBOT_SUBDOMAIN_PATH = CHATBOT_INTERNAL_PATH;

function normalizeHost(host: string | null | undefined) {
  if (!host) return "";
  return host.split(":")[0].toLowerCase();
}

export function getSiteVariantFromHost(host: string | null | undefined): SiteVariant {
  return normalizeHost(host) === CHATBOT_SITE_HOST ? "chatbot" : "main";
}

export function getSiteConfig(variant: SiteVariant): SiteConfig {
  if (variant === "chatbot") {
    return {
      variant,
      siteUrl: CHATBOT_SITE_URL,
      siteHost: CHATBOT_SITE_HOST,
      siteName: CHATBOT_SITE_NAME,
      canonicalPathPrefix: "",
    };
  }

  return {
    variant,
    siteUrl: MAIN_SITE_URL,
    siteHost: MAIN_SITE_HOST,
    siteName: MAIN_SITE_NAME,
    canonicalPathPrefix: "",
  };
}

export function getRequestSiteConfig(headers: HeaderStore) {
  const requestedVariant = headers.get("x-brit-site-variant");
  const variant = requestedVariant === "chatbot" ? "chatbot" : "main";
  return getSiteConfig(variant);
}

export function getRequestPathname(headers: HeaderStore) {
  return headers.get("x-brit-request-path") || "/";
}

export function isStandaloneChatbotRequest(headers: HeaderStore) {
  const variant = headers.get("x-brit-site-variant");
  const pathname = getRequestPathname(headers);
  return variant === "chatbot" || pathname === CHATBOT_SUBDOMAIN_PATH;
}
