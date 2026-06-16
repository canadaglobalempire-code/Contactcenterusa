import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo-config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

const title =
  "SaaS Customer Retention Strategy | Case Study | Contact Center USA";
const description =
  "How a B2B SaaS company reduced churn by 28% and increased NPS from 32 to 67 with proactive customer success support.";
const slug = "saas-customer-retention";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/case-studies/${slug}` },
  ...pageMeta(title, description, `/case-studies/${slug}`),
};

const metrics = [
  { value: "28%", label: "Churn Reduction (to 10.8%)" },
  { value: "67", label: "NPS Score (Up from 32)" },
  { value: "45%", label: "Faster Time-to-Value" },
  { value: "$3.2M", label: "ARR Saved from Churn Prevention" },
];

const takeaways = [
  "Proactive outreach is the single most impactful lever in B2B SaaS retention — reaching out before customers show visible signs of disengagement prevents more churn than any reactive save campaign.",
  "Customer health scoring, when integrated with CRM data and product usage telemetry, gives support teams a predictive edge that turns retention from guesswork into a science.",
  "Dedicated customer success agents who understand the product deeply — not just how to open support tickets — are fundamentally different from traditional support reps and deliver measurably better retention outcomes.",
  "Onboarding is where the retention battle is won or lost. A 45% improvement in time-to-value translates directly into lower 90-day churn, which compounds over the customer lifetime.",
];

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: title,
  description,
  url: `https://contactcenterusa.com/case-studies/${slug}`,
  author: {
    "@type": "Organization",
    name: "Contact Center USA",
    url: "https://contactcenterusa.com",
  },
  publisher: {
    "@type": "Organization",
    name: "Contact Center USA",
    url: "https://contactcenterusa.com",
    logo: {
      "@type": "ImageObject",
      url: "https://contactcenterusa.com/images/logo-v6.png",
    },
  },
  datePublished: "2026-03-05",
  dateModified: "2026-03-05",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://contactcenterusa.com/case-studies/${slug}`,
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://contactcenterusa.com" },
  { name: "Case Studies", url: "https://contactcenterusa.com/case-studies" },
  {
    name: "SaaS Customer Retention Strategy",
    url: `https://contactcenterusa.com/case-studies/${slug}`,
  },
]);

