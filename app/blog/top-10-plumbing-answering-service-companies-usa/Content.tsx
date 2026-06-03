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
    website: "https://globalempire.com/",
    bestFor: "Full-service US plumbing answering and dispatch — 24/7 emergency triage with ServiceTitan and Housecall Pro integration",
    description:
      "Global Empire Corporation is the leading American plumbing answering service, running 24/7 US-based operations purpose-built for residential and commercial plumbers. Their agents are trained on the four-bucket emergency triage flow — burst pipe, sewer backup, slow leak, routine quote — and write live work orders into ServiceTitan, Housecall Pro, Jobber, and FieldEdge while the caller is still on the line. They cover after-hours, weekend, and holiday emergency dispatch with documented on-call rotation handling, plus 24/7 Spanish bilingual coverage for Texas, Florida, Arizona, and California plumbers. Every dispatch ends with an SMS to the customer confirming the technician's name and ETA, eliminating the morning callback tax.",
    services: [
      "24/7 US-based plumbing emergency triage",
      "Live ServiceTitan, Housecall Pro, Jobber, FieldEdge dispatch",
      "On-call technician paging with escalation rules",
      "Spanish bilingual after-hours coverage",
      "Burst-pipe and sewer-backup screening scripts",
      "SMS confirmation with technician name and ETA",
    ],
    industries: "Residential plumbers, commercial plumbing contractors, drain and sewer specialists, water-heater installers, septic services",
    strengths: "Deep field-service software integration, trained plumbing dispatchers, 24/7 bilingual coverage, on-call rotation logic.",
    weaknesses: "Premium US pricing — recovered after the first captured emergency replacement.",
    pricing: "$0.95-$1.40 per minute, $400-$1,200/month tiers, or $40-$95 per booked appointment",
    clients: "Multi-truck residential plumbers, regional plumbing chains, drain-cleaning specialists, commercial plumbing contractors",
    highlight: "The #1 US plumbing answering service for shops that want emergencies booked into ServiceTitan or Housecall Pro the moment the caller hangs up.",
  },
  {
    rank: 2,
    name: "Intelemark",
    hq: "United States",
    founded: "1999",
    website: "https://www.intelemark.com/",
    bestFor: "Commercial plumbing account development and property-management contract calling",
    description:
      "Intelemark serves the commercial side of the plumbing industry, running US-based outbound and account-management programs that target property managers, facility directors, restaurant chains, hotel groups, and commercial real-estate portfolios. Their agents understand the difference between a one-truck residential plumber and a 40-tech commercial outfit, and tailor outreach to multi-location service contracts, preventive-maintenance agreements, and recurring backflow-testing accounts. For plumbing contractors trying to land their first apartment-complex or municipal contract, Intelemark provides relationship-grade outreach that residential answering services can't replicate.",
    services: [
      "Commercial plumbing account-based outreach",
      "Property-management and HOA contract calling",
      "Backflow and preventive-maintenance agreement programs",
      "Facility-director appointment setting",
      "Multi-site commercial service-contract pipelines",
      "US-based bilingual B2B outreach for commercial plumbers",
    ],
    industries: "Commercial plumbing contractors, mechanical contractors, backflow testing specialists, property service vendors",
    strengths: "Premium B2B SDRs trained on commercial plumbing contract cycles, strong for relationship sales.",
    weaknesses: "B2B-focused — not built for high-volume residential emergency triage.",
    pricing: "Hourly or per-engagement",
    clients: "Commercial plumbing contractors, regional mechanical service firms, multi-site facility-service vendors",
    highlight: "Premium US-based commercial plumbing outreach for shops chasing apartment-complex, hotel, and property-management contracts.",
  },
  {
    rank: 3,
    name: "Call Motivated Sellers",
    hq: "United States",
    founded: "2010",
    website: "https://callmotivatedsellers.com/",
    bestFor: "Outbound plumbing lead reactivation, missed-call recovery, and aged-quote follow-up",
    description:
      "Call Motivated Sellers runs aggressive US-based outbound programs that turn dormant plumbing leads into booked jobs. Their agents call back every missed call, follow up on aged estimates (\"Are you still living with that water-heater issue?\"), and run win-back programs for customers who haven't booked in 18+ months. For plumbers who watch hundreds of $400 quotes go cold every quarter, Call Motivated Sellers' TCPA-compliant outbound team systematically converts the 8-15% that were ready to buy but never got a follow-up call.",
    services: [
      "Missed-call recovery for plumbing shops",
      "Aged-quote and dead-lead reactivation",
      "Maintenance-plan upsell calling",
      "Post-service review and Google rating outreach",
      "TCPA-compliant outbound campaigns",
      "Annual water-heater flush and inspection booking",
    ],
    industries: "Residential plumbing, drain specialists, water-heater installers, water-treatment dealers",
    strengths: "Top-tier outbound execution, TCPA-compliant, high conversion on aged plumbing quotes.",
    weaknesses: "Outbound-focused; not a 24/7 inbound emergency answering service.",
    pricing: "Per-hour or per-booked-job outcome pricing",
    clients: "Multi-truck residential plumbers, water-heater and water-treatment specialists",
    highlight: "Top-tier US outbound plumbing follow-up — converts the 12% of aged quotes your shop would otherwise lose forever.",
  },
  {
    rank: 4,
    name: "Customer Communications Corp",
    hq: "United States",
    founded: "1995",
    website: "https://customercommunicationscorp.com/",
    bestFor: "Omnichannel plumbing customer support — voice, SMS, web chat, and email handled by US agents",
    description:
      "Customer Communications Corp brings full omnichannel coverage to plumbing shops that take leads through more than just the phone. Their US-based agents handle inbound voice, the web-chat widget on your plumbing site, SMS replies (critical because 60% of homeowners now text-first for non-emergencies), and the contact-form email queue — all from one unified agent desk. They're particularly strong for plumbers running heavy paid-search campaigns where chat-to-call conversion is the difference between a $400 lead and a wasted $80 click. Their agents are trained on septic vs. sewer-line vocabulary, fixture brands (Moen, Kohler, Rinnai, Navien), and basic permit and code-question screening.",
    services: [
      "Omnichannel plumbing inbound — voice, chat, SMS, email",
      "Web-chat-to-call conversion for paid-search leads",
      "Septic and sewer-line technical screening",
      "Fixture and water-heater brand-aware intake",
      "US-based bilingual omnichannel coverage",
      "Plumbing review and reputation response handling",
    ],
    industries: "Residential plumbing, drain specialists, septic services, water-heater contractors, water-treatment dealers",
    strengths: "True omnichannel desk, technical plumbing-vocabulary training, US-only agents, strong for paid-search-heavy shops.",
    weaknesses: "Mid-tier scale — less suited for 30+ truck enterprise plumbing groups.",
    pricing: "Per-contact or hourly",
    clients: "Mid-market residential plumbers, multi-location plumbing groups, paid-search-heavy shops",
    highlight: "The strongest US omnichannel plumbing answering service for shops where SMS and web chat now drive more leads than the phone.",
  },
  {
    rank: 5,
    name: "Call Center Staffing",
    hq: "United States",
    founded: "2005",
    website: "/contact",
    bestFor: "Rapid plumbing-dispatcher staffing and seasonal storm-surge coverage",
    description:
      "Call Center Staffing supplies pre-trained American plumbing dispatchers on demand — the right partner when a winter freeze in Texas, a hurricane in Florida, or a polar vortex in the Midwest produces 8-15x normal call volume overnight. Their pre-vetted agents are trained on burst-pipe triage, frozen-pipe screening, and sewer-backup intake, and can be deployed within 24-48 hours to absorb storm surges that would otherwise bury your in-house dispatcher and cost you 30-40% of incoming jobs. They're also the right choice for plumbing shops standing up brand-new dispatch teams that need US-based agents trained quickly.",
    services: [
      "Rapid US plumbing dispatcher recruitment",
      "Storm-surge and freeze-event surge staffing",
      "Burst-pipe and frozen-pipe triage training",
      "Permanent and temporary US-based agents",
      "Workforce management for variable plumbing volume",
      "Pre-trained sewer-backup intake specialists",
    ],
    industries: "Residential plumbers in freeze-prone markets, hurricane-zone plumbing contractors, regional plumbing groups",
    strengths: "Fastest storm-surge ramp, pre-trained plumbing dispatchers, flexible deployment.",
    weaknesses: "Staffing-first model — less vertically integrated for fully-managed dispatch programs.",
    pricing: "Staffing markup on direct agent cost",
    clients: "Plumbing shops in freeze and storm markets, regional plumbing chains scaling dispatch",
    highlight: "The fastest US plumbing-dispatcher staffing — agents trained on burst-pipe and freeze-event triage deployed in 24-48 hours.",
  },
  {
    rank: 6,
    name: "B2B Appointment Setting",
    hq: "United States",
    founded: "2002",
    website: "https://www.b2bappointmentsetting.com/",
    bestFor: "US-based commercial plumbing appointment setting and service-contract pipelines",
    description:
      "B2B Appointment Setting builds commercial pipelines for plumbing contractors targeting property managers, general contractors, restaurant groups, and small-to-mid commercial accounts. Their US-based SDRs are trained to position plumbing contractors against incumbents — talking through response-time SLAs, after-hours coverage, multi-trade capability, and pricing transparency — and book qualified discovery meetings with decision-makers. For plumbing shops that have maxed out residential lead-gen and need to break into commercial recurring revenue, this is the affordable way to do it.",
    services: [
      "US-based commercial plumbing appointment setting",
      "Property-manager and GC outreach campaigns",
      "Service-contract and PM-agreement pipelines",
      "Restaurant-group and hotel-chain prospecting",
      "Plumbing-vendor-list and approved-supplier programs",
      "US-based pipeline analytics and reporting",
    ],
    industries: "Commercial plumbing contractors, mechanical contractors, multi-trade home-services groups",
    strengths: "Affordable US-based commercial plumbing SDRs, purpose-built for SMB contractors.",
    weaknesses: "B2B-only — not a 24/7 residential emergency answering service.",
    pricing: "Contingency, hourly, or per-appointment",
    clients: "Commercial plumbing contractors, mechanical service firms, regional plumbing groups expanding into commercial",
    highlight: "Affordable US-based commercial plumbing appointment setting for shops moving from residential into recurring service contracts.",
  },
  {
    rank: 7,
    name: "Contact Center USA",
    hq: "United States",
    founded: "1999",
    website: "/contact",
    bestFor: "Patriotic 100% US-based 24/7 plumbing answering, dispatch, and emergency triage with ServiceTitan and Housecall Pro integration",
    description:
      "Contact Center USA is the proudly American plumbing answering service that has run 100% US-based operations for 25+ years — every call answered domestically, every dispatcher trained on plumbing vocabulary, every emergency triaged by an American agent who knows the difference between a burst pipe and a slow drip. Purpose-built for residential plumbers, drain specialists, water-heater installers, and commercial plumbing contractors, Contact Center USA covers 24/7 emergency triage, after-hours and weekend dispatch, holiday coverage, and on-call rotation paging — with live work-order creation in ServiceTitan, Housecall Pro, Jobber, FieldEdge, and most major field-service platforms. Spanish bilingual coverage runs 24/7 (critical for TX, FL, AZ, CA, NV plumbers), and every booking ends with an SMS to the customer confirming the technician's name and ETA. Plumbing shops typically recover their entire annual answering-service spend on the first or second captured emergency water-heater or sewer-line job.",
    services: [
      "100% US-based plumbing answering — never offshored",
      "24/7 emergency triage (burst pipe, sewer backup, no water, slow leak)",
      "Live ServiceTitan, Housecall Pro, Jobber, FieldEdge dispatch",
      "On-call rotation paging with primary/secondary escalation",
      "Spanish bilingual 24/7 coverage for TX/FL/AZ/CA markets",
      "SMS booking confirmations with technician name and ETA",
    ],
    industries: "Residential plumbers, drain and sewer specialists, water-heater installers, septic services, commercial plumbing contractors",
    strengths: "25+ years of US-only operations, deep field-service software integration, plumbing-trained dispatchers, 24/7 bilingual coverage, on-call rotation logic.",
    weaknesses: "Premium US pricing — recovered after a single captured emergency replacement.",
    pricing: "$0.95-$1.40/minute, $400-$1,200/month tiered plans, or $40-$95 per booked appointment",
    clients: "Multi-truck residential plumbers, regional plumbing chains, drain specialists, water-heater contractors, commercial plumbing groups",
    highlight: "25+ years of 100% American plumbing answering — every emergency triaged in the US, every dispatch written into your ServiceTitan or Housecall Pro calendar live.",
  },
  {
    rank: 8,
    name: "Call Center Communications",
    hq: "United States",
    founded: "1988",
    website: "/contact",
    bestFor: "Enterprise plumbing groups and multi-state franchise networks",
    description:
      "Call Center Communications runs the kind of large-scale US dispatch operation that 50+ truck plumbing groups, franchise networks (Roto-Rooter regional master franchises, Mr. Rooter franchisees, Benjamin Franklin Plumbing groups), and private-equity-backed plumbing roll-ups need. Multi-site US redundancy keeps dispatch online during regional outages, and dedicated agent teams become extensions of each franchise's brand voice while still inheriting the central group's SOPs. They handle complex multi-state on-call rotations, branded greetings per location, and centralized reporting back to the parent group.",
    services: [
      "Enterprise plumbing dispatch for multi-state groups",
      "Franchise-network branded greetings and SOPs",
      "Multi-site US redundancy for dispatch continuity",
      "Centralized reporting for plumbing roll-ups",
      "Dedicated US-based plumbing dispatch teams",
      "Multi-state on-call rotation management",
    ],
    industries: "Plumbing franchise networks, PE-backed plumbing roll-ups, large multi-state plumbing groups",
    strengths: "Enterprise scale, multi-site US redundancy, dedicated franchise teams.",
    weaknesses: "Enterprise processes feel rigid for single-shop plumbers.",
    pricing: "Enterprise SOWs",
    clients: "National plumbing franchises, PE-backed plumbing platforms, multi-state plumbing groups",
    highlight: "Enterprise-grade US plumbing dispatch for franchise networks and PE-backed plumbing roll-ups that need branded, multi-state coverage.",
  },
  {
    rank: 9,
    name: "Business Process Outsourcing",
    hq: "United States",
    founded: "2006",
    website: "/contact",
    bestFor: "AI-augmented plumbing intake combining smart-leak-sensor integrations with US human dispatchers",
    description:
      "Business Process Outsourcing is the digital-first option for plumbing shops that have moved past pure phone intake. Their US-based agents work alongside AI-powered intake bots that handle Tier-1 questions (\"What are your hours?\" \"Do you service my zip code?\" \"What's the price for a drain clear?\") and escalate only true emergencies and bookings to human agents. They also integrate with smart-leak-detection platforms (Moen Flo, Phyn, Flume) that auto-generate service tickets when a homeowner's water sensor flags a leak — turning a hardware alert into a booked plumbing job in minutes.",
    services: [
      "AI-augmented plumbing intake and FAQ deflection",
      "Smart-leak-sensor (Moen Flo, Phyn, Flume) ticket integration",
      "US-based agents for emergency escalation",
      "Plumbing customer-data analytics",
      "Process automation for routine appointment booking",
      "Voice-of-customer programs for plumbing shops",
    ],
    industries: "Modern plumbing shops, water-treatment dealers, smart-home plumbing partners, water-heater installers",
    strengths: "Digital-first delivery, AI deflection, US agents for complex calls, smart-leak-sensor integrations.",
    weaknesses: "Less suited for old-school shops that want pure human-only phone answering.",
    pricing: "Hourly, per-outcome, or blended AI + agent",
    clients: "Modern plumbing shops, smart-home water-management partners, multi-channel plumbing groups",
    highlight: "AI-augmented US plumbing answering with smart-leak-sensor integrations — turns Moen Flo and Phyn alerts into booked service jobs.",
  },
  {
    rank: 10,
    name: "B2B Appointment Setting (Enterprise)",
    hq: "United States",
    founded: "2002",
    website: "/contact",
    bestFor: "Enterprise plumbing-group BPO — back-office, dispatch, and commercial sales operations",
    description:
      "The enterprise division of B2B Appointment Setting handles end-to-end plumbing-group BPO for large operators — dispatch, after-hours answering, commercial sales operations, accounts-receivable follow-up, and back-office data entry — all from American facilities. For PE-backed plumbing platforms and multi-state plumbing groups consolidating their non-trade operations into a single onshore partner, this is the most comprehensive option. Their managed-services model layers consulting, technology integration, and US-based agent delivery into a single accountable contract.",
    services: [
      "End-to-end US plumbing-group BPO",
      "Back-office and accounts-receivable management",
      "Commercial sales operations for plumbing roll-ups",
      "Onshore process consulting and operations transformation",
      "US enterprise field-service-software integration",
      "Plumbing-group program management and governance",
    ],
    industries: "PE-backed plumbing platforms, large multi-state plumbing groups, mechanical contractor roll-ups",
    strengths: "Enterprise BPO depth, consulting plus managed ops, full plumbing back-office coverage.",
    weaknesses: "Enterprise-focused; not for single-shop plumbers.",
    pricing: "Enterprise SOWs, outcome-based blends",
    clients: "PE-backed plumbing platforms, large plumbing roll-ups, multi-state mechanical groups",
    highlight: "Enterprise US plumbing BPO combining consulting, dispatch, commercial sales ops, and back-office under one onshore contract.",
  },
];

