"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Bot,
  BrainCircuit,
  MessageSquare,
  Zap,
  Clock,
  Database,
  Star,
  Phone,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Bot, title: "Intelligent Chatbots", desc: "Deploy AI chatbots that understand natural language, resolve common inquiries instantly, and seamlessly escalate complex issues to live US-based agents with full context." },
  { icon: BrainCircuit, title: "Virtual Assistants", desc: "AI-powered virtual assistants guide customers through processes, provide personalized recommendations, and reduce average handle time by up to 40%." },
  { icon: Zap, title: "Machine Learning Models", desc: "Continuously improving algorithms that learn from every interaction to predict customer needs and optimize call routing decisions in real time." },
  { icon: MessageSquare, title: "Automated Workflows", desc: "End-to-end process automation for repetitive tasks — from ticket creation and categorization to follow-up scheduling and resolution tracking." },
  { icon: Clock, title: "24/7 AI Availability", desc: "Round-the-clock automated support that never sleeps, ensuring your customers receive instant responses regardless of time zone or volume spikes." },
  { icon: Database, title: "Knowledge Base Management", desc: "Self-learning knowledge bases that automatically update with new solutions, keeping your support content accurate, comprehensive, and always current." },
];

const processSteps = [
  { step: "01", title: "Discovery & Assessment", desc: "We analyze your current customer interactions, identify automation opportunities, and map out the highest-impact areas where AI can reduce costs and improve experience." },
  { step: "02", title: "AI Strategy & Design", desc: "Our AI strategists design custom conversation flows, train machine learning models on your data, and build knowledge bases tailored to your products and customers." },
  { step: "03", title: "Integration & Testing", desc: "We integrate AI tools with your existing CRM, help desk, and telephony systems. Rigorous testing ensures every scenario — from simple FAQs to complex escalations — works flawlessly." },
  { step: "04", title: "Launch & Optimization", desc: "Go live with continuous monitoring. Our team tracks AI performance, tunes responses, and optimizes models weekly to ensure accuracy and customer satisfaction keep improving." },
];

const industries = [
  { name: "Healthcare", desc: "AI-powered patient scheduling, symptom triage, insurance verification, and HIPAA-compliant automated responses for healthcare providers.", href: "/industries/healthcare-call-center-services" },
  { name: "Ecommerce & Retail", desc: "Chatbots for order tracking, returns processing, product recommendations, and peak-season overflow — handling thousands of concurrent conversations.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Financial Services", desc: "Automated account inquiries, fraud alerts, transaction support, and PCI-compliant self-service tools for banking and insurance customers.", href: "/industries/financial-services-call-center" },
  { name: "Technology & SaaS", desc: "AI-driven technical support, onboarding assistance, bug report triage, and proactive customer success outreach for software companies.", href: "/industries/saas-technology-support" },
  { name: "Insurance", desc: "Claims intake automation, policy inquiries, open enrollment support, and compliance-focused scripting powered by intelligent AI.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Real Estate", desc: "Automated lead qualification, property inquiry handling, showing scheduling, and investor communication for real estate firms.", href: "/industries/real-estate-call-center-services" },
];

const comparisonData = [
  { feature: "Setup Time", inHouse: "3-6 months", outsourced: "4-8 weeks" },
  { feature: "Annual Cost", inHouse: "$500K-$2M+", outsourced: "60% less" },
  { feature: "24/7 Coverage", inHouse: "Extra shifts needed", outsourced: "Included" },
  { feature: "AI Expertise", inHouse: "Must hire specialists", outsourced: "Built-in team" },
  { feature: "Scalability", inHouse: "Limited by headcount", outsourced: "Unlimited" },
  { feature: "Continuous Optimization", inHouse: "Manual process", outsourced: "Automated weekly" },
  { feature: "CRM Integration", inHouse: "DIY", outsourced: "50+ integrations ready" },
  { feature: "Risk", inHouse: "High upfront investment", outsourced: "No contracts, pay as you go" },
];

const faqs = [
  { question: "How much does AI call center automation cost?", answer: "AI call center automation costs vary based on scope and complexity, but most businesses see a 40-60% reduction in operational costs within the first year. Contact Center USA offers flexible pricing models including per-interaction and monthly subscription plans tailored to your volume and requirements. There are no long-term contracts required." },
  { question: "How do AI chatbots work in a call center environment?", answer: "AI chatbots use natural language processing (NLP) to understand customer inquiries, match them against a trained knowledge base, and deliver accurate responses in real time. When a query is too complex, the chatbot seamlessly escalates to a live US-based agent with full conversation context preserved — so the customer never has to repeat themselves." },
  { question: "Can AI replace human call center agents entirely?", answer: "AI is designed to augment human agents, not replace them. AI handles routine, repetitive inquiries — like order status, password resets, and FAQs — freeing your human agents to focus on complex, high-value interactions that require empathy and critical thinking. This hybrid approach typically improves both efficiency and customer satisfaction." },
  { question: "How long does it take to integrate AI automation into my contact center?", answer: "A typical AI automation integration takes 4-8 weeks depending on the complexity of your workflows and systems. Contact Center USA handles the full implementation including CRM integration, knowledge base training, conversation flow design, and rigorous testing to ensure a smooth rollout with zero disruption to your current operations." },
  { question: "What is the ROI of AI in customer service?", answer: "Businesses typically see 3x ROI within 12 months of deploying AI automation. ROI comes from reduced labor costs (40-60% savings), faster resolution times (3x improvement), higher customer satisfaction scores (15-25% increase), and the ability to scale support without proportionally increasing headcount." },
  { question: "Is AI automation secure and compliant?", answer: "Yes. Contact Center USA's AI solutions are built with enterprise-grade security including SOC 2, HIPAA, and PCI DSS compliance. All data is encrypted in transit and at rest, and our AI models are trained on anonymized data to protect customer privacy. We meet the compliance requirements of healthcare, financial services, and government sectors." },
  { question: "What channels does AI automation support?", answer: "Our AI automation works across all customer communication channels — phone (IVR), live chat, SMS/text, email, social media (Facebook, Instagram, Twitter), WhatsApp, mobile apps, and web. The AI maintains context across channels so customers can switch from chat to phone without losing their conversation history." },
];

