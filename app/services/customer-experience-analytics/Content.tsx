"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  LineChart,
  Brain,
  Eye,
  BarChart3,
  Gauge,
  TrendingUp,
  Star,
  Phone,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: LineChart, title: "Customer Journey Mapping", desc: "Visualize and analyze every touchpoint in the customer journey — from first contact to resolution — to identify friction points, drop-off moments, and opportunities to improve satisfaction scores." },
  { icon: Brain, title: "AI Sentiment Analysis", desc: "Real-time AI-powered voice and text analysis that detects customer emotions, frustration levels, and satisfaction during live interactions — enabling agents and supervisors to intervene proactively." },
  { icon: Eye, title: "100% Quality Monitoring", desc: "Automated quality scoring across every single interaction — not just random samples. Speech analytics, keyword detection, and compliance monitoring ensure consistent performance across your entire team." },
  { icon: BarChart3, title: "Executive Dashboards", desc: "Custom-built C-suite and operational dashboards with drill-down capability, trend analysis, automated alerting, and scheduled reporting for key metrics like CSAT, NPS, AHT, and FCR." },
  { icon: Gauge, title: "NPS & CSAT Tracking", desc: "End-to-end survey management with automated distribution, real-time scoring, driver analysis, and closed-loop follow-up processes that turn detractors into promoters systematically." },
  { icon: TrendingUp, title: "Predictive Analytics", desc: "Machine learning models that forecast customer behavior, churn risk, demand patterns, and agent performance — so you can act before problems arise and capitalize on emerging opportunities." },
];

const processSteps = [
  { step: "01", title: "Data Audit & Integration", desc: "We audit your existing data sources, connect your contact center systems and CRM, and establish clean data pipelines to ensure accurate, comprehensive analytics from day one." },
  { step: "02", title: "KPI Framework Design", desc: "Our analytics consultants define your key performance indicators, build custom dashboards tailored to each stakeholder level, and establish baseline benchmarks for measuring improvement." },
  { step: "03", title: "AI Model Deployment", desc: "We deploy sentiment analysis, predictive models, and quality scoring algorithms trained on your data. Every model is calibrated against your specific customer base and industry context." },
  { step: "04", title: "Insight Delivery & Action", desc: "Weekly insight reports with prioritized recommendations. Our team doesn't just deliver data — we translate findings into specific operational actions that drive measurable CX improvement." },
];

const industries = [
  { name: "Financial Services", desc: "Compliance-focused analytics for banks and credit unions — tracking regulatory adherence, customer satisfaction drivers, and risk indicators across every financial interaction.", href: "/industries/financial-services-call-center" },
  { name: "Healthcare", desc: "Patient experience analytics with HIPAA-compliant data handling, appointment satisfaction tracking, and care quality metrics that improve patient outcomes and retention.", href: "/industries/healthcare-call-center-services" },
  { name: "Ecommerce & Retail", desc: "Customer journey analytics across web, mobile, and contact center channels — identifying purchase abandonment drivers and optimizing the path to conversion.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Insurance", desc: "Claims experience analytics, policyholder satisfaction tracking, and renewal prediction models that reduce churn and improve lifetime customer value.", href: "/industries/insurance-call-center-outsourcing" },
  { name: "Technology & SaaS", desc: "Product adoption analytics, support ticket trend analysis, and churn prediction models that help SaaS companies improve retention and expand accounts.", href: "/industries/saas-technology-support" },
  { name: "Telecommunications", desc: "Network quality correlation analytics, service recovery tracking, and competitive benchmarking that reduce churn in high-competition telecom markets.", href: "/industries/telecommunications" },
];

