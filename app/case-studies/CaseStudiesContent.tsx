import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface CaseStudy {
  industry: string;
  title: string;
  excerpt: string;
  metric: string;
  metricLabel: string;
  image: string;
  color: string;
}

const caseStudies: CaseStudy[] = [
  {
    industry: "Healthcare",
    title: "How a Healthcare Provider Reduced Call Wait Times by 65%",
    excerpt:
      "A multi-location healthcare provider was struggling with long hold times and missed patient calls. By partnering with Contact Center USA, they deployed HIPAA-compliant agents trained in medical terminology and appointment scheduling, dramatically improving patient access and satisfaction.",
    metric: "65%",
    metricLabel: "Reduction in Wait Times",
    image: "/images/case-study-healthcare.jpg",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    industry: "Ecommerce",
    title: "Scaling Customer Support for a $50M Ecommerce Brand",
    excerpt:
      "A fast-growing ecommerce brand needed to scale customer support during peak seasons without sacrificing quality. Contact Center USA provided flexible, dedicated agents who handled order inquiries, returns, and product questions, helping the brand maintain a 98% customer satisfaction rate.",
    metric: "98%",
    metricLabel: "Customer Satisfaction",
    image: "/images/case-study-ecommerce.jpg",
    color: "bg-blue-100 text-blue-700",
  },
  {
    industry: "Financial Services",
    title: "Achieving 99.9% Compliance in Financial Services",
    excerpt:
      "A financial services firm required strict PCI DSS and regulatory compliance for every customer interaction. Contact Center USA implemented rigorous compliance protocols, specialized agent training, and real-time quality monitoring to achieve near-perfect compliance rates across all channels.",
    metric: "99.9%",
    metricLabel: "Compliance Rate",
    image: "/images/case-study-financial.jpg",
    color: "bg-amber-100 text-amber-700",
  },
  {
    industry: "Technology",
    title: "Supporting 100K+ Users for a SaaS Platform",
    excerpt:
      "A rapidly growing SaaS platform needed a scalable support solution for their expanding user base. Contact Center USA built a dedicated technical support team that handled tier-1 and tier-2 support tickets, reducing resolution times and improving NPS scores across the board.",
    metric: "100K+",
    metricLabel: "Users Supported",
    image: "/images/case-study-technology.jpg",
    color: "bg-purple-100 text-purple-700",
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
            {caseStudies.map((study, index) => (
              <div
                key={study.industry}
              >
                <Link
                  href="/contact"
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
