import { existsSync, readdirSync, readFileSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";

/**
 * Sitemap data layer — Yoast-style segmented sitemaps.
 *
 * Three deliberate differences from the sitemap this replaced:
 *
 * 1. NO <changefreq> or <priority>. Google has stated plainly that it ignores
 *    both. Yoast dropped them years ago. They were pure payload.
 *
 * 2. <lastmod> is a real content date or it is omitted. The previous sitemap
 *    used the source file's mtime, so a lint pass or a dependency bump
 *    restamped all 219 URLs as modified today. Google's guidance is that
 *    lastmod must reflect a meaningful content change; a feed that always
 *    says "everything changed today" teaches Google to ignore the field
 *    entirely. Omitting it is honest and costs nothing — lastmod is optional.
 *
 * 3. Images are only listed when the page actually renders them. The previous
 *    sitemap mapped whole sections to one stock image, so every blog post
 *    claimed the same headset photo. An image sitemap entry is a claim that
 *    the image is on that page; a wrong claim is worse than no entry.
 */

export const BASE_URL = "https://contactcenterusa.com";

export type SitemapEntry = {
  loc: string;
  lastmod?: string;
  images: string[];
};

export type SitemapSection = {
  /** File name served under the site root, e.g. "post-sitemap.xml". */
  file: string;
  label: string;
  match: (route: string) => boolean;
};

/**
 * Order matters: the first matching section wins, so specific collections are
 * listed before the catch-all "page" section.
 */
export const SECTIONS: SitemapSection[] = [
  { file: "post-sitemap.xml", label: "Blog posts", match: (r) => r.startsWith("/blog/") },
  { file: "service-sitemap.xml", label: "Services", match: (r) => r.startsWith("/services/") },
  { file: "solution-sitemap.xml", label: "Solutions", match: (r) => r.startsWith("/solutions/") },
  { file: "industry-sitemap.xml", label: "Industries", match: (r) => r.startsWith("/industries/") },
  {
    file: "location-sitemap.xml",
    label: "Locations",
    match: (r) => r.startsWith("/locations/") || r.startsWith("/call-center-services-"),
  },
  { file: "case-study-sitemap.xml", label: "Case studies", match: (r) => r.startsWith("/case-studies/") },
  { file: "page-sitemap.xml", label: "Pages", match: () => true },
];

/* ------------------------------------------------------------------ */
/* Route discovery                                                      */
/* ------------------------------------------------------------------ */

type PageRoute = { route: string; dir: string };

function collectPageRoutes(dir: string, appDir = dir): PageRoute[] {
  const out: PageRoute[] = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) {
      out.push(...collectPageRoutes(full, appDir));
      continue;
    }
    if (entry.name !== "page.tsx") continue;

    const rel = relative(appDir, full);
    const routeDir = dirname(rel);
    const route = routeDir === "." ? "/" : `/${routeDir.split(sep).join("/")}`;

    // Dynamic segments cannot be enumerated here, and the thank-you page is
    // a post-conversion destination that should never be a search entry point.
    if (route.includes("[") || route.includes("]")) continue;
    if (route === "/thank-you") continue;

    out.push({ route, dir: dirname(full) });
  }
  return out;
}

/* ------------------------------------------------------------------ */
/* Content signals                                                      */
/* ------------------------------------------------------------------ */

const DATE_RE = /\b(?:dateModified|datePublished)\s*:\s*"(\d{4}-\d{2}-\d{2})"/g;
// Matches any /images/... asset the route's own source references, whether it
// is written as src="..." on an <Image>, or handed to a shared template as a
// prop or data field. Template-driven pages (industries, locations) only ever
// name their image the second way, so an src-only match missed 72 of them.
const IMAGE_RE = /"(\/images\/[^"]+\.(?:jpg|jpeg|png|webp))"/g;
const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

/** Every .tsx in the route's own directory, concatenated. */
function readRouteSource(dir: string): string {
  let blob = "";
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    if (!entry.isFile() || !entry.name.endsWith(".tsx")) continue;
    blob += readFileSync(join(dir, entry.name), "utf8");
  }
  return blob;
}

/**
 * The most recent declared content date for a route, or undefined.
 * Deliberately never falls back to file mtime — see the note at the top.
 */
