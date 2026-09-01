"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { trackEvent } from "@/lib/analytics";

function formName(form: HTMLFormElement) {
  return form.getAttribute("name") || form.getAttribute("aria-label") || `${window.location.pathname}_form`;
}

export default function SiteMeasurement() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/courses/") && pathname.split("/").filter(Boolean).length === 2) {
      trackEvent("course_view", { course_slug: pathname.split("/").pop() });
    }
    if (pathname === "/pricing") trackEvent("pricing_view");
    if (pathname === "/apply") trackEvent("application_start", { source: "apply_page" });
  }, [pathname]);

  useEffect(() => {
    const startedForms = new WeakSet<HTMLFormElement>();

    const onFocus = (event: FocusEvent) => {
      const field = event.target instanceof Element ? event.target : null;
      const form = field?.closest("form");
      if (!(form instanceof HTMLFormElement) || startedForms.has(form)) return;
      startedForms.add(form);
      trackEvent("lead_form_start", { form_name: formName(form) });
    };

    const onClick = (event: MouseEvent) => {
      const target = event.target instanceof Element ? event.target.closest("a,button") : null;
      if (!target) return;
      const href = target instanceof HTMLAnchorElement ? target.getAttribute("href") || "" : "";
      const label = (target.textContent || target.getAttribute("aria-label") || "").trim().toLowerCase();

      if (href.startsWith("tel:")) trackEvent("phone_click", { link_url: href });
      if (href.includes("wa.me") || label.includes("whatsapp")) trackEvent("whatsapp_click", { link_url: href });
      if (href === "/apply") trackEvent("application_start", { source: pathname });
      if (href === "/contact" || href === "#consultation" || label.includes("consultation") || label.includes("counselling")) {
        trackEvent("consultation_click", { link_url: href, link_text: label });
      }
      if (href === "/pay" || label.includes("pay now") || label.includes("pay fees")) {
        trackEvent("payment_start", { link_url: href, link_text: label });
      }
    };

    document.addEventListener("focusin", onFocus);
    document.addEventListener("click", onClick);
    return () => {
      document.removeEventListener("focusin", onFocus);
      document.removeEventListener("click", onClick);
    };
  }, [pathname]);

  return null;
}
