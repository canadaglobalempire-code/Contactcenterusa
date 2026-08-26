import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Denver Call Center & BPO Services | US-Based Teams";
const description =
  "US-based call center and BPO services for Denver & Colorado businesses. Mountain Time support for SaaS, aerospace, healthcare, and financial services.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services denver",
    "denver bpo services",
    "denver call center outsourcing",
    "colorado customer support outsourcing",
    "mountain time call center",
    "denver answering service",
    "boulder tech call center",
    "denver contact center",
  ],
  alternates: { canonical: "/call-center-services-denver" },
  ...pageMeta(title, description, "/call-center-services-denver"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Denver",
    heading: "The Mountain West BPO partner for Denver tech innovators, aerospace pioneers, healthcare networks, and outdoor brands.",
    accent: "Denver tech innovators",
    body: [
      "Contact Center USA provides premier call center and BPO outsourcing for businesses throughout Denver, Boulder, and the Colorado Front Range. We deliver 100% US-based customer service, technical support, and appointment setting tailored to Mountain Time operations.",
      "When Denver companies search for call center services Denver with technical proficiency and reliable 24/7 coverage, they get agents who integrate seamlessly into modern tech stacks with flexible month-to-month contracts.",
    ],
    stats: [
      { stat: "MT", label: "Mountain Time-aligned pods for Front Range business hours" },
      { stat: "Tier 1-3", label: "Technical support & SaaS customer care capabilities" },
      { stat: "<48h", label: "Fast onboarding & pilot deployment for Colorado firms" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Denver In-City Facility vs. Contact Center USA Nationwide BPO",
    intro:
      "Comparing customer service options for Denver and Front Range enterprises.",
    leftTitle: "Local Denver In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Mountain Time Alignment",
        left: "Covers MT business hours well but often charges high premiums for late night coverage.",
        right: "Dedicated MT team with true 24/7/365 follow-the-sun US coverage at standard rates.",
        leftYes: true,
      },
      {
        label: "Labor & Real Estate Costs",
        left: "Denver and Boulder wage floors inflate agent seat costs significantly.",
        right: "Nationwide domestic talent pool providing premium US service without local cost bloat.",
        leftYes: false,
      },
      {
        label: "SaaS & Technical Depth",
        left: "Generalist agents requiring extensive onboarding for technical platforms.",
        right: "Pre-vetted technical support agents proficient in Jira, Zendesk, Salesforce, and API tools.",
        leftYes: false,
      },
      {
        label: "Winter Storm Resilience",
        left: "Severe Colorado snowstorms can disrupt single-facility commuting and attendance.",
        right: "Distributed US workforce across all 4 time zones ensures uninterrupted service.",
        leftYes: false,
      },
      {
        label: "Contract Terms",
        left: "Standard 12-month lock-in contracts with minimum seat commitments.",
        right: "Agile month-to-month contracts that scale up or down as your business requires.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Denver Businesses in 5 Steps",
    intro:
      "Our onboarding process is engineered for speed, accuracy, and seamless technical integration.",
    steps: [
      {
        title: "Technical Discovery",
        body: "We review your support workflows, escalation matrix, software tools, and SLA requirements.",
      },
      {
        title: "Workflow & Script Design",
        body: "Build customized troubleshooting trees, brand guidelines, and knowledge base integrations.",
      },
      {
        title: "Agent Technical Training",
        body: "Specialized training on your product architecture, brand tone, and customer personas.",
      },
      {
        title: "Live Pilot Deployment",
        body: "Launch within 48 hours to 2 weeks with continuous QA scoring and supervisor coaching.",
      },
      {
        title: "Scale & Analytics",
        body: "Real-time KPI dashboards, first-contact resolution tracking, and flexible capacity scaling.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Denver & the Front Range",
    intro:
      "Tailored BPO support for Colorado's leading growth sectors.",
    items: [
      {
        icon: "laptop",
        stat: "SaaS",
        title: "Software & Technology",
        body: "Tier 1-3 help desk, product troubleshooting, subscriber onboarding, and live chat support.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Biotech",
        body: "Patient scheduling, medical device support, doctor answering service, and secure intake.",
      },
      {
        icon: "zap",
        stat: "CleanTech",
        title: "Energy & Clean Technology",
        body: "Customer billing inquiries, solar installation scheduling, and emergency field dispatch.",
      },
      {
        icon: "shopping-bag",
        stat: "Retail",
        title: "Outdoor & Consumer Brands",
        body: "Order support, warranty processing, return authorization, and omnichannel customer care.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Denver Companies Choose Contact Center USA",
    image: "/images/cc-agent-monitor.jpg",
    imagePosition: "right",
    body: [
      "Colorado has emerged as one of the nation's premier hubs for technology, aerospace, and high-growth consumer brands. Customers expect fast, intelligent, and articulate support that reflects your brand's quality.",
      "Contact Center USA provides 100% US-based agents who deliver exceptional customer experiences, resolve complex inquiries efficiently, and protect your brand equity 24/7.",
    ],
    bullets: [
      "100% US-based agents aligned with Mountain Time",
      "Specialized capabilities in SaaS, clean tech, healthcare, and e-commerce",
      "Full HIPAA, PCI-DSS, and SOC 2 security compliance",
      "Seamless integration with Salesforce, Zendesk, HubSpot, and Jira",
      "No long-term contracts — month-to-month flexibility",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Looking for top-tier Mountain Time call center support in Denver?",
    accent: "Mountain Time call center support",
    body: "Contact Center USA can deploy a dedicated US team tailored to your Denver business in under 48 hours. Request a free, custom quote today.",
    ctaLabel: "Get a Free Denver Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function DenverPage() {
  return (
    <CityPageTemplate
      city="Denver"
      state="Colorado"
      stateAbbr="CO"
      description="Denver is the economic capital of the Rocky Mountain region and a thriving nexus for technology, aerospace, healthcare, and consumer goods. With a rapidly growing population and a vibrant innovation ecosystem spanning Denver, Boulder, and the Front Range, Colorado businesses need customer support that matches their tech-forward, high-quality standards."
      businessLandscape="Denver's business environment spans cutting-edge SaaS startups in LoDo and RiNo, major aerospace contractors, and expansive healthcare networks. Contact Center USA provides Denver companies with dedicated, domestic US agents who provide intelligent, articulate, and reliable customer care across all channels."
      industries={["tech", "healthcare", "energy", "ecommerce", "finance"]}
      population="715K (City) / 3.0M (Metro)"
      businesses="90K+"
      statePage="colorado"
      answeringPost="answering-service-denver"
      seoContent={[...seoContent, ...cityExtras["denver"].seo]}
      faqs={cityExtras["denver"].faqs}
    />
  );
}
