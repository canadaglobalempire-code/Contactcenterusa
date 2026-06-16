import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Calendar, CheckCircle, Clock } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { LeadCTALink } from "@/components/shared/LeadCTALink";
import { generateBreadcrumbSchema } from "@/lib/schema";
import type { TrafficBlogPost, TrafficBlogSection } from "@/lib/traffic-blog-posts";

const SITE_URL = "https://contactcenterusa.com";

function jsonLd(data: unknown) {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

function blogPostingSchema(post: TrafficBlogPost) {
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.h1,
    description: post.description,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    author: {
      "@type": "Organization",
      name: "Contact Center USA",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Contact Center USA",
      url: SITE_URL,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/logo-v6.png`,
      },
    },
    datePublished: post.datePublished,
    dateModified: post.dateModified,
    image: `${SITE_URL}${post.image}`,
    url,
    inLanguage: "en-US",
    articleSection: post.category,
    keywords: post.keywords.join(", "),
  };
}

function faqSchema(post: TrafficBlogPost) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

function BlogTable({ table }: { table: NonNullable<TrafficBlogSection["table"]> }) {
  return (
    <div className="not-prose my-8 overflow-hidden rounded-2xl border border-gray-200 bg-white">
      <table className="w-full text-left text-sm">
        <thead className="bg-gray-50 text-navy">
          <tr>
            {table.headers.map((header) => (
              <th key={header} className="px-5 py-4 font-semibold">
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {table.rows.map((row) => (
            <tr key={row.join("-")}>
              {row.map((cell) => (
                <td key={cell} className="px-5 py-4 align-top text-gray-700">
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export function TrafficBlogArticle({ post }: { post: TrafficBlogPost }) {
  const breadcrumb = generateBreadcrumbSchema([
    { name: "Home", url: `${SITE_URL}/` },
    { name: "Blog", url: `${SITE_URL}/blog` },
    { name: post.h1, url: `${SITE_URL}/blog/${post.slug}` },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(blogPostingSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(faqSchema(post)) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumb) }}
      />

      <section className="relative overflow-hidden bg-navy pt-36 pb-20 lg:pt-40 lg:pb-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1200px] px-5 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm font-semibold text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>
          <div className="mt-8 grid gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:items-center">
            <div>
              <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
                {post.category}
              </span>
              <h1 className="mt-6 text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-6xl">
                {post.h1}
              </h1>
              <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
                {post.description}
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-white/55">
                <span className="inline-flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-red" />
                  Updated June 16, 2026
                </span>
                <span className="inline-flex items-center gap-2">
                  <Clock className="h-4 w-4 text-red" />
                  {post.readTime}
                </span>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 380px"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto grid max-w-[1200px] gap-12 px-5 lg:grid-cols-[minmax(0,1fr)_320px] lg:px-8">
          <article className="prose prose-lg max-w-none leading-relaxed text-gray-700">
            {post.intro.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}

            <div className="not-prose my-8 rounded-2xl border border-red/10 bg-red/5 p-6">
              <h2 className="text-xl font-bold text-navy">Quick buyer answer</h2>
              <p className="mt-3 text-gray-700">
                If you need more calls answered, start with a focused pilot:
                one service line, one script, one escalation path, and one
                weekly QA scorecard. That gives you a measurable win before
                expanding into full customer support outsourcing.
              </p>
            </div>

            {post.sections.map((section) => (
              <section key={section.heading}>
                <h2>{section.heading}</h2>
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul>
                    {section.bullets.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                )}
                {section.ordered && (
                  <ol>
                    {section.ordered.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ol>
                )}
                {section.table && <BlogTable table={section.table} />}
              </section>
            ))}

            <div className="not-prose my-10 rounded-2xl bg-navy p-8 text-white">
              <h2 className="text-2xl font-bold">Need help comparing providers?</h2>
              <p className="mt-3 text-white/70">
                Contact Center USA can help you scope call volume, coverage,
                scripts, integrations, and the right pricing model before you
                commit to a vendor.
              </p>
              <LeadCTALink
                ctaLocation={post.ctaLocation}
                leadOffer={post.leadOffer}
                className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-red-dark"
              >
                Get a Free Quote
                <ArrowRight className="h-4 w-4" />
              </LeadCTALink>
            </div>

            <h2>FAQ</h2>
            {post.faqs.map((faq) => (
              <div key={faq.question}>
                <h3>{faq.question}</h3>
                <p>{faq.answer}</p>
              </div>
            ))}
          </article>

          <aside className="space-y-6 lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-6">
              <h3 className="font-bold text-navy">Related SEO guides</h3>
              <div className="mt-4 space-y-3">
                {post.related.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="flex items-start gap-3 rounded-xl bg-white p-3 text-sm font-semibold text-gray-700 transition-colors hover:text-red"
                  >
                    <CheckCircle className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-navy p-5">
              <HeroContactForm />
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
