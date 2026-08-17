import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Home Services Call Center | HVAC & Plumbing Answering Service",
  description:
    "US-based home services call center for HVAC, plumbing, electrical, and roofing contractors. 24/7 answering, emergency dispatch, and booked-job capture. Get a quote.",
  keywords: [
    "home services call center",
    "hvac answering service",
    "plumbing answering service",
    "answering service for plumbing companies",
    "plumber answering service",
    "electrician answering service",
    "after hours hvac dispatch",
    "emergency service dispatcher",
    "roofing call center",
    "contractor call center services",
    "hvac booking service",
    "pest control answering service",
  ],
  alternates: { canonical: "/industries/home-services-call-center" },
};

const features = [
  {
    title: "24/7 Emergency Dispatch",
    desc: "Burst pipes and dead furnaces do not wait for business hours. Live US agents answer every after-hours, weekend, and holiday call, triage true emergencies against next-morning jobs, and dispatch your on-call tech by your own escalation rules.",
  },
  {
    title: "Booked-Job Call Capture",
    desc: "Every missed call is a job your competitor books instead. Our agents answer in under three rings, qualify the trade and urgency, quote your standard dispatch or service fee, and put the appointment directly on your dispatch board.",
  },
  {
    title: "Field Software Integration",
    desc: "Agents work inside the system you already run — ServiceTitan, Housecall Pro, Jobber, FieldEdge, or ServiceFusion — so bookings, customer history, and job notes land in your dispatch board in real time with no double entry.",
  },
  {
    title: "Overflow & Seasonal Surge",
    desc: "The first heat wave and the first freeze produce call volume no in-house CSR team can absorb. We roll on as overflow the moment your lines back up, then scale back down when the season breaks — no seasonal hiring or layoffs.",
  },
  {
    title: "Outbound Follow-Up & Reactivation",
    desc: "Unsold estimates, lapsed maintenance agreements, and seasonal tune-up reminders turned into booked revenue through structured outbound campaigns run against your CRM.",
  },
  {
    title: "Bilingual Spanish Intake",
    desc: "Native Spanish-speaking agents handle homeowner calls end to end, so a language barrier never costs you a service call in the Southwest, Texas, Florida, or California markets.",
  },
];

const benefits = [
  "24/7/365 live answering — nights, weekends, holidays",
  "100% US-based agents who know the trades",
  "ServiceTitan, Housecall Pro, Jobber & FieldEdge integration",
  "Emergency triage and on-call tech escalation",
  "Bilingual English/Spanish homeowner intake",
  "Per-call and per-booked-job pricing available",
];

const stats = [
  { value: 24, suffix: "/7", label: "Live Emergency Coverage" },
  { value: 3, suffix: " rings", label: "Target Answer Speed" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 5, suffix: "+ trades", label: "HVAC, Plumbing, Electrical, Roofing, Pest" },
];

