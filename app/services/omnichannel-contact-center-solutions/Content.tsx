"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Layers,
  RefreshCw,
  Bot,
  Palette,
  Route,
  PieChart,
  Star,
  Phone,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Layers, title: "Unified Communications", desc: "A single platform that brings voice, live chat, email, SMS, social media, and video into one agent desktop — eliminating tool-switching and giving agents complete customer context for every interaction." },
  { icon: RefreshCw, title: "Seamless Channel Switching", desc: "Customers move between channels without repeating themselves. Full conversation history, customer profile, and interaction context follow them from chat to phone to email and back — automatically." },
  { icon: Bot, title: "Chatbot-to-Human Handoff", desc: "Intelligent escalation that transfers context-rich conversations from AI chatbots to the best-qualified live agent, preserving every detail — so customers never have to explain their issue twice." },
  { icon: Palette, title: "Consistent CX Across Platforms", desc: "Unified branding, tone, messaging, and quality standards across every channel. Your customers receive the same exceptional experience whether they reach you by phone, chat, social media, or email." },
  { icon: Route, title: "Smart Routing Engine", desc: "Skills-based, context-aware, and AI-enhanced routing that directs each interaction to the best-qualified agent based on skill set, availability, customer history, and issue complexity." },
  { icon: PieChart, title: "Cross-Channel Analytics", desc: "Holistic reporting that tracks customer journeys across all channels in a single view — revealing which paths lead to resolution, which cause friction, and where your biggest improvement opportunities lie." },
];

const processSteps = [
  { step: "01", title: "Channel Assessment", desc: "We audit your current channels, analyze customer preferences and volume distribution, identify gaps in your channel strategy, and prioritize the integration roadmap based on customer impact." },
  { step: "02", title: "Platform Unification", desc: "Our engineers connect all channels into a single unified platform — building universal customer profiles, configuring routing rules, and establishing cross-channel handoff protocols for seamless transitions." },
  { step: "03", title: "Agent Training & Enablement", desc: "Comprehensive training on the unified desktop, multi-channel communication best practices, and channel-specific tone guidelines. Every agent becomes confident handling interactions across all channels." },
  { step: "04", title: "Launch & Channel Optimization", desc: "Phased rollout starting with your highest-volume channels. Continuous monitoring, cross-channel analytics, and weekly optimization reviews ensure the omnichannel experience improves over time." },
];

const industries = [
  { name: "Ecommerce & Retail", desc: "Omnichannel support for online and in-store customers — chat for pre-purchase questions, SMS for order updates, social media for brand engagement, and phone for complex returns.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Financial Services", desc: "Secure multichannel banking support — from mobile app chat and email for routine inquiries to phone for complex financial guidance, all with compliant cross-channel data handling.", href: "/industries/financial-services-call-center" },
  { name: "Healthcare", desc: "Patient communication across phone, portal, SMS, and email — appointment reminders, prescription refills, telehealth coordination, and post-visit follow-ups in one unified flow.", href: "/industries/healthcare-call-center-services" },
  { name: "Technology & SaaS", desc: "Multi-tier support across in-app chat, email, phone, and community forums. Technical issues start in chat and seamlessly escalate to phone with full diagnostic context preserved.", href: "/industries/saas-technology-support" },
  { name: "Insurance", desc: "Claims support, policy inquiries, and renewal reminders across phone, email, mobile app, and web portal — with unified policyholder profiles and compliant communication records.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Travel & Hospitality", desc: "Booking modifications via chat, travel alerts via SMS, concierge services via phone, and review management via social — all connected in a single guest profile.", href: "/industries/hospitality" },
];