export default function Top10PlumbingAnsweringServiceContent() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">INDUSTRY RANKINGS</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Top 10 Plumbing Answering Service Companies in USA (2026)
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 29, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 17 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-agent-headset.jpg" alt="Top US Plumbing Answering Service Companies 2026" fill className="object-cover" />
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
                A <strong>plumbing answering service</strong> is no longer a luxury — it's the difference between booking the 2 AM burst-pipe emergency and watching that $1,500 water-heater replacement go to the next plumber on Google. The average residential plumbing shop misses <strong>22-35% of after-hours calls</strong> because there's no one to triage them, and every missed emergency is a customer who will never call back. The smartest US plumbers now route every after-hours, weekend, and overflow call through a specialized <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound call center service</Link> that triages emergencies, books jobs into ServiceTitan or Housecall Pro live, and pages on-call technicians only when an emergency truly warrants it.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                In this 2026 guide, we rank the <strong>top 10 US plumbing answering service companies</strong>, evaluated on emergency-triage skill, live integration with ServiceTitan, Housecall Pro, Jobber, and FieldEdge, after-hours and on-call rotation handling, Spanish bilingual coverage for TX/FL/AZ/CA markets, and per-job ROI math. Whether you run a <strong>two-truck residential plumbing shop</strong>, a <strong>regional drain-and-sewer specialist</strong>, a <strong>water-heater installer</strong>, or a <strong>multi-state PE-backed plumbing group</strong>, this list will help you find the right American partner. For shops also covering property-management and commercial-real-estate accounts, see our <Link href="/industries/real-estate-call-center-services" className="text-red font-semibold hover:underline">real estate call center services</Link> guide.
              </p>

              {/* Key takeaways box */}
              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "The average plumbing shop misses 22-35% of after-hours calls — every miss is a $400-$15,000 job lost",
                    "Top US plumbing answering services book jobs live into ServiceTitan, Housecall Pro, Jobber, and FieldEdge",
                    "Four-bucket triage (burst pipe, sewer backup, slow leak, routine quote) decides escalation in under 60 seconds",
                    "Spanish bilingual 24/7 coverage is non-negotiable for TX/FL/AZ/CA/NV plumbing markets",
                    "One captured emergency water-heater or sewer-line job pays 3-12 months of answering service fees",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-agent-focus.jpg" alt="US plumbing answering service dispatcher triaging an emergency call" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* How We Ranked */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">How We Ranked the Top Plumbing Answering Service Companies</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                We evaluated each provider with a plumbing-specific methodology because generic answering-service rankings don't capture what matters when a homeowner is standing in two inches of water at 1 AM:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Emergency triage skill — burst pipe, sewer backup, no water, slow leak screening",
                  "Field-service software integration — live writes to ServiceTitan, Housecall Pro, Jobber, FieldEdge",
                  "After-hours, weekend, holiday, and on-call rotation handling",
                  "Spanish bilingual 24/7 coverage for TX, FL, AZ, CA, NV markets",
                  "Plumbing-vocabulary training — septic vs. sewer, fixture brands, code basics",
                  "SMS confirmation flow with technician name and ETA",
                  "Per-call, per-minute, and per-booked-appointment pricing options",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Company Rankings */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">The Top 10 Plumbing Answering Service Companies in the USA (2026)</h2>

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

                  {company.website.startsWith("/") ? (
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
                <Image src="/images/cc-team-collab.jpg" alt="US plumbing dispatch team coordinating after-hours emergencies" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* UNIQUE SECTION 1 — Plumbing emergency triage */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Plumbing Emergency Triage: What Your Answering Service Must Handle</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The single most valuable thing a plumbing answering service does — more than booking, more than SMS confirmations, more than software integration — is correctly triaging an emergency in the first 60 seconds of the call. Get it wrong, and you either drag a sleeping technician out of bed for a slow drip (burning out your team), or you tell a homeowner with a burst pipe to "schedule for tomorrow" and watch the lawsuit pile up. Every elite US plumbing answering service trains agents on the same four-bucket triage flow:
              </p>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { title: "Bucket 1: Burst pipe / active flooding", desc: "Escalate immediately. Page the on-call technician same-night. Screening question: 'Is water actively flooding right now?' followed by 'Have you shut the main off?' Average ticket: $800-$3,500 emergency repair plus restoration referral." },
                  { title: "Bucket 2: Sewer backup / no water", desc: "Book first slot next morning, or escalate same-night based on shop rules. Screening question: 'Are you on a septic system?' (changes the whole job). Average ticket: $400-$1,500 (clearing) up to $5,000-$15,000 (sewer-line replacement)." },
                  { title: "Bucket 3: Slow leak / dripping fixture", desc: "Book next-day or scheduled appointment. Screening question: 'Is water reaching anything that could be damaged — drywall, flooring, electronics?' If yes, escalate one bucket up. Average ticket: $150-$400." },
                  { title: "Bucket 4: Routine quote / non-urgent", desc: "Capture details, route to office during business hours, send SMS that office will call back next business day. No technician page. Average ticket: $150-$1,500 depending on scope." },
                ].map((bucket, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-white p-5">
                    <h4 className="font-bold text-navy">{bucket.title}</h4>
                    <p className="mt-2 text-sm text-gray-700">{bucket.desc}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The screening questions matter more than the script. A trained agent asks <em>"Is water actively flooding right now?"</em> and <em>"Is this a burst pipe?"</em> and <em>"Are you on a septic system?"</em> — three questions that decide the bucket and prevent both the false-emergency 2 AM page and the missed-emergency next-day callback.
              </p>

              {/* UNIQUE SECTION 2 — ServiceTitan, Housecall Pro, Jobber, FieldEdge integration */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">ServiceTitan, Housecall Pro, Jobber, FieldEdge for Plumbers: What Integration Actually Means</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Every plumbing answering service claims "ServiceTitan integration." Most of them mean "we'll email you a CSV at 8 AM." That's not integration — that's a data-entry tax. Real integration means the agent is logged into your dispatch software during the call and writes the work order live, before the homeowner hangs up. Here's what real integration with the major plumbing field-service platforms looks like:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Live job booking — agent writes the work order into your ServiceTitan or Housecall Pro calendar in real time, not via end-of-day batch",
                  "Technician availability checks — agent sees who's on the road, who's available, and books only into open slots that match the job type",
                  "On-call rotation lookup — agent reads the on-call schedule from your dispatch software so the right tech is paged automatically",
                  "Customer SMS confirmations — automatic SMS goes to the caller with the technician's name, photo, and live ETA, sent from your shop's number",
                  "Auto-create work order with caller-supplied issue description — the homeowner's words become the technician's pre-job notes, no retyping",
                  "Two-way sync — when your tech updates the job status in the field, the answering service sees it and can give the next caller an accurate \"earliest available\" time",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                If your answering service can't do all six of these natively into ServiceTitan, Housecall Pro, Jobber, or FieldEdge, you're paying premium money for a glorified message-taker.
              </p>

              {/* UNIQUE SECTION 3 — Plumbing lead pricing & ROI */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Plumbing Lead Pricing: Per-Job ROI Math for After-Hours Answering</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The ROI question every plumbing shop owner asks is the same: "Is this answering service worth $700 a month?" The answer is almost always yes — and it's not close. Look at the average residential plumbing service ticket by job type:
              </p>
              <div className="mt-6 overflow-hidden rounded-xl border border-gray-100">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-4 py-3 text-left font-bold text-navy">Job type</th>
                      <th className="px-4 py-3 text-left font-bold text-navy">Average ticket</th>
                      <th className="px-4 py-3 text-left font-bold text-navy">Months of answering service paid</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr><td className="px-4 py-3 text-gray-700">Drain clear (single fixture)</td><td className="px-4 py-3 text-gray-700">$150</td><td className="px-4 py-3 text-gray-700">~0.2 months</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Water heater repair</td><td className="px-4 py-3 text-gray-700">$400</td><td className="px-4 py-3 text-gray-700">~0.6 months</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Water heater replacement</td><td className="px-4 py-3 text-gray-700">$1,500-$3,500</td><td className="px-4 py-3 text-gray-700">2-5 months</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Sewer line replacement</td><td className="px-4 py-3 text-gray-700">$5,000-$15,000</td><td className="px-4 py-3 text-gray-700">7-21 months</td></tr>
                    <tr><td className="px-4 py-3 text-gray-700">Whole-home repipe</td><td className="px-4 py-3 text-gray-700">$8,000-$25,000</td><td className="px-4 py-3 text-gray-700">11-35 months</td></tr>
                  </tbody>
                </table>
              </div>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Assuming a $700/month answering service: <strong>one captured emergency water-heater replacement pays 2-5 months of fees. One sewer-line replacement pays 7-21 months. One whole-home repipe pays the entire year.</strong> If the service captures even one emergency that you would have otherwise missed every single month, your ROI is between 200% and 2,000%. The shops that don't have an after-hours plumbing answering service aren't saving money — they're donating jobs to the next plumber on Google.
              </p>

              {/* What to Look For */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What to Look For in a Plumbing Answering Service Partner</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Use this 10-point checklist when evaluating <strong>US plumbing answering service companies</strong>:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "100% US-based agents — homeowners can tell on the first sentence",
                  "Live integration into your field-service software (ServiceTitan, Housecall Pro, Jobber, FieldEdge)",
                  "Trained on the four-bucket plumbing emergency triage flow",
                  "Spanish bilingual coverage 24/7 (mandatory for TX, FL, AZ, CA, NV markets)",
                  "On-call rotation handling with primary/secondary escalation rules",
                  "SMS confirmation with technician name, photo, and live ETA",
                  "Plumbing-vocabulary training — septic vs. sewer, fixture brands (Moen, Kohler, Rinnai, Navien), code basics",
                  "Transparent per-call, per-minute, or per-booked-appointment pricing",
                  "Recorded calls with searchable transcripts for QA and dispute resolution",
                  "References from plumbing shops your size — not insurance agents or law firms",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-gray-700 leading-relaxed">
                For shops also serving property managers and commercial real estate clients, pair plumbing answering with <Link href="/industries/real-estate-call-center-services" className="text-red font-semibold hover:underline">real estate call center services</Link> and full <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound call center solutions</Link>.
              </p>

              {/* Trends */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Plumbing Answering Service Trends for 2026</h2>
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  { title: "AI Dispatch Optimization", desc: "Top US plumbing answering services now route emergencies using AI that factors in technician location, skill match (water heater vs. sewer specialist), drive time, and current job status — cutting response time by 18-32% versus rule-based dispatching." },
                  { title: "Smart-Leak-Detection Integrations", desc: "Moen Flo, Phyn, and Flume sensors now auto-create service tickets in plumbing answering services the moment they detect anomalous water flow — turning a $300 hardware alert into a $1,500 booked job in under 10 minutes." },
                  { title: "Dynamic Pricing for Emergency vs. Routine", desc: "Leading plumbing shops now charge a posted emergency premium (typically 1.5-2x the routine rate) and answering services are trained to quote it confidently on the call — eliminating the awkward Tuesday-morning invoice surprise." },
                  { title: "Spanish Bilingual Demand Growth", desc: "Spanish-first emergency calls now make up 25-40% of after-hours volume in TX, FL, AZ, CA, and NV plumbing markets. Shops without bilingual answering services lose those calls to the first competitor that picks up — usually within 90 seconds." },
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
                The <strong>US plumbing answering service industry</strong> has matured well past basic message-taking. The shops that win in 2026 partner with US-based providers that triage emergencies correctly in 60 seconds, write live work orders into ServiceTitan or Housecall Pro before the call ends, page on-call technicians only when warranted, and cover Spanish bilingual 24/7 in the markets where it matters. Every other shop is donating jobs to the next plumber on Google.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Global Empire Corporation tops our 2026 ranking with its full-service American plumbing answering practice, and <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> (#7) remains the patriotic US-only partner of choice — combining <strong>25+ years of US-based dispatch operations</strong>, deep integration with ServiceTitan, Housecall Pro, Jobber, and FieldEdge, 24/7 Spanish bilingual coverage, on-call rotation paging, and per-call, per-minute, and per-booked-appointment pricing options. Whether you need <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound plumbing call center services</Link> or you also work property-management and commercial accounts via <Link href="/industries/real-estate-call-center-services" className="text-red font-semibold hover:underline">real estate call center services</Link>, Contact Center USA is built for the plumbing shops that book every emergency.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Stop Missing After-Hours Plumbing Emergencies</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Contact Center USA delivers 24/7 US-based plumbing answering with live ServiceTitan, Housecall Pro, Jobber, and FieldEdge integration, four-bucket emergency triage, on-call rotation paging, and Spanish bilingual coverage. One captured water-heater or sewer-line job pays the whole year. Get a free plumbing answering quote today.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Plumbing Answering Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>

              {[
                { q: "What is a plumbing answering service?", a: "A plumbing answering service is a US-based call center staffed by trained agents who answer your shop's phones 24/7, triage emergencies (burst pipes, sewer backups, no-water calls), book service appointments, and dispatch on-call technicians directly into your field-service software (ServiceTitan, Housecall Pro, Jobber, FieldEdge). The best plumbing answering services act as a virtual front office — capturing every after-hours emergency, qualifying the issue, and either booking the job or paging the on-call plumber based on rules you set." },
                { q: "How much does a 24/7 plumbing answering service cost?", a: "US-based plumbing answering services typically cost $0.95-$1.65 per minute, $40-$120 per booked appointment, or $400-$1,200 per month for small shops. Per-call pricing for emergency-only after-hours coverage usually runs $4-$9 per qualified call. Given that one captured emergency water-heater replacement is worth $1,500-$3,500 and one sewer-line replacement is worth $5,000-$15,000, a single saved emergency job pays 3-12 months of answering service." },
                { q: "Can a plumbing answering service book jobs directly into ServiceTitan or Housecall Pro?", a: "Yes. The top US plumbing answering service companies integrate directly with ServiceTitan, Housecall Pro, Jobber, and FieldEdge to create work orders, check technician availability, schedule the job on your live calendar, and send the customer an SMS confirmation with the technician's name and ETA — all while the caller is still on the line. This eliminates the next-morning data-entry tax and keeps your dispatcher's calendar accurate in real time." },
                { q: "How do plumbing answering services triage emergencies?", a: "A trained plumbing answering service uses a four-bucket triage flow: (1) burst pipe or active flooding — escalate to the on-call tech immediately; (2) sewer backup or no water — book first slot next morning or escalate based on your rules; (3) slow leak or dripping fixture — book a same-day or next-day appointment; (4) routine quote or non-urgent question — route to the office during business hours. Screening questions like 'Is water actively flooding right now?' and 'Are you on a septic system?' decide the bucket in under 60 seconds." },
                { q: "Do plumbing answering services offer bilingual Spanish coverage?", a: "Yes, the top US plumbing answering services offer 24/7 Spanish bilingual coverage — critical for plumbers serving Texas, Florida, Arizona, California, Nevada, and other Hispanic-population markets where 25-40% of inbound emergency calls are Spanish-first. Bilingual triage is the difference between booking the job and losing it to the next plumber on Google." },
                { q: "Can a plumbing answering service handle on-call rotation for my technicians?", a: "Yes. Top providers maintain your on-call rotation schedule, page only the assigned technician for true emergencies, follow your escalation rules (page primary, wait 5 minutes, page secondary), and log every dispatch with timestamps so you have a clean audit trail for payroll and disputes. This eliminates the angry 2 AM phone calls to off-duty plumbers and protects your team from burnout." },
                { q: "What's the ROI of an after-hours plumbing answering service?", a: "The ROI math is brutal-simple. Average residential plumbing tickets: $150 (drain clear), $400 (water heater repair), $1,500-$3,500 (water heater replacement), $5,000-$15,000 (sewer line replacement). If your monthly answering service costs $600-$900 and captures even one emergency water-heater replacement per month, you've covered 3-4x your fee. Capture two sewer-line jobs per quarter and the service pays for itself for the entire year." },
                { q: "Should small plumbing shops use an answering service or hire an in-house dispatcher?", a: "For shops doing fewer than $2M in annual revenue, an outsourced plumbing answering service is almost always cheaper than a full-time dispatcher (a $48,000-$65,000/year salary plus benefits). An answering service gives you 24/7 coverage, no PTO gaps, no sick days, and no recruiting risk — and only charges for actual call time. Most small plumbers switch to in-house dispatch only after they pass $3M in revenue or hit 4-5 trucks." },
              ].map((faq, i) => (
                <div key={i} className="mt-6 border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-navy">{faq.q}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6">
                <HeroContactForm />

                {/* Related articles */}
                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h4 className="font-bold text-navy">Related Articles</h4>
                  <ul className="mt-4 space-y-3">
                    {[
                      { title: "Top 10 HVAC & Home Services Call Center Companies", href: "/blog/top-10-hvac-home-services-call-center-companies-usa" },
                      { title: "Top 10 Answering Service Companies in USA", href: "/blog/top-10-answering-service-companies-usa" },
                      { title: "After-Hours Answering Service for HVAC Companies", href: "/blog/after-hours-answering-service-hvac-companies" },
                      { title: "60-Second Lead Response Service", href: "/blog/60-second-lead-response-service" },
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
