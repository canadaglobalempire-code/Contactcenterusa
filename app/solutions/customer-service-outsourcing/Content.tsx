"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Headphones,
  MessageSquare,
  UserCheck,
  PackageSearch,
  ShieldCheck,
  Heart,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Headphones, title: "Inbound Customer Support", desc: "Professionally trained US-based agents answering every call with empathy, deep product knowledge, and a commitment to resolving issues on the first contact — no transfers, no runaround." },
  { icon: MessageSquare, title: "Complaint Resolution & De-Escalation", desc: "Skilled agents trained in conflict resolution techniques who transform frustrated callers into loyal brand advocates through active listening, ownership, and fast follow-through." },
  { icon: UserCheck, title: "Proactive Account Management", desc: "Dedicated representatives who monitor account health, conduct wellness check-ins, and identify opportunities to deepen relationships before customers consider leaving." },
  { icon: PackageSearch, title: "Order Tracking & Fulfillment Support", desc: "Real-time order status updates, shipment tracking, delivery coordination, and returns processing that keeps your customers informed and confident at every stage." },
  { icon: ShieldCheck, title: "Customer Retention Programs", desc: "Data-driven retention strategies including loyalty outreach, at-risk customer identification, save offers, and win-back campaigns that measurably reduce churn." },
  { icon: Heart, title: "Customer Satisfaction Monitoring", desc: "Post-interaction CSAT surveys, Net Promoter Score tracking, sentiment analysis, and continuous feedback loops that give you actionable insights to improve the experience." },
];

const processSteps = [
  { step: "01", title: "Discovery & Brand Immersion", desc: "We study your brand voice, products, customer personas, and current pain points. Our team audits existing support workflows to identify quick wins and long-term optimization opportunities." },
  { step: "02", title: "Agent Recruitment & Training", desc: "We recruit agents with industry-relevant backgrounds, then run intensive training covering your products, systems, tone of voice, escalation paths, and quality benchmarks — no one goes live until certified." },
  { step: "03", title: "System Integration & Pilot", desc: "We integrate with your CRM, ticketing, and telephony platforms, then launch a controlled pilot to validate scripts, workflows, and KPIs before scaling to full production volume." },
  { step: "04", title: "Ongoing Optimization & Reporting", desc: "Continuous coaching, call calibration, and real-time dashboards ensure performance improves month over month. You receive weekly reports on CSAT, FCR, AHT, and every metric that matters." },
];

const industries = [
  { name: "Ecommerce & Retail", desc: "Order inquiries, returns, exchanges, loyalty programs, and peak-season surge support for DTC brands and online retailers.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Healthcare", desc: "HIPAA-compliant patient support, appointment scheduling, insurance verification, and compassionate communication for providers.", href: "/industries/healthcare-call-center-services" },
  { name: "Financial Services", desc: "Account inquiries, transaction disputes, fraud reporting, and PCI-compliant support for banks, credit unions, and fintech companies.", href: "/industries/financial-services-call-center" },
  { name: "Technology & SaaS", desc: "Onboarding assistance, subscription management, billing support, and user education for software and technology companies.", href: "/industries/saas-technology-support" },
  { name: "Insurance", desc: "Policy inquiries, claims status updates, open enrollment support, and compliance-focused customer communication for carriers.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Real Estate", desc: "Tenant communication, property inquiry handling, maintenance coordination, and investor relations support for property management firms.", href: "/industries/real-estate-call-center-services" },
];

const comparisonData = [
  { feature: "Startup Timeline", inHouse: "3-6 months hiring", outsourced: "2-4 weeks" },
  { feature: "Annual Cost Per Agent", inHouse: "$55K-$75K + benefits", outsourced: "40-60% less" },
  { feature: "Training & Onboarding", inHouse: "You build from scratch", outsourced: "Proven programs included" },
  { feature: "24/7 Coverage", inHouse: "3 shifts + overtime", outsourced: "Included standard" },
  { feature: "Quality Monitoring", inHouse: "Manual, resource-heavy", outsourced: "Built-in QA team" },
  { feature: "Scalability", inHouse: "Months to add headcount", outsourced: "Scale in days" },
  { feature: "Technology Stack", inHouse: "$50K-$200K in software", outsourced: "Enterprise tools included" },
  { feature: "Risk & Flexibility", inHouse: "Long-term commitments", outsourced: "No contracts, cancel anytime" },
];

