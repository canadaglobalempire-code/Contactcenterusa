"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Globe,
  MessageCircle,
  Mail,
  Smartphone,
  Share2,
  BookOpen,
  Star,
  Phone,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Globe, title: "Digital Transformation", desc: "End-to-end strategy and execution to modernize your customer touchpoints, migrate legacy systems, and build seamless digital experiences that meet today's customer expectations across every platform." },
  { icon: Share2, title: "Social Media Management", desc: "Dedicated US-based teams that monitor, engage, and respond across Facebook, X, Instagram, LinkedIn, and TikTok — protecting your brand reputation and turning social interactions into loyalty 24/7." },
  { icon: Mail, title: "Email Support", desc: "Professional email response management with SLA-driven workflows, template libraries, sentiment-based prioritization, and automated routing for fast, consistent, brand-aligned replies at scale." },
  { icon: MessageCircle, title: "Live Chat Support", desc: "Real-time chat agents who handle multiple conversations simultaneously with sub-30-second response times, reducing wait times and driving customer satisfaction scores above 95%." },
  { icon: Smartphone, title: "Mobile App Support", desc: "In-app messaging, push notification management, and mobile-first support experiences designed for today's on-the-go customers who expect instant help within their mobile experience." },
  { icon: BookOpen, title: "Self-Service Portals", desc: "Custom-built knowledge bases and customer portals that empower users to find answers independently — reducing inbound ticket volume by 30-40% and lowering cost per interaction significantly." },
];

const processSteps = [
  { step: "01", title: "Channel Audit & Strategy", desc: "We audit your current digital presence, analyze customer channel preferences, and design a prioritized digital CX strategy that addresses the highest-impact channels first." },
  { step: "02", title: "Team Building & Training", desc: "We recruit, train, and deploy US-based digital specialists for each channel — social media managers, chat agents, email specialists — all trained on your brand voice and processes." },
  { step: "03", title: "Platform Integration", desc: "We connect your CRM, help desk, social platforms, and communication tools into a unified system. Agents see full customer history regardless of which digital channel the interaction starts on." },
  { step: "04", title: "Launch & Continuous Improvement", desc: "Go live with real-time monitoring across all channels. Weekly performance reviews, A/B testing, and feedback loops ensure response quality and customer satisfaction improve continuously." },
];

const industries = [
  { name: "Ecommerce & Retail", desc: "Digital CX for online retailers — live chat for pre-purchase questions, social media engagement for brand building, and email support for order management and returns.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Technology & SaaS", desc: "Multi-channel technical support, community management, in-app messaging, and self-service documentation for software companies with digital-first customer bases.", href: "/industries/saas-technology-support" },
  { name: "Healthcare", desc: "HIPAA-compliant digital communication including patient portal support, secure messaging, telehealth coordination, and appointment management across digital channels.", href: "/industries/healthcare-call-center-services" },
  { name: "Financial Services", desc: "Secure digital banking support, social media reputation management, mobile app assistance, and compliant email communication for financial institutions.", href: "/industries/financial-services-call-center" },
  { name: "Hospitality & Travel", desc: "Real-time booking support via chat, social media engagement for reviews and promotions, and mobile concierge services that enhance the traveler experience.", href: "/industries/hospitality" },
  { name: "Education", desc: "Student support across chat, email, and social platforms — including enrollment assistance, course inquiries, and digital learning platform help desk services.", href: "/industries/education-call-center-services" },
];

const comparisonData = [
  { feature: "Channel Coverage", inHouse: "1-2 channels", outsourced: "5+ channels unified" },
  { feature: "Response Time", inHouse: "Hours to days", outsourced: "Under 30 seconds (chat)" },
  { feature: "Social Monitoring", inHouse: "Business hours only", outsourced: "24/7 coverage" },
  { feature: "Staffing Flexibility", inHouse: "Fixed headcount", outsourced: "Scale up/down on demand" },
  { feature: "Brand Consistency", inHouse: "Varies by agent", outsourced: "Unified brand voice" },
  { feature: "Cost Per Interaction", inHouse: "$15-25 (phone)", outsourced: "$3-8 (digital)" },
  { feature: "Self-Service Deflection", inHouse: "No strategy", outsourced: "30-40% ticket reduction" },
  { feature: "Technology Investment", inHouse: "$100K+ in tools", outsourced: "Included in service" },
];

const faqs = [
  { question: "What is digital customer experience (CX)?", answer: "Digital CX encompasses every interaction a customer has with your brand through digital channels — including live chat, social media, email, mobile apps, SMS, and self-service portals. A strong digital CX strategy ensures these channels are integrated, responsive, and deliver consistent quality that matches or exceeds the in-person experience." },
  { question: "How do you handle social media customer support?", answer: "Our dedicated US-based social media teams monitor and respond across Facebook, X (Twitter), Instagram, LinkedIn, and TikTok 24/7. We handle inquiries, complaints, brand mentions, and reputation management with SLA-driven response times, escalation protocols, and sentiment-aware messaging that protects and enhances your brand presence." },
  { question: "Is live chat more effective than phone support?", answer: "Live chat offers faster response times (under 30 seconds vs. minutes on hold), allows agents to handle 3-4 conversations simultaneously, and is preferred by 73% of customers for quick inquiries. However, the best strategy combines chat and phone support based on issue complexity. Our omnichannel approach ensures customers can seamlessly switch between channels." },
  { question: "How does digital CX reduce support costs?", answer: "Digital channels are significantly more cost-effective than phone support — live chat costs 50-70% less per interaction, email costs 40% less, and self-service portals can deflect 30-40% of inbound volume entirely. Most businesses see meaningful cost reductions within the first quarter of implementing a digital CX strategy with Contact Center USA." },
  { question: "Can you maintain our brand voice across digital channels?", answer: "Absolutely. We develop comprehensive brand voice guides, tone matrices, and response templates for each channel in collaboration with your marketing team. Every agent is trained on your brand personality, and our quality assurance process ensures consistent messaging across social media, chat, email, and all other digital touchpoints." },
  { question: "How long does a digital transformation take for a contact center?", answer: "A typical digital transformation takes 8-16 weeks depending on the number of channels, integrations, and processes involved. Contact Center USA follows a phased approach — starting with your highest-impact channels (usually chat and social) and expanding from there — so you see value quickly without disrupting existing operations." },
  { question: "What omnichannel CX services do you offer?", answer: "Our omnichannel CX services include live chat support, social media management, email support, mobile app support, SMS/text support, self-service portal development, and community management. All channels are integrated through a unified platform so agents have complete customer context and customers can switch channels without repeating themselves." },
];

