import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Interactive Voice Response (IVR) Solutions | Self-Service & Automation | Contact Center USA",
  description:
    "Interactive voice response solutions including custom IVR design, automated menus, self-service portals, speech recognition, and intelligent call routing. Reduce costs and improve customer satisfaction.",
  alternates: { canonical: "/services/interactive-voice-response" },
};

const features = [
  {
    title: "Custom IVR Design & Development",
    desc: "Purpose-built IVR systems designed around your specific call flows, customer journeys, and business rules — not generic templates. We map every path to minimize caller effort and maximize containment rates.",
  },
  {
    title: "Speech Recognition & Natural Language",
    desc: "Advanced speech recognition and natural language processing that lets callers speak naturally instead of pressing buttons, reducing frustration and improving routing accuracy for faster resolution times.",
  },
  {
    title: "Self-Service Payment Processing",
    desc: "Secure, PCI-compliant self-service payment portals that handle bill payments, balance inquiries, and payment plan management 24/7 — reducing agent workload while giving customers instant access.",
  },
  {
    title: "Intelligent Call Routing",
    desc: "Skills-based routing that analyzes caller intent, account history, and real-time agent availability to connect each customer with the best-qualified agent, reducing transfers and improving first-call resolution.",
  },
  {
    title: "Visual IVR & Mobile Integration",
    desc: "Modern visual IVR experiences that display interactive menus on smartphones, allowing customers to navigate options by touch instead of voice — dramatically improving completion rates for complex transactions.",
  },
  {
    title: "IVR Analytics & Optimization",
    desc: "Comprehensive analytics that track containment rates, drop-off points, completion rates, and caller paths. We continuously A/B test menu options and prompts to optimize performance and reduce caller abandonment.",
  },
];

const benefits = [
  "24/7 automated self-service availability",
  "Reduced average handle time",
  "PCI-compliant payment processing",
  "Multi-language support capabilities",
  "Real-time analytics & reporting",
  "Seamless live agent escalation",
];

const stats = [
  { value: 40, suffix: "%", label: "Reduction in Call Volume to Agents" },
  { value: 92, suffix: "%", label: "Self-Service Completion Rate" },
  { value: 24, suffix: "/7", label: "Automated Availability" },
  { value: 55, suffix: "%", label: "Lower Cost Per Interaction" },
];

const testimonial = {
  quote:
    "The IVR system Contact Center USA designed for us handles 40% of our call volume without ever reaching an agent. Customer satisfaction actually went up because people get answers instantly instead of waiting on hold.",
  name: "Amanda Foster",
  title: "Director of Operations",
  company: "A Major Regional Utility Provider",
  initials: "AF",
};

const faqs = [
  {
    question: "How do you design an IVR that customers actually want to use?",
    answer:
      "We start by analyzing your call data to understand why customers are calling, then design the shortest possible paths to resolution. We use plain language, limit menu options to 4-5 per level, offer easy live agent access, and test extensively with real callers before launch. Post-launch, we continuously optimize based on analytics and customer feedback.",
  },
  {
    question: "Can your IVR integrate with our existing systems and databases?",
    answer:
      "Yes. Our IVR solutions integrate with CRM, billing, ERP, and custom databases via APIs and middleware. This enables real-time account lookups, personalized greetings, dynamic routing based on customer data, and self-service transactions that update your systems automatically.",
  },
  {
    question: "What happens when a caller needs to speak to a live agent?",
    answer:
      "Our IVR passes full context to the receiving agent — including the caller's identity, account details, menu selections, and reason for calling. This eliminates the need for customers to repeat information and dramatically reduces handle time. Agents see everything on screen before they even say hello.",
  },
  {
    question: "Do you support multiple languages in the IVR?",
    answer:
      "Absolutely. We build multi-language IVR systems with professional voice recordings and speech recognition models for English, Spanish, and other languages as needed. Callers can select their preferred language at the start, and the entire experience — including self-service transactions — operates in that language.",
  },
  {
    question: "How long does it take to build and deploy a custom IVR?",
    answer:
      "A standard IVR deployment takes 4-6 weeks from discovery to launch. Complex implementations with extensive integrations, natural language processing, or visual IVR components may take 8-12 weeks. We follow an agile process with regular demos so you see progress throughout development.",
  },
];

const relatedServices = [
  {
    title: "AI Call Center Automation",
    desc: "Next-generation AI-powered automation that enhances IVR with conversational AI and intelligent virtual agents.",
    href: "/services/ai-call-center-automation",
  },
  {
    title: "Inbound Call Center",
    desc: "Live agent support for calls that escalate from self-service, with full context transfer and priority routing.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Contact Center Software Solutions",
    desc: "Enterprise contact center platforms that power IVR, routing, analytics, and omnichannel capabilities.",
    href: "/services/contact-center-software-solutions",
  },
];

export default function InteractiveVoiceResponsePage() {
  return (
    <ServicePageTemplate
      badge="Interactive Voice Response"
      title="Intelligent IVR Systems That Resolve Calls Before They Reach an Agent"
      titleHighlight="Resolve Calls"
      subtitle="Custom-designed IVR solutions with speech recognition, self-service automation, and intelligent routing that reduce costs and improve customer satisfaction simultaneously."
      description="A well-designed IVR system is your most powerful tool for balancing cost efficiency with customer satisfaction. Our custom IVR solutions go far beyond basic phone trees — we build intelligent self-service experiences with natural language understanding, secure payment processing, and seamless escalation to live agents when needed. The result: faster resolutions for your customers and dramatically lower costs for your business."
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
