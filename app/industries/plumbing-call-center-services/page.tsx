import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Plumbing Answering Service & Call Center | 24/7 Dispatch",
  description:
    "24/7 US-based plumbing answering service and call center for residential and commercial plumbers. Emergency dispatch, ServiceTitan integration, and leak intake.",
  keywords: [
    "plumbing answering service",
    "plumber call center",
    "emergency plumbing dispatch",
    "after hours plumbing answering service",
    "plumbing call center outsourcing",
    "servicetitan plumbing answering service",
    "drain cleaning answering service",
    "contractor answering service plumbing",
  ],
  alternates: { canonical: "/industries/plumbing-call-center-services" },
};

const features = [
  {
    title: "24/7 Emergency Leak & Sewer Dispatch",
    desc: "When pipes burst, water heaters flood, or main sewer lines back up, live US agents answer in seconds, walk homeowners through emergency shutoff basics, and dispatch your on-call plumber immediately.",
  },
  {
    title: "Direct Field Software Booking",
    desc: "Our agents book jobs live onto your ServiceTitan, Housecall Pro, Jobber, or FieldEdge dispatch boards, preventing double bookings and ensuring instant route optimization for your technicians.",
  },
  {
    title: "Water Heater & Repipe Lead Qualification",
    desc: "When callers need high-value tankless conversions, whole-home repiping, or sewer line replacements, agents collect critical job details and book priority estimator consultations.",
  },
  {
    title: "Commercial & Property Manager Intake",
    desc: "Handle commercial plumbing accounts, HOA maintenance requests, and restaurant grease trap emergencies with dedicated account rules and priority dispatch lanes.",
  },
  {
    title: "Overflow & Peak-Hour Call Capture",
    desc: "Never let your front office get overwhelmed during morning rush hours or major winter freeze events. Our team scales up instantly to answer rollover calls.",
  },
  {
    title: "Bilingual English & Spanish Intake",
    desc: "Native bilingual agents handle customer inquiries smoothly in English and Spanish, expanding your market reach across diverse metropolitan areas.",
  },
];

const benefits = [
  "24/7/365 live answering — nights, weekends, and holidays",
  "100% US-based agents who understand the plumbing trade",
  "Direct dispatch board booking into your field management software",
  "Emergency on-call technician phone and SMS escalation",
  "Zero lost emergency repair or water heater replacement calls",
  "Month-to-month contracts with no long-term lock-in",
];

const stats = [
  { value: 99.1, suffix: "%", label: "Answer Rate on Emergency Calls", decimals: 1 },
  { value: 38, suffix: "%", label: "Increase in After-Hours Bookings" },
  { value: 0, suffix: " Missed Jobs", label: "Lost to Voicemail", prefix: "" },
  { value: 24, suffix: "/7/365", label: "Live Plumber Dispatch" },
];

const testimonial = {
  quote:
    "Water emergencies don't happen between 9 and 5. Having Contact Center USA handle our night and weekend dispatch has doubled our after-hours revenue while giving our technicians an organized, stress-free on-call system.",
  name: "Marcus L.",
  title: "Vice President of Operations",
  company: "A Regional Plumbing & Drain Service (Florida & Georgia)",
  initials: "ML",
};

const faqs = [
  {
    question: "How does your plumbing answering service dispatch our on-call technicians?",
    answer:
      "We strictly follow your custom on-call schedule. When an urgent call arrives (burst pipe, sewer backup, water heater leak), we collect the caller's address, issue, and water shutoff status, then immediately contact your on-call plumber via phone and SMS. If the first tech does not respond within your designated timeframe, we escalate to the backup tech or supervisor.",
  },
  {
    question: "Can your agents book directly into ServiceTitan and Housecall Pro?",
    answer:
      "Yes. Our agents are trained on ServiceTitan, Housecall Pro, Jobber, FieldEdge, and ServiceFusion. We book the job directly onto your live dispatch calendar, assign the proper job type, and enter all customer notes.",
  },
  {
    question: "Can your agents guide a caller to their main water shutoff valve?",
    answer:
      "Yes. If a caller is experiencing active flooding from a burst pipe or fixture, our agents can provide basic safety instructions (such as locating the main shutoff valve or fixture shutoff) while the technician is being dispatched.",
  },
  {
    question: "Do you require long-term contracts for plumbing companies?",
    answer:
      "No. We provide month-to-month agreements. You can use our service for full 24/7 coverage, after-hours emergency dispatch, or daytime overflow without being locked into an annual contract.",
  },
];

const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Plumbing Call Center Outsourcing",
    heading: "When a pipe bursts at midnight, homeowners call the first plumber who picks up the phone.",
    accent: "who picks up the phone",
    body: [
      "In the plumbing industry, after-hours and emergency calls carry the highest margins. If an emergency call goes to voicemail, the customer hangs up within three seconds and calls the next plumbing company on Google.",
      "Contact Center USA gives plumbing businesses a professional 24/7 US dispatch team that answers every call immediately, calms panicked homeowners, and books profitable jobs right onto your schedule.",
    ],
    stats: [
      { stat: "<3 Rings", label: "Rapid answer speed on every emergency line" },
      { stat: "Direct Sync", label: "Live ServiceTitan and Housecall Pro scheduling" },
      { stat: "No Contracts", label: "Flexible month-to-month service agreements" },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "High-Margin Revenue",
    heading: "Turn Emergency Plumbing Distress Calls into Lifelong Customer Relationships",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "A fast, professional response to a flooded basement or leaking water heater turns a high-stress crisis into a loyal customer for life. Our agents treat every caller with urgency and empathy, ensuring your brand stands out as the most reliable plumber in town.",
      "Whether you run 3 trucks or 50, Contact Center USA provides the 24/7 infrastructure you need to dominate your local market.",
    ],
    bullets: [
      "24/7/365 live emergency leak, drain, and sewer dispatch",
      "Direct job booking into your field management software",
      "Qualify high-ticket water heater and repiping leads",
      "Eliminate office burnout and missed call leakage",
      "Month-to-month flexibility with zero long-term commitments",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to capture every emergency plumbing call in your market?",
    accent: "emergency plumbing call",
    body: "Contact Center USA can integrate with your dispatch software and have your dedicated 24/7 plumbing team live in as little as 48 hours.",
    ctaLabel: "Get a Free Plumbing Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function PlumbingPage() {
  return (
    <ServicePageTemplate
      badge="Plumbing & Drain Services"
      title="Plumbing Answering Service & Call Center"
      titleHighlight="Plumbing Answering Service"
      subtitle="24/7 Emergency Dispatch, ServiceTitan Integration & High-Margin Job Capture"
      description="Never miss an emergency plumbing job or water heater replacement. Our 100% US-based agents answer in seconds, triage urgent leaks, and schedule appointments directly into your dispatch board 24/7/365."
      features={features}
      benefits={benefits}
      image="/images/cc-management.jpg"
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
          title: "Home Services Call Center",
          desc: "Full support for electrical, roofing, and contractor businesses.",
          href: "/industries/home-services-call-center",
        },
        {
          title: "Virtual & Remote Support",
          desc: "24/7 virtual receptionist and overflow answering services.",
          href: "/services/virtual-remote-support",
        },
      ]}
      ctaHeading="Ready to book more high-margin plumbing jobs?"
      ctaSubtitle="Get a customized plumbing answering plan built for your field software and on-call team."
      seoContent={seoSections}
    />
  );
}
