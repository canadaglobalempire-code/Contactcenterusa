"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Star,
  Phone,
  Megaphone,
  Target,
  CalendarPlus,
  Database,
  BarChart3,
  Filter,
} from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";
import { PageFAQ } from "@/components/shared/PageFAQ";
import { SEOContentSection, type SEOPattern } from "@/components/shared/SEOContentSection";
import { siteConfig } from "@/lib/seo-config";

const features = [
  { icon: Megaphone, title: "Strategic Cold Calling", desc: "Targeted outbound calling campaigns executed by skilled communicators who engage decision-makers, create genuine interest, and open doors for your sales team — not just dial-for-dollars volume." },
  { icon: Filter, title: "BANT Lead Qualification", desc: "Rigorous qualification using Budget, Authority, Need, and Timeline frameworks — plus custom criteria tailored to your ideal customer profile — so your sales team only pursues ready buyers." },
  { icon: CalendarPlus, title: "B2B Appointment Setting", desc: "Professionally booked meetings with verified decision-makers, complete with confirmed details, attendee context, and calendar integration directly into your sales team&apos;s workflow." },
  { icon: Database, title: "Prospect Database Building", desc: "Clean, verified prospect databases built through multi-source research, data enrichment, contact validation, and segmentation to power targeted outreach campaigns." },
  { icon: BarChart3, title: "End-to-End Campaign Management", desc: "Full lifecycle campaign execution — from ICP definition and list development through scripting, calling, tracking, reporting, and continuous performance optimization." },
  { icon: Target, title: "Market Research & Intelligence", desc: "Competitive intelligence gathering, customer discovery calls, market sizing surveys, and go-to-market research that inform your strategy with real-world data from actual conversations." },
];

const processSteps = [
  { step: "01", title: "ICP Definition & List Building", desc: "We work with your sales team to define your ideal customer profile, build targeted prospect databases, validate contact data, and segment lists by industry, role, company size, and geography." },
  { step: "02", title: "Script & Campaign Design", desc: "Our team crafts consultative call scripts with objection-handling branches, value propositions tailored to each segment, and qualification questions that surface genuine buying intent." },
  { step: "03", title: "Pilot Calling & Optimization", desc: "We launch a controlled pilot, test messaging variations, measure contact and conversion rates, and refine the approach based on real data before scaling to full campaign volume." },
  { step: "04", title: "Scale, Deliver & Report", desc: "Qualified leads flow directly into your CRM in real time. Weekly reports cover pipeline metrics, conversion rates, cost per lead, and optimization recommendations to keep improving results." },
];

const industries = [
  { name: "Technology & SaaS", desc: "Decision-maker outreach, product demo scheduling, trial-to-paid conversion calls, and expansion pipeline development for software and technology companies.", href: "/industries/saas-technology-support" },
  { name: "Financial Services", desc: "Qualified appointment setting for financial advisors, wealth managers, insurance agents, and fintech companies targeting high-value prospects.", href: "/industries/financial-services-call-center" },
  { name: "Healthcare", desc: "Provider outreach, medical device sales support, healthcare IT lead generation, and group practice development for healthcare organizations.", href: "/industries/healthcare-call-center-services" },
  { name: "Real Estate", desc: "Investor lead qualification, commercial tenant prospecting, property management lead generation, and broker appointment setting for real estate firms.", href: "/industries/real-estate-call-center-services" },
  { name: "Professional Services", desc: "B2B prospect identification, partnership development, consulting engagement pipeline, and event registration campaigns for service firms.", href: "/industries/professional-services" },
  { name: "Manufacturing", desc: "Distributor outreach, OEM partnership development, equipment sales lead generation, and trade show follow-up campaigns for manufacturers.", href: "/industries/manufacturing" },
];

const comparisonData = [
  { feature: "Ramp-Up Time", inHouse: "3-6 months", outsourced: "2-3 weeks" },
  { feature: "Cost Per Qualified Lead", inHouse: "$150-$400+", outsourced: "35% less" },
  { feature: "SDR Salary + Benefits", inHouse: "$65K-$95K per rep", outsourced: "Fraction of the cost" },
  { feature: "List Building & Research", inHouse: "Manual, time-intensive", outsourced: "Included in service" },
  { feature: "CRM Integration", inHouse: "Your team manages", outsourced: "Real-time sync included" },
  { feature: "Script Optimization", inHouse: "Ad hoc", outsourced: "Continuous A/B testing" },
  { feature: "Reporting & Analytics", inHouse: "Basic tracking", outsourced: "Full pipeline dashboards" },
  { feature: "Scalability", inHouse: "Hire more reps (months)", outsourced: "Scale in days" },
];

