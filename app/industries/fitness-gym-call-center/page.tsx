import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Fitness & Gym Call Center | Membership Sales & Retention",
  description:
    "US-based call center for gyms, studios, and fitness franchises. Membership enquiries, tour booking, cancellation saves, and billing support. Get a quote.",
  keywords: [
    "gym call center",
    "fitness membership sales outsourcing",
    "gym answering service",
    "fitness studio phone support",
    "membership cancellation saves",
    "gym lead follow up",
    "fitness franchise call center",
    "studio class booking support",
    "health club member services",
    "gym billing support outsourcing",
  ],
  alternates: { canonical: "/industries/fitness-gym-call-center" },
};

const features = [
  {
    title: "Membership Enquiry & Tour Booking",
    desc: "Prospective members answered live and booked for a tour or intro class on the call, while intent is high — instead of leaving a voicemail with a gym whose staff are all on the floor coaching.",
  },
  {
    title: "Lead Follow-Up & No-Show Recovery",
    desc: "Structured multi-touch follow-up on web leads, trial signups, and booked tours that did not show. Most fitness leads are lost to silence rather than objection, and this is the work that recovers them.",
  },
  {
    title: "Cancellation Saves & Retention",
    desc: "Cancellation requests handled as a save conversation within the offers you authorize — freeze, downgrade, or a retention offer — rather than processed silently. Retained members are the cheapest revenue a club has.",
  },
  {
    title: "Billing & Payment Failure Recovery",
    desc: "Failed card payments are the largest source of involuntary churn in membership businesses. Agents work declined payments promptly, update details, and recover members who never intended to leave at all.",
  },
  {
    title: "Class & PT Scheduling Support",
    desc: "Class bookings, waitlists, cancellations, and personal training session scheduling handled in Mindbody, ABC Glofox, Zen Planner, or your management platform.",
  },
  {
    title: "Multi-Location & Franchise Routing",
    desc: "A single number for a franchise network with location-aware routing, so a prospect reaches the right club with correct hours, pricing, and current promotions rather than a generic corporate line.",
  },
];

const benefits = [
  "Membership enquiries answered live, not voicemail",
  "100% US-based agents",
  "Mindbody, ABC Glofox & Zen Planner integration",
  "Cancellation save conversations within your offers",
  "Failed payment recovery to cut involuntary churn",
  "Location-aware routing for franchise networks",
];

const stats = [
  { value: 60, suffix: " sec", label: "Target Lead Response Time" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 7, suffix: " days", label: "Coverage Including Weekends" },
  { value: 3, suffix: "+ systems", label: "Club Management Integrations" },
];