function contentDate(blob: string): string | undefined {
  const found: string[] = [];
  for (const m of blob.matchAll(DATE_RE)) {
    if (ISO_DATE.test(m[1])) found.push(m[1]);
  }
  if (found.length === 0) return undefined;
  return found.sort().at(-1);
}

/**
 * Images the page genuinely renders, de-duplicated and in document order.
 *
 * Anything missing from /public is dropped rather than published. Listing a
 * 404 in an image sitemap is a wasted crawl and a quality signal against the
 * page, and the existence check doubles as a build-time guard: it is how three
 * industry pages were found to be rendering images that 404 in production.
 */
function pageImages(blob: string): string[] {
  const seen = new Set<string>();
  for (const m of blob.matchAll(IMAGE_RE)) {
    if (existsSync(join(process.cwd(), "public", m[1]))) seen.add(m[1]);
  }
  // A handful of entries keeps the sitemap useful without turning it into an
  // asset dump; Google only needs to discover the images, not every variant.
  return [...seen].slice(0, 6).map((src) => `${BASE_URL}${src}`);
}

/* ------------------------------------------------------------------ */
/* Public API                                                           */
/* ------------------------------------------------------------------ */

let cache: Map<string, SitemapEntry[]> | null = null;

function buildAll(): Map<string, SitemapEntry[]> {
  if (cache) return cache;

  const appDir = join(process.cwd(), "app");
  const grouped = new Map<string, SitemapEntry[]>();
  for (const section of SECTIONS) grouped.set(section.file, []);

  for (const { route, dir } of collectPageRoutes(appDir)) {
    const blob = readRouteSource(dir);
    const entry: SitemapEntry = {
      loc: route === "/" ? `${BASE_URL}/` : `${BASE_URL}${route}`,
      lastmod: contentDate(blob),
      images: pageImages(blob),
    };
    const section = SECTIONS.find((s) => s.match(route))!;
    grouped.get(section.file)!.push(entry);
  }

  for (const entries of grouped.values()) {
    entries.sort((a, b) => a.loc.localeCompare(b.loc));
  }

  cache = grouped;
  return grouped;
}

export function entriesFor(file: string): SitemapEntry[] {
  return buildAll().get(file) ?? [];
}

/** Sections that actually contain URLs, with the newest lastmod in each. */
export function sectionIndex(): { loc: string; lastmod?: string; count: number }[] {
  const all = buildAll();
  return SECTIONS.map((section) => {
    const entries = all.get(section.file) ?? [];
    const dates = entries.map((e) => e.lastmod).filter(Boolean) as string[];
    return {
      loc: `${BASE_URL}/${section.file}`,
      lastmod: dates.sort().at(-1),
      count: entries.length,
    };
  }).filter((s) => s.count > 0);
}

/* ------------------------------------------------------------------ */
/* Serialization                                                        */
/* ------------------------------------------------------------------ */

function xmlEscape(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

export function renderUrlSet(entries: SitemapEntry[]): string {
  const urls = entries
    .map((entry) => {
      const parts = [`    <loc>${xmlEscape(entry.loc)}</loc>`];
      if (entry.lastmod) parts.push(`    <lastmod>${entry.lastmod}</lastmod>`);
      for (const image of entry.images) {
        parts.push(`    <image:image>\n      <image:loc>${xmlEscape(image)}</image:loc>\n    </image:image>`);
      }
      return `  <url>\n${parts.join("\n")}\n  </url>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls}
</urlset>
`;
}

export function renderSitemapIndex(): string {
  const items = sectionIndex()
    .map((section) => {
      const parts = [`    <loc>${xmlEscape(section.loc)}</loc>`];
      if (section.lastmod) parts.push(`    <lastmod>${section.lastmod}</lastmod>`);
      return `  <sitemap>\n${parts.join("\n")}\n  </sitemap>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${items}
</sitemapindex>
`;
}

export const XML_HEADERS = {
  "Content-Type": "application/xml; charset=utf-8",
  // The sitemap is rebuilt on deploy; let the edge hold it briefly but allow
  // a crawler-triggered revalidation the same day.
  "Cache-Control": "public, max-age=0, s-maxage=3600, must-revalidate",
} as const;
