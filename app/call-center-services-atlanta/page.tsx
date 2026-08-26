import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Atlanta Call Center & BPO Services | US-Based Teams";
const description =
  "US-based call center and BPO services for Atlanta businesses. Inbound support, fintech answering, healthcare dispatch, and lead generation teams.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services atlanta",
    "atlanta bpo services",
    "atlanta call center outsourcing",
    "georgia customer support outsourcing",
    "fintech call center atlanta",
    "atlanta answering service",
    "buckhead bpo services",
    "atlanta contact center",
  ],
  alternates: { canonical: "/call-center-services-atlanta" },
  ...pageMeta(title, description, "/call-center-services-atlanta"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Atlanta",
    heading: "The Atlanta BPO services partner for Fortune 500 enterprises, fintech disruptors, logistics giants, and healthcare leaders.",
    accent: "Fortune 500 enterprises",
    body: [
      "Contact Center USA is a top-ranked call center provider in Atlanta — delivering 100% US-based customer service, technical support, and sales outreach for Buckhead corporations, Midtown technology startups, and Greater Atlanta healthcare and logistics leaders.",
      "When Atlanta companies search for call center services Atlanta that combine southern hospitality with high-speed execution and strict regulatory compliance, they get dedicated Eastern-time-aligned agents with no long-term contracts.",
    ],
    stats: [
      { stat: "ET", label: "Dedicated Eastern Time pod for Atlanta business hours" },
      { stat: "99.8%", label: "First-call resolution focus across all customer channels" },
      { stat: "<48h", label: "Fast onboarding & pilot launch for Georgia businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Atlanta Provider vs. Contact Center USA Nationwide BPO",
    intro:
      "Atlanta enterprises comparing outsourced customer service options choose Contact Center USA for our reliability, technological capability, and scale.",
    leftTitle: "Local Atlanta In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Operational Scale",
        left: "Limited physical floor space; struggles during unexpected volume surges or seasonal peaks.",
        right: "Elastic US-wide capacity capable of scaling from 5 to 100+ agents on demand.",
        leftYes: false,
      },
      {
        label: "Fintech & Payments Security",
        left: "Basic PCI compliance, often lacking dedicated multi-factor authentication protocols.",
        right: "Full PCI-DSS Level 1, SOC-2, and financial data encryption stack.",
        leftYes: false,
      },
      {
        label: "Southern Cultural Fit",
        left: "Native Atlanta presence with local accents.",
        right: "Dedicated US team trained in courteous, empathetic, and professional communication.",
        leftYes: true,
      },
      {
        label: "24/7/365 Coverage",
        left: "Extra surcharges for weekend, holiday, and late-night answering coverage.",
        right: "True 24/7/365 multi-shift coverage included with no hidden holiday premiums.",
        leftYes: false,
      },
      {
        label: "Contract Terms",
        left: "Rigid multi-year commitments with minimum volume guarantees.",
        right: "Flexible month-to-month agreements that earn your business every single day.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Atlanta Businesses in 5 Steps",
    intro:
      "From Midtown fintech innovators to Perimeter healthcare networks, onboarding is seamless and rapid.",
    steps: [
      {
        title: "Atlanta Discovery Call",
        body: "30-minute operational review of call volumes, systems, CRM workflows, and KPI goals.",
      },
      {
        title: "Solution & Script Design",
        body: "Tailored call scripts, escalation paths, and API integrations with Salesforce, HubSpot, or Zendesk.",
      },
      {
        title: "Agent Certification",
        body: "Intensive training on your product line, brand tone, and industry-specific regulations.",
      },
      {
        title: "Go-Live & Quality Assurance",
        body: "Soft launch within 48 hours to 2 weeks backed by real-time call monitoring and supervisor support.",
      },
      {
        title: "Continuous Optimization",
        body: "Bi-weekly metric reviews, CSAT benchmarking, and agile staffing adjustments.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Greater Atlanta",
    intro:
      "Supporting the key economic drivers of Georgia and the Southeast.",
    items: [
      {
        icon: "landmark",
        stat: "Fintech",
        title: "Financial Technology & Banking",
        body: "Transaction inquiries, fraud alert response, and cardholder support in Transaction Alley.",
      },
      {
        icon: "truck",
        stat: "Logistics",
        title: "Supply Chain & Logistics",
        body: "24/7 freight tracking, carrier dispatch, driver support, and emergency delivery routing.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare Systems & Clinics",
        body: "Patient scheduling, doctor answering service, prior auth intake, and telehealth triage.",
      },
      {
        icon: "laptop",
        stat: "SaaS",
        title: "Technology & Software Support",
        body: "Tier 1-3 help desk, bug intake, user onboarding, and live chat technical assistance.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Atlanta Businesses Trust Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "As the business capital of the Southeast, Atlanta commands high standards for corporate communication, brand reputation, and speed to market. Offshore call centers frequently disappoint customers with rigid scripts and language barriers.",
      "Contact Center USA delivers 100% US-based professional agents who understand your customers, communicate with warmth and precision, and represent your brand with distinction.",
    ],
    bullets: [
      "100% domestic US-based agents aligned with Eastern Time",
      "Full HIPAA, PCI-DSS, and SOC 2 security compliance",
      "Omnichannel integration across voice, chat, email, and SMS",
      "Transparent per-minute and dedicated agent pricing models",
      "Month-to-month contracts with zero long-term obligations",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Upgrade your Atlanta customer support operations today.",
    accent: "Atlanta customer support",
    body: "Get a customized quote for your Atlanta business in minutes. We can deploy a dedicated US support team tailored to your industry in under 48 hours.",
    ctaLabel: "Get a Free Atlanta Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function AtlantaPage() {
  return (
    <CityPageTemplate
      city="Atlanta"
      state="Georgia"
      stateAbbr="GA"
      description="Atlanta is the economic powerhouse of the Southeast, home to the world's busiest airport and one of the highest concentrations of Fortune 500 headquarters in the United States. From the financial technology leaders of 'Transaction Alley' to thriving logistics corridors and renowned healthcare centers, Atlanta businesses operate in high-velocity markets where prompt, professional customer communication is paramount."
      businessLandscape="Atlanta's rapid commercial growth demands agile, high-caliber customer service operations. Whether supporting complex fintech transactions in Midtown, handling logistics dispatch across I-85 corridors, or delivering compassionate patient scheduling in Buckhead, Contact Center USA provides Atlanta companies with dedicated US agents who elevate customer loyalty and operational efficiency."
      industries={["finance", "logistics", "healthcare", "tech", "ecommerce"]}
      population="500K (City) / 6.3M (Metro)"
      businesses="150K+"
      statePage="georgia"
      answeringPost="answering-service-atlanta"
      seoContent={[...seoContent, ...cityExtras["atlanta"].seo]}
      faqs={cityExtras["atlanta"].faqs}
    />
  );
}
