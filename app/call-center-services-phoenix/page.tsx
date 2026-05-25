import type { Metadata } from "next";
import { CityPageTemplate } from "@/components/shared/CityPageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Call Center Services in Phoenix",
  description:
    "US-based call center services for Phoenix businesses. Get inbound, outbound, customer support, and multilingual coverage with a fast BPO quote.",
  keywords: [
    "call center services phoenix",
    "phoenix bpo services",
    "arizona call center outsourcing",
    "phoenix call center",
    "valley of the sun bpo",
    "scottsdale customer support",
    "phoenix customer service outsourcing",
    "arizona contact center",
  ],
  alternates: { canonical: "/call-center-services-phoenix" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Call Center Services in Phoenix",
    heading: "The Phoenix BPO services partner built for Valley-of-the-Sun growth and scale.",
    accent: "Valley-of-the-Sun",
    body: [
      "Contact Center USA is one of the best call center providers in Phoenix — a 100% US-based Phoenix BPO services operation delivering Arizona call center outsourcing for Camelback Corridor financial firms, Scottsdale and Tempe tech companies, and Valley healthcare and real estate leaders.",
      "When Phoenix businesses search for call center services Phoenix that can keep pace with one of America's fastest-growing metros, they get Mountain-time-aligned agents, scalable surge capacity, and a BPO partner sized for Phoenix's explosive growth trajectory.",
    ],
    stats: [
      { stat: "MT", label: "Dedicated Mountain-time pod for Phoenix and Valley business hours" },
      { stat: "Scale", label: "Elastic capacity for Phoenix's high-growth SaaS, real estate, and healthcare" },
      { stat: "<48h", label: "Pilot go-live for Valley of the Sun businesses" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Local In-City Call Center vs. Contact Center USA Nationwide BPO",
    intro:
      "Phoenix companies often start with a local Valley call center, then hit a scale ceiling. Here is how a nationwide BPO compares for Phoenix BPO services buyers.",
    leftTitle: "Local Phoenix In-City Call Center",
    rightTitle: "Contact Center USA Nationwide BPO",
    rows: [
      {
        label: "Hourly Agent Cost",
        left: "Phoenix wage pressure has lifted seat costs 20–30% in the last 3 years as the Valley has grown.",
        right: "Nationwide US talent pool keeps seat economics below Phoenix local rates.",
        leftYes: false,
      },
      {
        label: "Summer Heat & Grid Continuity",
        left: "Valley heat events and grid stress have caused local facility power incidents.",
        right: "Distributed US workforce across multiple states — Arizona grid issues never affect your queue.",
        leftYes: false,
      },
      {
        label: "Mountain Time Coverage",
        left: "Native advantage for MT-only accounts but limited for 24/7 coverage.",
        right: "Dedicated MT pod plus follow-the-sun US overflow for true 24/7 without surcharge.",
        leftYes: false,
      },
      {
        label: "Ramp Speed for High-Growth Phoenix SaaS",
        left: "Local hiring cannot keep up with Valley growth; 60–90 day ramps are typical.",
        right: "Pilot live in under 48 hours; full Phoenix team in under 2 weeks — on demand as volumes grow.",
        leftYes: false,
      },
      {
        label: "Healthcare & Finance Compliance",
        left: "Most local shops have basic compliance but lack dedicated HIPAA and PCI-DSS programs.",
        right: "Full HIPAA, PCI-DSS, TCPA, and SOC 2 compliance stack audited for Phoenix-regulated industries.",
        leftYes: false,
      },
      {
        label: "Surge Capacity",
        left: "Fixed local headcount limits surge for real estate peaks, Q4 ecommerce, or product launches.",
        right: "Elastic US capacity — add 10 or 100 seats for Valley demand spikes without long-term commitment.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Onboarding for Phoenix Businesses in 5 Steps",
    intro:
      "From Scottsdale SaaS to Camelback Corridor finance, every Phoenix client onboards through the same fast, scalable process designed for Valley growth.",
    steps: [
      {
        title: "Phoenix Discovery Call",
        body: "30-minute call to scope Mountain-time volumes, growth trajectory, and Phoenix industry needs.",
      },
      {
        title: "Solution Design",
        body: "Custom MT staffing plan, elastic surge capacity, and integration with Salesforce, Zendesk, HubSpot.",
      },
      {
        title: "Agent Training",
        body: "US agents trained on your Phoenix brand voice, Valley customer expectations, and industry compliance.",
      },
      {
        title: "Go Live",
        body: "Pilot launch in under 48 hours with Phoenix client success manager and real-time call QA.",
      },
      {
        title: "Scale & Optimize",
        body: "Weekly CX scorecards, AI-driven insights, and elastic capacity for Valley growth cycles.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve in Phoenix",
    intro:
      "These are the Phoenix industries where Contact Center USA delivers call center outsourcing at the scale Valley-of-the-Sun growth demands.",
    items: [
      {
        icon: "laptop",
        stat: "Tech",
        title: "SaaS & Technology",
        body: "Technical support and customer success for Scottsdale, Tempe, and Chandler tech companies.",
      },
      {
        icon: "home",
        stat: "Real Estate",
        title: "Real Estate & Proptech",
        body: "Lead qualification, transaction support, and customer service for Valley real estate leaders.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Life Sciences",
        body: "Patient scheduling and intake for Banner Health, HonorHealth, and Valley hospital networks.",
      },
      {
        icon: "landmark",
        stat: "Finance",
        title: "Financial Services",
        body: "Support for Camelback Corridor banks, credit unions, and fintech scaling out of the Valley.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Phoenix Businesses Choose Contact Center USA for Arizona Call Center Outsourcing",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Phoenix customers expect the attentive service of a fast-growing metro where businesses still compete on quality. Offshore providers cannot deliver the cultural fit Arizona customers expect, and local Valley call centers cannot keep up with the scale demands of Phoenix's hypergrowth businesses.",
      "Contact Center USA is the Phoenix BPO services alternative that combines Mountain-time alignment, elastic surge capacity, and deep industry expertise — giving Valley businesses a partner that grows as fast as they do.",
    ],
    bullets: [
      "Dedicated Mountain-time pod aligned with Phoenix and Valley business hours",
      "Elastic surge capacity for Valley real estate peaks, SaaS growth, and Q4 spikes",
      "Grid-resilient distributed US workforce — Arizona heat events never affect your queue",
      "Deep expertise in Valley industries — SaaS, real estate, healthcare, and finance",
      "No long-term contracts — scale for Phoenix growth without fixed overhead",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to partner with a Phoenix BPO built for Valley-of-the-Sun growth?",
    accent: "Valley-of-the-Sun growth",
    body: "Whether you are a Scottsdale SaaS startup, a Camelback financial firm, or a Valley healthcare network, Contact Center USA can stand up a dedicated MT team in under 48 hours. Get a free Phoenix call center quote tailored to your growth plan.",
    ctaLabel: "Get a Free Phoenix Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function PhoenixPage() {
  return (
    <CityPageTemplate
      city="Phoenix"
      state="Arizona"
      stateAbbr="AZ"
      description="Phoenix is one of the fastest-growing cities in America, a sunbelt metropolis that has transformed from a retirement destination into a thriving technology and business hub. The Valley of the Sun is now home to major semiconductor manufacturers, financial services firms along the Camelback Corridor, and a booming real estate market that consistently ranks among the nation's most active. With 1.6 million residents and a metro area exceeding 4.8 million, Phoenix offers businesses a dynamic market with a young, growing workforce and lower operating costs than coastal cities."
      businessLandscape="Phoenix's rapid growth has created intense demand for scalable customer support solutions. Tech companies in Scottsdale and Tempe are scaling fast and need call center partners that can grow with them. Healthcare systems serving the Valley's expanding population require HIPAA-compliant support, while the financial services sector needs agents who can handle complex inquiries with expertise and care. Contact Center USA helps Phoenix businesses compete at the highest level by providing US-based call center services that match the city's ambition and pace of growth."
      industries={["tech", "healthcare", "real estate", "finance", "education"]}
      population="1.6M"
      businesses="200K+"
      seoContent={seoContent}
    />
  );
}
