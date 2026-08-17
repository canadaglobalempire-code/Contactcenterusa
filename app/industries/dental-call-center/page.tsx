import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Dental Call Center | Dental Answering & Scheduling Service",
  description:
    "US-based dental call center for practices and DSOs. New patient calls, recall and reactivation, insurance verification, and after-hours emergencies. Get a quote.",
  keywords: [
    "dental call center",
    "dental answering service",
    "dental office phone answering",
    "dental appointment scheduling service",
    "dental patient recall calls",
    "dso call center",
    "dental insurance verification outsourcing",
    "dental front office outsourcing",
    "emergency dental answering service",
    "new patient dental calls",
  ],
  alternates: { canonical: "/industries/dental-call-center" },
};

const features = [
  {
    title: "New Patient Call Capture",
    desc: "A new patient call is worth many times a routine one, and it is the call most likely to reach voicemail while your front desk is checking someone out. Live agents answer, verify insurance participation, and book the first visit on the spot.",
  },
  {
    title: "Recall & Reactivation Campaigns",
    desc: "Systematic outbound calling on overdue hygiene recall and lapsed patients — the single largest pool of recoverable production sitting in most practices, and the work a busy front desk never reaches.",
  },
  {
    title: "Insurance Verification & Benefits",
    desc: "Eligibility and benefits verified before the appointment, so the patient arrives with an accurate estimate and your team is not on hold with a payer while the waiting room fills.",
  },
  {
    title: "After-Hours Dental Emergencies",
    desc: "Evening, weekend, and holiday coverage for pain, swelling, trauma, and post-operative calls, triaged against your criteria and routed to the on-call doctor only when the situation genuinely warrants it.",
  },
  {
    title: "Schedule Optimization & Fill",
    desc: "Cancellations and no-shows called against your short-notice list to fill the chair the same day, plus confirmation calls that reduce the no-show rate driving the problem in the first place.",
  },
  {
    title: "Bilingual Patient Communication",
    desc: "Native Spanish-speaking agents handle scheduling, recall, and financial conversations end to end, which materially improves both booking rates and treatment acceptance in Spanish-speaking communities.",
  },
];

const benefits = [
  "New patient calls answered live, never voicemail",
  "100% US-based agents",
  "Dentrix, Eaglesoft, Open Dental & Denticon booking",
  "Recall and reactivation outbound campaigns",
  "After-hours emergency triage to your on-call doctor",
  "Bilingual English/Spanish patient communication",
];

const stats = [
  { value: 3, suffix: " rings", label: "Target Answer Speed" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 24, suffix: "/7", label: "Emergency Coverage Available" },
  { value: 4, suffix: "+ systems", label: "Practice Management Integrations" },
];

