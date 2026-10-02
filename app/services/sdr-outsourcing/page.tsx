import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "SDR Outsourcing | US-Based Sales Development Reps",
  description:
    "Sales development rep outsourcing with dedicated US-based SDRs who prospect, qualify and book meetings for your account executives. Get a free consultation.",
  keywords: [
    "sdr outsourcing",
    "sales development rep outsourcing",
    "outsourced sdr",
    "outsourced sales development",
    "dedicated outsourced sdr",
    "sdr as a service",
    "outsourced sales development representatives",
  ],
  alternates: { canonical: "/services/sdr-outsourcing" },
};

const features = [
  {
    title: "Dedicated Outsourced SDRs",
    desc: "Reps assigned to your program learn your product, ICP, and messaging and prospect only for you — not a shared pool cycling across a dozen clients' campaigns.",
  },
  {
    title: "Outbound Prospecting Cadences",
    desc: "Multi-touch cadences combining calls, email, and LinkedIn outreach, written around your value propositions and tested against your target personas.",
  },
  {
    title: "Inbound Lead Follow-Up",
    desc: "Fast follow-up on demo requests, content downloads, and trial sign-ups, so marketing-generated leads get a real conversation instead of going cold.",
  },
  {
    title: "Qualification to Your Framework",
    desc: "SDRs qualify against BANT, MEDDIC, SPIN, or your own criteria, and only pass meetings that meet the definition your sales leaders sign off on.",
  },
  {
    title: "Meeting Booking & Handoff",
    desc: "Meetings land directly on your account executives' calendars with notes on pain points, stakeholders, and timing, so the first call starts in context.",
  },
  {
    title: "CRM Hygiene & Reporting",
    desc: "Every touch is logged in your CRM, with reporting on activity, conversations, meetings booked, and meetings held, plus call recordings for coaching.",
  },
];

const benefits = [
  "Dedicated, US-based SDRs",
  "Your ICP, your messaging, your CRM",
  "Qualification criteria set by your sales leaders",
  "Salesforce, HubSpot, Outreach & SalesLoft support",
  "Call recordings and transparent reporting",
  "Month-to-month terms, no long contracts",
];

