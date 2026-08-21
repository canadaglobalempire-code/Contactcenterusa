import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  industry: string;
  title: string;
  excerpt: string;
  metric: string;
  metricLabel: string;
  href: string;
  image: string;
  color: string;
}

const caseStudies: CaseStudy[] = [
  {
    industry: "Healthcare",
    title: "Healthcare Revenue Cycle Management: Reducing Claim Denials by 34%",
    excerpt:
      "A mid-size hospital network was losing revenue to denied claims and slow patient billing. HIPAA-compliant agents trained on payer rules and medical terminology cut the denial rate by 34% and accelerated the billing cycle.",
    metric: "34%",
    metricLabel: "Fewer Claim Denials",
    image: "/images/case-study-healthcare.jpg",
    color: "bg-emerald-100 text-emerald-700",
    href: "/case-studies/healthcare-revenue-cycle-management",
  },
  {
    industry: "Insurance",
    title: "Cutting Claims Processing Time by 60% for a Regional Insurance Carrier",
    excerpt:
      "A regional carrier needed faster first notice of loss handling without sacrificing accuracy. Specialized claims intake agents cut processing time by 60% and lifted customer satisfaction by 22 points.",
    metric: "60%",
    metricLabel: "Faster Claims Processing",
    image: "/images/case-study-financial.jpg",
    color: "bg-blue-100 text-blue-700",
    href: "/case-studies/insurance-claims-processing",
  },
  {
    industry: "E-commerce",
    title: "Scaling from 50 to 400 Agents in 3 Weeks for Black Friday",
    excerpt:
      "A mid-size retailer needed eight times its normal capacity for peak season with no drop in quality. We scaled from 50 to 400 trained agents in three weeks and held 98.5% CSAT through Black Friday.",
    metric: "8x",
    metricLabel: "Peak Season Scale",
    image: "/images/case-study-ecommerce.jpg",
    color: "bg-orange-100 text-orange-700",
    href: "/case-studies/ecommerce-holiday-scaling",
  },
  {
    industry: "SaaS & Technology",
    title: "Reducing Churn by 28% with Proactive Customer Success Support",
    excerpt:
      "A B2B SaaS company was losing accounts before renewal. A proactive customer success programme reduced churn by 28% and moved NPS from 32 to 67 inside two quarters.",
    metric: "28%",
    metricLabel: "Churn Reduction",
    image: "/images/case-study-technology.jpg",
    color: "bg-violet-100 text-violet-700",
    href: "/case-studies/saas-customer-retention",
  },
  {
    industry: "Travel & Hospitality",
    title: "Processing 50,000+ Rebookings During a Global Travel Disruption",
    excerpt:
      "When a global disruption grounded flights, a travel management company faced an unprecedented rebooking surge. Our team processed over 50,000 rebookings at a 96% resolution rate and a 4-minute average handle time.",
    metric: "50K+",
    metricLabel: "Rebookings Handled",
    image: "/images/case-study-ecommerce.jpg",
    color: "bg-sky-100 text-sky-700",
    href: "/case-studies/travel-crisis-management",
  },
];

export function CaseStudiesContent() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <div
          >
            <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
              Case Studies
            </span>
            <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
              Client <span className="text-red">Success</span> Stories
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
              See how businesses across industries have transformed their
              customer experience and achieved measurable results with Contact
              Center USA.
            </p>
          </div>
        </div>
      </section>

      {/* Case Study Cards Grid */}
      <section className="bg-bg-alt py-20 lg:py-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid gap-8 md:grid-cols-2">
            {caseStudies.map((study) => (
              <div
                key={study.industry}
              >
                <Link
                  href={study.href}
                  className="group block h-full overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-all hover:shadow-lg"
                >
                  {/* Image */}
                  <div className="relative h-56 w-full overflow-hidden bg-navy/5">
                    <div className="flex h-full w-full items-center justify-center">
                      <div className="text-center">
                        <span className="text-5xl font-bold text-navy/10">
                          {study.metric}
                        </span>
                        <p className="mt-1 text-sm text-navy/30">
                          {study.metricLabel}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    {/* Industry Badge */}
                    <span
                      className={`inline-block rounded-full px-3 py-1 text-xs font-semibold ${study.color}`}
                    >
                      {study.industry}
                    </span>

                    <h2 className="mt-4 text-xl font-bold text-text-dark group-hover:text-navy transition-colors">
                      {study.title}
                    </h2>

                    <p className="mt-3 text-text-muted leading-relaxed">
                      {study.excerpt}
                    </p>

                    {/* Key Metric */}
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                      <div>
                        <p className="text-2xl font-bold text-red">
                          {study.metric}
                        </p>
                        <p className="text-sm text-text-muted">
                          {study.metricLabel}
                        </p>
                      </div>
                      <span className="inline-flex items-center gap-1 text-sm font-semibold text-navy transition-all group-hover:gap-2">
                        Read Case Study
                        <ArrowRight className="h-4 w-4" />
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-20 lg:py-28">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
          <div
          >
            <h2 className="text-3xl font-bold text-white sm:text-4xl">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-white/60">
              Join the hundreds of businesses that have transformed their
              customer service operations with Contact Center USA. Get a free
              consultation today.
            </p>
            <Link
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark"
            >
              Get Started Today
              <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
