export const LEAD_FORM_ENDPOINT = "/api/contact";

export function getLeadFormEndpoint() {
  if (
    typeof window !== "undefined" &&
    window.location.hostname === "www.contactcenterusa.com"
  ) {
    return "https://contactcenterusa.com/api/contact";
  }

  return LEAD_FORM_ENDPOINT;
}

type LeadEventName = "cta_click" | "lead_form_submit";

type LeadEventParams = {
  cta_location?: string;
  destination?: string;
  form_name?: string;
  lead_offer?: string;
  source_page?: string;
};

type LeadAttributionDefaults = {
  ctaLocation?: string;
  leadOffer?: string;
  sourcePage?: string;
};

type WindowWithGtag = Window & {
  gtag?: (command: "event", eventName: LeadEventName, params: LeadEventParams) => void;
};

export function buildContactHref(
  ctaLocation: string,
  leadOffer: string,
  sourcePage?: string,
) {
  const params = new URLSearchParams({
    cta_location: ctaLocation,
    lead_offer: leadOffer,
  });
  if (sourcePage) {
    params.set("source_page", sourcePage);
  }

  return `/contact?${params.toString()}`;
}

export function trackLeadEvent(eventName: LeadEventName, params: LeadEventParams) {
  if (typeof window === "undefined") return;

  const sourcePage = params.source_page ?? `${window.location.pathname}${window.location.search}`;
  (window as WindowWithGtag).gtag?.("event", eventName, {
    ...params,
    source_page: sourcePage,
  });
}

export function appendLeadAttribution(
  formData: FormData,
  defaults: LeadAttributionDefaults = {},
) {
  if (typeof window === "undefined") return;

  const searchParams = new URLSearchParams(window.location.search);
  const sourcePage =
    searchParams.get("source_page") ??
    defaults.sourcePage ??
    `${window.location.pathname}${window.location.search}`;
  const ctaLocation =
    searchParams.get("cta_location") ?? defaults.ctaLocation ?? "direct_form";
  const leadOffer =
    searchParams.get("lead_offer") ?? defaults.leadOffer ?? "General call center quote";

  formData.set("source_page", sourcePage);
  formData.set("cta_location", ctaLocation);
  formData.set("lead_offer", leadOffer);
  formData.set("submitted_at", new Date().toISOString());
}
