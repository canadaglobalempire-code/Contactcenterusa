"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, Globe, DollarSign, Users, MapPin } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

const nearshoreLocations = [
  {
    country: "Mexico",
    icon: "🇲🇽",
    avgCost: "$12-18/hr",
    bilingual: "High",
    timezone: "Same or -1hr from US Central",
    highlights: [
      "Largest nearshore BPO market for the US with 100,000+ call center agents",
      "Strong timezone alignment — same hours as US Central and Mountain time zones",
      "Deep cultural proximity from shared border, media, and business ties",
      "Rapidly growing bilingual (English/Spanish) talent pool in cities like Monterrey, Guadalajara, and Mexico City",
      "Average agent costs 40-60% less than US-based equivalents",
      "Mature BPO infrastructure with major global providers operating locally",
    ],
  },
  {
    country: "Colombia",
    icon: "🇨🇴",
    avgCost: "$10-15/hr",
    bilingual: "Growing",
    timezone: "US Eastern (EST)",
    highlights: [
      "Fastest-growing nearshore BPO hub in Latin America",
      "Aligns with US Eastern Time — ideal for East Coast businesses",
      "Government-backed BPO incentives and free trade zone benefits",
      "Young, educated workforce with strong English-language training programs",
      "Major BPO hubs in Bogota, Medellin, and Barranquilla",
      "Competitive pricing — 50-65% savings compared to US-based operations",
    ],
  },
  {
    country: "Costa Rica",
    icon: "🇨🇷",
    avgCost: "$13-19/hr",
    bilingual: "High",
    timezone: "US Central (CST)",
    highlights: [
      "Politically stable democracy with strong rule of law",
      "Highest English proficiency in Central America",
      "Well-educated workforce — 98% literacy rate and strong university system",
      "Established BPO sector with 25+ years of outsourcing experience",
      "Premium nearshore destination — higher quality but slightly higher cost",
      "Strong data protection laws aligned with international standards",
    ],
  },
  {
    country: "El Salvador",
    icon: "🇸🇻",
    avgCost: "$9-14/hr",
    bilingual: "Moderate-High",
    timezone: "US Central (CST)",
    highlights: [
      "US dollar is the official currency — no exchange rate risk",
      "Strong cultural alignment with the US due to large diaspora connections",
      "Growing BPO sector with government investment in technology infrastructure",
      "Cost-effective alternative to Costa Rica and Mexico",
      "Central Time zone alignment for seamless US business hours coverage",
      "Improving English proficiency driven by BPO sector demand",
    ],
  },
  {
    country: "Honduras",
    icon: "🇭🇳",
    avgCost: "$8-12/hr",
    bilingual: "Moderate",
    timezone: "US Central (CST)",
    highlights: [
      "Most cost-effective nearshore option in Central America",
      "Growing BPO infrastructure centered in San Pedro Sula and Tegucigalpa",
      "US Central Time zone alignment",
      "Bilingual workforce expanding through government education initiatives",
      "Emerging destination attracting mid-market US companies",
      "60-70% cost savings compared to US-based call centers",
    ],
  },
];

const comparisonData = [
  { factor: "Hourly Agent Cost", nearshore: "$8-19/hr", offshore: "$6-12/hr", onshore: "$22-35/hr" },
  { factor: "Timezone Overlap", nearshore: "90-100%", offshore: "0-30%", onshore: "100%" },
  { factor: "Cultural Alignment", nearshore: "High", offshore: "Moderate", onshore: "Perfect" },
  { factor: "English Proficiency", nearshore: "Good-Excellent", offshore: "Good-Very Good", onshore: "Native" },
  { factor: "Travel Time (from US)", nearshore: "2-5 hours", offshore: "15-24 hours", onshore: "1-5 hours" },
  { factor: "Accent Neutrality", nearshore: "Moderate-High", offshore: "Low-Moderate", onshore: "Native" },
  { factor: "Data Security/Compliance", nearshore: "Moderate-High", offshore: "Varies widely", onshore: "Highest" },
  { factor: "Agent Turnover Rate", nearshore: "30-50%", offshore: "40-70%", onshore: "15-25%" },
  { factor: "Scalability", nearshore: "Good", offshore: "Excellent", onshore: "Good" },
  { factor: "Regulatory Compliance (HIPAA, PCI)", nearshore: "Varies", offshore: "Challenging", onshore: "Strongest" },
];

