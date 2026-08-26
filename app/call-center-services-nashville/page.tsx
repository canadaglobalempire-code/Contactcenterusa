import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";
import { cityExtras } from "@/lib/city-landing-extras";

const title = "Nashville Call Center & BPO Services | US-Based Teams";
const description =
  "US-based call center and BPO services for Nashville & Tennessee businesses. Healthcare BPO, entertainment customer care, logistics, and 24/7 answering.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "call center services nashville",
    "nashville bpo services",
    "healthcare bpo nashville",
    "nashville call center outsourcing",
    "tennessee customer support outsourcing",
    "nashville answering service",
    "music row customer care",
    "nashville contact center",
  ],
  alternates: { canonical: "/call-center-services-nashville" },
  ...pageMeta(title, description, "/call-center-services-nashville"),
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Nashville",
    heading: "The Nashville BPO partner for the nation's healthcare capital, music & entertainment powerhouses, and booming commercial brands.",
    accent: "healthcare capital",
    body: [
      "Contact Center USA is a premier call center provider in Nashville — delivering 100% US-based customer service, revenue cycle patient support, doctor answering services, and event booking for Middle Tennessee enterprises, Music Row studios, and fast-growing regional businesses.",
      "When Nashville companies search for call center services Nashville with genuine southern warmth, medical expertise, and 24/7 reliability, they get dedicated Central-time-aligned agents and flexible month-to-month contracts.",
    ],
    stats: [
      { stat: "CT", label: "Dedicated Central Time pod aligned with Nashville business hours" },
      { stat: "HIPAA", label: "Full healthcare & medical practice compliance" },
      { stat: "<48h", label: "Fast onboarding & pilot launch for Tennessee firms" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local Nashville Shop vs. Contact Center USA Nationwide BPO",
    intro:
      "Why Nashville healthcare systems and corporate brands choose Contact Center USA.",
    leftTitle: "Local Nashville In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Healthcare BPO Specialization",
        left: "Generalist answering service with basic message taking capabilities.",
        right: "Specialized HIPAA-trained pods handling scheduling, triage routing, and insurance verification.",
        leftYes: false,
      },
      {
        label: "Scalability for Rapid Growth",
        left: "Struggles to hire fast enough in Nashville's tight, competitive labor market.",
        right: "Nationwide domestic agent network capable of scaling from 5 to 50+ seats on demand.",
        leftYes: false,
      },
      {
        label: "Southern Hospitality & Tone",
        left: "Local presence with natural regional cultural alignment.",
        right: "US agents trained in empathetic, polite, and patient communication standards.",
        leftYes: true,
      },
      {
        label: "24/7/365 Doctor Dispatch",
        left: "Often relies on automated voicemail during weekend and overnight hours.",
        right: "Live domestic agents answering 24/7/365 with urgent on-call provider escalation.",
        leftYes: false,
      },
      {
        label: "Contract Flexibility",
        left: "Standard annual contracts with fixed minimum volume commitments.",
        right: "Month-to-month agreements that scale dynamically with your needs.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Nashville Businesses in 5 Steps",
    intro:
      "Our structured onboarding gets your support queue running with speed and compliance.",
    steps: [
      {
        title: "Nashville Discovery Session",
        body: "We review your volume patterns, Central Time staffing requirements, and compliance needs.",
      },
      {
        title: "Scripting & Protocol Design",
        body: "Design custom call flows and connect with your EHR, CRM, or ticketing systems.",
      },
      {
        title: "Agent Certification",
        body: "Agents master your practice protocols, brand tone, and customer service guidelines.",
      },
      {
        title: "Live Pilot Launch",
        body: "Launch within 48 hours to 2 weeks with continuous QA monitoring and supervisor assist.",
      },
      {
        title: "Scale & Optimize",
        body: "Monthly metric reviews, hold-time reduction tracking, and agile staffing adjustments.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Greater Nashville",
    intro:
      "Specialized BPO support across Middle Tennessee's core economic sectors.",
    items: [
      {
        icon: "heart-pulse",
        stat: "Healthcare",
        title: "Healthcare Systems & Physician Groups",
        body: "Patient scheduling, doctor answering service, prescription refill routing, and clinical triage.",
      },
      {
        icon: "radio",
        stat: "Media",
        title: "Music, Entertainment & Events",
        body: "Ticketing support, VIP customer care, fan inquiries, and merchandise order management.",
      },
      {
        icon: "truck",
        stat: "Logistics",
        title: "Transportation & Supply Chain",
        body: "24/7 driver dispatch, freight tracking, delivery coordination, and carrier support.",
      },
      {
        icon: "wrench",
        stat: "Trades",
        title: "Home Services & Contracting",
        body: "24/7 emergency HVAC, plumbing, and roofing dispatch across Davidson and Williamson counties.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Choose Us",
    heading: "Why Nashville Businesses Choose Contact Center USA",
    image: "/images/cc-agent-headset.jpg",
    imagePosition: "right",
    body: [
      "Nashville is one of America's fastest-growing metropolitan areas and the undisputed capital of the US healthcare industry. Delivering fast, courteous, and compliant customer care is vital for patient retention and brand loyalty.",
      "Contact Center USA provides 100% US-based agents who treat every caller with respect, empathy, and professional excellence.",
    ],
    bullets: [
      "100% US-based domestic agents aligned with Central Time",
      "Full HIPAA, PCI-DSS, and SOC 2 compliance certifications",
      "Specialized healthcare, entertainment, and logistics workflows",
      "Seamless integration with major EHRs, CRMs, and dispatch tools",
      "Month-to-month agreements with zero long-term obligations",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready for top-tier Nashville call center outsourcing?",
    accent: "Nashville call center outsourcing",
    body: "Contact Center USA can deploy a dedicated US support team tailored to your Nashville business in under 48 hours. Request a free quote today.",
    ctaLabel: "Get a Free Nashville Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function NashvillePage() {
  return (
    <CityPageTemplate
      city="Nashville"
      state="Tennessee"
      stateAbbr="TN"
      description="Nashville is celebrated as both the music capital of the world and the healthcare management capital of the United States. With dozens of hospital companies, healthcare IT innovators, corporate headquarters, and a booming hospitality scene, Nashville businesses require customer support solutions that combine medical-grade compliance with warm, articulate customer care."
      businessLandscape="From massive healthcare management conglomerates along West End Avenue to creative studios on Music Row and booming distribution corridors across Middle Tennessee, customer interactions require empathy, speed, and precision. Contact Center USA provides Nashville companies with dedicated, domestic US agents who represent your brand with distinction."
      industries={["healthcare", "travel", "logistics", "finance", "tech"]}
      population="690K (City) / 2.1M (Metro)"
      businesses="65K+"
      statePage="tennessee"
      seoContent={[...seoContent, ...cityExtras["nashville"].seo]}
      faqs={cityExtras["nashville"].faqs}
    />
  );
}
