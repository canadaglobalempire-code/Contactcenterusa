import type { Metadata } from "next";
import { StateRankingArticle } from "@/components/shared/StateRankingArticle";
import { stateRankingPosts } from "@/lib/state-ranking-posts";

const post = stateRankingPosts["top-10-bpo-companies-utah"];

export const metadata: Metadata = {
  title: post.title,
  description: post.description,
  keywords: post.keywords,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    title: post.title,
    description: post.description,
    url: `/blog/${post.slug}`,
    type: "article",
    images: [{ url: post.image, alt: post.imageAlt }],
  },
  twitter: {
    card: "summary_large_image",
    title: post.title,
    description: post.description,
    images: [{ url: post.image, alt: post.imageAlt }],
  },
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Place",
            name: "Utah",
            address: { "@type": "PostalAddress", addressRegion: "UT", addressCountry: "US" },
          }).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: post.faqs.map((f) => ({
              "@type": "Question",
              name: f.question,
              acceptedAnswer: { "@type": "Answer", text: f.answer },
            })),
          }).replace(/</g, "\\u003c"),
        }}
      />
      <StateRankingArticle slug="top-10-bpo-companies-utah" />
    </>
  );
}
