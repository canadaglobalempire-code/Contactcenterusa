import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo-config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

const title =
  "E-Commerce Holiday Support Scaling | Case Study | Contact Center USA";
const description =
  "How a mid-size e-commerce retailer scaled from 50 to 400 agents in 3 weeks for Black Friday, achieving 98.5% CSAT during peak season.";
const slug = "ecommerce-holiday-scaling";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/case-studies/${slug}` },
  ...pageMeta(title, description, `/case-studies/${slug}`),
};

const metrics = [
  { value: "98.5%", label: "CSAT During Peak Season" },
  { value: "<4 min", label: "Average Handle Time" },
  { value: "Zero", label: "Missed SLAs" },
  { value: "$1.8M", label: "Saved from Cart Recovery" },
];

const takeaways = [
  "Rapid scaling is possible when you combine a pre-vetted agent pool, streamlined onboarding playbooks, and a technology stack that can spin up new workstations in hours rather than weeks.",
  "Omnichannel support — phone, chat, email, and SMS — is essential during peak season. Customers expect to reach you on their channel of choice, and channel-hopping destroys efficiency if not handled correctly.",
  "An AI chatbot that handles 40% of tier-1 queries frees up human agents for high-value interactions like returns, complaints, and loyalty recovery, dramatically improving AHT and CSAT simultaneously.",
  "Abandoned cart recovery alone can justify the entire seasonal support investment — in this case, the recovery revenue exceeded the cost of the 350 additional agents by a factor of 3x.",
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
  datePublished: "2026-02-10",
  dateModified: "2026-02-10",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://contactcenterusa.com/case-studies/${slug}`,
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://contactcenterusa.com" },
  { name: "Case Studies", url: "https://contactcenterusa.com/case-studies" },
  {
    name: "E-Commerce Holiday Support Scaling",
    url: `https://contactcenterusa.com/case-studies/${slug}`,
  },
]);

export default function EcommerceHolidayScalingPage() {
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
            <span className="text-white/80">E-Commerce Holiday Support Scaling</span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-blue-500/15 px-4 py-1.5 text-sm font-semibold text-blue-300">
            E-Commerce
          </span>
          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Scaling from 50 to 400 Agents in 3 Weeks for Black Friday
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/60">
            A mid-size e-commerce retailer generating $50M in annual revenue
            faced the biggest challenge of the year: a 10x volume spike during
            the Q4 holiday season. After their previous vendor collapsed under
            the pressure the year before, they turned to Contact Center USA to
            build and deploy a 400-agent seasonal workforce in just 21 days —
            while maintaining a 98.5% CSAT and recovering $1.8M in abandoned
            cart revenue.
          </p>
        </div>
      </section>

      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">The Challenge</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              The retailer&rsquo;s Q4 peak season was both their biggest revenue
              opportunity and their greatest operational risk. Between Black
              Friday, Cyber Monday, and the extended holiday shopping window,
              customer contact volume was projected to increase 10x over baseline
              levels — from roughly 500 daily interactions to over 5,000. Their
              in-house team of 50 agents could handle the baseline load, but had
              no capacity for the surge.
            </p>
            <p>
              The prior year told the story of what could go wrong. Their
              previous outsourced vendor promised 300 seasonal agents but
              delivered only 180 — and those who did arrive were undertrained and
              unfamiliar with the retailer&rsquo;s product catalog, return policy, and
              Shopify Plus platform. Ticket backlogs reached 72 hours. SLAs were
              missed across every channel. The CSAT score for Q4 cratered to 71%,
              dragging the annual average down and costing an estimated $2.3M in
              lost repeat business.
            </p>
            <p>
              The retailer&rsquo;s VP of Customer Experience had a clear mandate for
              the new partner: deliver 400 trained agents by Black Friday (21
              days out), maintain a CSAT above 95%, respond to all channels
              within 4 minutes, and keep a handle time under 6 minutes on phone
              calls. Failure was not an option — Q4 represented 40% of their
              annual revenue.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">Our Solution</h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              Contact Center USA activated a three-phase deployment plan the
              moment the contract was signed. Phase one focused on technology
              infrastructure: we provisioned 400 agent workstations with full
              Shopify Plus, Zendesk, and inventory management system access
              within 48 hours. Phase two was talent acquisition — drawing from
              our pre-vetted, US-based agent network, we recruited, background-checked,
              and onboarded 400 agents in under two weeks. Phase three was the
              training sprint: a compressed but rigorous 5-day program covering
              product knowledge, return and exchange policies, shipping timelines,
              de-escalation techniques, and brand voice guidelines.
            </p>
            <p>
              We deployed an omnichannel support architecture spanning phone,
              live chat, email, and SMS. Each channel had dedicated agent pools
              with channel-specific training, but all channels shared a unified
              customer context layer so that a customer who started a chat
              session could seamlessly transition to a phone call without
              repeating themselves. This cross-channel continuity was critical
              during the highest-volume periods when customers frequently
              switched between channels based on wait times.
            </p>
            <p>
              To manage the volume efficiently, we implemented an AI-powered
              chatbot that handled approximately 40% of tier-1 queries — order
              status lookups, return eligibility checks, shipping estimates, and
              FAQ responses. The chatbot was trained on the retailer&rsquo;s specific
              product data and policies, and it escalated complex cases to human
              agents with full context. This significantly reduced the volume
              burden on the human team while maintaining a seamless customer
              experience.
            </p>
            <p>
              We also staffed a dedicated abandoned cart recovery team that
              proactively reached out via SMS and email within 30 minutes of
              cart abandonment, offering personalized assistance, discount
              codes, and real-time inventory checks to convert hesitating
              shoppers.
            </p>
            <p className="text-base">
              The engagement leveraged our{" "}
              <Link
                href="/industries/ecommerce-customer-service-outsourcing"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                e-commerce customer service outsourcing
              </Link>
              ,{" "}
              <Link
                href="/services/omnichannel-contact-center-solutions"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                omnichannel contact center solutions
              </Link>
              , and{" "}
              <Link
                href="/services/live-chat-outsourcing"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                live chat outsourcing
              </Link>{" "}
              capabilities to deliver a seamless seasonal support experience.
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
            From seasonal surges to permanent scaling, our US-based teams are
            built to grow with your business.
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
