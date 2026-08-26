import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Salt Lake City Call Center & BPO Services | US-Based Teams";
const description =
  "US-based call center and BPO services for Salt Lake City & Utah businesses. Silicon Slopes tech support, outbound sales, appointment setting, and customer care.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services salt lake city",
    "salt lake city bpo services",
    "silicon slopes call center",
    "utah customer support outsourcing",
    "salt lake city answering service",
    "utah bpo outsourcing",
    "slc contact center",
    "inside sales call center utah",
  ],
  alternates: { canonical: "/call-center-services-salt-lake-city" },
  ...pageMeta(title, description, "/call-center-services-salt-lake-city"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Salt Lake City",
    heading: "The Silicon Slopes BPO partner for high-growth SaaS, fintech disruptors, outbound sales, and commercial enterprises.",
    accent: "Silicon Slopes BPO partner",
    body: [
      "Contact Center USA is a premier call center provider in Salt Lake City — delivering 100% US-based technical support, inside sales development, customer success, and healthcare scheduling for Silicon Slopes tech leaders, downtown financial firms, and Wasatch Front businesses.",
      "When Utah companies search for call center services Salt Lake City that combine high energy, technical depth, and rigorous execution, they get dedicated Mountain-time-aligned agents and flexible month-to-month contracts.",
    ],
    stats: [
      { stat: "MT", label: "Mountain Time-aligned pods for Utah business hours" },
      { stat: "Tier 1-3", label: "Specialized technical support & SaaS customer care" },
      { stat: "<48h", label: "Fast onboarding & pilot launch for Utah businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Utah Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Why Silicon Slopes technology companies and Utah enterprises choose Contact Center USA.",
    leftTitle: "Local Utah In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "SaaS & Technical Depth",
        left: "Strong local tech talent, but often poached quickly in the competitive Silicon Slopes job market.",
        right: "Dedicated, highly retained US-based technical support agents with ongoing certification.",
        leftYes: true,
      },
      {
        label: "Outbound & Inside Sales",
        left: "Often focused on rigid scripted calling with limited CRM customization.",
        right: "Modern SDR & appointment setting workflows integrated with Salesforce, HubSpot, and Outreach.",
        leftYes: false,
      },
      {
        label: "24/7/365 Coverage",
        left: "Struggles to provide true 24-hour live coverage without expensive overtime premiums.",
        right: "Distributed US workforce providing seamless 24/7/365 coverage across all 4 time zones.",
        leftYes: false,
      },
      {
        label: "Compliance & Security",
        left: "Basic compliance, varying by facility.",
        right: "Full HIPAA, PCI-DSS Level 1, and SOC 2 security protocols.",
        leftYes: false,
      },
      {
        label: "Contract Flexibility",
        left: "Standard annual contracts with fixed seat minimums.",
        right: "Agile month-to-month agreements with zero long-term obligations.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Salt Lake City Businesses in 5 Steps",
    intro:
      "Engineered for the speed and agility demanded by Silicon Slopes enterprises.",
    steps: [
      {
        title: "Utah Discovery Session",
        body: "We review your technical stack, escalation workflows, Mountain Time coverage, and KPI goals.",
      },
      {
        title: "Scripting & Tool Integration",
        body: "Design custom troubleshooting trees and integrate directly with your CRM, ticketing, or billing tools.",
      },
      {
        title: "Agent Technical Training",
        body: "Agents master your software architecture, brand tone, and customer persona requirements.",
      },
      {
        title: "Live Pilot Launch",
        body: "Launch within 48 hours to 2 weeks with continuous QA scoring and supervisor coaching.",
      },
      {
        title: "Scale & Optimize",
        body: "Real-time metric reviews, first-contact resolution tracking, and agile capacity adjustments.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Greater Salt Lake City",
    intro:
      "Tailored BPO support across Utah's leading growth industries.",
    items: [
      {
        icon: "laptop",
        stat: "SaaS",
        title: "Silicon Slopes Technology & Software",
        body: "Tier 1-3 technical help desk, user onboarding, churn prevention, and live chat assistance.",
      },
      {
        icon: "dollar",
        stat: "Outbound",
        title: "Inside Sales & Lead Qualification",
        body: "B2B appointment setting, SDR pipeline generation, and fast inbound lead response.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Life Sciences",
        body: "Patient scheduling, medical device intake, clinic answering, and insurance verification.",
      },
      {
        icon: "shopping-bag",
        stat: "D2C",
        title: "E-Commerce & Consumer Brands",
        body: "Omnichannel customer care, order tracking, returns processing, and VIP customer support.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Utah Companies Choose Contact Center USA",
    image: "/images/cc-agent-multilingual.jpg",
    imagePosition: "right",
    body: [
      "The Silicon Slopes corridor in Salt Lake City, Lehi, and Provo has established itself as one of America's premier hubs for technology innovation, cloud software, and inside sales. Companies here require articulate, tech-savvy agents who move at high velocity.",
      "Contact Center USA delivers 100% US-based domestic agents who integrate smoothly with your internal teams, master your tools, and represent your brand with distinction.",
    ],
    bullets: [
      "100% US-based domestic agents aligned with Mountain Time",
      "Specialized capabilities in SaaS, fintech, inside sales, and healthcare",
      "Full HIPAA, PCI-DSS, and SOC 2 security compliance",
      "Seamless integration with Salesforce, HubSpot, Zendesk, and Jira",
      "Month-to-month contracts with zero long-term lock-in",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Supercharge your Utah customer service and sales pipeline.",
    accent: "Utah customer service and sales pipeline",
    body: "Contact Center USA can deploy a dedicated US support team tailored to your Salt Lake City business in under 48 hours. Request a free quote today.",
    ctaLabel: "Get a Free Salt Lake City Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function SaltLakeCityPage() {
  return (
    <CityPageTemplate
      city="Salt Lake City"
      state="Utah"
      stateAbbr="UT"
      description="Salt Lake City and the Silicon Slopes corridor spanning Lehi, Draper, and Provo represent one of the fastest-growing technology and business centers in the United States. Known for pioneering cloud software enterprises, robust financial services, and high-performance inside sales organizations, Utah businesses require agile, articulate, and technically proficient customer support."
      businessLandscape="From SaaS unicorns and fintech disruptors in Silicon Slopes to regional healthcare systems and outdoor recreation leaders along the Wasatch Front, customer care requires speed, intelligence, and rigorous quality. Contact Center USA provides Salt Lake City companies with dedicated, domestic US agents who accelerate business growth and elevate customer retention."
      industries={["tech", "finance", "healthcare", "ecommerce", "logistics"]}
      population="210K (City) / 1.3M (Metro)"
      businesses="50K+"
      statePage="utah"
      seoContent={[...seoContent, ...cityExtras["salt-lake-city"].seo]}
      faqs={cityExtras["salt-lake-city"].faqs}
    />
  );
}
