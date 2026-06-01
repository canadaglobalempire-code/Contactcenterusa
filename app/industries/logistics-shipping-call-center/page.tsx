import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Logistics Shipping Call Center | Contact Center USA",
  description:
    "US-based logistics shipping call center support for customer care, inbound calls, outbound outreach, and back office workflows. Request an outsourcing quote.",
  keywords: [
    "logistics call center",
    "shipping bpo services",
    "logistics customer support",
    "supply chain call center",
    "3pl customer service outsourcing",
    "dispatch call center",
    "last mile customer service",
    "freight claims outsourcing",
  ],
  alternates: { canonical: "/industries/logistics-shipping-call-center" },
};

const features = [
  {
    title: "Shipment Tracking & Updates",
    desc: "Real-time shipment visibility with agents who proactively communicate status updates, delivery ETAs, and exception alerts across all carriers and transportation modes.",
  },
  {
    title: "Dispatch Coordination",
    desc: "Centralized dispatch support that coordinates drivers, routes, and delivery schedules with real-time adjustments for traffic, weather, and priority changes to optimize fleet efficiency.",
  },
  {
    title: "Delivery Inquiry Management",
    desc: "Responsive handling of delivery questions, missed delivery resolution, redelivery scheduling, and proof-of-delivery requests that keep customers informed and reduce complaints.",
  },
  {
    title: "Fleet & Driver Support",
    desc: "24/7 driver assistance including breakdown coordination, route guidance, load management, and compliance documentation to keep your fleet moving and your drivers supported.",
  },
  {
    title: "Claims & Damage Resolution",
    desc: "Efficient processing of freight claims, damage reports, and loss investigations with thorough documentation, carrier coordination, and timely resolution to protect customer relationships.",
  },
  {
    title: "Warehouse & Inventory Support",
    desc: "Support for warehouse operations including inventory inquiries, stock availability, order fulfillment status, and receiving coordination to keep your supply chain transparent.",
  },
];

const benefits = [
  "Real-time shipment tracking",
  "24/7 dispatch coordination",
  "TMS & WMS integrations",
  "Multi-carrier visibility",
  "Driver & fleet assistance",
  "Claims processing support",
];

const stats = [
  { value: 99, suffix: "%", label: "Dispatch Accuracy Rate" },
  { value: 45, suffix: "%", label: "Fewer Missed Deliveries" },
  { value: 750, suffix: "K+", label: "Shipments Tracked" },
  { value: 24, suffix: "/7", label: "Dispatch Coverage" },
];

const testimonial = {
  quote:
    "Contact Center USA became an extension of our dispatch team. Missed delivery complaints dropped 45% and our drivers love having 24/7 support. Their logistics expertise is the real deal.",
  name: "R.F.",
  title: "Director of Logistics",
  company: "A National Shipping Company",
  initials: "RF",
};

