import { renderSitemapIndex, XML_HEADERS } from "@/lib/sitemap-data";

// Kept at /sitemap.xml rather than Yoast's /sitemap_index.xml because this URL
// is already submitted in Search Console and referenced from robots.txt.
// Google accepts a sitemap index at any filename.
export const dynamic = "force-static";

export function GET() {
  return new Response(renderSitemapIndex(), { headers: XML_HEADERS });
}