const faqs = [
  {
    question: "Can you book directly into our practice management software?",
    answer:
      "Yes. Agents are provisioned in Dentrix, Eaglesoft, Open Dental, Denticon, Curve, or your system of record and book into your live schedule during the call, respecting provider templates, appointment types, and block scheduling rules. Nothing is written on a message pad for your front desk to enter later.",
  },
  {
    question: "How do you handle after-hours dental emergencies?",
    answer:
      "We triage against criteria you define. Genuine emergencies — significant swelling, trauma, uncontrolled bleeding, severe post-operative pain — reach your on-call doctor by your escalation path. Everything else is booked into the next available emergency slot with appropriate interim guidance from your approved instructions. Agents never provide clinical advice beyond what you have authorized in writing.",
  },
  {
    question: "Do you run recall and reactivation calling?",
    answer:
      "Yes, and it is usually where a practice sees the clearest return. Most practices carry hundreds of patients overdue for hygiene and a long tail of lapsed patients, and the front desk almost never gets to that list because live calls always take priority. We work it systematically, book what we can, and report on contact and conversion rates by cohort.",
  },
  {
    question: "Can you verify insurance before appointments?",
    answer:
      "Yes. Eligibility and benefits verification is time-consuming, hold-heavy work that pulls your team off the phones and away from patients in the office. We verify ahead of scheduled visits so accurate estimates are ready at check-in, which reduces both surprise-cost conflicts and the collections work that follows them.",
  },
  {
    question: "Do you work with DSOs and multi-location groups?",
    answer:
      "Yes. Multi-location groups have the additional problem of routing a caller to the right location, honoring location-specific schedules and provider availability, and keeping the brand experience consistent across offices. We handle central intake with location-aware routing rather than treating each office as a separate account.",
  },
  {
    question: "Will patients know it is not our front desk?",
    answer:
      "No. Agents answer in your practice name with your greeting, work from your scheduling rules and provider preferences, and follow your policies on financial and insurance questions. To the patient it is your office. We identify ourselves as an outside service only if you ask us to.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Dental Call Center Services",
    heading: "The new patient call goes to voicemail while you check someone out.",
    accent: "goes to voicemail",
    body: [
      "Contact Center USA answers for dental practices and DSOs with US-based agents — new patient calls, hygiene recall, insurance verification, schedule fill, and after-hours emergency triage.",
      "A dental front desk is asked to check patients out, answer the phone, verify benefits, and manage the schedule simultaneously. When those collide, the call is what gives — and the call that gives is often the highest-value one the practice will get that week.",
    ],
    stats: [
      { stat: "3 rings", label: "Target answer speed on every routed call" },
      { stat: "24/7", label: "After-hours emergency triage to your on-call doctor" },
      { stat: "100%", label: "US-based agents booking in your practice software" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Front Desk Alone vs. a Dental Call Center",
    intro:
      "Nothing here replaces your front desk. It removes the impossible parts of their job — the calls that arrive while they are with a patient, and the outbound work that never reaches the top of the list.",
    leftTitle: "Front Desk Handling Everything",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "New Patient Calls",
        left: "Missed while checking out or on hold with a payer — the caller books elsewhere.",
        right: "Answered live within three rings and booked during the call.",
        leftYes: false,
      },
      {
        label: "Recall & Reactivation",
        left: "The overdue list is real work that live calls always outrank.",
        right: "Worked systematically with reporting by cohort and conversion.",
        leftYes: false,
      },
      {
        label: "Insurance Verification",
        left: "Hours on hold with payers instead of attending to patients in the office.",
        right: "Verified ahead of the visit so estimates are ready at check-in.",
        leftYes: false,
      },
      {
        label: "After-Hours Pain Calls",
        left: "Voicemail, or the doctor's personal mobile ringing for non-emergencies.",
        right: "Triaged to your criteria; the doctor is called only when it warrants it.",
        leftYes: false,
      },
      {
        label: "Same-Day Cancellations",
        left: "The chair sits empty because nobody has time to work the fill list.",
        right: "Short-notice list called immediately to fill the opening.",
        leftYes: false,
      },
      {
        label: "Bilingual Patients",
        left: "Depends entirely on who is at the desk that day.",
        right: "Native Spanish-speaking agents on every coverage window.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Ringing Phone to a Filled Schedule",
    intro:
      "Setup runs around the practice management system and scheduling rules you already use, so nothing about how your office works has to change.",
    steps: [
      {
        title: "Practice & Schedule Setup",
        body: "We capture your greeting, provider templates, appointment types, block rules, and insurance participation.",
      },
      {
        title: "Software Provisioning",
        body: "Agents given scheduling access in Dentrix, Eaglesoft, Open Dental, Denticon, or your system.",
      },
      {
        title: "Emergency Criteria",
        body: "You define what constitutes an after-hours emergency and how the on-call doctor is reached.",
      },
      {
        title: "Go Live on Overflow",
        body: "Start with overflow and after-hours so your front desk keeps the calls they can take.",
      },
      {
        title: "Add Outbound",
        body: "Layer in recall, reactivation, and short-notice fill campaigns once inbound coverage is steady.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Practices We Answer For",
    heading: "Across General and Specialty Dentistry",
    intro:
      "Scheduling logic differs sharply between a general practice and an oral surgery referral pattern, so agents are trained per practice type.",
    items: [
      {
        icon: "stethoscope",
        stat: "General",
        title: "General & Family Dentistry",
        body: "New patient intake, hygiene recall, restorative scheduling, and family block coordination.",
      },
      {
        icon: "briefcase",
        stat: "Ortho",
        title: "Orthodontics",
        body: "Consultation booking, treatment-in-progress scheduling, and contract and payment plan questions.",
      },
      {
        icon: "heart-pulse",
        stat: "Surgery",
        title: "Oral Surgery & Endo",
        body: "Referral intake from general practices, urgent scheduling, and post-operative call handling.",
      },
      {
        icon: "building",
        stat: "DSO",
        title: "DSOs & Multi-Location",
        body: "Central intake with location-aware routing and consistent brand experience across offices.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Practices Stop Using a Generic Answering Service",
    image: "/images/cc-woman-headset.jpg",
    imagePosition: "right",
    body: [
      "A generic answering service takes a message. That solves the ringing phone and none of the actual problem: the new patient still is not booked, the emergency still has not been triaged, and your front desk starts the morning transcribing voicemails instead of seeing patients.",
      "Contact Center USA books directly into your practice management software, triages emergencies against criteria you define, verifies benefits before the visit, and works the recall list your team never gets to. The measure is not calls answered — it is chairs filled.",
    ],
    bullets: [
      "Live booking in Dentrix, Eaglesoft, Open Dental, and Denticon",
      "Emergency triage against criteria you define in writing",
      "Recall and reactivation calling with cohort-level reporting",
      "Insurance verification completed before the appointment",
      "Bilingual English/Spanish patient communication",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Find out how many new patient calls you missed last month.",
    accent: "how many new patient calls you missed",
    body: "Send us your call volume and practice management system. We will build a coverage plan for new patient capture, recall, and after-hours emergencies.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Healthcare Call Center Services",
    desc: "HIPAA-aware patient communication across medical practices and health systems.",
    href: "/industries/healthcare-call-center-services",
  },
  {
    title: "Virtual Receptionist Services",
    desc: "Front-desk coverage for single-location practices that need reception more than a full queue.",
    href: "/industries/virtual-receptionist-services",
  },
  {
    title: "Outbound Call Center Services",
    desc: "The outbound engine behind recall, reactivation, and short-notice schedule fill.",
    href: "/solutions/outbound-call-center-services",
  },
];

export default function DentalCallCenterPage() {
  return (
    <ServicePageTemplate
      badge="Dental Call Center"
      title="Patient Scheduling & Recall for Dental Practices"
      titleHighlight="Dental Practices"
      subtitle="Practices and DSOs use our US-based agents to answer new patient calls live, book into their own practice software, work the recall list, and triage after-hours emergencies."
      description="Dental front desks are asked to do four jobs at once, and the phone is what loses. We answer new patient calls within three rings and book them during the call, verify benefits before the visit, work the hygiene recall and reactivation lists your team never reaches, and triage after-hours pain and trauma calls against criteria you define — all inside Dentrix, Eaglesoft, Open Dental, or Denticon."
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
