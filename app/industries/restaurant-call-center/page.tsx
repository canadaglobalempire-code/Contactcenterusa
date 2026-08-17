import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Restaurant Call Center | Reservations & Catering Order Line",
  description:
    "US-based call center for restaurants and multi-unit groups. Reservations, catering and large orders, guest recovery, and overflow during service. Get a quote.",
  keywords: [
    "restaurant call center",
    "restaurant answering service",
    "reservation call center",
    "catering order line",
    "restaurant phone answering",
    "multi location restaurant support",
    "guest recovery outsourcing",
    "restaurant overflow phone service",
    "food service call center",
    "takeout order line outsourcing",
  ],
  alternates: { canonical: "/industries/restaurant-call-center" },
};

const features = [
  {
    title: "Reservation Booking & Management",
    desc: "Reservations taken, modified, and cancelled live in OpenTable, Resy, SevenRooms, or Tock — including party size changes, special occasion notes, and accessibility or seating requests captured properly.",
  },
  {
    title: "Catering & Large Party Enquiries",
    desc: "The highest-value calls a restaurant receives, and the ones most likely to ring out during a lunch rush. Agents capture headcount, date, budget, dietary requirements, and route a qualified enquiry to your events team.",
  },
  {
    title: "Overflow During Peak Service",
    desc: "Nobody can answer the phone at 7pm on a Friday. Calls roll to us once your line is busy or after a set number of rings, so a reservation enquiry does not become a booking at the restaurant down the street.",
  },
  {
    title: "Guest Recovery & Complaint Handling",
    desc: "Service issues handled promptly and consistently by agents authorized within limits you set, resolving complaints before they become a public review and escalating anything that needs a manager's decision.",
  },
  {
    title: "Multi-Unit Central Line",
    desc: "One number for a whole group, with location-aware routing by the caller's stated location, hours, and current availability — so a guest reaches the right restaurant without being transferred three times.",
  },
  {
    title: "Bilingual Guest Support",
    desc: "Native Spanish-speaking agents handle reservations, catering enquiries, and guest recovery end to end, which matters in markets where a large share of guests prefer Spanish.",
  },
];

const benefits = [
  "Overflow coverage during peak service hours",
  "100% US-based agents",
  "OpenTable, Resy, SevenRooms & Tock integration",
  "Catering and large party enquiry capture",
  "Location-aware routing for multi-unit groups",
  "Bilingual English/Spanish guest support",
];

const stats = [
  { value: 3, suffix: " rings", label: "Target Answer Speed" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 4, suffix: "+ systems", label: "Reservation Platform Integrations" },
  { value: 7, suffix: " days", label: "Coverage Including Weekends" },
];

