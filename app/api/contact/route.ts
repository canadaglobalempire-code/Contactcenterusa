const SPLITFORMS_ENDPOINT = "https://splitforms.com/api/submit";
const SPLITFORMS_ACCESS_KEY = "abaffe957645499b9c3bf360f0bc7661";

function responseHeaders(request: Request) {
  const origin = request.headers.get("origin");
  const headers = new Headers({ Vary: "Origin" });

  if (
    origin === "https://contactcenterusa.com" ||
    origin === "https://www.contactcenterusa.com"
  ) {
    headers.set("Access-Control-Allow-Origin", origin);
  }

  return headers;
}

export async function POST(request: Request) {
  const formData = await request.formData();
  formData.set("access_key", SPLITFORMS_ACCESS_KEY);
  const headers = responseHeaders(request);

  try {
    const response = await fetch(SPLITFORMS_ENDPOINT, {
      method: "POST",
      headers: { Accept: "application/json" },
      body: formData,
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
  headers.set("Access-Control-Allow-Methods", "POST, OPTIONS");
  headers.set("Access-Control-Allow-Headers", "Accept");

  return new Response(null, { status: 204, headers });
}
