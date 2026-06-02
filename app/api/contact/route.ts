const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";
const SPLITFORMS_ACCESS_KEY =
  process.env.SPLITFORMS_ACCESS_KEY ?? "0ffd7166ac97420ba6ffc7727d189d07";

const DEFAULT_ALLOWED_ORIGINS = [
  "https://contactcenterusa.com",
  "https://www.contactcenterusa.com",
];

function normalizeOrigin(origin: string) {
  const trimmed = origin.trim().replace(/\/+$/, "");

  try {
    return new URL(trimmed).origin;
  } catch {
    return trimmed;
  }
}

function getConfiguredAllowedOrigins() {
  const envOrigins = (process.env.CONTACT_FORM_ALLOWED_ORIGINS ?? "")
    .split(",")
    .map((origin) => origin.trim())
    .filter(Boolean);

  return new Set([...DEFAULT_ALLOWED_ORIGINS, ...envOrigins].map(normalizeOrigin));
}

function isAllowedOrigin(request: Request, origin: string | null) {
  if (!origin) return true;

  const normalizedOrigin = normalizeOrigin(origin);

  try {
    if (normalizedOrigin === new URL(request.url).origin) {
      return true;
    }
  } catch {
    // Fall back to the explicit allowlist below.
  }

  return getConfiguredAllowedOrigins().has(normalizedOrigin);
}

function responseHeaders(request: Request) {
  const origin = request.headers.get("origin");
  const headers = new Headers({ Vary: "Origin" });

  if (origin && isAllowedOrigin(request, origin)) {
    headers.set("Access-Control-Allow-Origin", origin);
  }

  return headers;
}

function jsonValueToString(value: unknown) {
  if (typeof value === "string") return value;
  if (typeof value === "number" || typeof value === "boolean") return String(value);
  return JSON.stringify(value);
}

async function readSubmissionFormData(request: Request) {
  const contentType = request.headers.get("content-type") ?? "";

  if (contentType.includes("application/json")) {
    const payload = await request.json();
    const formData = new FormData();

    if (!payload || typeof payload !== "object" || Array.isArray(payload)) {
      return formData;
    }

    for (const [key, value] of Object.entries(payload)) {
      if (value === undefined || value === null) continue;
      const formValue = Array.isArray(value)
        ? value.map(jsonValueToString).join(", ")
        : jsonValueToString(value);

      formData.set(key, formValue);
    }

    return formData;
  }

  return request.formData();
}

export async function POST(request: Request) {
  const headers = responseHeaders(request);
  const origin = request.headers.get("origin");

  if (!isAllowedOrigin(request, origin)) {
    return Response.json(
      { success: false, message: "This website is not allowed to submit this form." },
      { status: 403, headers },
    );
  }

  let formData: FormData;

  try {
    formData = await readSubmissionFormData(request);
  } catch (error) {
    console.error("Invalid contact form submission", error);
    return Response.json(
      { success: false, message: "Invalid form submission." },
      { status: 400, headers },
    );
  }

  formData.set("access_key", SPLITFORMS_ACCESS_KEY);

  // Forward as application/x-www-form-urlencoded, NOT multipart. SplitForms'
  // multipart parser drops fields after the first few (it collapsed the rest
  // into one raw blob under "phone"), so we flatten the form to urlencoded,
  // which it parses reliably. This form has no file uploads - every value is a
  // string.
  const params = new URLSearchParams();
  for (const [key, value] of formData.entries()) {
    if (typeof value === "string") params.append(key, value);
  }

  try {
    const response = await fetch(SPLITFORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Accept: "application/json",
      },
      body: params,
    });

    const contentType = response.headers.get("content-type") ?? "";
    const payload = contentType.includes("application/json")
      ? await response.json()
      : { success: response.ok, message: await response.text() };

    return Response.json(payload, { status: response.status, headers });
  } catch (error) {
    console.error("SplitForms submission failed", error);
    return Response.json(
      { success: false, message: "Unable to submit the form right now." },
      { status: 502, headers },
    );
  }
}

export function OPTIONS(request: Request) {
  const headers = responseHeaders(request);
  const origin = request.headers.get("origin");
  const requestedHeaders = request.headers.get("access-control-request-headers");

  if (!isAllowedOrigin(request, origin)) {
    return new Response(null, { status: 403, headers });
  }

  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", requestedHeaders || "Accept, Content-Type");
  headers.set("Access-Control-Max-Age", "86400");

  return new Response(null, { status: 204, headers });
}