const faqs = [
  {
    question: "Can you book reservations in our system?",
    answer:
      "Yes. Agents are provisioned in OpenTable, Resy, SevenRooms, Tock, or your booking platform and book, modify, and cancel against live availability during the call — honoring your table configuration, pacing rules, and any deposit or card-hold requirements you have in place.",
  },
  {
    question: "How does overflow work during a busy service?",
    answer:
      "Calls route to us only after your own line is engaged or after a set number of rings, so your host keeps every call they can actually take. During peak service that means the calls we handle are precisely the ones that would otherwise have rung out — which is where the lost bookings live.",
  },
  {
    question: "Do you handle catering and large party enquiries?",
    answer:
      "Yes, and for most operators this is the strongest argument for coverage. A catering enquiry can be worth many times an average cover, and it almost always arrives during a service rush. Agents capture headcount, date, venue or delivery details, budget range, and dietary requirements, then route a qualified enquiry to your events team the same day.",
  },
  {
    question: "Can you handle guest complaints?",
    answer:
      "Yes, within limits you define. Agents acknowledge the issue, apologize appropriately, and apply the remedies you authorize — a comp, a credit, a manager callback — with anything beyond that escalated. The value is speed: a guest whose complaint is handled the same day very often does not go on to post the review.",
  },
  {
    question: "Do you work for multi-unit groups?",
    answer:
      "Yes. Groups get a central number with location-aware routing, so agents can direct a caller to the right restaurant based on their stated location, that location's hours, and current availability. Menus, hours, and private dining details are maintained per unit so guests get accurate answers rather than a transfer.",
  },
  {
    question: "Do you take takeout and delivery orders?",
    answer:
      "We take phone orders where you want them taken, though for most operators the higher-value work is reservations, catering, and large parties. Phone order taking is best suited to concepts with a high average check or those without a strong digital ordering channel; we will tell you honestly if your volume does not justify it.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Restaurant Call Center Services",
    heading: "Nobody is answering the phone at seven o'clock on a Friday.",
    accent: "at seven o'clock on a Friday",
    body: [
      "Contact Center USA answers for restaurants and multi-unit groups with US-based agents — reservations, catering enquiries, guest recovery, and overflow during the hours your team physically cannot reach the phone.",
      "Restaurant phones ring hardest exactly when the floor is busiest. The reservation that rings out at peak service, and the catering enquiry that arrives mid-rush, are the two calls an operator least wants to miss and is most likely to.",
    ],
    stats: [
      { stat: "3 rings", label: "Target answer speed on overflow calls" },
      { stat: "100%", label: "US-based agents booking in your reservation system" },
      { stat: "7 days", label: "Coverage across weekends and peak service windows" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Host Stand Only vs. Restaurant Phone Coverage",
    intro:
      "The host stand is the right place to answer the phone, right up until the moment there is a line at the door. Coverage is about the gap, not about replacing the role.",
    leftTitle: "Host Stand Handling Calls",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Peak Service",
        left: "Phone rings out while the host seats a queue at the door.",
        right: "Overflow answered within three rings and booked live.",
        leftYes: false,
      },
      {
        label: "Catering Enquiries",
        left: "High-value calls missed mid-rush or taken on a scrap of paper.",
        right: "Qualified with headcount, date, and budget, routed to events same day.",
        leftYes: false,
      },
      {
        label: "Off-Hours Calls",
        left: "Nobody answers before open or after close.",
        right: "Coverage across the hours guests actually plan and book.",
        leftYes: false,
      },
      {
        label: "Multi-Unit Routing",
        left: "Guests call the wrong location and get transferred repeatedly.",
        right: "Location-aware routing on a single central number.",
        leftYes: false,
      },
      {
        label: "Guest Complaints",
        left: "Handled days later by email, after the review has posted.",
        right: "Acknowledged and resolved same day within your authorized remedies.",
        leftYes: false,
      },
      {
        label: "Bilingual Guests",
        left: "Depends on who is working that shift.",
        right: "Native Spanish-speaking agents on every coverage window.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "From Overflow Call to Booked Cover",
    intro:
      "Setup runs around the reservation platform and service rhythm you already have, and starts with overflow rather than replacing your host stand.",
    steps: [
      {
        title: "Concept & Policy Setup",
        body: "We capture hours, menus, private dining, pacing rules, deposit policies, and your authorized service remedies.",
      },
      {
        title: "Platform Provisioning",
        body: "Agents given booking access in OpenTable, Resy, SevenRooms, or Tock with your table configuration.",
      },
      {
        title: "Routing Rules",
        body: "Overflow trigger set by busy signal or ring count, with location-aware routing for multi-unit groups.",
      },
      {
        title: "Go Live at Peak",
        body: "Coverage opens on your busiest service windows first, where the missed-call cost is highest.",
      },
      {
        title: "Extend Coverage",
        body: "Add off-hours, catering lines, and guest recovery once peak coverage is proven.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Concepts We Answer For",
    heading: "Across Independent and Multi-Unit Operations",
    intro:
      "A fine dining room and a fast-casual group have entirely different call mixes, so coverage is configured per concept.",
    items: [
      {
        icon: "store",
        stat: "FSR",
        title: "Full-Service Restaurants",
        body: "Reservations, special occasion notes, private dining enquiries, and waitlist management.",
      },
      {
        icon: "shopping-bag",
        stat: "Catering",
        title: "Catering & Events",
        body: "High-value enquiry capture with headcount, budget, and dietary requirements qualified.",
      },
      {
        icon: "building",
        stat: "Group",
        title: "Multi-Unit Groups",
        body: "Central number with location-aware routing and per-unit menus, hours, and availability.",
      },
      {
        icon: "truck",
        stat: "Ghost",
        title: "Ghost Kitchens & Delivery",
        body: "Order status, delivery issue resolution, and guest recovery across virtual brands.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why the Missed Call Costs More Than the Cover",
    image: "/images/cc-woman-typing.jpg",
    imagePosition: "right",
    body: [
      "A missed reservation call is not one lost table. It is a guest who booked elsewhere, and often a party of six on a Saturday. A missed catering enquiry can be worth a full night's covers. Both ring during exactly the hours nobody can pick up.",
      "Contact Center USA takes the overflow, not the host stand. Agents book live in your reservation platform, qualify catering enquiries to your events team the same day, and resolve service complaints within remedies you authorize — before the review gets written.",
    ],
    bullets: [
      "Overflow only — your host keeps every call they can take",
      "Live booking in OpenTable, Resy, SevenRooms, and Tock",
      "Catering enquiries qualified and routed the same day",
      "Guest recovery inside limits you define, escalating the rest",
      "Location-aware routing on one number for multi-unit groups",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Count the calls that rang out last Friday night.",
    accent: "rang out last Friday night",
    body: "Send us your call volume and reservation platform. We will scope overflow coverage for your peak service windows and a dedicated catering enquiry line.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center Services",
    desc: "Broader inbound coverage for groups with volume beyond peak-hour overflow.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Social Media Customer Support",
    desc: "Coverage on the review and social channels where guest complaints surface publicly.",
    href: "/solutions/social-media-customer-support",
  },
  {
    title: "Virtual Receptionist Services",
    desc: "Front-desk style coverage for single-location independents.",
    href: "/industries/virtual-receptionist-services",
  },
];

export default function RestaurantCallCenterPage() {
  return (
    <ServicePageTemplate
      badge="Restaurant Call Center"
      title="Reservations & Catering Coverage for Restaurants"
      titleHighlight="Restaurants"
      subtitle="Independent restaurants and multi-unit groups use our US-based agents to catch overflow at peak service, book reservations live, and qualify the catering enquiries that arrive mid-rush."
      description="Restaurant phones ring hardest exactly when the floor is busiest, and the two calls that ring out most — a Saturday reservation and a catering enquiry — are the two worth the most. We take overflow only, so your host keeps every call they can answer, booking live in OpenTable, Resy, SevenRooms, or Tock and routing qualified catering enquiries to your events team the same day."
      features={features}
      benefits={benefits}
      image="/images/cc-agent-smiling.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
