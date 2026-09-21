import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Event Ticketing Call Center | Box Office & Ticketing BPO",
  description:
    "US-based call center for ticketing companies, venues, and resale marketplaces. On-sale surge, event-day support, refunds, exchanges, and chargeback handling.",
  keywords: [
    "ticketing call center",
    "event ticketing bpo",
    "box office outsourcing",
    "ticket sales call center",
    "ticketing customer support outsourcing",
    "event day support call center",
    "ticket resale customer service",
    "venue call center services",
    "on sale surge support",
    "ticketing chargeback support",
  ],
  alternates: { canonical: "/industries/event-ticketing-call-center" },
};

const features = [
  {
    title: "On-Sale Surge Capacity",
    desc: "A major on-sale generates months of call volume in ninety minutes. We stage trained agents against your announced on-sale calendar so presale codes, queue questions, and payment failures get answered while the inventory is still moving.",
  },
  {
    title: "Event-Day & Door Support",
    desc: "Doors open and the questions change: transfer failures, tickets not appearing in the app, will-call issues, and entry disputes. Dedicated event-day coverage resolves them in minutes, while the fan is still standing outside the gate.",
  },
  {
    title: "Refunds, Exchanges & Cancellations",
    desc: "Postponed and canceled events produce the hardest calls in the business. Agents apply your refund policy consistently, process exchanges and credits, and de-escalate frustrated buyers before the complaint becomes a public review.",
  },
  {
    title: "Chargeback & Fraud Support",
    desc: "Ticketing carries unusually high chargeback and fraud exposure. We handle dispute documentation, verify suspicious orders against your risk rules, and support representment so revenue is not lost to friendly fraud.",
  },
  {
    title: "Ticketing Platform Integration",
    desc: "Agents work inside the systems you already run — your ticketing platform, order management, and CRM — so order lookups, reissues, and transfers happen live on the call rather than through a support ticket queue.",
  },
  {
    title: "Seller & Broker Support",
    desc: "For marketplaces and resale platforms, dedicated support for sellers and brokers covering listing issues, fulfillment deadlines, transfer confirmations, and payout questions that block inventory from clearing.",
  },
];

const benefits = [
  "Surge staffing aligned to your on-sale calendar",
  "24/7 and extended event-day coverage",
  "100% US-based agents for domestic events",
  "Refund, exchange, and cancellation handling",
  "Chargeback documentation and fraud verification",
  "Bilingual English/Spanish fan support",
];

const stats = [
  { value: 24, suffix: "/7", label: "Event-Day & On-Sale Coverage" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 5, suffix: "x", label: "Surge-to-Base Staffing Flex" },
  { value: 3, suffix: " channels", label: "Phone, Chat, and Email Fan Support" },
];

