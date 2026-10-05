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

/*
 * A page that sets openGraph replaces the root layout's openGraph object
 * entirely (metadata merges shallowly), so a page that only sets title and
 * description shares the homepage's og:title and og:url instead. Pages
 * without a share image of their own spread one of these helpers so their
 * social tags carry their own title, description, URL and the site's
 * 1200x630 share image.
 */
const shareImage = {
  url: "/opengraph-image",
  width: 1200,
  height: 630,
  alt: "Contact Center USA - US-based call center outsourcing services",
};

function socialMeta<T extends "website" | "article">(
  type: T,
  title: string,
  description: string,
  url: string
) {
  return {
    openGraph: {
      title,
      description,
      url,
      type,
      siteName: siteConfig.name,
      locale: "en_US",
      images: [shareImage],
    },
    twitter: {
      card: "summary_large_image" as const,
      title,
      description,
      images: [{ url: shareImage.url, alt: shareImage.alt }],
    },
  };
}

export function pageMeta(title: string, description: string, url: string) {
  return socialMeta("website", title, description, url);
}

export function articleMeta(title: string, description: string, url: string) {
  return socialMeta("article", title, description, url);
}
