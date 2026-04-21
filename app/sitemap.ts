import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://contactcenterusa.com";

  const routes = [
    "",
    "/about",
    "/about/company-history",
    "/about/industries",
    "/about/why-work-with-us",
    "/blog",
    "/blog/american-call-centers",
    "/blog/benefits-us-based-call-center",
    "/blog/call-center-kpis",
    "/blog/call-center-outsourcing-cost",
    "/blog/customer-service-best-practices",
    "/blog/de-escalation-techniques-customer-service",
    "/blog/how-to-choose-call-center-partner",
    "/blog/inbound-vs-outbound-call-centers",
    "/blog/inside-sales-outsourcing-guide",
    "/blog/medical-call-center-services",
    "/blog/nearshore-call-center-outsourcing",
    "/blog/onshore-vs-offshore-vs-nearshore",
    "/blog/top-10-ai-call-center-companies-usa",
    "/blog/top-10-answering-service-companies-usa",
    "/blog/top-10-appointment-setting-companies-usa",
    "/blog/top-10-bpo-companies-in-usa",
    "/blog/top-10-customer-service-outsourcing-companies-usa",
    "/blog/top-10-debt-collection-bpo-companies-usa",
    "/blog/top-10-ecommerce-call-center-companies-usa",
    "/blog/top-10-financial-services-call-center-companies-usa",
    "/blog/top-10-hvac-home-services-call-center-companies-usa",
    "/blog/top-10-inbound-call-center-companies-usa",
    "/blog/top-10-lead-generation-companies-usa",
    "/blog/top-10-legal-intake-call-center-companies-usa",
    "/blog/top-10-live-chat-outsourcing-companies-usa",
    "/blog/top-10-multilingual-call-center-companies-usa",
    "/blog/top-10-outbound-call-center-companies-usa",
    "/blog/top-10-real-estate-call-center-companies-usa",
    "/blog/top-10-saas-customer-support-companies-usa",
    "/blog/top-10-small-business-call-center-companies-usa",
    "/blog/top-10-technical-support-outsourcing-companies-usa",
    "/blog/top-10-telemarketing-companies-usa",
    "/blog/top-10-virtual-receptionist-companies-usa",
    "/blog/top-15-healthcare-bpo-companies-usa",
    "/blog/top-15-insurance-bpo-companies-usa",
    "/call-center-services-austin",
    "/call-center-services-charlotte",
    "/call-center-services-chicago",
    "/call-center-services-columbus",
    "/call-center-services-dallas",
    "/call-center-services-houston",
    "/call-center-services-jacksonville",
    "/call-center-services-los-angeles",
    "/call-center-services-new-york",
    "/call-center-services-philadelphia",
    "/call-center-services-phoenix",
    "/call-center-services-san-antonio",
    "/call-center-services-san-diego",
    "/call-center-services-san-francisco",
    "/call-center-services-seattle",
    "/case-studies",
    "/contact",
    "/faq",
    "/industries",
    "/industries/airlines-call-center",
    "/industries/automotive-call-center-services",
    "/industries/banking-financial-services-call-center",
    "/industries/cable-media-call-center",
    "/industries/ecommerce-customer-service-outsourcing",
    "/industries/education-call-center-services",
    "/industries/energy-utilities-call-center",
    "/industries/financial-services-call-center",
    "/industries/government-call-center",
    "/industries/healthcare-call-center-services",
    "/industries/insurance-call-center-outsourcing",
    "/industries/logistics-shipping-call-center",
    "/industries/pharmaceuticals-call-center",
    "/industries/real-estate-call-center-services",
    "/industries/retail-call-center-services",
    "/industries/saas-technology-support",
    "/industries/telecommunications-call-center",
    "/industries/travel-hospitality-call-center",
    "/services",
    "/services/ai-call-center-automation",
    "/services/b2b-sales-outsourcing",
    "/services/b2c-sales-outsourcing",
    "/services/contact-center-software-solutions",
    "/services/customer-acquisition-outsourcing",
    "/services/customer-care-outsourcing",
    "/services/customer-experience-analytics",
    "/services/debt-collection-outsourcing",
    "/services/digital-customer-experience-services",
    "/services/fraud-prevention-cyber-security",
    "/services/interactive-voice-response",
    "/services/live-chat-outsourcing",
    "/services/omnichannel-contact-center-solutions",
    "/services/telemarketing-services",
    "/services/virtual-remote-support",
    "/solutions",
    "/solutions/back-office-outsourcing",
    "/solutions/call-monitoring-services",
    "/solutions/content-moderation-services",
    "/solutions/customer-experience-management",
    "/solutions/customer-service-outsourcing",
    "/solutions/dialer-acd-administration",
    "/solutions/financial-call-center-services",
    "/solutions/government-call-center-services",
    "/solutions/inbound-call-center-services",
    "/solutions/information-technology-services",
    "/solutions/lead-generation-appointment-setting",
    "/solutions/multilingual-call-center-services",
    "/solutions/office-support-services",
    "/solutions/outbound-call-center-services",
    "/solutions/sales-outsourcing",
    "/solutions/social-customer-care",
    "/solutions/social-media-customer-support",
    "/solutions/technical-support-outsourcing",
    "/solutions/work-from-home-solutions",
    "/why-us",
  ];

  const getPriority = (route: string): number => {
    if (route === "") return 1.0;
    if (["/services", "/solutions", "/industries", "/contact"].includes(route)) return 0.9;
    if (route.startsWith("/services/") || route.startsWith("/solutions/")) return 0.8;
    if (route.startsWith("/industries/")) return 0.8;
    if (route.startsWith("/call-center-services-")) return 0.7;
    if (route === "/blog") return 0.9;
    if (route.startsWith("/blog/")) return 0.9;
    if (["/about", "/why-us", "/case-studies", "/faq"].includes(route)) return 0.5;
    return 0.4;
  };

  const getChangeFrequency = (
    route: string
  ): MetadataRoute.Sitemap[number]["changeFrequency"] => {
    if (route === "") return "daily";
    if (route.startsWith("/blog")) return "weekly";
    if (route.startsWith("/services") || route.startsWith("/solutions")) return "monthly";
    return "monthly";
  };

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: getChangeFrequency(route),
    priority: getPriority(route),
  }));
}