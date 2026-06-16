export const siteConfig = {
  name: "Contact Center USA",
  url: "https://contactcenterusa.com",
  email: "info@contactcenterusa.com",
  description:
    "US-based call center outsourcing services for businesses across the United States and Canada.",
  address: {
    street: "",
    city: "",
    state: "",
    zip: "",
    country: "United States",
  },
  hours: "24/7 US-Based Support",
};

export function pageMeta(title: string, description: string, url: string) {
  return {
    openGraph: {
      title,
      description,
      url,
      type: "website" as const,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}

export function articleMeta(title: string, description: string, url: string) {
  return {
    openGraph: {
      title,
      description,
      url,
      type: "article" as const,
      images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: ["/opengraph-image"],
    },
  };
}
