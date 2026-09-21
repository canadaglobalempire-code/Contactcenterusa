import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Property Management Call Center | Tenant & HOA Answering",
  description:
    "US-based property management call center for tenant maintenance calls, after-hours emergencies, leasing enquiries, and HOA resident lines. Get a quote.",
  keywords: [
    "property management call center",
    "property management answering service",
    "tenant maintenance call center",
    "after hours maintenance answering service",
    "hoa answering service",
    "leasing call center",
    "resident support outsourcing",
    "apartment answering service",
    "property management bpo",
    "emergency maintenance dispatch",
  ],
  alternates: { canonical: "/industries/property-management-call-center" },
};

const features = [
  {
    title: "24/7 Emergency Maintenance Triage",
    desc: "Live agents answer every after-hours maintenance call, separate a genuine emergency from a Monday-morning work order using your own criteria, and dispatch your on-call vendor only when the situation actually warrants it.",
  },
  {
    title: "Work Order Intake & Routing",
    desc: "Maintenance requests captured with the detail your techs need — unit, access instructions, pets, permission to enter — and written straight into AppFolio, Buildium, Yardi, RentManager, or Entrata.",
  },
  {
    title: "Leasing & Availability Enquiries",
    desc: "Prospective renters answered live rather than sent to voicemail: availability, pricing, pet and parking policies, application steps, and tour scheduling booked directly onto your leasing calendar.",
  },
  {
    title: "HOA & Community Association Lines",
    desc: "Dedicated resident lines for community associations covering dues questions, violation reports, amenity and gate access, architectural request routing, and board escalation by your documented rules.",
  },
  {
    title: "Rent & Payment Enquiries",
    desc: "Balance questions, payment portal help, late fee explanations, and payment arrangement routing — high-volume calls that consume a property manager's day without needing their expertise.",
  },
  {
    title: "Bilingual Resident Support",
    desc: "Native Spanish-speaking agents handle resident and applicant calls end to end, which matters in markets where a meaningful share of residents prefer Spanish.",
  },
];

const benefits = [
  "24/7/365 emergency maintenance coverage",
  "100% US-based agents",
  "AppFolio, Buildium, Yardi & RentManager integration",
  "Your emergency criteria and vendor escalation rules",
  "Leasing enquiries answered and tours booked",
  "Bilingual English/Spanish resident support",
];

const stats = [
  { value: 24, suffix: "/7", label: "Emergency Maintenance Coverage" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 5, suffix: "+ systems", label: "Property Software Integrations" },
  { value: 2, suffix: " languages", label: "English and Spanish Resident Support" },
];

