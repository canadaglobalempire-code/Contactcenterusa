import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Med Spa Call Center | Aesthetics Consultation Booking",
  description:
    "US-based call center for med spas and aesthetic practices. Consultation booking, lead follow-up, no-show recovery, and membership retention. Get a quote.",
  keywords: [
    "med spa call center",
    "medical spa answering service",
    "aesthetics consultation booking",
    "med spa lead follow up",
    "cosmetic practice phone support",
    "aesthetic clinic scheduling service",
    "med spa no show recovery",
    "plastic surgery consultation booking",
    "dermatology aesthetics call center",
    "med spa membership retention",
  ],
  alternates: { canonical: "/industries/med-spa-aesthetics-call-center" },
};

const features = [
  {
    title: "Consultation Booking",
    desc: "Prospective patients answered live and booked for a consultation on the call — while interest is at its peak — instead of leaving a message with a clinic whose staff are all in treatment rooms.",
  },
  {
    title: "Lead Response & Follow-Up",
    desc: "Aesthetics leads arrive from paid social and search at all hours and go cold quickly. Agents work new enquiries within a minute and run a structured multi-touch sequence on anyone who does not book immediately.",
  },
  {
    title: "No-Show & Cancellation Recovery",
    desc: "Confirmation calls ahead of every consultation, and prompt rebooking outreach on cancellations and no-shows. In a business where a single treatment can be worth thousands, an empty chair is expensive.",
  },
  {
    title: "Treatment Recall & Rebooking",
    desc: "Neurotoxin and filler cycles, laser series, and body contouring packages all have predictable rebooking windows. Systematic recall calling brings patients back on schedule rather than whenever they remember.",
  },
  {
    title: "Membership & Package Retention",
    desc: "Membership programs and pre-paid packages are the revenue base of a modern med spa. Agents handle renewals, failed payments, and save conversations within the offers you authorize.",
  },
  {
    title: "Discreet, Non-Clinical Handling",
    desc: "Aesthetics enquiries are personal. Agents are trained on tone and on a firm boundary: they discuss availability, pricing structure, and process, and never assess candidacy or advise on treatment.",
  },
];

const benefits = [
  "Consultations booked live during the call",
  "100% US-based agents",
  "Booking in Zenoti, Boulevard, Aesthetic Record & Nextech",
  "Confirmation calls that cut consultation no-shows",
  "Treatment recall and membership retention calling",
  "Bilingual English/Spanish patient contact",
];

const stats = [
  { value: 60, suffix: " sec", label: "Target Lead Response Time" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 7, suffix: " days", label: "Coverage Including Evenings & Weekends" },
  { value: 4, suffix: "+ systems", label: "Practice Software Integrations" },
];