const faqs = [
  { question: "What makes your customer service outsourcing different from offshore providers?", answer: "Every agent on our team is based in the United States. That means zero language barriers, natural cultural alignment with American consumers, and no time zone complications. Our agents understand regional nuances, slang, and expectations — delivering interactions that feel like they come from your own team, not a distant call center." },
  { question: "How do you train agents on our specific products and brand voice?", answer: "We run a comprehensive onboarding process that includes product deep-dives, brand voice workshops, system certifications, live call shadowing, and mock scenario testing. Agents do not take a single live call until they pass quality benchmarks. Beyond launch, we conduct ongoing coaching, weekly calibration sessions, and quarterly refresher training as your products evolve." },
  { question: "Can you handle omnichannel customer service across phone, email, chat, and social?", answer: "Absolutely. We provide unified support across phone, email, live chat, SMS, and social media platforms including Facebook, Instagram, and Twitter. All interactions are tracked in a single platform so customers receive consistent, context-aware service regardless of how they reach out — and agents can see the full history across channels." },
  { question: "What customer service KPIs do you track and report on?", answer: "We track customer satisfaction score (CSAT), Net Promoter Score (NPS), first-call resolution (FCR), average handle time (AHT), average speed to answer (ASA), abandonment rate, ticket backlog, and agent quality scores. You receive real-time dashboards plus detailed weekly and monthly reports with trend analysis and improvement recommendations." },
  { question: "How quickly can you scale customer service teams up or down?", answer: "We can scale teams within 2-4 weeks for planned growth and have rapid-deployment protocols for unexpected volume spikes like product launches or seasonal surges. Our flexible staffing model means you only pay for the capacity you need — no long-term headcount commitments or idle agents during slow periods." },
  { question: "How much does customer service outsourcing cost?", answer: "Pricing depends on volume, hours of coverage, channel mix, and complexity. We offer per-minute, per-contact, and dedicated agent pricing models. Most clients save 40-60% compared to maintaining equivalent in-house teams when you factor in salaries, benefits, training, technology, and management overhead. We provide transparent quotes with no hidden fees." },
  { question: "What industries do you provide customer service outsourcing for?", answer: "We serve ecommerce, healthcare, financial services, technology, insurance, real estate, legal, hospitality, and more. Each industry vertical has dedicated agent pools with specialized training — including HIPAA compliance for healthcare, PCI DSS for financial, and product-specific certifications for technology clients." },
];

