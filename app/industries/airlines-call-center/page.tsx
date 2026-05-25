import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Airlines Call Center | Contact Center USA",
  description:
    "US-based airlines call center support for customer care, inbound calls, outbound outreach, and back office workflows. Request an outsourcing quote.",
  keywords: [
    "airlines call center",
    "airline bpo services",
    "airline customer service outsourcing",
    "airline reservations outsourcing",
    "airline loyalty program support",
    "airline irregular operations support",
    "airline passenger support bpo",
    "24/7 airline contact center",
  ],
  alternates: { canonical: "/industries/airlines-call-center" },
};

const features = [
  {
    title: "Reservations & Booking Management",
    desc: "End-to-end reservation support that handles new bookings, seat selection, fare comparisons, and group travel coordination — ensuring passengers get the best options while maximizing your revenue per flight.",
  },
  {
    title: "Flight Changes & Cancellations",
    desc: "Trained agents who process itinerary changes, voluntary rebookings, and cancellations quickly and accurately, applying fare rules and waivers correctly to minimize revenue loss and passenger frustration.",
  },
  {
    title: "Crisis & Irregular Operations Management",
    desc: "Rapid-response teams that scale instantly during weather events, mechanical delays, and system outages — rebooking stranded passengers, coordinating hotel accommodations, and delivering real-time updates across every channel.",
  },
  {
    title: "Loyalty & Frequent Flyer Programs",
    desc: "Dedicated support for your loyalty program members including mileage inquiries, tier status questions, award redemptions, partner earning, and elite-level concierge services that keep your best customers flying with you.",
  },
  {
    title: "Baggage Tracking & Claims",
    desc: "Comprehensive baggage support from delayed bag tracing and delivery coordination to damage claims processing and lost luggage resolution — reducing complaint escalations and improving passenger satisfaction scores.",
  },
  {
    title: "Rebooking & Schedule Recovery",
    desc: "Proactive rebooking solutions that automatically reroute affected passengers during schedule changes and disruptions, using intelligent algorithms and skilled agents to minimize misconnections and protect your on-time performance.",
  },
];

const benefits = [
  "24/7/365 multilingual passenger support",
  "GDS & reservation system integrations",
  "Rapid scale-up during irregular operations",
  "IATA-compliant processes and training",
  "Dedicated elite and loyalty tier handling",
  "Real-time reporting & SLA dashboards",
];

const stats = [
  { value: 99, suffix: "%", label: "Call Answer Rate" },
  { value: 40, suffix: "%", label: "Faster Rebooking Times" },
  { value: 2, suffix: "M+", label: "Passenger Interactions Yearly" },
  { value: 24, suffix: "/7", label: "Year-Round Coverage" },
];

const testimonial = {
  quote:
    "Contact Center USA transformed our passenger support operation. During peak travel disruptions, their team rebooking capacity scaled overnight and our customer satisfaction scores improved by 28%. They truly understand the airline industry.",
  name: "S.W.",
  title: "Director of Customer Experience",
  company: "A Major U.S. Airline",
  initials: "SW",
};