const comparisonData = [
  { feature: "Channels Connected", inHouse: "2-3 (siloed)", outsourced: "7+ (unified)" },
  { feature: "Customer Context", inHouse: "Lost between channels", outsourced: "100% preserved" },
  { feature: "First-Contact Resolution", inHouse: "65-75%", outsourced: "92%" },
  { feature: "Repeat Contacts", inHouse: "High (info lost)", outsourced: "35% reduction" },
  { feature: "Agent Desktop", inHouse: "Multiple tools", outsourced: "Single unified view" },
  { feature: "Implementation Time", inHouse: "6-12 months", outsourced: "6-12 weeks" },
  { feature: "Routing Intelligence", inHouse: "Basic queue", outsourced: "AI-powered skills-based" },
  { feature: "Cross-Channel Reporting", inHouse: "Manual aggregation", outsourced: "Unified real-time" },
];

const faqs = [
  { question: "What is omnichannel customer support?", answer: "Omnichannel customer support integrates all communication channels — voice, live chat, email, SMS, social media, mobile app, and self-service — into a unified platform where full conversation context follows the customer across every channel. Unlike multichannel support where channels operate independently, omnichannel ensures customers never have to repeat themselves when switching channels." },
  { question: "What is the difference between omnichannel and multichannel support?", answer: "Multichannel means offering multiple channels (phone, chat, email) but each operates independently — agents can't see what happened on other channels. Omnichannel connects all channels into a single platform with shared customer profiles and interaction history. When a customer switches from chat to phone, the agent sees the entire conversation. This dramatically improves first-contact resolution and customer satisfaction." },
  { question: "How does seamless channel switching work?", answer: "Our platform maintains a universal customer profile that syncs in real time across all channels. When a customer moves from chat to phone, the system automatically routes them to the best-qualified agent and presents the full conversation history, customer profile, and any open cases. The agent picks up exactly where the previous interaction left off — zero repetition for the customer." },
  { question: "How does chatbot-to-human handoff work in an omnichannel system?", answer: "When an AI chatbot determines that an inquiry requires human assistance, it transfers the full conversation — including context, customer sentiment, attempted solutions, and relevant account details — to the best-qualified live agent via intelligent routing. The customer continues seamlessly, and the agent has all the information needed to resolve the issue without asking the customer to repeat anything." },
  { question: "How long does it take to implement an omnichannel solution?", answer: "A typical omnichannel implementation takes 6-12 weeks depending on the number of channels, existing integrations, and complexity of routing rules. Contact Center USA follows a phased rollout approach — starting with your highest-volume channels (usually phone and chat) and adding complexity incrementally to minimize disruption and demonstrate value quickly." },
  { question: "What channels does your omnichannel platform support?", answer: "Our platform supports voice (inbound/outbound), live chat, email, SMS/text, social media (Facebook, Instagram, X, LinkedIn), WhatsApp, mobile app messaging, video, web forms, and self-service portals. All channels are connected through a single agent desktop with universal customer profiles and cross-channel analytics." },
  { question: "How much does an omnichannel call center solution cost?", answer: "Omnichannel pricing depends on the number of channels, agents, and features required. Contact Center USA offers flexible plans that start with your highest-impact channels and scale from there. Most businesses find that omnichannel actually reduces total support costs by consolidating tools, eliminating redundant systems, and improving first-contact resolution — which reduces repeat contacts by 35%." },
];

