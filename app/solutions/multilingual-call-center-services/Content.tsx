"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Globe,
  Languages,
  GraduationCap,
  HeartHandshake,
  Users,
  BookOpen,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Languages, title: "Spanish Language Support", desc: "Native and fluent Spanish-speaking agents providing the same quality, empathy, and resolution rates as your English lines — no third-party interpreters, no awkward delays, no miscommunication." },
  { icon: BookOpen, title: "Translation & Localization", desc: "Professional document translation, script localization, IVR prompt recording, marketing material adaptation, and real-time interpretation services for customer communications across every channel." },
  { icon: GraduationCap, title: "Cultural Competency Training", desc: "Every agent completes cultural awareness training covering communication styles, customs, and expectations across Hispanic, Asian, European, and Middle Eastern markets for authentic interactions." },
  { icon: Globe, title: "Global Customer Care", desc: "Support for international customers in their preferred language across phone, chat, email, and social media — ensuring your brand delivers a consistent, localized experience worldwide." },
  { icon: HeartHandshake, title: "Community Outreach Programs", desc: "Multilingual outreach campaigns for healthcare enrollment, government services, nonprofit fundraising, and public awareness initiatives that connect with diverse communities authentically." },
  { icon: Users, title: "Bilingual Staffing Flexibility", desc: "Flexible staffing models with fully bilingual agents who switch seamlessly between languages based on caller preference, IVR selection, or automatic language detection." },
];

const processSteps = [
  { step: "01", title: "Language Needs Assessment", desc: "We analyze your customer demographics, call volume by language, and service requirements to identify exactly which languages need native-speaker support and at what capacity." },
  { step: "02", title: "Agent Recruitment & Testing", desc: "We recruit native speakers — not interpreters — and test every agent for fluency, accent clarity, cultural competency, and customer service skills in both English and their native language." },
  { step: "03", title: "Program Customization", desc: "We localize your scripts, knowledge base, IVR prompts, and customer communications for each language, ensuring cultural nuances and brand voice are preserved across every touchpoint." },
  { step: "04", title: "Quality & Optimization", desc: "Ongoing bilingual quality monitoring with native-speaking supervisors, customer satisfaction tracking by language, and continuous agent coaching to maintain top-tier service in every language." },
];

const industries = [
  { name: "Healthcare", desc: "Multilingual patient scheduling, insurance verification, prescription support, and health education for hospitals and clinics serving diverse patient populations.", href: "/industries/healthcare-call-center-services" },
  { name: "Government", desc: "Language access compliance for federal, state, and local agencies — supporting Executive Order 13166 and Title VI requirements across citizen-facing programs.", href: "/solutions/government-call-center-services" },
  { name: "Insurance", desc: "Bilingual policy inquiries, claims support, enrollment assistance, and premium payment processing for insurers serving Hispanic and multilingual markets.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Financial Services", desc: "Spanish-language account support, loan inquiries, payment processing, and financial literacy outreach for banks and credit unions in diverse communities.", href: "/industries/financial-services-call-center" },
  { name: "Ecommerce & Retail", desc: "Multilingual order support, returns processing, product inquiries, and customer engagement for retailers expanding into Hispanic and international markets.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Education", desc: "Parent communication lines, enrollment support, financial aid assistance, and campus services in multiple languages for K-12 districts and universities.", href: "/industries/education-call-center-services" },
];

const comparisonData = [
  { feature: "Language Quality", inHouse: "Interpreter services", outsourced: "Native speakers" },
  { feature: "Response Time", inHouse: "Interpreter delays", outsourced: "Immediate, natural" },
  { feature: "Cultural Accuracy", inHouse: "Generic scripts", outsourced: "Culturally adapted" },
  { feature: "Staffing Costs", inHouse: "$55K-$70K per bilingual hire", outsourced: "40% lower" },
  { feature: "Language Coverage", inHouse: "2-3 languages max", outsourced: "20+ languages" },
  { feature: "Scalability", inHouse: "Hard to find talent", outsourced: "Ready pool of agents" },
  { feature: "Compliance (Title VI)", inHouse: "Self-managed", outsourced: "Built-in compliance" },
  { feature: "Quality Monitoring", inHouse: "English-only QA", outsourced: "Native-speaker QA" },
];