const faqs = [
  {
    question: "Do you answer after-hours and emergency HVAC or plumbing calls?",
    answer:
      "Yes. 24/7/365 live coverage is the core of our home services program — nights, weekends, and holidays included. Agents triage every call against your own emergency criteria, so a burst pipe or a no-heat call in January reaches your on-call technician immediately, while a routine request is booked for the next available slot instead of waking anyone up.",
  },
  {
    question: "Can you book jobs directly into ServiceTitan or Housecall Pro?",
    answer:
      "Yes. We work inside your existing field service platform rather than a separate system. We support ServiceTitan, Housecall Pro, Jobber, FieldEdge, and ServiceFusion, plus custom systems. Agents book the appointment, capture the job details, and log the call notes directly in your dispatch board so your team sees it in real time with no re-keying.",
  },
  {
    question: "How do you handle overflow during a heat wave or a freeze?",
    answer:
      "Overflow is the most common way home services companies start with us. Your calls roll to our team only after your own CSRs are tied up or after a set number of rings, so you keep your in-house team on the phones and we absorb the spike. Capacity scales within days of a weather event and scales back down when the season breaks.",
  },
  {
    question: "Do your agents understand the trades, or are they generic operators?",
    answer:
      "Agents assigned to home services are trained on trade-specific intake — the difference between a condenser and a furnace issue, what makes a plumbing call a true emergency, what details a roofer needs before rolling a truck. They use your scripts, your service area, your pricing, and your dispatch rules, so homeowners hear a knowledgeable extension of your own office.",
  },
  {
    question: "How is home services answering priced?",
    answer:
      "We offer per-call, per-hour, and per-booked-job models depending on your volume and whether you want full-time coverage or after-hours and overflow only. Most contractors start with after-hours and overflow, which carries a low monthly commitment, then expand to full-time coverage once they see the booked-job numbers. Contact us for a quote based on your call volume.",
  },
  {
    question: "Can you handle Spanish-speaking homeowners?",
    answer:
      "Yes. We staff native Spanish-speaking agents who handle the call end to end rather than transferring to a translation line. For contractors in Texas, Florida, California, Arizona, and Nevada this routinely recovers service calls that would otherwise be lost at hello.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Home Services Call Center for US Contractors",
    heading: "The missed call at 9pm is the job your competitor books at 9:05.",
    accent: "the job your competitor books",
    body: [
      "Contact Center USA runs a 100% US-based home services call center for HVAC, plumbing, electrical, roofing, and pest control contractors — answering the after-hours emergency, the overflow call during a heat wave, and the routine booking your CSRs cannot get to.",
      "Homeowners with a flooded basement do not leave voicemail. They call the next contractor on the list. Our agents answer live, triage the emergency against your own rules, dispatch your on-call tech, and book the job straight into ServiceTitan, Housecall Pro, Jobber, or FieldEdge.",
    ],
    stats: [
      { stat: "24/7", label: "Live nights, weekends, and holiday emergency coverage" },
      { stat: "100%", label: "US-based agents trained on trade-specific intake" },
      { stat: "5+", label: "Trades supported: HVAC, plumbing, electrical, roofing, pest" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House CSRs vs. an Outsourced Home Services Answering Service",
    intro:
      "Most contractors reach the same wall: the office staff who answer beautifully from 8 to 5 cannot cover nights, weekends, and a February freeze at the same time. Here is how the two models compare on the numbers that decide whether a call becomes a booked job.",
    leftTitle: "In-House Office Staff Only",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "After-Hours Coverage",
        left: "Voicemail after 5pm and all weekend — homeowners hang up and call the next contractor.",
        right: "Live US agents 24/7/365 with emergency triage and on-call tech dispatch.",
        leftYes: false,
      },
      {
        label: "Seasonal Surge",
        left: "First freeze or heat wave floods the lines; CSRs cannot keep up and calls are abandoned.",
        right: "Overflow capacity scales within days of a weather event, then scales back down.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Fixed salary, benefits, and PTO coverage whether the phone rings or not.",
        right: "Per-call, per-hour, or per-booked-job — cost tracks demand instead of payroll.",
        leftYes: false,
      },
      {
        label: "Bilingual Intake",
        left: "Usually English-only; Spanish-speaking homeowners are lost at hello.",
        right: "Native Spanish-speaking agents handle the call end to end.",
        leftYes: false,
      },
      {
        label: "Dispatch Software",
        left: "Bookings depend on whoever is at the desk; after-hours notes get re-keyed the next morning.",
        right: "Agents book directly in ServiceTitan, Housecall Pro, Jobber, or FieldEdge in real time.",
        leftYes: false,
      },
      {
        label: "Vacation & Sick Days",
        left: "One CSR out and the phones go unanswered for the day.",
        right: "Coverage never depends on a single person being at a desk.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From First Call to Booked Job",
    intro:
      "Getting a home services contractor live takes days, not months — because we configure to the dispatch board and service area you already run.",
    steps: [
      {
        title: "Service Area & Rules Setup",
        body: "We capture your service area, trades, dispatch fee, on-call rotation, and what you consider a true emergency.",
      },
      {
        title: "Dispatch Board Integration",
        body: "Agents provisioned in your ServiceTitan, Housecall Pro, Jobber, or FieldEdge instance with the right permissions.",
      },
      {
        title: "Trade-Specific Training",
        body: "Agents trained on your scripts, pricing, and the intake questions each trade needs before a truck rolls.",
      },
      {
        title: "Go Live on Overflow",
        body: "Start with after-hours and overflow so your own CSRs stay on the phones and we absorb what they cannot reach.",
      },
      {
        title: "Measure Booked Jobs",
        body: "Weekly reporting on calls answered, emergencies dispatched, and jobs booked — the number that decides the ROI.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Trades",
    heading: "Home Services Trades We Answer For",
    intro:
      "Intake is not the same across trades. A no-heat call and a roof leak need different questions before anyone rolls a truck, so our pods are trained per trade.",
    items: [
      {
        icon: "briefcase",
        stat: "HVAC",
        title: "HVAC & Generator",
        body: "No-heat and no-cool triage, maintenance agreement renewals, and seasonal tune-up booking with after-hours dispatch.",
      },
      {
        icon: "store",
        stat: "Plumbing",
        title: "Plumbing & Drain",
        body: "Burst pipe, backup, and water heater emergencies triaged 24/7, with routine work booked to your next open slot.",
      },
      {
        icon: "shopping-bag",
        stat: "Electric",
        title: "Electrical & Solar",
        body: "Outage and hazard triage, panel and generator inquiries, and estimate scheduling for residential electricians.",
      },
      {
        icon: "dollar",
        stat: "Roofing",
        title: "Roofing & Pest Control",
        body: "Storm-surge intake, leak reports, inspection scheduling, and recurring pest treatment booking.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Contractors Choose a US-Based Home Services Call Center",
    image: "/images/cc-agent-headset.jpg",
    imagePosition: "right",
    body: [
      "A homeowner standing in two inches of water can tell within one sentence whether the person on the phone understands the problem. Offshore answering services routinely take a message, promise a callback, and lose the job — because they cannot triage the emergency or book into your dispatch board.",
      "Contact Center USA staffs domestic agents trained on the trades, working inside your field service software, following your on-call rotation and your emergency rules. The result is the outcome that actually matters to a contractor: more of the calls you already paid marketing dollars to generate turn into booked jobs.",
    ],
    bullets: [
      "100% US-based agents — no offshore routing on emergency calls",
      "Trained on trade-specific intake, not generic message taking",
      "Live booking into ServiceTitan, Housecall Pro, Jobber, and FieldEdge",
      "Your on-call rotation and your emergency criteria, followed exactly",
      "Bilingual English/Spanish intake included",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Find out how many calls you are missing after 5pm.",
    accent: "how many calls you are missing",
    body: "Most contractors are surprised by the after-hours number. Send us your call volume and we will put together a coverage and pricing plan for your trades and service area — including per-booked-job options.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center Services",
    desc: "Full inbound coverage for homeowner calls, overflow, and seasonal surge across every trade.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Outbound follow-up on unsold estimates and lapsed maintenance agreements to refill the schedule.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Live Chat Outsourcing",
    desc: "Capture homeowners who start on your website instead of picking up the phone.",
    href: "/services/live-chat-outsourcing",
  },
];

export default function HomeServicesPage() {
  return (
    <ServicePageTemplate
      badge="Home Services Call Center"
      title="24/7 Answering & Dispatch for the Home Services Industry"
      titleHighlight="Home Services Industry"
      subtitle="HVAC, plumbing, electrical, roofing, and pest control contractors trust our US-based agents to answer every emergency call, triage it correctly, and book the job straight into your dispatch board."
      description="Our home services call center is built around one number: booked jobs. We answer nights, weekends, and holidays, absorb your seasonal overflow, triage true emergencies to your on-call technician, and book routine work directly in ServiceTitan, Housecall Pro, Jobber, or FieldEdge — so the marketing dollars you already spent turn into revenue instead of voicemail."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-night.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
