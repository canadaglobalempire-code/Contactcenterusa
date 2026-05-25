import type { Metadata } from "next";
import { AIAutomationContent } from "./Content";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "AI Call Center Automation | Contact Center USA",
  description:
    "US-based ai call center automation with trained agents, flexible coverage, reporting, and fast onboarding. Request a quote from Contact Center USA.",
  keywords: [
    "ai call center automation",
    "ai contact center bpo",
    "call center ai agents usa",
    "ai call center software",
    "ai contact center solutions",
    "conversational ai contact center",
    "ai voice bots for call centers",
    "ai chatbot call center services",
  ],
  alternates: { canonical: "/services/ai-call-center-automation" },
};

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best AI Call Center Automation in USA",
    heading: "The AI contact center BPO enterprise CX leaders trust to automate without breaking the experience.",
    accent: "without breaking the experience",
    body: [
      "Contact Center USA is one of the best AI call center automation companies in the USA — a 100% US-based AI contact center BPO deploying call center AI agents USA-wide across voice, chat, email, and SMS, fully integrated with your CRM, WFM, and QA systems.",
      "For CX, IT, and operations leaders searching for the best AI call center automation in USA, we design, deploy, and operate AI contact center solutions that deflect routine volume, assist live agents in real time, and keep escalation paths clean and human when it matters.",
    ],
    stats: [
      { stat: "-60%", label: "Reduction in cost-to-serve on queues with AI call center automation live" },
      { stat: "24/7", label: "Always-on AI contact center coverage — no overnight queue, no hold music" },
      { stat: "+18 pt", label: "CSAT lift when AI and call center AI agents are blended with live agents" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "All-Human Call Center vs. AI Contact Center BPO",
    intro:
      "AI is not a replacement for great agents — it is a layer that deflects what can be deflected and arms the rest. Here's how a traditional all-human operation compares to a Contact Center USA AI contact center BPO deployment.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "After-Hours & Weekend Coverage",
        left: "Offline, voicemail, or expensive overnight shift premiums.",
        right: "24/7 call center AI agents USA-wide — voice and chat bots with live escalation on demand.",
        leftYes: false,
      },
      {
        label: "Handling Routine Queries",
        left: "Live agents burning time on password resets, order status, balance checks.",
        right: "AI call center automation deflects 40–70% of routine contacts before they reach a human.",
        leftYes: false,
      },
      {
        label: "Agent Assist in Real Time",
        left: "Agents search knowledge bases mid-call — AHT creeps, CSAT drops.",
        right: "AI agent assist surfaces answers, scripts, and next-best-action in real time during the call.",
        leftYes: false,
      },
      {
        label: "QA Coverage",
        left: "QA samples 1–3% of calls — 97% of interactions never get scored.",
        right: "AI call center automation scores 100% of calls and chats against your QA rubric automatically.",
        leftYes: false,
      },
      {
        label: "Cost per Contact",
        left: "Every contact costs the same — no leverage as volume grows.",
        right: "Blended cost collapses as the AI contact center BPO absorbs more routine volume.",
        leftYes: false,
      },
      {
        label: "Time to Scale Up",
        left: "Hiring and ramping new agents takes weeks.",
        right: "Call center AI agents scale to 10x volume instantly — humans scale alongside as needed.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our AI Call Center Automation Deployment",
    intro:
      "Every AI contact center BPO engagement follows the same five-stage deployment — designed to get AI call center automation into production without breaking the experience your customers expect.",
    steps: [
      {
        title: "Journey & Intent Mapping",
        body: "We map top contact drivers, high-volume intents, and deflection opportunities worth automating first.",
      },
      {
        title: "AI Architecture & Design",
        body: "We architect voice bots, chatbots, agent assist, and routing using the AI stack that best fits your environment.",
      },
      {
        title: "Build & CRM Integration",
        body: "Call center AI agents trained on your knowledge base, wired into CRM, WFM, telephony, and escalation paths.",
      },
      {
        title: "Human-in-the-Loop Launch",
        body: "Go-live with human escalation, live monitoring, and structured guardrails across every AI contact center queue.",
      },
      {
        title: "Tune, Measure, Expand",
        body: "Ongoing model tuning, containment reporting, and roadmap planning to expand AI call center automation safely.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Sectors We Power with AI Contact Center BPO",
    intro:
      "AI call center automation is not one-size-fits-all. Our call center AI agents are trained for the regulatory, language, and workflow needs of each industry.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Health Plans",
        body: "HIPAA-compliant AI contact center BPO for appointment, eligibility, benefits, and claims self-service.",
      },
      {
        icon: "landmark",
        stat: "PCI DSS",
        title: "Banking, FinTech & Payments",
        body: "Secure voice bots and chatbots handling balance, transfer, fraud, and payments — with human handoff on demand.",
      },
      {
        icon: "shopping-bag",
        stat: "CCPA",
        title: "Retail, E-Commerce & Subscription",
        body: "AI call center automation for order, returns, loyalty, and subscription management at consumer scale.",
      },
      {
        icon: "signal",
        stat: "CPNI",
        title: "Telecom, ISP & SaaS",
        body: "Tier 1 deflection and agent assist across telecom, ISP, and SaaS — reducing AHT while protecting NPS.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Enterprises Pick Us as Their AI Call Center Automation Partner",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Most AI contact center vendors sell bots and walk away — you end up with a chatbot that frustrates customers and a voice IVR that still dumps callers back into a queue. Worse, offshore AI contact center BPO shops can't match the US English, accents, and regulatory nuance your customers expect.",
      "Contact Center USA is different: a US-based AI call center automation operation that designs, deploys, trains, and operates the AI — alongside the live agents who handle the edge cases. One partner, one accountable team, one CX outcome.",
    ],
    bullets: [
      "US-based AI contact center BPO: deployment, training, tuning, live ops",
      "Call center AI agents USA-wide across voice, chat, email, and SMS",
      "Real-time agent assist, auto-summarization, and 100% auto-QA",
      "Integrations with Genesys, Five9, NICE, Talkdesk, Salesforce, Zendesk",
      "Governance, guardrails, and human-in-the-loop reviews on every AI workflow",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to deploy AI call center automation without breaking your customer experience?",
    accent: "AI call center automation",
    body: "Whether you're piloting call center AI agents for the first time or replacing an AI contact center vendor that never lived up to the pitch, request a free consultation. We'll map deflection opportunities, model expected cost-to-serve reduction, and design an AI call center automation roadmap that fits your CX bar.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function AIAutomationPage() {
  return (
    <>
      <AIAutomationContent />
      <SEOContentSection sections={seoContent} />
    </>
  );
}
