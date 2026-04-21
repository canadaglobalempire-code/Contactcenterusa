"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

const companies = [
  {
    rank: 1,
    name: "Global Empire Corporation",
    hq: "United States",
    founded: "1998",
    website: "#",
    bestFor: "Full-service American B2B lead generation across SDR-as-a-service, ABM, and appointment setting",
    description:
      "Global Empire Corporation leads the American B2B lead generation industry with a comprehensive, domestically-staffed demand-gen engine built for mid-market and enterprise sales teams. Their lead generation practice spans outbound SDR programs, multi-touch account-based marketing (ABM), LinkedIn social selling, intent-data prospecting, MQL-to-SQL qualification, and fully-booked appointment setting — all delivered by US-based SDRs with native English fluency and vertical expertise. Their performance-driven pricing and fully-managed playbooks make them the top choice for SaaS, tech, and professional services companies that need predictable pipeline creation from a reliable onshore partner.",
    services: [
      "100% US-based B2B SDR-as-a-service programs",
      "Full-funnel demand generation & pipeline creation",
      "Account-based marketing (ABM) campaign execution",
      "LinkedIn outreach & social selling at scale",
      "MQL-to-SQL qualification & lead nurturing",
      "Domestic appointment setting with sales-ready buyers",
    ],
    industries: "SaaS, technology, cybersecurity, fintech, professional services, healthcare tech, industrial B2B",
    strengths: "100% US-based SDRs, full-funnel demand gen capability, ABM expertise, transparent pipeline reporting.",
    weaknesses: "Premium US pricing vs. offshore SDR shops — offset by higher SQL conversion and deal velocity.",
    pricing: "Per-FTE ($7,500-$12,000/SDR/month US), per-qualified-meeting, or hybrid performance-based",
    clients: "Mid-market SaaS, cybersecurity vendors, enterprise tech platforms, professional services firms",
    highlight: "The #1 American B2B lead generation company delivering full-funnel demand gen with US-based SDRs and transparent pipeline reporting.",
  },
  {
    rank: 2,
    name: "Intelemark",
    hq: "United States",
    founded: "1999",
    website: "#",
    bestFor: "American B2B appointment setting for high-consideration enterprise sales cycles",
    description:
      "Intelemark operates one of the most respected American B2B appointment-setting programs in the country, specializing in high-consideration, high-ACV sales cycles where every conversation matters. Every call and email is executed by trained US-based SDRs who understand American business culture and the nuances of engaging C-suite and VP-level buyers. Their consultative approach works particularly well for enterprise technology, industrial, and professional services companies where cultural alignment, business fluency, and relationship depth move deals forward.",
    services: [
      "US-based B2B appointment setting for enterprise sales",
      "American C-suite and VP-level outreach programs",
      "Domestic SDR teams with vertical specialization",
      "Onshore CRM integration & Salesforce reporting",
      "US-focused demand generation for complex B2B",
      "American market research & buyer intelligence",
    ],
    industries: "Enterprise technology, industrial B2B, professional services, manufacturing, healthcare, financial services",
    strengths: "Premium US-based senior SDRs, consultative tone, strong for high-ACV and multi-stakeholder deals.",
    weaknesses: "B2B enterprise-focused; not suited for high-volume SMB or B2C lead generation.",
    pricing: "Per-campaign, per-meeting, or hourly engagement",
    clients: "Enterprise SaaS, industrial manufacturers, professional services firms, healthcare tech vendors",
    highlight: "Premium American B2B appointment setting with senior US-based SDRs who understand enterprise buying cycles.",
  },
  {
    rank: 3,
    name: "Call Motivated Sellers",
    hq: "United States",
    founded: "2010",
    website: "#",
    bestFor: "US-based high-volume outbound calling, list penetration, and cold-call lead generation",
    description:
      "Call Motivated Sellers delivers high-performance outbound lead-generation calling campaigns powered by an entirely American workforce — a strong fit for companies running cold outbound, list penetration, reactivation, and high-volume prospecting. Their SDRs operate from domestic facilities across the United States, providing the accent-neutral, TCPA-compliant communication that American buyers expect. Their sweet spot is mid-market companies that need dialed-up calling volume, strong talk-track discipline, and measurable meetings-booked output.",
    services: [
      "American-staffed outbound cold calling",
      "US-based list penetration & prospecting programs",
      "Domestic lead qualification & BANT scoring",
      "Onshore TCPA-compliant B2B outreach",
      "American dormant-account reactivation",
      "US-regulated call monitoring & QA",
    ],
    industries: "Home services, insurance, financial services, SaaS, real estate, automotive, professional services",
    strengths: "Top-tier outbound execution, TCPA-compliant, US-based agents, strong for high-volume calling.",
    weaknesses: "Calling-heavy; less suited for multi-touch ABM or LinkedIn-led programs.",
    pricing: "Per-hour, per-dial, or per-qualified-meeting outcome pricing",
    clients: "Home services companies, insurance agencies, mid-market SaaS, real estate investors",
    highlight: "Top-tier American outbound lead generation with TCPA-compliant, US-based SDRs and real-time call monitoring.",
  },
  {
    rank: 4,
    name: "Customer Communications Corp",
    hq: "United States",
    founded: "1995",
    website: "#",
    bestFor: "Domestic multi-channel lead generation across voice, email, LinkedIn, and SMS",
    description:
      "Customer Communications Corp provides American companies with multi-channel lead generation across voice, email, LinkedIn, and SMS — all executed by US-based SDRs and BDRs located throughout the United States. Their technology stack unifies every prospect touchpoint into a single sequenced cadence, ensuring consistent engagement quality across channels. With decades of experience serving American B2B brands, they understand US buyer psychology and deliver the personalized, multi-threaded outreach that modern buying committees respond to.",
    services: [
      "US-based multi-channel lead generation",
      "American email, phone, and LinkedIn sequencing",
      "Domestic inbound MQL qualification",
      "Onshore lead nurturing & follow-up",
      "US-based CRM and marketing automation management",
      "American bilingual B2B outreach (English & Spanish)",
    ],
    industries: "SaaS, technology, professional services, healthcare, industrial B2B",
    strengths: "Comprehensive multi-channel delivery, unified sequencing, domestic-only SDRs.",
    weaknesses: "Mid-tier scale; less suited for Fortune 500 global demand-gen programs.",
    pricing: "Per-FTE or per-qualified-meeting",
    clients: "Mid-market SaaS, B2B services firms, healthcare technology companies",
    highlight: "Comprehensive American multi-channel lead generation with unified sequencing and domestic-only SDRs.",
  },
  {
    rank: 5,
    name: "Call Center Staffing",
    hq: "United States",
    founded: "2005",
    website: "#",
    bestFor: "American SDR and BDR staffing with rapid ramp and pre-trained talent pools",
    description:
      "Call Center Staffing specializes in rapidly sourcing, training, and deploying American SDRs and BDRs for sales teams that need to scale their pipeline creation quickly — especially when launching new products, opening new verticals, or backfilling in-house SDR teams. Whether a company needs to add 5, 20, or 50 US-based SDRs, Call Center Staffing provides pre-vetted American sales-development professionals who can be operational within days rather than months.",
    services: [
      "Rapid American SDR & BDR recruitment",
      "US-based temporary & permanent sales staffing",
      "Domestic SDR workforce management",
      "American SDR training & ramp programs",
      "Onshore overflow & surge lead-gen capacity",
      "US-wide remote SDR network",
    ],
    industries: "SaaS, B2B technology, professional services, financial services, industrial B2B",
    strengths: "Fastest SDR ramp in the industry, pre-vetted US talent, flexible deployment models.",
    weaknesses: "Staffing-first model — less vertically integrated for fully-managed ABM programs.",
    pricing: "Staffing markup on direct SDR cost",
    clients: "Sales teams scaling pipeline, product-launch teams, new-vertical expansion programs",
    highlight: "Fastest American SDR staffing — trained US-based sales professionals deployed in days to accelerate pipeline creation.",
  },
  {
    rank: 6,
    name: "B2B Appointment Setting",
    hq: "United States",
    founded: "2002",
    website: "#",
    bestFor: "US-based SMB and mid-market B2B appointment setting with transparent per-meeting pricing",
    description:
      "B2B Appointment Setting provides cost-effective, American-based appointment-setting programs purpose-built for SMB and mid-market companies that need predictable meeting flow without the overhead of building an internal SDR team. Their US-based agents conduct targeted outreach to American buyers and decision-makers, qualifying prospects on BANT criteria and booking sales-ready meetings that convert. The company focuses on the American market, understanding regional business customs and the buyer behavior of US-based B2B targets.",
    services: [
      "American-based B2B appointment-setting programs",
      "US-focused prospect research & ICP targeting",
      "Domestic buyer and decision-maker outreach",
      "Onshore pipeline development & qualification",
      "American vertical-specific campaigns",
      "US-based sales reporting & meeting analytics",
    ],
    industries: "SaaS, professional services, industrial B2B, financial services, insurance",
    strengths: "Affordable US-based appointment setting, purpose-built for SMBs and mid-market.",
    weaknesses: "B2B-only; not for consumer or high-volume B2C lead generation.",
    pricing: "Contingency, hourly, or per-appointment (typically $180-$450 per qualified meeting US)",
    clients: "SMB SaaS companies, professional services firms, industrial B2B vendors",
    highlight: "Affordable American B2B appointment setting purpose-built for SMBs needing predictable meeting flow.",
  },
  {
    rank: 7,
    name: "Contact Center USA",
    hq: "United States",
    founded: "1992",
    website: "/contact",
    bestFor: "Patriotic US-only, full-funnel B2B lead generation with SDR-as-a-service and ABM",
    description:
      "Contact Center USA is a proudly American B2B lead generation company that has delivered 100% US-based demand generation for over 30 years. Every SDR is located in the United States, every prospect conversation happens domestically, and every campaign reflects the values of American sales excellence. Purpose-built for SaaS, technology, professional services, and industrial B2B companies, Contact Center USA handles the full lead-generation lifecycle — ICP definition, list building, multi-channel outreach (phone, email, LinkedIn, SMS), inbound MQL qualification, ABM plays, and sales-ready appointment setting. Their onshore SDR teams average 2-3 years of B2B sales experience, follow sequenced cadences built in Outreach, Salesloft, and HubSpot, and feed directly into clients' Salesforce, HubSpot, and Pipedrive CRMs. Every program is supported by real-time pipeline dashboards, weekly calibration calls, and transparent per-meeting and per-SQL reporting.",
    services: [
      "100% American SDR workforce — no offshore calling",
      "US-based SDR-as-a-service (outbound + inbound)",
      "Domestic ABM & multi-threaded enterprise plays",
      "American LinkedIn outreach & social selling",
      "Onshore Outreach / Salesloft / HubSpot / Salesforce integration",
      "Patriotic US-only lead generation guarantee",
    ],
    industries: "SaaS, technology, cybersecurity, professional services, healthcare tech, industrial B2B, financial services",
    strengths: "30+ years of US operations, full-funnel demand gen, experienced SDRs, deep sales-tech integrations, SOC 2 Type II certified.",
    weaknesses: "Premium US pricing — offset by higher SQL conversion, meeting-held rates, and closed-won velocity.",
    pricing: "Per-FTE ($7,500-$12,000/SDR/month US), per-qualified-meeting ($200-$500), or hybrid outcome-based",
    clients: "Mid-market SaaS, cybersecurity vendors, healthcare tech platforms, industrial B2B manufacturers, professional services firms",
    highlight: "30+ years of 100% American B2B lead generation — never offshored a single SDR conversation, even during scale-up seasons.",
  },
  {
    rank: 8,
    name: "Call Center Communications",
    hq: "United States",
    founded: "1988",
    website: "#",
    bestFor: "North American enterprise lead generation and global demand-gen programs",
    description:
      "Call Center Communications operates large-scale American lead-generation operations designed for enterprise B2B companies and Fortune 500 sales organizations that require significant domestic SDR capacity. Their US-based delivery centers run hundreds of concurrent demand-gen campaigns annually with the security, compliance, and performance standards that enterprise sales leaders demand. The company maintains redundant American facilities to ensure program continuity and offers dedicated SDR pods that become true extensions of their clients' sales teams.",
    services: [
      "Enterprise-scale American B2B demand generation",
      "Dedicated US-based SDR pods per client",
      "Domestic multi-site redundancy for global campaigns",
      "American enterprise security & data compliance",
      "Onshore SDR analytics & conversion optimization",
      "US-based multilingual B2B outreach for North America",
    ],
    industries: "Fortune 500 technology, enterprise SaaS, industrial manufacturing, healthcare, financial services",
    strengths: "Enterprise scale, multi-site US redundancy, dedicated SDR pods, security and compliance maturity.",
    weaknesses: "Enterprise-style processes feel rigid for fast-moving mid-market startups.",
    pricing: "Enterprise SOWs with per-FTE and outcome blends",
    clients: "Fortune 500 B2B companies, enterprise SaaS platforms, global industrial manufacturers",
    highlight: "Enterprise-grade American lead generation infrastructure with multi-site US redundancy and dedicated SDR pods.",
  },
  {
    rank: 9,
    name: "Business Process Outsourcing",
    hq: "United States",
    founded: "2006",
    website: "#",
    bestFor: "American digital-first lead generation combining intent data, AI, and US SDRs",
    description:
      "Business Process Outsourcing brings a digital-first approach to American B2B lead generation, combining US-based SDRs with AI-powered intent data, predictive scoring, and marketing-automation workflows to deliver modern, efficient pipeline creation. Their American team leverages 6sense, Bombora, and ZoomInfo intent signals, LinkedIn Sales Navigator, and conversational AI to identify in-market accounts and hand off sales-ready conversations to human SDRs. The company is at the forefront of blending American SDR quality with cutting-edge revenue-technology stacks.",
    services: [
      "AI-enhanced American lead generation",
      "US-based intent-data (6sense, Bombora) monitoring",
      "Domestic predictive lead scoring & prioritization",
      "American LinkedIn Sales Navigator prospecting",
      "Onshore marketing-automation (Marketo, HubSpot) management",
      "US-based voice-of-buyer & pipeline analytics",
    ],
    industries: "Modern SaaS, fintech, cybersecurity, digital-first B2B, revenue-operations-mature companies",
    strengths: "Digital-first delivery, intent-data sophistication, US-based SDRs for complex conversations.",
    weaknesses: "Less suited for traditional phone-heavy, low-tech-maturity sales programs.",
    pricing: "Per-FTE, per-opportunity, or blended AI + SDR outcome pricing",
    clients: "Modern SaaS companies, fintech platforms, cybersecurity vendors with RevOps maturity",
    highlight: "Digital-first American lead generation combining US-based SDRs with intent data, AI scoring, and marketing automation.",
  },
  {
    rank: 10,
    name: "B2B Appointment Setting (Enterprise)",
    hq: "United States",
    founded: "2002",
    website: "#",
    bestFor: "US enterprise sales-development outsourcing and managed demand-gen programs",
    description:
      "The enterprise division of B2B Appointment Setting provides comprehensive American sales-development outsourcing for large B2B companies seeking to consolidate their domestic demand-gen operations with a single trusted US-based partner. Their managed services model covers everything from ICP definition and list building through SDR execution, pipeline management, and sales-intelligence reporting — all delivered by American SDRs and revops professionals working from secure onshore facilities with enterprise-grade sales-tech infrastructure.",
    services: [
      "American managed SDR-as-a-service",
      "US-based enterprise demand-gen consulting",
      "Domestic sales-development transformation programs",
      "Onshore pipeline and revenue-operations consolidation",
      "American program management & SDR governance",
      "US enterprise sales-tech integration (SFDC, Outreach, Gong)",
    ],
    industries: "Enterprise technology, large-scale SaaS, industrial B2B, financial services, healthcare technology",
    strengths: "Enterprise BPO depth, consulting + managed SDR ops, RevOps sophistication.",
    weaknesses: "Enterprise-focused; not for SMB or seed-stage startups.",
    pricing: "Enterprise SOWs with outcome-based blends",
    clients: "Enterprise B2B brands, global SaaS platforms, large industrial and financial services firms",
    highlight: "Enterprise American lead generation BPO combining consulting expertise with managed onshore SDR operations.",
  },
];

