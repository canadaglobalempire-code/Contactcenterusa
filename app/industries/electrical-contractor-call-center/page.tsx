import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Electrical Contractor Call Center & 24/7 Dispatch",
  description:
    "24/7 US-based electrical contractor call center and answering service. Emergency outage dispatch, ServiceTitan booking, and commercial service intake.",
  keywords: [
    "electrical contractor call center",
    "electrician answering service",
    "emergency electrical dispatch",
    "24 7 electrician answering service",
    "electrical contractor bpo",
    "servicetitan electrician answering",
  ],
  alternates: { canonical: "/industries/electrical-contractor-call-center" },
};

const features = [
  {
    title: "24/7 Emergency Outage & Hazard Dispatch",
    desc: "When electrical fires, blown transformers, or power outages strike residential or commercial properties, live US agents answer in seconds and dispatch your on-call electricians immediately.",
  },
  {
    title: "Direct Field Software Scheduling",
    desc: "Our agents book jobs directly onto your ServiceTitan, Housecall Pro, Jobber, or FieldEdge dispatch boards, assigning job types and entering complete issue histories.",
  },
  {
    title: "Commercial & Industrial Service Intake",
    desc: "Handle facility maintenance contracts, commercial lighting repairs, panel upgrades, and generator backup calls with dedicated account procedures and priority routing.",
  },
  {
    title: "High-Ticket Panel & EV Charger Qualification",
    desc: "Screen and qualify lucrative electrical service requests — such as 200A panel upgrades, EV charger installations, and whole-home backup generators — before booking estimator slots.",
  },
  {
    title: "Bilingual English & Spanish Intake",
    desc: "Native bilingual agents handle customer inquiries smoothly in English and Spanish, expanding your market reach across diverse metropolitan areas.",
  },
  {
    title: "Overflow & Weather Surge Absorption",
    desc: "Lightning storms, grid overloads, and severe weather cause sudden call spikes. Our scalable US network answers rollover calls instantly so you never lose a job to a competitor.",
  },
];

const benefits = [
  "24/7/365 live emergency electrical answering and dispatch",
  "100% US-based agents who understand electrical terminology",
  "Direct dispatch board calendar booking in ServiceTitan & Jobber",
  "On-call technician phone and SMS escalation trees",
  "Zero lost after-hours emergency repair calls",
  "Month-to-month contracts with no long-term lock-in",
];

const stats = [
  { value: 98.9, suffix: "%", label: "Answer Rate on Emergency Calls", decimals: 1 },
  { value: 40, suffix: "%", label: "Increase in Booked After-Hours Jobs" },
  { value: 0, suffix: " Lost Jobs", label: "During Severe Storm Surges", prefix: "" },
  { value: 24, suffix: "/7/365", label: "Live Electrician Dispatch" },
];

const testimonial = {
  quote:
    "Emergency electrical calls are high ticket and high urgency. Contact Center USA's 24/7 dispatch team answers our calls within two rings and books jobs directly into ServiceTitan. They've helped us capture over $180,000 in emergency revenue this year alone.",
  name: "Jason V.",
  title: "Master Electrician & Owner",
  company: "A Regional Electrical Contracting Firm (Ohio & Pennsylvania)",
  initials: "JV",
};

const faqs = [
  {
    question: "How does your answering service dispatch on-call electricians?",
    answer:
      "We strictly follow your on-call schedule. When an emergency call comes in (sparking panel, power loss, generator failure), we gather the customer details and immediately contact your on-call technician via phone and SMS. If the technician does not respond within your specified window, we escalate down your chain of command.",
  },
  {
    question: "Can your agents book appointments directly into ServiceTitan?",
    answer:
      "Yes. Our agents log directly into ServiceTitan, Housecall Pro, Jobber, or FieldEdge to see technician availability, place appointments on the dispatch board, and input detailed job notes.",
  },
];

const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Electrical Call Center Outsourcing",
    heading: "Emergency electrical calls demand immediate, articulate, and calm response.",
    accent: "immediate, articulate, and calm response",
    body: [
      "When a business loses power or a homeowner experiences sparking panels at 10 PM, they need a professional who can assess the urgency and dispatch a technician immediately.",
      "Contact Center USA gives electrical contractors a dedicated 24/7 US dispatch team that answers every call live, calms concerned customers, and locks profitable service calls onto your board.",
    ],
    stats: [
      { stat: "<3 Rings", label: "Average answer speed on all emergency calls" },
      { stat: "ServiceTitan", label: "Direct dispatch calendar synchronization" },
      { stat: "Month-to-Month", label: "Flexible agreements with no long-term commitments" },
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Never miss an emergency electrical job. Get a free quote today.",
    accent: "Never miss an emergency electrical job",
    body: "Contact Center USA can deploy your dedicated 24/7 electrical dispatch team in as little as 48 hours.",
    ctaLabel: "Get a Free Electrical Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function ElectricalPage() {
  return (
    <ServicePageTemplate
      badge="Electrical & Trades"
      title="Electrical Contractor Call Center & 24/7 Dispatch"
      titleHighlight="Electrical Contractor Call Center"
      subtitle="24/7 Emergency Outage Dispatch, ServiceTitan Booking & High-Ticket Lead Capture"
      description="Capture every high-ticket electrical repair and emergency outage call. Our 100% US-based agents answer in seconds and schedule appointments directly on your dispatch board 24/7/365."
      features={features}
      benefits={benefits}
      image="/images/cc-agents-working.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={[
        {
          title: "HVAC Answering Service",
          desc: "24/7 emergency dispatch and ServiceTitan booking for HVAC contractors.",
          href: "/industries/hvac-call-center-services",
        },
        {
          title: "Plumbing Answering Service",
          desc: "Emergency leak dispatch and plumbing call center support.",
          href: "/industries/plumbing-call-center-services",
        },
        {
          title: "Home Services Call Center",
          desc: "Full support for contractors and home service businesses.",
          href: "/industries/home-services-call-center",
        },
      ]}
      ctaHeading="Ready to book more electrical service calls?"
      ctaSubtitle="Get a customized electrical dispatch plan built for your field software and on-call team."
      seoContent={seoSections}
    />
  );
}
