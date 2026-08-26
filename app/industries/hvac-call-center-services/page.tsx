import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "HVAC Answering Service & Call Center | 24/7 Dispatch",
  description:
    "24/7 US-based HVAC answering service and call center for heating & cooling contractors. Emergency dispatch, ServiceTitan integration, and seasonal surge capture.",
  keywords: [
    "hvac answering service",
    "hvac call center",
    "after hours hvac answering service",
    "emergency hvac dispatch",
    "hvac call center outsourcing",
    "servicetitan answering service",
    "heating and cooling answering service",
    "hvac lead response service",
  ],
  alternates: { canonical: "/industries/hvac-call-center-services" },
};

const features = [
  {
    title: "24/7 Emergency AC & Heating Dispatch",
    desc: "When a furnace dies at 2 AM in January or an AC fails during a 100°F July heatwave, live US agents answer in under 3 rings, qualify the emergency, and dispatch your on-call technician according to your exact rules.",
  },
  {
    title: "Direct Field Software Integration",
    desc: "Our agents work directly inside ServiceTitan, Housecall Pro, Jobber, FieldEdge, or ServiceFusion to schedule appointments, verify service agreements, and update customer records in real time.",
  },
  {
    title: "Seasonal Surge & Weather Overflow",
    desc: "The first freeze and first summer heatwave create huge call spikes. Our team acts as immediate rollover support so you never send high-ticket emergency replacement calls to voicemail.",
  },
  {
    title: "Maintenance Agreement Sales & Renewals",
    desc: "Turn off-season slow periods into steady revenue. Our outbound specialists call your database to book annual tune-ups, filter replacements, and service club renewals.",
  },
  {
    title: "High-Ticket Replacement Lead Qualification",
    desc: "When homeowners call about aging units or major breakdowns, agents gather system age, tonnage, issue history, and book high-priority estimator consultations on your calendar.",
  },
  {
    title: "Bilingual English & Spanish Intake",
    desc: "Native bilingual agents provide seamless communication for Spanish-speaking homeowners, ensuring you capture every service opportunity across high-growth southern and western markets.",
  },
];

const benefits = [
  "24/7/365 live answering — nights, weekends, holidays",
  "100% US-based agents who speak HVAC terminology",
  "Direct dispatch board booking in ServiceTitan & Housecall Pro",
  "True emergency vs. routine next-day appointment triage",
  "Zero missed replacement and install sales calls",
  "Flexible month-to-month contracts with no lock-in",
];

const stats = [
  { value: 98.4, suffix: "%", label: "Calls Answered Under 3 Rings", decimals: 1 },
  { value: 42, suffix: "%", label: "Increase in Booked After-Hours Jobs" },
  { value: 0, suffix: " Voicemails", label: "Lost to Competitors", prefix: "" },
  { value: 24, suffix: "/7/365", label: "Emergency Dispatch Coverage" },
];

const testimonial = {
  quote:
    "During the hottest week of last July, our call volume tripled. Contact Center USA answered every single call, booked $84,000 in emergency replacements right into ServiceTitan, and kept our techs rolling. They paid for themselves in the first 48 hours.",
  name: "Brad T.",
  title: "Owner & General Manager",
  company: "A Multi-Location HVAC Contractor (Texas & Arizona)",
  initials: "BT",
};

const faqs = [
  {
    question: "How do your agents dispatch our on-call HVAC technicians?",
    answer:
      "We follow your exact on-call schedule. When an emergency call arrives, our agent collects the homeowner details, problem description, system info, and reaches out to your designated technician via phone call, SMS, or dispatch app notification. If the primary tech doesn't answer within your required window (e.g., 10 minutes), we escalate down the chain.",
  },
  {
    question: "Do you integrate directly with ServiceTitan and Housecall Pro?",
    answer:
      "Yes. Our agents log directly into your field service software (ServiceTitan, Housecall Pro, Jobber, FieldEdge, ServiceFusion). We see real-time technician availability, book appointments directly onto your dispatch board, and update customer job histories without any duplicate manual entry.",
  },
  {
    question: "How do you distinguish between a real HVAC emergency and routine service?",
    answer:
      "We build custom triage logic based on your criteria. For instance, no heat with outdoor temps below 40°F, gas odors, active water leaks from attic air handlers, or elderly/infant occupants can be flagged as immediate dispatch, while routine seasonal tune-ups are scheduled during normal business hours.",
  },
  {
    question: "Can you handle seasonal surge call volumes without long-term contracts?",
    answer:
      "Absolutely. We offer month-to-month agreements so you can scale up your line capacity during extreme summer and winter peak demand, and scale back down during shoulder months without penalties.",
  },
];