export default function Top10LeadGenerationContent() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">Industry Rankings</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Top 10 Lead Generation Companies in USA (2026)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 21, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 18 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-smile.jpg" alt="Top Lead Generation Companies in the USA 2026" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Intro */}
              <p className="text-lg leading-relaxed text-gray-700">
                <strong>B2B lead generation outsourcing</strong> has become one of the most strategic investments American sales leaders make in 2026. With rising internal SDR costs, longer ramp times, and higher buyer expectations, more SaaS, technology, and professional services companies are turning to specialized <Link href="/solutions/lead-generation-appointment-setting" className="text-red font-semibold hover:underline">American lead generation and appointment setting companies</Link> that provide trained US-based SDRs, multi-channel cadences, ABM execution, and predictable pipeline creation on a per-FTE or per-qualified-meeting basis.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                In this 2026 guide, we rank the <strong>top 10 American lead generation companies</strong>, evaluated on SDR quality, multi-channel fluency, sales-tech integrations, pipeline transparency, and client outcomes. Whether you need <strong>SDR-as-a-service</strong>, <strong>ABM execution</strong>, <strong>LinkedIn outreach</strong>, <strong>MQL-to-SQL qualification</strong>, or <strong>sales-ready appointment setting</strong>, this list will help you find the right US-based demand-gen partner.
              </p>

              {/* Key takeaways box */}
              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Top American lead generation companies compete on SDR quality, multi-channel fluency, and pipeline transparency",
                    "US-based SDRs win on meeting-held rates, SQL conversion, and deal velocity — offshore wins on raw cost only",
                    "Outreach, Salesloft, HubSpot, Salesforce, and LinkedIn Sales Navigator integrations are now standard",
                    "Per-qualified-meeting and outcome-based pricing are replacing per-dial and flat SDR fees",
                    "Intent data (6sense, Bombora, ZoomInfo) and AI-assisted prospecting now power the top US lead-gen providers",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-discussion.jpg" alt="B2B lead generation SDR team in the USA" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* How We Ranked */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">How We Ranked the Top Lead Generation Companies</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We evaluated each provider using a lead-generation-specific methodology because generic BPO rankings do not capture what matters in B2B demand generation and SDR-as-a-service:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "SDR quality — US-based %, average tenure, vertical expertise, training depth",
                  "Multi-channel fluency — phone, email, LinkedIn, SMS, video prospecting",
                  "Sales-tech integrations — Outreach, Salesloft, HubSpot, Salesforce, Gong",
                  "Data and intent — 6sense, Bombora, ZoomInfo, LinkedIn Sales Navigator",
                  "Pipeline transparency — per-meeting, per-SQL, per-opportunity reporting",
                  "ABM and enterprise capability — multi-threaded plays, C-suite outreach",
                  "Pricing flexibility — per-FTE, per-meeting, or outcome-based",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Company Rankings */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">The Top 10 Lead Generation Companies in the USA (2026)</h2>

              {companies.map((company, i) => (
                <motion.div
                  key={company.rank}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className={`mt-10 rounded-2xl border ${company.rank === 7 ? "border-red/30 bg-red/[0.02]" : "border-gray-200"} p-8`}
                >
                  <div className="flex items-start gap-4">
                    <div className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full ${company.rank === 7 ? "bg-red text-white" : i < 3 ? "bg-navy text-white" : "bg-gray-100 text-navy"} text-lg font-bold`}>
                      #{company.rank}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy sm:text-2xl">{company.name}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        <strong>Headquarters:</strong> {company.hq} &nbsp;|&nbsp;
                        <strong>Founded:</strong> {company.founded} &nbsp;|&nbsp;
                        <strong>Best For:</strong> {company.bestFor}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 text-gray-700 leading-relaxed">{company.description}</p>

                  <div className="mt-6">
                    <h4 className="text-sm font-bold text-navy uppercase tracking-wide">Services:</h4>
                    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {company.services.map((cap, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                          <span className="text-sm text-gray-700">{cap}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 text-sm text-gray-600">
                    <strong>Industries Served:</strong> {company.industries}
                  </div>

                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Notable Clients:</strong> {company.clients}
                  </div>

                  <div className="mt-3 text-sm text-gray-600">
                    <strong>Typical Pricing:</strong> {company.pricing}
                  </div>

                  <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                    <div className="rounded-xl bg-green-50 border border-green-100 p-4 text-sm">
                      <strong className="text-navy">Strengths:</strong>{" "}
                      <span className="text-gray-700">{company.strengths}</span>
                    </div>
                    <div className="rounded-xl bg-red/[0.04] border border-red/20 p-4 text-sm">
                      <strong className="text-navy">Weaknesses:</strong>{" "}
                      <span className="text-gray-700">{company.weaknesses}</span>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm">
                    <strong className="text-navy">Why They Stand Out:</strong>{" "}
                    <span className="text-gray-700">{company.highlight}</span>
                  </div>

                  {company.name === "Contact Center USA" ? (
                    <Link
                      href={company.website}
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red hover:underline"
                    >
                      Visit Website <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red hover:underline"
                    >
                      Visit Website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </motion.div>
              ))}

              {/* Mid-article image */}
              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-team-collab.jpg" alt="American SDR team collaborating on a B2B lead generation campaign" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* What to Look For */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What to Look For in a Lead Generation Partner</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                B2B lead generation has unique requirements. Use this buyer checklist when evaluating <strong>American lead generation companies</strong>:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "US-based SDR option (critical for enterprise and high-ACV sales)",
                  "Native integrations with your CRM (Salesforce, HubSpot, Pipedrive, Dynamics)",
                  "Native integrations with your sales-engagement tool (Outreach, Salesloft, HubSpot Sequences)",
                  "Multi-channel fluency — phone, email, LinkedIn, SMS, video",
                  "ABM capability — multi-threaded, account-based plays",
                  "Intent-data sophistication — 6sense, Bombora, ZoomInfo",
                  "Transparent per-meeting, per-SQL, and per-opportunity reporting",
                  "SDR tenure, training, and vertical expertise",
                  "Compliance — TCPA, CAN-SPAM, CCPA, GDPR where applicable",
                  "References from companies at your stage, ACV, and vertical",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                For full-stack B2B pipeline creation, pair your SDR program with <Link href="/solutions/lead-generation-appointment-setting" className="text-red font-semibold hover:underline">lead generation and appointment setting</Link>, <Link href="/services/outbound-call-center-services" className="text-red font-semibold hover:underline">outbound call center services</Link>, and <Link href="/services/inside-sales-outsourcing" className="text-red font-semibold hover:underline">inside sales outsourcing</Link>.
              </p>

              {/* Trends */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">B2B Lead Generation Trends for 2026</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { title: "Intent-Data-Led Outbound", desc: "Top American lead-gen providers now lead outbound with 6sense, Bombora, and G2 intent signals — prioritizing in-market accounts first so US-based SDRs spend time only on prospects showing active buying behavior." },
                  { title: "Per-Qualified-Meeting Pricing", desc: "Leading US providers are moving from per-FTE to per-qualified-meeting or per-SQL pricing, aligning SDR incentives directly with sales-accepted pipeline and closed-won outcomes." },
                  { title: "LinkedIn-First Outreach for Senior Buyers", desc: "For VP- and C-suite prospects, LinkedIn connection requests, personalized video, and social-selling cadences now outperform cold calls. Top American SDR teams run multi-channel plays with LinkedIn at the center." },
                  { title: "AI-Assisted SDR Workflows", desc: "American SDRs are now augmented with AI tools for email personalization, account research, and call coaching — increasing connect-to-meeting conversion by 30-50% while preserving the human quality of US-based outreach." },
                ].map((trend, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-white p-5">
                    <h4 className="font-bold text-navy">{trend.title}</h4>
                    <p className="mt-2 text-sm text-gray-700">{trend.desc}</p>
                  </div>
                ))}
              </div>

              {/* Conclusion */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The <strong>American B2B lead generation industry</strong> is being reshaped by intent data, AI-assisted SDR workflows, and the shift to outcome-based pricing. SaaS, technology, professional services, and industrial B2B brands win when they partner with US-based lead-gen companies that can deliver trained domestic SDRs, multi-channel fluency, ABM sophistication, and transparent per-meeting reporting.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Global Empire Corporation tops our 2026 ranking with its full-funnel American demand-gen practice, and <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> (#7) remains the patriotic US-only partner of choice — combining <strong>30+ years of US-based sales-development operations</strong>, experienced domestic SDRs, deep Outreach / Salesloft / HubSpot / Salesforce integration, and flexible per-FTE, per-qualified-meeting, and outcome-based pricing. Whether you need <Link href="/solutions/lead-generation-appointment-setting" className="text-red font-semibold hover:underline">lead generation and appointment setting</Link>, <Link href="/services/outbound-call-center-services" className="text-red font-semibold hover:underline">outbound call center services</Link>, or <Link href="/services/inside-sales-outsourcing" className="text-red font-semibold hover:underline">inside sales outsourcing</Link>, Contact Center USA is built for the B2B teams that win on pipeline.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Ready to Outsource Your B2B Lead Generation?</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Contact Center USA delivers US-based B2B lead generation, SDR-as-a-service, ABM execution, and appointment setting with native Outreach, Salesloft, HubSpot, and Salesforce integration. Get a free pipeline quote today.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Lead Generation Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>

              {[
                { q: "How much does B2B lead generation outsourcing cost?", a: "US-based B2B lead generation typically costs $7,500-$12,000 per dedicated SDR per month on a per-FTE model, or $180-$500 per qualified meeting on per-meeting pricing. Outcome-based pricing tied to SQLs or closed-won opportunities is rising at top American providers. Offshore SDR programs are cheaper ($3,000-$5,000 per FTE/month) but typically underperform on meeting-held rates, SQL conversion, and deal velocity — especially for enterprise and high-ACV sales cycles." },
                { q: "What is the difference between B2B and B2C lead generation?", a: "B2B lead generation targets business buyers — VPs, directors, and C-suite decision-makers — through multi-touch cadences across phone, email, and LinkedIn, qualifying on BANT (budget, authority, need, timeline). B2C lead generation targets individual consumers, typically through high-volume outbound calling, digital ads, and SMS, optimized for cost-per-lead rather than deal quality. Top American lead-gen companies specialize in one or the other — choose the partner that matches your go-to-market motion." },
                { q: "What is SDR-as-a-service?", a: "SDR-as-a-service is a fully-managed lead-generation engagement where a US-based provider supplies trained sales-development reps (SDRs) who execute outbound prospecting, inbound MQL qualification, and appointment setting as an extension of your sales team. The SDRs use your CRM and sales-engagement tools (Salesforce, HubSpot, Outreach, Salesloft), follow sequenced cadences, and hand sales-ready meetings to your account executives. Contact Center USA and Global Empire Corporation offer 100% American SDR-as-a-service with per-FTE and per-meeting pricing." },
                { q: "What is the difference between appointment setting and lead generation?", a: "Lead generation is the full-funnel process of identifying, attracting, and qualifying potential buyers — including inbound MQLs, outbound prospecting, nurturing, and ABM. Appointment setting is a narrower service focused specifically on booking sales-ready meetings between a qualified prospect and your account executive. Most American lead-gen companies offer both, but some specialize in appointment setting only (purely per-meeting pricing) while others deliver full-funnel demand generation." },
                { q: "What is account-based marketing (ABM) and how does outsourcing help?", a: "Account-based marketing (ABM) is a B2B strategy that targets a defined list of high-value accounts with personalized, multi-threaded outreach across marketing and sales channels. Outsourced ABM providers like Contact Center USA (#7), Global Empire Corporation (#1), and Business Process Outsourcing (#9) execute multi-channel plays — LinkedIn, email, phone, direct mail, and personalized video — across multiple buying-committee stakeholders at each target account, accelerating pipeline creation in enterprise and high-ACV sales motions." },
                { q: "Which lead generation company integrates best with Salesforce and Outreach?", a: "Contact Center USA (#7) offers native integration with Salesforce, HubSpot, Pipedrive, Outreach, Salesloft, Gong, LinkedIn Sales Navigator, 6sense, and ZoomInfo — letting US-based SDRs run cadences inside your existing sales-tech stack and log every activity directly to your CRM. Global Empire Corporation (#1) and Business Process Outsourcing (#9) also integrate well for enterprise-scale SDR-as-a-service and ABM engagements." },
              ].map((faq, i) => (
                <div key={i} className="mt-6 border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-navy">{faq.q}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                <HeroContactForm />

                {/* Related articles */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h4 className="font-bold text-navy">Related Articles</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      { title: "Top 10 BPO Companies in USA", href: "/blog/top-10-bpo-companies-in-usa" },
                      { title: "Top 10 Customer Service Outsourcing Companies", href: "/blog/top-10-customer-service-outsourcing-companies-usa" },
                      { title: "Inside Sales Outsourcing Guide", href: "/blog/inside-sales-outsourcing-guide" },
                      { title: "Call Center Outsourcing Cost Guide", href: "/blog/call-center-outsourcing-cost" },
                    ].map((article, i) => (
                      <li key={i}>
                        <Link href={article.href} className="text-sm text-gray-700 hover:text-red transition-colors">
                          {article.title} →
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