const pricingTiers = [
  { model: "Per-Agent (Dedicated)", nearshore: "$1,800-3,200/mo", offshore: "$1,200-2,200/mo", onshore: "$3,800-6,000/mo" },
  { model: "Per-Minute", nearshore: "$0.35-0.55", offshore: "$0.25-0.40", onshore: "$0.75-1.25" },
  { model: "Per-Call", nearshore: "$3.50-6.00", offshore: "$2.50-4.50", onshore: "$7.00-12.00" },
  { model: "Shared Agent (Per Hour)", nearshore: "$10-16", offshore: "$7-11", onshore: "$20-32" },
];

export default function NearshoreCallCenterContent() {
  return (
    <>
      {/* HERO */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-5">Outsourcing Guide</span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Nearshore Call Center Outsourcing: Complete Guide for US Businesses
          </h1>
          <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 4, 2026</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 15 min read</span>
          </div>
          <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
            <Image src="/images/cc-management.jpg" alt="Nearshore call center outsourcing guide for US businesses" fill className="object-cover" />
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
                <strong>Nearshore call center outsourcing</strong> has become one of the fastest-growing strategies for US businesses seeking to reduce customer support costs while maintaining quality and timezone alignment. With countries like <strong>Mexico, Colombia, Costa Rica, El Salvador, and Honduras</strong> emerging as major <strong>nearshore contact center</strong> hubs, American companies have more options than ever for outsourcing their call center operations to nearby countries.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-gray-700">
                But is <strong>nearshore outsourcing</strong> actually the best choice for your business? In this comprehensive guide, we compare nearshore vs offshore vs onshore models, break down the top nearshore locations, analyze real pricing data, and explain why a growing number of US businesses are choosing <Link href="/about" className="text-red font-semibold hover:underline">100% US-based call center partners</Link> like Contact Center USA over nearshore alternatives.
              </p>

              {/* Key takeaways */}
              <div className="mt-8 rounded-2xl bg-gray-50 border border-gray-100 p-6">
                <h3 className="text-lg font-bold text-navy">Key Takeaways</h3>
                <ul className="mt-3 space-y-2">
                  {[
                    "Nearshore call centers (Mexico, Colombia, Costa Rica) offer 40-65% cost savings vs US-based operations",
                    "Timezone alignment and cultural proximity are the biggest advantages of nearshore over offshore",
                    "Offshore outsourcing (Philippines, India) is cheaper but creates timezone, quality, and compliance challenges",
                    "Data security, HIPAA compliance, and regulatory risks are higher with any non-US outsourcing model",
                    "Many businesses are returning to onshore (US-based) call centers for quality, compliance, and brand protection",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* What is Nearshore */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">What Is Nearshore Call Center Outsourcing?</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Nearshore call center outsourcing</strong> is the practice of hiring a contact center in a nearby country — typically in Latin America or the Caribbean — to handle your customer support, sales, or back-office operations. For US businesses, nearshore destinations are primarily in Mexico, Central America, and South America, where geographic proximity offers advantages over distant <strong>offshore outsourcing</strong> locations like the Philippines or India.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                To fully understand the nearshore model, it helps to compare all three outsourcing approaches:
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
                {[
                  {
                    title: "Onshore (Domestic)",
                    desc: "Call center operations within the United States. Native English speakers, full regulatory compliance, same timezone coverage. Highest cost but highest quality and control.",
                    example: "Contact Center USA, TTEC, Alorica (US sites)",
                  },
                  {
                    title: "Nearshore",
                    desc: "Operations in nearby countries like Mexico, Colombia, or Costa Rica. Moderate cost savings, good timezone overlap, and reasonable cultural alignment with US customers.",
                    example: "Teleperformance (Mexico), Atento, Auxis",
                  },
                  {
                    title: "Offshore",
                    desc: "Operations in distant countries like the Philippines, India, or Bangladesh. Lowest cost but significant timezone gaps, accent challenges, and cultural differences.",
                    example: "Concentrix (PH), Infosys BPO, HCL",
                  },
                ].map((model, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-white p-5">
                    <h4 className="font-bold text-navy">{model.title}</h4>
                    <p className="mt-2 text-sm text-gray-700">{model.desc}</p>
                    <p className="mt-3 text-xs text-gray-500"><strong>Examples:</strong> {model.example}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6 text-gray-700 leading-relaxed">
                For a deeper analysis of all three models, read our comprehensive guide on <Link href="/blog/onshore-vs-offshore-vs-nearshore" className="text-red font-semibold hover:underline">onshore vs offshore vs nearshore outsourcing</Link>.
              </p>

              <div className="my-10 overflow-hidden rounded-2xl">
                <Image src="/images/cc-management.jpg" alt="Nearshore call center operations" width={800} height={450} className="w-full object-cover" />
              </div>

              {/* Top Nearshore Locations */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Top Nearshore Call Center Locations for US Businesses</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Not all <strong>nearshore call center</strong> destinations are created equal. Each country offers a different mix of cost, talent quality, bilingual capabilities, infrastructure maturity, and political stability. Here are the top five <strong>nearshore outsourcing</strong> locations for US businesses in 2026:
              </p>

              {nearshoreLocations.map((location, i) => (
                <motion.div
                  key={location.country}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4 }}
                  className="mt-8 rounded-2xl border border-gray-200 p-8"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-navy/5 text-2xl">
                      {location.icon}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-navy sm:text-2xl">{location.country}</h3>
                      <p className="mt-1 text-sm text-gray-600">
                        <strong>Avg. Cost:</strong> {location.avgCost} &nbsp;|&nbsp;
                        <strong>Bilingual Talent:</strong> {location.bilingual} &nbsp;|&nbsp;
                        <strong>Timezone:</strong> {location.timezone}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="space-y-2">
                      {location.highlights.map((item, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                          <span className="text-sm text-gray-700">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}

              {/* Nearshore vs Offshore Comparison Table */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Nearshore vs Offshore vs Onshore: Full Comparison</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                How does <strong>nearshore call center outsourcing</strong> stack up against <strong>offshore outsourcing</strong> (Philippines, India) and onshore (US-based) options? This side-by-side comparison covers the factors that matter most:
              </p>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-3 text-left font-semibold rounded-tl-lg">Factor</th>
                      <th className="p-3 text-left font-semibold">Nearshore (LatAm)</th>
                      <th className="p-3 text-left font-semibold">Offshore (Asia)</th>
                      <th className="p-3 text-left font-semibold rounded-tr-lg">Onshore (US)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonData.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 font-semibold text-navy">{row.factor}</td>
                        <td className="p-3 text-gray-700">{row.nearshore}</td>
                        <td className="p-3 text-gray-700">{row.offshore}</td>
                        <td className="p-3 text-gray-700">{row.onshore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                As the table shows, <strong>nearshore outsourcing</strong> occupies a middle ground between the low cost of <strong>offshore outsourcing</strong> and the premium quality of <strong>onshore call centers</strong>. However, for businesses that prioritize customer experience, data security, and regulatory compliance, the cost difference between nearshore and onshore is often smaller than expected — especially when you factor in hidden costs like management overhead, quality monitoring, and compliance risk.
              </p>

              {/* Benefits of Nearshore */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Benefits of Nearshore Call Center Outsourcing</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Nearshore contact center</strong> outsourcing offers several compelling advantages over offshore alternatives, making it an attractive option for US businesses that need cost savings without sacrificing too much quality:
              </p>

              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: <Clock className="h-6 w-6 text-red" />,
                    title: "Real-Time Timezone Alignment",
                    desc: "Nearshore locations in Latin America operate within 0-3 hours of US time zones. This means your outsourced team works the same business hours as your internal team — no overnight shifts, no delayed handoffs, and real-time collaboration on escalations and quality issues.",
                  },
                  {
                    icon: <Users className="h-6 w-6 text-red" />,
                    title: "Cultural Proximity",
                    desc: "Latin American nearshore agents have greater familiarity with US culture, business practices, and consumer expectations compared to offshore agents in Asia. This translates to more natural customer interactions and fewer cultural misunderstandings.",
                  },
                  {
                    icon: <MapPin className="h-6 w-6 text-red" />,
                    title: "Easy Travel & Site Visits",
                    desc: "A flight to Mexico City or Bogota takes 3-5 hours from most US cities — compared to 15-24 hours to Manila or Bangalore. This makes site visits, training sessions, and relationship building far more practical and cost-effective.",
                  },
                  {
                    icon: <DollarSign className="h-6 w-6 text-red" />,
                    title: "Significant Cost Savings",
                    desc: "Nearshore call centers typically deliver 40-60% cost savings compared to US-based operations. While not as cheap as offshore (Philippines, India), the improved quality, lower turnover, and reduced management overhead often deliver better total cost of ownership.",
                  },
                  {
                    icon: <Globe className="h-6 w-6 text-red" />,
                    title: "Bilingual Capabilities",
                    desc: "Many nearshore locations offer strong bilingual (English/Spanish) talent pools, which is increasingly valuable as the US Hispanic population grows. This enables you to serve both English and Spanish-speaking customers from a single nearshore location.",
                  },
                  {
                    icon: <CheckCircle className="h-6 w-6 text-red" />,
                    title: "Simpler Compliance",
                    desc: "Nearshore countries in Latin America generally have more favorable trade agreements, data transfer frameworks, and legal alignment with the US compared to offshore destinations in Asia. However, compliance remains more complex than fully onshore operations.",
                  },
                ].map((benefit, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: i * 0.05 }}
                    className="rounded-xl border border-gray-100 bg-white p-5"
                  >
                    <div className="mb-3">{benefit.icon}</div>
                    <h4 className="font-bold text-navy">{benefit.title}</h4>
                    <p className="mt-2 text-sm text-gray-700">{benefit.desc}</p>
                  </motion.div>
                ))}
              </div>

              {/* Challenges */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Challenges of Nearshore Outsourcing (And How to Mitigate Them)</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                While <strong>nearshore call center outsourcing</strong> addresses many of the pain points associated with offshore, it is not without its own challenges. Understanding these risks upfront will help you make a more informed decision:
              </p>

              <div className="mt-6 space-y-6">
                {[
                  {
                    challenge: "English Language Proficiency Varies Widely",
                    detail: "While countries like Costa Rica and Mexico have strong English-speaking talent pools, proficiency levels vary significantly by city, provider, and individual agent. Accent strength can also impact customer perception.",
                    mitigation: "Request English proficiency testing scores, listen to live or recorded calls, and prioritize providers in cities known for bilingual talent (e.g., Monterrey, Medellin, San Jose).",
                  },
                  {
                    challenge: "Data Security and Compliance Risks",
                    detail: "Outsourcing customer data to another country introduces additional data sovereignty, privacy, and compliance risks. HIPAA, PCI DSS, and state-level privacy laws (like CCPA) may be more difficult to enforce across borders.",
                    mitigation: "Require SOC 2 Type II certification, signed BAAs for healthcare data, PCI DSS compliance for payment processing, and contractual obligations around data residency and breach notification.",
                  },
                  {
                    challenge: "Political and Economic Instability",
                    detail: "Some nearshore countries face political uncertainty, currency fluctuations, or infrastructure reliability issues that can disrupt operations. This risk varies significantly by country.",
                    mitigation: "Choose politically stable countries (Costa Rica, Mexico) or dollarized economies (El Salvador). Build redundancy with multi-site strategies and ensure your contract includes business continuity provisions.",
                  },
                  {
                    challenge: "Management Overhead and Quality Control",
                    detail: "Managing a nearshore team still requires cross-border coordination, cultural sensitivity, and dedicated oversight. Many US companies underestimate the management effort required to maintain quality standards.",
                    mitigation: "Assign a dedicated account manager, establish clear KPIs and SLAs, conduct regular quality audits, and plan quarterly site visits. Consider whether this overhead erodes the cost savings compared to a US-based partner.",
                  },
                  {
                    challenge: "Agent Turnover",
                    detail: "The BPO industry in Latin America faces high agent turnover rates (30-50% annually in many markets), driven by competition between providers and the growth of the sector. This impacts training costs and service consistency.",
                    mitigation: "Negotiate turnover guarantees in your contract, require minimum tenure metrics, and choose providers that invest in agent development, career paths, and competitive compensation.",
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-xl border border-gray-100 bg-white p-6">
                    <h4 className="font-bold text-navy">{item.challenge}</h4>
                    <p className="mt-2 text-sm text-gray-700">{item.detail}</p>
                    <div className="mt-3 rounded-lg bg-gray-50 p-3">
                      <p className="text-sm"><strong className="text-navy">How to mitigate:</strong> <span className="text-gray-700">{item.mitigation}</span></p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Nearshore Pricing Guide */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Nearshore Call Center Pricing Guide (2026)</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Understanding <strong>nearshore call center</strong> pricing requires comparing multiple pricing models across nearshore, offshore, and onshore options. Here is what US businesses can expect to pay in 2026:
              </p>

              <div className="mt-8 overflow-x-auto">
                <table className="w-full text-sm border-collapse">
                  <thead>
                    <tr className="bg-navy text-white">
                      <th className="p-3 text-left font-semibold rounded-tl-lg">Pricing Model</th>
                      <th className="p-3 text-left font-semibold">Nearshore (LatAm)</th>
                      <th className="p-3 text-left font-semibold">Offshore (Asia)</th>
                      <th className="p-3 text-left font-semibold rounded-tr-lg">Onshore (US)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {pricingTiers.map((row, i) => (
                      <tr key={i} className={i % 2 === 0 ? "bg-gray-50" : "bg-white"}>
                        <td className="p-3 font-semibold text-navy">{row.model}</td>
                        <td className="p-3 text-gray-700">{row.nearshore}</td>
                        <td className="p-3 text-gray-700">{row.offshore}</td>
                        <td className="p-3 text-gray-700">{row.onshore}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Important:</strong> These are base rates and do not include hidden costs like management overhead, quality assurance programs, technology integration, compliance auditing, and travel expenses. When these are factored in, the true cost gap between nearshore and <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">onshore call center services</Link> is often 20-30% rather than the 40-60% headline savings that nearshore providers advertise.
              </p>

              {/* When to Choose Nearshore vs Onshore */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">When to Choose Nearshore vs Onshore (US-Based)</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                The right outsourcing model depends on your business priorities, customer expectations, and regulatory requirements. Here is a practical framework:
              </p>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div className="rounded-xl border-2 border-gray-200 p-6">
                  <h4 className="text-lg font-bold text-navy">Choose Nearshore When:</h4>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Cost reduction is your primary objective",
                      "You need bilingual English/Spanish support",
                      "Your calls are transactional and script-based",
                      "You have internal resources to manage offshore teams",
                      "Data sensitivity and compliance requirements are moderate",
                      "You need large-scale agent capacity quickly",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-gray-400" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-red/30 bg-red/[0.02] p-6">
                  <h4 className="text-lg font-bold text-navy">Choose Onshore (US-Based) When:</h4>
                  <ul className="mt-4 space-y-2">
                    {[
                      "Customer experience and brand perception are top priorities",
                      "You handle sensitive data (healthcare, financial, legal)",
                      "HIPAA, PCI DSS, or SOX compliance is required",
                      "Your customers expect native English-speaking agents",
                      "Complex, consultative calls require deep product knowledge",
                      "You want to minimize management overhead and quality risk",
                    ].map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* How to Evaluate Nearshore Providers */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">How to Evaluate Nearshore Call Center Providers</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                If you decide that <strong>nearshore call center outsourcing</strong> is the right fit for your business, use this evaluation framework to select the best provider:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Request recorded calls and live listening sessions to evaluate English proficiency and accent neutrality",
                  "Verify compliance certifications (SOC 2 Type II, PCI DSS, HIPAA BAA if applicable)",
                  "Ask for client references from US companies in your industry",
                  "Evaluate their technology stack — CRM integration, workforce management, quality monitoring, and reporting capabilities",
                  "Understand their agent recruitment, training, and retention processes",
                  "Review contract terms — minimum commitments, ramp timelines, termination clauses, and performance guarantees",
                  "Visit the facility in person before signing — evaluate the physical environment, management team, and agent quality firsthand",
                  "Ask about business continuity plans — what happens during power outages, natural disasters, or political disruptions?",
                  "Negotiate pilot programs — start with a small program (10-20 agents) before committing to a larger engagement",
                  "Calculate total cost of ownership including management overhead, travel, technology integration, and quality assurance",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 flex-shrink-0 text-red mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Why Businesses Are Choosing Onshore */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Why Many Businesses Are Choosing US-Based Over Nearshore</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Despite the cost advantages of <strong>nearshore outsourcing</strong>, a significant trend has emerged: <strong>US businesses are reshoring their call center operations</strong> back to domestic providers. According to industry data, 42% of companies that outsourced to nearshore or offshore locations between 2020-2024 have either partially or fully reshored their operations by 2026. The reasons include:
              </p>
              <ul className="mt-4 space-y-3">
                {[
                  "Customer satisfaction scores are 15-25% higher with US-based agents across most industries",
                  "First-call resolution rates improve by 20-30% with native English speakers who understand US culture",
                  "Compliance costs and risks with cross-border data handling often erode nearshore savings",
                  "Management overhead for nearshore operations (travel, oversight, quality programs) reduces actual savings to 20-30%",
                  "Agent turnover in nearshore locations (30-50%) creates constant retraining costs and quality inconsistency",
                  "US consumers increasingly prefer speaking with domestic agents — 68% say agent location impacts brand perception",
                  "Remote work has expanded the US talent pool, making domestic call center services more accessible and cost-competitive",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-gray-700">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-red" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Contact Center USA Advantage */}
              <div className="mt-12 rounded-2xl border-2 border-red/20 bg-red/[0.02] p-8">
                <h3 className="text-2xl font-bold text-navy">Contact Center USA&apos;s Advantage: 100% US-Based Agents</h3>
                <p className="mt-4 text-gray-700 leading-relaxed">
                  At <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link>, we provide a compelling alternative to nearshore outsourcing with our <strong>100% US-based call center services</strong>. With 25+ years of experience serving businesses across healthcare, financial services, technology, and professional services, we deliver the quality and compliance advantages of onshore operations with competitive pricing that often surprises companies exploring nearshore options.
                </p>
                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    "100% US-based, native English-speaking agents",
                    "HIPAA, PCI DSS, and SOC 2 compliant operations",
                    "No cross-border data security or compliance risks",
                    "24/7/365 availability across all US time zones",
                    "No minimum contracts or long-term commitments",
                    "Dedicated account management and quality assurance",
                    "Advanced AI-powered call routing and analytics",
                    "Seamless CRM and technology integration",
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 flex-shrink-0 text-red mt-0.5" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="mt-6 text-gray-700 leading-relaxed">
                  Whether you are currently using a nearshore provider and experiencing quality issues, or you are evaluating outsourcing options for the first time, Contact Center USA offers <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">inbound call center services</Link>, <Link href="/solutions/multilingual-call-center-services" className="text-red font-semibold hover:underline">multilingual support</Link>, and <Link href="/solutions/inbound-call-center-services" className="text-red font-semibold hover:underline">outbound programs</Link> that deliver better ROI than nearshore alternatives when you account for total cost of ownership.
                </p>
              </div>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">Considering Nearshore? Get a US-Based Quote First.</h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Before committing to nearshore outsourcing, compare with Contact Center USA&apos;s 100% US-based services. You may be surprised how competitive onshore pricing has become.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions About Nearshore Call Center Outsourcing</h2>

              {[
                {
                  q: "What is the difference between nearshore and offshore call center outsourcing?",
                  a: "Nearshore call center outsourcing involves partnering with a contact center in a nearby country (like Mexico, Colombia, or Costa Rica for US businesses), typically within 1-3 time zones. Offshore outsourcing means working with providers in distant countries like the Philippines or India, which are 10-13 hours ahead of US time. Nearshore offers better timezone alignment and cultural proximity, while offshore typically offers lower costs but greater communication and quality challenges.",
                },
                {
                  q: "How much does nearshore call center outsourcing cost?",
                  a: "Nearshore call center costs for US businesses typically range from $8-19 per hour depending on the country, complexity of work, and pricing model. Dedicated agents in Mexico average $12-18/hr, Colombia $10-15/hr, and Honduras $8-12/hr. Per-minute pricing ranges from $0.35-0.55. While these rates are 40-60% below US-based operations, total cost of ownership (including management overhead, travel, and compliance) often reduces actual savings to 20-30%.",
                },
                {
                  q: "Which country is best for nearshore call center outsourcing?",
                  a: "Mexico is the largest and most established nearshore market for US businesses, offering strong timezone alignment and cultural proximity. Colombia is the fastest-growing nearshore hub with competitive pricing. Costa Rica offers premium quality with the highest English proficiency. El Salvador provides US dollar-denominated pricing with no exchange rate risk. The best choice depends on your priorities: cost (Honduras), quality (Costa Rica), scale (Mexico), or growth potential (Colombia).",
                },
                {
                  q: "Is nearshore outsourcing better than the Philippines for US companies?",
                  a: "Nearshore outsourcing (Latin America) offers significant advantages over Philippines call center outsourcing for US businesses: same-day timezone alignment vs. 12-13 hour difference, easier site visits (3-5 hour flights vs. 15-24 hours), stronger cultural alignment with US consumers, and growing bilingual (English/Spanish) capabilities. The Philippines offers lower costs and a larger English-speaking talent pool, but timezone misalignment, accent challenges, and travel difficulty make nearshore the better choice for most quality-focused US companies.",
                },
                {
                  q: "Why are some companies moving back to US-based call centers from nearshore?",
                  a: "Many companies are reshoring from nearshore locations because the actual cost savings (after management overhead, travel, compliance, and quality costs) are smaller than expected — often 20-30% rather than the advertised 40-60%. Additionally, customer satisfaction scores are typically 15-25% higher with US-based agents, first-call resolution improves by 20-30%, and 68% of US consumers say agent location impacts their perception of a brand. Companies in regulated industries (healthcare, finance) face additional compliance risks with cross-border data handling.",
                },
              ].map((faq, i) => (
                <div key={i} className="mt-6 border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-navy">{faq.q}</h3>
                  <p className="mt-2 text-gray-700 leading-relaxed">{faq.a}</p>
                </div>
              ))}

              {/* Conclusion */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion: Is Nearshore Call Center Outsourcing Right for Your Business?</h2>
              <p className="mt-4 text-gray-700 leading-relaxed">
                <strong>Nearshore call center outsourcing</strong> is a legitimate strategy for US businesses seeking to reduce costs while maintaining reasonable quality and timezone alignment. Countries like Mexico, Colombia, Costa Rica, El Salvador, and Honduras each offer distinct advantages as <strong>nearshore contact center</strong> destinations, and the model is unquestionably better than <strong>offshore outsourcing</strong> for most US-facing customer support operations.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                However, the nearshore model is not without tradeoffs. English proficiency varies, compliance risk increases with cross-border data handling, agent turnover is higher than domestic operations, and the real cost savings — after accounting for management overhead, travel, and quality programs — are often 20-30% rather than the 40-60% that providers advertise.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                For businesses where customer experience, brand perception, data security, and regulatory compliance are paramount, <strong>US-based onshore call centers</strong> like <Link href="/" className="text-red font-semibold hover:underline">Contact Center USA</Link> offer a compelling alternative. With 100% US-based agents, full compliance certifications, no cross-border risks, and pricing that is increasingly competitive with nearshore options, onshore outsourcing may deliver better total value than many businesses expect.
              </p>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Whatever model you choose, the key is to <strong>calculate total cost of ownership</strong> — not just headline hourly rates — and to prioritize the factors that matter most to your customers and your business. <Link href="/contact" className="text-red font-semibold hover:underline">Contact us today</Link> for a free consultation to compare your nearshore options against US-based alternatives.
              </p>
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
                      { title: "Onshore vs Offshore vs Nearshore", href: "/blog/onshore-vs-offshore-vs-nearshore" },
                      { title: "Call Center Outsourcing Cost Guide", href: "/blog/call-center-outsourcing-cost" },
                      { title: "Benefits of US-Based Call Centers", href: "/blog/benefits-us-based-call-center" },
                      { title: "Top 15 Healthcare BPO Companies", href: "/blog/top-15-healthcare-bpo-companies-usa" },
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
