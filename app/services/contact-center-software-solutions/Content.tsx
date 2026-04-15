"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Settings,
  Users,
  PhoneOutgoing,
  Shield,
  BarChart3,
  Star,
  Phone,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Cloud, title: "Cloud-Based Platform", desc: "Fully hosted infrastructure that scales on demand, eliminates hardware costs, and provides 99.99% uptime with redundant data centers across the United States. No servers to manage, no updates to install." },
  { icon: Settings, title: "50+ CRM Integrations", desc: "Seamless out-of-the-box connectivity with Salesforce, HubSpot, Zendesk, ServiceNow, and dozens more — so every agent has complete customer context on every interaction without switching tabs." },
  { icon: Users, title: "Workforce Management", desc: "AI-driven forecasting, scheduling, and adherence tools that optimize staffing levels automatically. Ensure the right agents with the right skills are available at the right time, every time." },
  { icon: PhoneOutgoing, title: "Predictive Dialers", desc: "Intelligent outbound dialing technology that maximizes agent productivity by filtering busy signals, voicemails, and disconnected numbers — increasing talk time by up to 300% compared to manual dialing." },
  { icon: Shield, title: "Call Recording & QA", desc: "Comprehensive call recording, screen capture, and automated quality scoring across 100% of interactions. Maintain compliance and continuously improve agent performance with data-driven coaching." },
  { icon: BarChart3, title: "Real-Time Dashboards", desc: "Live performance metrics, queue monitoring, and customizable KPI dashboards give supervisors instant visibility into every aspect of operations. Set automated alerts for SLA thresholds and anomalies." },
];

const processSteps = [
  { step: "01", title: "Platform Assessment", desc: "We audit your existing infrastructure, identify bottlenecks, and map your integration requirements to build a migration plan that minimizes disruption and maximizes value from day one." },
  { step: "02", title: "Configuration & Integration", desc: "Our engineers configure the platform to your specifications — routing rules, IVR flows, agent desktops, and CRM integrations — all tailored to your unique workflows and compliance requirements." },
  { step: "03", title: "Agent Training & Testing", desc: "Hands-on training for agents and supervisors, followed by rigorous UAT testing across every scenario. We ensure your team is confident and your systems are bulletproof before go-live." },
  { step: "04", title: "Go-Live & Optimization", desc: "Launch with dedicated support from our platform team. We monitor performance daily, fine-tune routing and workflows, and deliver weekly optimization reports to continuously improve efficiency." },
];

const industries = [
  { name: "Financial Services", desc: "PCI-compliant call center software with secure payment processing, fraud detection integrations, and regulatory audit trails for banks and credit unions.", href: "/industries/financial-services-call-center" },
  { name: "Healthcare", desc: "HIPAA-ready contact center software with appointment scheduling, patient communication workflows, and EHR system integrations for healthcare providers.", href: "/industries/healthcare-call-center-services" },
  { name: "Ecommerce & Retail", desc: "Scalable cloud software that handles seasonal volume spikes, integrates with Shopify and Magento, and supports order management across every channel.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Technology & SaaS", desc: "Feature-rich platform with Jira, Intercom, and Slack integrations — purpose-built for technical support teams managing complex product ecosystems.", href: "/industries/saas-technology-support" },
  { name: "Insurance", desc: "Claims management workflows, policyholder communication tools, and compliance-focused recording and archiving for insurance contact centers.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Real Estate", desc: "Lead routing, showing scheduling, and CRM integrations designed for real estate brokerages managing high volumes of buyer and seller inquiries.", href: "/industries/real-estate-call-center-services" },
];

const comparisonData = [
  { feature: "Deployment Time", inHouse: "6-12 months", outsourced: "4-6 weeks" },
  { feature: "Upfront Cost", inHouse: "$250K-$1M+", outsourced: "$0 (subscription)" },
  { feature: "Platform Uptime", inHouse: "95-98%", outsourced: "99.99% guaranteed" },
  { feature: "CRM Integrations", inHouse: "Custom-built (months)", outsourced: "50+ pre-built" },
  { feature: "Software Updates", inHouse: "Manual, quarterly", outsourced: "Automatic, continuous" },
  { feature: "Security & Compliance", inHouse: "Self-managed", outsourced: "PCI, HIPAA, SOC 2 built-in" },
  { feature: "Scalability", inHouse: "Hardware-limited", outsourced: "Unlimited elastic scaling" },
  { feature: "Technical Support", inHouse: "Internal IT team", outsourced: "24/7 dedicated engineers" },
];