const comparisonData = [
  { feature: "Interaction Coverage", inHouse: "2-5% sample", outsourced: "100% of interactions" },
  { feature: "Sentiment Analysis", inHouse: "Manual review", outsourced: "Real-time AI-powered" },
  { feature: "Time to Insights", inHouse: "Weeks/months", outsourced: "Real-time dashboards" },
  { feature: "Predictive Models", inHouse: "Requires data scientists", outsourced: "Pre-built and custom" },
  { feature: "Dashboard Customization", inHouse: "IT-dependent", outsourced: "Self-service + custom" },
  { feature: "Integration Effort", inHouse: "Months of development", outsourced: "1-2 weeks" },
  { feature: "Ongoing Cost", inHouse: "$200K-$500K/year", outsourced: "Fraction of the cost" },
  { feature: "Actionable Recommendations", inHouse: "Data only", outsourced: "Data + expert guidance" },
];

const faqs = [
  { question: "What does customer experience analytics track?", answer: "CX analytics tracks every customer interaction across all channels — including call duration, resolution rates, sentiment scores, customer effort scores, NPS, CSAT, first-contact resolution, agent performance, queue wait times, and journey drop-off points. Our platform monitors 100+ KPIs in real time and provides both operational and strategic insights." },
  { question: "How can call center analytics improve CSAT scores?", answer: "Analytics identifies the root causes of customer dissatisfaction — whether it's long hold times, repeated transfers, unresolved issues, or agent skill gaps. By surfacing these patterns and enabling data-driven improvements to processes, training, routing, and scripting, businesses typically see a 30-45% improvement in CSAT scores within the first six months." },
  { question: "What is the difference between real-time and historical analytics?", answer: "Real-time analytics provides live dashboards and instant alerts so supervisors can intervene during active interactions — for example, detecting customer frustration and routing to a specialist. Historical analytics reveals trends, patterns, and long-term performance data for strategic planning. Our platform delivers both, giving you immediate visibility and strategic depth." },
  { question: "How does AI sentiment analysis work in a contact center?", answer: "AI sentiment analysis uses natural language processing to analyze customer voice tone, word choice, speech patterns, and text content in real time. The system assigns sentiment scores (positive, neutral, negative) to each interaction and can trigger alerts when a customer's sentiment drops below a threshold — enabling supervisors to intervene before the interaction deteriorates." },
  { question: "How long does it take to implement a CX analytics platform?", answer: "A typical CX analytics implementation takes 2-4 weeks depending on the number of data sources, channels monitored, and dashboard complexity. Contact Center USA handles the full setup — including data integration, model training, dashboard configuration, and user training — so your team has actionable insights without months of development work." },
  { question: "What is predictive analytics in customer service?", answer: "Predictive analytics uses machine learning models trained on historical interaction data to forecast future outcomes — such as which customers are at risk of churning, when call volumes will spike, which agents need coaching, and which issues are trending upward. These predictions enable proactive action rather than reactive firefighting." },
  { question: "How much does a CX analytics platform cost?", answer: "Pricing depends on the number of interactions analyzed, channels monitored, and features required. Contact Center USA offers scalable plans that grow with your business — starting with core analytics (dashboards, quality scoring) and expanding to advanced capabilities (sentiment analysis, predictive models, custom AI). All plans include expert consultation and ongoing optimization." },
];

