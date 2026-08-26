import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Portland Call Center & BPO Services | US-Based Teams";
const description =
  "US-based call center and BPO services for Portland & Pacific Northwest businesses. E-commerce support, tech help desk, outdoor apparel, and green energy.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services portland",
    "portland bpo services",
    "portland call center outsourcing",
    "oregon customer support outsourcing",
    "pacific northwest call center",
    "portland answering service",
    "silicon forest customer care",
    "portland contact center",
  ],
  alternates: { canonical: "/call-center-services-portland" },
  ...pageMeta(title, description, "/call-center-services-portland"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Portland",
    heading: "The Pacific Northwest BPO partner for Silicon Forest tech, direct-to-consumer e-commerce, green energy, and outdoor apparel brands.",
    accent: "Silicon Forest tech, direct-to-consumer e-commerce",
    body: [
      "Contact Center USA provides premier call center and BPO outsourcing for businesses across Portland, Beaverton, Hillsboro, and the Pacific Northwest. We deliver 100% US-based customer service, technical support, and order management aligned with Pacific Time.",
      "When Portland businesses search for call center services Portland that embody authenticity, thoughtful communication, and technical acumen, they get dedicated US agents with no long-term contracts.",
    ],
    stats: [
      { stat: "PT", label: "Dedicated Pacific Time pod for Pacific Northwest business hours" },
      { stat: "24/7/365", label: "Follow-the-sun customer care across voice, chat, and email" },
      { stat: "<48h", label: "Fast onboarding & pilot deployment for Oregon firms" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Boutique Agency vs. Contact Center USA Nationwide BPO",
    intro:
      "Why Oregon tech, retail, and service brands partner with Contact Center USA.",
    leftTitle: "Local Portland In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Pacific Northwest Cultural Fit",
        left: "Authentic local presence with regional awareness.",
        right: "Articulate US agents trained on thoughtful, authentic, and polite customer engagement.",
        leftYes: true,
      },
      {
        label: "E-Commerce & Omnichannel Skill",
        left: "Often focused strictly on phone calls with limited chat or social capabilities.",
        right: "Seamless omnichannel support across Shopify, Gorgias, Zendesk, live chat, and SMS.",
        leftYes: false,
      },
      {
        label: "Operational Scale & Surge",
        left: "Small agent pools struggle during Q4 holiday shopping spikes.",
        right: "Elastic domestic capacity that scales up rapidly for holiday and promotional surges.",
        leftYes: false,
      },
      {
        label: "24/7 After-Hours Coverage",
        left: "Expensive after-hours surcharges or unattended voicemail boxes.",
        right: "True 24/7/365 live coverage included with no hidden holiday premiums.",
        leftYes: false,
      },
      {
        label: "Contract Flexibility",
        left: "Often locks clients into rigid 12-month agreements.",
        right: "Agile month-to-month contracts that adapt to your sales cycle.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Portland Businesses in 5 Steps",
    intro:
      "Our onboarding is straightforward, structured, and customized to your tech stack.",
    steps: [
      {
        title: "Pacific Northwest Discovery",
        body: "We review your Pacific Time volume curves, software integrations (Shopify, Zendesk, Gorgias), and brand voice.",
      },
      {
        title: "Scripting & Workflow Engineering",
        body: "Develop brand-aligned customer responses, return/refund rules, and escalation paths.",
      },
      {
        title: "Agent Certification",
        body: "Agents master your product specifications, brand ethos, and customer service guidelines.",
      },
      {
        title: "Live Pilot Deployment",
        body: "Launch within 48 hours to 2 weeks with continuous QA scoring and supervisor coaching.",
      },
      {
        title: "Scale & Analytics",
        body: "Weekly performance reporting, CSAT tracking, and agile capacity adjustments.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Greater Portland",
    intro:
      "Specialized BPO support across Oregon's key innovation sectors.",
    items: [
      {
        icon: "shopping-bag",
        stat: "D2C",
        title: "E-Commerce & Direct-to-Consumer",
        body: "Order status, returns/exchanges, subscription management, and omnichannel chat support.",
      },
      {
        icon: "laptop",
        stat: "Tech",
        title: "Silicon Forest Technology & SaaS",
        body: "Tier 1-3 help desk, product onboarding, bug triage, and live chat technical assistance.",
      },
      {
        icon: "zap",
        stat: "GreenTech",
        title: "Clean Technology & Green Energy",
        body: "Customer billing support, solar inquiries, and service technician dispatch.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Wellness",
        body: "Patient scheduling, clinic answering service, medical intake, and telehealth support.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Portland Companies Partner with Contact Center USA",
    image: "/images/cc-agent-headset.jpg",
    imagePosition: "right",
    body: [
      "Portland is a vibrant center for direct-to-consumer lifestyle brands, Silicon Forest technology innovators, and progressive healthcare organizations. Customers expect authentic, conversational, and thoughtful service that builds genuine brand affinity.",
      "Contact Center USA delivers 100% US-based domestic agents who handle every interaction with empathy, intelligence, and brand fidelity.",
    ],
    bullets: [
      "100% US-based domestic agents aligned with Pacific Time",
      "Specialized e-commerce, technology, and healthcare workflows",
      "Full HIPAA, PCI-DSS, and SOC 2 security compliance",
      "Seamless integration with Shopify, Zendesk, Gorgias, and Salesforce",
      "No long-term contracts — month-to-month flexibility",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Upgrade your customer support with Pacific Time US agents.",
    accent: "Pacific Time US agents",
    body: "Contact Center USA can deploy a dedicated US support team tailored to your Portland business in under 48 hours. Request a free quote today.",
    ctaLabel: "Get a Free Portland Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function PortlandPage() {
  return (
    <CityPageTemplate
      city="Portland"
      state="Oregon"
      stateAbbr="OR"
      description="Portland is the economic and cultural heart of Oregon, celebrated for its Silicon Forest technology cluster in Hillsboro and Beaverton, its global athletic and outdoor apparel giants, and a booming direct-to-consumer e-commerce ecosystem. In a region where authenticity, sustainability, and quality are deeply valued, businesses require customer support that reflects those high ideals."
      businessLandscape="From high-growth SaaS and semiconductor firms to direct-to-consumer retail innovators and sustainable energy providers, customer support in the Pacific Northwest requires thoughtful, articulate, and brand-aligned communication. Contact Center USA provides Portland businesses with dedicated, domestic US agents who protect and enhance your brand equity 24/7."
      industries={["ecommerce", "tech", "healthcare", "energy", "retail"]}
      population="650K (City) / 2.5M (Metro)"
      businesses="70K+"
      answeringPost="answering-service-portland"
      seoContent={[...seoContent, ...cityExtras["portland"].seo]}
      faqs={cityExtras["portland"].faqs}
    />
  );
}
