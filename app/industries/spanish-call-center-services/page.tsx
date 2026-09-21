import type { Metadata } from "next";
import { ServicePageTemplate } from "@/components/shared/ServicePageTemplate";
import type { SEOPattern } from "@/components/shared/SEOContentSection";

export const metadata: Metadata = {
  title: "Spanish Call Center Services | Bilingual & Multilingual BPO",
  description:
    "US-based bilingual Spanish call center services and multilingual BPO support. Native-speaking agents for inbound, outbound, chat, and back office. Get a quote.",
  keywords: [
    "spanish call center services",
    "bilingual call center services",
    "multilingual bpo services",
    "spanish speaking call center",
    "bilingual customer service outsourcing",
    "spanish answering service",
    "multilingual customer support",
    "hispanic market call center",
    "spanish customer service outsourcing",
    "bilingual agents usa",
  ],
  alternates: { canonical: "/industries/spanish-call-center-services" },
};

const features = [
  {
    title: "Native Spanish-Speaking Agents",
    desc: "Agents who speak Spanish natively and professionally — not conversational second-language staff. Callers get idiomatic, regionally appropriate service instead of a halting translation of an English script.",
  },
  {
    title: "True Bilingual Routing",
    desc: "One number, both languages. Callers self-select or are routed by prior preference, and the agent handles the entire interaction in that language rather than transferring mid-call to a separate queue.",
  },
  {
    title: "No Third-Party Translation Lines",
    desc: "Interpretation services add delay, cost per minute, and a third voice to a call that is already difficult. Our agents handle the conversation directly, which shortens handle time and measurably improves satisfaction.",
  },
  {
    title: "Bilingual Written Channels",
    desc: "Chat, email, SMS, and social responses composed natively in Spanish, with the same brand voice and quality review applied to both languages instead of machine-translating English replies.",
  },
  {
    title: "Additional Language Coverage",
    desc: "Beyond Spanish, we staff for the languages your customer base actually uses — including Portuguese, French, Mandarin, Vietnamese, and Tagalog — scoped to real demand rather than a long list you never use.",
  },
  {
    title: "Culturally Fluent Service",
    desc: "Agents who understand naming conventions, formality expectations, and regional differences across Mexican, Caribbean, Central and South American Spanish — the details that decide whether service feels genuine or translated.",
  },
];

const benefits = [
  "Native Spanish-speaking US-based agents",
  "Single number with true bilingual routing",
  "No per-minute third-party interpretation fees",
  "Bilingual chat, email, SMS, and social coverage",
  "Additional languages scoped to real demand",
  "Culturally fluent, regionally aware service",
];

const stats = [
  { value: 100, suffix: "%", label: "Native Spanish Fluency Standard" },
  { value: 24, suffix: "/7", label: "Bilingual Coverage Available" },
  { value: 5, suffix: "+ channels", label: "Voice, Chat, Email, SMS, Social" },
  { value: 43, suffix: "M+", label: "US Spanish Speakers in the Market" },
];

