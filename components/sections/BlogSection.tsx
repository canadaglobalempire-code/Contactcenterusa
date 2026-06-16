"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Call Center Outsourcing Cost Per Hour: 2026 Rates",
    excerpt:
      "See US, nearshore, and offshore hourly benchmarks, hidden fees, and pricing models before you request a quote.",
    image: "/images/hero-agent-2.jpg",
    category: "Pricing Guide",
    readTime: "14 min read",
    href: "/blog/call-center-outsourcing-cost-per-hour-2026",
  },
  {
    title: "Teleperformance Competitors & Alternatives",
    excerpt:
      "Compare companies like Teleperformance for US-based CX, flexible contracts, migration planning, and service quality.",
    image: "/images/agents-row.jpg",
    category: "Comparison",
    readTime: "12 min read",
    href: "/blog/teleperformance-alternatives",
  },
  {
    title: "HVAC & Home Services Call Center Companies",
    excerpt:
      "Compare HVAC, plumbing, electrical, roofing, locksmith, and home services call center partners for 2026.",
    image: "/images/agent-focused.jpg",
    category: "Industry Ranking",
    readTime: "18 min read",
    href: "/blog/top-10-hvac-home-services-call-center-companies-usa",
  },
  {
    title: "Customer Service Outsourcing Companies",
    excerpt:
      "Compare US-based customer service outsourcing providers for omnichannel support, live chat, email, and seasonal CX coverage.",
    image: "/images/cc-agent-smile.jpg",
    category: "CX Ranking",
    readTime: "18 min read",
    href: "/blog/top-10-customer-service-outsourcing-companies-usa",
  },
  {
    title: "Healthcare BPO Companies USA",
    excerpt:
      "Compare healthcare BPO providers for HIPAA-aware patient support, scheduling, billing support, and overflow workflows.",
    image: "/images/cc-team-meeting.jpg",
    category: "Healthcare",
    readTime: "18 min read",
    href: "/blog/top-15-healthcare-bpo-companies-usa",
  },
  {
    title: "Appointment Setting Companies USA",
    excerpt:
      "Compare appointment setting agencies for B2B meetings, outsourced SDRs, cold calling, LinkedIn outreach, and qualified-meeting pricing.",
    image: "/images/cc-discussion.jpg",
    category: "Sales Pipeline",
    readTime: "18 min read",
    href: "/blog/top-10-appointment-setting-companies-usa",
  },
];

export function BlogSection() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative overflow-hidden bg-gradient-to-tl from-gray-50 via-white to-red/[0.02] py-28">
      <div className="gradient-orb-blue -bottom-40 -right-40" />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className={isInView ? "animate-fade-in-up" : "opacity-0"}>
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">
              Our Blog
            </span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl lg:text-[44px]">
              Latest <span className="text-red">Insights</span>
            </h2>
            <p className="mt-3 max-w-lg text-gray-700">
              Expert advice, industry trends, and actionable tips for
              businesses looking to optimize their customer support.
            </p>
          </div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div ref={ref} className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <div
              key={post.title}
              className={isInView ? "animate-fade-in-up" : "opacity-0"}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Link
                href={post.href}
                className="group block h-full overflow-hidden rounded-2xl bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="relative h-[220px] overflow-hidden">
                  <Image
                    src={post.image}
                    alt={`Blog post image for ${post.title}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="rounded-full bg-red px-3 py-1 text-xs font-semibold text-white">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Clock className="h-3.5 w-3.5" />
                    {post.readTime}
                  </div>
                  <h3 className="mt-3 text-lg font-bold leading-snug text-navy transition-colors group-hover:text-red">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">
                    Read Article
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