const faqs = [
  {
    question: "Can your agents access our transportation management system?",
    answer:
      "Yes, we integrate with leading TMS platforms including Oracle Transportation Management, MercuryGate, TMW, and McLeod. Agents access shipment data, update statuses, and coordinate dispatch actions directly in your system for seamless operations.",
  },
  {
    question: "How do you handle after-hours dispatch emergencies?",
    answer:
      "Our 24/7 dispatch team follows your escalation protocols for urgent situations including breakdowns, accidents, load rejections, and priority shipment changes. We coordinate with drivers, carriers, and your operations team to resolve issues quickly.",
  },
  {
    question: "Do you support last-mile delivery customer service?",
    answer:
      "Absolutely. We handle delivery window confirmations, missed delivery resolution, redelivery scheduling, and real-time tracking inquiries for last-mile operations. Our agents reduce customer complaints and improve delivery success rates.",
  },
  {
    question: "Can you manage multi-carrier shipment tracking?",
    answer:
      "Yes, we provide unified tracking across all major carriers including FedEx, UPS, USPS, DHL, and LTL/FTL freight carriers. Agents access a single dashboard with real-time data from all carriers to provide instant, accurate status updates.",
  },
  {
    question: "How do you handle freight claims and damage reports?",
    answer:
      "Our agents follow a structured claims process — documenting damage with photos and details, filing claims with the appropriate carrier, tracking resolution status, and communicating updates to your customers. We aim to resolve claims 40% faster than industry averages.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Logistics Call Center in USA",
    heading: "The logistics call center that keeps loads moving, drivers supported, and customers informed around the clock.",
    accent: "around the clock",
    body: [
      "Contact Center USA is one of the best logistics call center providers in the USA — a 100% US-based shipping BPO services operation with live TMS integrations, multi-carrier tracking, and 24/7 dispatch coverage built for carriers, 3PLs, and shippers.",
      "For asset-based carriers, last-mile operators, and supply-chain teams evaluating logistics customer support partners, we deliver fewer missed deliveries, faster claims cycle times, and measurable driver-retention lift from after-hours support.",
    ],
    stats: [
      { stat: "99%", label: "Dispatch accuracy rate across freight and last-mile programs" },
      { stat: "-45%", label: "Fewer missed-delivery complaints within 90 days of program launch" },
      { stat: "750K+", label: "Shipments tracked and updated annually across our logistics book" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Dispatch & Support vs. Contact Center USA BPO",
    intro:
      "Logistics runs 24/7 but in-house dispatch rarely does. Here's how internal operations compare to a dedicated logistics call center partner.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "After-Hours Coverage",
        left: "Drivers and customers wait until morning for non-urgent tracking and dispatch support.",
        right: "24/7 coverage across dispatch, driver support, and customer tracking queues.",
        leftYes: false,
      },
      {
        label: "TMS & WMS Integration",
        left: "Agents navigate multiple systems; manual updates slow response to exceptions.",
        right: "Live integration to Oracle OTM, MercuryGate, TMW, McLeod, and custom WMS platforms.",
        leftYes: false,
      },
      {
        label: "Claims Cycle Time",
        left: "Freight claims drag 30–60 days with inconsistent documentation and follow-up.",
        right: "Structured claims workflow drives resolution 40% faster than industry averages.",
        leftYes: false,
      },
      {
        label: "Multi-Carrier Tracking",
        left: "Siloed tracking portals — reps swivel-chair between FedEx, UPS, USPS, DHL, and LTL portals.",
        right: "Unified multi-carrier dashboard with real-time data across every mode and lane.",
        leftYes: false,
      },
      {
        label: "Driver Retention Impact",
        left: "Drivers feel unsupported after hours — churn and dispatch satisfaction suffer.",
        right: "24/7 driver hotline with breakdown coordination and route-level support.",
        leftYes: false,
      },
      {
        label: "Peak-Season Surge",
        left: "Peak, produce, and retail cycles overwhelm internal dispatch and customer service.",
        right: "Pre-planned seasonal surge staffing aligned to your peak and project-cargo calendar.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Shipping BPO Services Onboarding",
    intro:
      "Every carrier, 3PL, and shipper partnership follows the same five-stage launch — engineered to respect dispatch culture, integrate with your TMS/WMS, and prove 24/7 reliability before peak season.",
    steps: [
      {
        title: "Operator Discovery",
        body: "Lanes, modes, carrier network, TMS/WMS stack, and dispatch escalation paths mapped together.",
      },
      {
        title: "Systems Integration",
        body: "Secure connections to Oracle OTM, MercuryGate, TMW, McLeod, and multi-carrier tracking APIs.",
      },
      {
        title: "Logistics Certification",
        body: "Agents trained on your lanes, OS&D process, driver protocols, and customer SLA standards.",
      },
      {
        title: "Pilot Lane Launch",
        body: "Live traffic on a single lane or account with joint QA and dispatch-team calibration.",
      },
      {
        title: "Full Operations Cutover",
        body: "Network-wide rollout with 24/7 coverage, peak-season surge plan, and claims workflow online.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Sub-Segments",
    heading: "Logistics Sub-Segments Our BPO Supports",
    intro:
      "Asset-based carriers, 3PLs, brokers, and last-mile operators all have different customer profiles. Our logistics customer support model flexes to the economics of each sub-segment.",
    items: [
      {
        icon: "truck",
        stat: "Carrier",
        title: "Asset-Based Carriers",
        body: "FTL, LTL, and specialized carrier support — driver assistance, dispatch, and shipper updates.",
      },
      {
        icon: "truck",
        stat: "3PL",
        title: "3PLs & Freight Brokers",
        body: "Load tracking, carrier check calls, capacity sourcing, and customer communication support.",
      },
      {
        icon: "home",
        stat: "Last-Mile",
        title: "Last-Mile & Parcel",
        body: "Delivery window confirmation, exception handling, redelivery scheduling, and customer tracking.",
      },
      {
        icon: "building",
        stat: "Warehouse",
        title: "Warehousing & Fulfillment",
        body: "Inventory inquiries, receiving coordination, returns management, and fulfillment status support.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Carriers and 3PLs Choose Contact Center USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore logistics customer support creates friction with US drivers and shippers — nuance on lane detail, OS&D claims, and exception management gets lost. Generalist BPOs miss the operational urgency that defines freight.",
      "Contact Center USA is different: a 100% US-based logistics call center with dedicated supervisors who've run dispatch operations, real TMS/WMS integration, and a 24/7 model engineered for the freight cycle.",
    ],
    bullets: [
      "100% US-based logistics call center workforce — US drivers get US support",
      "Native TMS/WMS integrations and multi-carrier tracking dashboards",
      "24/7 dispatch, driver-support, and customer-tracking lanes with separate QA",
      "Structured claims workflow for OS&D with 40% faster cycle time",
      "Seasonal surge staffing tuned to peak, produce, retail, and project-cargo cycles",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to outsource your logistics call center to a US-based freight specialist?",
    accent: "freight specialist",
    body: "If after-hours dispatch is a weak spot, freight claims are dragging, or last-mile complaints are eroding shipper relationships, request a free consultation. We'll build a lane-level staffing plan and expected impact on missed deliveries, driver retention, and claims cycle time.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Dispatch Services",
    desc: "Centralized dispatch coordination for fleets and delivery operations.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Customer Support",
    desc: "Professional customer support for delivery inquiries and shipment tracking.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "After-Hours Answering",
    desc: "24/7 support for drivers, dispatchers, and customers outside business hours.",
    href: "/solutions/customer-service-outsourcing",
  },
];

export default function LogisticsPage() {
  return (
    <ServicePageTemplate
      badge="Logistics Call Center Services"
      title="Call Center Solutions for Logistics & Supply Chain"
      titleHighlight="Logistics & Supply Chain"
      subtitle="24/7 dispatch coordination, shipment tracking, and delivery support that keeps your supply chain moving and your customers informed at every step."
      description="Logistics operations demand precision, speed, and round-the-clock reliability. Our agents integrate directly with your TMS and carrier platforms to provide real-time tracking, coordinate dispatch, resolve delivery issues, and support your drivers — all from a team that understands the urgency and complexity of supply chain operations."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-working.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
