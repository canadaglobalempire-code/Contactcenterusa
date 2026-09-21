import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "US-Based Virtual Receptionist Services | Live Call Answering",
  description:
    "Live US-based virtual receptionist services for small businesses and professional firms. Every call answered, appointments booked, calls screened and routed.",
  keywords: [
    "virtual receptionist services",
    "virtual receptionist companies",
    "virtual receptionist usa",
    "us based virtual receptionist",
    "live virtual receptionist",
    "small business virtual receptionist",
    "outsourced receptionist",
    "professional call answering service",
    "remote receptionist service",
    "bilingual virtual receptionist",
  ],
  alternates: { canonical: "/industries/virtual-receptionist-services" },
};

const features = [
  {
    title: "Live Call Answering in Your Company Name",
    desc: "Every call answered by a live US receptionist using your greeting, your company name, and your tone — so callers hear a professional front desk rather than a call center or a voicemail box.",
  },
  {
    title: "Appointment Booking & Calendar Management",
    desc: "Receptionists book directly into your calendar — Calendly, Acuity, Google Calendar, Outlook, or your practice management system — confirming availability live on the call instead of promising a callback.",
  },
  {
    title: "Call Screening & Warm Transfer",
    desc: "Calls are screened against your rules, then warm-transferred to the right person with context, sent to voicemail, or taken as a message. You stop losing focus to sales calls and robocalls.",
  },
  {
    title: "New Client & Lead Intake",
    desc: "Structured intake for prospective clients, capturing the details you actually need to qualify the enquiry, delivered to your inbox or CRM within minutes of the call ending.",
  },
  {
    title: "Overflow & After-Hours Coverage",
    desc: "Use us for everything, or only when your own line is busy, at lunch, after hours, or during vacation. Coverage adapts to how your office actually runs rather than forcing an all-or-nothing switch.",
  },
  {
    title: "Bilingual English/Spanish Reception",
    desc: "Native Spanish-speaking receptionists handle the entire call, so a Spanish-speaking caller gets the same professional experience as everyone else instead of a language barrier at the front door.",
  },
];

const benefits = [
  "100% US-based receptionists — no offshore routing",
  "Answered live in your company name",
  "Appointment booking into your existing calendar",
  "Call screening, warm transfer, and message taking",
  "After-hours, overflow, and holiday coverage",
  "Bilingual English/Spanish reception",
];

const stats = [
  { value: 3, suffix: " rings", label: "Target Answer Speed" },
  { value: 100, suffix: "%", label: "US-Based Receptionists" },
  { value: 24, suffix: "/7", label: "Coverage Available" },
  { value: 2, suffix: " languages", label: "English and Spanish Reception" },
];

