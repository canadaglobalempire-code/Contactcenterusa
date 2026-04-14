import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Travel & Hospitality Call Center Services | Reservations & Concierge | Contact Center USA",
  description:
    "Travel and hospitality call center services for reservations, cancellations, concierge support, and loyalty programs. Deliver five-star guest experiences at scale.",
};

const features = [
  {
    title: "Reservation Management",
    desc: "Full-service booking support for hotels, flights, car rentals, and vacation packages with real-time availability checks, upsell opportunities, and instant confirmation across all major GDS platforms.",
  },
  {
    title: "Cancellation & Modification Handling",
    desc: "Empathetic agents who process cancellations and changes efficiently while offering alternatives, rebooking options, and travel credits to retain revenue and maintain guest relationships.",
  },
  {
    title: "Concierge & Guest Services",
    desc: "White-glove concierge support that handles restaurant reservations, activity bookings, transportation arrangements, and special requests to create memorable guest experiences.",
  },
  {
    title: "Loyalty Program Management",
    desc: "Dedicated support for loyalty and rewards programs including points inquiries, tier status, redemption assistance, and member engagement that drives repeat bookings.",
  },
  {
    title: "Group & Event Coordination",
    desc: "Specialized support for group bookings, corporate travel, wedding blocks, and event coordination with dedicated agents who manage complex multi-party reservations.",
  },
  {
    title: "Crisis & Travel Disruption Support",
    desc: "Rapid response teams for weather events, flight cancellations, and travel disruptions that proactively rebook guests, communicate updates, and minimize the impact of unexpected changes.",
  },
];

const benefits = [
  "GDS integration (Sabre, Amadeus)",
  "Multilingual agent support",
  "24/7 reservation assistance",
  "Loyalty program management",
  "White-glove concierge service",
  "Crisis response & rebooking",
];

const stats = [
  { value: 97, suffix: "%", label: "Guest Satisfaction Score" },
  { value: 25, suffix: "%", label: "Increase in Direct Bookings" },
  { value: 1, suffix: "M+", label: "Reservations Managed" },
  { value: 15, suffix: "+", label: "Languages Supported" },
];

const testimonial = {
  quote:
    "Contact Center USA delivers the five-star experience our guests expect. Their concierge agents are as polished as our front desk staff, and they have increased our direct booking rate by 25%.",
  name: "Elena Vasquez",
  title: "VP of Guest Experience",
  company: "Azure Resort Collection",
  initials: "EV",
};

const faqs = [
  {
    question: "Can your agents make reservations in our booking system?",
    answer:
      "Yes, our agents are trained on all major GDS platforms including Sabre, Amadeus, and Travelport, as well as property management systems like Opera and Cloudbeds. We book, modify, and cancel reservations directly in your systems in real time.",
  },
  {
    question: "Do you offer multilingual support for international travelers?",
    answer:
      "We provide native-speaking agents in English, Spanish, French, Portuguese, and Mandarin, with real-time interpreter services available in over 200 languages. This ensures every traveler receives assistance in their preferred language.",
  },
  {
    question: "How do you handle travel disruptions and emergencies?",
    answer:
      "We activate dedicated crisis teams that proactively reach out to affected travelers, rebook accommodations and transport, communicate real-time updates, and coordinate with airlines and hotels to minimize disruption and protect your brand reputation.",
  },
  {
    question: "Can you manage our loyalty and rewards program?",
    answer:
      "Absolutely. Our agents handle points balance inquiries, redemption processing, tier status questions, and member enrollment. We also run proactive engagement campaigns to drive loyalty program participation and repeat bookings.",
  },
  {
    question: "What is your approach to upselling travel packages?",
    answer:
      "Our agents are trained in consultative selling — recommending room upgrades, travel insurance, activity add-ons, and premium experiences based on the traveler's preferences. This approach typically increases average booking value by 15-20%.",
  },
];

const relatedServices = [
  {
    title: "Reservation Services",
    desc: "Professional reservation agents who book, modify, and manage travel arrangements.",
    href: "/services/reservations",
  },
  {
    title: "Multilingual Support",
    desc: "Native-speaking agents serving international travelers in their preferred language.",
    href: "/services/bilingual",
  },
  {
    title: "24/7 Customer Support",
    desc: "Round-the-clock support for travelers across every time zone.",
    href: "/services/24-7-support",
  },
];

export default function TravelPage() {
  return (
    <ServicePageTemplate
      badge="Travel & Hospitality Call Center"
      title="Call Center Solutions for Travel & Hospitality"
      titleHighlight="Travel & Hospitality"
      subtitle="From reservations and concierge to crisis response and loyalty programs, deliver five-star guest experiences at every touchpoint with our travel-specialized agents."
      description="Travel is personal, and your support should be too. Our agents are trained in hospitality standards, fluent in GDS platforms, and equipped to handle everything from a simple booking change to a full-scale travel disruption. We represent your brand with the warmth and professionalism that turns first-time guests into lifelong loyal travelers."
      features={features}
      benefits={benefits}
      image="/images/hd-office-team.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
