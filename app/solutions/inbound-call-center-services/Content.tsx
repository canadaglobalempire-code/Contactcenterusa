"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  PhoneIncoming,
  ShoppingBag,
  Headset,
  CalendarCheck,
  Moon,
  BarChart3,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: PhoneIncoming, title: "Live Call Answering", desc: "Every inbound call is answered by a trained, US-based professional within seconds — no voicemail, no IVR mazes, no missed opportunities. Your callers speak to a real person, every time." },
  { icon: ShoppingBag, title: "Order Taking & Processing", desc: "Agents capture orders accurately across phone, chat, and email with real-time integration into your fulfillment, inventory, and payment systems for seamless order processing." },
  { icon: Headset, title: "Help Desk & Product Support", desc: "Frontline support for product questions, troubleshooting, warranty claims, and general inquiries — with documented escalation procedures for complex issues." },
  { icon: CalendarCheck, title: "Appointment Scheduling & Reservations", desc: "Real-time booking, appointment scheduling, and calendar management integrated with your existing platforms — from medical offices to service businesses to restaurants." },
  { icon: Moon, title: "After-Hours & Overflow Support", desc: "Round-the-clock coverage ensuring your customers reach a live, knowledgeable agent during nights, weekends, holidays, and unexpected call volume spikes." },
  { icon: BarChart3, title: "Call Analytics & Quality Monitoring", desc: "Comprehensive reporting on call volumes, peak times, resolution rates, hold times, and customer sentiment — plus recorded calls and QA scoring for continuous improvement." },
];

const processSteps = [
  { step: "01", title: "Needs Assessment & Scoping", desc: "We analyze your current call patterns, peak volumes, common inquiries, and service gaps. We map your customer journey to design the optimal inbound support structure." },
  { step: "02", title: "Script Development & Training", desc: "Custom call scripts, knowledge bases, and decision trees are built around your brand. Agents complete product certifications and mock call testing before taking a single live call." },
  { step: "03", title: "System Integration & Go-Live", desc: "We connect with your CRM, booking systems, and telephony infrastructure. A controlled launch validates call routing, escalation paths, and data flow before scaling to full volume." },
  { step: "04", title: "Performance Monitoring & Tuning", desc: "Real-time dashboards, weekly calibration sessions, and monthly business reviews ensure service levels improve continuously. We adapt scripts and staffing as your business evolves." },
];

const industries = [
  { name: "Healthcare", desc: "HIPAA-compliant appointment scheduling, patient intake, after-hours nurse triage lines, and prescription refill call handling for clinics and hospitals.", href: "/industries/healthcare-call-center-services" },
  { name: "Ecommerce & Retail", desc: "Order taking, product inquiries, returns and exchanges, loyalty program support, and peak-season overflow during Black Friday and holiday rushes.", href: "/industries/ecommerce-customer-service-outsourcing" },
  { name: "Legal Services", desc: "Professional intake for new client inquiries, appointment booking, message relay to attorneys, and after-hours emergency call routing for law firms.", href: "/industries" },
  { name: "Real Estate", desc: "Property inquiry handling, showing scheduling, tenant maintenance requests, and investor communication for property management and real estate firms.", href: "/industries/real-estate-call-center-services" },
  { name: "Financial Services", desc: "Account balance inquiries, transaction support, loan application intake, and PCI-compliant payment processing for banks and credit unions.", href: "/industries/financial-services-call-center" },
  { name: "Home Services", desc: "Service call dispatching, emergency repair scheduling, estimate requests, and customer follow-up for HVAC, plumbing, electrical, and restoration companies.", href: "/industries" },
];

const comparisonData = [
  { feature: "Startup Time", inHouse: "2-4 months hiring", outsourced: "2-3 weeks" },
  { feature: "Cost Per Agent", inHouse: "$45K-$65K + benefits", outsourced: "40-50% less" },
  { feature: "After-Hours Coverage", inHouse: "Overtime or voicemail", outsourced: "24/7 included" },
  { feature: "Holiday Coverage", inHouse: "Premium pay required", outsourced: "Included standard" },
  { feature: "Call Volume Spikes", inHouse: "Missed calls, long hold times", outsourced: "Instant overflow scaling" },
  { feature: "Technology & Systems", inHouse: "Purchase & maintain", outsourced: "Enterprise tools included" },
  { feature: "Quality Assurance", inHouse: "Build QA program", outsourced: "Dedicated QA team" },
  { feature: "Flexibility", inHouse: "Fixed headcount costs", outsourced: "Pay only for what you use" },
];

