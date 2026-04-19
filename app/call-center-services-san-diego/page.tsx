import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Center Services San Diego | San Diego BPO | Contact Center USA",
  description:
    "Call center services San Diego — Contact Center USA delivers San Diego BPO and SD customer support outsourcing for biotech, defense, and tech. 100% US-based agents. Free quote.",
  keywords: [
    "call center services san diego",
    "san diego bpo",
    "sd customer support outsourcing",
    "san diego call center outsourcing",
    "sorrento valley biotech support",
    "southern california bpo",
    "san diego contact center",
    "socal biotech call center",
  ],
  alternates: { canonical: "/call-center-services-san-diego" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in San Diego",
    heading: "The San Diego BPO partner built for biotech precision and defense-grade security.",
    accent: "biotech precision",
    body: [
      "Contact Center USA is one of the best call center providers in San Diego — a 100% US-based San Diego BPO delivering SD customer support outsourcing for Sorrento Valley biotech firms, Naval Base San Diego contractors, East Village tech startups, and the tourism operators along Mission Bay and the Gaslamp Quarter.",
      "When San Diego businesses search for call center services San Diego that combine Pacific-time alignment, scientific precision, and defense-industry security, they get bilingual agents, regulated-industry compliance, and a BPO partner who understands the knowledge-driven economy that defines SD business.",
    ],
    stats: [
      { stat: "PT", label: "Dedicated Pacific-time pod for San Diego business hours" },
      { stat: "GxP+", label: "Compliance built for Sorrento Valley biotech and pharma" },
      { stat: "Bilingual", label: "English/Spanish capacity for SD's multicultural customer base" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "San Diego companies weighing call center options often compare a local SD operation against a nationwide BPO. Here is how the two compare for San Diego BPO buyers.",
    leftTitle: "Local San Diego In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "California wage floors and SD cost of living drive seat costs 25–40% above nationwide averages.",
        right: "Nationwide US talent pool at cost structures well below SoCal operating cost.",
        leftYes: false,
      },
      {
        label: "Wildfire & Power Continuity",
        left: "SoCal wildfire season and PSPS events have caused repeated local facility outages.",
        right: "Distributed US workforce across multiple states — California grid issues never down your queue.",
        leftYes: false,
      },
      {
        label: "24/7 Biotech Support",
        left: "Single-site SD operations struggle with overnight support for global biotech clients.",
        right: "Follow-the-sun US coverage for biotech product support and clinical trial hotlines.",
        leftYes: false,
      },
      {
        label: "Ramp Speed",
        left: "SD hiring is tight with biotech industry; 60+ days to ramp full team.",
        right: "Pilot live in under 48 hours; full San Diego team in under 2 weeks.",
        leftYes: false,
      },
      {
        label: "Biotech & Defense Compliance",
        left: "Most local shops have basic HIPAA; few have dedicated GxP and defense-grade security.",
        right: "Full HIPAA, GxP, SOC 2, and security-aware protocols for SD biotech and defense clients.",
        leftYes: false,
      },
      {
        label: "Tourism Surge Capacity",
        left: "Fixed local headcount limits surge for Comic-Con, summer tourism, and Padres peaks.",
        right: "Elastic US capacity — scale up for SD tourism peaks without long-term commitment.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for San Diego Businesses in 5 Steps",
    intro:
      "From Sorrento Valley biotech to East Village tech startups, every San Diego client onboards through the same fast, precision-focused process.",
    steps: [
      {
        title: "SD Discovery Call",
        body: "30-minute call to scope Pacific-time volumes, biotech or defense compliance, and channel mix.",
      },
      {
        title: "Solution Design",
        body: "Custom PT staffing plan, GxP-ready tooling, and integration with Veeva, Salesforce, or Zendesk.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your SD brand voice, biotech terminology, and defense-industry security.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with San Diego client success manager and call quality QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX reviews, AI-driven call insights, and surge capacity for clinical trials and tourism peaks.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in San Diego",
    intro:
      "These are the San Diego industries where Contact Center USA delivers call center outsourcing with the precision SD's knowledge economy demands.",
    items: [
      {
        icon: "stethoscope",
        stat: "GxP",
        title: "Biotech & Pharma",
        body: "Patient support, medical info lines, and clinical trial hotlines for Sorrento Valley biotech.",
      },
      {
        icon: "shield",
        stat: "Defense",
        title: "Defense & Military Contractors",
        body: "Secure support for Naval Base San Diego contractors and Camp Pendleton defense firms.",
      },
      {
        icon: "laptop",
        stat: "Tech",
        title: "Technology & SaaS",
        body: "Tier 1–3 technical support for East Village, UTC, and downtown SD tech companies.",
      },
      {
        icon: "plane",
        stat: "Tourism",
        title: "Tourism & Hospitality",
        body: "Booking support for Gaslamp hotels, Mission Bay resorts, and SD attractions.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why San Diego Businesses Choose Contact Center USA for SD Customer Support Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "San Diego customers expect the scientific precision of a biotech capital, the security awareness of a defense community, and the relaxed warmth of SoCal hospitality. Offshore providers cannot deliver that range, and local SD call centers cannot match the compliance depth or 24/7 resilience biotech and defense clients require.",
      "Contact Center USA is the San Diego BPO alternative that combines Pacific-time alignment, GxP and defense-grade compliance, and bilingual capacity — delivered from 100% US-based facilities with the distributed resilience SoCal wildfire season demands.",
    ],
    bullets: [
      "Dedicated Pacific-time pod aligned with San Diego business hours plus 24/7 overflow",
      "GxP, HIPAA, SOC 2, and defense-industry compliance built in",
      "Wildfire-resilient distributed US workforce — no single-site SoCal risk",
      "Bilingual English/Spanish capacity for SD's multicultural customer base",
      "Elastic surge capacity for clinical trials, Comic-Con, and summer tourism peaks",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a San Diego BPO built for biotech, defense, and tech precision?",
    accent: "biotech, defense, and tech",
    body: "Whether you are a Sorrento Valley biotech, a Naval Base contractor, or a downtown SaaS startup, Contact Center USA can stand up a dedicated PT team in under 48 hours. Get a free San Diego call center quote tailored to your industry.",
    ctaLabel: "Get a Free San Diego Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function SanDiegoPage() {
  return (
    <CityPageTemplate
      city="San Diego"
      state="California"
      stateAbbr="CA"
      description="San Diego has earned its reputation as a world-class hub for biotechnology, defense, and innovation. The Torrey Pines mesa is home to one of the densest concentrations of biotech and pharmaceutical companies on the planet, while the presence of Naval Base San Diego and Marine Corps Base Camp Pendleton makes it a cornerstone of America's defense industry. With 1.4 million residents, year-round sunshine, and a quality of life that attracts top talent, San Diego combines scientific rigor with entrepreneurial energy in a way few cities can match."
      businessLandscape="San Diego's business community demands precision, compliance, and technical fluency in customer support. Biotech companies in Sorrento Valley need agents who can handle complex product inquiries and maintain strict regulatory compliance. Defense contractors require secure, clearance-aware communication protocols. The city's growing tech sector in downtown's East Village and the tourism industry serving its world-famous beaches and attractions both need scalable, professional support. Contact Center USA delivers specialized, US-based call center services that meet the exacting standards of San Diego's knowledge-driven economy."
      industries={["biotech", "defense", "tech", "tourism", "healthcare"]}
      population="1.4M"
      businesses="150K+"
      seoContent={seoContent}
    />
  );
}
