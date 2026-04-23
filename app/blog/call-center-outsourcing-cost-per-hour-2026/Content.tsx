"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

export default function Content() {
  return (
    <>
      {/* Hero */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-4">
              PRICING GUIDE
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Call Center Outsourcing Cost Per Hour in 2026 (Real Pricing by Country)
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> April 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 14 min read
              </span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image
                src="/images/hd-agents-working.jpg"
                alt="Call center agents at work — 2026 cost benchmarks"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl leading-relaxed">
                  If you are evaluating <strong>call center outsourcing in 2026</strong>, the single question buyers ask first is: <em>&quot;What am I actually going to pay per hour?&quot;</em> This guide answers that — with real 2026 rates by country, service type, agent seniority, and pricing model. No vague &quot;it depends&quot; answers. Just the numbers you need to size your budget, write your RFP, and negotiate smart.
                </p>

                <p>
                  These rates come from active pricing proposals, RFP responses, and quote comparisons across US, Latin American, Asian, and European providers as of Q1 2026. We&apos;ll break down exactly what&apos;s included at each price band, what&apos;s usually extra, and how to benchmark any quote you receive.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The Short Answer: 2026 Call Center Hourly Rates by Region</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>US onshore (tier-1 metros):</strong> $28–$42 per hour</li>
                  <li><strong>US onshore (tier-2 metros, work-from-home):</strong> $22–$32 per hour</li>
                  <li><strong>Nearshore (Mexico, Costa Rica, Colombia):</strong> $12–$22 per hour</li>
                  <li><strong>Nearshore (Dominican Republic, Jamaica, El Salvador):</strong> $10–$16 per hour</li>
                  <li><strong>Offshore (Philippines):</strong> $8–$14 per hour</li>
                  <li><strong>Offshore (India):</strong> $6–$12 per hour</li>
                  <li><strong>Offshore (South Africa, Eastern Europe):</strong> $10–$18 per hour</li>
                </ul>
                <p>
                  Those ranges are fully-loaded — meaning they include agent wages, supervision, facilities, technology, and provider margin. They do <em>not</em> include setup fees, dedicated QA, or custom integration work. We cover those in detail below.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">US-Based (Onshore) Call Center Rates in 2026</h2>
                <p>
                  A <Link href="/blog/american-call-centers" className="text-red hover:text-red-dark font-semibold">US-based call center</Link> will run you more than any offshore alternative, but the gap is narrower than most buyers assume once you add up the true cost of offshore quality issues, turnover, and customer churn.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Tier-1 US metros (NYC, SF, LA, Boston, Seattle)</h3>
                <p>
                  <strong>$32–$42 per hour</strong> fully loaded. These are typically brick-and-mortar contact centers with senior agents, high-end tech stacks, and strong English proficiency. Expect PCI, HIPAA, and SOC 2 coverage as standard.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Tier-2 US metros (Austin, Charlotte, Phoenix, Columbus)</h3>
                <p>
                  <strong>$24–$32 per hour</strong>. This is the sweet spot for most mid-market buyers. You get native-English agents and full US labor law protections at a 20–25% discount vs. tier-1 metros. Explore <Link href="/call-center-services-austin" className="text-red hover:text-red-dark font-semibold">Austin</Link>, <Link href="/call-center-services-charlotte" className="text-red hover:text-red-dark font-semibold">Charlotte</Link>, <Link href="/call-center-services-phoenix" className="text-red hover:text-red-dark font-semibold">Phoenix</Link>, and <Link href="/call-center-services-columbus" className="text-red hover:text-red-dark font-semibold">Columbus</Link> for specific market rates.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">US work-from-home (WFH) agents</h3>
                <p>
                  <strong>$22–$28 per hour</strong>. Post-COVID, distributed US agent networks have become genuinely competitive. Quality varies — top providers vet, train, and monitor remote agents as rigorously as brick-and-mortar. <Link href="/solutions/work-from-home-solutions" className="text-red hover:text-red-dark font-semibold">WFH solutions</Link> are now the default for many brands prioritizing domestic support at a lower cost.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/agents-working.jpg" alt="US-based call center operation" width={800} height={450} className="w-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Nearshore Call Center Rates in 2026</h2>
                <p>
                  Nearshore has exploded in 2026. Rates are 40–60% lower than US onshore, time zones overlap with the US, and bilingual Spanish/English coverage is standard. See our full <Link href="/blog/nearshore-call-center-outsourcing" className="text-red hover:text-red-dark font-semibold">nearshore outsourcing guide</Link> for country-level detail.
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Mexico (Monterrey, Tijuana, Guadalajara):</strong> $14–$22/hr. Strong bilingual talent, USMCA data rules.</li>
                  <li><strong>Costa Rica:</strong> $14–$20/hr. High English proficiency, stable politics, premium nearshore pricing.</li>
                  <li><strong>Colombia (Bogota, Medellin):</strong> $12–$18/hr. Large talent pool, neutral Spanish accent.</li>
                  <li><strong>Dominican Republic:</strong> $10–$14/hr. Cost-effective bilingual, strong for retail/e-commerce.</li>
                  <li><strong>El Salvador, Guatemala, Honduras:</strong> $9–$13/hr. Entry-tier nearshore.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Offshore Call Center Rates in 2026</h2>
                <p>
                  Offshore remains the cheapest option, but not the best value for US-facing customer bases. Our <Link href="/blog/onshore-vs-offshore-vs-nearshore" className="text-red hover:text-red-dark font-semibold">onshore vs. offshore comparison</Link> breaks down the full trade-off.
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Philippines (Manila, Cebu, Davao):</strong> $8–$14/hr. Best-in-class English for offshore.</li>
                  <li><strong>India (Bangalore, Hyderabad, Pune):</strong> $6–$12/hr. Strong for tech support, back-office.</li>
                  <li><strong>South Africa (Cape Town, Johannesburg):</strong> $12–$18/hr. Neutral-accent English, EU-aligned time zones.</li>
                  <li><strong>Eastern Europe (Poland, Romania, Bulgaria):</strong> $14–$22/hr. Multilingual European coverage.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Rate Variation by Service Type</h2>
                <p>
                  A single hourly rate doesn&apos;t apply across all services. Expect these multipliers on the base rates above:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Basic <Link href="/solutions/inbound-call-center-services" className="text-red hover:text-red-dark font-semibold">inbound customer service</Link>:</strong> 1.0x (baseline).</li>
                  <li><strong><Link href="/solutions/outbound-call-center-services" className="text-red hover:text-red-dark font-semibold">Outbound sales</Link> / lead generation:</strong> 1.1–1.3x. Higher due to TCPA compliance, dialers, and turnover.</li>
                  <li><strong><Link href="/solutions/technical-support-outsourcing" className="text-red hover:text-red-dark font-semibold">Tier-2/3 technical support</Link>:</strong> 1.3–1.6x. Specialized training required.</li>
                  <li><strong>Healthcare / <Link href="/services/debt-collection-outsourcing" className="text-red hover:text-red-dark font-semibold">collections</Link> / financial services:</strong> 1.2–1.4x. Regulated industries.</li>
                  <li><strong><Link href="/solutions/multilingual-call-center-services" className="text-red hover:text-red-dark font-semibold">Multilingual</Link> (beyond Spanish/English):</strong> 1.2–1.5x per additional language.</li>
                  <li><strong>Overnight / holiday / 24x7:</strong> 1.25–1.5x for nighttime, 2x for holidays.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Hourly Rate vs. Per-Minute vs. Per-FTE: Which Actually Saves You Money?</h2>
                <p>
                  Most buyers fixate on the hourly rate. But the pricing <em>model</em> can swing your total spend by 30–40%.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Per-hour (shared)</h3>
                <p>
                  You pay for every hour an agent is logged into your queue. Works if volume is predictable.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Per-minute</h3>
                <p>
                  You pay only for talk-time. Rates: $0.75–$1.40/min (US), $0.45–$0.85/min (nearshore), $0.30–$0.65/min (offshore). Best for low-volume or overflow coverage.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Dedicated FTE (monthly)</h3>
                <p>
                  A full-time agent exclusively on your account. US: $3,800–$6,200/mo per FTE. Nearshore: $2,200–$3,400/mo. Offshore: $1,400–$2,200/mo. Always cheaper per hour than hourly billing if utilization is greater than ~70%.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Performance-based</h3>
                <p>
                  Pay per qualified lead, appointment, or sale. Common in <Link href="/solutions/lead-generation-appointment-setting" className="text-red hover:text-red-dark font-semibold">lead generation</Link> and <Link href="/services/telemarketing-services" className="text-red hover:text-red-dark font-semibold">telemarketing</Link>. Higher per-unit cost but zero risk on unqualified activity.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Hidden Costs That Don&apos;t Show Up in the Hourly Rate</h2>
                <p>
                  The hourly rate is only 70–85% of your real spend. Budget the rest:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Setup / onboarding:</strong> $2,000–$20,000 one-time.</li>
                  <li><strong>Dedicated QA and monitoring:</strong> $500–$2,500/month.</li>
                  <li><strong>Custom reporting / BI:</strong> $300–$1,500/month.</li>
                  <li><strong>CRM / telephony integration:</strong> $2,000–$15,000 one-time.</li>
                  <li><strong>Training updates / new campaigns:</strong> $500–$2,500 per event.</li>
                  <li><strong>Minimum volume shortfall fees:</strong> Usually 15–25% of the shortfall.</li>
                  <li><strong>Early termination:</strong> 1–3 months of fees.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">How to Benchmark Any Quote You Receive</h2>
                <p>
                  Here&apos;s a 3-step check buyers use to know if a quote is fair:
                </p>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li><strong>Normalize to a single unit.</strong> Convert per-minute, per-call, and per-FTE quotes to an effective per-hour rate using your forecast volume.</li>
                  <li><strong>Compare to the region&apos;s published range</strong> (see tables above). Anything 20%+ below range = ask what&apos;s missing. Anything 20%+ above = ask for unbundling.</li>
                  <li><strong>Stress-test utilization.</strong> Ask: &quot;What if my volume is 30% lower than forecast?&quot; Dedicated FTE and hourly contracts can lock you into idle-time costs.</li>
                </ol>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">2026 Hourly Rate Trends to Watch</h2>
                <p>
                  A few shifts are actively moving rates right now:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>AI deflection</strong> is removing 25–40% of Tier-1 call volume at top providers, pushing agent rates up (harder calls only) but lowering total spend. See our <Link href="/services/ai-call-center-automation" className="text-red hover:text-red-dark font-semibold">AI call center automation</Link> page for details.</li>
                  <li><strong>Nearshore premiums</strong> are rising as US demand outpaces supply in Costa Rica and Colombia.</li>
                  <li><strong>Philippines wages</strong> grew 11% YoY in 2025; gap to nearshore is narrowing.</li>
                  <li><strong>Indian BPO consolidation</strong> (TCS, Infosys, Wipro) is pushing premium tiers higher while commodity tiers remain flat.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">What is the average hourly rate for a US call center in 2026?</h3>
                <p>
                  The average fully-loaded hourly rate for a US-based call center in 2026 is <strong>$26 per hour</strong>, with tier-2 metro and WFH providers clustering at $22–$28, and tier-1 urban providers at $32–$42.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Why is there a huge price gap between India and the US?</h3>
                <p>
                  Labor costs, cost-of-living, real estate, and regulatory overhead. US agents earn 4–6x Indian agent wages, drive higher real estate costs, and require compliance frameworks (HIPAA, PCI, SOC 2) that add 10–15% to infrastructure.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Is $15/hour realistic for US call center outsourcing?</h3>
                <p>
                  No. Any US provider quoting below $20/hour is either using offshore staff (check!), sharing an agent across 5+ accounts, or cutting compliance / QA. The true floor for dedicated US agents in 2026 is around $22/hour.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How much should I budget for a 10-agent outsourced team?</h3>
                <p>
                  At US rates (24/7 coverage, dedicated FTEs, full QA): plan on <strong>$45,000–$62,000 per month</strong>. Nearshore equivalent: $28,000–$40,000. Offshore: $18,000–$28,000.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Do rates include technology and software?</h3>
                <p>
                  Usually yes — dialer, ACD, IVR, call recording, and basic reporting are typically bundled. What&apos;s <em>not</em> included: custom CRM integrations, specialized QA tools, and third-party software licenses (Salesforce, Zendesk seats, etc.).
                </p>

                {/* CTA */}
                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">Get a Real Quote in 24 Hours</h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    Skip the generic ranges. Share your call volume and service needs — we&apos;ll send you a line-item proposal with exact hourly, per-minute, and FTE pricing for your use case.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors"
                  >
                    Get My Custom Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div className="rounded-2xl bg-navy p-6">
                  <HeroContactForm />
                </div>
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li>
                      <Link href="/blog/call-center-outsourcing-cost" className="text-sm text-gray-600 hover:text-red transition-colors">
                        Call Center Outsourcing Cost: Complete 2026 Guide
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/in-house-vs-outsourced-call-center" className="text-sm text-gray-600 hover:text-red transition-colors">
                        In-House vs Outsourced Call Center: True Cost Comparison
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/onshore-vs-offshore-vs-nearshore" className="text-sm text-gray-600 hover:text-red transition-colors">
                        Onshore vs Offshore vs Nearshore
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/call-center-rfp-template" className="text-sm text-gray-600 hover:text-red transition-colors">
                        How to Write a Call Center RFP (with Free Template)
                      </Link>
                    </li>
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