const faqs = [
  { question: "What languages does your multilingual call center support?", answer: "We provide native-speaker support in Spanish, Mandarin, Cantonese, Vietnamese, Korean, Tagalog, French, Portuguese, Arabic, Russian, Hindi, Urdu, Polish, Haitian Creole, and more than a dozen additional languages. Spanish is our largest non-English capability with hundreds of fluent agents available for immediate deployment across all shifts." },
  { question: "Are your multilingual agents native speakers or interpreters?", answer: "Our agents are native or fully bilingual speakers who grew up speaking the language — not third-party interpreters reading from scripts. This ensures natural, authentic conversations without the delays, awkwardness, and accuracy issues of interpretation services. Callers feel heard and understood from the very first word." },
  { question: "How does bilingual customer support improve retention and revenue?", answer: "Customers who receive service in their preferred language are significantly more satisfied and loyal. Research shows 72% of consumers are more likely to buy from companies that communicate in their native language. For the 42 million native Spanish speakers in the US alone, bilingual support can unlock an entirely new customer segment and dramatically improve lifetime value." },
  { question: "Can bilingual agents handle calls in both English and Spanish seamlessly?", answer: "Absolutely. Our bilingual agents switch fluidly between English and Spanish based on caller preference, IVR selection, or mid-conversation request. They can handle mixed-language households, translate documents in real time, and provide consistent service quality in both languages without any delay or degradation in experience." },
  { question: "Do you provide multilingual support for government contracts?", answer: "Yes. We help government agencies meet language access requirements under Executive Order 13166 and Title VI of the Civil Rights Act. Our multilingual teams support benefits enrollment, citizen hotlines, public health outreach, and emergency communications in multiple languages — with full documentation for compliance audits." },
  { question: "How do you ensure quality in non-English customer interactions?", answer: "Every language program has native-speaking quality analysts who monitor calls, score interactions, and provide coaching in the agent's primary language. We track CSAT, FCR, and AHT by language to ensure non-English callers receive the exact same service quality as English-speaking customers. Quality reports are available in English for your team." },
  { question: "How quickly can you launch multilingual call center support?", answer: "For Spanish language support, we can typically launch within 1-2 weeks using our existing pool of trained bilingual agents. Other languages may take 2-4 weeks depending on volume requirements and specialization. We handle all script localization, IVR recording, knowledge base translation, and agent training during the onboarding period." },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Multilingual Call Center in USA",
    heading: "The multilingual call center US brands trust to serve Spanish-speaking and global customers with native fluency.",
    accent: "trust to serve",
    body: [
      "Contact Center USA is one of the best multilingual call center providers in the USA — a 100% US-based bilingual bpo usa operator delivering native and fluent support across Spanish plus 20+ additional languages, with zero accent bias and zero third-party interpreter delays.",
      "For brands searching for multilingual customer support that actually moves CSAT, we serve the 42M+ Spanish-speaking consumers in the US plus global markets with culturally aware agents who resolve issues on the first call — not hand them off to a translator.",
    ],
    stats: [
      { stat: "42M+", label: "Spanish-speaking consumers in the US we help brands reach every day" },
      { stat: "20+", label: "Languages supported in one bilingual bpo usa operation" },
      { stat: "+18 pts", label: "Average CSAT lift vs. English-only or interpreter-based support" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House vs. Contact Center USA BPO",
    intro:
      "Every CX leader faces the same decision: hire multilingual agents internally, rely on over-the-phone interpreters, or partner with a specialized multilingual call center. Here's how the three approaches actually compare.",
    leftTitle: "Internal / Interpreter Line",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Native-Fluent Agents",
        left: "Small bilingual staff + third-party interpreters — high friction and delay on every Spanish call.",
        right: "Native and fluent agents across Spanish and 20+ languages — zero interpreter bridge required.",
        leftYes: false,
      },
      {
        label: "First-Call Resolution (Spanish)",
        left: "First-call resolution drops 20–30 points when interpreters are involved.",
        right: "Spanish FCR matches English FCR — because the agent speaks the language.",
        leftYes: false,
      },
      {
        label: "Cost per Bilingual Call",
        left: "Interpreter minutes add $1–$3/minute on top of agent time — budget killers at scale.",
        right: "Flat per-interaction multilingual customer support pricing — no interpreter add-ons.",
        leftYes: false,
      },
      {
        label: "Language Coverage",
        left: "Practical coverage limited to Spanish and maybe one more language in-house.",
        right: "Spanish, Portuguese, French, Mandarin, Tagalog, Arabic, and 15+ more on one platform.",
        leftYes: false,
      },
      {
        label: "Cultural Awareness",
        left: "Generic, translated scripts miss cultural nuance that actually drives trust.",
        right: "Agents are culturally aware — scripts and escalations tuned to each market.",
        leftYes: false,
      },
      {
        label: "Surge Capacity",
        left: "Hiring a Spanish SDR or CS rep in peak season is nearly impossible.",
        right: "Scale bilingual bpo usa capacity up or down in 10–15 business days.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our Multilingual Customer Support Launch Process",
    intro:
      "Every multilingual call center engagement follows the same disciplined five-step playbook — engineered to deliver CSAT parity across every language you support.",
    steps: [
      {
        title: "Market & Language Assessment",
        body: "Map customer demographics, call drivers, and top missed-language demand — prioritize launch sequence by volume and revenue impact.",
      },
      {
        title: "Localization Workshop",
        body: "Translate and culturally adapt scripts, IVR prompts, email templates, and knowledge base — no literal translations.",
      },
      {
        title: "Agent Staffing",
        body: "Staff native and fluent agents across your priority languages, with shadow training on your products and brand voice.",
      },
      {
        title: "Integrated Routing",
        body: "Configure ACD and IVR for language detection, skills-based routing, and seamless English/Spanish bilingual bpo usa blending.",
      },
      {
        title: "Measure & Optimize",
        body: "Dashboard CSAT, FCR, and AHT by language — identify cultural gaps and tune scripts to match each market's expectations.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Bilingual BPO USA",
    intro:
      "Each industry faces distinct multilingual customer support demands — from regulated financial conversations in Spanish to after-hours Mandarin technical support. Our workflows are tuned to each vertical.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Medical",
        body: "Spanish and multilingual patient intake, insurance verification, and clinical support — HIPAA-compliant end to end.",
      },
      {
        icon: "landmark",
        stat: "CFPB",
        title: "Financial Services",
        body: "Bilingual account servicing, fraud alerts, and collections for banks, credit unions, and insurers serving diverse markets.",
      },
      {
        icon: "shopping-bag",
        stat: "Retail",
        title: "Retail & Ecommerce",
        body: "Native Spanish and multilingual order support, returns, and VIP concierge for DTC brands and retailers.",
      },
      {
        icon: "landmark",
        stat: "Gov",
        title: "Government & Public Services",
        body: "Section 508 and LEP-aligned multilingual citizen hotlines for federal, state, and local agencies.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Multilingual Call Center Services",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore multilingual BPOs struggle with US-specific dialect and cultural context — callers notice immediately, and CSAT suffers. Interpreter-line models add 2–4x cost per minute and double average handle time. Local bilingual agencies lack the surge capacity, QA discipline, and language coverage to scale across 20+ languages.",
      "Contact Center USA is different: a 100% US-based bilingual bpo usa operator staffed by native and fluent agents across Spanish and 20+ additional languages, with culturally aware scripts and interpreter-free conversations that deliver CSAT parity across every language you support.",
    ],
    bullets: [
      "100% US-based native and fluent agents for multilingual customer support",
      "Spanish + 20+ additional languages on a single platform",
      "Interpreter-free conversations — same FCR and AHT as your English queues",
      "Culturally aware scripts and localization — not literal translations",
      "Scale bilingual bpo usa capacity up or down in 10–15 business days",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better multilingual call center partner?",
    accent: "better multilingual call center",
    body: "If your Spanish-language CSAT trails English, your interpreter bills are out of control, or your current multilingual customer support vendor can only cover one or two languages, request a free consultation. We'll benchmark your language mix, FCR by language, and cost per bilingual call — then show you exactly what bilingual bpo usa with Contact Center USA would look like.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function MultilingualServicesContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-agent-1.jpg" alt="Multilingual Call Center Services - Contact Center USA" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Globe className="h-4 w-4" /> Multilingual Services
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Multilingual Call Center <span className="text-red">Services</span> with Native Speakers
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Connect with every customer in their language. Native-speaking US-based agents deliver authentic bilingual customer support in Spanish and 20+ languages — no interpreters, no delays.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 20+ Languages</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> Native Speakers Only</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 97% Caller Satisfaction</div>
              </div>
            </motion.div>
            <motion.div className="lg:col-span-2" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <HeroContactForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-navy py-12">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {[
              { value: 20, suffix: "+", label: "Languages Supported" },
              { value: 42, suffix: "M+", label: "Spanish Speakers in US" },
              { value: 97, suffix: "%", label: "Caller Satisfaction" },
              { value: 50, suffix: "%", label: "Market Reach Growth" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* LONG-FORM INTRO */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Why Multilingual Support?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Speak Your Customers&apos; <span className="text-red">Language</span> — Literally
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                The United States is home to <strong>42 million native Spanish speakers</strong> and millions more who speak Mandarin, Vietnamese, Korean, Tagalog, and dozens of other languages. When these customers call your business, they deserve the same quality experience as your English-speaking callers.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Contact Center USA employs <strong>native-speaking agents — not third-party interpreters</strong> — who deliver authentic, natural conversations in your customers&apos; preferred language. The difference is immediate: no awkward pauses while an interpreter translates, no miscommunication, no frustrated customers hanging up.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Research shows <strong>72% of consumers prefer to buy from companies that communicate in their native language</strong>. Our clients who add <Link href="/solutions/customer-service-outsourcing" className="text-red font-semibold hover:underline">bilingual customer support</Link> typically see a <strong>50% increase in market reach</strong>, <strong>97% caller satisfaction rates</strong>, and significantly higher customer lifetime value among non-English-speaking segments.
              </p>

              <div className="mt-8 space-y-3">
                {["Native speakers, not interpreters or translation software", "Seamless English/Spanish switching mid-conversation", "Culturally adapted scripts and knowledge bases", "Title VI and EO 13166 compliance for government"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/office-phone.jpg" alt="Bilingual customer support agents at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">20+</div>
                <div className="text-sm text-white/80">Languages</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Multilingual Call Center <span className="text-red">Solutions</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From dedicated Spanish-language lines to global customer care, our native-speaking teams connect you authentically with every customer.</p>
          </motion.div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => {
              const Icon = feature.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-red/10 text-red transition-all group-hover:bg-red group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-5 text-lg font-bold text-navy">{feature.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{feature.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Process</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Multilingual Support <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From language assessment to native-speaker quality monitoring, we build multilingual programs that feel authentic to every caller.</p>
          </motion.div>
          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {processSteps.map((step, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-red text-xl font-bold text-white shadow-lg">{step.step}</div>
                <h3 className="mt-6 text-lg font-bold text-navy">{step.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Cost Comparison</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Interpreters vs. <span className="text-red">Native-Speaking</span> Agents</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why native-speaking agents from Contact Center USA deliver better results than interpreter services or in-house bilingual hiring.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Feature</div><div>In-House / Interpreters</div><div>Contact Center USA</div>
            </div>
            {comparisonData.map((row, i) => (
              <div key={i} className={`grid grid-cols-3 p-4 text-center text-sm ${i % 2 === 0 ? "bg-white" : "bg-gray-50"}`}>
                <div className="font-medium text-navy">{row.feature}</div>
                <div className="text-gray-600">{row.inHouse}</div>
                <div className="flex items-center justify-center gap-1 font-semibold text-red"><CheckCircle className="h-4 w-4" />{row.outsourced}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Need <span className="text-red">Multilingual Support</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our multilingual call center services are tailored for industries serving diverse populations with specific compliance and communication requirements.</p>
          </motion.div>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {industries.map((ind, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}>
                <Link href={ind.href} className="group block rounded-2xl border border-gray-100 bg-white p-7 transition-all hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-bold text-navy">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{ind.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Client Success</span>
              <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">What Our Clients <span className="text-red">Say</span></h2>
              <div className="mt-10 flex items-center gap-10">
                <div>
                  <div className="text-4xl font-bold text-navy">97%</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">Caller Satisfaction</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">50%</div>
                  <div className="mt-1 text-sm text-gray-600">Market Reach Growth</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Adding Spanish-language support through Contact Center USA opened an entirely new customer segment for us. Our Hispanic customer base grew 50% in one year, and satisfaction scores among Spanish-speaking callers hit 97%. The agents sound like they&apos;re part of our team — because they are.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">RD</div>
                  <div>
                    <div className="font-bold text-navy">Roberto Delgado</div>
                    <div className="text-sm text-gray-600">Director of Customer Experience, National Insurance Associates</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* RELATED SERVICES */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center text-3xl font-bold text-navy sm:text-4xl">
            Related <span className="text-red">Services</span>
          </motion.h2>
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              { title: "Customer Service", desc: "Pair multilingual capabilities with comprehensive inbound and outbound customer support for a complete experience.", href: "/solutions/customer-service-outsourcing" },
              { title: "Government Services", desc: "Meet federal language access requirements with compliant, multilingual citizen support from cleared agents.", href: "/solutions/government-call-center-services" },
              { title: "Social Media Support", desc: "Engage diverse audiences on Facebook, Instagram, and X with native-speaking social media agents.", href: "/solutions/social-media-customer-support" },
              { title: "Top 10 Multilingual Call Center Companies (2026)", desc: "Compare the best multilingual & bilingual call center companies in the USA in our ranked guide.", href: "/blog/top-10-multilingual-call-center-companies-usa" },
            ].map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Link href={item.href} className="group block rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
                  <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.desc}</p>
                  <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">Learn More <ArrowRight className="h-4 w-4" /></div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SEO CONTENT */}
      <SEOContentSection sections={seoContent} />

      {/* FAQ */}
      <PageFAQ heading="Multilingual Services FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Reach Every Customer?</h2>
              <p className="mt-3 text-white/60">See how multilingual call center services with native speakers can expand your market reach and improve satisfaction among non-English-speaking customers.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