export function OmnichannelContent({ seoContent }: { seoContent?: SEOPattern[] }) {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-team-huddle.jpg" alt="Omnichannel Call Center - Multichannel Customer Support by Contact Center USA" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Layers className="h-4 w-4" /> Omnichannel Solutions
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Omnichannel Call Center <span className="text-red">Solutions</span> for Seamless Support
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Your customers don&apos;t think in channels — they just want answers. Our multichannel customer support platform unifies 7+ channels into one seamless experience with 92% first-contact resolution.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 92% First-Contact Resolution</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 7+ Channels Unified</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> Zero Context Loss</div>
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
              { value: 7, suffix: "+", label: "Channels Unified" },
              { value: 35, suffix: "%", label: "Fewer Repeat Contacts" },
              { value: 92, suffix: "%", label: "First-Contact Resolution" },
              { value: 100, suffix: "%", label: "Context Preserved" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS OMNICHANNEL */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is Omnichannel Support?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                How an Omnichannel Call Center <span className="text-red">Eliminates</span> Customer Frustration
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Omnichannel customer support means <strong>every communication channel is connected</strong> through a single platform with shared customer profiles and complete interaction history. Unlike multichannel support where phone, chat, and email operate in silos, omnichannel ensures <strong>customers never have to repeat themselves</strong> when switching between channels.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our omnichannel platform connects <strong>7+ channels into a unified agent desktop</strong> — voice, live chat, email, SMS, social media, WhatsApp, and mobile app messaging. When a customer starts on chat and switches to phone, the agent sees the entire conversation, customer profile, and any open cases. <strong>Smart routing</strong> directs each interaction to the best-qualified agent based on skills, context, and availability.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The impact is immediate: businesses using our multichannel customer support platform see <strong>92% first-contact resolution</strong>, <strong>35% fewer repeat contacts</strong>, and significantly higher customer satisfaction. Combine omnichannel with our <Link href="/services/ai-call-center-automation" className="text-red font-semibold hover:underline">AI automation</Link> and <Link href="/services/digital-customer-experience-services" className="text-red font-semibold hover:underline">digital CX services</Link> for a complete customer experience ecosystem.
              </p>

              <div className="mt-8 space-y-3">
                {["7+ channels unified in a single agent desktop", "100% context preserved across channel switches", "AI-powered routing to the best-qualified agent", "Cross-channel journey analytics and reporting"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-agent-laptop.jpg" alt="Omnichannel contact center agents" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">92%</div>
                <div className="text-sm text-white/80">FCR Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Omnichannel Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Multichannel Customer Support <span className="text-red">Features</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Every capability your team needs to deliver a unified, frictionless customer experience across every communication channel.</p>
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

      {/* HOW IT WORKS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Process</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Omnichannel <span className="text-red">Implementation</span> Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From channel assessment to unified operations, we handle the full omnichannel transformation with zero disruption.</p>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Comparison</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Multichannel vs. <span className="text-red">True Omnichannel</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See the difference between siloed multichannel support and Contact Center USA&apos;s unified omnichannel platform.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Capability</div><div>Multichannel (Siloed)</div><div>Contact Center USA</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Thrive with <span className="text-red">Omnichannel Support</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our omnichannel platform is configured for the channel preferences, compliance needs, and customer journeys of every major industry.</p>
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
                  <div className="text-4xl font-bold text-navy">4.8/5</div>
                  <div className="mt-1 flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />)}</div>
                  <div className="mt-1 text-sm text-gray-600">Average Rating</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">35%</div>
                  <div className="mt-1 text-sm text-gray-600">Fewer Repeat Contacts</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Our customers used to complain constantly about having to repeat themselves when switching from chat to phone. Since implementing Contact Center USA&apos;s omnichannel platform, repeat contacts dropped 35% and our first-contact resolution hit 92%. The unified agent desktop changed everything — our team loves it and our customers notice the difference immediately.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">KP</div>
                  <div>
                    <div className="font-bold text-navy">K.P.</div>
                    <div className="text-sm text-gray-600">Operations Manager, A Multi-Location Retail Chain</div>
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
              { title: "Digital and CX Services", desc: "Extend your omnichannel strategy with dedicated digital channel management, social media support, and self-service portals.", href: "/services/digital-customer-experience-services" },
              { title: "A.I. Automation", desc: "Add intelligent chatbots and virtual assistants to your omnichannel platform for 24/7 automated support with seamless handoff.", href: "/services/ai-call-center-automation" },
              { title: "Contact Center Software", desc: "Power your omnichannel experience with enterprise-grade cloud software, 50+ integrations, and 99.99% uptime.", href: "/services/contact-center-software-solutions" },
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
      {seoContent && <SEOContentSection sections={seoContent} />}

      {/* FAQ */}
      <PageFAQ heading="Omnichannel Solutions FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Unify Your Customer Channels?</h2>
              <p className="mt-3 text-white/60">Deliver a seamless experience across every channel with our omnichannel platform and achieve 92% first-contact resolution.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Channel Audit <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
