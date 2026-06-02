export const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";
export const SPLITFORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_SPLITFORMS_ACCESS_KEY?.trim() ||
  "abaffe957645499b9c3bf360f0bc7661";

export const LEAD_FORM_ENDPOINT =
  process.env.NEXT_PUBLIC_LEAD_FORM_ENDPOINT?.trim() || SPLITFORMS_ENDPOINT;

export function getLeadFormEndpoint() {
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

export async function submitLeadForm(formData: FormData) {
  // Send ALL fields as native browser multipart, directly to SplitForms — the
  // exact method that stored leads cleanly before (every field in its own
  // column). Critically:
  //   - DO NOT set Content-Type: the browser must add its own multipart
  //     boundary. Hand-built multipart (curl/undici) gets mangled by SplitForms.
  //   - DO NOT urlencode or send JSON: SplitForms returns success but drops it.
  //   - DO NOT route through a Node proxy: its re-encoding corrupts the fields.
  formData.set("access_key", SPLITFORMS_ACCESS_KEY);

  const response = await fetch(getLeadFormEndpoint(), {
    method: "POST",
    headers: { Accept: "application/json" },
    body: formData,
  });

  const contentType = response.headers.get("content-type") ?? "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : { success: response.ok, message: await response.text() };

  return { data, response };
}
