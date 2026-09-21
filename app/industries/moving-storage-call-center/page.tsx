import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Moving & Storage Call Center | Quote Intake & Booking",
  description:
    "US-based call center for moving companies and self-storage operators. Quote intake, survey booking, unit enquiries, and peak-season surge coverage. Get a quote.",
  keywords: [
    "moving company call center",
    "moving company answering service",
    "self storage call center",
    "storage facility answering service",
    "moving quote intake",
    "moving lead follow up",
    "storage unit enquiry line",
    "relocation call center services",
    "peak moving season support",
    "movers phone answering",
  ],
  alternates: { canonical: "/industries/moving-storage-call-center" },
};

const features = [
  {
    title: "Quote Enquiry Intake",
    desc: "Moving enquiries captured with the detail an accurate estimate requires — origin and destination, home size, access and stairs, elevator and parking constraints, move date flexibility, and special items — instead of a name and a number on a message pad.",
  },
  {
    title: "Speed-to-Lead Follow-Up",
    desc: "Moving leads are shopped hard and shopped fast. Agents contact new enquiries within a minute, qualify the job, and book the survey or estimate before the customer has finished filling in the next company's form.",
  },
  {
    title: "Survey & Estimate Scheduling",
    desc: "Virtual and in-home survey appointments booked onto estimator calendars with territory and drive-time awareness, plus confirmation calls that protect the sit rate on jobs already in the pipeline.",
  },
  {
    title: "Self-Storage Unit Enquiries",
    desc: "Unit size guidance, current availability and pricing, move-in requirements, and reservations taken live — the calls that go unanswered whenever a facility runs a single on-site manager who is showing a unit.",
  },
  {
    title: "Peak-Season Surge Coverage",
    desc: "Moving demand concentrates brutally into late spring and summer. We staff against your seasonal curve so May through August enquiries are answered, then scale back down through the quiet winter months.",
  },
  {
    title: "Bilingual Customer Contact",
    desc: "Native Spanish-speaking agents handle quote intake, scheduling, and storage enquiries end to end across markets where a large share of customers prefer Spanish.",
  },
];

const benefits = [
  "Quote enquiries answered live, seven days a week",
  "100% US-based agents",
  "SmartMoving, MoveitPro & SiteLink integration",
  "Territory-aware survey and estimate scheduling",
  "Peak-season surge staffing for May through August",
  "Bilingual English/Spanish customer contact",
];

const stats = [
  { value: 60, suffix: " sec", label: "Target Lead Response Time" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 7, suffix: " days", label: "Coverage Including Weekends" },
  { value: 4, suffix: "x", label: "Peak-Season Staffing Flex" },
];