const faqs = [
  {
    question: "Why do gyms miss so many membership calls?",
    answer:
      "Because the staff who would answer are coaching, running the floor, or cleaning equipment. Fitness businesses are staffed for the members in the building, not the prospects calling about joining. That is a structural problem, and it means the highest-value call a club receives — someone ready to join — is routinely the one that goes unanswered.",
  },
  {
    question: "Can you book tours and intro classes?",
    answer:
      "Yes. Agents book directly into Mindbody, ABC Glofox, Zen Planner, Wodify, or your platform, respecting staff availability and class capacity. Booking on the call matters enormously in fitness: intent decays within hours, and a prospect told someone will call back tomorrow has usually already looked at two other gyms by then.",
  },
  {
    question: "Do you handle cancellation calls?",
    answer:
      "Yes, as save conversations rather than transactions. Agents work within offers you authorize — freeze, downgrade, pause, or a specific retention offer — and if the member still wants to cancel, we process it cleanly and politely. Handling cancellations badly generates chargebacks and public reviews, so the goal is a good outcome either way, not a hard block.",
  },
  {
    question: "Can you recover failed payments?",
    answer:
      "Yes, and this is often the fastest measurable return. A large share of membership churn is involuntary — an expired card, a replaced bank card, a temporary decline — from members who fully intended to stay. Working those declines promptly with a friendly call recovers members that an automated dunning email never reaches.",
  },
  {
    question: "Do you work with franchise networks?",
    answer:
      "Yes. Franchises get a central number with location-aware routing so prospects reach the correct club with that location's hours, pricing, and current promotions. Franchisees keep their local flexibility while the network gets consistent lead handling and reporting, which is usually the thing corporate cannot enforce otherwise.",
  },
  {
    question: "What hours do you cover?",
    answer:
      "Fitness enquiry volume peaks early morning, evenings, and weekends — precisely when club staff are busiest and corporate offices are closed. We cover those windows specifically, and January volume in particular is planned for in advance, since a club's biggest enquiry month is also the month its staff are least able to reach a phone.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Fitness & Gym Call Center",
    heading: "The person calling to join reaches voicemail. Your staff are on the floor.",
    accent: "reaches voicemail",
    body: [
      "Contact Center USA answers for gyms, boutique studios, and fitness franchises with US-based agents — membership enquiries, tour booking, lead follow-up, cancellation saves, and failed payment recovery.",
      "Fitness businesses are staffed for the members in the building, not for the prospects calling about joining. The result is that the single highest-value call a club receives is routinely the one nobody can pick up.",
    ],
    stats: [
      { stat: "60 sec", label: "Target response time on new membership leads" },
      { stat: "7 days", label: "Coverage across early mornings, evenings, and weekends" },
      { stat: "100%", label: "US-based agents booking in your club software" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Front Desk Only vs. Dedicated Membership Coverage",
    intro:
      "Club staff are excellent with members who are physically present. The gap is everything that happens by phone while they are doing that job.",
    leftTitle: "Club Staff Handling Calls",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Membership Enquiries",
        left: "Missed while staff coach or run the floor; prospect joins elsewhere.",
        right: "Answered live and booked for a tour during the call.",
        leftYes: false,
      },
      {
        label: "Web Lead Follow-Up",
        left: "Called once, days later, if at all.",
        right: "Multi-touch follow-up starting within a minute of submission.",
        leftYes: false,
      },
      {
        label: "Cancellations",
        left: "Processed silently, or handled defensively and reviewed publicly.",
        right: "Save conversation within authorized offers, clean exit if declined.",
        leftYes: false,
      },
      {
        label: "Failed Payments",
        left: "Automated dunning emails that members never open.",
        right: "Live calls recovering members who never meant to leave.",
        leftYes: false,
      },
      {
        label: "January Surge",
        left: "Peak enquiry month collides with peak floor busyness.",
        right: "Capacity planned in advance for the January enquiry spike.",
        leftYes: false,
      },
      {
        label: "Franchise Consistency",
        left: "Lead handling varies wildly between locations.",
        right: "One standard applied network-wide with per-location reporting.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Enquiry to Joined Member",
    intro:
      "Coverage is built around the enquiry windows that actually matter in fitness — early mornings, evenings, weekends, and January.",
    steps: [
      {
        title: "Offer & Pricing Setup",
        body: "We capture membership tiers, current promotions, contract terms, and the save offers agents may present.",
      },
      {
        title: "Platform Provisioning",
        body: "Agents given booking access in Mindbody, ABC Glofox, Zen Planner, or your management system.",
      },
      {
        title: "Lead Routing",
        body: "Web forms and missed calls routed to us for immediate follow-up with a documented touch cadence.",
      },
      {
        title: "Go Live on Peaks",
        body: "Coverage opens on evenings, weekends, and overflow first, where the missed-enquiry cost is highest.",
      },
      {
        title: "Add Retention Work",
        body: "Layer in cancellation saves and failed payment recovery once enquiry handling is stable.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Who We Answer For",
    heading: "Across Clubs, Studios, and Franchise Networks",
    intro:
      "A big-box gym and a boutique studio sell very differently, so scripts and booking flows are built per model.",
    items: [
      {
        icon: "zap",
        stat: "Gyms",
        title: "Health Clubs & Big Box",
        body: "Membership enquiries, tour booking, contract questions, and high-volume retention work.",
      },
      {
        icon: "heart-pulse",
        stat: "Studio",
        title: "Boutique Studios",
        body: "Intro offer conversion, class packages, waitlists, and schedule support for pilates, yoga, and cycling.",
      },
      {
        icon: "building",
        stat: "Franchise",
        title: "Franchise Networks",
        body: "Central number with location-aware routing and consistent lead handling across franchisees.",
      },
      {
        icon: "briefcase",
        stat: "PT",
        title: "Personal Training & Coaching",
        body: "Consultation booking, package renewals, and session scheduling for training businesses.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Fitness Loses More Revenue on the Phone Than on the Floor",
    image: "/images/cc-agent-headset.jpg",
    imagePosition: "right",
    body: [
      "Clubs invest heavily in acquisition — paid ads, promotions, January campaigns — and then route the resulting calls to a desk staffed by people who are, correctly, busy helping members who are already there.",
      "Contact Center USA covers the gap. Enquiries answered live and booked on the call, web leads worked within the minute, cancellations turned into save conversations, and failed payments recovered before an involuntary churn becomes permanent.",
    ],
    bullets: [
      "Enquiries answered live and tours booked during the call",
      "Web lead follow-up starting within a minute of submission",
      "Cancellation saves inside offers you authorize",
      "Failed payment recovery targeting involuntary churn",
      "Location-aware routing and consistent handling for franchises",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Work out what your missed enquiries cost in January.",
    accent: "what your missed enquiries cost",
    body: "Send us your enquiry volume, club software, and membership pricing. We will scope coverage for your peak windows plus a retention and payment recovery program.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Lead Generation & Appointment Setting",
    desc: "Outbound programs that fill the tour calendar rather than waiting for inbound.",
    href: "/solutions/lead-generation-appointment-setting",
  },
  {
    title: "Customer Care Outsourcing",
    desc: "Full member services coverage for networks with volume beyond enquiry handling.",
    href: "/services/customer-care-outsourcing",
  },
  {
    title: "Debt Collection Call Center",
    desc: "Recovery on genuinely delinquent membership balances after save attempts.",
    href: "/industries/debt-collection-call-center",
  },
];

export default function FitnessGymPage() {
  return (
    <ServicePageTemplate
      badge="Fitness & Gym Call Center"
      title="Membership Sales & Retention for Fitness Businesses"
      titleHighlight="Fitness Businesses"
      subtitle="Gyms, studios, and franchise networks use our US-based agents to answer membership enquiries live, book tours on the call, run cancellation saves, and recover failed payments."
      description="Fitness businesses are staffed for the members in the building, which is why the call from someone ready to join is the one that reaches voicemail. We answer those enquiries live and book the tour during the call, follow up on web leads within a minute, turn cancellation requests into save conversations inside offers you authorize, and recover the failed card payments that drive most membership churn."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-1.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