const faqs = [
  { question: "How does a lead generation call center work?", answer: "Our agents make strategic outbound calls to your target prospects using consultative scripts and proven qualification frameworks. They identify and engage decision-makers, qualify interest and budget using BANT criteria, and schedule confirmed appointments directly on your sales team's calendar. Qualified leads are delivered into your CRM in real time with detailed conversation notes and qualification data." },
  { question: "What lead qualification methods do you use?", answer: "We use BANT (Budget, Authority, Need, Timeline) as our baseline framework, combined with custom qualification criteria tailored to your specific ideal customer profile. This may include company size thresholds, technology stack requirements, contract timeline, competitive landscape, and pain point severity. Only leads that meet your defined thresholds are passed to your sales team, ensuring high-quality pipeline." },
  { question: "How do you build prospect lists for B2B calling campaigns?", answer: "We build targeted prospect databases through multi-source research including industry databases, LinkedIn Sales Navigator, data enrichment platforms, and manual verification. We validate contact information, identify decision-makers and their direct lines, and segment lists by industry, company size, geography, technology stack, and other criteria you define. All data is scrubbed for accuracy before calling begins." },
  { question: "Can your lead generation services integrate with our CRM?", answer: "Yes. We deliver qualified leads directly into your CRM system in real time, including Salesforce, HubSpot, Pipedrive, Monday.com, and others. Each lead record includes detailed notes on the conversation, qualification answers, pain points discussed, scheduled next steps, and any relevant context your sales team needs for the follow-up meeting." },
  { question: "What is the typical cost per lead for outsourced lead generation?", answer: "Cost per qualified lead varies by industry, target audience, and qualification complexity, but our clients typically see 30-40% lower cost per lead compared to maintaining in-house SDR teams when you factor in salaries, benefits, tools, management overhead, and ramp-up time. We offer transparent per-lead, per-appointment, and dedicated agent pricing models." },
  { question: "How long does it take to start generating leads?", answer: "Most lead generation programs begin producing qualified leads within 3-4 weeks of kickoff. The first 2 weeks cover ICP definition, list building, script development, agent training, and system setup. Week 3 is a controlled pilot for testing and optimization. By week 4, you are receiving a steady flow of qualified leads into your pipeline." },
  { question: "What industries do your lead generation services cover?", answer: "We serve B2B clients across technology, SaaS, financial services, healthcare, real estate, professional services, manufacturing, and more. Our agents are trained on industry-specific terminology, buying cycles, decision-maker titles, and common objections for each vertical — so conversations feel authentic and informed, not scripted." },
];

