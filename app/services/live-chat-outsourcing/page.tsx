import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";

export const metadata: Metadata = {
  title: "Live Chat Outsourcing | Web Chat & Chatbot Support | Contact Center USA",
  description:
    "Live chat outsourcing services including web chat support, AI chatbot integration, proactive chat engagement, and omnichannel messaging. Convert website visitors and resolve issues in real time.",
  alternates: { canonical: "/services/live-chat-outsourcing" },
};

const features = [
  {
    title: "Managed Live Chat Support",
    desc: "Professional chat agents available 24/7 who engage website visitors in real time, answer product questions, resolve support issues, and guide shoppers through the purchase process with fast, accurate responses.",
  },
  {
    title: "AI Chatbot Design & Integration",
    desc: "Custom AI chatbots that handle routine inquiries, collect lead information, and provide instant answers around the clock — seamlessly escalating to live agents when conversations require a human touch.",
  },
  {
    title: "Proactive Chat Engagement",
    desc: "Behavior-triggered chat invitations that engage visitors at critical moments — like lingering on pricing pages, showing exit intent, or returning for repeat visits — turning passive browsers into active conversations.",
  },
  {
    title: "E-Commerce Chat Sales",
    desc: "Sales-trained chat agents who specialize in online retail, providing product recommendations, comparison assistance, coupon application help, and checkout support that reduces cart abandonment and increases conversions.",
  },
  {
    title: "Social Messaging & SMS Support",
    desc: "Unified messaging support across Facebook Messenger, Instagram DM, WhatsApp, and SMS — meeting your customers on the platforms they already use with consistent service quality and response times.",
  },
  {
    title: "Chat Analytics & Quality Monitoring",
    desc: "Detailed analytics dashboards tracking chat volume, response times, resolution rates, customer satisfaction, and conversion metrics. Every transcript is reviewed for quality, and agents receive ongoing coaching to improve performance.",
  },
];

const benefits = [
  "24/7 live chat availability",
  "Under 30-second response times",
  "AI chatbot + human hybrid model",
  "Multi-platform messaging support",
  "Real-time visitor monitoring",
  "Seamless CRM integration",
];

const stats = [
  { value: 45, suffix: "%", label: "Increase in Chat Conversions" },
  { value: 18, suffix: "sec", label: "Average First Response Time" },
  { value: 3, suffix: "x", label: "More Concurrent Interactions" },
  { value: 91, suffix: "%", label: "Chat Satisfaction Rating" },
];

const testimonial = {
  quote:
    "Adding 24/7 managed live chat through Contact Center USA increased our website conversions by 45%. Their agents handle three chats simultaneously without any drop in quality. It's like having a sales floor on our website.",
  name: "Kevin Tran",
  title: "Head of Digital Experience",
  company: "A Leading Online Insurance Marketplace",
  initials: "KT",
};

const faqs = [
  {
    question: "How do live chat agents handle multiple conversations at once?",
    answer:
      "Our agents are specifically trained in concurrent chat management and typically handle 2-4 conversations simultaneously without sacrificing quality. They use pre-approved response templates for common questions, typing shortcuts, and knowledge base integrations that allow them to deliver fast, accurate responses across every active chat.",
  },
  {
    question: "Can you integrate chat with our existing website and CRM?",
    answer:
      "Yes. We integrate with all major chat platforms including Zendesk, Intercom, LiveChat, Drift, and custom solutions. Chat transcripts sync automatically with your CRM, visitor activity feeds into your analytics, and lead data routes directly to your sales team. Our technical team handles the full integration.",
  },
  {
    question: "What is the difference between your chatbot and live agent services?",
    answer:
      "Our AI chatbots handle routine, high-volume questions instantly — account status, store hours, FAQs — available 24/7 with zero wait. Live agents handle complex issues, sales conversations, and sensitive situations requiring empathy and judgment. Most clients use a hybrid model where the chatbot handles first contact and escalates to agents when needed.",
  },
  {
    question: "Do you support proactive chat — reaching out to visitors first?",
    answer:
      "Absolutely. We configure behavior-based triggers that automatically invite visitors to chat based on page views, time on site, cart value, exit intent, and other signals. Proactive chat consistently outperforms passive chat widgets in both conversion rates and customer satisfaction scores.",
  },
  {
    question: "What hours are your live chat agents available?",
    answer:
      "We offer 24/7/365 live chat coverage. You can also choose specific coverage windows based on your traffic patterns and budget. Many clients start with business hours plus evenings, then expand to full 24/7 coverage as they see the ROI from after-hours conversions and support interactions.",
  },
];

const relatedServices = [
  {
    title: "Omnichannel Contact Center",
    desc: "Unified customer support across every channel — phone, chat, email, social, and SMS — from a single platform.",
    href: "/services/omnichannel-contact-center-solutions",
  },
  {
    title: "Social Media Customer Support",
    desc: "Professional social media monitoring and response management across all major platforms.",
    href: "/solutions/social-media-customer-support",
  },
  {
    title: "AI Call Center Automation",
    desc: "AI-powered automation including chatbots, virtual agents, and intelligent routing for digital channels.",
    href: "/services/ai-call-center-automation",
  },
];

export default function LiveChatOutsourcingPage() {
  return (
    <ServicePageTemplate
      badge="Live Chat Outsourcing"
      title="Live Chat Support That Converts Visitors and Resolves Issues in Real Time"
      titleHighlight="Real Time"
      subtitle="From AI chatbots to expert human agents, our managed chat services deliver instant engagement across your website and messaging platforms."
      description="Today's customers expect instant answers — and live chat is the fastest way to deliver them. Our outsourced chat teams combine AI-powered chatbots for routine inquiries with skilled human agents for complex conversations, creating a seamless experience that boosts website conversions, reduces support costs, and keeps customers engaged. Whether it's sales assistance, technical support, or customer care, we're there the moment your visitors need help."
      features={features}
      benefits={benefits}
      image="/images/cc-woman-headset.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
    />
  );
}