const faqs = [
  {
    question: "Why do moving companies lose so many enquiries?",
    answer:
      "Because the people who could answer are on a truck. Moving companies are operationally lean by design, and the office is often one or two people who are also dispatching crews, handling claims, and processing paperwork. Meanwhile customers request quotes from three or four companies in a single sitting and commit to whoever calls back first with a credible answer.",
  },
  {
    question: "What detail do you capture on a quote enquiry?",
    answer:
      "Whatever your estimators need to price accurately: origin and destination with access details, home or unit size, stairs and elevator constraints, parking and long-carry issues, move date and flexibility, packing requirements, and special items like pianos, safes, or vehicles. An incomplete intake means a second call before anyone can even quote, and that second call is where jobs get lost.",
  },
  {
    question: "Can you book surveys onto our estimators' calendars?",
    answer:
      "Yes. Agents book virtual and in-home surveys directly into your system with territory and drive-time awareness, so an estimator's day forms a workable route. We support SmartMoving, MoveitPro, Supermove, and similar platforms, along with general CRMs.",
  },
  {
    question: "Do you handle self-storage enquiries?",
    answer:
      "Yes. Storage is a similar structural problem: a facility usually runs one on-site manager who cannot answer the phone while showing a unit, and callers simply move to the next facility. Agents provide unit size guidance, quote current availability and pricing, explain move-in requirements, and take reservations live in SiteLink, storEDGE, or your management platform.",
  },
  {
    question: "How do you handle peak season?",
    answer:
      "By planning for it rather than reacting. Moving is one of the most seasonally concentrated businesses there is — a large share of annual volume lands between May and August. We staff against that curve, adding capacity for the peak window and scaling back through winter, so you are not carrying summer-sized office costs in January.",
  },
  {
    question: "Can you follow up on quotes that did not convert?",
    answer:
      "Yes. Unconverted estimates are the most under-worked asset in the industry. Customers frequently delay a move, lose a closing date, or simply never got round to choosing. Systematic follow-up on aged quotes — particularly as a moving date approaches — books jobs at a small fraction of the cost of buying a new lead.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Moving & Storage Call Center",
    heading: "The customer requested four quotes. Three companies called back.",
    accent: "Three companies called back",
    body: [
      "Contact Center USA answers for moving companies and self-storage operators with US-based agents — quote intake, survey scheduling, unit enquiries, and peak-season surge coverage.",
      "Moving is a lean-office business by design, which means the phone rings while everyone is on a truck or showing a unit. Customers shop three or four companies at once, and the ones who answer are the ones who quote.",
    ],
    stats: [
      { stat: "60 sec", label: "Target contact time on new quote enquiries" },
      { stat: "4x", label: "Peak-season staffing flex for May through August" },
      { stat: "7 days", label: "Coverage including weekends when customers plan moves" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "A Lean Office vs. Dedicated Enquiry Coverage",
    intro:
      "Moving and storage operations run thin office teams on purpose — it is a low-margin business. The cost of that efficiency shows up entirely in unanswered enquiries.",
    leftTitle: "In-House Office Only",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Quote Enquiries",
        left: "Missed while dispatching crews or showing a unit; the customer books elsewhere.",
        right: "Answered live within a minute with full intake detail captured.",
        leftYes: false,
      },
      {
        label: "Weekend Calls",
        left: "Office closed exactly when people plan and research moves.",
        right: "Seven-day coverage across the hours customers actually call.",
        leftYes: false,
      },
      {
        label: "Peak Season",
        left: "Summer volume overwhelms a two-person office for four months.",
        right: "Capacity staffed to the seasonal curve, then scaled back down.",
        leftYes: false,
      },
      {
        label: "Intake Quality",
        left: "Name and number only; a second call needed before quoting.",
        right: "Complete detail so an estimate can be produced on the first pass.",
        leftYes: false,
      },
      {
        label: "Unconverted Quotes",
        left: "Aged estimates never re-worked; the pipeline is invisible.",
        right: "Systematic follow-up as move dates approach.",
        leftYes: false,
      },
      {
        label: "Bilingual Customers",
        left: "Depends on who is in the office that day.",
        right: "Native Spanish-speaking agents across coverage windows.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Quote Enquiry to Booked Job",
    intro:
      "Coverage is built around your service area, pricing structure, and the seasonal curve your business actually runs on.",
    steps: [
      {
        title: "Service Area & Pricing Setup",
        body: "We capture your service area, truck and crew capacity, pricing structure, and what disqualifies a job.",
      },
      {
        title: "System Provisioning",
        body: "Agents given access to SmartMoving, MoveitPro, Supermove, SiteLink, or storEDGE as applicable.",
      },
      {
        title: "Intake Script Build",
        body: "Intake questions built so estimators can price from the first call without a follow-up.",
      },
      {
        title: "Go Live on Overflow",
        body: "Coverage opens on overflow, weekends, and after-hours where missed enquiries concentrate.",
      },
      {
        title: "Scale for Peak",
        body: "Capacity expands through the spring and summer peak, then contracts for the winter.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Operators We Answer For",
    heading: "Across Moving and Storage",
    intro:
      "A long-distance van line and a single self-storage facility face the same missed-call problem from very different operating models.",
    items: [
      {
        icon: "truck",
        stat: "Local",
        title: "Local & Residential Movers",
        body: "Quote intake, survey scheduling, and weekend coverage for residential moving companies.",
      },
      {
        icon: "plane",
        stat: "Long Haul",
        title: "Long-Distance & Van Lines",
        body: "Interstate enquiry intake, binding estimate coordination, and shipment status calls.",
      },
      {
        icon: "store",
        stat: "Storage",
        title: "Self-Storage Facilities",
        body: "Unit size guidance, availability and pricing, reservations, and delinquency calls.",
      },
      {
        icon: "briefcase",
        stat: "Comm",
        title: "Commercial & Office Moves",
        body: "Project enquiry qualification and site survey coordination for commercial relocation.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why the First Callback Usually Wins the Move",
    image: "/images/cc-man-headset.jpg",
    imagePosition: "right",
    body: [
      "A customer planning a move requests several quotes in one sitting, then makes a shortlist from whoever responds credibly first. Companies that call back a day later are not competing on price — they are not competing at all.",
      "Contact Center USA answers those enquiries live, captures the detail your estimators need to price on the first pass, books surveys with drive-time logic, and follows up on the aged quotes nobody has time to re-work. Capacity scales with your season, not against it.",
    ],
    bullets: [
      "Contact within a minute of a quote enquiry, seven days a week",
      "Full intake detail so estimators can price without a second call",
      "Territory and drive-time aware survey scheduling",
      "Live unit reservations in SiteLink and storEDGE",
      "Peak-season capacity that scales back down in winter",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Answer the quote enquiries you are currently losing.",
    accent: "you are currently losing",
    body: "Send us your enquiry volume and seasonal curve. We will scope overflow and weekend coverage plus a peak-season plan for May through August.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Logistics & Shipping Call Center",
    desc: "Freight and shipment support for operators with wider logistics operations.",
    href: "/industries/logistics-shipping-call-center",
  },
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Outbound follow-up on unconverted estimates and aged quote pipelines.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Virtual Receptionist Services",
    desc: "Front-desk coverage for single-location operators and small offices.",
    href: "/industries/virtual-receptionist-services",
  },
  {
    title: "Roofing Contractor Call Center & Answering Service",
    desc: "US-based roofing contractor call center and answering service.",
    href: "/industries/roofing-call-center-services",
  },
  {
    title: "Plumbing Answering Service & Call Center",
    desc: "Plumbing answering service for incoming enquiries, job intake and after-hours dispatch.",
    href: "/industries/plumbing-call-center-services",
  },
  {
    title: "Lead Response & Appointment Setting for Home Improvement",
    desc: "US-based call center for solar, roofing, windows, and remodeling companies.",
    href: "/industries/solar-home-improvement-call-center",
  },
];

export default function MovingStoragePage() {
  return (
    <ServicePageTemplate
      badge="Moving & Storage Call Center"
      title="Quote Intake & Booking for Moving and Storage"
      titleHighlight="Moving and Storage"
      subtitle="Moving companies and self-storage operators use our US-based agents to answer quote enquiries within a minute, capture full intake detail, book surveys, and cover the summer peak."
      description="Moving is a lean-office business, so the phone rings while everyone is on a truck or showing a unit — and customers who requested four quotes book with whoever calls back first. We answer live seven days a week, capture the origin, access, size, and date detail your estimators need to price on the first pass, book surveys with drive-time logic, and scale capacity to your seasonal curve instead of your winter payroll."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-laptop.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
