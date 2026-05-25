import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Live Chat Outsourcing | Contact Center USA",
  description:
    "US-based live chat outsourcing with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "live chat outsourcing",
    "live chat support bpo",
    "24/7 live chat services usa",
    "outsourced live chat agents",
    "ecommerce live chat bpo",
    "managed live chat services",
    "live chat answering service",
    "chat support outsourcing usa",
  ],
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
  name: "K.T.",
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Live Chat Outsourcing in USA",
    heading: "The live chat outsourcing partner that actually converts visitors into pipeline and customers.",
    accent: "converts visitors",
    body: [
      "Contact Center USA is one of the best live chat outsourcing providers in the USA — a 100% US-based live chat support BPO delivering 24/7 live chat services for SaaS, ecommerce, healthcare, and financial services brands that refuse to lose leads after business hours.",
      "Unlike generic chat answering services, our live chat agents are recruited, trained, and managed in the USA — fluent in your brand voice, your product catalog, and your sales playbook. Every conversation is an opportunity to deflect a ticket, close a sale, or capture a qualified lead.",
    ],
    stats: [
      { stat: "45%", label: "Average lift in chat-assisted conversion rate" },
      { stat: "<30 sec", label: "First response time on 24/7 live chat services" },
      { stat: "91%", label: "CSAT on post-chat survey across client base" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House Live Chat vs. Outsourced Live Chat Support BPO",
    intro:
      "Companies eventually confront the same question: keep live chat in-house and scale with your own FTEs, or outsource to a live chat support BPO with 24/7 coverage and conversion-trained agents. Here is the honest comparison.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Hours of Coverage",
        left: "Typically 9-5 local time — nights, weekends, and holidays go unanswered.",
        right: "True 24/7/365 live chat services with US-based coverage and overflow redundancy.",
        leftYes: false,
      },
      {
        label: "Cost per Chat",
        left: "Loaded cost of $12-18 per chat (salary + benefits + tools + idle time).",
        right: "$3-7 per chat on shared models — pay only for productive chat volume.",
        leftYes: false,
      },
      {
        label: "Concurrency",
        left: "1-2 concurrent chats per agent — limited by training and supervisor ratio.",
        right: "3-4 concurrent chats per agent with quality kept above 90% CSAT.",
        leftYes: false,
      },
      {
        label: "Conversion Training",
        left: "Support-trained agents not comfortable with sales, upsell, or cart-save.",
        right: "Sales-plus-support hybrid agents trained on pricing objections and cart recovery.",
        leftYes: false,
      },
      {
        label: "Proactive Chat Triggers",
        left: "Rarely implemented — requires marketing, eng, and support alignment.",
        right: "Pre-built behavior triggers for exit intent, high-value cart, and repeat visitor.",
        leftYes: false,
      },
      {
        label: "Ramp Time",
        left: "6-10 weeks to hire, train, and productively deploy each new chat agent.",
        right: "New chat queues launch in 10-15 business days with trained US-based agents.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our 24/7 Live Chat Services Onboarding Process",
    intro:
      "Every new live chat outsourcing engagement follows the same five-stage workflow — so your chat queue goes live fast without quality tradeoffs.",
    steps: [
      {
        title: "Discovery & Use Case Scoping",
        body: "Map chat use cases, volume forecasts, SLAs, and integration points with your existing stack.",
      },
      {
        title: "Agent Recruiting & Training",
        body: "US-based agent pods recruited, brand-voice trained, and certified on your product knowledge base.",
      },
      {
        title: "Platform Integration",
        body: "Connect your live chat platform, CRM, help desk, and ecommerce systems via SSO and API.",
      },
      {
        title: "Pilot & Tuning",
        body: "Run a 2-week pilot, review transcripts, tune canned responses, and adjust staffing curves.",
      },
      {
        title: "24/7 Go-Live & Optimization",
        body: "Full 24/7 live chat coverage with weekly QA, monthly business reviews, and conversion reporting.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Live Chat Outsourcing",
    intro:
      "Our live chat support BPO agents are pre-trained on industry-specific compliance, product terminology, and buying patterns across the verticals we serve most.",
    items: [
      {
        icon: "shopping-bag",
        stat: "PCI DSS",
        title: "Ecommerce & DTC Retail",
        body: "Cart recovery, size and fit advice, returns, loyalty program support, and upsell across Shopify and BigCommerce.",
      },
      {
        icon: "laptop",
        stat: "SOC 2",
        title: "SaaS & Technology",
        body: "Pre-sales demos, trial activation, tier-1 support, and in-app chat with routing into your help desk.",
      },
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Telehealth",
        body: "Appointment booking, insurance questions, and HIPAA-compliant patient communications on secured chat.",
      },
      {
        icon: "landmark",
        stat: "GLBA",
        title: "Financial Services",
        body: "Secure authenticated chat for banking, lending, and insurance with compliant disclosures and audit trails.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Live Chat Support BPO",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore live chat outsourcing providers routinely miss on nuance, idiom, and brand voice — customers can tell, and CSAT suffers. Generic US answering services rarely train for conversion or upsell. Neither option meets the bar for brands competing on digital experience.",
      "Contact Center USA is a US-based live chat support BPO built specifically for 24/7 live chat services in the USA: sales-trained agents, real-time supervisor coaching, and conversion reporting tied directly to your revenue funnel.",
    ],
    bullets: [
      "100% US-based chat agents — no offshore, no nearshore",
      "Sales-and-support hybrid training for higher conversion",
      "PCI DSS, HIPAA, SOC 2 Type II compliant chat handling",
      "Native integrations with Zendesk, Intercom, LiveChat, Drift, Gorgias",
      "Live chat queue go-live in 10-15 business days",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to stop losing chats after business hours?",
    accent: "stop losing chats",
    body: "If your website is answering visitors during business hours only, or your in-house chat team cannot keep up with concurrency, let us scope a 24/7 live chat services pilot. We will benchmark your current chat performance, project lift, and launch a US-based agent pod in under three weeks.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      title="Live Chat Outsourcing & 24/7 Live Chat Services"
      titleHighlight="24/7 Live Chat Services"
      subtitle="One of the top live chat outsourcing companies in the USA — our live chat support BPO delivers 24/7 live chat services with sales-trained US agents, AI chatbots, and proactive engagement."
      description="Today's customers expect instant answers — and live chat outsourcing is the fastest way to deliver them. Our live chat support BPO combines AI-powered chatbots for routine inquiries with skilled human agents for complex conversations, creating a seamless experience that boosts website conversions, reduces support costs, and keeps customers engaged. Whether it's sales assistance, technical support, or customer care, our 24/7 live chat services are there the moment your visitors need help."
      features={features}
      benefits={benefits}
      image="/images/cc-woman-headset.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