const faqs = [
  { question: "What are inbound call center services?", answer: "Inbound call center services handle all incoming customer communications on your behalf — including live phone answering, order taking, help desk support, appointment scheduling, after-hours coverage, and overflow call handling. Our US-based agents act as a seamless extension of your team, answering in your company name with full access to your systems and knowledge base." },
  { question: "Do you provide 24/7 live call answering?", answer: "Yes. We provide round-the-clock live answering 24 hours a day, 7 days a week, 365 days a year — including nights, weekends, and every holiday. Your customers always reach a trained, knowledgeable agent regardless of when they call. There is no voicemail and no automated phone tree unless you specifically request one." },
  { question: "How do your agents learn our products and systems?", answer: "We build custom training programs based on your product documentation, FAQs, call scenarios, and real call recordings. Agents complete hands-on certification before going live and receive ongoing training as your products evolve. We maintain detailed knowledge bases with searchable articles, decision trees, and troubleshooting guides for quick reference during calls." },
  { question: "Can inbound services integrate with our CRM and booking systems?", answer: "Absolutely. We integrate with popular platforms including Salesforce, HubSpot, Zoho, ServiceNow, Calendly, Acuity, and dozens more. We also work with custom APIs and proprietary systems. All call data, orders, appointments, and customer notes sync in real time so your team has complete visibility." },
  { question: "How do you handle call volume spikes and overflow?", answer: "Our flexible staffing model means we can absorb unexpected volume spikes — from seasonal rushes to product launches to marketing campaigns — without any drop in service quality. We also offer dedicated overflow programs where calls route to us only when your in-house team is at capacity, so you never miss a call." },
  { question: "How much do inbound call center services cost?", answer: "Pricing depends on call volume, hours of coverage, and complexity. We offer per-minute, per-call, and dedicated agent models to fit different budgets and call patterns. Most clients save 30-50% compared to hiring in-house receptionists or support staff when you factor in salaries, benefits, technology, management, and facilities costs." },
  { question: "What is the difference between inbound and outbound call center services?", answer: "Inbound services handle incoming calls from your customers — support inquiries, orders, appointments, and after-hours coverage. Outbound services involve proactively calling prospects or customers for telemarketing, lead generation, surveys, and follow-ups. Many businesses use both: our inbound team handles the incoming volume while our outbound team drives new revenue through proactive outreach." },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Inbound Call Center Services in USA",
    heading: "The inbound call center services partner US brands trust to answer every customer call, every hour of the day.",
    accent: "trust to answer",
    body: [
      "Contact Center USA is one of the best inbound call center services providers in the USA — a 100% US-based inbound bpo usa operator delivering live call answering, order taking, help desk, appointment scheduling, and customer care from secure domestic facilities.",
      "For businesses searching for 24/7 inbound support outsourcing that protects revenue and brand, we replace missed calls, long hold times, and offshore-accent complaints with trained on-shore agents answering within 15 seconds — 99.9% of the time, every single day of the year.",
    ],
    stats: [
      { stat: "<15s", label: "Average speed to answer across every inbound queue" },
      { stat: "99.9%", label: "Call answer rate — no voicemail, no IVR mazes, no dropped calls" },
      { stat: "24/7/365", label: "Always-on inbound bpo usa coverage — nights, weekends, holidays" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House vs. Contact Center USA BPO",
    intro:
      "Every operations leader faces the same decision: keep answering inbound calls with an internal team or partner with a specialist for inbound call center services. Here's how the two compare on the factors that drive CSAT, revenue capture, and cost.",
    leftTitle: "Internal In-House Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Coverage Hours",
        left: "Business hours only — calls outside 9–5 go to voicemail or automated IVR.",
        right: "True 24/7/365 inbound support outsourcing — nights, weekends, and holidays covered.",
        leftYes: false,
      },
      {
        label: "Speed to Answer",
        left: "Hold times of 2–5 minutes during peaks; abandon rates spike above 15%.",
        right: "Under 15 seconds average speed to answer — abandon rate below 3%.",
        leftYes: false,
      },
      {
        label: "Cost per Call",
        left: "$8–$12 fully loaded per inbound call — fixed regardless of volume.",
        right: "30–45% lower cost per call with variable, volume-based inbound bpo usa pricing.",
        leftYes: false,
      },
      {
        label: "Surge Capacity",
        left: "Marketing launches, outages, and seasonal peaks crush fixed internal staffing.",
        right: "Pre-positioned surge capacity — no dropped calls during product launches or incidents.",
        leftYes: false,
      },
      {
        label: "Technology Stack",
        left: "$80K+ annually for telephony, IVR, WFM, QA, and recording licenses.",
        right: "Enterprise inbound stack included — ACD, IVR, WFM, QA, and real-time dashboards.",
        leftYes: false,
      },
      {
        label: "Training & Attrition",
        left: "Constant hiring, onboarding, and attrition eat management bandwidth.",
        right: "Attrition, QA, coaching, and continuous training fully managed for you.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our 24/7 Inbound Support Outsourcing Process",
    intro:
      "Every inbound call center services engagement follows the same disciplined five-step playbook — designed to capture every call, protect your brand voice, and prove ROI in the first 60 days.",
    steps: [
      {
        title: "Discovery & Scripting",
        body: "Map every inbound call type, rebuild IVR and routing logic, and co-author on-brand scripts and objection handlers.",
      },
      {
        title: "Secure Integrations",
        body: "Connect CRM, order management, helpdesk, and knowledge base via secure APIs — single pane of glass for agents.",
      },
      {
        title: "Agent Training & Certification",
        body: "Every inbound agent is trained on your products, policies, and compliance requirements before handling a single call.",
      },
      {
        title: "Go-Live with Pilot",
        body: "Launch a pilot queue, validate SLAs, CSAT, and FCR — then ramp 24/7 coverage across all inbound channels.",
      },
      {
        title: "Optimize & Report",
        body: "Real-time dashboards track ASA, AHT, FCR, CSAT, and conversion — with weekly reviews to tune performance.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Inbound BPO USA",
    intro:
      "Each vertical carries its own inbound dynamics, compliance overlays, and customer expectations. Our workflows are tuned to the specific requirements of the sectors we serve.",
    items: [
      {
        icon: "heart-pulse",
        stat: "HIPAA",
        title: "Healthcare & Medical",
        body: "Patient intake, appointment scheduling, insurance verification, and nurse triage — HIPAA-compliant end to end.",
      },
      {
        icon: "shopping-bag",
        stat: "PCI",
        title: "Ecommerce & Retail",
        body: "Order taking, product inquiries, return/exchange handling, and peak-season surge coverage for retailers and DTC brands.",
      },
      {
        icon: "landmark",
        stat: "SOC 2",
        title: "Financial Services",
        body: "Account servicing, card activation, fraud alerts, and general inbound support for banks, fintechs, and insurers.",
      },
      {
        icon: "laptop",
        stat: "24/7",
        title: "SaaS & Technology",
        body: "Tier 1 help desk, trial conversion support, and after-hours inbound support outsourcing for SaaS and tech brands.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for Inbound Call Center Services",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore inbound BPOs deliver cost savings but pay for it in CSAT — accent bias, cultural distance, and inconsistent product knowledge cause abandoned calls and lost revenue. Answering services cover the basics but cannot handle complex inquiries, sales, or technical support. Enterprise vendors bury you in volume commitments with hidden fees.",
      "Contact Center USA is different: a 100% US-based inbound bpo usa partner operating from secure domestic facilities, staffed by trained on-shore agents, with volume-based pricing and no long-term contracts — so every call is answered by someone who sounds like your customer, on a platform that proves ROI every single month.",
    ],
    bullets: [
      "100% US-based agents for all inbound call center services — no offshore handoffs",
      "True 24/7/365 inbound support outsourcing coverage",
      "Under 15 seconds average speed to answer with <3% abandon rate",
      "Full enterprise stack included — ACD, IVR, WFM, QA, and dashboards",
      "Go-live within 15 business days; no long-term contracts required",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better inbound call center services partner?",
    accent: "better inbound call center",
    body: "If your inbound queues are overflowing, your after-hours calls are going to voicemail, or your current inbound bpo usa vendor is missing SLAs, request a free consultation. We'll benchmark your current call volume, ASA, abandon rate, and cost-per-call — then show you exactly what 24/7 inbound support outsourcing with Contact Center USA would look like.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function InboundServicesContent() {
  return (
    <>
      {/* HERO — Image bg + form */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-woman-headset.jpg" alt="Inbound Call Center Services USA - Contact Center USA" fill className="object-cover object-top" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <PhoneIncoming className="h-4 w-4" /> Inbound Call Center Services
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Professional Inbound <span className="text-red">Call Center Services</span> — Never Miss a Call
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Every missed call is a missed opportunity. Our US-based agents deliver prompt, professional live answering, order taking, and customer support around the clock — 24/7/365.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 99.9% Answer Rate</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 20-Second Avg Answer</div>
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
              { value: 99, suffix: "%", label: "Call Answer Rate" },
              { value: 45, suffix: "%", label: "Conversion Increase" },
              { value: 20, suffix: "sec", label: "Avg Speed to Answer" },
              { value: 10, suffix: "M+", label: "Calls Handled Annually" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT ARE INBOUND SERVICES — Long-form content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What Are Inbound Services?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Why Every Missed Call <span className="text-red">Costs You</span> Revenue
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Inbound call center services handle all <strong>incoming customer communications</strong> on your behalf — phone calls, live chats, emails, and messages. Instead of letting calls go to voicemail, miss after-hours inquiries, or force customers through frustrating automated menus, you get <strong>trained, US-based professionals</strong> who answer promptly and represent your brand with care.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our inbound services go far beyond basic answering. Our agents are trained on your products, systems, and brand voice — handling everything from <strong>order taking and appointment scheduling</strong> to <strong>help desk support and emergency dispatching</strong>. They work inside your CRM, follow your scripts, and escalate according to your rules.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The impact is measurable: businesses using our inbound services see <strong>45% higher conversion rates</strong> on incoming inquiries, <strong>30-50% lower support costs</strong> compared to in-house staff, and the ability to provide <Link href="/solutions/customer-service-outsourcing" className="text-red font-semibold hover:underline">24/7 customer service</Link> without the overhead. Pair with our <Link href="/solutions/outbound-call-center-services" className="text-red font-semibold hover:underline">outbound services</Link> for a complete contact center solution.
              </p>

              <div className="mt-8 space-y-3">
                {["Every call answered live within 20 seconds — no voicemail", "Trained on your products, scripts, and brand voice", "24/7/365 coverage including holidays and weekends", "Instant overflow scaling during volume spikes"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-agent-call.jpg" alt="Inbound call center agents answering calls at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">99.9%</div>
                <div className="text-sm text-white/80">Answer Rate</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Inbound <span className="text-red">Services</span> We Provide</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From live answering to after-hours support, our inbound solutions ensure every customer interaction creates a positive impression.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Inbound Services <span className="text-red">Work</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From scoping to optimization, we build an inbound program tailored to your business — so every call creates value.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Inbound Support: <span className="text-red">In-House vs. Outsourced</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why businesses choose outsourced inbound services over hiring and managing in-house receptionists and support staff.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Rely on <span className="text-red">Inbound Services</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our inbound call center solutions are customized for the unique needs, compliance requirements, and call patterns of every major industry.</p>
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
                  <div className="mt-1 text-sm text-gray-600">Avg Conversion Increase</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Before Contact Center USA, we were missing 30% of our after-hours calls. Now every call is answered within 20 seconds by a live agent who knows our products inside and out. Our inbound sales conversions increased 45% in the first quarter, and our patient satisfaction scores are at an all-time high.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">MC</div>
                  <div>
                    <div className="font-bold text-navy">Michael Chen</div>
                    <div className="text-sm text-gray-600">CEO, Pacific Coast Medical Supplies</div>
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
              { title: "Customer Service", desc: "Full-spectrum customer support including complaint resolution, account management, and retention programs for long-term loyalty.", href: "/solutions/customer-service-outsourcing" },
              { title: "Technical Support", desc: "Specialized Tier 1-3 technical troubleshooting for complex product and IT inquiries that go beyond general help desk support.", href: "/solutions/technical-support-outsourcing" },
              { title: "Outbound Services", desc: "Complement your inbound operations with proactive outreach, follow-ups, telemarketing campaigns, and win-back programs.", href: "/solutions/outbound-call-center-services" },
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
      <PageFAQ heading="Inbound Call Center Services FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Stop Missing Calls — Start Converting More Customers</h2>
              <p className="mt-3 text-white/60">See how professional inbound services can capture every opportunity and grow your revenue.</p>
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