const faqs = [
  {
    question: "Are your Spanish-speaking agents native speakers?",
    answer:
      "Yes. Agents assigned to Spanish-language queues are assessed for native or near-native professional fluency, not conversational ability. That distinction matters on real calls: a customer explaining a billing dispute or a medical scheduling need will switch to English and disengage the moment they sense the agent is struggling, and the interaction quality drops for both sides.",
  },
  {
    question: "How does bilingual routing actually work?",
    answer:
      "You keep one number. Callers either self-select a language from your IVR or are routed automatically based on a stored preference on the account. The call then goes to an agent who handles the entire conversation in that language — including any follow-up, notes, and callbacks. There is no mid-call transfer to a separate Spanish queue, which is where most bilingual programs lose people.",
  },
  {
    question: "Why not just use an interpretation service?",
    answer:
      "Per-minute interpretation lines are a reasonable fallback for rare languages, but they are a poor primary solution for Spanish. They add hold time while an interpreter joins, roughly double handle time because everything is said twice, bill by the minute on top of your agent cost, and put a third stranger into an already frustrating call. Staffing bilingual agents directly is normally both cheaper and better once Spanish volume is steady.",
  },
  {
    question: "Do you cover written channels in Spanish too?",
    answer:
      "Yes. Chat, email, SMS, and social replies are written natively in Spanish by the same bilingual team, and reviewed under the same QA standard as English. We do not machine-translate English responses, which is usually obvious to native readers and undermines the credibility of the whole channel.",
  },
  {
    question: "Which other languages can you support?",
    answer:
      "Spanish is the deepest bench, and we also staff Portuguese, French, Mandarin, Vietnamese, and Tagalog among others. Rather than advertise a long list, we look at your actual contact data to see which languages appear at real volume and staff to that, with interpretation as the fallback for genuinely rare requests.",
  },
  {
    question: "Will bilingual support actually change my numbers?",
    answer:
      "The clearest effect is usually on abandoned calls and repeat contacts. When a Spanish-speaking customer reaches someone who can resolve the issue directly, the call ends resolved instead of ending in a hang-up, a callback, or an escalation. For businesses in Texas, Florida, California, Arizona, and Nevada in particular, that recovered volume is often the single largest untapped service improvement available.",
  },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Bilingual & Multilingual Call Center Services",
    heading: "Forty-three million Americans speak Spanish at home. Most support lines still don't.",
    accent: "Most support lines still don't",
    body: [
      "Contact Center USA staffs native Spanish-speaking, US-based agents for inbound support, outbound campaigns, chat, and back office work — handling the entire interaction in Spanish rather than routing to an interpreter.",
      "Bilingual capability is treated as a checkbox by most providers: an IVR option that leads to a longer hold and an interpreter on a per-minute meter. Customers notice, and the abandon rate on that queue tells the story.",
    ],
    stats: [
      { stat: "43M+", label: "US residents who speak Spanish at home" },
      { stat: "100%", label: "Native professional fluency standard for Spanish queues" },
      { stat: "5+", label: "Channels covered natively: voice, chat, email, SMS, social" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "Interpretation Lines vs. Native Bilingual Agents",
    intro:
      "Almost every company handling Spanish volume starts with a per-minute interpretation service, because it is easy to switch on. The costs show up later, in handle time and in abandon rates.",
    leftTitle: "Third-Party Interpretation",
    rightTitle: "Contact Center USA Bilingual Agents",
    rows: [
      {
        label: "Handle Time",
        left: "Roughly doubled — every sentence is spoken twice through an interpreter.",
        right: "Normal handle time; the agent and customer speak directly.",
        leftYes: false,
      },
      {
        label: "Hold Before Resolution",
        left: "Customer waits while an interpreter is located and conferenced in.",
        right: "Routed straight to a bilingual agent with no additional hold.",
        leftYes: false,
      },
      {
        label: "Cost Model",
        left: "Per-minute interpreter billing stacked on top of your agent cost.",
        right: "One blended agent rate covering both languages.",
        leftYes: false,
      },
      {
        label: "Written Channels",
        left: "Usually unsupported; chat and email get machine translation instead.",
        right: "Chat, email, SMS, and social written natively and QA reviewed.",
        leftYes: false,
      },
      {
        label: "Relationship Quality",
        left: "A third stranger on a call that is often already stressful.",
        right: "One agent who owns the conversation from greeting to resolution.",
        leftYes: false,
      },
      {
        label: "Cultural Fluency",
        left: "Literal translation misses formality, naming, and regional nuance.",
        right: "Agents fluent in regional differences across Latin American Spanish.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Standing Up a Bilingual Program",
    intro:
      "Bilingual programs work best when they are scoped to real demand in your own contact data rather than to a language wish list.",
    steps: [
      {
        title: "Language Demand Analysis",
        body: "We review your contact data to size actual Spanish volume and identify any other languages appearing at real frequency.",
      },
      {
        title: "Routing Design",
        body: "IVR language selection and stored account preferences configured so callers reach a bilingual agent without a transfer.",
      },
      {
        title: "Bilingual Team Build",
        body: "Native-fluency agents assessed, then trained on your product, policies, and brand voice in both languages.",
      },
      {
        title: "Dual-Language QA",
        body: "Quality standards, scorecards, and response libraries built for Spanish directly rather than translated from English.",
      },
      {
        title: "Measure & Expand",
        body: "Track abandon rate, handle time, and resolution by language, then expand coverage where the data justifies it.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Where It Matters Most",
    heading: "Sectors With the Highest Bilingual Demand",
    intro:
      "Spanish-language volume is concentrated in sectors where the stakes of a misunderstanding are highest.",
    items: [
      {
        icon: "briefcase",
        stat: "Health",
        title: "Healthcare & Medical",
        body: "Appointment scheduling, benefits questions, and reminders where a misunderstanding has real consequences.",
      },
      {
        icon: "store",
        stat: "Trades",
        title: "Home Services & Trades",
        body: "Emergency intake and service booking in markets where Spanish-speaking homeowners are a large share of demand.",
      },
      {
        icon: "dollar",
        stat: "Legal",
        title: "Legal & Insurance",
        body: "Claim and case intake where accuracy of the recorded detail matters as much as the tone.",
      },
      {
        icon: "shopping-bag",
        stat: "Finance",
        title: "Financial & Collections",
        body: "Account servicing, payment arrangements, and collections conversations requiring precision and care.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Bilingual Support Belongs In-Team, Not On a Meter",
    image: "/images/cc-diverse-team.jpg",
    imagePosition: "right",
    body: [
      "A customer who has to request an interpreter, wait on hold while one is found, then repeat everything through a third party has already learned where they stand with your company. Most do not call back a second time.",
      "Contact Center USA builds bilingual capability into the team itself. Native Spanish-speaking US-based agents handle the call, the chat, and the follow-up end to end, under the same quality standard as your English queue — which is what turns a compliance checkbox into a genuine service advantage.",
    ],
    bullets: [
      "Native professional Spanish fluency, assessed before assignment",
      "One agent owns the interaction end to end — no interpreter handoff",
      "Written channels composed natively, never machine-translated",
      "Culturally fluent across regional Latin American Spanish",
      "Additional languages staffed against real demand in your data",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Stop losing Spanish-speaking customers on hold.",
    accent: "losing Spanish-speaking customers on hold",
    body: "Send us your contact volume and we will size the bilingual demand hiding in it, then quote a staffing plan that covers both languages under one blended rate.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

const relatedServices = [
  {
    title: "Multilingual Call Center Services",
    desc: "Our broader multilingual program covering languages beyond Spanish.",
    href: "/solutions/multilingual-call-center-services",
  },
  {
    title: "Inbound Call Center Services",
    desc: "Full inbound coverage with bilingual routing built into the queue design.",
    href: "/solutions/inbound-call-center-services",
  },
  {
    title: "Live Chat Outsourcing",
    desc: "Native Spanish chat support written and reviewed to the same standard as English.",
    href: "/services/live-chat-outsourcing",
  },
  {
    title: "Dialer & ACD Administration",
    desc: "Dialer and ACD administration: campaign build, list strategy, skills-based routing and pacing tuned for contact rate.",
    href: "/solutions/dialer-acd-administration",
  },
  {
    title: "Work From Home Solutions",
    desc: "Work-from-home contact center solutions with vetted remote US agents, secure endpoints and the same QA standards as on-site.",
    href: "/solutions/work-from-home-solutions",
  },
  {
    title: "IVR Services & Interactive Voice Response Outsourcing",
    desc: "IVR design, build and ongoing management.",
    href: "/services/interactive-voice-response",
  },
];

export default function SpanishCallCenterPage() {
  return (
    <ServicePageTemplate
      badge="Spanish Call Center Services"
      title="Bilingual & Multilingual Support for the US Market"
      titleHighlight="US Market"
      subtitle="Native Spanish-speaking, US-based agents who handle the entire interaction in your customer's language — on the phone, in chat, and in writing — instead of routing to a per-minute interpreter."
      description="Bilingual support only works when the agent actually speaks the language. We staff native Spanish-speaking US agents who own the conversation from greeting to resolution, route both languages through a single number without a mid-call transfer, and write chat and email natively rather than machine-translating your English replies."
      features={features}
      benefits={benefits}
      image="/images/cc-support-team.jpg"
      stats={stats}
      faqs={faqs}
      relatedServices={relatedServices}
      seoContent={seoContent}
    />
  );
}