const seoSections: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "HVAC Call Center Outsourcing",
    heading: "In the HVAC business, the contractor who answers the phone first gets the $12,000 replacement job.",
    accent: "gets the $12,000 replacement job",
    body: [
      "When a homeowner's air conditioning fails during a 95°F heatwave or a heating system quits on Christmas Eve, they do not leave voicemails. They call the next HVAC company on Google until a live human answers.",
      "Contact Center USA provides dedicated, trade-trained US call center agents who answer your calls in under three rings, qualify the job, and lock the appointment into your dispatch software before the customer calls your competitor.",
    ],
    stats: [
      { stat: "<3 Rings", label: "Average speed to answer on all emergency calls" },
      { stat: "ServiceTitan", label: "Certified live dispatch board scheduling" },
      { stat: "Month-to-Month", label: "Scale up for summer/winter, down for shoulder seasons" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Standard Answering Service vs. Contact Center USA HVAC Specialists",
    intro:
      "Why leading heating and cooling companies upgrade from generic answering services to trade-specialized BPO dispatch.",
    leftTitle: "Generic Answering Service / Answering App",
    rightTitle: "Contact Center USA HVAC Call Center",
    rows: [
      {
        label: "Direct Dispatch Board Booking",
        left: "Sends an email or text message for your office to re-key the next morning.",
        right: "Books jobs live into ServiceTitan, Housecall Pro, or Jobber dispatch boards.",
        leftYes: false,
      },
      {
        label: "HVAC Technical Knowledge",
        left: "No knowledge of tonnage, SEER, heat pumps, compressors, or furnace ignition.",
        right: "Agents trained on HVAC equipment, warranty intake, and troubleshooting basics.",
        leftYes: false,
      },
      {
        label: "Emergency On-Call Escalation",
        left: "Sends one automated SMS and gives up if the tech is driving or asleep.",
        right: "Multi-tier live phone call escalation following your custom on-call technician tree.",
        leftYes: false,
      },
      {
        label: "Agent Location & Fluency",
        left: "Often routed to offshore call centers with noticeable language barriers.",
        right: "100% US-based domestic agents with native English and bilingual Spanish options.",
        leftYes: false,
      },
      {
        label: "Outbound Maintenance Agreement Booking",
        left: "Inbound only — cannot execute outbound tune-up campaigns.",
        right: "Dedicated outbound teams call existing customers to fill shoulder-season schedules.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Proven ROI",
    heading: "Stop Losing High-Ticket HVAC Jobs to Unanswered After-Hours Calls",
    image: "/images/cc-team-floor.jpg",
    imagePosition: "right",
    body: [
      "The average HVAC system replacement ticket ranges from $8,000 to $18,000. Missing just two after-hours replacement calls a month can cost an HVAC business over $250,000 in lost top-line revenue each year.",
      "With Contact Center USA, your phones are staffed 24/7 by professional American agents who treat every call as a high-value sales opportunity, giving you the competitive edge in your local market.",
    ],
    bullets: [
      "Capture 100% of after-hours emergency heating and cooling calls",
      "Qualify system replacement prospects and book estimator consultations",
      "Eliminate technician burnout from late-night answering duty",
      "Fill quiet shoulder seasons with outbound maintenance tune-up campaigns",
      "No long-term contracts — pay only for what you need",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Never miss another high-ticket HVAC job. Get your custom quote.",
    accent: "Never miss another high-ticket HVAC job",
    body: "Contact Center USA can integrate with your dispatch software and have your dedicated 24/7 HVAC answering team live in as little as 48 hours.",
    ctaLabel: "Get a Free HVAC Call Center Quote",
    ctaHref: "/contact",
  },
];

export default function HVACPage() {
  return (
    <ServicePageTemplate
      badge="HVAC & Home Services"
      title="HVAC Answering Service & Call Center"
      titleHighlight="HVAC Answering Service"
      subtitle="24/7 Emergency Dispatch, Live ServiceTitan Booking & High-Ticket Lead Capture"
      description="Capture every high-ticket HVAC replacement and emergency service call. Our 100% US-based agents integrate directly with ServiceTitan, Housecall Pro, and Jobber to book appointments on your dispatch board 24/7/365."
      features={features}
      benefits={benefits}
      image="/images/cc-team-floor.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={[
        {
          title: "Home Services Call Center",
          desc: "Full support for plumbing, electrical, roofing, and contractor operations.",
          href: "/industries/home-services-call-center",
        },
        {
          title: "Virtual & Remote Support",
          desc: "24/7 virtual receptionist and overflow answering services.",
          href: "/services/virtual-remote-support",
        },
        {
          title: "Lead Generation & Appointment Setting",
          desc: "Outbound campaigns for seasonal tune-ups and maintenance renewals.",
          href: "/solutions/lead-generation-appointment-setting",
        },
      ]}
      ctaHeading="Ready to turn every HVAC call into booked revenue?"
      ctaSubtitle="Get a customized HVAC call center plan tailored to your dispatch software and service area."
      seoContent={seoSections}
    />
  );
}
