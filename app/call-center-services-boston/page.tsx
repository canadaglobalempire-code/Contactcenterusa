import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Boston Call Center & BPO Services | US-Based Teams";
const description =
  "US-based call center and BPO services for Boston & Massachusetts businesses. Biotech support, healthcare patient intake, higher education, and financial services.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services boston",
    "boston bpo services",
    "boston call center outsourcing",
    "massachusetts customer support outsourcing",
    "biotech call center boston",
    "boston answering service",
    "cambridge tech call center",
    "boston contact center",
  ],
  alternates: { canonical: "/call-center-services-boston" },
  ...pageMeta(title, description, "/call-center-services-boston"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Boston",
    heading: "The New England BPO partner for Boston biotech leaders, world-class healthcare, higher education, and financial institutions.",
    accent: "biotech leaders, world-class healthcare",
    body: [
      "Contact Center USA is a premier call center provider in Boston — delivering 100% US-based customer service, medical information lines, student support, and technical help desk for Kendall Square biotech innovators, Financial District asset managers, and Greater Boston institutions.",
      "When Boston organizations search for call center services Boston that reflect intellectual rigor, articulate communication, and uncompromising security standards, they get dedicated Eastern-time-aligned agents and agile month-to-month contracts.",
    ],
    stats: [
      { stat: "ET", label: "Dedicated Eastern Time pod for New England business hours" },
      { stat: "HIPAA", label: "Full healthcare & life sciences compliance infrastructure" },
      { stat: "<48h", label: "Rapid deployment for Boston institutions and startups" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Boston Facility vs. Contact Center USA Nationwide BPO",
    intro:
      "Comparing outsourced support options for Massachusetts enterprises.",
    leftTitle: "Local Boston In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Agent Cost & Overhead",
        left: "Boston and Cambridge wage floors push seat costs 30-50% higher than national averages.",
        right: "Nationwide domestic talent delivering elite US service at competitive, transparent pricing.",
        leftYes: false,
      },
      {
        label: "Complex Inquiry Handling",
        left: "Generalist agents requiring lengthy training for technical or scientific workflows.",
        right: "Articulate, highly trained US professionals vetted for complex problem solving.",
        leftYes: true,
      },
      {
        label: "Winter Storm Resilience",
        left: "New England blizzards and transit shutdowns can paralyze local call center sites.",
        right: "Distributed US workforce across multiple states guarantees uninterrupted continuity.",
        leftYes: false,
      },
      {
        label: "Security & Compliance",
        left: "Basic compliance without specialized institutional audit programs.",
        right: "Full HIPAA, FERPA, PCI-DSS Level 1, and SOC-2 security protocols.",
        leftYes: false,
      },
      {
        label: "Contract Terms",
        left: "Rigid multi-year commitments with high penalty clauses.",
        right: "Month-to-month flexibility with zero long-term lock-in.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Boston Organizations in 5 Steps",
    intro:
      "Our onboarding is precision-engineered for complex, compliance-heavy institutions.",
    steps: [
      {
        title: "Boston Discovery & Protocol Mapping",
        body: "We map your escalation trees, compliance standards (HIPAA, FERPA), and software platforms.",
      },
      {
        title: "Knowledge Base & Script Engineering",
        body: "Create tailored response guides and connect with your CRM, EHR, or student information system.",
      },
      {
        title: "Specialized Agent Certification",
        body: "Agents master your institutional guidelines, brand tone, and regulatory procedures.",
      },
      {
        title: "Live Pilot Launch",
        body: "Soft launch within 48 hours to 2 weeks with continuous QA scoring and supervisor support.",
      },
      {
        title: "Continuous Refinement",
        body: "Bi-weekly metric reviews, first-call resolution analysis, and agile staffing adjustments.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Greater Boston",
    intro:
      "High-touch support tailored for New England's innovation economy.",
    items: [
      {
        icon: "heart-pulse",
        stat: "Biotech",
        title: "Biotechnology & Life Sciences",
        body: "Medical information lines, clinical trial inquiries, patient support, and device intake.",
      },
      {
        icon: "graduation-cap",
        stat: "FERPA",
        title: "Higher Education & EdTech",
        body: "Admissions inquiry management, financial aid answering, and student help desk.",
      },
      {
        icon: "landmark",
        stat: "Finance",
        title: "Financial Services & Asset Management",
        body: "High-net-worth client support, lead qualification, and compliant inbound services.",
      },
      {
        icon: "laptop",
        stat: "SaaS",
        title: "Technology & Software",
        body: "Tier 1-3 help desk, product onboarding, live chat support, and technical troubleshooting.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Boston Organizations Partner with Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Boston is a city renowned for innovation, academic excellence, and cutting-edge healthcare. Organizations here cannot compromise on the quality, intelligence, and articulation of their customer interactions.",
      "Contact Center USA provides 100% US-based agents who communicate with clarity, empathy, and professionalism across all communication channels.",
    ],
    bullets: [
      "100% US-based domestic agents aligned with Eastern Time",
      "Specialized compliance for healthcare, biotech, education, and finance",
      "Omnichannel support across voice, live chat, email, and SMS",
      "Weather-resilient distributed infrastructure across the US",
      "Month-to-month contracts with zero long-term lock-in",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Upgrade your customer support with Boston-ready US agents.",
    accent: "Boston-ready US agents",
    body: "Contact Center USA can deploy a dedicated US support team tailored to your Boston organization in under 48 hours. Request a free, custom quote today.",
    ctaLabel: "Get a Free Boston Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function BostonPage() {
  return (
    <CityPageTemplate
      city="Boston"
      state="Massachusetts"
      stateAbbr="MA"
      description="Boston is the historic and economic capital of New England, recognized globally for its concentration of world-class universities, biotechnology pioneers in Kendall Square, leading hospital networks, and financial institutions. In a knowledge-driven economy where quality and precision are non-negotiable, Boston organizations demand customer support that meets the highest professional standards."
      businessLandscape="From life sciences and healthcare networks along Longwood Medical Area to Financial District wealth managers and route 128 tech corridors, customer communication requires intelligence, articulation, and strict compliance. Contact Center USA provides Boston organizations with dedicated, domestic US agents who uphold your brand's reputation with excellence on every call."
      industries={["healthcare", "education", "finance", "tech", "legal"]}
      population="675K (City) / 4.9M (Metro)"
      businesses="130K+"
      seoContent={[...seoContent, ...cityExtras["boston"].seo]}
      faqs={cityExtras["boston"].faqs}
    />
  );
}
