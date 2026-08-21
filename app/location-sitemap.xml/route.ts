import { entriesFor, renderUrlSet, XML_HEADERS } from "@/lib/sitemap-data";

export const dynamic = "force-static";

export function GET() {
  return new Response(renderUrlSet(entriesFor("location-sitemap.xml")), {
    headers: XML_HEADERS,
  });
}