export function DigitalCXContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-team-plan.jpg" alt="Digital Customer Experience Services - Omnichannel CX by Contact Center USA" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Globe className="h-4 w-4" /> Digital & CX Services
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Digital Customer <span className="text-red">Experience</span> Your Customers Expect
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Meet your customers wherever they are — social media, live chat, email, or mobile — with unified omnichannel CX services powered by US-based digital specialists delivering 95% satisfaction rates.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 95% Satisfaction Rate</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 5+ Channels Unified</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 24/7 Digital Support</div>
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
              { value: 5, suffix: "+", label: "Channels Supported" },
              { value: 40, suffix: "%", label: "Faster Response" },
              { value: 95, suffix: "%", label: "Customer Satisfaction" },
              { value: 24, suffix: "/7", label: "Digital Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS DIGITAL CX */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What Are Digital CX Services?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                How Omnichannel CX Services <span className="text-red">Modernize</span> Customer Support
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Digital customer experience services encompass every <strong>non-voice interaction</strong> between your brand and your customers — from <strong>live chat and social media</strong> to <strong>email support, mobile apps, and self-service portals</strong>. In today&apos;s digital-first world, 73% of customers prefer digital channels for routine inquiries.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our US-based digital specialists manage <strong>every digital channel under one roof</strong>. We don&apos;t just respond to messages — we build cohesive digital experiences with <strong>unified brand voice, sub-30-second chat response times</strong>, and 24/7 social media monitoring that protects your reputation and drives customer loyalty.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The business impact is compelling: digital channels cost <strong>50-70% less per interaction</strong> than phone support, self-service portals deflect <strong>30-40% of inbound volume</strong>, and our clients consistently achieve <strong>95%+ customer satisfaction</strong> across all digital touchpoints. Pair digital CX with our <Link href="/services/omnichannel-contact-center-solutions" className="text-red font-semibold hover:underline">omnichannel solutions</Link> and <Link href="/services/ai-call-center-automation" className="text-red font-semibold hover:underline">AI automation</Link> for a complete customer experience strategy.
              </p>

              <div className="mt-8 space-y-3">
                {["Live chat with sub-30-second response times", "24/7 social media monitoring and engagement", "Self-service portals that deflect 30-40% of tickets", "Unified brand voice across every digital channel"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-agent-desk.jpg" alt="Digital CX specialists at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-sm text-white/80">Satisfaction Rate</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Digital Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Digital CX <span className="text-red">Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From social media management to self-service portals, our digital CX services cover every channel your customers use.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Digital CX <span className="text-red">Transformation</span> Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From channel audit to 24/7 digital operations, we handle every step of your digital customer experience transformation.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Digital CX: <span className="text-red">In-House vs. Outsourced</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why businesses choose Contact Center USA for digital customer experience management.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Capability</div><div>In-House</div><div>Contact Center USA</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Thrive with <span className="text-red">Digital CX Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our digital CX solutions are designed for the unique channel preferences, compliance needs, and customer expectations of every industry.</p>
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
                  <div className="text-4xl font-bold text-navy">40%</div>
                  <div className="mt-1 text-sm text-gray-600">Faster Response Times</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  We needed a partner who could manage our customer experience across social media, live chat, and email without sacrificing quality. Contact Center USA delivered on every front. Our response times dropped 40%, our social media sentiment improved dramatically, and our customers consistently rate their digital experience above 95% satisfaction.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">RN</div>
                  <div>
                    <div className="font-bold text-navy">Rachel Nguyen</div>
                    <div className="text-sm text-gray-600">Director of E-Commerce, Urban Style Collective</div>
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
              { title: "Omnichannel Solutions", desc: "Unify your digital channels with voice and SMS in a single platform for a truly seamless customer experience.", href: "/services/omnichannel-contact-center-solutions" },
              { title: "A.I. Automation", desc: "Enhance digital channels with AI chatbots and virtual assistants for instant, automated support across chat and social.", href: "/services/ai-call-center-automation" },
              { title: "CX Analytics", desc: "Measure digital channel performance with sentiment analysis, journey mapping, and real-time satisfaction tracking.", href: "/services/customer-experience-analytics" },
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
      <PageFAQ heading="Digital & CX Services FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Elevate Your Digital Customer Experience?</h2>
              <p className="mt-3 text-white/60">Let our US-based digital specialists build a seamless experience across every channel your customers use.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Consultation <ArrowRight className="h-4 w-4" />
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