const faqs = [
  {
    question: "Will callers know they are talking to a virtual receptionist?",
    answer:
      "No. Receptionists answer in your company name using the greeting you supply, and they work from your call handling rules, your staff directory, and your calendar. To the caller it sounds like your own front desk. We do not identify ourselves as an outside service unless you specifically ask us to.",
  },
  {
    question: "Can a virtual receptionist book appointments for me?",
    answer:
      "Yes, and this is what most clients value most. Receptionists are given access to your calendar — Calendly, Acuity, Google Calendar, Outlook, or a practice management system — and book the appointment live while the caller is still on the phone. Confirmations and reminders can be sent by text or email as part of the same workflow.",
  },
  {
    question: "Do I have to route all my calls to you?",
    answer:
      "No. Most businesses start partially. Common setups are overflow only, where calls come to us after a set number of rings; after-hours and weekends; or lunch and vacation coverage. You can change the routing rules whenever your staffing changes, and expand to full-time coverage later if it makes sense.",
  },
  {
    question: "How quickly do I get my messages?",
    answer:
      "Immediately. Messages and intake details are delivered by email, text, or directly into your CRM within minutes of the call ending — usually while the caller still expects to hear back. Urgent calls follow your escalation rules and can be warm-transferred to your mobile instead of taken as a message.",
  },
  {
    question: "What kinds of businesses use virtual receptionist services?",
    answer:
      "Professional firms and small businesses where the phone is the front door: law offices, accounting and bookkeeping firms, medical and dental practices, real estate and property management, home services contractors, consultants, agencies, and IT providers. The common thread is a team too busy to answer every call but too dependent on those calls to let them go to voicemail.",
  },
  {
    question: "How is a virtual receptionist priced?",
    answer:
      "Pricing is based on call volume and the coverage window you need, with per-call and per-minute options depending on whether your calls tend to be quick messages or longer intake conversations. Overflow and after-hours plans carry a lower commitment than full-time reception. Contact us with your rough monthly call volume and we will quote the right structure.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "US-Based Virtual Receptionist Services",
    heading: "Voicemail is the most expensive employee you have.",
    accent: "the most expensive employee you have",
    body: [
      "Contact Center USA provides live, 100% US-based virtual receptionist services for small businesses and professional firms — answering in your company name, booking into your calendar, and screening the calls that would otherwise interrupt your day.",
      "For a professional firm, a missed call is rarely a missed message. It is a prospective client who called three firms, spoke to whichever one answered, and never called back.",
    ],
    stats: [
      { stat: "100%", label: "US-based receptionists answering in your company name" },
      { stat: "3 rings", label: "Target answer speed on every routed call" },
      { stat: "24/7", label: "After-hours, weekend, and holiday coverage available" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Receptionist vs. a Virtual Receptionist Service",
    intro:
      "A full-time front desk hire is one of the larger fixed costs a small firm takes on, and it still leaves gaps at lunch, on vacation, and after five. Here is how the two models compare.",
    leftTitle: "Full-Time In-House Receptionist",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Coverage Gaps",
        left: "Lunch, breaks, vacation, and sick days leave the phone unanswered.",
        right: "Continuous coverage that never depends on one person being at a desk.",
        leftYes: false,
      },
      {
        label: "After-Hours Calls",
        left: "Voicemail from 5pm — prospects call the next firm on their list.",
        right: "Live answering into the evening, weekends, and holidays as needed.",
        leftYes: false,
      },
      {
        label: "Cost Structure",
        left: "Full salary, payroll taxes, benefits, and PTO regardless of call volume.",
        right: "Per-call or per-minute pricing that tracks how busy the phone actually is.",
        leftYes: false,
      },
      {
        label: "Peak Call Times",
        left: "One person cannot answer three lines ringing at once — callers hold or drop.",
        right: "Overflow capacity absorbs simultaneous calls without a hold queue.",
        leftYes: false,
      },
      {
        label: "Bilingual Coverage",
        left: "Only if you specifically hired for it, and only when that person is in.",
        right: "Native Spanish-speaking receptionists available on every shift.",
        leftYes: false,
      },
      {
        label: "Ramp Time",
        left: "Weeks to recruit, hire, and train — then repeat on turnover.",
        right: "Live within days on your greeting, calendar, and routing rules.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Your Greeting to a Booked Appointment",
    intro:
      "A virtual reception setup is fast because it configures around the phone system and calendar you already use.",
    steps: [
      {
        title: "Greeting & Rules",
        body: "We capture your greeting, staff directory, screening preferences, and what counts as urgent enough to transfer.",
      },
      {
        title: "Calendar & CRM Access",
        body: "Receptionists provisioned in your calendar and CRM so they can book and log activity live on the call.",
      },
      {
        title: "Routing Setup",
        body: "You choose the trigger — all calls, overflow after a set number of rings, after-hours, or vacation coverage.",
      },
      {
        title: "Go Live",
        body: "Calls answered in your company name, appointments booked, and messages delivered within minutes.",
      },
      {
        title: "Refine",
        body: "Monthly review of call volume, transfer rates, and booked appointments to tune the rules and coverage window.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Who We Answer For",
    heading: "Businesses That Rely on the Phone as the Front Door",
    intro:
      "Reception is not generic. The screening questions and booking flow differ sharply by profession, so receptionists are trained per practice type.",
    items: [
      {
        icon: "briefcase",
        stat: "Legal",
        title: "Law & Professional Firms",
        body: "New client intake, conflict-check questions, consultation booking, and screening out solicitation calls.",
      },
      {
        icon: "store",
        stat: "Medical",
        title: "Medical & Dental Practices",
        body: "Appointment booking and rescheduling, recall calls, and after-hours routing to the on-call provider.",
      },
      {
        icon: "shopping-bag",
        stat: "Trades",
        title: "Home Services & Trades",
        body: "Service call intake, estimate scheduling, and emergency triage while crews are in the field.",
      },
      {
        icon: "dollar",
        stat: "Property",
        title: "Real Estate & Property",
        body: "Showing requests, tenant maintenance calls, and lead capture from listing enquiries.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why a US-Based Virtual Receptionist Matters",
    image: "/images/cc-woman-typing.jpg",
    imagePosition: "right",
    body: [
      "The receptionist is the first impression of your business, and callers form that impression in one sentence. An offshore agent reading a script from a different time zone signals something about your firm that no amount of website polish will undo.",
      "Contact Center USA staffs domestic receptionists trained on your greeting, your people, and your booking rules. They answer as your front desk, book into your real calendar, and screen with judgment — so the calls that reach you are the ones worth interrupting your day.",
    ],
    bullets: [
      "100% US-based receptionists trained on your greeting and directory",
      "Live appointment booking into your existing calendar",
      "Screening rules that keep solicitors and robocalls away from you",
      "Overflow, after-hours, lunch, and vacation coverage options",
      "Bilingual English/Spanish reception on every shift",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Every call answered, in your company name.",
    accent: "in your company name",
    body: "Tell us your monthly call volume and when you want coverage — all calls, overflow only, or after hours. We will quote the right structure and have you live within days.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center Services",
    desc: "Scale beyond reception into full inbound support as your call volume grows.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Outbound calling to fill your calendar, not just answer the calls that come in.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Legal Intake Call Center",
    desc: "Deeper case screening and retainer follow-up for law firms with real intake volume.",
    href: "/industries/legal-intake-call-center",
  },
  {
    title: "Candidate Screening & Shift Coverage for Staffing Agencies",
    desc: "US-based call center for staffing agencies and recruiters.",
    href: "/industries/staffing-recruiting-call-center",
  },
  {
    title: "Office Support Services",
    desc: "Outsourced office support: scheduling, data entry, document handling and virtual assistant coverage from US-based staff.",
    href: "/solutions/office-support-services",
  },
  {
    title: "Professional Call Monitoring & Quality Assurance Solutions",
    desc: "Call monitoring and QA services with calibrated scorecards, agent coaching and compliance review across your queues.",
    href: "/solutions/call-monitoring-services",
  },
];

export default function VirtualReceptionistPage() {
  return (
    <ServicePageTemplate
      badge="Virtual Receptionist Services"
      title="Live US-Based Reception for Growing Businesses"
      titleHighlight="Growing Businesses"
      subtitle="Every call answered in your company name by a US-based receptionist who books appointments into your calendar, screens the noise, and gets you the messages that matter within minutes."
      description="Our virtual receptionist service gives small businesses and professional firms a full-time front desk without a full-time hire. Receptionists answer in your company name, book directly into your calendar, screen and warm-transfer by your rules, and cover the gaps a single in-house hire never can — lunch, after hours, vacation, and the moments when three lines ring at once."
      features={features}
      benefits={benefits}
      image="/images/cc-woman-headset.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
