export const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";
export const SPLITFORMS_ACCESS_KEY =
  process.env.NEXT_PUBLIC_SPLITFORMS_ACCESS_KEY?.trim() ||
  "0ffd7166ac97420ba6ffc7727d189d07";

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

// SplitForms only stores the three standard fields — name, email, message —
// for this form; every other field is silently dropped. So we fold all the
// extra fields into a readable message body and send SplitForms exactly the
// three fields it keeps.
const FIELD_LABELS: Record<string, string> = {
  company: "Company",
  phone: "Phone",
  company_url: "Company Website",
  business_website: "Website",
  website: "Website",
  solution_type: "Solution Type",
  service_type: "Service Type",
  agents: "Agent Requirements",
  call_volume: "Call Volume",
  schedule: "Operating Schedule",
  source_page: "Source Page",
  cta_location: "CTA Location",
  lead_offer: "Lead Offer",
  submitted_at: "Submitted At",
};

// Internal/standard fields that must never be echoed into the message body.
const MESSAGE_SKIP = new Set([
  "name",
  "email",
  "message",
  "subject",
  "access_key",
  "redirect",
  "security_answer",
]);

export function buildLeadMessage(formData: FormData) {
  const details: string[] = [];
  let comments = "";

  for (const [key, value] of formData.entries()) {
    if (typeof value !== "string") continue;
    const trimmed = value.trim();
    if (!trimmed) continue;

    if (key === "message") {
      comments = trimmed;
      continue;
    }
    if (MESSAGE_SKIP.has(key)) continue;

    const label = FIELD_LABELS[key] ?? key;
    details.push(`${label}: ${trimmed}`);
  }

  const sections: string[] = [];
  if (details.length) sections.push(details.join("\n"));
  if (comments) sections.push(`Comments:\n${comments}`);

  return sections.join("\n\n");
}

function hasNamespacedContactFields(formData: FormData) {
  return formData.has("full_name") || formData.has("work_email");
}

function buildNamespacedLeadPayload(formData: FormData) {
  const payload = new FormData();
  payload.set("access_key", SPLITFORMS_ACCESS_KEY);

  for (const [key, value] of formData.entries()) {
    if (key === "access_key" || key === "redirect" || key === "security_answer") {
      continue;
    }
    if (typeof value !== "string") continue;

    const trimmed = value.trim();
    if (!trimmed) continue;
    payload.set(key, trimmed);
  }

  return payload;
}

export async function submitLeadForm(formData: FormData) {
  if (hasNamespacedContactFields(formData)) {
    const response = await fetch(getLeadFormEndpoint(), {
      method: "POST",
      headers: { Accept: "application/json" },
      body: buildNamespacedLeadPayload(formData),
    });

    const contentType = response.headers.get("content-type") ?? "";
    const data = contentType.includes("application/json")
      ? await response.json()
      : { success: response.ok, message: await response.text() };

    return { data, response };
  }

  // Collapse to SplitForms' supported trio (name, email, message). Every other
  // field is folded into the message so nothing is lost and the lead arrives
  // clean and readable. Sent as native browser multipart, directly to
  // SplitForms — the combination confirmed to actually store.
  const payload = new FormData();
  payload.set("access_key", SPLITFORMS_ACCESS_KEY);
  payload.set("name", (formData.get("name") ?? "").toString().trim());
  payload.set("email", (formData.get("email") ?? "").toString().trim());
  payload.set("message", buildLeadMessage(formData));

  const response = await fetch(getLeadFormEndpoint(), {
    method: "POST",
    headers: { Accept: "application/json" },
    body: payload,
  });

  const contentType = response.headers.get("content-type") ?? "";
  const data = contentType.includes("application/json")
    ? await response.json()
    : { success: response.ok, message: await response.text() };

  return { data, response };
}
