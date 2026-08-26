import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "CPA & Accounting Firm Answering Service | Tax Season Surge",
  description:
    "US-based answering service and call center for CPA firms and accounting practices. Client intake, tax appointment scheduling, and seasonal surge management.",
  keywords: [
    "cpa answering service",
    "accounting firm call center",
    "tax season answering service",
    "accountant answering service",
    "cpa appointment scheduling service",
    "tax preparation call center",
    "accounting customer service outsourcing",
  ],
  alternates: { canonical: "/industries/accounting-cpa-call-center" },
};

const features = [
  {
    title: "Tax Season Peak Surge Absorption",
    desc: "From January through April 15 (and October extensions), phone volumes skyrocket by 400%. Our US agents absorb every inbound call, screening inquiries and booking tax prep meetings so partners stay focused on billable work.",
  },
  {
    title: "Client Intake & Consultation Scheduling",
    desc: "Qualify prospective business and individual tax clients based on your firm's minimum fee, entity structure (LLC, S-Corp, C-Corp), and service scope before placing appointments directly on partners' calendars.",
  },
  {
    title: "Secure Document & Tax Return Status Intake",
    desc: "Handle routine client inquiries regarding 1040 status, K-1 delivery, document upload verification, and IRS notice drop-offs, logging all details securely in your practice management software.",
  },
  {
    title: "Calendar & Practice Software Integration",
    desc: "Our agents work directly inside Calendly, Acuity, Karbon, Canopy, TaxDome, or Practice Ignition to schedule appointments according to individual CPA and staff availability.",
  },
  {
    title: "24/7 After-Hours & Deadline Answering",
    desc: "Ensure clients facing urgent tax deadlines or business compliance issues always reach a professional live US agent, 24 hours a day, 7 days a week.",
  },
  {
    title: "Bilingual English & Spanish Client Intake",
    desc: "Native bilingual agents provide seamless communication for Spanish-speaking business owners and individuals, expanding your firm's market reach.",
  },
];

const benefits = [
  "100% US-based agents trained in accounting & tax terminology",
  "Zero billable hours wasted answering routine phone interruptions",
  "Integration with TaxDome, Canopy, Karbon, Calendly & Acuity",
  "Elastic capacity that scales up for Q1 tax season and down for summer",
  "Strict client confidentiality and financial data security protocols",
  "Month-to-month contracts with no long-term lock-in",
];

const stats = [
  { value: 98.7, suffix: "%", label: "Calls Answered Under 3 Rings", decimals: 1 },
  { value: 15, suffix: "+ Hrs/Wk", label: "Billable Time Saved Per CPA" },
  { value: 0, suffix: " Tax Inquiries", label: "Lost During Busy Season", prefix: "" },
  { value: 24, suffix: "/7/365", label: "Professional Live Answering" },
];

const testimonial = {
  quote:
    "During tax season, our CPAs were losing 3 to 4 hours every day just answering status calls and scheduling meetings. Contact Center USA took over our phones, integrated with TaxDome, and screened every new prospect. We had our most profitable tax season on record.",
  name: "David K., CPA",
  title: "Managing Partner",
  company: "A Regional Accounting & Advisory Firm (New York & New Jersey)",
  initials: "DK",
};

const faqs = [
  {
    question: "Can your call center scale up for January–April and scale down for the summer?",
    answer:
      "Yes. We specialize in seasonal tax surges. You can scale up your line capacity and agent coverage during busy season (January through April 15 and September/October extension deadlines), and scale back down to a basic maintenance tier during slower summer months with zero penalty.",
  },
  {
    question: "How do your agents qualify prospective accounting clients?",
    answer:
      "We follow your exact qualification rubric. For example, we can screen for business entity type (S-Corp, partnership, sole prop), estimated annual revenue, clean books status, and your firm's minimum fee threshold before scheduling a paid or complimentary discovery call.",
  },
  {
    question: "Which accounting practice management software do you integrate with?",
    answer:
      "We integrate with leading accounting and calendar software including TaxDome, Canopy, Karbon, Practice Ignition, Calendly, Acuity, Microsoft Bookings, and Google Calendar.",
  },
  {
    question: "How do you protect client confidentiality and sensitive financial information?",
    answer:
      "We enforce strict data security, SOC 2 alignment, and PCI-DSS compliance protocols. All client records and call notes are encrypted, and agents adhere to strict non-disclosure and privacy standards.",
  },
];

const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Accounting & CPA Call Center Outsourcing",
    heading: "Stop wasting $350/hour billable CPA time answering $25/hour administrative phone calls.",
    accent: "answering $25/hour administrative phone calls",
    body: [
      "Every phone interruption during tax season derails deep analytical work, causing delays, burnout, and lost billable hours. Yet letting calls go to voicemail risks losing lucrative business advisory and high-net-worth tax clients to competing firms.",
      "Contact Center USA provides professional, articulate US agents who screen callers, handle document status questions, qualify new clients, and book appointments directly on your calendar.",
    ],
    stats: [
      { stat: "Tax Season", label: "Elastic scale for Q1 and extension surges" },
      { stat: "TaxDome / Karbon", label: "Live calendar & CRM workflow integration" },
      { stat: "Month-to-Month", label: "Scale up in January, down in May with no lock-in" },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Maximize Billable Hours",
    heading: "Protect Partner Productivity While Delivering Five-Star Client Communication",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "In professional services, client perception is everything. When clients call your firm, they are greeted by polished, knowledgeable American agents who represent your practice with dignity and competence.",
      "Whether you are a solo practitioner or a multi-office accounting firm, Contact Center USA provides the administrative muscle you need to maximize profitability.",
    ],
    bullets: [
      "24/7/365 live answering for tax inquiries and deadline notices",
      "Screen and qualify high-fee business and individual tax prospects",
      "Sync directly with TaxDome, Canopy, Karbon, and Calendly",
      "Eliminate tax season partner fatigue and administrative distraction",
      "Month-to-month agreements with no long-term obligations",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to protect your billable time and streamline your client intake?",
    accent: "protect your billable time",
    body: "Contact Center USA can deploy a dedicated US answering team tailored to your CPA practice in under 48 hours.",
    ctaLabel: "Get a Free CPA Answering Service Quote",
    ctaHref: "/contact",
  },
];

export default function CPAPage() {
  return (
    <ServicePageTemplate
      badge="Financial & Accounting"
      title="CPA & Accounting Firm Answering Service"
      titleHighlight="CPA & Accounting Firm Answering Service"
      subtitle="Tax Season Surge Absorption, Client Intake & TaxDome Calendar Sync"
      description="Protect your firm's billable hours and capture high-value tax clients. Our 100% US-based agents screen prospects, manage status inquiries, and schedule appointments directly in TaxDome, Canopy & Calendly 24/7/365."
      features={features}
      benefits={benefits}
      image="/images/cc-management.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={[
        {
          title: "Financial Services Call Center",
          desc: "Full BPO solutions for wealth management, banking, and fintech.",
          href: "/industries/financial-services-call-center",
        },
        {
          title: "Lead Generation & Appointment Setting",
          desc: "Targeted outbound appointment setting for business services.",
          href: "/solutions/lead-generation-appointment-setting",
        },
        {
          title: "Virtual & Remote Support",
          desc: "24/7 virtual receptionist and overflow answering services.",
          href: "/services/virtual-remote-support",
        },
      ]}
      ctaHeading="Ready to reclaim your firm's billable time?"
      ctaSubtitle="Get a customized accounting answering service plan tailored to your practice software."
      seoContent={seoSections}
    />
  );
}