const faqs = [
  {
    question: "Can you staff up for a major on-sale?",
    answer:
      "Yes — this is the core reason ticketing companies outsource. We plan against your announced on-sale calendar, stage trained agents ahead of the drop, and hold reserve capacity for the first two hours when volume is heaviest. Because staffing is scheduled around events rather than fixed headcount, you are not paying peak payroll during a quiet week.",
  },
  {
    question: "Do you support event-day and door issues?",
    answer:
      "Yes. Event day is a distinct workload from on-sale and needs its own coverage window, often running late into the night and across weekends. Agents handle transfer failures, tickets missing from the buyer's app or wallet, will-call and box office questions, and entry disputes — the issues where a slow answer means a fan misses the opening act.",
  },
  {
    question: "How do you handle refunds for canceled or postponed events?",
    answer:
      "We apply your published policy consistently and document every interaction. For a cancellation or postponement we can run proactive outbound and email campaigns alongside inbound coverage, process refunds, exchanges, and credits inside your platform, and escalate the exceptions your team wants to decide on directly. Consistency matters here — inconsistent refund answers are what turn a postponement into a chargeback wave.",
  },
  {
    question: "Can you help with chargebacks and ticket fraud?",
    answer:
      "Yes. Ticketing has a higher dispute and friendly-fraud rate than most e-commerce. We compile representment documentation for disputes, verify high-risk orders against your fraud rules before fulfillment, and handle the buyer contact that often resolves a dispute before it becomes a formal chargeback. Final risk decisions stay with your team.",
  },
  {
    question: "Do you work inside our ticketing platform?",
    answer:
      "Yes. Agents are provisioned in your ticketing system, order management, and CRM with role-appropriate permissions, so they can look up orders, reissue and transfer tickets, and process approved refunds live on the call. We integrate with major ticketing platforms as well as custom and proprietary systems.",
  },
  {
    question: "Do you support resale marketplaces and brokers?",
    answer:
      "Yes. Marketplaces have two distinct audiences. Buyers need order, delivery, and transfer support; sellers and brokers need help with listings, fulfillment deadlines, transfer confirmation, and payouts. We staff both, and keep seller support separate from buyer support so fulfillment deadlines are never waiting behind a general queue.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Ticketing Call Center & Event BPO",
    heading: "Your volume arrives in ninety-minute spikes. Fixed headcount cannot cover that.",
    accent: "ninety-minute spikes",
    body: [
      "Contact Center USA supports ticketing companies, venues, promoters, and resale marketplaces with US-based agents staffed around on-sales and event days rather than a flat weekly schedule.",
      "Ticketing demand is spikier than almost any other industry. A stadium on-sale, a surprise tour announcement, or a weather postponement can generate a month of normal contact volume in a single afternoon — and every unanswered call during that window is inventory that does not clear and a fan who posts about it.",
    ],
    stats: [
      { stat: "5x", label: "Surge-to-base staffing flex for on-sales and event days" },
      { stat: "24/7", label: "Coverage across on-sale windows, event nights, and weekends" },
      { stat: "100%", label: "US-based agents for domestic events and venues" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Ticketing Support vs. an Event Ticketing BPO",
    intro:
      "Ticketing operators consistently run into the same structural problem: the team sized for an average Tuesday is nowhere near the team needed for a Friday on-sale, and hiring for the peak means paying for idle capacity the rest of the month.",
    leftTitle: "In-House Support Team",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "On-Sale Spikes",
        left: "Queue times blow out in the first hour; abandoned calls become abandoned carts.",
        right: "Agents staged against your on-sale calendar with reserve capacity held for the drop.",
        leftYes: false,
      },
      {
        label: "Event-Day Hours",
        left: "Support closes at 5pm while doors open at 7pm — nobody covers entry issues.",
        right: "Extended and overnight event-day windows scheduled per event.",
        leftYes: false,
      },
      {
        label: "Cost at Trough",
        left: "Peak-sized payroll paid during quiet weeks between on-sales.",
        right: "Cost tracks the event calendar instead of a fixed roster.",
        leftYes: false,
      },
      {
        label: "Cancellation Events",
        left: "A postponement overwhelms the team and refund answers become inconsistent.",
        right: "Surge pod deployed with one documented policy applied across every contact.",
        leftYes: false,
      },
      {
        label: "Chargeback Handling",
        left: "Disputes handled ad hoc by finance staff with incomplete documentation.",
        right: "Structured representment packets and pre-fulfillment fraud verification.",
        leftYes: false,
      },
      {
        label: "Seller/Broker Support",
        left: "Seller issues sit in the same queue as buyer questions and miss fulfillment windows.",
        right: "Separate seller and broker queues with fulfillment deadlines prioritized.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Staffed Around Your Event Calendar",
    intro:
      "Ticketing support is planned backwards from the calendar. Every engagement is built around your announced on-sales, your event nights, and your historical volume curves.",
    steps: [
      {
        title: "Event Calendar Review",
        body: "We map your on-sale schedule, event nights, and historical volume curves to build a staffing plan per window.",
      },
      {
        title: "Platform Provisioning",
        body: "Agents provisioned in your ticketing platform, order management, and CRM with role-based permissions.",
      },
      {
        title: "Policy & Scenario Training",
        body: "Training on refund policy, transfer mechanics, fraud rules, and the escalation paths for cancellations.",
      },
      {
        title: "On-Sale & Event-Day Launch",
        body: "Staged coverage for the first on-sale with reserve capacity held, then extended windows on event nights.",
      },
      {
        title: "Post-Event Review",
        body: "Volume, resolution, and dispute reporting after each major event to tune staffing for the next one.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Segments",
    heading: "Who We Support in Live Events",
    intro:
      "A venue box office, a national marketplace, and a touring promoter have very different contact profiles. We staff and train per segment.",
    items: [
      {
        icon: "store",
        stat: "Venues",
        title: "Venues & Box Offices",
        body: "Season ticket support, will-call, entry issues, accessibility seating, and group sales inquiries.",
      },
      {
        icon: "shopping-bag",
        stat: "Market",
        title: "Marketplaces & Resale",
        body: "Buyer order and transfer support plus dedicated seller and broker fulfillment queues.",
      },
      {
        icon: "briefcase",
        stat: "Promo",
        title: "Promoters & Tours",
        body: "On-sale surge, presale code support, VIP and package questions, and postponement campaigns.",
      },
      {
        icon: "dollar",
        stat: "Sports",
        title: "Sports & Franchises",
        body: "Season ticket renewals, membership servicing, playoff on-sales, and hospitality package support.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Ticketing Companies Outsource to a US-Based Partner",
    image: "/images/cc-team-huddle.jpg",
    imagePosition: "right",
    body: [
      "Fans calling about a ticket they cannot find an hour before doors are not in a patient mood, and a scripted offshore response makes it worse. Ticketing support demands agents who can move fast inside a live order system and de-escalate at the same time.",
      "Contact Center USA staffs domestic agents trained on your platform, your refund policy, and your fraud rules, scheduled against your actual event calendar. You get coverage that expands for an on-sale and contracts afterwards, without carrying peak payroll through a quiet month.",
    ],
    bullets: [
      "Staffing planned against your announced on-sale and event calendar",
      "Extended and overnight event-day coverage windows",
      "Live order lookup, reissue, and transfer inside your ticketing platform",
      "Chargeback representment and pre-fulfillment fraud verification",
      "Separate buyer and seller/broker support queues",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Get coverage that scales with your on-sale calendar.",
    accent: "scales with your on-sale calendar",
    body: "Send us your event calendar and typical on-sale volume. We will build a staffing and pricing plan for on-sale windows, event days, and baseline coverage between events.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center Services",
    desc: "Elastic inbound coverage engineered for on-sale spikes and event-night volume.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Live Chat Outsourcing",
    desc: "Real-time chat for fans stuck in a checkout queue or a failed ticket transfer.",
    href: "/services/live-chat-outsourcing",
  },
  {
    title: "Fraud Prevention & Cyber Security",
    desc: "Order verification and dispute support for a category with high chargeback exposure.",
    href: "/services/fraud-prevention-cyber-security",
  },
  {
    title: "Professional Call Center Solutions for the Airlines Industry",
    desc: "US-based airlines call center support for customer care, inbound calls, outbound outreach, and back office workflows.",
    href: "/industries/airlines-call-center",
  },
  {
    title: "Travel Crisis Management & Support",
    desc: "How a travel management company handled 50,000+ rebookings during a global disruption with 96% resolution rate and 4-minute average handle time.",
    href: "/case-studies/travel-crisis-management",
  },
  {
    title: "Season Ticket & Game-Day Support for Sports Organizations",
    desc: "US-based call center for sports teams, stadiums, and arenas.",
    href: "/industries/sports-venue-call-center",
  },
];

export default function EventTicketingPage() {
  return (
    <ServicePageTemplate
      badge="Event Ticketing Call Center"
      title="Surge-Ready Support for the Event Ticketing Industry"
      titleHighlight="Event Ticketing Industry"
      subtitle="Ticketing platforms, venues, promoters, and resale marketplaces use our US-based agents to cover on-sale spikes, event-day issues, refunds, and chargebacks — staffed around your calendar, not a fixed roster."
      description="Ticketing volume does not arrive evenly. It arrives in ninety-minute on-sale spikes, on event nights after your office has closed, and in a wall of refund calls the morning a show is postponed. We staff against your event calendar so those windows are covered, work live inside your ticketing platform, and handle the refunds, transfers, and disputes that follow."
      features={features}
      benefits={benefits}
      image="/images/cc-office-wide.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
