import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Cable & Media Call Center Services | Entertainment Support | Contact Center USA",
  description:
    "Cable and media call center services including billing support, technical troubleshooting, service activation, subscriber retention, and upgrade campaigns. Trusted by cable and media companies nationwide.",
  alternates: { canonical: "/industries/cable-media-call-center" },
};

const features = [
  {
    title: "Billing & Account Support",
    desc: "Comprehensive billing inquiry handling including payment processing, plan explanations, promotional pricing, account adjustments, and dispute resolution to reduce churn and improve subscriber satisfaction.",
  },
  {
    title: "Technical Troubleshooting",
    desc: "Tiered technical support from basic connectivity issues to advanced equipment diagnostics. Our agents walk subscribers through step-by-step resolutions, reducing truck rolls and improving first-call resolution rates.",
  },
  {
    title: "Service Activation & Setup",
    desc: "Smooth onboarding experiences for new subscribers with guided self-installation support, equipment provisioning, channel package configuration, and welcome call programs that reduce early churn.",
  },
  {
    title: "Subscriber Retention Programs",
    desc: "Trained save-team agents who engage disconnecting subscribers with tailored offers, win-back campaigns, and loyalty incentives — proven to reduce voluntary churn by up to 30%.",
  },
  {
    title: "Upgrade & Upsell Campaigns",
    desc: "Revenue-generating outbound campaigns that identify upgrade opportunities, promote premium packages, bundle additional services, and maximize average revenue per subscriber.",
  },
  {
    title: "Outage Communication & Updates",
    desc: "Rapid-response outage management with proactive subscriber notification, real-time status updates, estimated restoration times, and credit processing for extended service interruptions.",
  },
];

const benefits = [
  "30% reduction in voluntary churn",
  "24/7 technical support coverage",
  "Reduced truck roll rates",
  "Bilingual English/Spanish agents",
  "Real-time CRM & billing integration",
  "Custom retention offer scripting",
];

const stats = [
  { value: 92, suffix: "%", label: "First-Call Resolution" },
  { value: 30, suffix: "%", label: "Churn Reduction" },
  { value: 3, suffix: "M+", label: "Subscriber Calls Handled" },
  { value: 45, suffix: "%", label: "Fewer Truck Rolls" },
];

const testimonial = {
  quote:
    "Since partnering with Contact Center USA, our subscriber churn dropped 30% and our NPS increased by 22 points. Their retention team is exceptional — they truly understand the cable and media landscape.",
  name: "Jennifer Walsh",
  title: "SVP Customer Experience",
  company: "A National Cable Provider",
  initials: "JW",
};

const faqs = [
  {
    question: "Can your agents handle technical troubleshooting for our specific equipment?",
    answer:
      "Yes. We train agents on your specific hardware, software, and network configurations. Whether it's cable boxes, modems, routers, streaming devices, or DVRs, our agents follow your custom troubleshooting trees and escalation protocols to resolve issues efficiently.",
  },
  {
    question: "How do you handle high call volumes during outages?",
    answer:
      "We maintain surge capacity protocols specifically for outage events. Our systems detect volume spikes and automatically activate overflow agents, deploy IVR-based status updates, and send proactive notifications to reduce inbound call volume while keeping subscribers informed.",
  },
  {
    question: "What retention strategies do your save-team agents use?",
    answer:
      "Our retention agents are trained in consultative save techniques. They identify the subscriber's reason for canceling, match it with approved retention offers, and present solutions that address the underlying concern — whether it's pricing, service quality, or competitive switching.",
  },
  {
    question: "Can you integrate with our billing and CRM systems?",
    answer:
      "Absolutely. We integrate with major cable and media billing platforms and CRM systems. Our agents work directly in your systems for real-time account access, ensuring accurate information and seamless customer interactions without data sync delays.",
  },
  {
    question: "How quickly can you scale for seasonal promotions or launches?",
    answer:
      "We can scale agent capacity by up to 200% within two weeks for planned events like new channel launches, seasonal promotions, or major content premieres. For ongoing seasonal patterns, we build predictive staffing models based on your historical data.",
  },
];

const relatedServices = [
  {
    title: "Technical Support",
    desc: "Multi-tier technical support teams trained on your specific equipment and platforms.",
    href: "/solutions/technical-support-outsourcing",
  },
  {
    title: "Customer Retention",
    desc: "Proven save-team strategies that reduce churn and increase subscriber lifetime value.",
    href: "/solutions/customer-service-outsourcing",
  },
  {
    title: "Outbound Campaigns",
    desc: "Targeted upgrade and win-back campaigns that drive revenue growth.",
    href: "/solutions/outbound-call-center-services",
  },
];

export default function CableMediaPage() {
  return (
    <ServicePageTemplate
      badge="Cable & Media Call Center Services"
      title="Expert Call Center Solutions for Cable & Media Companies"
      titleHighlight="Cable & Media Companies"
      subtitle="Reduce subscriber churn, improve technical resolution rates, and drive revenue with specialized call center services built for the cable and media industry."
      description="Our cable and media call center team understands the unique challenges of subscriber-based businesses — from managing outage surges and reducing truck rolls to retaining at-risk subscribers and driving upgrade revenue. We combine industry expertise with advanced technology to deliver experiences that keep your subscribers connected and satisfied."
      features={features}
      benefits={benefits}
      image="/images/cc-team-desk.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
