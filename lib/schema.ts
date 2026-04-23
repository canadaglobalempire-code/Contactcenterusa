export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Contact Center USA",
    url: "https://contactcenterusa.com",
    logo: "https://contactcenterusa.com/images/logo.png",
    description:
      "US-based call center outsourcing services for businesses across the United States and Canada.",
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-800-555-0199",
      contactType: "sales",
      availableLanguage: ["English", "Spanish"],
    },
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
