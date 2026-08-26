import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Tampa Call Center & BPO Services | US-Based Teams";
const description =
  "US-based call center and BPO services for Tampa Bay businesses. Inbound customer care, healthcare BPO, insurance claims, and 24/7 answering services.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services tampa",
    "tampa bpo services",
    "tampa call center outsourcing",
    "tampa bay customer service outsourcing",
    "florida healthcare bpo tampa",
    "tampa answering service",
    "insurance call center tampa",
    "tampa contact center",
  ],
  alternates: { canonical: "/call-center-services-tampa" },
  ...pageMeta(title, description, "/call-center-services-tampa"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Tampa",
    heading: "The Tampa Bay BPO partner for healthcare networks, insurance carriers, financial institutions, and growing commercial leaders.",
    accent: "healthcare networks, insurance carriers",
    body: [
      "Contact Center USA is a premier call center provider in Tampa — delivering 100% US-based customer service, claims intake, patient scheduling, and outbound growth campaigns for Tampa Bay enterprises, St. Petersburg tech hubs, and Clearwater service firms.",
      "When Tampa businesses search for call center services Tampa that combine strict regulatory compliance with empathetic customer care, they get Eastern-time-aligned agents and disaster-resilient multi-site operations.",
    ],
    stats: [
      { stat: "ET", label: "Dedicated Eastern Time pod for Tampa Bay business hours" },
      { stat: "HIPAA", label: "Full healthcare & insurance compliance certification" },
      { stat: "<48h", label: "Fast onboarding & pilot launch for Florida firms" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Tampa Bay Facility vs. Contact Center USA Nationwide BPO",
    intro:
      "Why Tampa Bay healthcare, insurance, and service firms partner with Contact Center USA.",
    leftTitle: "Local Tampa In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Disaster & Storm Continuity",
        left: "Single Tampa Bay location vulnerable to coastal flooding and severe hurricane shutdowns.",
        right: "Multi-state US distributed infrastructure ensures 100% uptime through any weather disaster.",
        leftYes: false,
      },
      {
        label: "Healthcare & Insurance Compliance",
        left: "Generalist agents requiring extensive onboarding for HIPAA, Medicare, and claims rules.",
        right: "Dedicated HIPAA and insurance certified teams with continuous compliance auditing.",
        leftYes: false,
      },
      {
        label: "Bilingual Spanish Capabilities",
        left: "Available during daytime business hours only.",
        right: "24/7/365 bilingual English/Spanish coverage across voice, chat, and email.",
        leftYes: true,
      },
      {
        label: "Ramp Speed & Flexibility",
        left: "Slow ramp-up (30-60 days) to hire local staff for volume spikes.",
        right: "Pilot launch in under 48 hours; flexible capacity adjustments on demand.",
        leftYes: false,
      },
      {
        label: "Contract Terms",
        left: "Multi-year locked contracts with fixed minimum seat commitments.",
        right: "Month-to-month flexibility with no long-term contract lock-in.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Tampa Bay Businesses in 5 Steps",
    intro:
      "Our onboarding is structured, transparent, and designed for immediate impact.",
    steps: [
      {
        title: "Tampa Discovery & Compliance Review",
        body: "We map your Eastern Time volume, CRM integrations, and industry-specific compliance requirements.",
      },
      {
        title: "Custom Scripting & Integration",
        body: "Develop branded call trees and connect with your EHR, CRM, or ticketing systems.",
      },
      {
        title: "Agent Certification & Training",
        body: "Intensive training on your product line, compliance protocols, and brand voice.",
      },
      {
        title: "Live Pilot Launch",
        body: "Soft launch within 48 hours to 2 weeks backed by dedicated QA and supervisor support.",
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
    heading: "Industries We Serve in Greater Tampa Bay",
    intro:
      "Specialized BPO support across Tampa Bay's primary economic sectors.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Senior Care",
        body: "Patient appointment scheduling, doctor answering service, prior authorization, and medical intake.",
      },
      {
        icon: "shield",
        stat: "Claims",
        title: "Insurance & Claims Processing",
        body: "First Notice of Loss (FNOL), policyholder service, catastrophe surge intake, and claims routing.",
      },
      {
        icon: "landmark",
        stat: "Fintech",
        title: "Banking & Financial Services",
        body: "Account inquiries, loan lead qualification, and compliant client support for Tampa financial hubs.",
      },
      {
        icon: "wrench",
        stat: "Trades",
        title: "Home Services & Contracting",
        body: "24/7 HVAC, plumbing, roofing, and electrical dispatch across Hillsborough and Pinellas counties.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Tampa Bay Companies Choose Contact Center USA",
    image: "/images/cc-agents-working.jpg",
    imagePosition: "right",
    body: [
      "Tampa Bay is one of Florida's premier centers for healthcare, insurance, finance, and high-tech manufacturing. Providing fast, reliable, and compliant customer service is essential for maintaining customer trust.",
      "Contact Center USA delivers 100% US-based agents who handle every call with professionalism, empathy, and strict adherence to security guidelines.",
    ],
    bullets: [
      "100% US-based domestic agents aligned with Eastern Time",
      "Full HIPAA, PCI-DSS, and SOC 2 security compliance",
      "Storm-resilient multi-site US network ensuring zero weather downtime",
      "Bilingual English and Spanish coverage 24/7/365",
      "No long-term contracts — month-to-month flexibility",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready for superior call center support in Tampa Bay?",
    accent: "call center support in Tampa Bay",
    body: "Contact Center USA can deploy a dedicated US support team tailored to your Tampa business in under 48 hours. Request a free quote today.",
    ctaLabel: "Get a Free Tampa Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function TampaPage() {
  return (
    <CityPageTemplate
      city="Tampa"
      state="Florida"
      stateAbbr="FL"
      description="Tampa Bay is a major economic engine on Florida's Gulf Coast, known for its concentration of healthcare systems, financial institutions, insurance headquarters, and fast-growing technology companies. With a metro population of over 3.2 million, Tampa Bay businesses require scalable, compliant customer support that delivers exceptional customer experiences 24/7."
      businessLandscape="From Westshore business district financial firms to major healthcare networks and marine logistics corridors across Tampa and St. Petersburg, customer care demands reliability and strict compliance. Contact Center USA provides Tampa companies with dedicated, domestic US agents who understand Florida market dynamics and deliver superior service on every interaction."
      industries={["healthcare", "insurance", "finance", "tech", "logistics"]}
      population="400K (City) / 3.2M (Metro)"
      businesses="110K+"
      statePage="florida"
      answeringPost="answering-service-tampa"
      seoContent={[...seoContent, ...cityExtras["tampa"].seo]}
      faqs={cityExtras["tampa"].faqs}
    />
  );
}
