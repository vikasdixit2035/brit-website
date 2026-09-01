"use client";

type DataLayerValue = string | number | boolean | null | undefined;

type DataLayerPayload = Record<string, DataLayerValue>;

type LeadEventInput = {
  formName: string;
  source: string;
  course?: string | null;
  resource?: string | null;
};

type CourseInvestmentInput = {
  courseTitle: string;
  courseSlug: string;
  price?: number | string | null;
  currency?: string | null;
};

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    fbq?: (
      action: "track" | "trackCustom",
      eventName: string,
      payload?: Record<string, DataLayerValue>,
      options?: { eventID?: string },
    ) => void;
  }
}

function createEventId(prefix: string) {
  const id =
    typeof crypto !== "undefined" && "randomUUID" in crypto
      ? crypto.randomUUID()
      : `${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;

  return `${prefix}-${id}`;
}

function pagePath() {
  if (typeof window === "undefined") return undefined;
  return `${window.location.pathname}${window.location.search}`;
}

function pushDataLayer(event: string, payload: DataLayerPayload = {}) {
  if (typeof window === "undefined") return;

  const eventId = createEventId(event);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    event_id: eventId,
    page_path: pagePath(),
    ...payload,
  });

  return eventId;
}

export function trackEvent(event: string, payload: DataLayerPayload = {}) {
  return pushDataLayer(event, payload);
}

function trackMetaPixel(
  eventName: string,
  payload: DataLayerPayload = {},
  action: "track" | "trackCustom" = "track",
) {
  if (typeof window === "undefined" || typeof window.fbq !== "function") return;

  const eventId = createEventId(eventName);
  window.fbq(
    action,
    eventName,
    {
      page_path: pagePath(),
      ...payload,
    },
    { eventID: eventId },
  );
}

export function trackLead({ formName, source, course, resource }: LeadEventInput) {
  const payload = {
    form_name: formName,
    source,
    course,
    resource,
  };

  pushDataLayer("meta_lead", payload);
  pushDataLayer("lead_form_submit", payload);
  if (formName.includes("brochure")) {
    pushDataLayer("curriculum_download", payload);
  }
  if (formName.includes("application") || source.toLowerCase().includes("application")) {
    pushDataLayer("application_submit", payload);
  }
  trackMetaPixel("Lead", payload);
}

export function trackSubmitRequest({ formName, source, course }: LeadEventInput) {
  const payload = {
    form_name: formName,
    source,
    course,
  };

  pushDataLayer("meta_submit_request", payload);
  pushDataLayer("application_submit", payload);
  trackMetaPixel("SubmitApplication", payload);
}

export function trackCourseInvestmentClick({
  courseTitle,
  courseSlug,
  price,
  currency,
}: CourseInvestmentInput) {
  const payload = {
    course_title: courseTitle,
    course_slug: courseSlug,
    price,
    currency,
  };

  pushDataLayer("meta_course_investment_click", payload);
  trackMetaPixel("CourseInvestmentClick", payload, "trackCustom");
}
