import { readdirSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import type { MetadataRoute } from "next";

const baseUrl = "https://contactcenterusa.com";

const priorityPages = new Set([
  "/",
  "/contact",
  "/solutions/customer-service-outsourcing",
  "/solutions/inbound-call-center-services",
  "/solutions/outbound-call-center-services",
  "/solutions/lead-generation-appointment-setting",
  "/solutions/multilingual-call-center-services",
  "/solutions/technical-support-outsourcing",
  "/industries/healthcare-call-center-services",
  "/industries/insurance-call-center-outsourcing",
  "/services/telemarketing-services",
  "/services/virtual-remote-support",
  "/blog/top-10-multilingual-call-center-companies-usa",
  "/blog/top-15-healthcare-bpo-companies-usa",
  "/blog/top-10-appointment-setting-companies-usa",
  "/blog/top-15-insurance-bpo-companies-usa",
  "/blog/top-10-technical-support-outsourcing-companies-usa",
  "/blog/top-10-customer-service-outsourcing-companies-usa",
  "/blog/top-10-lead-generation-companies-usa",
  "/blog/top-10-virtual-receptionist-companies-usa",
  "/blog/teleperformance-alternatives",
  "/blog/top-10-telemarketing-companies-usa",
  "/blog/call-center-outsourcing-cost-per-hour-2026",
  "/blog/in-house-vs-outsourced-call-center",
]);

type PageRoute = {
  route: string;
  pagePath: string;
};

function routeFromPagePath(appDir: string, pagePath: string) {
  const relativePath = relative(appDir, pagePath);
  const routeDir = dirname(relativePath);

  if (routeDir === ".") return "/";

  return `/${routeDir.split(sep).join("/")}`;
}

function collectPageRoutes(dir: string, appDir = dir): PageRoute[] {
  const entries = readdirSync(dir, { withFileTypes: true });
  const routes: PageRoute[] = [];

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      routes.push(...collectPageRoutes(fullPath, appDir));
      continue;
    }

    if (entry.name !== "page.tsx") continue;

    const route = routeFromPagePath(appDir, fullPath);
    if (route.includes("[") || route.includes("]")) continue;

    routes.push({ route, pagePath: fullPath });
  }

  return routes;
}

function getPriority(route: string) {
  if (priorityPages.has(route)) return route === "/" ? 1 : 0.95;
  if (["/services", "/solutions", "/industries", "/blog"].includes(route)) return 0.9;
  if (route.startsWith("/services/") || route.startsWith("/solutions/")) return 0.85;
  if (route.startsWith("/industries/")) return 0.8;
  if (route.startsWith("/call-center-services-")) return 0.75;
  if (route.startsWith("/blog/")) return 0.7;
  if (["/about", "/why-us", "/case-studies", "/faq"].includes(route)) return 0.55;

  return 0.5;
}

function getChangeFrequency(
  route: string,
): MetadataRoute.Sitemap[number]["changeFrequency"] {
  if (route === "/" || priorityPages.has(route)) return "weekly";
  if (route === "/blog" || route.startsWith("/blog/")) return "weekly";
  if (
    route.startsWith("/services") ||
    route.startsWith("/solutions") ||
    route.startsWith("/industries")
  ) {
    return "monthly";
  }

  return "monthly";
}

export default function sitemap(): MetadataRoute.Sitemap {
  const appDir = join(process.cwd(), "app");

  return collectPageRoutes(appDir)
    .sort((a, b) => a.route.localeCompare(b.route))
    .map(({ route, pagePath }) => ({
      url: route === "/" ? baseUrl : `${baseUrl}${route}`,
      lastModified: statSync(pagePath).mtime,
      changeFrequency: getChangeFrequency(route),
      priority: getPriority(route),
    }));
}