const faqs = [
  {
    question: "Do your agents discuss treatments or candidacy?",
    answer:
      "No. Agents describe what a service is in the general terms you approve, explain your pricing structure and consultation process, and book the appointment. They do not assess whether someone is a candidate, recommend a treatment, discuss expected results, or answer medical questions. Anything clinical routes to your providers, and that boundary is written into every script.",
  },
  {
    question: "Can you book into our practice software?",
    answer:
      "Yes. Agents are provisioned in Zenoti, Boulevard, Aesthetic Record, Nextech, Symplast, or your platform and book against live provider availability, honoring treatment durations, room requirements, and provider-specific service restrictions.",
  },
  {
    question: "How fast do you respond to new leads?",
    answer:
      "Within a minute of submission. Aesthetics leads come predominantly from paid social and search, they arrive around the clock, and intent decays fast — someone browsing treatments at 9pm is comparing several clinics in that session. Immediate response is usually the single highest-leverage change a practice can make to its lead economics.",
  },
  {
    question: "Can you reduce consultation no-shows?",
    answer:
      "Yes, and it is one of the clearest returns available. Aesthetics consultations carry high no-show rates because they are elective and often booked impulsively. Confirmation calls ahead of the appointment, combined with prompt rebooking outreach when someone cancels, meaningfully improve the show rate on a book that is already full of high-value slots.",
  },
  {
    question: "Do you handle membership and package retention?",
    answer:
      "Yes. Memberships and pre-paid packages underpin predictable revenue in this category, and much of the attrition is involuntary — failed cards rather than deliberate cancellations. We recover failed payments and run save conversations within the offers you authorize, escalating anything requiring a clinical or relationship decision.",
  },
  {
    question: "How do you handle discretion?",
    answer:
      "Aesthetics patients expect privacy, and many will not leave a voicemail at all. Agents are trained on discreet handling, follow your preferences on when and how a patient may be contacted, and never leave detail about services in a message. Contact preference is captured and respected on every record.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Med Spa & Aesthetics Call Center",
    heading: "Aesthetics leads arrive at nine at night. Your team left at six.",
    accent: "Your team left at six",
    body: [
      "Contact Center USA answers for med spas, aesthetic practices, and cosmetic clinics with US-based agents — consultation booking, immediate lead response, no-show recovery, and membership retention.",
      "This category buys leads on paid social and search, where enquiries arrive continuously and evaporate within hours. Meanwhile clinic staff are in treatment rooms all day and gone by evening, which is exactly when the enquiries land.",
    ],
    stats: [
      { stat: "60 sec", label: "Target response time on new enquiries" },
      { stat: "7 days", label: "Coverage across evenings and weekends" },
      { stat: "100%", label: "US-based agents booking in your practice software" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Front Desk Only vs. Dedicated Aesthetics Coverage",
    intro:
      "A med spa front desk is excellent with the patient in front of them. The gap is everything arriving by phone and form while they are doing that.",
    leftTitle: "Clinic Staff Handling Enquiries",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Lead Response Time",
        left: "Web leads worked the next morning, if anyone gets to them.",
        right: "Contacted within a minute, including evenings and weekends.",
        leftYes: false,
      },
      {
        label: "Evening Enquiries",
        left: "Peak browsing hours land in an empty inbox.",
        right: "Live coverage during the hours enquiries actually arrive.",
        leftYes: false,
      },
      {
        label: "Consultation No-Shows",
        left: "High no-show rates on elective, impulsively booked slots.",
        right: "Confirmation calls plus prompt rebooking on cancellations.",
        leftYes: false,
      },
      {
        label: "Treatment Recall",
        left: "Patients rebook whenever they happen to remember.",
        right: "Systematic recall on neurotoxin, filler, and laser cycles.",
        leftYes: false,
      },
      {
        label: "Membership Attrition",
        left: "Failed cards lapse silently into cancelled memberships.",
        right: "Payment recovery and save conversations within your offers.",
        leftYes: false,
      },
      {
        label: "Discretion",
        left: "Inconsistent handling of a sensitive, privacy-driven enquiry.",
        right: "Trained discreet handling with contact preferences respected.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Evening Enquiry to Booked Consultation",
    intro:
      "Every aesthetics engagement starts with the clinical boundary, because what agents may and may not say matters more here than the scheduling logic.",
    steps: [
      {
        title: "Boundary & Script Setup",
        body: "We document approved service language and the hard limit on candidacy, results, and medical questions.",
      },
      {
        title: "Software Provisioning",
        body: "Agents given booking access in Zenoti, Boulevard, Aesthetic Record, or Nextech with provider rules.",
      },
      {
        title: "Lead Routing",
        body: "Paid social and search leads routed for contact within a minute with a documented touch cadence.",
      },
      {
        title: "Go Live on Evenings",
        body: "Coverage opens on evenings, weekends, and overflow first, where enquiries concentrate.",
      },
      {
        title: "Add Recall & Retention",
        body: "Layer in treatment recall, no-show recovery, and membership retention once booking is stable.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Practices We Answer For",
    heading: "Across Aesthetics and Cosmetic Medicine",
    intro:
      "A single-provider injectables studio and a multi-location surgical practice have very different booking logic and consultation flows.",
    items: [
      {
        icon: "heart-pulse",
        stat: "Med Spa",
        title: "Med Spas & Injectables",
        body: "Consultation booking, neurotoxin and filler recall, and membership program retention.",
      },
      {
        icon: "zap",
        stat: "Laser",
        title: "Laser & Body Contouring",
        body: "Package scheduling, treatment series rebooking, and pre-paid package retention.",
      },
      {
        icon: "stethoscope",
        stat: "Surgical",
        title: "Plastic Surgery & Derm",
        body: "Surgical consultation booking, post-operative scheduling, and referral intake.",
      },
      {
        icon: "building",
        stat: "Multi",
        title: "Multi-Location Groups",
        body: "Central enquiry line with location-aware routing and consistent lead handling.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Aesthetics Loses Money Between Six and Nine",
    image: "/images/cc-woman-headset.jpg",
    imagePosition: "right",
    body: [
      "Practices in this category spend heavily on paid acquisition, then route the resulting enquiries into an inbox nobody opens until the following morning. By then the prospective patient has consulted with somebody else.",
      "Contact Center USA covers those hours. Enquiries answered within a minute and consultations booked live, confirmation calls that protect a high-value book, treatment recall that brings patients back on cycle, and a firm clinical boundary on everything that belongs to your providers.",
    ],
    bullets: [
      "Response within a minute, including evenings and weekends",
      "Live booking in Zenoti, Boulevard, Aesthetic Record, and Nextech",
      "Confirmation and rebooking calls that protect the consultation book",
      "Treatment recall on predictable neurotoxin and laser cycles",
      "Absolute boundary on candidacy, results, and medical questions",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Stop paying for leads nobody calls back.",
    accent: "leads nobody calls back",
    body: "Send us your monthly lead volume, practice software, and consultation no-show rate. We will scope evening and weekend coverage plus a recall and retention program.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Healthcare Call Center Services",
    desc: "HIPAA-aware patient communication for the medical side of aesthetic practices.",
    href: "/industries/healthcare-call-center-services",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Outbound programs that fill the consultation calendar beyond inbound enquiries.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Virtual Receptionist Services",
    desc: "Front-desk coverage for single-provider studios and small clinics.",
    href: "/industries/virtual-receptionist-services",
  },
  {
    title: "Compliant Call Center Solutions for Pharmaceutical Companies",
    desc: "US-based pharmaceuticals call center support for customer care, inbound calls, outbound outreach, and back office workflows.",
    href: "/industries/pharmaceuticals-call-center",
  },
  {
    title: "Healthcare Revenue Cycle Management",
    desc: "How a mid-size hospital network reduced claim denial rates by 34% and accelerated patient billing with our HIPAA-compliant call center solution.",
    href: "/case-studies/healthcare-revenue-cycle-management",
  },
  {
    title: "24/7 First Call Coverage for Funeral Homes",
    desc: "US-based 24/7 answering service for funeral homes and cremation providers.",
    href: "/industries/funeral-home-answering-service",
  },
];

export default function MedSpaPage() {
  return (
    <ServicePageTemplate
      badge="Med Spa & Aesthetics"
      title="Consultation Booking & Retention for Aesthetic Practices"
      titleHighlight="Aesthetic Practices"
      subtitle="Med spas, injectables studios, and cosmetic practices use our US-based agents to answer evening enquiries live, book consultations on the call, and bring patients back on treatment cycle."
      description="Aesthetics leads arrive from paid social and search at nine at night, and clinic staff left at six. We answer within a minute across evenings and weekends, book consultations live in Zenoti, Boulevard, or Aesthetic Record, run confirmation calls that protect a high-value book, and handle treatment recall and membership retention — with a firm boundary that keeps every clinical question with your providers."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-smile.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
