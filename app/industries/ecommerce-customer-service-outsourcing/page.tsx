import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "E-Commerce Call Center Services | Order Support & Live Chat | Contact Center USA",
  description:
    "E-commerce call center services for order support, returns processing, live chat, and peak season scalability. Boost customer satisfaction and reduce cart abandonment.",
  alternates: { canonical: "/industries/ecommerce-customer-service-outsourcing" },
};

const features = [
  {
    title: "Order Support & Tracking",
    desc: "End-to-end order management including placement assistance, real-time tracking updates, and proactive communication about shipping delays to keep customers informed and satisfied.",
  },
  {
    title: "Returns & Exchange Processing",
    desc: "Streamlined returns and exchanges with clear RMA workflows, instant label generation, and empathetic agents who turn return experiences into retention opportunities.",
  },
  {
    title: "Peak Season Scalability",
    desc: "Rapidly scale your support team during Black Friday, Cyber Monday, and holiday seasons with pre-trained agents ready to handle 3-5x normal call volumes without sacrificing quality.",
  },
  {
    title: "Live Chat & Multichannel Support",
    desc: "Real-time live chat, email, and social media support that meets shoppers on their preferred channels, reducing cart abandonment and boosting conversion rates.",
  },
  {
    title: "Product Knowledge & Upselling",
    desc: "Agents trained on your catalog who can answer detailed product questions, suggest complementary items, and identify cross-sell opportunities to increase average order value.",
  },
  {
    title: "Chargeback & Dispute Resolution",
    desc: "Expert handling of payment disputes and chargebacks with proper documentation, evidence gathering, and timely responses to protect your revenue and merchant reputation.",
  },
];

const benefits = [
  "24/7 omnichannel support",
  "Peak season surge capacity",
  "Cart abandonment recovery",
  "Platform integrations (Shopify, WooCommerce)",
  "Real-time order tracking assistance",
  "Dedicated account management",
];

const stats = [
  { value: 35, suffix: "%", label: "Reduction in Cart Abandonment" },
  { value: 98, suffix: "%", label: "Customer Satisfaction Score" },
  { value: 5, suffix: "x", label: "Peak Season Scalability" },
  { value: 45, suffix: "s", label: "Average Response Time" },
];

const testimonial = {
  quote:
    "During our biggest Black Friday ever, Contact Center USA scaled our support team seamlessly. Customer satisfaction actually went up during our highest-volume period. They are an essential partner.",
  name: "J.P.",
  title: "VP of Customer Experience",
  company: "A Top Ecommerce Retailer",
  initials: "JP",
};

const faqs = [
  {
    question: "Can you integrate with our e-commerce platform?",
    answer:
      "Yes, we integrate with all major e-commerce platforms including Shopify, WooCommerce, Magento, BigCommerce, and custom solutions. Our team sets up direct API connections so agents have real-time access to orders, inventory, and customer data.",
  },
  {
    question: "How do you handle peak season demand spikes?",
    answer:
      "We maintain a bench of pre-trained e-commerce agents who are ready to deploy during high-volume periods. We begin ramping up 4-6 weeks before major shopping events, ensuring agents are fully trained on your products and policies before the rush begins.",
  },
  {
    question: "Do you offer live chat support for our website?",
    answer:
      "Absolutely. We provide live chat agents who engage shoppers in real time, answer product questions, assist with checkout issues, and proactively reach out to visitors showing exit intent — all proven to reduce cart abandonment and increase conversions.",
  },
  {
    question: "How do your agents learn about our products?",
    answer:
      "We develop comprehensive product knowledge bases from your catalog, run hands-on training sessions, and use AI-assisted tools that give agents instant access to product specs, availability, and comparison data during live customer interactions.",
  },
  {
    question: "What metrics do you track for e-commerce support?",
    answer:
      "We track CSAT, first-contact resolution, average handle time, cart recovery rate, upsell conversion, and NPS. You receive real-time dashboards and weekly performance reports with actionable insights to continuously improve the customer experience.",
  },
];

const relatedServices = [
  {
    title: "Live Chat Support",
    desc: "Real-time chat agents who convert browsers into buyers on your website.",
    href: "/services/live-chat",
  },
  {
    title: "Outbound Sales",
    desc: "Proactive outreach for cart recovery, upselling, and customer win-back campaigns.",
    href: "/services/outbound",
  },
  {
    title: "24/7 Customer Support",
    desc: "Round-the-clock support so your customers get help whenever they shop.",
    href: "/services/24-7-support",
  },
];

export default function EcommercePage() {
  return (
    <ServicePageTemplate
      badge="E-Commerce Call Center Services"
      title="Call Center Solutions Built for E-Commerce Success"
      titleHighlight="E-Commerce Success"
      subtitle="Scalable customer support that reduces cart abandonment, streamlines returns, and delivers the fast, friendly service online shoppers expect."
      description="E-commerce never sleeps, and neither do we. Our agents are trained on your products, integrated with your platform, and ready to handle everything from order inquiries to complex returns. Whether it is a quiet Tuesday or Black Friday chaos, we deliver consistent, brand-aligned support that turns one-time buyers into loyal customers."
      features={features}
      benefits={benefits}
      image="/images/hd-agents-pair.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
