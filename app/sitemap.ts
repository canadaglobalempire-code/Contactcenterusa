import { readdirSync, statSync } from "node:fs";
import { dirname, join, relative, sep } from "node:path";
import type { MetadataRoute } from "next";
import {
  priorityBuyerGuideLinks,
  priorityIndustryLinks,
  priorityLocationLinks,
  priorityServiceLinks,
} from "@/lib/ai-context";

const baseUrl = "https://contactcenterusa.com";

const priorityPages = new Set([
  "/",
  "/answers",
  "/contact",
  "/locations",
  ...priorityServiceLinks.map((item) => item.href),
  ...priorityIndustryLinks.map((item) => item.href),
  ...priorityLocationLinks.map((item) => item.href),
  ...priorityBuyerGuideLinks.map((item) => item.href),
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
    if (route === "/thank-you") continue;

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
  if (["/about", "/why-us", "/case-studies", "/faq"].includes(route)) return 0.65;
  if (route.startsWith("/case-studies/")) return 0.7;

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

function getImages(route: string) {
  if (route === "/") return [`${baseUrl}/images/hero-agent-1.jpg`];
  if (route === "/answers") return [`${baseUrl}/images/cc-agent-headset.jpg`];
  if (route === "/locations") return [`${baseUrl}/images/america.jpg`];
  if (route === "/services") return [`${baseUrl}/images/cc-agent-monitor.jpg`];
  if (route === "/solutions") return [`${baseUrl}/images/hd-office-team.jpg`];
  if (route === "/industries") return [`${baseUrl}/images/new-flag.jpg`];
  if (route === "/blog") return [`${baseUrl}/images/cc-team-meeting.jpg`];
  if (route.startsWith("/blog/")) return [`${baseUrl}/images/cc-agent-headset.jpg`];
  if (route.startsWith("/call-center-services-")) return [`${baseUrl}/images/america.jpg`];
  if (route.startsWith("/services/") || route.startsWith("/solutions/")) {
    return [`${baseUrl}/images/cc-agent-monitor.jpg`];
  }
  if (route.startsWith("/industries/")) return [`${baseUrl}/images/cc-team-desk.jpg`];

  return undefined;
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
      images: getImages(route),
    }));
}
