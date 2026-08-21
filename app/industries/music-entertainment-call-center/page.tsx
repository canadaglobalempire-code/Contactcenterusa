import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Music & Entertainment Call Center | Fan Support Outsourcing",
  description:
    "US-based call center for music labels, streaming platforms, artist fan clubs, and merch brands. Fan support, membership servicing, merch and tour support.",
  keywords: [
    "music industry call center",
    "entertainment bpo",
    "fan support outsourcing",
    "artist fan club support",
    "music streaming customer support",
    "merch customer service outsourcing",
    "record label customer support",
    "tour support call center",
    "membership support outsourcing",
    "entertainment customer service outsourcing",
  ],
  alternates: { canonical: "/industries/music-entertainment-call-center" },
};

const features = [
  {
    title: "Fan Club & Membership Support",
    desc: "Enrollment, renewals, presale code delivery, tier upgrades, and lapsed-member win-back for artist fan clubs and membership programs — the recurring revenue that depends entirely on members feeling looked after.",
  },
  {
    title: "Drop & Release Surge Coverage",
    desc: "An album drop, a merch capsule, or a tour announcement compresses months of contact volume into a single day. We stage agents against your release calendar so checkout failures and presale questions get answered while the drop is still live.",
  },
  {
    title: "Merch & Fulfillment Support",
    desc: "Order status, sizing and exchange questions, damaged and missing shipments, and pre-order delay communication for artist and label merch stores running on Shopify and comparable platforms.",
  },
  {
    title: "Streaming & Subscription Support",
    desc: "Account access, billing and payment failures, device and playback troubleshooting, cancellation saves, and win-back outreach for streaming and digital music subscription services.",
  },
  {
    title: "Tour & VIP Package Support",
    desc: "VIP and meet-and-greet package servicing, itinerary and check-in questions, accessibility requests, and the postponement communications that protect goodwill when a date moves.",
  },
  {
    title: "Rights, Sync & Licensing Intake",
    desc: "Front-line intake and triage for sync, licensing, and rights inquiries — capturing the usage details your business affairs team needs and routing qualified requests instead of letting them sit in a shared inbox.",
  },
];

const benefits = [
  "Staffing aligned to release and tour calendars",
  "100% US-based agents for domestic fan bases",
  "Fan club, merch, and streaming support in one team",
  "Shopify and subscription platform integration",
  "Social and community channel coverage",
  "Bilingual English/Spanish fan support",
];

const stats = [
  { value: 24, suffix: "/7", label: "Drop-Day & Tour Coverage Available" },
  { value: 100, suffix: "%", label: "US-Based Agents" },
  { value: 4, suffix: " channels", label: "Phone, Chat, Email, and Social" },
  { value: 5, suffix: "x", label: "Surge-to-Base Staffing Flex" },
];