const faqs = [
  {
    question: "What is SDR outsourcing?",
    answer:
      "SDR outsourcing means hiring an outside partner to provide sales development representatives who prospect and qualify leads for your sales team. The outsourced SDRs research accounts, run outbound cadences, follow up on inbound leads, and book qualified meetings for your account executives, while the partner handles recruiting, training, management, and the tools behind the program.",
  },
  {
    question: "Is a dedicated outsourced SDR better than a shared SDR model?",
    answer:
      "A dedicated SDR works only on your program, which means deeper product knowledge, consistent messaging, and a rep who builds familiarity with your market over time. A shared model spreads one rep across several clients, which can work for small tests but tends to produce shallower conversations. For most B2B sales cycles we recommend dedicated reps.",
  },
  {
    question: "What does an outsourced SDR program cost?",
    answer:
      "Pricing depends on the number of dedicated reps, hours of coverage, the channels involved, how complex your product and buyers are, the data and tools required, and whether the program is billed as a retainer or tied to outcomes such as qualified meetings. We scope your program first and then provide a proposal built around it.",
  },
  {
    question: "Will outsourced SDRs sound like our company?",
    answer:
      "Yes. During onboarding your team trains our reps on your product, positioning, competitors, and objection handling, and we build talk tracks and email copy with you. Reps represent your brand on every touch, and weekly calibration sessions keep messaging aligned as your offer evolves.",
  },
  {
    question: "Do we keep control of the CRM and the pipeline data?",
    answer:
      "Yes. Our SDRs work inside your CRM and sales engagement tools wherever possible, so every account, contact, activity, and note stays in your system. If the program ever ends, the pipeline history stays with you.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Sales Development Rep Outsourcing",
    heading: "Sales development rep outsourcing that keeps your account executives selling, not prospecting.",
    accent: "selling, not prospecting",
    body: [
      "Hiring, ramping, and managing an internal SDR team takes months, and the role is known for high turnover. Every rep who leaves takes their pipeline knowledge with them and leaves a gap in your top of funnel.",
      "Contact Center USA provides dedicated, 100% US-based outsourced SDRs who learn your product, work your ICP, and book qualified meetings directly onto your account executives' calendars — with management, coaching, and reporting handled by us.",
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Compare",
    heading: "In-House SDR Team vs. Outsourced SDRs",
    intro:
      "The decision is not only about cost. It is about how fast you can build pipeline, who carries the hiring and turnover risk, and how much management time your sales leaders can spare.",
    leftTitle: "In-House SDR Team",
    rightTitle: "Contact Center USA SDRs",
    rows: [
      {
        label: "Time to first conversations",
        left: "Recruit, hire, onboard, and ramp before the first qualified meeting.",
        right: "Reps start from an established training and management process, so ramp is shorter.",
        leftYes: false,
      },
      {
        label: "Turnover risk",
        left: "When an SDR leaves, you restart the hiring cycle and lose momentum.",
        right: "We recruit, backfill, and train replacements so coverage continues.",
        leftYes: false,
      },
      {
        label: "Management load",
        left: "Your sales leaders coach, QA, and schedule SDRs on top of their own targets.",
        right: "Dedicated team leads handle coaching, call QA, and daily performance management.",
        leftYes: false,
      },
      {
        label: "Tools & data",
        left: "You license dialers, engagement platforms, and data tools per seat.",
        right: "We support Salesforce, HubSpot, Outreach, and SalesLoft and work inside your stack.",
        leftYes: false,
      },
      {
        label: "Flexibility",
        left: "Headcount is hard to reduce when priorities or budgets change.",
        right: "Add or reduce reps as needed on month-to-month terms.",
        leftYes: false,
      },
      {
        label: "Brand & control",
        left: "Full control, but full responsibility for results and process.",
        right: "Reps represent your brand, follow your criteria, and log everything in your CRM.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "How We Launch Your Outsourced SDR Team",
    intro:
      "Every SDR program follows the same launch path, built with your sales and marketing leaders from day one.",
    steps: [
      {
        title: "ICP & Qualification",
        body: "We define target accounts, personas, and the exact criteria a meeting must meet before it reaches an AE.",
      },
      {
        title: "Messaging & Cadences",
        body: "Talk tracks, email sequences, and objection handling are built from your positioning and approved by your team.",
      },
      {
        title: "Rep Training",
        body: "Dedicated SDRs are trained on your product, competitors, and CRM workflow before the first live touch.",
      },
      {
        title: "Launch & Calibrate",
        body: "Outreach goes live, and weekly calibration reviews calls, conversion, and feedback from your AEs.",
      },
      {
        title: "Optimize & Scale",
        body: "We refine what works, retire what does not, and add reps when you are ready for more pipeline.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "When to Outsource",
    heading: "Signs It Is Time to Outsource Sales Development",
    image: "/images/cc-support-team.jpg",
    imagePosition: "right",
    body: [
      "Outsourcing SDRs works best when you already have a product that sells, a clear ideal customer profile, and account executives who could close more if they had more qualified conversations.",
      "It is also a strong fit when you want to test a new market, segment, or product line without committing to permanent headcount first.",
    ],
    bullets: [
      "Account executives spend too much of their week prospecting",
      "Inbound leads wait too long for a first response",
      "SDR turnover keeps resetting your pipeline",
      "You are entering a new market or launching a new product",
      "Your sales leaders have no time left to coach reps",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to add dedicated SDRs without the hiring cycle?",
    accent: "dedicated SDRs",
    body: "Tell us about your ICP, your sales cycle, and your pipeline goals. We will map out an outsourced SDR program, explain how we would launch it, and show you what your account executives can expect.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "B2B Sales Outsourcing",
    desc: "Outsource B2B sales to US-based SDRs and closers, from pipeline generation to full-cycle selling.",
    href: "/services/b2b-sales-outsourcing",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Comprehensive lead generation campaigns with multi-channel outreach and qualified appointment booking.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Outbound Call Center",
    desc: "High-volume outbound calling programs for sales, surveys, and customer engagement campaigns.",
    href: "/solutions/outbound-call-center-services",
  },
  {
    title: "Customer Acquisition Outsourcing",
    desc: "End-to-end customer acquisition services that drive growth across every stage of the buyer journey.",
    href: "/services/customer-acquisition-outsourcing",
  },
  {
    title: "Sales Outsourcing",
    desc: "US-based outsourced sales teams for inbound and outbound selling.",
    href: "/solutions/sales-outsourcing",
  },
  {
    title: "Inside Sales Outsourcing Guide",
    desc: "When to outsource SDRs, the main service models, and how to scale pipeline without hiring.",
    href: "/blog/inside-sales-outsourcing-guide",
  },
];

export default function SdrOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="SDR Outsourcing"
      title="Sales Development Rep (SDR) Outsourcing"
      titleHighlight="Sales Development Rep (SDR) Outsourcing"
      subtitle="Dedicated, US-based outsourced SDRs who prospect, qualify, and book meetings for your account executives — managed, coached, and reported on by our team."
      description="Building an internal sales development team means recruiting, ramping, coaching, and replacing reps while pipeline targets keep coming. With sales development rep outsourcing from Contact Center USA, you get dedicated SDRs who learn your product and ICP, run multi-channel outreach in your brand voice, follow up on inbound leads, and hand qualified meetings to your closers. Everything is logged in your CRM, so you keep full visibility and full ownership of your pipeline."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-focus.jpg"
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