export function CXAnalyticsContent() {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-management.jpg" alt="Customer Experience Analytics - Call Center Analytics by Contact Center USA" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <LineChart className="h-4 w-4" /> CX Analytics
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Customer Experience <span className="text-red">Analytics</span> That Drive Smarter Decisions
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Go beyond surface-level metrics. Our call center analytics platform reveals hidden patterns in your customer data, empowering you to improve CSAT by 45% and make data-driven decisions at every level.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 45% CSAT Improvement</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 100% Interaction Coverage</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> Real-Time Insights</div>
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
              { value: 360, suffix: "°", label: "Customer View" },
              { value: 100, suffix: "%", label: "Interaction Coverage" },
              { value: 45, suffix: "%", label: "CSAT Improvement" },
              { value: 100, suffix: "+", label: "KPIs Tracked" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS CX ANALYTICS */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is CX Analytics?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                How Call Center <span className="text-red">Analytics</span> Transforms Customer Experience
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Customer experience analytics goes far beyond tracking basic call metrics like handle time and abandonment rates. It encompasses <strong>journey mapping, sentiment analysis, predictive modeling, and quality monitoring</strong> — turning raw interaction data into actionable intelligence that improves every aspect of your customer experience.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our analytics platform analyzes <strong>100% of customer interactions</strong> across every channel — not just random samples. Our AI-powered sentiment analysis detects customer emotions in real time, while predictive models forecast churn risk, demand patterns, and agent performance before issues become problems.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The impact is measurable: clients using our CX analytics platform see a <strong>45% improvement in CSAT scores</strong>, <strong>30% reduction in repeat contacts</strong>, and <strong>identify hidden friction points</strong> that traditional reporting misses. Pair analytics with our <Link href="/services/ai-call-center-automation" className="text-red font-semibold hover:underline">AI automation</Link> and <Link href="/services/contact-center-software-solutions" className="text-red font-semibold hover:underline">contact center software</Link> for a complete intelligence-driven operation.
              </p>

              <div className="mt-8 space-y-3">
                {["100% interaction analysis — not random samples", "Real-time AI sentiment detection across all channels", "Predictive models for churn, demand, and performance", "Custom dashboards for executives, managers, and agents"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-agent-focus.jpg" alt="CX analytics dashboard and team" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">45%</div>
                <div className="text-sm text-white/80">CSAT Improvement</div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-gradient-to-br from-gray-50 via-white to-red/[0.02] py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">Analytics Capabilities</span>
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">CX Analytics <span className="text-red">Features</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From real-time sentiment detection to predictive churn models, our analytics platform gives you complete visibility into every customer interaction.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How CX Analytics <span className="text-red">Implementation</span> Works</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From data audit to actionable insights, we handle the full analytics setup so you get value from week one.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">CX Analytics: <span className="text-red">DIY vs. Contact Center USA</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why businesses choose our managed analytics platform over building analytics capabilities in-house.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Capability</div><div>DIY / In-House</div><div>Contact Center USA</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Benefit from <span className="text-red">CX Analytics</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our analytics platform is tailored to meet the unique compliance, performance, and customer experience needs of every industry.</p>
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
                  <div className="text-4xl font-bold text-navy">45%</div>
                  <div className="mt-1 text-sm text-gray-600">Avg. CSAT Improvement</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Before Contact Center USA, we were making decisions based on gut feel and incomplete data. Their analytics platform gave us a 360-degree view of every customer interaction. Within six months, our CSAT scores jumped 45% and we identified three major friction points we never knew existed. The predictive insights alone have saved us from two potential churn crises.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">LF</div>
                  <div>
                    <div className="font-bold text-navy">Lisa Fernandez</div>
                    <div className="text-sm text-gray-600">Director of Customer Experience, BrightPath Insurance</div>
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
              { title: "A.I. Automation", desc: "Combine analytics insights with AI-powered automation to proactively address customer needs and reduce agent workload.", href: "/services/ai-call-center-automation" },
              { title: "Contact Center Software", desc: "Feed your analytics platform with rich data from our enterprise-grade cloud contact center software.", href: "/services/contact-center-software-solutions" },
              { title: "Customer Acquisition", desc: "Use analytics to optimize acquisition campaigns, improve lead quality, and maximize conversion rates.", href: "/services/customer-acquisition-outsourcing" },
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
      <PageFAQ heading="CX Analytics FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Transform Your Customer Data into Action?</h2>
              <p className="mt-3 text-white/60">See how real-time analytics can improve CSAT scores by 45% and drive smarter decisions across your organization.</p>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="flex flex-wrap items-center gap-4">
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white transition-all hover:bg-red-dark">
                Get a Free Analytics Audit <ArrowRight className="h-4 w-4" />
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
