import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Airlines Call Center Services | Reservations & Passenger Support | Contact Center USA",
  description:
    "Airlines call center services including reservations, flight changes, crisis management, loyalty programs, baggage tracking, and rebooking. Trusted by airlines and travel partners nationwide.",
  alternates: { canonical: "/industries/airlines-call-center" },
};

const features = [
  {
    title: "Reservations & Booking Management",
    desc: "End-to-end reservation support that handles new bookings, seat selection, fare comparisons, and group travel coordination — ensuring passengers get the best options while maximizing your revenue per flight.",
  },
  {
    title: "Flight Changes & Cancellations",
    desc: "Trained agents who process itinerary changes, voluntary rebookings, and cancellations quickly and accurately, applying fare rules and waivers correctly to minimize revenue loss and passenger frustration.",
  },
  {
    title: "Crisis & Irregular Operations Management",
    desc: "Rapid-response teams that scale instantly during weather events, mechanical delays, and system outages — rebooking stranded passengers, coordinating hotel accommodations, and delivering real-time updates across every channel.",
  },
  {
    title: "Loyalty & Frequent Flyer Programs",
    desc: "Dedicated support for your loyalty program members including mileage inquiries, tier status questions, award redemptions, partner earning, and elite-level concierge services that keep your best customers flying with you.",
  },
  {
    title: "Baggage Tracking & Claims",
    desc: "Comprehensive baggage support from delayed bag tracing and delivery coordination to damage claims processing and lost luggage resolution — reducing complaint escalations and improving passenger satisfaction scores.",
  },
  {
    title: "Rebooking & Schedule Recovery",
    desc: "Proactive rebooking solutions that automatically reroute affected passengers during schedule changes and disruptions, using intelligent algorithms and skilled agents to minimize misconnections and protect your on-time performance.",
  },
];

const benefits = [
  "24/7/365 multilingual passenger support",
  "GDS & reservation system integrations",
  "Rapid scale-up during irregular operations",
  "IATA-compliant processes and training",
  "Dedicated elite and loyalty tier handling",
  "Real-time reporting & SLA dashboards",
];

const stats = [
  { value: 99, suffix: "%", label: "Call Answer Rate" },
  { value: 40, suffix: "%", label: "Faster Rebooking Times" },
  { value: 2, suffix: "M+", label: "Passenger Interactions Yearly" },
  { value: 24, suffix: "/7", label: "Year-Round Coverage" },
];

const testimonial = {
  quote:
    "Contact Center USA transformed our passenger support operation. During peak travel disruptions, their team rebooking capacity scaled overnight and our customer satisfaction scores improved by 28%. They truly understand the airline industry.",
  name: "S.W.",
  title: "Director of Customer Experience",
  company: "A Major U.S. Airline",
  initials: "SW",
};

const faqs = [
  {
    question: "Do your agents have experience with airline reservation systems?",
    answer:
      "Yes. Our agents are trained on major GDS platforms including Sabre, Amadeus, and Travelport, as well as proprietary airline reservation systems. We work with your team to build custom training programs covering your specific fare rules, policies, and booking workflows.",
  },
  {
    question: "How quickly can you scale during irregular operations?",
    answer:
      "We maintain a trained reserve pool specifically for airline clients that can be activated within hours. During major disruptions like weather events or system outages, we can increase staffing by up to 300% within 4-6 hours to handle rebooking surges and passenger inquiries.",
  },
  {
    question: "Can you support loyalty and frequent flyer program members?",
    answer:
      "Absolutely. We provide dedicated queues and specially trained agents for loyalty program support, including mileage account management, tier status inquiries, award ticket bookings, partner program questions, and white-glove service for elite-level members.",
  },
  {
    question: "What languages do you support for international passengers?",
    answer:
      "We offer support in English, Spanish, French, Portuguese, and Mandarin as core languages, with additional language capabilities available through our partnership network. All agents are trained in cross-cultural communication specific to the aviation industry.",
  },
  {
    question: "How do you handle baggage claims and tracking?",
    answer:
      "Our agents use WorldTracer and airline-specific baggage systems to trace delayed bags, coordinate delivery logistics, process damage and loss claims, and provide proactive status updates to passengers. We aim to resolve most delayed baggage cases within 24 hours of the initial report.",
  },
];

const relatedServices = [
  {
    title: "Inbound Call Center",
    desc: "Professional inbound call handling with intelligent routing and custom scripts for airline passenger support.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Omnichannel Solutions",
    desc: "Seamless passenger support across phone, chat, email, social media, and SMS for a unified travel experience.",
    href: "/services/omnichannel-contact-center-solutions",
  },
  {
    title: "Customer Experience Management",
    desc: "Strategic CX programs that improve passenger satisfaction, loyalty, and lifetime value.",
    href: "/solutions/customer-experience-management",
  },
];

export default function AirlinesPage() {
  return (
    <ServicePageTemplate
      badge="Airlines Call Center Services"
      title="Professional Call Center Solutions for the Airlines Industry"
      titleHighlight="Airlines Industry"
      subtitle="From reservations and rebooking to crisis management and loyalty programs, we help airlines deliver exceptional passenger experiences at every touchpoint."
      description="Our airlines call center combines deep aviation industry knowledge with advanced technology to support carriers of all sizes. Whether you need reservation management, irregular operations support, baggage tracking, or dedicated frequent flyer services, our trained agents represent your brand with the expertise your passengers expect."
      features={features}
      benefits={benefits}
      image="/images/cc-support-team.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