const faqs = [
  {
    question: "Do your agents have experience with airline reservation systems?",
    answer:
      "Yes. Our agents are trained on major GDS platforms including Sabre, Amadeus, and Travelport, as well as proprietary airline reservation systems. We work with your team to build custom training programs covering your specific fare rules, policies, and booking workflows.",
  },
  {
    question: "How quickly can you scale during irregular operations?",
    answer:
      "We maintain a trained reserve pool specifically for airline clients that can be activated within hours. During major disruptions like weather events or system outages, we can increase staffing by up to 300% within 4-6 hours to handle rebooking surges and passenger inquiries.",
  },
  {
    question: "Can you support loyalty and frequent flyer program members?",
    answer:
      "Absolutely. We provide dedicated queues and specially trained agents for loyalty program support, including mileage account management, tier status inquiries, award ticket bookings, partner program questions, and white-glove service for elite-level members.",
  },
  {
    question: "What languages do you support for international passengers?",
    answer:
      "We offer support in English, Spanish, French, Portuguese, and Mandarin as core languages, with additional language capabilities available through our partnership network. All agents are trained in cross-cultural communication specific to the aviation industry.",
  },
  {
    question: "How do you handle baggage claims and tracking?",
    answer:
      "Our agents use WorldTracer and airline-specific baggage systems to trace delayed bags, coordinate delivery logistics, process damage and loss claims, and provide proactive status updates to passengers. We aim to resolve most delayed baggage cases within 24 hours of the initial report.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Airlines Call Center in USA",
    heading: "The airline BPO services partner trusted by US carriers to protect passenger experience when minutes count.",
    accent: "when minutes count",
    body: [
      "Contact Center USA is one of the best airlines call center providers in the USA — a 100% US-based airline BPO services operation with deep GDS expertise, IATA-aligned training, and 24/7/365 surge capacity purpose-built for passenger airlines.",
      "For airlines, regional carriers, and travel partners searching for a reliable airline customer service outsourcing partner, we deliver faster rebooking, higher NPS, and resilient coverage through the peaks, storms, and IROPS that define modern aviation.",
    ],
    stats: [
      { stat: "300%", label: "Surge capacity activation during IROPS within 4–6 hours" },
      { stat: "2M+", label: "Passenger interactions handled annually across our airline book of business" },
      { stat: "28 pts", label: "Typical NPS lift after onboarding our airline customer service outsourcing team" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Airline Support vs. Contact Center USA BPO",
    intro:
      "Airlines face a unique staffing problem: passenger volume is steady 330 days a year and catastrophic on the other 35. Here's how an internal reservations team compares to our outsourced airline BPO services model.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "IROPS Surge Capacity",
        left: "Fixed headcount — storms, cancellations, and system outages overwhelm queues within hours.",
        right: "Trained reserve pool activates within 4–6 hours; staffing scales 300% without new hiring cycles.",
        leftYes: false,
      },
      {
        label: "GDS & Reservation Expertise",
        left: "Training investment per hire is steep; attrition resets institutional GDS knowledge every year.",
        right: "Agents cross-trained on Sabre, Amadeus, Travelport plus your proprietary PNR and fare workflows.",
        leftYes: false,
      },
      {
        label: "Multilingual Passenger Coverage",
        left: "Limited to the languages of your local labor market — international passengers bounce to IVR.",
        right: "English, Spanish, French, Portuguese, and Mandarin in-house plus 200+ languages via partners.",
        leftYes: false,
      },
      {
        label: "24/7 Global Coverage",
        left: "Requires 3-shift staffing, night-premium labor, and supervisory coverage around the clock.",
        right: "Native 24/7/365 model — no overtime premiums, follow-the-sun supervisor coverage baked in.",
        leftYes: false,
      },
      {
        label: "Loyalty & Elite Handling",
        left: "Elite-tier members often routed to the same queue as general reservations.",
        right: "Dedicated elite and frequent-flyer queues with concierge-trained agents and priority SLAs.",
        leftYes: false,
      },
      {
        label: "Cost per Passenger Contact",
        left: "High fixed cost — FTE, facility, licensing, and technology spread over predictable volume only.",
        right: "Variable cost model aligned to actual passenger volume, IROPS events, and seasonal peaks.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Airline Customer Service Outsourcing Onboarding",
    intro:
      "Every airline partnership flows through the same five-stage onboarding — engineered to launch fast, protect PNR data, and stabilize queues before peak travel windows.",
    steps: [
      {
        title: "Airline Discovery",
        body: "Route map, PNR systems, fare rules, loyalty tiers, and IROPS playbook reviewed with your ops leadership.",
      },
      {
        title: "GDS & PMS Integration",
        body: "Secure connections to Sabre/Amadeus/Travelport, loyalty platform, WorldTracer, and CRM established.",
      },
      {
        title: "Agent Certification",
        body: "Aviation-specific training covering IATA, DOT consumer rules, SSR codes, and your brand standards.",
      },
      {
        title: "Pilot & Tuning",
        body: "Controlled live traffic on non-revenue queues while QA calibrates scripts, ACW, and AHT targets.",
      },
      {
        title: "Full Cutover & IROPS Drill",
        body: "Production go-live with a simulated storm drill to prove surge activation and rebooking cadence.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Aviation Sub-Segments Our Airline BPO Services Cover",
    intro:
      "Commercial passenger airlines, regional carriers, ULCCs, cargo, and travel partners all have distinct operating rhythms. Our airline BPO services are tuned to the commercial realities of each segment.",
    items: [
      {
        icon: "plane",
        stat: "Mainline",
        title: "Major US Passenger Airlines",
        body: "Reservations, elite concierge, corporate travel desks, and large-scale IROPS rebooking for flag carriers.",
      },
      {
        icon: "plane",
        stat: "Regional",
        title: "Regional & Commuter Carriers",
        body: "Interline rebooking, code-share coordination, and passenger support tuned to short-haul networks.",
      },
      {
        icon: "plane",
        stat: "ULCC",
        title: "Low-Cost & Ultra-Low-Cost Carriers",
        body: "Ancillary revenue scripting, bag upsell, seat assignment, and high-volume reservation throughput.",
      },
      {
        icon: "truck",
        stat: "Cargo",
        title: "Air Cargo & Charter",
        body: "Booking support, AWB tracking, dispatch coordination, and charter logistics for cargo operators.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Airlines Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore airline BPO services struggle with US consumer expectations — accents, cultural distance, and limited exposure to DOT consumer protection rules all drag down passenger satisfaction scores. Generalist BPOs lack the aviation muscle memory to handle IROPS without melting queues.",
      "Contact Center USA is different: a 100% US-based airline customer service outsourcing operation with dedicated aviation supervisors, GDS-certified agents, and a surge model specifically architected for the worst day your airline will ever have.",
    ],
    bullets: [
      "100% US-based airline agents — no offshore handoff for PNR or payment data",
      "Multi-GDS certified — Sabre, Amadeus, Travelport, and major proprietary res systems",
      "Dedicated IROPS playbooks with pre-written scripts and rebooking logic",
      "Elite and corporate travel desks with named supervisors and priority SLAs",
      "Full DOT consumer rule training — Tarmac Delay Rule, bumping, refunds, Part 259",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to outsource your airline call center to a US-based BPO built for aviation?",
    accent: "built for aviation",
    body: "If your reservations queues are melting during IROPS, your NPS is slipping, or your internal center can't scale for peak season, request a free consultation. We'll walk you through our airline BPO services model, surge staffing plan, and projected impact on passenger experience and cost per contact.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with intelligent routing and custom scripts for airline passenger support.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Omnichannel Solutions",
    desc: "Seamless passenger support across phone, chat, email, social media, and SMS for a unified travel experience.",
    href: "/services/omnichannel-contact-center-solutions",
  },
  {
    title: "Customer Experience Management",
    desc: "Strategic CX programs that improve passenger satisfaction, loyalty, and lifetime value.",
    href: "/solutions/customer-experience-management",
  },
];

export default function AirlinesPage() {
  return (
    <ServicePageTemplate
      badge="Airlines Call Center Services"
      title="Professional Call Center Solutions for the Airlines Industry"
      titleHighlight="Airlines Industry"
      subtitle="From reservations and rebooking to crisis management and loyalty programs, we help airlines deliver exceptional passenger experiences at every touchpoint."
      description="Our airlines call center combines deep aviation industry knowledge with advanced technology to support carriers of all sizes. Whether you need reservation management, irregular operations support, baggage tracking, or dedicated frequent flyer services, our trained agents represent your brand with the expertise your passengers expect."
      features={features}
      benefits={benefits}
      image="/images/cc-support-team.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
