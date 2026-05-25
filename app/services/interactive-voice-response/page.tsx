import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Interactive Voice Response | Contact Center USA",
  description:
    "US-based interactive voice response with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "ivr services",
    "interactive voice response outsourcing",
    "ivr bpo usa",
    "ivr outsourcing companies",
    "custom ivr development",
    "speech recognition ivr",
    "ivr self-service",
    "ivr call center provider",
  ],
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
  name: "A.F.",
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

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best IVR BPO in USA",
    heading: "The IVR services partner that actually contains calls, cuts cost, and lifts CSAT — all at the same time.",
    accent: "contains calls",
    body: [
      "Contact Center USA is one of the best IVR services providers in the USA — a 100% US-based IVR BPO delivering custom interactive voice response outsourcing for banks, healthcare systems, utilities, telecom carriers, and Fortune 1000 enterprises across every US time zone.",
      "If you are evaluating IVR outsourcing companies or looking for the best IVR BPO USA option for a new deployment or a rebuild of a legacy phone tree, our engineering team designs containment-first IVR flows, tunes speech recognition grammars, and instruments analytics that prove ROI inside 90 days.",
    ],
    stats: [
      { stat: "40%+", label: "Reduction in live agent call volume after IVR redesign" },
      { stat: "92%", label: "Self-service completion rate on optimized IVR flows" },
      { stat: "4-6 wks", label: "From signed SOW to production IVR go-live" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House IVR vs. Outsourced Interactive Voice Response BPO",
    intro:
      "Most enterprises hit the same wall — their legacy IVR annoys customers, their ACD vendor charges for every change, and their in-house team cannot tune grammars or A/B test prompts. Here is how an IVR BPO compares.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Containment Rate",
        left: "Typical legacy IVR contains 10-20% of calls — most escalate to agents.",
        right: "Optimized IVR flows contain 40-60% of call volume without agent intervention.",
        leftYes: false,
      },
      {
        label: "Speech Recognition Tuning",
        left: "Grammars set once at launch and rarely revisited — accuracy decays over time.",
        right: "Weekly grammar tuning, confidence-score analysis, and utterance review to keep ASR sharp.",
        leftYes: false,
      },
      {
        label: "Change Velocity",
        left: "IVR changes queued with telecom vendor — 4-8 week lead times, per-change fees.",
        right: "In-flow prompt, menu, and routing changes deployed in days, not weeks.",
        leftYes: false,
      },
      {
        label: "Analytics & Containment Reporting",
        left: "Flat call detail records — no visibility into drop-off points or caller paths.",
        right: "Full IVR analytics: drop-off heatmaps, intent capture, completion by segment.",
        leftYes: false,
      },
      {
        label: "PCI-Compliant Self-Service Payments",
        left: "Requires additional vendor, integration, and PCI scope remediation project.",
        right: "Built-in PCI DSS Level 1 self-service payment capture with tokenization.",
        leftYes: false,
      },
      {
        label: "Scalability for Seasonal Spikes",
        left: "Trunk capacity and menu performance degrade under spike volume.",
        right: "Cloud-native IVR auto-scales for open enrollment, tax season, and storm events.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Interactive Voice Response Outsourcing Process",
    intro:
      "Every IVR project we deliver — new build, replatform, or optimization — follows the same five-stage workflow engineered to contain more calls without hurting CSAT.",
    steps: [
      {
        title: "Discovery & Call Reason Analysis",
        body: "Mine 90 days of call data, identify top intents, model caller journeys, and quantify containment opportunity.",
      },
      {
        title: "IVR Flow & Grammar Design",
        body: "Design conversational menus, write prompt scripts, define grammars, and map DTMF and speech paths.",
      },
      {
        title: "Integration & Build",
        body: "Integrate CRM, billing, and payment APIs. Build in our cloud IVR platform with full SIP and WebRTC support.",
      },
      {
        title: "UAT & Controlled Rollout",
        body: "End-to-end UAT, staged traffic cutover, and parallel production for blast-radius control.",
      },
      {
        title: "Continuous Optimization",
        body: "Weekly grammar tuning, A/B prompt testing, and containment tracking against baseline KPIs.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with IVR Services and IVR Outsourcing",
    intro:
      "Each vertical carries distinct regulatory, integration, and containment requirements. Our IVR BPO team pre-builds compliance-ready flow templates for the industries we serve most.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Payers",
        body: "Appointment self-service, Rx refills, member eligibility checks, and HIPAA-compliant caller authentication.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Banking & Financial Services",
        body: "Balance inquiry, self-service payments, fraud alerts, and card activation with PCI Level 1 tokenization.",
      },
      {
        icon: "zap",
        stat: "SOC 2",
        title: "Utilities & Energy",
        body: "Outage reporting, pay-by-phone, move-in and move-out, and storm event auto-scaling IVR.",
      },
      {
        icon: "signal",
        stat: "TCPA",
        title: "Telecom & Subscription",
        body: "Plan changes, bill dispute capture, activation, and churn-save IVR offers with deflection to agents.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA Among IVR Outsourcing Companies",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most IVR vendors fall into two camps: telecom carriers who charge for every prompt change, or offshore IVR BPOs whose English and Spanish speech recognition accuracy collapses on real US accents. Neither is built to continuously optimize containment.",
      "Contact Center USA is a US-based IVR services provider with a dedicated conversation design team, in-house speech scientists, and a cloud IVR platform we control end-to-end — so every grammar, prompt, and flow improvement ships in days, not months. We measure ourselves on containment and CSAT, not minutes of use.",
    ],
    bullets: [
      "US-based conversation designers and speech science team",
      "PCI DSS Level 1, HIPAA, and SOC 2 Type II certified IVR platform",
      "Real-time containment and intent dashboards with call recording",
      "Native integrations for Salesforce, ServiceNow, Epic, Guidewire, and custom APIs",
      "4-6 week standard go-live with zero production downtime during cutover",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to upgrade to IVR services that actually deflect calls?",
    accent: "actually deflect calls",
    body: "If your current IVR is bleeding calls to agents, failing on speech recognition, or costing you a fortune in change fees, talk to our IVR BPO USA team. We will audit your current flow, identify the top three containment opportunities, and scope a rebuild — free of charge.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
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
      title="IVR Services & Interactive Voice Response Outsourcing"
      titleHighlight="Interactive Voice Response Outsourcing"
      subtitle="One of the leading IVR outsourcing companies in the USA — our IVR BPO delivers custom interactive voice response services, speech recognition, and self-service automation that cut costs while lifting CSAT."
      description="A well-designed IVR system is your most powerful tool for balancing cost efficiency with customer satisfaction. Our custom IVR services go far beyond basic phone trees — we build intelligent interactive voice response outsourcing programs with natural language understanding, secure payment processing, and seamless escalation to live agents when needed. The result: faster resolutions for your customers and dramatically lower costs for your business."
      features={features}
      benefits={benefits}
      image="/images/cc-team-desk.jpg"
      stats={stats}
      testimonial={testimonial}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