export default function CustomerServiceContent() {
  return (
    <>
      {/* HERO — Image bg + form */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-agent-headset.jpg" alt="Customer Service Outsourcing USA - Contact Center USA" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Headphones className="h-4 w-4" /> Customer Service Outsourcing
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                World-Class Customer <span className="text-red">Service Outsourcing</span> — 100% US-Based
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Deliver the exceptional customer support your brand deserves with professionally trained, US-based agents who handle every interaction with empathy, expertise, and a commitment to first-call resolution.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 93% CSAT Score</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 85% First-Call Resolution</div>
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
              { value: 93, suffix: "%", label: "Customer Satisfaction" },
              { value: 85, suffix: "%", label: "First-Call Resolution" },
              { value: 30, suffix: "sec", label: "Avg Speed to Answer" },
              { value: 24, suffix: "/7", label: "Availability" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS CUSTOMER SERVICE OUTSOURCING — Long-form content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is Customer Service Outsourcing?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Why Businesses <span className="text-red">Outsource</span> Customer Support
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Customer service outsourcing means partnering with a <strong>specialized contact center provider</strong> to handle your customer interactions — phone calls, emails, live chats, and social media messages — on your behalf. Instead of recruiting, training, and managing an in-house support team, you leverage a partner&apos;s infrastructure, expertise, and trained agents to deliver exceptional experiences at a fraction of the cost.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, we go beyond basic call answering. Our agents become a <strong>true extension of your brand</strong>, completing intensive product training, adopting your tone of voice, and using your systems as if they were your own employees. The result is seamless support that your customers cannot distinguish from an in-house team — with the flexibility and cost advantages of outsourcing.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Companies that outsource customer service with us typically see a <strong>40-60% reduction in support costs</strong>, <strong>15-20 point improvement in CSAT scores</strong>, and the ability to offer <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">24/7 inbound support</Link> without the overhead of night shifts. Combined with our <Link href="/services/omnichannel-contact-center-solutions" className="text-red font-semibold hover:underline">omnichannel capabilities</Link>, your customers get consistent service across every channel.
              </p>

              <div className="mt-8 space-y-3">
                {["90%+ customer satisfaction with US-based agents", "Seamless brand representation across every channel", "Scale support up or down in days, not months", "Enterprise-grade technology included at no extra cost"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-team-desk.jpg" alt="US-based customer service agents at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">93%</div>
                <div className="text-sm text-white/80">CSAT Score</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES — 6 cards */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Our Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Customer Service <span className="text-red">Solutions</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From frontline support to proactive retention, our customer service outsourcing covers every touchpoint in the customer journey.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Customer Service Outsourcing <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From brand immersion to ongoing optimization, we handle everything so your customers get the support they deserve.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Customer Service: <span className="text-red">In-House vs. Outsourced</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why growing businesses choose Contact Center USA over building and managing in-house support teams.</p>
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

      {/* WHY OUTSOURCING CUSTOMER SERVICE DRIVES GROWTH */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Why <span className="text-red">Outsourcing Customer Service</span> Drives Business Growth</h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Companies that <strong>outsource customer service</strong> unlock measurable advantages that directly impact the bottom line. Research shows that <strong>customer service outsourcing</strong> reduces operational costs by 40-60% compared to maintaining in-house teams, while simultaneously improving customer satisfaction scores by 15-20 points on average. The math is compelling: instead of spending $55,000-$75,000 per in-house agent (including salary, benefits, training, and technology), outsourced support delivers the same — or better — quality at a fraction of the cost.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Beyond cost savings, <strong>outsourcing customer service</strong> provides instant scalability. Whether you need to ramp up 50 agents for a product launch or scale down after peak season, a dedicated outsourcing partner adjusts capacity in days, not months. This elasticity is critical for high-growth businesses where customer demand is unpredictable. Our clients also benefit from built-in quality assurance, <Link href="/services/customer-experience-analytics" className="text-red font-semibold hover:underline">advanced CX analytics</Link>, and enterprise-grade technology — all included without additional capital expenditure.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ECOMMERCE CUSTOMER SERVICE OUTSOURCING */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl"><span className="text-red">Ecommerce Customer Service Outsourcing</span></h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Online retailers face unique support challenges that make <strong>ecommerce customer service outsourcing</strong> essential for growth. Peak season surges during Black Friday, Cyber Monday, and holiday shopping can triple or quadruple ticket volume overnight — and customers expect fast, knowledgeable responses across live chat, email, phone, and social media simultaneously. Our <strong>ecommerce customer service outsourcing</strong> teams specialize in order tracking, returns and exchanges, payment troubleshooting, product recommendations, and loyalty program management.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                We integrate directly with Shopify, WooCommerce, Magento, and custom platforms, giving agents real-time access to order data, inventory levels, and shipping status. Our trained specialists handle pre-purchase questions that convert browsers into buyers, reducing cart abandonment by up to 25%. Whether you are a DTC brand doing $5M or an enterprise retailer processing thousands of orders daily, our <Link href="/industries/ecommerce-customer-service-outsourcing" className="text-red font-semibold hover:underline">ecommerce support solutions</Link> scale with your business seamlessly.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HEALTHCARE CUSTOMER SERVICE OUTSOURCING */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl"><span className="text-red">Healthcare Customer Service Outsourcing</span></h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                <strong>Healthcare customer service outsourcing</strong> requires a partner that understands the stakes: patient trust, regulatory compliance, and the sensitive nature of every interaction. Contact Center USA provides fully <strong>HIPAA-compliant customer service outsourcing</strong> with agents trained in protected health information (PHI) handling, patient communication best practices, and healthcare-specific workflows including appointment scheduling, prescription refill support, insurance verification, and billing inquiries.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Our healthcare support teams operate on encrypted, audited systems that meet the strictest data security standards. Patients receive compassionate, knowledgeable assistance from US-based agents who understand medical terminology and the urgency of healthcare communication. Providers, health systems, and medical practices that <strong>outsource customer service</strong> to our team see faster appointment fill rates, fewer no-shows, and improved patient satisfaction scores. Learn more about our <Link href="/industries/healthcare-call-center-services" className="text-red font-semibold hover:underline">healthcare industry solutions</Link>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* HOW TO CHOOSE A CUSTOMER SERVICE OUTSOURCING COMPANY */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl"><span className="text-red">Customer Service Outsourcing Companies</span>: How to Choose the Right Partner</h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Not all <strong>customer service outsourcing companies</strong> are created equal. When evaluating potential partners, look for providers that offer 100% US-based agents, transparent pricing with no hidden fees, and the flexibility to scale without long-term contracts. Ask about their agent hiring process, training methodology, and quality assurance programs. A reputable <strong>customer service outsourcing company</strong> should be able to share specific CSAT, FCR, and AHT benchmarks from current clients in your industry.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Red flags to watch for include outsourcers who lock you into multi-year contracts, refuse to share performance data, or cannot articulate their agent training process. The best <strong>customer support outsourcing services</strong> function as true extensions of your brand, not generic call centers. At Contact Center USA, we invite prospects to tour our facilities, meet their dedicated team, and review live performance dashboards before signing. <Link href="/contact" className="text-red font-semibold hover:underline">Request a consultation</Link> to see how we compare.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* THE TRUE COST OF CUSTOMER SERVICE OUTSOURCING */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">The True Cost of <span className="text-red">Customer Service Outsourcing</span></h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Understanding the real cost of <strong>customer service outsourcing</strong> requires looking beyond the per-agent or per-minute rate. In-house customer service teams cost $55,000-$75,000 per agent annually when you factor in salary, health insurance, 401k contributions, paid time off, training, management overhead, and technology licensing. <strong>Business process outsourcing customer service</strong> providers typically deliver the same or higher quality at 40-60% lower total cost because infrastructure, technology, and management are shared across clients.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Common pricing models include per-minute billing (ideal for lower volume), per-contact pricing (predictable cost per ticket), and dedicated agent models (best for complex or high-volume programs). The ROI calculation should also account for reduced turnover costs, eliminated recruiting expenses, and the value of 24/7 coverage without overtime premiums. For a detailed cost breakdown, read our guide on <Link href="/blog/call-center-outsourcing-cost" className="text-red font-semibold hover:underline">call center outsourcing costs</Link>.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* OMNICHANNEL CUSTOMER SUPPORT OUTSOURCING */}
      <section className="bg-gray-50 py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Omnichannel <span className="text-red">Customer Support Outsourcing</span></h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Modern customers expect seamless support across every channel, which is why <strong>customer support outsourcing services</strong> must include true omnichannel capabilities. At Contact Center USA, our <strong>customer service call center outsourcing</strong> platform unifies phone, email, live chat, SMS, and social media interactions into a single agent desktop. This means when a customer emails about an issue and then calls for a follow-up, the agent sees the full conversation history instantly — no repetition, no frustration.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                Our omnichannel approach is not just about offering multiple channels — it is about delivering consistent, context-aware service regardless of how customers reach out. Agents are cross-trained to handle voice and digital channels with equal proficiency, and intelligent routing ensures every interaction reaches the most qualified agent. Businesses that adopt omnichannel <strong>customer service outsourcing</strong> see 23% higher customer satisfaction and 18% faster resolution times. Explore our <Link href="/services/omnichannel-contact-center-solutions" className="text-red font-semibold hover:underline">omnichannel solutions</Link> to learn more.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INSURANCE & FINANCIAL SERVICES CUSTOMER SERVICE OUTSOURCING */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <h2 className="text-3xl font-bold text-navy sm:text-4xl">Customer Service Outsourcing for <span className="text-red">Insurance & Financial Services</span></h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                <strong>Insurance agency customer service outsourcing</strong> demands rigorous compliance, data security, and industry expertise. Our agents are PCI DSS certified and trained in secure transaction handling, ensuring that every policyholder inquiry, claims status update, premium payment, and coverage question is managed with the highest level of accuracy and confidentiality. We support property and casualty carriers, life insurance providers, health insurance plans, and independent agencies with dedicated, compliance-focused teams.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                For financial services firms, our <strong>customer service outsourcing</strong> covers account inquiries, transaction dispute resolution, fraud reporting, and regulatory-compliant communication. Our agents understand the sensitivity of financial interactions and are trained to follow strict verification protocols, call recording standards, and audit trail requirements. Whether you need support for open enrollment surges, claims processing, or ongoing policyholder communication, we deliver. Learn more about our <Link href="/industries/insurance-call-center-outsourcing" className="text-red font-semibold hover:underline">insurance</Link> and <Link href="/industries/financial-services-call-center" className="text-red font-semibold hover:underline">financial services</Link> solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INDUSTRIES THAT BENEFIT */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Industries</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Benefit from <span className="text-red">Customer Service Outsourcing</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our customer service outsourcing solutions are tailored for the compliance, volume, and complexity requirements of every major industry.</p>
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
                  <div className="text-4xl font-bold text-navy">93%</div>
                  <div className="mt-1 text-sm text-gray-600">Avg CSAT Score</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Since partnering with Contact Center USA for our customer service outsourcing, our CSAT scores jumped from 78% to 93%. Their agents feel like a genuine extension of our team — they know our products inside and out, and our customers love the experience. We&apos;ve cut support costs by 52% while actually improving quality.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">DT</div>
                  <div>
                    <div className="font-bold text-navy">D.T.</div>
                    <div className="text-sm text-gray-600">Chief Customer Officer, A National Home Services Company</div>
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
              { title: "Technical Support", desc: "Extend your customer service with specialized Tier 1-3 technical troubleshooting and IT help desk support for complex product issues.", href: "/solutions/technical-support-outsourcing" },
              { title: "Inbound Services", desc: "Professional live answering, order taking, and after-hours support that ensures no customer call ever goes unanswered.", href: "/solutions/inbound-call-center-services" },
              { title: "Omnichannel Solutions", desc: "Unify customer service across voice, chat, email, SMS, and social media for a seamless experience on every channel.", href: "/services/omnichannel-contact-center-solutions" },
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
      <PageFAQ heading="Customer Service Outsourcing FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Customer Service?</h2>
              <p className="mt-3 text-white/60">See how outsourcing customer service can cut costs by 50% and boost satisfaction scores for your business.</p>
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