const faqs = [
  {
    question: "Can you handle an album drop or merch release spike?",
    answer:
      "Yes. Release-day support is planned the same way an on-sale is: we work backwards from your announced drop date, stage trained agents ahead of it, and hold reserve capacity for the first hours when checkout failures and payment issues cluster. Between releases, staffing drops back to baseline so you are not paying drop-day capacity every week.",
  },
  {
    question: "Do you support artist fan clubs and paid memberships?",
    answer:
      "Yes. Fan club and membership programs are recurring revenue, and they churn when members cannot get an answer about a presale code or a renewal charge. We handle enrollment, renewals, tier changes, presale access issues, and structured win-back outreach to lapsed members, working inside your membership platform.",
  },
  {
    question: "Can you cover merch order and fulfillment questions?",
    answer:
      "Yes. We handle order status, sizing and exchange requests, damaged or missing shipments, and the pre-order delay communications that generate the most frustration. Agents work in your commerce platform — Shopify and comparable systems — so they can look up and act on orders live rather than escalating everything to your fulfillment partner.",
  },
  {
    question: "Do you handle social media and community channels?",
    answer:
      "Yes. Fan bases raise issues publicly before they email anyone, so social coverage is part of the program rather than a separate product. Agents monitor and respond on your social and community channels using your approved brand voice, and escalate anything that needs artist management or publicity involvement rather than answering it themselves.",
  },
  {
    question: "How do you protect artist brand voice?",
    answer:
      "Tone is treated as a deliverable. During onboarding we document voice, vocabulary, what agents may and may not say about an artist, and a clear escalation line to management or publicity for anything sensitive. Responses are QA-reviewed against those guidelines, and approved response libraries keep language consistent across a fan base that compares notes publicly.",
  },
  {
    question: "Can you support a tour, including postponements?",
    answer:
      "Yes. Tour support covers VIP and meet-and-greet package servicing, itinerary and check-in questions, and accessibility requests. When a date moves we can run coordinated inbound and outbound coverage with one documented policy, which is what keeps a postponement from turning into a refund and chargeback wave.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Music & Entertainment BPO",
    heading: "Fans do not file support tickets. They post about you.",
    accent: "They post about you",
    body: [
      "Contact Center USA supports labels, artist management, streaming platforms, fan clubs, and merch brands with US-based agents trained to speak in an artist's voice — across phone, chat, email, and social.",
      "Entertainment support is unlike ordinary e-commerce care. Volume arrives in drop-day and tour-announcement spikes, the audience is emotionally invested, and an unanswered question about a missing presale code becomes a public thread within minutes.",
    ],
    stats: [
      { stat: "5x", label: "Surge-to-base staffing flex for drops and tour announcements" },
      { stat: "100%", label: "US-based agents trained on artist brand voice" },
      { stat: "4", label: "Channels covered: phone, chat, email, and social" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Fan Support vs. an Entertainment BPO",
    intro:
      "Most labels and management teams run fan support out of a shared inbox handled by staff who already have another job. It works until a drop, a tour announcement, or a postponement — and then it very publicly does not.",
    leftTitle: "Shared Inbox & Internal Staff",
    rightTitle: "Contact Center USA",
    rows: [
      {
        label: "Drop-Day Volume",
        left: "Inbox floods during the release window; replies go out days later when it no longer matters.",
        right: "Agents staged against the release calendar with reserve capacity for the first hours.",
        leftYes: false,
      },
      {
        label: "Social Coverage",
        left: "Complaints spread publicly before anyone internally sees them.",
        right: "Monitored social and community coverage with approved response libraries.",
        leftYes: false,
      },
      {
        label: "Membership Churn",
        left: "Renewal and presale issues go unanswered and members quietly lapse.",
        right: "Membership servicing plus structured win-back outreach to lapsed members.",
        leftYes: false,
      },
      {
        label: "Brand Voice",
        left: "Tone varies by whoever happens to reply that day.",
        right: "Documented voice guidelines, approved libraries, and QA review on responses.",
        leftYes: false,
      },
      {
        label: "Tour Postponements",
        left: "Inconsistent refund answers turn goodwill into chargebacks.",
        right: "One documented policy applied across coordinated inbound and outbound coverage.",
        leftYes: false,
      },
      {
        label: "Cost Between Releases",
        left: "Internal staff pulled off core work during spikes, idle capacity otherwise.",
        right: "Staffing tracks the release calendar instead of a fixed roster.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Built Around Your Release and Tour Calendar",
    intro:
      "Entertainment support is scheduled backwards from the calendar — drops, on-sales, and tour dates — rather than staffed to a flat weekly average.",
    steps: [
      {
        title: "Release Calendar Review",
        body: "We map your drop dates, tour announcements, and on-sale windows to build a staffing plan per event.",
      },
      {
        title: "Voice & Escalation Guidelines",
        body: "Brand voice, approved language, and a clear escalation line to management and publicity documented before launch.",
      },
      {
        title: "Platform Provisioning",
        body: "Agents provisioned in your commerce, membership, subscription, and social tooling with the right permissions.",
      },
      {
        title: "Drop-Day Launch",
        body: "Staged coverage for the first release with reserve capacity held for the opening hours.",
      },
      {
        title: "Post-Release Review",
        body: "Volume, sentiment, and resolution reporting after each drop to tune staffing and response libraries.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Segments",
    heading: "Who We Support in Music & Entertainment",
    intro:
      "A streaming platform and an artist fan club generate completely different contact profiles. We staff and train per segment.",
    items: [
      {
        icon: "briefcase",
        stat: "Labels",
        title: "Labels & Artist Management",
        body: "Fan inquiries, membership servicing, sync and licensing intake, and coordinated tour communications.",
      },
      {
        icon: "shopping-bag",
        stat: "Merch",
        title: "Merch & DTC Stores",
        body: "Order status, sizing and exchanges, pre-order delay comms, and drop-day checkout support.",
      },
      {
        icon: "store",
        stat: "Stream",
        title: "Streaming & Subscriptions",
        body: "Account access, billing failures, playback troubleshooting, cancellation saves, and win-back.",
      },
      {
        icon: "dollar",
        stat: "Live",
        title: "Festivals & Live Events",
        body: "VIP package servicing, accessibility requests, on-site questions, and postponement campaigns.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Entertainment Brands Choose a US-Based Support Partner",
    image: "/images/cc-woman-headset.jpg",
    imagePosition: "right",
    body: [
      "Fan support is brand marketing with a queue attached. A fan who cannot get a presale code, or whose vinyl pre-order slipped three months with no explanation, does not quietly churn — they post, and the thread outlives the release.",
      "Contact Center USA staffs domestic agents trained on your artist's voice and your policies, scheduled against your release and tour calendar, covering phone, chat, email, and social from one team. Sensitive issues escalate to management instead of being improvised by an agent.",
    ],
    bullets: [
      "Staffing planned against drop dates, on-sales, and tour announcements",
      "Documented brand voice with QA review and approved response libraries",
      "Fan club, merch, streaming, and social coverage from one team",
      "Clear escalation line to artist management and publicity",
      "Bilingual English/Spanish fan support included",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Give your fan base a team that answers on drop day.",
    accent: "a team that answers on drop day",
    body: "Send us your release and tour calendar with typical contact volume. We will build a coverage and pricing plan for drop days, tour windows, and baseline fan support in between.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Social Media Customer Support",
    desc: "Monitored coverage on the channels where fan complaints surface first.",
    href: "/solutions/social-media-customer-support",
  },
  {
    title: "Ecommerce Customer Service",
    desc: "Order, exchange, and fulfillment support for artist and label merch stores.",
    href: "/industries/ecommerce-customer-service-outsourcing",
  },
  {
    title: "Event Ticketing Call Center",
    desc: "On-sale surge and event-day coverage for tours, festivals, and venues.",
    href: "/industries/event-ticketing-call-center",
  },
];

export default function MusicEntertainmentPage() {
  return (
    <ServicePageTemplate
      badge="Music & Entertainment Call Center"
      title="Fan Support Outsourcing for the Music & Entertainment Industry"
      titleHighlight="Music & Entertainment Industry"
      subtitle="Labels, artist management, streaming platforms, fan clubs, and merch brands use our US-based agents to cover drop days, tour windows, and everyday fan support across phone, chat, email, and social."
      description="Entertainment support arrives in spikes and plays out in public. We staff against your release and tour calendar, train agents on your artist's voice with a documented escalation path to management, and cover fan club memberships, merch orders, streaming accounts, and social channels from a single US-based team."
      features={features}
      benefits={benefits}
      image="/images/cc-team-collab.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