const faqs = [
  { question: "What is the best contact center software for mid-size businesses?", answer: "The best contact center software for mid-size businesses combines cloud scalability, deep CRM integrations, workforce management, and real-time analytics in a single platform. Contact Center USA's solution is purpose-built for organizations with 50 to 5,000+ agents, offering 50+ pre-built integrations, 99.99% uptime, and enterprise features without the complexity or cost of legacy on-premise systems." },
  { question: "What is the difference between cloud and on-premise contact center software?", answer: "Cloud contact center software is hosted remotely and accessed via the internet, eliminating hardware costs and enabling rapid scaling. On-premise solutions require physical servers, dedicated IT staff, and significant capital investment to maintain. Cloud platforms offer faster deployment (weeks vs. months), automatic updates, disaster recovery, and 40-60% lower total cost of ownership compared to on-premise alternatives." },
  { question: "How does contact center software integrate with my existing CRM?", answer: "Contact Center USA's platform offers pre-built integrations with Salesforce, HubSpot, Zendesk, ServiceNow, and 50+ other tools. Integration is typically completed within days using REST APIs and native connectors. Agents get full customer context — including interaction history, open tickets, purchase records, and account details — directly in their unified workspace without switching applications." },
  { question: "Can contact center software scale as my business grows?", answer: "Absolutely. Cloud-based contact center software scales elastically on demand — you can add agents, channels, and features in minutes without infrastructure changes or downtime. Our platform supports operations from 50 agents to 5,000+ with the same reliability, performance, and feature set. Seasonal scaling is automatic with no long-term commitment required." },
  { question: "What security certifications does your contact center software have?", answer: "Our platform maintains PCI DSS Level 1, HIPAA, SOC 2 Type II, and GDPR compliance certifications. All data is encrypted in transit (TLS 1.3) and at rest (AES-256). We conduct regular third-party penetration testing, maintain SOC 2 audit reports, and provide dedicated compliance documentation for regulated industries including healthcare and financial services." },
  { question: "How much does cloud contact center software cost?", answer: "Cloud contact center software pricing typically follows per-seat or per-usage models. Contact Center USA offers flexible plans including monthly subscriptions starting at competitive per-agent rates, pay-per-use options for variable volume, and enterprise licensing for large deployments. All plans include core features, integrations, and 24/7 technical support with no hidden fees." },
  { question: "What reporting and analytics does the software provide?", answer: "Our platform delivers real-time and historical reporting across 100+ KPIs including average handle time, first-contact resolution, queue wait times, agent occupancy, CSAT scores, and SLA adherence. Custom dashboards with drag-and-drop widgets, scheduled report delivery, and automated alerting ensure supervisors always have the data they need to optimize performance." },
];

