const serviceCatalogItems = [
  {
    name: "Inbound Call Center Services",
    url: "https://contactcenterusa.com/solutions/inbound-call-center-services",
    description: "Inbound customer support, order support, overflow handling, IVR, and ACD routing.",
    serviceType: "Inbound call center outsourcing",
  },
  {
    name: "Outbound Call Center Services",
    url: "https://contactcenterusa.com/solutions/outbound-call-center-services",
    description: "Outbound calling for sales, retention, surveys, follow-up, and customer outreach campaigns.",
    serviceType: "Outbound call center outsourcing",
  },
  {
    name: "Customer Service Outsourcing",
    url: "https://contactcenterusa.com/solutions/customer-service-outsourcing",
    description: "Customer care teams for phone, email, live chat, social, and omnichannel support.",
    serviceType: "Customer service outsourcing",
  },
  {
    name: "Technical Support Outsourcing",
    url: "https://contactcenterusa.com/solutions/technical-support-outsourcing",
    description: "Technical support, help desk coverage, troubleshooting, and tiered product support.",
    serviceType: "Technical support outsourcing",
  },
  {
    name: "Lead Generation and Appointment Setting",
    url: "https://contactcenterusa.com/solutions/lead-generation-appointment-setting",
    description: "Lead qualification, appointment setting, fast lead response, and sales pipeline support.",
    serviceType: "Lead generation outsourcing",
  },
  {
    name: "Multilingual Call Center Services",
    url: "https://contactcenterusa.com/solutions/multilingual-call-center-services",
    description: "English and Spanish bilingual call center support for customer-facing programs.",
    serviceType: "Multilingual call center outsourcing",
  },
  {
    name: "Telemarketing Services",
    url: "https://contactcenterusa.com/services/telemarketing-services",
    description: "Compliant telemarketing, prospect outreach, customer reactivation, and campaign support.",
    serviceType: "Telemarketing outsourcing",
  },
  {
    name: "Virtual and Remote Support",
    url: "https://contactcenterusa.com/services/virtual-remote-support",
    description: "Virtual receptionist, remote answering, after-hours coverage, and overflow support.",
    serviceType: "Virtual receptionist services",
  },
];

export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Contact Center USA",
    url: "https://contactcenterusa.com",
    logo: "https://contactcenterusa.com/images/logo.png",
    description:
      "US-based call center outsourcing services for businesses across the United States and Canada.",
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
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-0199",
      contactType: "sales",
      email: "info@contactcenterusa.com",
      url: "https://contactcenterusa.com/contact",
      availableLanguage: ["English", "Spanish"],
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Call Center Outsourcing Services",
      itemListElement: serviceCatalogItems.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.name,
          description: service.description,
          serviceType: service.serviceType,
          url: service.url,
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
    name: "Contact Center USA",
    url: "https://contactcenterusa.com",
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
      name: "Contact Center USA",
      url: "https://contactcenterusa.com",
      logo: {
        "@type": "ImageObject",
        url: "https://contactcenterusa.com/images/logo-v3.png",
      },
    },
  };
}

export function generateServiceCatalogSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ItemList",
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
          name: "Contact Center USA",
          url: "https://contactcenterusa.com",
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
    image: "https://contactcenterusa.com/images/logo.png",
    telephone: "+1-800-555-0199",
    priceRange: "$$",
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
      ],
      opens: "08:00",
      closes: "20:00",
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
      name: "Contact Center USA",
      url: "https://contactcenterusa.com",
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
  const image = opts.image || `${baseUrl}/images/logo-v3.png`;

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
      logo: { "@type": "ImageObject", url: `${baseUrl}/images/logo-v3.png` },
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
