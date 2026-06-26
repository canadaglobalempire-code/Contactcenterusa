const SITE_BASE_URL = "https://contactcenterusa.com";
const ORGANIZATION_ID = `${SITE_BASE_URL}/#organization`;
const WEBSITE_ID = `${SITE_BASE_URL}/#website`;
const SERVICE_CATALOG_ID = `${SITE_BASE_URL}/#service-catalog`;
const LOGO_URL = `${SITE_BASE_URL}/images/logo-v6.png`;
const DEFAULT_SHARE_IMAGE_URL = `${SITE_BASE_URL}/opengraph-image`;

const serviceCatalogItems = [
  {
    name: "Inbound Call Center Services",
    url: `${SITE_BASE_URL}/solutions/inbound-call-center-services`,
    description: "Inbound customer support, order support, overflow handling, IVR, and ACD routing.",
    serviceType: "Inbound call center outsourcing",
  },
  {
    name: "Outbound Call Center Services",
    url: `${SITE_BASE_URL}/solutions/outbound-call-center-services`,
    description: "Outbound calling for sales, retention, surveys, follow-up, and customer outreach campaigns.",
    serviceType: "Outbound call center outsourcing",
  },
  {
    name: "Customer Service Outsourcing",
    url: `${SITE_BASE_URL}/solutions/customer-service-outsourcing`,
    description: "Customer care teams for phone, email, live chat, social, and omnichannel support.",
    serviceType: "Customer service outsourcing",
  },
  {
    name: "Technical Support Outsourcing",
    url: `${SITE_BASE_URL}/solutions/technical-support-outsourcing`,
    description: "Technical support, help desk coverage, troubleshooting, and tiered product support.",
    serviceType: "Technical support outsourcing",
  },
  {
    name: "Lead Generation and Appointment Setting",
    url: `${SITE_BASE_URL}/solutions/lead-generation-appointment-setting`,
    description: "Lead qualification, appointment setting, fast lead response, and sales pipeline support.",
    serviceType: "Lead generation outsourcing",
  },
  {
    name: "Multilingual Call Center Services",
    url: `${SITE_BASE_URL}/solutions/multilingual-call-center-services`,
    description: "English and Spanish bilingual call center support for customer-facing programs.",
    serviceType: "Multilingual call center outsourcing",
  },
  {
    name: "Telemarketing Services",
    url: `${SITE_BASE_URL}/services/telemarketing-services`,
    description: "Compliant telemarketing, prospect outreach, customer reactivation, and campaign support.",
    serviceType: "Telemarketing outsourcing",
  },
  {
    name: "Virtual and Remote Support",
    url: `${SITE_BASE_URL}/services/virtual-remote-support`,
    description: "Virtual receptionist, remote answering, after-hours coverage, and overflow support.",
    serviceType: "Virtual receptionist services",
  },
  {
    name: "AI Call Center Automation",
    url: `${SITE_BASE_URL}/services/ai-call-center-automation`,
    description: "AI-enabled call routing, automation, agent assist, and human support workflows.",
    serviceType: "AI call center automation",
  },
  {
    name: "Live Chat Outsourcing",
    url: `${SITE_BASE_URL}/services/live-chat-outsourcing`,
    description: "Live chat support for ecommerce, SaaS, lead capture, and customer service teams.",
    serviceType: "Live chat outsourcing",
  },
  {
    name: "Omnichannel Contact Center Solutions",
    url: `${SITE_BASE_URL}/services/omnichannel-contact-center-solutions`,
    description: "Coordinated support across phone, email, chat, social, SMS, and CRM workflows.",
    serviceType: "Omnichannel contact center outsourcing",
  },
  {
    name: "Healthcare Call Center Services",
    url: `${SITE_BASE_URL}/industries/healthcare-call-center-services`,
    description: "Healthcare support for patient communications, scheduling, intake, and compliance-aware workflows.",
    serviceType: "Healthcare call center outsourcing",
  },
  {
    name: "Insurance Call Center Outsourcing",
    url: `${SITE_BASE_URL}/industries/insurance-call-center-outsourcing`,
    description: "Insurance support for claims intake, policyholder service, renewals, and overflow programs.",
    serviceType: "Insurance call center outsourcing",
  },
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORGANIZATION_ID,
    name: "Contact Center USA",
    legalName: "Contact Center USA",
    alternateName: ["ContactCenterUSA", "Contact Center USA Call Center Services"],
    url: SITE_BASE_URL,
    logo: LOGO_URL,
    description:
      "US-based call center outsourcing services for businesses across the United States and Canada.",
    mainEntityOfPage: SITE_BASE_URL,
    foundingDate: "1999",
    numberOfEmployees: {
      "@type": "QuantitativeValue",
      minValue: 500,
      maxValue: 1000,
      unitText: "employees",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
    ],
    knowsAbout: [
      "call center outsourcing",
      "US-based call center services",
      "customer service outsourcing",
      "technical support outsourcing",
      "lead generation outsourcing",
      "appointment setting",
      "healthcare BPO",
      "insurance BPO",
      "multilingual call center services",
      "virtual receptionist services",
      "AI call center automation",
      "live chat outsourcing",
      "omnichannel contact center solutions",
      "US contact center services",
      "call center provider comparison",
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      url: `${SITE_BASE_URL}/contact`,
      availableLanguage: ["English", "Spanish"],
      areaServed: [
        { "@type": "Country", name: "United States" },
        { "@type": "Country", name: "Canada" },
      ],
    },
    potentialAction: {
      "@type": "ContactAction",
      name: "Request a call center quote",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_BASE_URL}/contact`,
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      "@id": SERVICE_CATALOG_ID,
      name: "Call Center Outsourcing Services",
      itemListElement: serviceCatalogItems.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          serviceType: service.serviceType,
          url: service.url,
          provider: { "@id": ORGANIZATION_ID },
          areaServed: [
            { "@type": "Country", name: "United States" },
            { "@type": "Country", name: "Canada" },
          ],
        },
      })),
    },
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": WEBSITE_ID,
    name: "Contact Center USA",
    url: SITE_BASE_URL,
    inLanguage: "en-US",
    about: [
      "US-based call center outsourcing",
      "customer service outsourcing",
      "technical support outsourcing",
      "lead generation and appointment setting",
      "healthcare and insurance BPO",
    ],
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Contact Center USA",
      url: SITE_BASE_URL,
      logo: {
        "@type": "ImageObject",
        url: LOGO_URL,
      },
    },
  };
}

export function generateServiceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "@id": SERVICE_CATALOG_ID,
    name: "Contact Center USA Service Catalog",
    itemListElement: serviceCatalogItems.map((service, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Service",
        name: service.name,
        description: service.description,
        serviceType: service.serviceType,
        url: service.url,
        provider: {
          "@type": "Organization",
          "@id": ORGANIZATION_ID,
          name: "Contact Center USA",
          url: SITE_BASE_URL,
        },
        areaServed: [
          { "@type": "Country", name: "United States" },
          { "@type": "Country", name: "Canada" },
        ],
      },
    })),
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Contact Center USA",
    url: "https://contactcenterusa.com",
    image: LOGO_URL,
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
      ],
      opens: "00:00",
      closes: "23:59",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
  };
}

export function generateFAQSchema(
  faqs: { question: string; answer: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function generateServiceSchema(
  name: string,
  description: string,
  url: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url,
    provider: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Contact Center USA",
      url: SITE_BASE_URL,
    },
    areaServed: [
      { "@type": "Country", name: "United States" },
      { "@type": "Country", name: "Canada" },
    ],
  };
}

export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function generateItemListSchema(
  items: { rank: number; name: string; description?: string; url?: string }[],
  name: string
) {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it) => ({
      "@type": "ListItem",
      position: it.rank,
      name: it.name,
      ...(it.description ? { description: it.description } : {}),
      ...(it.url ? { url: it.url } : {}),
    })),
  };
}

export function generateCollectionPageSchema(opts: {
  name: string;
  description: string;
  url: string;
  items: { name: string; url: string; description?: string }[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: opts.name,
    description: opts.description,
    url: opts.url,
    inLanguage: "en-US",
    isPartOf: {
      "@type": "WebSite",
      "@id": WEBSITE_ID,
      url: SITE_BASE_URL,
    },
    publisher: {
      "@type": "Organization",
      "@id": ORGANIZATION_ID,
      name: "Contact Center USA",
      url: SITE_BASE_URL,
    },
    mainEntity: {
      "@type": "ItemList",
      numberOfItems: opts.items.length,
      itemListElement: opts.items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        item: {
          "@type": "WebPage",
          name: item.name,
          url: item.url,
          ...(item.description ? { description: item.description } : {}),
        },
      })),
    },
  };
}

export function generateBlogAEOSchema(opts: {
  slug: string;
  headline: string;
  description: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
  keywords?: string[];
  faqs?: { question: string; answer: string }[];
  companies?: { rank: number; name: string; description?: string; url?: string }[];
}) {
  const baseUrl = "https://contactcenterusa.com";
  const url = `${baseUrl}/blog/${opts.slug}`;
  const publishDate = opts.datePublished || "2026-04-19";
  const modifyDate = opts.dateModified || publishDate;
  const image = opts.image || DEFAULT_SHARE_IMAGE_URL;

  const blogPosting: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: opts.headline,
    description: opts.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: "Contact Center USA",
      url: baseUrl,
    },
    publisher: {
      "@type": "Organization",
      name: "Contact Center USA",
      url: baseUrl,
      logo: { "@type": "ImageObject", url: LOGO_URL },
    },
    datePublished: publishDate,
    dateModified: modifyDate,
    image,
    url,
    inLanguage: "en-US",
    ...(opts.keywords ? { keywords: opts.keywords.join(", ") } : {}),
  };

  const schemas: Record<string, unknown>[] = [blogPosting];

  if (opts.faqs && opts.faqs.length > 0) {
    schemas.push(generateFAQSchema(opts.faqs));
  }

  if (opts.companies && opts.companies.length > 0) {
    schemas.push(generateItemListSchema(opts.companies, opts.headline));
  }

  return schemas;
}