export function ContactCenterSoftwareContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-agent-blue.jpg" alt="Contact Center Software - Cloud Call Center Platform by Contact Center USA" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Cloud className="h-4 w-4" /> Contact Center Software
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Enterprise Cloud <span className="text-red">Contact Center Software</span> Built for Performance
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Power your operations with a cloud call center platform that integrates 50+ tools, optimizes your workforce with AI, and delivers 99.99% uptime — all managed by US-based engineers.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 99.99% Uptime</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 50+ Integrations</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> No Hardware Required</div>
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
              { value: 99.99, suffix: "%", label: "Platform Uptime" },
              { value: 50, suffix: "+", label: "Integrations" },
              { value: 40, suffix: "%", label: "Efficiency Gain" },
              { value: 24, suffix: "/7", label: "Technical Support" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS CONTACT CENTER SOFTWARE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is Contact Center Software?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Why Cloud Call Center <span className="text-red">Software</span> Is the Foundation of Modern CX
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Contact center software is the <strong>technology backbone</strong> that powers every customer interaction in your organization. It encompasses everything from <strong>automatic call distribution (ACD) and interactive voice response (IVR)</strong> to CRM integrations, workforce management, and real-time reporting — all unified in a single cloud platform.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our cloud call center platform is built on <strong>enterprise-grade infrastructure with 99.99% uptime</strong> and redundant data centers across the United States. Unlike legacy on-premise systems that require months of deployment and massive capital investment, our software is operational in weeks — with <strong>50+ pre-built CRM integrations</strong> that connect your existing tools instantly.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The result? Businesses using our platform see a <strong>40% improvement in agent efficiency</strong>, <strong>30% reduction in average handle time</strong>, and <strong>measurable improvements in first-contact resolution rates</strong>. Pair it with our <Link href="/services/ai-call-center-automation" className="text-red font-semibold hover:underline">AI automation capabilities</Link> and <Link href="/services/customer-experience-analytics" className="text-red font-semibold hover:underline">CX analytics</Link> to unlock even greater performance gains.
              </p>

              <div className="mt-8 space-y-3">
                {["99.99% uptime with US-based data centers", "50+ pre-built CRM and tool integrations", "AI-powered workforce management and routing", "PCI DSS, HIPAA, and SOC 2 compliant out of the box"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-team-meeting.jpg" alt="Contact center software platform dashboard" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-sm text-white/80">Integrations Ready</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Platform Features</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Contact Center Software <span className="text-red">Features</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Every tool your team needs to deliver exceptional customer experiences — integrated, automated, and optimized in one cloud platform.</p>
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
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Implementation</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Our Software <span className="text-red">Implementation</span> Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From assessment to optimization, our team handles the entire deployment so you can focus on your customers.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Contact Center Software: <span className="text-red">On-Premise vs. Cloud</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why businesses are migrating from legacy on-premise systems to Contact Center USA&apos;s cloud platform.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Feature</div><div>On-Premise</div><div>Contact Center USA</div>
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

      {/* CLOUD CONTACT CENTER SOFTWARE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Cloud Contact Center Software: The Future of Customer Service</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              <strong>Cloud contact center software</strong> has fundamentally reshaped how businesses manage customer interactions. Unlike legacy on-premise systems that demand six-figure hardware investments and dedicated IT teams, <strong>cloud-based contact center software</strong> runs entirely in the cloud — delivering enterprise capabilities through a simple browser-based interface. According to Gartner, over 75% of contact centers will operate on cloud platforms by 2027, driven by the need for flexibility, cost efficiency, and remote workforce enablement.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              With Contact Center USA&apos;s <strong>cloud contact center software</strong>, businesses reduce infrastructure costs by up to 45% while gaining elastic scalability that adjusts to seasonal demand in real time. Remote agents connect securely from anywhere with nothing more than a laptop and internet connection, making it ideal for distributed teams. Our platform provides <strong>99.99% uptime</strong> backed by redundant US-based data centers and automatic failover — so your customer service never goes offline.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Whether you are migrating from an on-premise PBX or launching a new operation from scratch, our <strong>cloud-based contact center software</strong> deploys in as little as four weeks. Pair it with our <Link href="/services/ai-call-center-automation" className="text-red font-semibold hover:underline">AI automation tools</Link> and <Link href="/services/contact-center-software-solutions" className="text-red font-semibold hover:underline">workforce management solutions</Link> for a fully integrated, future-proof customer service platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* OMNICHANNEL CONTACT CENTER SOFTWARE */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Omnichannel Contact Center Software for Seamless CX</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              Today&apos;s customers expect to reach your business on their preferred channel — whether that is phone, live chat, email, SMS, or social media. <strong>Omnichannel contact center software</strong> unifies every channel into a single agent workspace, ensuring consistent customer experiences regardless of how or where the conversation starts. Research from Aberdeen Group shows that companies with strong omnichannel strategies retain 89% of their customers, compared to just 33% for companies with weak cross-channel programs.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Contact Center USA&apos;s <strong>omnichannel contact center software</strong> gives agents a 360-degree view of every customer interaction across all channels. When a customer starts a conversation via live chat and later calls in, the agent instantly sees the full history — no repetition required. Intelligent routing automatically directs interactions to the best-qualified agent based on skill, language, and prior context, reducing average handle time by up to 30%.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Our platform integrates natively with <Link href="/services/omnichannel-contact-center-solutions" className="text-red font-semibold hover:underline">omnichannel solutions</Link> including voice, webchat, Facebook Messenger, WhatsApp, Instagram, and email — all managed from a single pane of glass. Combined with <Link href="/services/customer-experience-analytics" className="text-red font-semibold hover:underline">CX analytics</Link>, you gain deep insight into channel performance and customer journey optimization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* AI-POWERED CONTACT CENTER SOFTWARE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">AI-Powered Contact Center Software &amp; Automation</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              <strong>Contact center AI software</strong> is transforming the way organizations handle customer interactions at scale. From intelligent call routing that matches callers to the most qualified agent, to AI-powered chatbots that resolve up to 40% of inquiries without human intervention, artificial intelligence is driving measurable improvements in efficiency and customer satisfaction. McKinsey reports that AI-enabled contact centers reduce operational costs by 20-30% while improving CSAT scores by 10 or more points.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Contact Center USA&apos;s <strong>contact center AI software</strong> includes real-time sentiment analysis that detects frustrated callers and escalates them automatically, predictive analytics that forecast call volumes with 95%+ accuracy, and agent-assist tools that surface relevant knowledge base articles during live interactions. These capabilities empower your team to deliver faster, more personalized service at every touchpoint.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Our <Link href="/services/ai-call-center-automation" className="text-red font-semibold hover:underline">AI automation platform</Link> integrates seamlessly with your existing <strong>contact center software</strong>, layering intelligence on top of your current workflows without disrupting operations. Whether you are deploying conversational IVR, automated post-call surveys, or predictive workforce scheduling, our AI tools deliver ROI from day one.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CENTER ANALYTICS SOFTWARE */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Contact Center Analytics &amp; Reporting Software</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              <strong>Contact center analytics software</strong> turns raw interaction data into actionable intelligence that drives better business decisions. Real-time dashboards track over 100 KPIs — including average handle time, first-contact resolution, agent occupancy, queue wait times, and customer satisfaction scores — giving supervisors instant visibility into every facet of operations. Organizations that leverage advanced analytics see a 15-25% improvement in operational efficiency, according to Deloitte.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Contact Center USA&apos;s <strong>contact center analytics software</strong> goes beyond basic reporting with customizable drag-and-drop dashboards, automated SLA alerting, and historical trend analysis that reveals patterns across millions of interactions. Speech analytics automatically identifies recurring customer pain points, while sentiment scoring highlights calls that require supervisor review or follow-up action.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Pair our analytics engine with <Link href="/services/customer-experience-analytics" className="text-red font-semibold hover:underline">CX analytics consulting</Link> and <Link href="/services/customer-experience-analytics" className="text-red font-semibold hover:underline">quality assurance services</Link> to build a data-driven contact center that continuously improves. Every dashboard, report, and alert is designed to surface the insights your leadership team needs to optimize workforce performance and reduce cost per contact.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CENTER QA & WORKFORCE MANAGEMENT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Contact Center Quality Assurance &amp; Workforce Management</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              <strong>Contact center quality assurance software</strong> and <strong>contact center workforce management software</strong> are essential pillars of any high-performing operation. QA tools enable automated call scoring across 100% of interactions — not just a random sample — using AI to evaluate compliance, script adherence, empathy, and resolution accuracy. This replaces the outdated practice of manually reviewing 2-3% of calls and provides a complete picture of agent performance.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              On the workforce management side, our <strong>contact center workforce management software</strong> uses AI-driven forecasting to predict call volumes, schedule the right number of agents with the right skills at the right times, and monitor real-time adherence. Businesses using integrated WFM tools typically reduce overstaffing by 15-20% and improve schedule adherence to above 95%, directly lowering labor costs while maintaining service levels.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Contact Center USA combines <strong>quality assurance</strong> scoring, call recording, screen capture, and performance dashboards with full <Link href="/services/contact-center-software-solutions" className="text-red font-semibold hover:underline">workforce management</Link> capabilities — all within a single <strong>contact center software</strong> platform. Supervisors get one unified view for coaching, scheduling, and performance management, eliminating the need for multiple disconnected tools.
            </p>
          </motion.div>
        </div>
      </section>

      {/* HEALTHCARE CONTACT CENTER SOFTWARE */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Healthcare Contact Center Software Solutions</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              <strong>Healthcare contact center software</strong> must meet the strictest regulatory standards while delivering compassionate, efficient patient communication. Contact Center USA&apos;s platform is built from the ground up for <strong>HIPAA compliance</strong>, with end-to-end encryption, role-based access controls, audit logging, and Business Associate Agreements (BAAs) included as standard. Over 60% of healthcare organizations are now adopting cloud-based contact center solutions to improve patient access and reduce administrative burden.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Our <strong>healthcare contact center software</strong> integrates directly with major EHR and EMR systems — including Epic, Cerner, and Athenahealth — enabling agents to access patient records, schedule appointments, process prescription refills, and manage referrals without leaving the contact center interface. Automated appointment reminders via SMS and voice reduce no-show rates by up to 30%, improving both revenue and patient outcomes.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              From <Link href="/industries/healthcare-call-center-services" className="text-red font-semibold hover:underline">hospital systems and health plans</Link> to dental practices and behavioral health providers, our platform supports the unique workflows of every healthcare segment. Combined with our <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound call center services</Link>, you get a complete patient communication solution that scales with your organization.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ENTERPRISE VS SMB CONTACT CENTER SOFTWARE */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Enterprise vs SMB Contact Center Software</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              Choosing the right <strong>contact center software solutions</strong> depends on your organization&apos;s size, complexity, and growth trajectory. <strong>Enterprise contact center software</strong> typically includes advanced features like multi-site management, custom API development, dedicated account engineering, and complex routing logic for thousands of concurrent agents. SMB solutions prioritize simplicity, fast deployment, and predictable per-agent pricing without sacrificing core capabilities like IVR, ACD, and CRM integration.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Contact Center USA bridges the gap with a unified platform that serves both segments equally well. Small and mid-size businesses get enterprise-grade features — <strong>omnichannel contact center software</strong>, AI routing, workforce management, and real-time analytics — without the complexity or cost of enterprise-only vendors. Enterprise clients benefit from dedicated solution architects, custom integrations, SLA-backed uptime guarantees, and white-glove onboarding for large-scale deployments.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Whether you are running a 50-seat <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound contact center</Link> or a 5,000-agent <Link href="/solutions/outbound-call-center-services" className="text-red font-semibold hover:underline">outbound operation</Link>, our <strong>best contact center software</strong> platform scales with your business. Explore our <Link href="/services" className="text-red font-semibold hover:underline">full suite of services</Link> to see how each module works together to drive performance at any scale.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CENTER SOFTWARE PRICING */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl font-bold text-navy sm:text-4xl">Contact Center Software Pricing &amp; Cost Guide</h2>
            <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
              Understanding <strong>contact center software pricing</strong> is critical to making the right investment. Cloud-based platforms typically follow three models: <strong>per-agent pricing</strong> (ranging from $50 to $200+ per seat per month depending on feature tier), <strong>per-minute or per-interaction pricing</strong> (ideal for variable-volume operations), and <strong>enterprise licensing</strong> with custom rates for large deployments. On-premise systems, by contrast, often require $250K-$1M+ in upfront capital expenditure plus ongoing maintenance, hardware refresh, and IT staffing costs.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              Hidden costs are common with many <strong>contact center software solutions</strong> vendors — watch for charges related to implementation, per-integration fees, overage penalties, premium support tiers, and long-term contracts with early termination clauses. Contact Center USA offers transparent, all-inclusive pricing with no hidden fees: core platform features, 50+ integrations, 24/7 support, and automatic updates are included in every plan.
            </p>
            <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
              The ROI of modern <strong>cloud contact center software</strong> is compelling. Businesses migrating from on-premise systems report 40-60% reductions in total cost of ownership, while simultaneously improving agent productivity and customer satisfaction. <Link href="/contact" className="text-red font-semibold hover:underline">Request a custom quote</Link> to see exact pricing for your operation, or explore our <Link href="/case-studies" className="text-red font-semibold hover:underline">case studies</Link> to see the measurable results our clients achieve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* INDUSTRIES */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Rely on Our <span className="text-red">Contact Center Software</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our cloud platform is configured for the compliance, integration, and performance needs of every major industry.</p>
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
                  <div className="mt-1 text-sm text-gray-600">Avg. Efficiency Gain</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  We evaluated a dozen platforms before choosing Contact Center USA&apos;s software. The depth of integrations alone saved us months of custom development, and the real-time dashboards have completely transformed how our supervisors manage the floor. Our agents are 40% more productive since we made the switch.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">SM</div>
                  <div>
                    <div className="font-bold text-navy">Sarah Mitchell</div>
                    <div className="text-sm text-gray-600">Director of Operations, A National Financial Firm</div>
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
              { title: "A.I. Automation", desc: "Enhance your software platform with intelligent chatbots, virtual assistants, and automated workflows that reduce agent workload.", href: "/services/ai-call-center-automation" },
              { title: "CX Analytics", desc: "Unlock deeper insights from your contact center data with advanced analytics, sentiment analysis, and predictive modeling.", href: "/services/customer-experience-analytics" },
              { title: "Omnichannel Solutions", desc: "Extend your software across every channel — voice, chat, email, SMS, and social — in one unified platform.", href: "/services/omnichannel-contact-center-solutions" },
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
      <PageFAQ heading="Contact Center Software FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Upgrade Your Contact Center Software?</h2>
              <p className="mt-3 text-white/60">Discover how our cloud platform can streamline operations and boost agent productivity by 40%.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Demo <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
