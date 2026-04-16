import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Logistics & Supply Chain Call Center Services | Tracking & Dispatch | Contact Center USA",
  description:
    "Logistics call center services for shipment tracking, dispatch coordination, delivery inquiries, and fleet support. Keep your supply chain running smoothly 24/7.",
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

const relatedServices = [
  {
    title: "Dispatch Services",
    desc: "Centralized dispatch coordination for fleets and delivery operations.",
    href: "/services/dispatch",
  },
  {
    title: "Customer Support",
    desc: "Professional customer support for delivery inquiries and shipment tracking.",
    href: "/services/inbound",
  },
  {
    title: "After-Hours Answering",
    desc: "24/7 support for drivers, dispatchers, and customers outside business hours.",
    href: "/services/after-hours",
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
    />
  );
}
