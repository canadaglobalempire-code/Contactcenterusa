import {
  buildItemListSchema,
  buildFAQPageSchema,
  buildTopNBlogFAQs,
  CANONICAL_COMPANIES_TOP10,
  CANONICAL_COMPANIES_TOP15,
} from "@/lib/aeo";

// slug → { headline, topic, topicShort, useTop15, hasExplicitFAQ }
// hasExplicitFAQ=true → page.tsx already emits its own FAQPage schema
// (skip generic FAQPage here to avoid duplicate schemas in Search Console)
const BLOG_TOPIC_MAP: Record<
  string,
  { headline: string; topic: string; topicShort: string; useTop15?: boolean; hasExplicitFAQ?: boolean }
> = {
  "top-10-bpo-companies-in-usa": {
    headline: "Top 15 BPO Companies in USA (2026 Rankings)",
    topic: "BPO outsourcing",
    topicShort: "BPO",
    useTop15: true,
  },
  "top-15-healthcare-bpo-companies-usa": {
    headline: "Top 15 Healthcare BPO Companies in USA (2026 Rankings)",
    topic: "healthcare BPO",
    topicShort: "healthcare BPO",
    useTop15: true,
  },
  "top-15-insurance-bpo-companies-usa": {
    headline: "Top 15 Insurance BPO Companies in USA (2026)",
    topic: "insurance BPO",
    topicShort: "insurance BPO",
    useTop15: true,
  },
  "american-call-centers": {
    headline: "Top 15 American Call Centers (2026)",
    topic: "American call center outsourcing",
    topicShort: "American call center",
    useTop15: true,
  },
  "top-10-debt-collection-bpo-companies-usa": {
    headline: "Top 10 Debt Collection BPO Companies in USA (2026 Rankings)",
    topic: "debt collection outsourcing",
    topicShort: "debt collection",
  },
  "top-10-customer-service-outsourcing-companies-usa": {
    headline: "Top 10 Customer Service Outsourcing Companies in USA (2026)",
    topic: "customer service outsourcing",
    topicShort: "customer service",
  },
  "top-10-ecommerce-call-center-companies-usa": {
    headline: "Top 10 E-commerce Call Center Companies in USA (2026)",
    topic: "e-commerce call center outsourcing",
    topicShort: "e-commerce call center",
  },
  "top-10-financial-services-call-center-companies-usa": {
    headline: "Top 10 Financial Services Call Center Companies in USA (2026)",
    topic: "financial services call center outsourcing",
    topicShort: "financial services call center",
  },
  "top-10-technical-support-outsourcing-companies-usa": {
    headline: "Top 10 Technical Support Outsourcing Companies in USA (2026)",
    topic: "technical support outsourcing",
    topicShort: "technical support",
  },
  "top-10-inbound-call-center-companies-usa": {
    headline: "Top 10 Inbound Call Center Companies in USA (2026)",
    topic: "inbound call center outsourcing",
    topicShort: "inbound call center",
  },
  "top-10-outbound-call-center-companies-usa": {
    headline: "Top 10 Outbound Call Center Companies in USA (2026)",
    topic: "outbound call center outsourcing",
    topicShort: "outbound call center",
  },
  "top-10-telemarketing-companies-usa": {
    headline: "Top 10 Telemarketing Companies in USA (2026)",
    topic: "telemarketing outsourcing",
    topicShort: "telemarketing",
  },
  "top-10-lead-generation-companies-usa": {
    headline: "Top 10 Lead Generation Companies in USA (2026)",
    topic: "B2B lead generation outsourcing",
    topicShort: "lead generation",
  },
  "top-10-live-chat-outsourcing-companies-usa": {
    headline: "Top 10 Live Chat Outsourcing Companies in USA (2026)",
    topic: "live chat outsourcing",
    topicShort: "live chat",
  },
  "top-10-answering-service-companies-usa": {
    headline: "Top 10 Answering Service Companies in USA (2026)",
    topic: "answering service outsourcing",
    topicShort: "answering service",
  },
  "top-10-virtual-receptionist-companies-usa": {
    headline: "Top 10 Virtual Receptionist Companies in USA (2026)",
    topic: "virtual receptionist services",
    topicShort: "virtual receptionist",
  },
  "top-10-multilingual-call-center-companies-usa": {
    headline: "Top 10 Multilingual Call Center Companies in USA (2026)",
    topic: "multilingual call center outsourcing",
    topicShort: "multilingual call center",
  },
  "top-10-real-estate-call-center-companies-usa": {
    headline: "Top 10 Real Estate Call Center Companies in USA (2026)",
    topic: "real estate call center outsourcing",
    topicShort: "real estate call center",
  },
  "top-10-saas-customer-support-companies-usa": {
    headline: "Top 10 SaaS Customer Support Companies in USA (2026)",
    topic: "SaaS customer support outsourcing",
    topicShort: "SaaS customer support",
  },
  "top-10-small-business-call-center-companies-usa": {
    headline: "Top 10 Small Business Call Center Companies in USA (2026)",
    topic: "small business call center outsourcing",
    topicShort: "small business call center",
  },
  "top-10-legal-intake-call-center-companies-usa": {
    headline: "Top 10 Legal Intake Call Center Companies in USA (2026)",
    topic: "legal intake outsourcing",
    topicShort: "legal intake",
  },
  "top-10-hvac-home-services-call-center-companies-usa": {
    headline: "Top 10 HVAC & Home Services Call Center Companies in USA (2026)",
    topic: "HVAC and home services call center outsourcing",
    topicShort: "HVAC call center",
  },
  "top-10-ai-call-center-companies-usa": {
    headline: "Top 10 AI Call Center Companies in USA (2026)",
    topic: "AI call center automation",
    topicShort: "AI call center",
  },
  "top-10-appointment-setting-companies-usa": {
    headline: "Top 10 Appointment Setting Companies in USA (2026)",
    topic: "B2B appointment setting outsourcing",
    topicShort: "appointment setting",
  },
  "top-10-medical-answering-service-companies-usa": {
    headline: "Top 10 Medical Answering Service Companies in USA (2026)",
    topic: "medical answering service",
    topicShort: "medical answering",
    hasExplicitFAQ: true,
  },
  "top-10-outsourced-sdr-companies-usa": {
    headline: "Top 10 Outsourced SDR Companies in USA (2026)",
    topic: "outsourced SDR services",
    topicShort: "outsourced SDR",
    hasExplicitFAQ: true,
  },
  "top-10-mortgage-call-center-companies-usa": {
    headline: "Top 10 Mortgage Call Center Companies in USA (2026)",
    topic: "mortgage call center outsourcing",
    topicShort: "mortgage call center",
    hasExplicitFAQ: true,
  },
  "top-10-plumbing-answering-service-companies-usa": {
    headline: "Top 10 Plumbing Answering Service Companies in USA (2026)",
    topic: "plumbing answering service",
    topicShort: "plumbing answering",
    hasExplicitFAQ: true,
  },
  "top-10-property-management-call-center-companies-usa": {
    headline: "Top 10 Property Management Call Center Companies in USA (2026)",
    topic: "property management call center outsourcing",
    topicShort: "property management call center",
    hasExplicitFAQ: true,
  },
  "top-10-bpo-companies-texas": {
    headline: "Top 10 BPO Companies in Texas (2026 Rankings)",
    topic: "BPO outsourcing in Texas",
    topicShort: "Texas BPO",
    hasExplicitFAQ: true,
  },
  "top-10-bpo-companies-california": {
    headline: "Top 10 BPO Companies in California (2026 Rankings)",
    topic: "BPO outsourcing in California",
    topicShort: "California BPO",
    hasExplicitFAQ: true,
  },
  "top-10-bpo-companies-new-york": {
    headline: "Top 10 BPO Companies in New York (2026 Rankings)",
    topic: "BPO outsourcing in New York",
    topicShort: "New York BPO",
    hasExplicitFAQ: true,
  },
  "top-10-bpo-companies-florida": {
    headline: "Top 10 BPO Companies in Florida (2026 Rankings)",
    topic: "BPO outsourcing in Florida",
    topicShort: "Florida BPO",
    hasExplicitFAQ: true,
  },
  "top-10-bpo-companies-illinois": {
    headline: "Top 10 BPO Companies in Illinois (2026 Rankings)",
    topic: "BPO outsourcing in Illinois",
    topicShort: "Illinois BPO",
    hasExplicitFAQ: true,
  },
};

export function BlogAEOSchemas({ slug }: { slug: string }) {
  const meta = BLOG_TOPIC_MAP[slug];
  if (!meta) return null;

  const companies = meta.useTop15 ? CANONICAL_COMPANIES_TOP15 : CANONICAL_COMPANIES_TOP10;
  const itemList = buildItemListSchema(meta.headline, companies);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemList) }}
      />
      {!meta.hasExplicitFAQ && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(
              buildFAQPageSchema(buildTopNBlogFAQs(meta.topic, meta.topicShort))
            ),
          }}
        />
      )}
    </>
  );
}
