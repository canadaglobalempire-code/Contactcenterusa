import type { Metadata } from "next";
import Link from "next/link";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";
import { pageMeta } from "@/lib/seo-config";

const title = "Plumbing Answering Service & Call Center | 24/7 Dispatch";
const description =
  "Plumbing answering service for incoming enquiries, job intake and after-hours dispatch. Plan coverage around your service area and on-call team.";

export const metadata: Metadata = {
  title,
  description,
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
  ...pageMeta(title, description, "/industries/plumbing-call-center-services"),
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
    question: "What does a plumbing answering service do?",
    answer:
      "It answers your calls when your office cannot, works through your triage questions to separate emergencies from routine jobs, pages the on-call plumber for true emergencies, books other jobs and estimate visits on your dispatch board, and sends you the details of every call.",
  },
  {
    question: "Can the answering service book jobs in ServiceTitan?",
    answer:
      "Yes. Agents can book jobs directly onto your dispatch board in ServiceTitan, Housecall Pro, Jobber or FieldEdge, following your rules for job types, time slots and service area.",
  },
  {
    question: "How does after-hours emergency plumbing dispatch work?",
    answer:
      "You set the rules: which situations count as emergencies, who is on call, the order in which to try technicians and the backup contact. Agents follow your triage questions, page the on-call plumber by phone or text for emergencies, and book everything else into the next available slot.",
  },
  {
    question: "What is the difference between after-hours and overflow answering?",
    answer:
      "After-hours answering covers every call while your office is closed and centers on emergency triage and dispatch. Overflow answering picks up during business hours when your line is busy or unanswered, and centers on booking jobs and estimates. Many plumbing companies use both, with separate rules for each.",
  },
  {
    "question": "What should a plumbing answering service collect from callers?",
    "answer": "Define an intake checklist with the caller's contact details, service address, description of the problem and whether the request is for repair, maintenance or an estimate. Add the information your dispatcher needs to decide the next step. Agents should follow your approved triage process and escalate urgent situations to the designated contact."
  },
  {
    "question": "What do we need to set up after-hours plumbing dispatch?",
    "answer": "Prepare your service area, opening hours, on-call rota, escalation order and the rules for accepting a job. Clarify whether agents may book directly or should send a request for approval. Test the handoff and backup contact process before launch, including what happens when the first technician is unavailable."
  },
  {
    "question": "What affects the price of a plumbing answering service?",
    "answer": "The required coverage, expected call volume, intake depth and dispatch responsibilities shape the quote. Message taking, appointment booking and urgent escalation are different scopes. Send these requirements through our contact page and confirm software access, training, billing terms and any minimum commitment in the proposal."
  }
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
    eyebrow: "What We Handle",
    heading: "What a plumbing answering service handles",
    image: "/images/cc-woman-headset.jpg",
    imagePosition: "left",
    body: [
      "A plumbing answering service answers your line when your office cannot, and turns each call into the next step your business needs: an emergency dispatch, a booked job, an estimate visit or a message for the morning. What makes it a plumbing service rather than a general one is the triage. Agents work from your script to find out how serious the problem is before deciding who to wake up.",
      "Typical triage questions: Is water still running, and has the main shutoff been closed? Is sewage backing up into the home? Is water near the electrical panel or outlets? Is this the only working toilet or the only source of hot water? Is the caller the owner, a tenant or a property manager, and is the address inside your service area? If a caller mentions a gas smell, your script's safety instruction comes first. The answers decide whether the call is an emergency under your rules or a job for the next opening.",
      "Then your dispatch rules apply. You decide which situations page the on-call plumber at night, which go to the first slot in the morning, the escalation order when the first technician does not answer, and what agents may say about arrival times. Agents book directly onto your dispatch board in ServiceTitan, Housecall Pro, Jobber or FieldEdge, and record the details your technician needs before arriving.",
    ],
    bullets: [
      "Emergency triage from your approved question list",
      "On-call paging and escalation in the order you set",
      "Job booking in ServiceTitan, Housecall Pro, Jobber or FieldEdge",
      "Estimate visits for water heaters, repipes and sewer lines",
      "Call notes and messages delivered the way your team works",
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Coverage Options",
    heading: "After-hours vs overflow coverage for plumbers",
    image: "/images/cc-agent-night.jpg",
    imagePosition: "right",
    body: [
      "After-hours coverage means the answering service takes every call when your office is closed: evenings, nights, weekends and holidays. This is where emergency triage and on-call dispatch matter most. A burst pipe at 2 a.m. cannot wait, a dripping faucet can, and waking a technician for the wrong one costs you the next day's work.",
      "Overflow coverage means the service picks up during business hours when your office line is busy or not answered within a set number of rings. It protects you on the mornings after a freeze, when every homeowner with a split pipe calls at once, and through lunch breaks and staff absences. Overflow calls are mostly bookings and estimate requests, so the key part of the setup is live access to your schedule.",
      <>Many plumbing companies use both, with different rules for each: dispatch rules for after-hours calls and booking rules for overflow. Start with the gap that costs you the most jobs today, then add the other once the scripts are working. Use our <Link href="/blog/top-10-plumbing-answering-service-companies-usa" style={{ color: "inherit", textDecoration: "inherit" }}>plumbing answering service company guide</Link> to compare coverage and dispatch questions before choosing a provider.</>,
    ],
    bullets: [
      "After-hours: nights, weekends and holidays, with emergency dispatch",
      "Overflow: business-hours calls your office cannot reach in time",
      "Separate rules for each: dispatch at night, booking by day",
      "Freeze-event and storm surges answered by the same trained team",
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
      description="Plumbing answering service for incoming enquiries, job intake and after-hours dispatch. Plan coverage around your service area and on-call team."
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
        {
          title: "After-Hours Answering Service Guide",
          desc: "How night and weekend answering works and how to choose a provider that books jobs instead of taking messages.",
          href: "/blog/after-hours-answering-service",
        },
      ]}
      ctaHeading="Ready to book more high-margin plumbing jobs?"
      ctaSubtitle="Get a customized plumbing answering plan built for your field software and on-call team."
      seoContent={seoSections}
    />
  );
}
