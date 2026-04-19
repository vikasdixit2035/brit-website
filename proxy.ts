import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import {
  CHATBOT_SUBDOMAIN_PATH,
  getSiteVariantFromHost,
} from "@/lib/siteConfig";

const PUBLIC_FILE = /\.(.*)$/;
const BYPASS_PREFIXES = ["/_next", "/api"];
const BYPASS_PATHS = ["/favicon.ico", "/robots.txt", "/sitemap.xml"];

function shouldBypass(pathname: string) {
  if (PUBLIC_FILE.test(pathname)) return true;
  if (BYPASS_PATHS.includes(pathname)) return true;
  return BYPASS_PREFIXES.some((prefix) => pathname.startsWith(prefix));
}

export function proxy(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const variant = getSiteVariantFromHost(request.headers.get("host"));
  const requestHeaders = new Headers(request.headers);

  requestHeaders.set("x-brit-site-variant", variant);
  requestHeaders.set("x-brit-request-path", pathname);

  if (variant === "chatbot" && !shouldBypass(pathname) && pathname !== CHATBOT_SUBDOMAIN_PATH) {
    const rewriteUrl = request.nextUrl.clone();
    rewriteUrl.pathname = CHATBOT_SUBDOMAIN_PATH;

    return NextResponse.rewrite(rewriteUrl, {
      request: {
        headers: requestHeaders,
      },
    });
  }

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}

export const config = {
  matcher: ["/((?!_next/static|_next/image).*)"],
};

