"use client";

import { usePathname } from "next/navigation";
import { generateBreadcrumbSchema } from "@/lib/schema";

/**
 * The single source of BreadcrumbList markup for the whole site.
 *
 * Mounted once in the root layout and derived from the pathname, so coverage
 * cannot drift: previously breadcrumbs were emitted from four page templates,
 * two blog schema components, a section layout and fourteen individual pages,
 * which left 56 pages with no BreadcrumbList at all.
 *
 * Nothing else may emit BreadcrumbList. `Breadcrumb.tsx` still renders the
 * visible nav, but its schema block was removed when this landed - two
 * BreadcrumbList nodes on one page is a duplicate-markup warning in Search
 * Console.
 *
 * This is a client component only because it needs `usePathname`. App Router
 * still renders it during SSR, so the JSON-LD is present in the static HTML
 * that crawlers receive.
 */

const BASE = "https://contactcenterusa.com";

// Segments whose casing the title-caser would otherwise get wrong.
const CASING: Record<string, string> = {
  usa: "USA",
  us: "US",
  bpo: "BPO",
  ai: "AI",
  hipaa: "HIPAA",
  saas: "SaaS",
  hvac: "HVAC",
  sdr: "SDR",
  rfp: "RFP",
  kpi: "KPI",
  kpis: "KPIs",
  cx: "CX",
  ivr: "IVR",
  rcm: "RCM",
  hoa: "HOA",
  acd: "ACD",
  pci: "PCI",
  crm: "CRM",
  b2b: "B2B",
  b2c: "B2C",
  faq: "FAQ",
  vs: "vs",
  and: "and",
  for: "for",
  of: "of",
  the: "the",
  in: "in",
  to: "to",
  a: "a",
};

// Section roots that read better with a curated label.
const SECTION_LABELS: Record<string, string> = {
  blog: "Blog",
  services: "Services",
  solutions: "Solutions",
  industries: "Industries",
  locations: "Locations",
  "case-studies": "Case Studies",
  about: "About",
  answers: "Answers",
  faq: "FAQ",
  contact: "Contact",
  "why-us": "Why Us",
};

function labelFor(segment: string, isFirst: boolean): string {
  if (isFirst && SECTION_LABELS[segment]) return SECTION_LABELS[segment];

  return segment
    .split("-")
    .map((word, i) => {
      const lower = word.toLowerCase();
      const mapped = CASING[lower];
      if (mapped) {
        // Never open a label with a lowercased stop word.
        if (i === 0 && mapped === lower) {
          return lower.charAt(0).toUpperCase() + lower.slice(1);
        }
        return mapped;
      }
      // Keep year-like and numeric segments as-is.
      if (/^\d+$/.test(word)) return word;
      return word.charAt(0).toUpperCase() + word.slice(1);
    })
    .join(" ");
}

export function AutoBreadcrumbSchema() {
  const pathname = usePathname();

  // The homepage is the breadcrumb root; a single-item trail carries no
  // information and Google ignores it.
  if (!pathname || pathname === "/") return null;

  const segments = pathname.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  const items = [{ name: "Home", url: `${BASE}/` }];
  let path = "";
  segments.forEach((segment, i) => {
    path += `/${segment}`;
    items.push({ name: labelFor(segment, i === 0), url: `${BASE}${path}` });
  });

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(generateBreadcrumbSchema(items)).replace(
          /</g,
          "\\u003c"
        ),
      }}
    />
  );
}
