"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

const posts = [
  {
    title: "Call Center Outsourcing Cost: Complete 2026 Guide",
    excerpt:
      "Everything you need to know about pricing models, hidden fees, and how to get the best value from your outsourcing partner.",
    image: "/images/hero-agent-2.jpg",
    category: "Industry Guide",
    readTime: "8 min read",
    href: "/blog",
  },
  {
    title: "Onshore vs. Offshore vs. Nearshore: Pros, Cons & Costs",
    excerpt:
      "A detailed comparison to help you decide which outsourcing model is right for your business and your customers.",
    image: "/images/agents-row.jpg",
    category: "Comparison",
    readTime: "6 min read",
    href: "/blog",
  },
  {
    title: "How AI is Transforming the Call Center Industry in 2026",
    excerpt:
      "From intelligent routing to sentiment analysis — how artificial intelligence is reshaping customer service.",
    image: "/images/agent-focused.jpg",
    category: "Technology",
    readTime: "5 min read",
    href: "/blog",
  },
];

export function BlogSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-tl from-gray-50 via-white to-red/[0.02] py-28">
      <div className="gradient-orb-blue -bottom-40 -right-40" />
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
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
          </motion.div>
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-6 py-3 text-sm font-semibold text-navy transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            View All Posts
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          {posts.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
