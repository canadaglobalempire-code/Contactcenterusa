import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.contactcenterusa.com";
  
  const routes = [
    "", "/about", "/about/company-history", "/about/why-work-with-us", "/about/industries",
    "/services", "/solutions", "/contact", "/blog", "/faq", "/why-us", "/case-studies",
    "/services/ai-call-center-automation", "/services/contact-center-software-solutions",
    "/services/customer-acquisition-outsourcing", "/services/customer-experience-analytics",
    "/services/digital-customer-experience-services", "/services/fraud-prevention-cyber-security",
    "/services/omnichannel-contact-center-solutions",
    "/solutions/back-office-outsourcing", "/solutions/customer-service-outsourcing",
    "/solutions/financial-call-center-services", "/solutions/government-call-center-services",
    "/solutions/inbound-call-center-services", "/solutions/lead-generation-appointment-setting",
    "/solutions/multilingual-call-center-services", "/solutions/outbound-call-center-services",
    "/solutions/social-media-customer-support", "/solutions/technical-support-outsourcing",
    "/industries/healthcare-call-center-services", "/industries/ecommerce-customer-service-outsourcing",
    "/industries/financial-services-call-center", "/industries/real-estate-call-center-services",
    "/industries/saas-technology-support", "/industries/insurance-call-center-outsourcing",
    "/industries/travel-hospitality-call-center", "/industries/logistics-shipping-call-center",
    "/industries/education-call-center-services", "/industries/banking-financial-services-call-center",
    "/industries/automotive-call-center-services", "/industries/cable-media-call-center",
    "/industries/energy-utilities-call-center", "/industries/government-call-center",
    "/industries/pharmaceuticals-call-center", "/industries/telecommunications-call-center",
    "/blog/call-center-outsourcing-cost", "/blog/how-to-choose-call-center-partner",
    "/blog/onshore-vs-offshore-vs-nearshore", "/blog/inbound-vs-outbound-call-centers",
    "/blog/call-center-kpis", "/blog/benefits-us-based-call-center",
    "/blog/top-15-healthcare-bpo-companies-usa", "/blog/top-10-bpo-companies-in-usa",
    "/blog/top-15-insurance-bpo-companies-usa", "/blog/american-call-centers",
    "/blog/de-escalation-techniques-customer-service", "/blog/medical-call-center-services",
    "/blog/inside-sales-outsourcing-guide", "/blog/customer-service-best-practices",
    "/blog/nearshore-call-center-outsourcing",
    "/call-center-services-new-york", "/call-center-services-los-angeles",
    "/call-center-services-chicago", "/call-center-services-houston",
    "/call-center-services-phoenix", "/call-center-services-philadelphia",
    "/call-center-services-san-antonio", "/call-center-services-san-diego",
    "/call-center-services-dallas", "/call-center-services-austin",
    "/call-center-services-jacksonville", "/call-center-services-columbus",
    "/call-center-services-charlotte", "/call-center-services-san-francisco",
    "/call-center-services-seattle",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : route.startsWith("/blog") ? "weekly" : "monthly",
    priority: route === "" ? 1 : route.startsWith("/services") || route.startsWith("/solutions") ? 0.9 : 0.7,
  }));
}
