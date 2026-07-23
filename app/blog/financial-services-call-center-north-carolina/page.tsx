import type { Metadata } from "next";
import { TrafficBlogArticle } from "@/components/shared/TrafficBlogArticle";
import { geoVerticalPosts } from "@/lib/geo-vertical-posts";

const post = geoVerticalPosts["financial-services-call-center-north-carolina"];

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
  return <TrafficBlogArticle post={post} />;
}