export function AIAutomationContent() {
  return (
    <>
      {/* HERO — Image bg + form */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-agent-smile.jpg" alt="AI Automation for Call Centers - Contact Center USA" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Bot className="h-4 w-4" /> A.I. Automation
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                AI-Powered Call Center <span className="text-red">Automation</span> That Delivers Results
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Harness the power of artificial intelligence to deliver faster resolutions, reduce costs by up to 60%, and provide round-the-clock customer support — all backed by US-based expertise.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 60% Cost Reduction</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 24/7 AI + Human Support</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> No Long-Term Contracts</div>
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
              { value: 60, suffix: "%", label: "Cost Reduction" },
              { value: 90, suffix: "%", label: "Automation Rate" },
              { value: 3, suffix: "x", label: "Faster Resolution" },
              { value: 24, suffix: "/7", label: "AI Availability" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS AI AUTOMATION — Long-form content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is AI Automation?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                How AI Automation <span className="text-red">Transforms</span> Your Call Center
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                AI automation for call centers uses <strong>artificial intelligence, machine learning, and natural language processing</strong> to handle customer interactions automatically — reducing the workload on human agents while improving speed, accuracy, and customer satisfaction.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, we combine cutting-edge AI technology with over 30 years of contact center experience. Our AI solutions don&apos;t just deploy chatbots — they create <strong>intelligent, self-improving systems</strong> that learn from every interaction, predict customer needs, and seamlessly hand off complex issues to our US-based agents.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The result? Businesses using our <Link href="/services/omnichannel-contact-center-solutions" className="text-red font-semibold hover:underline">AI-powered omnichannel solutions</Link> typically see a <strong>60% reduction in operational costs</strong>, <strong>3x faster resolution times</strong>, and <strong>15-25% improvement in CSAT scores</strong> — all while maintaining the human touch that customers value.
              </p>

              <div className="mt-8 space-y-3">
                {["Handles 90% of routine inquiries automatically", "Seamless escalation to live US-based agents", "Learns and improves from every interaction", "Works across all channels: phone, chat, email, social"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-team-collab.jpg" alt="AI automation team at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">90%</div>
                <div className="text-sm text-white/80">Automation Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES — 6 cards */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">AI Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Our AI Automation <span className="text-red">Solutions</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From intelligent chatbots to predictive analytics, our AI tools are designed to enhance your customer experience at every touchpoint.</p>
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

      {/* HOW IT WORKS — 4 steps */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Process</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How AI Automation <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From discovery to deployment, we handle everything — so you can focus on growing your business.</p>
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

      {/* COMPARISON TABLE — In-House vs Outsourced */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Cost Comparison</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">AI Automation: <span className="text-red">In-House vs. Outsourced</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why businesses choose Contact Center USA over building AI capabilities in-house.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Feature</div><div>In-House</div><div>Contact Center USA</div>
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

      {/* INDUSTRIES THAT BENEFIT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Benefit from <span className="text-red">AI Automation</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our AI automation solutions are tailored to meet the unique compliance, volume, and complexity needs of every major industry.</p>
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
                  <div className="text-4xl font-bold text-navy">4.9/5</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">60%</div>
                  <div className="mt-1 text-sm text-gray-600">Average Cost Savings</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Implementing Contact Center USA&apos;s AI automation cut our support costs by more than half while actually improving our CSAT scores. The chatbot handles 90% of routine inquiries, and the handoff to live agents is completely seamless. It&apos;s been a game-changer for our scaling strategy.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">DC</div>
                  <div>
                    <div className="font-bold text-navy">David Chen</div>
                    <div className="text-sm text-gray-600">CEO, NovaTech Solutions</div>
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
              { title: "Omnichannel Solutions", desc: "Unify AI automation across voice, chat, email, and social channels for a seamless customer experience.", href: "/services/omnichannel-contact-center-solutions" },
              { title: "CX Analytics", desc: "Measure and optimize AI performance with real-time analytics, sentiment analysis, and predictive insights.", href: "/services/customer-experience-analytics" },
              { title: "Contact Center Software", desc: "Power your AI with enterprise-grade cloud software featuring 50+ integrations and 99.99% uptime.", href: "/services/contact-center-software-solutions" },
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

      {/* FAQ */}
      <PageFAQ heading="AI Automation FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Automate Your Contact Center?</h2>
              <p className="mt-3 text-white/60">See how AI automation can reduce costs by 60% and improve customer satisfaction for your business.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <a href={siteConfig.phoneHref} className="inline-flex items-center gap-2 rounded-lg border border-white/20 px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-white/5">
                <Phone className="h-4 w-4" /> Call Now
              </a>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
