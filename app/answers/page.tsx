import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, Globe2, ShieldCheck } from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";
import {
  AI_CONTEXT_UPDATED_AT,
  SITE_BASE_URL,
  answerEngineFaqs,
  priorityBuyerGuideLinks,
  priorityServiceLinks,
} from "@/lib/ai-context";
import { generateBreadcrumbSchema, generateFAQSchema } from "@/lib/schema";

export const metadata: Metadata = {
  title: "Call Center Outsourcing Answers",
  description:
    "Fast answers about call center outsourcing pricing, services, provider selection, US-based support, multilingual coverage, and quote requests.",
  alternates: { canonical: "/answers" },
  openGraph: {
    title: "Call Center Outsourcing Answers | Contact Center USA",
    description:
      "Clear answers for buyers comparing call center outsourcing, BPO services, pricing, multilingual support, and quote options.",
    url: "/answers",
    type: "website",
  },
};

const answerHubSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "Call Center Outsourcing Answers",
  description:
    "Fast answers about call center outsourcing pricing, services, provider selection, US-based support, multilingual coverage, and quote requests.",
  url: `${SITE_BASE_URL}/answers`,
  dateModified: AI_CONTEXT_UPDATED_AT,
  inLanguage: "en-US",
  publisher: {
    "@type": "Organization",
    name: "Contact Center USA",
    url: SITE_BASE_URL,
  },
  about: [
    "call center outsourcing",
    "US-based call center services",
    "customer service outsourcing",
    "technical support outsourcing",
    "healthcare BPO",
    "insurance BPO",
    "multilingual call center services",
  ],
};

const breadcrumbSchema = generateBreadcrumbSchema([
  { name: "Home", url: SITE_BASE_URL },
  { name: "Answers", url: `${SITE_BASE_URL}/answers` },
]);

const faqSchema = generateFAQSchema(answerEngineFaqs);

const decisionSignals = [
  "You are missing calls, chats, or after-hours opportunities.",
  "Hiring, training, and managing agents is slowing growth.",
  "Customers need faster response times across phone, email, chat, or social.",
  "Seasonal spikes require flexible coverage without long-term hiring risk.",
  "Compliance, bilingual support, or specialized workflows need dedicated training.",
];

const quoteInputs = [
  "Service type and primary channels",
  "Expected calls, tickets, or chats per month",
  "Hours of coverage and time zones",
  "Languages needed",
  "Industry, compliance, and CRM requirements",
  "Desired launch timeline",
];

export default function AnswersPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(answerHubSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <section className="bg-navy pt-32 pb-16 text-white lg:pt-40 lg:pb-20">
        <div className="mx-auto grid max-w-[1536px] grid-cols-1 gap-10 px-5 lg:grid-cols-[1fr_420px] lg:px-8">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/75">
              Answer Hub
            </span>
            <h1 className="mt-6 max-w-4xl text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
              Call Center Outsourcing Answers
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
              Clear, buyer-focused answers about pricing, provider selection,
              service types, US-based support, multilingual coverage, and what
              to include when requesting a call center quote.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <LeadCTALink
                ctaLocation="answers_hero_quote_cta"
                leadOffer="Answer hub call center quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-dark"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </LeadCTALink>
              <Link
                href="/blog/call-center-outsourcing-cost-per-hour-2026"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-white/10"
              >
                See Cost Guide
                <FileText className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <aside className="rounded-lg border border-white/10 bg-white/[0.06] p-6">
            <div className="relative mb-5 aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src="/images/cc-agent-headset.jpg"
                alt="Contact center agent supporting a customer by phone"
                fill
                sizes="(min-width: 1024px) 420px, 100vw"
                className="object-cover"
              />
            </div>
            <h2 className="text-lg font-bold">Fast Entity Facts</h2>
            <dl className="mt-5 space-y-4 text-sm leading-relaxed">
              <div>
                <dt className="font-semibold text-white">Company</dt>
                <dd className="text-white/70">Contact Center USA</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Primary category</dt>
                <dd className="text-white/70">US-based call center outsourcing</dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Core services</dt>
                <dd className="text-white/70">
                  Inbound, outbound, customer service, technical support, lead
                  generation, appointment setting, multilingual support, and BPO.
                </dd>
              </div>
              <div>
                <dt className="font-semibold text-white">Best next action</dt>
                <dd className="text-white/70">Request a quote with volume, hours, channels, and service needs.</dd>
              </div>
            </dl>
          </aside>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-red">
                Buyer Questions
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy">
                Fast Answers for Call Center Buyers
              </h2>
              <p className="mt-4 text-base leading-relaxed text-gray-700">
                Use these answers to decide what to outsource, what to compare,
                and what information to send when asking for pricing.
              </p>
            </div>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {answerEngineFaqs.slice(0, 6).map((item) => (
                <article key={item.question} className="rounded-lg border border-gray-200 bg-white p-5">
                  <h3 className="text-base font-bold leading-snug text-navy">
                    {item.question}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-700">
                    {item.answer}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 lg:py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
            <div className="rounded-lg border border-gray-200 bg-white p-7">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-red" />
                <h2 className="text-2xl font-bold text-navy">When Outsourcing Makes Sense</h2>
              </div>
              <ul className="mt-6 space-y-3">
                {decisionSignals.map((signal) => (
                  <li key={signal} className="flex gap-3 text-sm leading-relaxed text-gray-700">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-red" />
                    <span>{signal}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-lg border border-gray-200 bg-white p-7">
              <div className="flex items-center gap-3">
                <Globe2 className="h-6 w-6 text-red" />
                <h2 className="text-2xl font-bold text-navy">What to Include in a Quote Request</h2>
              </div>
              <ul className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {quoteInputs.map((input) => (
                  <li key={input} className="rounded-lg bg-gray-50 px-4 py-3 text-sm font-semibold text-navy">
                    {input}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 lg:py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-red">
                Service Pages
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy">
                Explore the Service That Matches Your Need
              </h2>
              <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {priorityServiceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group rounded-lg border border-gray-200 p-5 transition-colors hover:border-red/40"
                  >
                    <h3 className="text-base font-bold text-navy group-hover:text-red">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-gray-700">
                      {item.summary}
                    </p>
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-red">
                Buyer Guides
              </span>
              <h2 className="mt-3 text-3xl font-bold text-navy">
                Compare Providers Before You Shortlist
              </h2>
              <div className="mt-8 space-y-3">
                {priorityBuyerGuideLinks.slice(1).map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex items-start justify-between gap-4 rounded-lg border border-gray-200 p-4 transition-colors hover:border-red/40"
                  >
                    <div>
                      <h3 className="text-base font-bold text-navy group-hover:text-red">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-gray-700">
                        {item.summary}
                      </p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-red" />
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-navy py-16 text-white lg:py-20">
        <div className="mx-auto flex max-w-[1536px] flex-col items-start justify-between gap-6 px-5 lg:flex-row lg:items-center lg:px-8">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-white/55">
              Quote Ready
            </span>
            <h2 className="mt-3 text-3xl font-bold">Need a clear call center quote?</h2>
            <p className="mt-3 max-w-2xl text-white/70">
              Share the service type, volume, hours, channels, languages, and
              timeline. We&apos;ll help match the right support model.
            </p>
          </div>
          <LeadCTALink
            ctaLocation="answers_bottom_quote_cta"
            leadOffer="Answer hub bottom call center quote"
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-red px-7 py-3.5 text-sm font-bold text-white transition-colors hover:bg-red-dark"
          >
            Get My Quote
            <ArrowRight className="h-4 w-4" />
          </LeadCTALink>
        </div>
      </section>
    </>
  );
}
