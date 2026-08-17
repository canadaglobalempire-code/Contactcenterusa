import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Funeral Home Answering Service | 24/7 First Call Coverage",
  description:
    "US-based 24/7 answering service for funeral homes and cremation providers. First call intake, removal coordination, and pre-need enquiries. Get a quote.",
  keywords: [
    "funeral home answering service",
    "funeral home call center",
    "first call answering funeral",
    "24/7 funeral answering service",
    "cremation provider phone answering",
    "funeral director on call service",
    "removal coordination answering",
    "pre need enquiry handling",
    "mortuary answering service",
    "death care call center",
  ],
  alternates: { canonical: "/industries/funeral-home-answering-service" },
};

const features = [
  {
    title: "24/7 First Call Intake",
    desc: "Death calls arrive at every hour, and the family calling has often never made this call before. A live, unhurried US agent answers, gathers what your director needs, and makes sure the family knows exactly what happens next.",
  },
  {
    title: "Removal Coordination",
    desc: "Location of the deceased, facility or residence contacts, pronouncement status, and access details captured accurately, then relayed to your on-call director or removal service by your escalation order without delay.",
  },
  {
    title: "Trained, Unhurried Tone",
    desc: "Agents assigned to death care are prepared specifically for these calls. There is no script-reading, no rushing, and no awkwardness at the moment a family is least able to tolerate it.",
  },
  {
    title: "Pre-Need & General Enquiries",
    desc: "Pre-arrangement enquiries, pricing and service questions, and appointment scheduling handled during business hours and after, so a planning enquiry never reaches an unanswered line.",
  },
  {
    title: "Service & Arrangement Logistics",
    desc: "Calls about visitation times, service details, directions, flower delivery, and obituary questions answered from information you maintain, keeping your directors with the families in front of them.",
  },
  {
    title: "Bilingual Family Support",
    desc: "Native Spanish-speaking agents handle first calls and arrangement questions end to end, so a family is never asked to navigate the worst day of their year in a second language.",
  },
];

const benefits = [
  "24/7/365 live answering — never voicemail",
  "100% US-based agents trained for death care",
  "First call intake with removal detail captured",
  "Escalation to your on-call director by your rules",
  "Pre-need and general enquiry handling",
  "Bilingual English/Spanish family support",
];

const stats = [
  { value: 24, suffix: "/7", label: "Live First Call Coverage" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 365, suffix: " days", label: "Including Holidays" },
  { value: 2, suffix: " languages", label: "English and Spanish Family Support" },
];

