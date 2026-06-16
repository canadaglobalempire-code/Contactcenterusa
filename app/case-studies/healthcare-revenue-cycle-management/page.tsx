import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo-config";
import { generateBreadcrumbSchema } from "@/lib/schema";
import { ArrowRight, CheckCircle, ChevronRight } from "lucide-react";

const title =
  "Healthcare Revenue Cycle Management | Case Study | Contact Center USA";
const description =
  "How a mid-size hospital network reduced claim denial rates by 34% and accelerated patient billing with our HIPAA-compliant call center solution.";
const slug = "healthcare-revenue-cycle-management";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `/case-studies/${slug}` },
  ...pageMeta(title, description, `/case-studies/${slug}`),
};

const metrics = [
  { value: "34%", label: "Reduction in Claim Denials" },
  { value: "3 Days", label: "Average Resolution (Down from 12)" },
  { value: "$2.4M", label: "Annual Cost Savings" },
  { value: "98%", label: "Patient Satisfaction" },
];

const takeaways = [
  "HIPAA-certified agents with deep EHR integration can reduce billing errors by over a third in the first quarter alone, delivering measurable ROI within 90 days.",
  "Automated follow-up workflows ensure no claim falls through the cracks — the single largest driver of denial reduction in this engagement.",
  "A dedicated healthcare billing team outperforms shared-agent models by providing disease-state familiarity and payer-specific knowledge that generic agents lack.",
  "Real-time reporting dashboards give hospital CFOs and revenue cycle directors the visibility they need to course-correct before denials pile up.",
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
  datePublished: "2026-01-15",
  dateModified: "2026-01-15",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": `https://contactcenterusa.com/case-studies/${slug}`,
  },
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: "https://contactcenterusa.com" },
  { name: "Case Studies", url: "https://contactcenterusa.com/case-studies" },
  {
    name: "Healthcare Revenue Cycle Management",
    url: `https://contactcenterusa.com/case-studies/${slug}`,
  },
]);

export default function HealthcareRevenueCyclePage() {
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
            <span className="text-white/80">Healthcare Revenue Cycle Management</span>
          </nav>

          <span className="inline-flex items-center rounded-full bg-emerald-500/15 px-4 py-1.5 text-sm font-semibold text-emerald-300">
            Healthcare
          </span>
          <h1 className="mt-6 max-w-4xl text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Healthcare Revenue Cycle Management: Reducing Claim Denials by 34%
          </h1>
          <p className="mt-6 max-w-3xl text-lg text-white/60">
            A mid-size hospital network operating 12 facilities across the
            Southeast partnered with Contact Center USA to overhaul its revenue
            cycle operations. Within six months, claim denial rates dropped by
            34%, average resolution time fell from 12 days to 3, and the network
            saved $2.4 million annually — all while maintaining full HIPAA
            compliance and raising patient satisfaction to 98%.
          </p>
        </div>
      </section>

      <section className="bg-bg-alt py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">
            The Challenge
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              The hospital network&rsquo;s billing department was overwhelmed. With over
              2,000 claims processed weekly across multiple payers, the team relied
              on manual data entry, paper-based workflows, and a shared pool of
              generalist agents who had minimal familiarity with complex billing
              codes. The consequences were severe: a 45% initial claim denial rate,
              an average resolution time of 12 days per denied claim, and a growing
              backlog that strained both staff and patient relationships.
            </p>
            <p>
              Denial management alone consumed 40% of the billing team&rsquo;s working
              hours. Resubmissions were often incomplete, further compounding delays.
              Patients, already navigating difficult health situations, frequently
              received confusing or incorrect billing statements — leading to an
              escalating volume of inbound complaints and a patient satisfaction
              score that had fallen below the network&rsquo;s internal benchmark.
            </p>
            <p>
              The network&rsquo;s leadership recognized that the root cause was not a lack
              of effort but a systemic mismatch between the complexity of modern
              healthcare billing and the capabilities of the existing workforce.
              They needed a partner who could supply HIPAA-certified billing
              specialists, integrate seamlessly with their Epic EHR platform, and
              deploy automated workflows that would prevent denials before they
              occurred — all within a budget that made financial sense.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <h2 className="text-3xl font-bold text-text-dark">
            Our Solution
          </h2>
          <div className="mt-8 max-w-3xl space-y-6 text-lg leading-relaxed text-text-muted">
            <p>
              Contact Center USA deployed a dedicated team of 35
              HIPAA-certified billing agents who were specifically trained in the
              network&rsquo;s payer mix, common denial reason codes, and
              specialty-specific billing requirements. Unlike generalist call
              center agents, each specialist was assigned to a specific facility
              and payer combination, ensuring deep familiarity with the nuances
              of each claim type.
            </p>
            <p>
              We integrated our agent workflows directly into the hospital&rsquo;s
              existing Epic EHR system through a secure, HIPAA-compliant API
              bridge. This integration eliminated duplicate data entry, gave
              agents real-time visibility into claim status, and enabled automated
              triggers for follow-up actions. When a claim was denied, the system
              immediately routed it to the appropriate specialist along with the
              denial reason code, required corrective documentation, and a
              prioritized action plan.
            </p>
            <p>
              Beyond reactive denial management, we implemented proactive
              workflows designed to catch errors before submission. Our agents
              conducted pre-billing audits on high-risk claims — those involving
              multiple procedure codes, out-of-network providers, or
              prior-authorization requirements — flagging potential issues for
              clinical staff to resolve before the claim ever reached the payer.
              This upstream approach addressed the most common denial triggers at
              their source rather than after the fact.
            </p>
            <p>
              We also established a dedicated inbound billing inquiry line for
              patients, staffed by agents trained to explain charges, set up
              payment plans, and resolve disputes in a single call. This reduced
              the burden on the hospital&rsquo;s front-desk staff and gave patients a
              clear, empathetic point of contact for all billing questions.
            </p>
            <p className="text-base">
              Services deployed included{" "}
              <Link
                href="/industries/healthcare-call-center-services"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                healthcare call center services
              </Link>
              ,{" "}
              <Link
                href="/solutions/inbound-call-center-services"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                inbound call center services
              </Link>
              , and{" "}
              <Link
                href="/services/back-office-outsourcing"
                className="font-medium text-red underline decoration-red/30 underline-offset-4 hover:decoration-red"
              >
                back-office support
              </Link>{" "}
              tailored specifically for revenue cycle operations.
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
          <h2 className="text-3xl font-bold text-text-dark">
            Key Takeaways
          </h2>
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
            Whether you&rsquo;re a hospital network, physician group, or health system,
            our HIPAA-certified teams are ready to transform your revenue cycle.
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