const seoContent: SEOPattern[] = [
  {
    pattern: "hero-statement",
    eyebrow: "Best Lead Generation Services in USA",
    heading: "The lead generation services partner B2B sales teams trust to fill their pipeline with qualified, sales-ready meetings.",
    accent: "trust to fill",
    body: [
      "Contact Center USA is one of the best lead generation services providers in the USA — a 100% US-based appointment setting bpo delivering strategic cold calling, BANT qualification, and booked meetings that your sales team actually wants to take.",
      "For B2B companies searching for b2b lead gen outsourcing usa partners that understand their market, we replace unpredictable inbound volume and unqualified lead noise with a consistent flow of decision-maker conversations — at roughly 35% lower cost per lead than internal SDR teams.",
    ],
    stats: [
      { stat: "3x", label: "Pipeline growth typical in the first 90 days of engagement" },
      { stat: "35%", label: "Lower cost per qualified lead vs. internal SDR/BDR teams" },
      { stat: "85%", label: "Show rate on appointments booked by our US-based agents" },
    ],
  },
  {
    pattern: "comparison",
    eyebrow: "Head to Head",
    heading: "In-House vs. Contact Center USA BPO",
    intro:
      "Every revenue leader faces the same decision: build an internal SDR/BDR team or partner with an appointment setting bpo. Here's how the two compare on the factors that actually drive qualified pipeline.",
    leftTitle: "Internal SDR Team",
    rightTitle: "Contact Center USA BPO",
    rows: [
      {
        label: "Cost per Qualified Lead",
        left: "Fully loaded SDR cost $85K+ — often paying $400+ per qualified lead.",
        right: "~35% lower cost per qualified lead — variable pricing tied to meeting volume.",
        leftYes: false,
      },
      {
        label: "Ramp Time to Pipeline",
        left: "New SDRs take 4–6 months to reach productive quota; attrition resets the clock.",
        right: "First qualified meetings in 30 days; full pipeline cadence by day 60.",
        leftYes: false,
      },
      {
        label: "Data, Cadence & Tooling",
        left: "$40K+ annually for list, dialer, engagement, and enrichment tooling.",
        right: "B2B lead gen outsourcing usa stack included — lists, dialer, cadence, and enrichment.",
        leftYes: false,
      },
      {
        label: "Decision-Maker Conversations",
        left: "Junior SDRs struggle to hold attention with VPs and C-suite prospects.",
        right: "Senior US-based callers trained on your ICP and objection map.",
        leftYes: false,
      },
      {
        label: "Attrition & Management",
        left: "Industry SDR attrition above 35%; constant hiring and coaching load.",
        right: "Attrition, QA, coaching, and career path fully managed — zero overhead for you.",
        leftYes: false,
      },
      {
        label: "Scalability",
        left: "Hiring cycles of 60–90 days bottleneck growth and new-market expansion.",
        right: "Scale lead generation services capacity up/down in 10–15 business days.",
        leftYes: false,
      },
    ],
  },
  {
    pattern: "flow",
    eyebrow: "How It Works",
    heading: "Our B2B Lead Gen Outsourcing USA Process",
    intro:
      "Every appointment setting bpo engagement follows the same disciplined five-step playbook — engineered to produce qualified meetings, not activity metrics.",
    steps: [
      {
        title: "ICP & Offer Workshop",
        body: "Pressure-test your ideal customer profile, offer, and value proposition — then translate into calling scripts, objection maps, and qualification criteria.",
      },
      {
        title: "Data & List Build",
        body: "Build, enrich, and verify target account and contact lists against your ICP — TCPA-scrubbed and DNC-compliant.",
      },
      {
        title: "Multi-Touch Cadence",
        body: "Launch integrated call/email/LinkedIn cadences with trained US-based callers holding decision-maker conversations.",
      },
      {
        title: "BANT Qualification & Booking",
        body: "Qualify on Budget, Authority, Need, and Timeline — then book calendared meetings directly into your AEs' calendars.",
      },
      {
        title: "Weekly Optimization",
        body: "Weekly pipeline reviews analyze list quality, messaging, and conversion — tuning cadence to drive higher show rates and opportunity creation.",
      },
    ],
  },
  {
    pattern: "featured-industries",
    eyebrow: "Industries",
    heading: "Industries We Serve with Lead Generation Services",
    intro:
      "Each B2B vertical carries its own buyer dynamics, compliance overlays, and deal cycles. Our appointment setting bpo workflows are tuned to the sectors we serve.",
    items: [
      {
        icon: "laptop",
        stat: "SaaS",
        title: "B2B SaaS & Technology",
        body: "ICP-based outbound to VP and C-level technology buyers — filling pipeline for mid-market and enterprise SaaS teams.",
      },
      {
        icon: "briefcase",
        stat: "Pro Svcs",
        title: "Professional Services & Consulting",
        body: "Booked executive meetings for management consulting, staffing, and financial advisory firms.",
      },
      {
        icon: "factory",
        stat: "Mfg",
        title: "Manufacturing & Industrial",
        body: "Plant-manager and procurement outreach for industrial suppliers, MRO, and capital-equipment vendors.",
      },
      {
        icon: "shield",
        stat: "Sec",
        title: "Cybersecurity & MSPs",
        body: "CISO and IT leader outreach for cybersecurity vendors, MSPs, and infrastructure providers.",
      },
    ],
  },
  {
    pattern: "split-image",
    eyebrow: "Why Us",
    heading: "Why Choose Contact Center USA for B2B Lead Gen Outsourcing USA",
    image: "/images/cc-management.jpg",
    imagePosition: "right",
    body: [
      "Offshore lead gen shops generate call volume but rarely book meetings that close — accent bias and lack of US business context kill decision-maker conversations. Freelance SDR services lack the management, tooling, and QA required to deliver consistently. Enterprise BPOs treat lead gen as a low-margin afterthought, bolted onto customer service staffing.",
      "Contact Center USA is different: a 100% US-based lead generation services partner with senior callers, a battle-tested b2b lead gen outsourcing usa stack, and a management team that obsesses over qualified pipeline rather than dials per day — all at ~35% lower cost per lead than an internal SDR team.",
    ],
    bullets: [
      "100% US-based callers — no offshore voice on your prospects' first impression",
      "Senior appointment setters trained on your ICP, offer, and objection map",
      "TCPA-compliant dialing, DNC-scrubbed lists, and full call recording for QA",
      "Booked meetings dropped directly into your AEs' calendars with context",
      "Weekly pipeline reviews with show-rate and opportunity conversion reporting",
    ],
  },
  {
    pattern: "dark-cta",
    eyebrow: "Get Started",
    heading: "Ready to evaluate a better lead generation services partner?",
    accent: "better lead generation services",
    body: "If your SDR team is expensive and underperforming, your pipeline is unpredictable, or your current b2b lead gen outsourcing usa vendor is delivering unqualified meetings, request a free consultation. We'll review your ICP, offer, and cost per lead — then show you exactly what appointment setting bpo with Contact Center USA would look like.",
    ctaLabel: "Request a Free Consultation",
    ctaHref: "/contact",
  },
];

