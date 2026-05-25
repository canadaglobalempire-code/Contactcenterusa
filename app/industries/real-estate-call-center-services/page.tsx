import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Real Estate Call Center | Contact Center USA",
  description:
    "US-based real estate call center support for customer care, inbound calls, outbound outreach, and back office workflows. Request an outsourcing quote.",
  keywords: [
    "real estate call center",
    "real estate bpo services",
    "property management customer support",
    "real estate lead qualification",
    "real estate appointment setting",
    "after hours real estate answering",
    "commercial real estate call center",
    "real estate investor support",
  ],
  alternates: { canonical: "/industries/real-estate-call-center-services" },
};

const features = [
  {
    title: "Lead Qualification & Capture",
    desc: "Immediate response to every inquiry with trained agents who qualify leads based on your criteria — budget, timeline, property type, and location — so your agents only spend time on serious prospects.",
  },
  {
    title: "Appointment Scheduling & Showings",
    desc: "Seamless scheduling for property showings, open houses, and consultations synced directly with your agents' calendars to eliminate double-bookings and maximize selling time.",
  },
  {
    title: "Property Inquiry Management",
    desc: "Knowledgeable agents who answer detailed questions about listings, neighborhood features, HOA details, and pricing — keeping prospects engaged until your team can follow up.",
  },
  {
    title: "Investor Relations Support",
    desc: "Specialized support for real estate investment firms handling investor inquiries, capital call communications, portfolio updates, and deal pipeline management.",
  },
  {
    title: "After-Hours Lead Capture",
    desc: "24/7 live answering ensures you never miss a hot lead. Buyers and sellers who call after hours reach a real person who captures their information and schedules follow-up.",
  },
  {
    title: "CRM Integration & Updates",
    desc: "Real-time lead entry and status updates directly in your CRM — Salesforce, Follow Up Boss, KvCORE, or any platform — so your sales pipeline stays current without manual data entry.",
  },
];

const benefits = [
  "Instant lead response 24/7",
  "CRM integration (Salesforce, Follow Up Boss)",
  "Custom qualification scripts",
  "Bilingual agent availability",
  "Showing & open house scheduling",
  "Dedicated real estate trained agents",
];

const stats = [
  { value: 85, suffix: "%", label: "Lead Response Under 30 Seconds" },
  { value: 3, suffix: "x", label: "More Qualified Appointments" },
  { value: 500, suffix: "K+", label: "Leads Captured" },
  { value: 99, suffix: "%", label: "Uptime Guarantee" },
];

const testimonial = {
  quote:
    "Before Contact Center USA, we were losing leads after hours. Now every call is answered in under 30 seconds, and our qualified appointment rate has tripled. They pay for themselves many times over.",
  name: "A.C.",
  title: "Broker/Owner",
  company: "A National Real Estate Brokerage",
  initials: "AC",
};

