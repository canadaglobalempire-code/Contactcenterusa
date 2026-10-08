import type { Metadata } from "next";
import { TrafficBlogArticle } from "@/components/shared/TrafficBlogArticle";
import type { TrafficBlogPost } from "@/lib/traffic-blog-posts";
import guides from "@/lib/dashboard-guides.json";
const post = guides["what-is-ai-analytics-a-contact-center-guide"] as TrafficBlogPost;
const dateModified = "2026-10-08";
export const metadata: Metadata = { title: { absolute: post.title }, description: post.description, alternates: { canonical: post.path }, openGraph: { title: post.title, description: post.description, url: post.path, type: "article", publishedTime: post.datePublished, modifiedTime: dateModified, images: [post.image] }, twitter: { card: "summary_large_image", title: post.title, description: post.description, images: [post.image] } };
export default function Page() { return <TrafficBlogArticle post={post} />; }