export default function SaasCustomerRetentionPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbSchema).replace(
            /</g,
            "\\u003c"
          ),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(articleSchema).replace(/</g, "\\u003c"),
        }}
      />

      <section className="bg-navy py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <nav className="mb-8 flex items-center gap-2 text-sm text-white/50">
            <Link href="/" className="hover:text-white/80">
              Home
            </Link>
            <ChevronRight className="h-4 w-4" />
            <Link href="/case-studies" className="hover:text-white/80">
              Case Studies
            </Link>
            <ChevronRight className="h-4 w-4" />
            <span className="text-white/80">SaaS Customer Retention Strategy</span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-purple-500/15 px-4 py-1.5 text-sm font-semibold text-purple-300">
            SaaS &amp; Technology
          </span>
          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Reducing Churn by 28% with Proactive Customer Success Support
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/60">
            A B2B SaaS company with 4,000 active subscribers and $12M ARR was
            losing revenue at an alarming rate: 15% monthly churn driven by poor
            onboarding, reactive-only support, and no systematic approach to
            customer health. Within nine months of partnering with Contact Center
            USA, churn dropped to 10.8%, NPS jumped from 32 to 67, and the
            company saved $3.2M in ARR that would otherwise have been lost to
            churn.
          </p>
        </div>
      </section>

      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">The Challenge</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              The SaaS company had built a strong product but a weak customer
              experience layer. Their support team of 8 internal agents was
              entirely reactive — they waited for tickets to come in and then
              responded, often hours later. There was no proactive outreach, no
              health scoring system, and no formal onboarding process beyond an
              automated email sequence with links to documentation.
            </p>
            <p>
              The consequences were predictable but severe. New customers took an
              average of 45 days to reach their first value milestone, during
              which time the majority of churn occurred. Customers who didn&rsquo;t
              achieve value quickly became disengaged, stopped using the
              platform, and eventually canceled. The NPS score of 32 placed the
              company firmly in the &ldquo;passive&rdquo; zone — customers weren&rsquo;t
              actively unhappy, but they weren&rsquo;t advocates either, which meant no
              organic growth through referrals.
            </p>
            <p>
              The company&rsquo;s leadership had tried hiring an internal customer
              success manager, but one person couldn&rsquo;t scale across 4,000
              accounts. They needed a team of trained customer success
              professionals who could manage the entire customer lifecycle — from
              onboarding through expansion — while their internal team focused
              on product development and engineering.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">Our Solution</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              Contact Center USA deployed a dedicated customer success team of
              20 agents, each trained not just in support ticket resolution but
              in the SaaS company&rsquo;s product architecture, common use cases,
              integration workflows, and upgrade paths. The team was segmented
              into three functional groups: onboarding specialists who managed
              new accounts through their first 30 days, account health managers
              who monitored and nurtured existing accounts, and expansion agents
              who identified upsell and cross-sell opportunities.
            </p>
            <p>
              We built a customer health scoring model that combined product
              usage data from the SaaS company&rsquo;s analytics platform with CRM data
              from Salesforce, support ticket history, and billing information.
              Each account received a composite health score on a 0-100 scale,
              updated weekly, with specific risk factors flagged for attention.
              Agents used these scores to prioritize outreach, focusing on
              accounts trending downward before they reached the point of no
              return.
            </p>
            <p>
              The onboarding overhaul was the most impactful initiative. Instead
              of leaving new customers to self-serve through documentation, our
              onboarding specialists conducted a structured 30-day program that
              included a kickoff call within 24 hours of signup, weekly progress
              check-ins, guided walkthroughs of key features tied to the
              customer&rsquo;s specific use case, and a 30-day review meeting to
              confirm they had achieved their initial value goal. This reduced
              time-to-value by 45% — from 45 days to 25 — and slashed 90-day
              churn by nearly half.
            </p>
            <p>
              For at-risk accounts, we implemented a proactive save program. When
              a customer&rsquo;s health score dropped below 50, the account was
              automatically escalated to a senior retention specialist who
              conducted a deep-dive assessment, identified the root cause of
              dissatisfaction, and proposed a tailored remediation plan —
              whether that was additional training, configuration adjustments, or
              a commercial concession approved by the SaaS company&rsquo;s sales
              leadership.
            </p>
            <p className="text-base">
              This engagement leveraged our{" "}
              <Link
                href="/industries/saas-technology-support"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                SaaS &amp; technology support
              </Link>
              ,{" "}
              <Link
                href="/solutions/technical-support-outsourcing"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                technical support outsourcing
              </Link>
              , and{" "}
              <Link
                href="/solutions/customer-service-outsourcing"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                customer service outsourcing
              </Link>{" "}
              programs.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-center text-3xl font-bold text-white">
            The Results
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-sm"
              >
                <p className="text-4xl font-bold text-red lg:text-5xl">
                  {m.value}
                </p>
                <p className="mt-3 text-sm font-medium text-white/60">
                  {m.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">Key Takeaways</h2>
          <ul className="mt-8 max-w-3xl space-y-5">
            {takeaways.map((t) => (
              <li key={t} className="flex gap-4 text-lg leading-relaxed text-text-muted">
                <CheckCircle className="mt-1 h-6 w-6 shrink-0 text-red" />
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 text-center lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">
            Want Similar Results?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-text-muted">
            Stop losing customers to preventable churn. Our customer success
            teams are ready to help you retain and grow your subscriber base.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get a Free Consultation
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-lg border border-navy/20 px-8 py-4 text-[15px] font-semibold text-navy transition-all hover:border-navy/40 hover:bg-navy/5"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