const faqs = [
  {
    question: "How do your agents qualify real estate leads?",
    answer:
      "We work with you to develop custom qualification scripts based on your ideal client profile. Agents assess budget range, purchase timeline, preferred locations, property type, and financing status before passing warm leads directly to your sales team.",
  },
  {
    question: "Can you schedule showings directly on our agents' calendars?",
    answer:
      "Yes, we integrate with Google Calendar, Outlook, Calendly, and real estate-specific platforms like Follow Up Boss and ShowingTime. Agents book showings in real-time, send confirmations, and handle rescheduling without any effort from your team.",
  },
  {
    question: "Do you handle both residential and commercial real estate calls?",
    answer:
      "Absolutely. We support residential brokerages, commercial real estate firms, property management companies, and real estate investment groups. Each program is customized with industry-specific scripts and training.",
  },
  {
    question: "How fast do your agents respond to new leads?",
    answer:
      "Our average lead response time is under 30 seconds for phone calls. For web form and chat leads, we respond within 60 seconds. Speed-to-lead is critical in real estate, and we treat every inquiry with urgency.",
  },
  {
    question: "What CRM systems do you integrate with?",
    answer:
      "We integrate with all major real estate CRMs including Salesforce, Follow Up Boss, KvCORE, BoomTown, Sierra Interactive, and HubSpot. Lead data is pushed in real time so your pipeline is always up to date.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Real Estate BPO in USA",
    heading: "The real estate call center brokerages and property managers turn to when speed-to-lead decides who closes the deal.",
    accent: "closes the deal",
    body: [
      "Contact Center USA is one of the best real estate call center providers in the USA — a 100% US-based real estate BPO services operation trusted by residential brokerages, commercial firms, property management companies, and real estate investment groups.",
      "For real estate operators evaluating property management customer support and lead response partners, the math is simple: 30-second response time triples qualified appointment rates, and 24/7 coverage ensures no after-hours lead is lost to a competitor. We deliver both.",
    ],
    stats: [
      { stat: "<30s", label: "Average lead response time on inbound phone and web-form inquiries" },
      { stat: "3x", label: "Increase in qualified appointment rate vs. in-house-only response" },
      { stat: "24/7", label: "Live agent coverage including weekends and holidays — no voicemail gaps" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Agent Team vs. Contact Center USA BPO",
    intro:
      "Every brokerage and property management firm weighs the same decision: have producing agents chase inbound leads and resident calls themselves, or partner with a specialized real estate BPO. Here's how the two compare on the factors that drive conversion and retention.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Speed-to-Lead",
        left: "Agents in showings, closings, or after hours — leads sit 5-30 minutes before first contact.",
        right: "Sub-30-second answer on phone inquiries and sub-60-second response on web-form leads.",
        leftYes: false,
      },
      {
        label: "24/7 Live Coverage",
        left: "After-hours and weekend leads hit voicemail; competitor brokerages pick them up.",
        right: "Live agents answering 24/7/365 including holidays, weekends, and peak evening hours.",
        leftYes: false,
      },
      {
        label: "Maintenance & Resident Calls (PM)",
        left: "Property managers juggle resident emergency calls with leasing, tours, and vendor coordination.",
        right: "Dedicated property management queue for maintenance intake, emergency triage, and vendor dispatch.",
        leftYes: false,
      },
      {
        label: "CRM Integration",
        left: "Lead data entry lags or gets skipped during high-volume periods.",
        right: "Real-time entry in Follow Up Boss, KvCORE, BoomTown, Sierra Interactive, Salesforce.",
        leftYes: false,
      },
      {
        label: "Qualification Consistency",
        left: "Qualification quality swings based on which agent takes the call.",
        right: "Consistent qualification scripts aligned to your ICP executed on every inbound contact.",
        leftYes: false,
      },
      {
        label: "TCPA & Fair Housing Compliance",
        left: "Compliance gaps in outbound follow-up and fair housing scripting create legal exposure.",
        right: "TCPA-configured dialers and fair housing-reviewed scripts with agent certification.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Real Estate BPO Onboarding Process",
    intro:
      "Every brokerage, property management firm, and real estate investment group flows through the same structured five-stage workflow — engineered to get you live in days, not months.",
    steps: [
      {
        title: "ICP & Script Discovery",
        body: "Workflow mapping, ICP definition, and qualification criteria captured directly from your top agents.",
      },
      {
        title: "CRM & Calendar Integration",
        body: "Real-time connections to Follow Up Boss, KvCORE, BoomTown, Salesforce, ShowingTime, and Calendly.",
      },
      {
        title: "Script & Protocol Buildout",
        body: "Lead qualification, maintenance triage, emergency escalation, and fair housing-reviewed scripts.",
      },
      {
        title: "Agent Certification",
        body: "Real estate-specific training, TCPA certification, and shadow calls before handling live leads.",
      },
      {
        title: "Go-Live & Optimization",
        body: "Phased launch with daily lead scorecards, weekly optimization reviews, and SLA-backed reporting.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Real Estate Sub-Segments We Serve",
    intro:
      "Real estate spans residential brokerage, commercial leasing, multifamily operations, and institutional investment. Our real estate BPO services are tuned to each sub-segment's lead dynamics and compliance obligations.",
    items: [
      {
        icon: "home",
        stat: "Resi",
        title: "Residential Brokerages",
        body: "Lead qualification, showing scheduling, and follow-up campaigns for single-agent, team, and brokerage operations.",
      },
      {
        icon: "building",
        stat: "PM",
        title: "Property Management",
        body: "Resident intake, maintenance triage, emergency dispatch, and leasing tour scheduling for multifamily and SFR.",
      },
      {
        icon: "briefcase",
        stat: "CRE",
        title: "Commercial Real Estate",
        body: "Tenant prospecting, broker concierge, and landlord reporting support for office, industrial, and retail assets.",
      },
      {
        icon: "dollar",
        stat: "Invest",
        title: "Real Estate Investors",
        body: "Investor relations support, capital call communication, and deal pipeline intake for REITs and syndicators.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Real Estate Operators Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore real estate answering services frequently fail on accent, local market context, and fair housing nuance. Generic domestic answering services handle real estate like any other inbound call — missing the qualification depth and CRM fluency that actually move pipeline.",
      "Contact Center USA is different: a 100% US-based real estate call center with native fluency in the major real estate CRMs, fair housing-reviewed scripts, and a property management customer support queue designed for the 2am water-heater call.",
    ],
    bullets: [
      "100% US-based agents answering in under 30 seconds, 24/7/365",
      "Native experience on Follow Up Boss, KvCORE, BoomTown, Sierra, Salesforce",
      "Fair housing-reviewed scripts and TCPA-configured outbound follow-up",
      "Property management maintenance triage with emergency escalation protocols",
      "Commercial, residential, and institutional investor relations programs",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better real estate BPO partner?",
    accent: "better real estate BPO",
    body: "Whether you're a solo agent fighting lead leakage, a brokerage scaling ISA coverage, a property management firm drowning in maintenance calls, or a commercial firm building out tenant concierge — we can show you the speed-to-lead and conversion impact before you commit. Request a free consultation and we'll walk through CRM integration, scripts, and go-live timeline.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Lead Generation",
    desc: "Proactive outbound calling to generate and qualify new real estate leads.",
    href: "/services/lead-generation",
  },
  {
    title: "Appointment Setting",
    desc: "Professional appointment scheduling that fills your sales calendar with qualified prospects.",
    href: "/services/appointment-setting",
  },
  {
    title: "After-Hours Answering",
    desc: "24/7 live answering so you never miss a potential buyer or seller.",
    href: "/services/after-hours",
  },
];

export default function RealEstatePage() {
  return (
    <ServicePageTemplate
      badge="Real Estate Call Center Services"
      title="Call Center Solutions for Real Estate Professionals"
      titleHighlight="Real Estate Professionals"
      subtitle="Never miss a lead again. Our real estate call center qualifies prospects, schedules showings, and keeps your pipeline full — 24 hours a day, 7 days a week."
      description="In real estate, speed wins deals. Our agents respond to every inquiry within seconds, qualify leads against your criteria, and book showings directly on your calendar. Whether you are a solo agent, a brokerage, or a property management firm, we become the reliable front line that keeps your business growing while you focus on closing."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-working.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