export default function LeadGenerationContent() {
  return (
    <>
      {/* HERO — Image bg + form */}
      <section className="relative min-h-[80vh] overflow-hidden">
        <Image src="/images/cc-office-wide.jpg" alt="Lead Generation Call Center USA - Contact Center USA" fill className="object-cover object-center" priority />
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/80 via-navy/40 to-transparent" />

        <div className="relative z-10 mx-auto flex min-h-[80vh] pt-40 max-w-[1536px] items-center px-5 py-28 lg:px-8">
          <div className="grid w-full grid-cols-1 items-center gap-12 lg:grid-cols-5">
            <motion.div className="lg:col-span-3" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/90 backdrop-blur-sm">
                <Target className="h-4 w-4" /> Lead Generation Call Center
              </span>
              <h1 className="mt-6 max-w-2xl text-4xl font-bold leading-[1.08] text-white sm:text-5xl lg:text-[52px]">
                Fuel Your Sales Pipeline with <span className="text-red">Qualified Leads</span> — US-Based
              </h1>
              <p className="mt-6 max-w-xl text-[17px] leading-relaxed text-white/70">
                Our US-based lead generation specialists fill your funnel with qualified prospects through strategic cold calling, BANT qualification, and B2B appointment setting — so your closers close.
              </p>
              <div className="mt-8 flex flex-wrap items-center gap-6">
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 35% Lower Cost Per Lead</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 28% Lead-to-Close Rate</div>
                <div className="flex items-center gap-2 text-sm text-white/60"><CheckCircle className="h-4 w-4 text-red" /> 3x Pipeline Growth</div>
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
              { value: 35, suffix: "%", label: "Lower Cost Per Lead" },
              { value: 28, suffix: "%", label: "Lead-to-Close Rate" },
              { value: 150, suffix: "K+", label: "Leads Generated Annually" },
              { value: 3, suffix: "x", label: "Pipeline Growth" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-3xl font-bold text-white"><AnimatedCounter target={stat.value} suffix={stat.suffix} /></div>
                <div className="mt-1 text-sm text-white/50">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT IS LEAD GENERATION — Long-form content */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full bg-red/10 px-4 py-1.5 text-sm font-semibold text-red">What is Lead Generation?</span>
              <h2 className="mt-5 text-3xl font-bold leading-[1.15] text-navy sm:text-4xl">
                Turn Prospects Into <span className="text-red">Revenue</span> — Faster
              </h2>
              <p className="mt-6 text-[16px] leading-relaxed text-gray-700">
                Lead generation call center services use <strong>strategic outbound calling to identify, engage, and qualify prospects</strong> who match your ideal customer profile. Instead of burning your sales team&apos;s time on cold outreach and unqualified conversations, you leverage dedicated specialists who fill the top of your funnel — so your closers focus exclusively on closing.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                At Contact Center USA, our lead generation team goes beyond basic appointment setting. We build <strong>targeted prospect databases, craft consultative scripts, qualify using BANT and custom frameworks</strong>, and deliver sales-ready opportunities directly into your CRM in real time. Every lead comes with detailed notes on pain points, budget, timeline, and decision-making authority.
              </p>
              <p className="mt-4 text-[16px] leading-relaxed text-gray-700">
                The results are transformative: clients using our B2B appointment setting services see <strong>35% lower cost per lead</strong>, <strong>28% lead-to-close rates</strong>, and <strong>3x pipeline growth</strong> within six months. Pair with our <Link href="/solutions/outbound-call-center-services" className="text-red font-semibold hover:underline">outbound services</Link> for nurture campaigns, or add <Link href="/services/customer-experience-analytics" className="text-red font-semibold hover:underline">CX analytics</Link> for pipeline intelligence.
              </p>

              <div className="mt-8 space-y-3">
                {["BANT-qualified leads delivered into your CRM in real time", "Custom ICP targeting with verified decision-maker contacts", "Consultative scripts that create value, not just appointments", "Transparent cost-per-lead and pipeline analytics"].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-[15px] text-gray-600">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-2xl">
                <Image src="/images/cc-man-laptop.jpg" alt="Lead generation specialists at Contact Center USA" fill className="object-cover" />
              </div>
              <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="absolute -bottom-6 -right-6 rounded-2xl bg-red px-6 py-5 text-white shadow-xl">
                <div className="text-3xl font-bold">3x</div>
                <div className="text-sm text-white/80">Pipeline Growth</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Lead Generation <span className="text-red">Solutions</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From cold calling to appointment setting, our lead generation services are designed to fill your pipeline with qualified, sales-ready opportunities.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">How Lead Generation <span className="text-red">Works</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">From ICP definition to pipeline delivery, we handle every step so your sales team focuses on closing deals.</p>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Lead Generation: <span className="text-red">In-House SDRs vs. Outsourced</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">See why sales-driven companies outsource lead generation to Contact Center USA instead of building internal SDR teams.</p>
          </motion.div>
          <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-3 bg-navy p-4 text-center text-sm font-semibold text-white">
              <div>Feature</div><div>In-House SDRs</div><div>Contact Center USA</div>
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
            <h2 className="mt-5 text-3xl font-bold text-navy sm:text-4xl">Industries That Grow with <span className="text-red">Lead Generation</span></h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-700">Our lead generation services are tailored to the sales cycles, decision-maker structures, and buying processes of every major B2B industry.</p>
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
                  <div className="mt-1 text-sm text-gray-600">Client Rating</div>
                </div>
                <div className="h-16 w-px bg-gray-200" />
                <div>
                  <div className="text-4xl font-bold text-navy">3x</div>
                  <div className="mt-1 text-sm text-gray-600">Avg Pipeline Growth</div>
                </div>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="relative">
              <div className="absolute -right-6 -top-6 h-full w-full rounded-3xl bg-gray-50" />
              <div className="relative z-10 rounded-2xl bg-white p-10 shadow-xl">
                <div className="absolute -top-5 left-8 flex h-12 w-12 items-center justify-center rounded-full bg-red text-2xl font-bold text-white shadow-lg">&ldquo;</div>
                <div className="flex items-center gap-1">{[...Array(5)].map((_, i) => <Star key={i} className="h-5 w-5 fill-amber-400 text-amber-400" />)}</div>
                <p className="mt-6 text-lg leading-relaxed text-gray-600">
                  Contact Center USA&apos;s lead generation team books 40+ qualified appointments per week for our sales reps. Our cost per lead dropped 35% and our pipeline tripled within six months. They&apos;ve become an essential part of our revenue engine — our closers love the quality of leads they receive.
                </p>
                <div className="mt-8 flex items-center gap-4 border-t border-gray-100 pt-6">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-red to-red-dark text-lg font-bold text-white">SJ</div>
                  <div>
                    <div className="font-bold text-navy">Sarah Jennings</div>
                    <div className="text-sm text-gray-600">VP of Sales, A Commercial Real Estate Firm</div>
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
              { title: "Outbound Services", desc: "Extend your lead generation with telemarketing, follow-up campaigns, win-back outreach, and upselling programs for existing customers.", href: "/solutions/outbound-call-center-services" },
              { title: "Inbound Services", desc: "Capture and convert inbound leads with professional call answering, order taking, and help desk support when prospects call you.", href: "/solutions/inbound-call-center-services" },
              { title: "Customer Service", desc: "Retain the customers your sales team closes with world-class post-sale support, account management, and loyalty programs.", href: "/solutions/customer-service-outsourcing" },
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
      <PageFAQ heading="Lead Generation Call Center FAQ" faqs={faqs} />

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy py-24">
        <div className="pointer-events-none absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="relative z-10 mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} className="max-w-2xl text-center lg:text-left">
              <h2 className="text-3xl font-bold text-white sm:text-4xl">Ready to Fill Your Sales Pipeline?</h2>
              <p className="mt-3 text-white/60">Get a free consultation and see how our lead generation services can triple your pipeline within 6 months.</p>
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