const faqs = [
  {
    question: "How do you decide what counts as a maintenance emergency?",
    answer:
      "You define it, we apply it consistently. During onboarding we document exactly which situations justify an after-hours vendor call — active water intrusion, no heat below a threshold temperature, gas odor, lockouts, sewage backup, electrical hazards — and which are logged as next-business-day work orders. That written standard is what stops both the 2am call-out for a dripping faucet and the missed genuine emergency.",
  },
  {
    question: "Can you enter work orders into our property management software?",
    answer:
      "Yes. Agents are provisioned directly in AppFolio, Buildium, Yardi, RentManager, or Entrata and create the work order during the call, including unit, access notes, pet warnings, and permission to enter. Your maintenance team sees it in the system they already use, with no morning transcription of voicemails.",
  },
  {
    question: "Do you handle leasing calls as well as maintenance?",
    answer:
      "Yes, and for many managers the leasing side pays for the service on its own. Prospective renters call several properties in an afternoon and rent from whoever picks up. Agents answer availability, pricing, and policy questions from your current listings, then book tours directly onto your leasing calendar rather than promising a callback.",
  },
  {
    question: "Do you support HOA and community association lines?",
    answer:
      "Yes. Association work has its own character: dues and assessment questions, violation reports, amenity and gate access, architectural review requests, and a clear line about what routes to the board rather than being answered by staff. We run those lines to your documented policies and escalation rules.",
  },
  {
    question: "Can you cover only after hours and weekends?",
    answer:
      "Yes, and that is the most common starting point. Many managers keep their own office staff on the phones during business hours and route to us only after hours, on weekends, on holidays, and during overflow. You can expand to full-time coverage later if the volume justifies it.",
  },
  {
    question: "How does this compare to a standard answering service?",
    answer:
      "A general answering service takes a message and passes it on. The difference here is that agents triage against your emergency criteria, create the actual work order in your software, dispatch your on-call vendor when the rules call for it, and book leasing tours on your calendar. The property manager wakes up to resolved situations and completed work orders rather than a list of voicemails to process.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Property Management Call Center",
    heading: "Nobody should be deciding at 2am whether a leak is an emergency.",
    accent: "whether a leak is an emergency",
    body: [
      "Contact Center USA runs US-based tenant and resident lines for property managers, apartment communities, and HOAs — triaging after-hours maintenance, creating work orders in your software, and answering the leasing calls that turn into signed leases.",
      "Property management runs on interruptions. A single manager fields maintenance calls, leasing enquiries, rent questions, and vendor coordination simultaneously, and the calls that get answered are simply the ones that rang at a convenient moment.",
    ],
    stats: [
      { stat: "24/7", label: "Live emergency maintenance triage and vendor dispatch" },
      { stat: "100%", label: "US-based agents working in your property software" },
      { stat: "5+", label: "Platforms supported including AppFolio, Buildium, and Yardi" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "A General Answering Service vs. a Property Management Call Center",
    intro:
      "Most managers have tried a generic answering service. It stops the phone ringing at night but creates a different problem: a queue of messages to process and no decisions actually made.",
    leftTitle: "General Answering Service",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Emergency Triage",
        left: "Takes a message and passes everything through — or escalates nothing.",
        right: "Triaged against your written emergency criteria before anyone is woken.",
        leftYes: false,
      },
      {
        label: "Work Order Creation",
        left: "Voicemails transcribed by staff the next morning.",
        right: "Work order created in AppFolio, Buildium, or Yardi during the call.",
        leftYes: false,
      },
      {
        label: "Vendor Dispatch",
        left: "No authority to dispatch; the on-call manager still coordinates it.",
        right: "On-call vendor dispatched directly by your escalation rules.",
        leftYes: false,
      },
      {
        label: "Leasing Enquiries",
        left: "Message taken; the prospect has already toured elsewhere.",
        right: "Availability answered live and a tour booked on your calendar.",
        leftYes: false,
      },
      {
        label: "Access & Entry Detail",
        left: "Generic message missing unit access, pets, or entry permission.",
        right: "Structured intake capturing exactly what the tech needs on arrival.",
        leftYes: false,
      },
      {
        label: "Bilingual Residents",
        left: "Usually English-only.",
        right: "Native Spanish-speaking agents handling the call end to end.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Resident Call to Closed Work Order",
    intro:
      "Setup is fast because the program is built around the software, vendors, and emergency rules your portfolio already runs on.",
    steps: [
      {
        title: "Emergency Criteria Definition",
        body: "We document what qualifies as an after-hours emergency and which vendor is called for each situation.",
      },
      {
        title: "Software Provisioning",
        body: "Agents given access to AppFolio, Buildium, Yardi, RentManager, or Entrata with the right permissions per property.",
      },
      {
        title: "Property & Portfolio Setup",
        body: "Unit lists, current availability, pet and parking policies, vendor contacts, and on-call rotations loaded.",
      },
      {
        title: "Go Live After Hours",
        body: "Start with nights, weekends, and overflow so your own staff keep daytime calls and we absorb the rest.",
      },
      {
        title: "Review & Extend",
        body: "Monthly reporting on call volume, emergency rate, and tours booked, then expand coverage where it pays.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Portfolios We Support",
    heading: "Across Residential and Community Management",
    intro:
      "A student housing portfolio and a scattered single-family portfolio produce very different calls. Coverage is configured per portfolio type.",
    items: [
      {
        icon: "store",
        stat: "Multi",
        title: "Multifamily & Apartments",
        body: "High-volume maintenance intake, leasing enquiries, tour booking, and renewal questions.",
      },
      {
        icon: "briefcase",
        stat: "SFR",
        title: "Single-Family & Scattered Site",
        body: "Dispersed maintenance coordination where access details and vendor routing matter most.",
      },
      {
        icon: "dollar",
        stat: "HOA",
        title: "HOA & Community Associations",
        body: "Dues questions, violation reports, amenity access, and documented board escalation.",
      },
      {
        icon: "shopping-bag",
        stat: "Comm",
        title: "Commercial & Mixed-Use",
        body: "Tenant facility requests, building access, and after-hours coordination for commercial portfolios.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Property Managers Move Past a Basic Answering Service",
    image: "/images/cc-man-headset.jpg",
    imagePosition: "right",
    body: [
      "The value is not that somebody answers. It is that the right decision gets made without a manager on the phone at 2am — the leak is triaged, the vendor is dispatched or not, the work order exists in the system, and the resident has been told what happens next.",
      "Contact Center USA staffs domestic agents working inside your property software, following your emergency criteria and vendor escalation rules, and answering the leasing calls that decide whether a vacant unit stays vacant another week.",
    ],
    bullets: [
      "Emergency triage against criteria you define in writing",
      "Work orders created live in AppFolio, Buildium, Yardi, and RentManager",
      "On-call vendor dispatch by your escalation rules",
      "Leasing enquiries answered and tours booked on your calendar",
      "Bilingual English/Spanish resident and applicant support",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Give your on-call manager their nights back.",
    accent: "their nights back",
    body: "Tell us your unit count, software, and after-hours call volume. We will build a triage and coverage plan around your emergency criteria and vendor list.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Real Estate Call Center Services",
    desc: "Lead capture and showing coordination for brokerages and real estate teams.",
    href: "/industries/real-estate-call-center-services",
  },
  {
    title: "Home Services Call Center",
    desc: "The trade-side view: 24/7 dispatch for the HVAC, plumbing, and electrical vendors you rely on.",
    href: "/industries/home-services-call-center",
  },
  {
    title: "Virtual Receptionist Services",
    desc: "Front-desk coverage for smaller management offices that need reception more than a full queue.",
    href: "/industries/virtual-receptionist-services",
  },
  {
    title: "Electrical Contractor Call Center & 24/7 Dispatch",
    desc: "24/7 US-based electrical contractor call center and answering service.",
    href: "/industries/electrical-contractor-call-center",
  },
  {
    title: "Quote Intake & Booking for Moving and Storage",
    desc: "US-based call center for moving companies and self-storage operators.",
    href: "/industries/moving-storage-call-center",
  },
  {
    title: "Pest Control Answering Service & Call Center",
    desc: "US-based pest control answering service and call center.",
    href: "/industries/pest-control-call-center",
  },
];

export default function PropertyManagementPage() {
  return (
    <ServicePageTemplate
      badge="Property Management Call Center"
      title="Tenant, Resident & Maintenance Lines for Property Management"
      titleHighlight="Property Management"
      subtitle="Property managers, apartment communities, and HOAs use our US-based agents to triage after-hours emergencies, create work orders in their own software, and answer the leasing calls that fill vacant units."
      description="Property management is an interruption business, and the calls that get answered are usually just the ones that rang at a convenient time. We answer all of them: triaging after-hours maintenance against your written emergency criteria, dispatching your on-call vendor when the rules call for it, creating the work order directly in AppFolio, Buildium, or Yardi, and booking leasing tours onto your calendar."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-focus.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