const faqs = [
  {
    question: "Why not use a general answering service?",
    answer:
      "Because the first call is not a message-taking exercise. A family calling to report a death is frequently distressed, sometimes in shock, and almost always unsure what happens next. A general operator reading a standard script gets that moment badly wrong, and families remember it permanently. Agents assigned to funeral homes are trained specifically for this call.",
  },
  {
    question: "What information do you capture on a first call?",
    answer:
      "Exactly what your directors need to act: the caller's relationship to the deceased and contact details, the location of the deceased, whether pronouncement has occurred, facility or residence contacts and access instructions, and any immediate family instructions. We reach your on-call director by your escalation order, and the family is told clearly what will happen and when.",
  },
  {
    question: "How quickly do you reach our on-call director?",
    answer:
      "Immediately, following the escalation order you provide. First calls are treated as the highest-priority contact type on the account, with no queuing behind general enquiries. If your primary contact does not answer, we work down your list rather than leaving a message and waiting.",
  },
  {
    question: "Do you handle pre-need enquiries?",
    answer:
      "Yes. Pre-arrangement enquiries are quite different in tone — considered, often price-sensitive, and frequently made by someone comparing providers. Agents answer general service and pricing questions from information you maintain, and book appointments with your pre-need counselor rather than attempting to sell anything.",
  },
  {
    question: "Can you cover only nights and weekends?",
    answer:
      "Yes, and most firms start there. Overnight, weekend, and holiday coverage is the hardest gap for a small firm to staff and the one where a missed first call most often means a family calls another provider. Daytime overflow can be added afterwards if your directors are frequently unavailable during arrangements.",
  },
  {
    question: "Will families know it is an answering service?",
    answer:
      "Agents answer in your firm's name with the greeting you provide, and work from your information and your escalation rules. To the family it is your firm. We identify ourselves as an outside service only if you specifically instruct us to.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Funeral Home Answering Service",
    heading: "The first call is the one a family remembers for the rest of their life.",
    accent: "remembers for the rest of their life",
    body: [
      "Contact Center USA provides 24/7 US-based answering for funeral homes, cremation providers, and death care firms — first call intake, removal coordination, and pre-need enquiries.",
      "Death calls do not observe business hours, and they cannot go to voicemail. A family reporting a death needs a person who answers calmly, knows what to ask, and can tell them precisely what happens next.",
    ],
    stats: [
      { stat: "24/7", label: "Live coverage every night, weekend, and holiday" },
      { stat: "100%", label: "US-based agents trained specifically for death care calls" },
      { stat: "365", label: "Days a year, with first calls given highest priority" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "A General Answering Service vs. Death Care Trained Coverage",
    intro:
      "Most funeral homes have used a general answering service and moved on for the same reason: the calls were answered, but not well, and families noticed.",
    leftTitle: "General Answering Service",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Tone on a First Call",
        left: "Generic operator reading a standard script at the worst possible moment.",
        right: "Agents trained specifically for death care, unhurried and prepared.",
        leftYes: false,
      },
      {
        label: "Intake Detail",
        left: "Name and number, leaving the director to call back and start over.",
        right: "Full removal detail captured so the director can act immediately.",
        leftYes: false,
      },
      {
        label: "Escalation Speed",
        left: "First calls queued behind unrelated enquiries.",
        right: "Highest-priority handling with your escalation order worked live.",
        leftYes: false,
      },
      {
        label: "Family Reassurance",
        left: "Family hangs up not knowing what happens next.",
        right: "Clear explanation of the next step and when contact will follow.",
        leftYes: false,
      },
      {
        label: "Pre-Need Enquiries",
        left: "Message taken; the enquiry goes to a competitor who answered.",
        right: "Questions answered and an appointment booked with your counselor.",
        leftYes: false,
      },
      {
        label: "Bilingual Families",
        left: "Rarely available, and never at 3am.",
        right: "Native Spanish-speaking agents on every coverage window.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From First Call to Director Response",
    intro:
      "Everything is configured around your escalation order and your removal process, because on a first call there is no room to work anything out in the moment.",
    steps: [
      {
        title: "Escalation Order Setup",
        body: "We document your on-call rotation, contact order, removal service details, and after-hours instructions.",
      },
      {
        title: "Firm Information Load",
        body: "Greeting, service and pricing information, facility relationships, and directions maintained on your account.",
      },
      {
        title: "Death Care Training",
        body: "Assigned agents trained on first call handling, tone, and the detail your directors require.",
      },
      {
        title: "Go Live After Hours",
        body: "Coverage opens overnight, weekends, and holidays, where the staffing gap is hardest to fill.",
      },
      {
        title: "Review & Extend",
        body: "Call review with your directors, then daytime overflow added if arrangements often tie up the office.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Firms We Answer For",
    heading: "Across Death Care Providers",
    intro:
      "A single-location family firm and a multi-location group face the same overnight problem at very different scales.",
    items: [
      {
        icon: "home",
        stat: "Family",
        title: "Family-Owned Funeral Homes",
        body: "Overnight and weekend first call coverage for firms without staffed night reception.",
      },
      {
        icon: "building",
        stat: "Group",
        title: "Multi-Location Groups",
        body: "Central intake with location-aware routing and per-firm escalation rules.",
      },
      {
        icon: "shield",
        stat: "Cremation",
        title: "Cremation Providers",
        body: "Direct cremation enquiries, price questions, and arrangement scheduling at all hours.",
      },
      {
        icon: "briefcase",
        stat: "Pre-Need",
        title: "Pre-Need & Cemetery",
        body: "Pre-arrangement enquiries, appointment booking, and general service questions.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why This Call Cannot Go to Voicemail",
    image: "/images/cc-agent-night.jpg",
    imagePosition: "right",
    body: [
      "Every other industry can treat a missed call as lost revenue. Here it is a family standing in a hospital corridor at two in the morning, hearing a recording, and calling the next firm in the directory.",
      "Contact Center USA answers in your firm's name, every hour of every day, with agents trained for this specific call. The intake is complete enough for your director to act on immediately, the family is told exactly what happens next, and your on-call rotation is worked live rather than left a message.",
    ],
    bullets: [
      "Live answering 24/7/365 — nights, weekends, and holidays",
      "Agents trained specifically for first call tone and handling",
      "Full removal detail captured so directors can act immediately",
      "Your escalation order worked live, not left as a voicemail",
      "Bilingual English/Spanish family support at any hour",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Make sure every family reaches a person.",
    accent: "reaches a person",
    body: "Send us your call volume and on-call escalation process. We will scope overnight, weekend, and holiday coverage built around how your firm already operates.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Virtual Receptionist Services",
    desc: "Daytime front-desk coverage for firms whose directors are often with families.",
    href: "/industries/virtual-receptionist-services",
  },
  {
    title: "Inbound Call Center Services",
    desc: "Scaled inbound coverage for multi-location death care groups.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Multilingual Call Center Services",
    desc: "Additional language coverage for firms serving diverse communities.",
    href: "/solutions/multilingual-call-center-services",
  },
];

export default function FuneralHomePage() {
  return (
    <ServicePageTemplate
      badge="Funeral Home Answering Service"
      title="24/7 First Call Coverage for Funeral Homes"
      titleHighlight="Funeral Homes"
      subtitle="Funeral homes, cremation providers, and death care groups rely on our US-based agents to answer every first call live, capture what the director needs, and reach the on-call rotation immediately."
      description="A death call cannot reach voicemail. Families calling at three in the morning have usually never made this call before and need a person who answers calmly, knows what to ask, and can tell them what happens next. Our agents are trained specifically for death care: they answer in your firm's name around the clock, capture complete removal detail, work your on-call escalation order live, and handle pre-need enquiries during the hours nobody is at the office."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-focused.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
