import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { InlineLeadCTA } from "@/components/shared/InlineLeadCTA";
import { LeadCTALink } from "@/components/shared/LeadCTALink";

export default function Content() {
  return (
    <>
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div
          >
            <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-4">
              COST COMPARISON
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              In-House vs Outsourced Call Center: True Cost Comparison (2026)
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> April 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 13 min read
              </span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/cc-management.jpg" alt="Call center management comparison" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl leading-relaxed">
                  Most <strong>in-house vs outsourced call center</strong> comparisons skip over 40% of the real costs. They compare agent wages and call it a day. This guide walks through every line item — salaries, benefits, real estate, technology, turnover, QA, compliance, and management overhead — so you can make the actual decision your CFO wants to see.
                </p>
                <p>
                  Spoiler: for most US businesses under 100 agents, outsourcing is 30–55% cheaper. For specialized or regulated functions, it&apos;s closer to breakeven. We&apos;ll show you exactly where the line is.
                </p>

                <InlineLeadCTA
                  ctaLocation="in_house_vs_outsourced_top_inline_cta"
                  leadOffer="In-house vs outsourced cost analysis"
                  heading="Want your own build-vs-buy comparison?"
                  body="Share your agent count, hours, tools, and current costs. We'll build a side-by-side view of in-house vs outsourced operations."
                  primaryLabel="Get My Cost Comparison"
                  serviceHref="/solutions/customer-service-outsourcing"
                  serviceLabel="See outsourcing options"
                />

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The 20-Agent Case Study: Full Cost Breakdown</h2>
                <p>
                  We&apos;ll compare a 20-agent operation running 12×5 coverage (weekdays, no overnight) handling inbound customer service.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">In-House: True Annual Cost</h3>
                <ul className="space-y-3 my-6">
                  <li><strong>Agent base salaries</strong> (20 × $42,000 avg): $840,000</li>
                  <li><strong>Benefits &amp; payroll taxes</strong> (30% of salary): $252,000</li>
                  <li><strong>Supervisors</strong> (2 at $68,000 + benefits): $176,800</li>
                  <li><strong>Operations manager</strong> (1 at $95,000 + benefits): $123,500</li>
                  <li><strong>QA / trainer</strong> (1 at $58,000 + benefits): $75,400</li>
                  <li><strong>Facility lease + utilities</strong> (3,500 sq ft): $95,000</li>
                  <li><strong>Workstations, phones, PCs</strong> (amortized): $38,000</li>
                  <li><strong>Telephony + ACD + CRM software</strong>: $72,000</li>
                  <li><strong>WFM + QA + analytics tools</strong>: $36,000</li>
                  <li><strong>Recruiting + training</strong> (40% turnover, $2,500 per hire × 8 replacements): $20,000</li>
                  <li><strong>Compliance audits + legal</strong>: $25,000</li>
                  <li><strong>HR + payroll allocation</strong>: $18,000</li>
                </ul>
                <p>
                  <strong>Total annual cost: ~$1,771,700</strong> — or roughly <strong>$7,382 per agent per month</strong> fully loaded.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Outsourced (US-Based, Dedicated Agents)</h3>
                <ul className="space-y-3 my-6">
                  <li><strong>Dedicated FTE fee</strong> (20 × $4,400/mo blended): $1,056,000</li>
                  <li><strong>Onboarding + setup</strong> (one-time amortized): $8,000</li>
                  <li><strong>Custom integrations / reporting</strong>: $18,000</li>
                  <li><strong>QA uplift / dedicated analyst</strong>: $24,000</li>
                </ul>
                <p>
                  <strong>Total annual cost: ~$1,106,000</strong> — or roughly <strong>$4,608 per agent per month</strong>.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Outsourced (Nearshore)</h3>
                <p>
                  20 dedicated FTEs in Mexico or Colombia: <strong>$672,000 annually</strong> ($2,800/mo per FTE).
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Outsourced (Offshore — Philippines)</h3>
                <p>
                  20 dedicated FTEs: <strong>$432,000 annually</strong> ($1,800/mo per FTE).
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The Real Savings Picture</h2>
                <ul className="space-y-3 my-6">
                  <li>In-house: $1,771,700</li>
                  <li>Outsourced US-based: $1,106,000 → <strong>saves $665,700/yr (38%)</strong></li>
                  <li>Outsourced nearshore: $672,000 → <strong>saves $1,099,700/yr (62%)</strong></li>
                  <li>Outsourced offshore: $432,000 → <strong>saves $1,339,700/yr (76%)</strong></li>
                </ul>
                <p>
                  For detailed per-hour rate benchmarks by country, see our <Link href="/blog/call-center-outsourcing-cost-per-hour-2026" className="text-red hover:text-red-dark font-semibold">2026 hourly rate guide</Link>.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/hd-agents-pair.jpg" alt="Outsourced call center team" width={800} height={450} className="w-full object-cover" />
                </div>

                <InlineLeadCTA
                  eyebrow="Quote checkpoint"
                  ctaLocation="in_house_vs_outsourced_mid_article_cta"
                  leadOffer="In-house vs outsourced cost analysis"
                  heading="Turn this benchmark into a CFO-ready cost model."
                  body="We'll compare salaries, benefits, QA, software, coverage, and outsourced FTE pricing against your real operation."
                  primaryLabel="Request Cost Model"
                  serviceHref="/solutions/customer-service-outsourcing"
                  serviceLabel="Review outsourcing services"
                />

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Hidden Costs of In-House That Nobody Tells You</h2>
                <p>
                  The table above is the &quot;clean&quot; comparison. Reality adds another 8–15% to the in-house side:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Turnover chaos.</strong> Industry-average call center turnover is 35–45%. Every departure costs 0.5–1.5x annual salary in lost productivity.</li>
                  <li><strong>Peak coverage gaps.</strong> You staff for average volume, not peak. Missed calls = lost revenue. Outsourcers flex in hours; you can&apos;t hire a temp headcount in a week.</li>
                  <li><strong>Technology refresh cycles.</strong> Every 3–5 years you&apos;re ripping out telephony or CRM. Outsourcers absorb that cost.</li>
                  <li><strong>PTO + sick coverage.</strong> To maintain 20 working agents, you need ~22 on payroll.</li>
                  <li><strong>Management bandwidth.</strong> Your COO spending 10 hours/week on call center ops is $25,000+ of opportunity cost annually.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">When In-House Actually Makes Sense</h2>
                <p>
                  Outsourcing isn&apos;t universally cheaper. In-house wins when:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Your agents are a product differentiator.</strong> Luxury brands, high-touch B2B, or premium CX strategies where agent-customer relationships drive retention.</li>
                  <li><strong>Domain knowledge takes 6+ months to build.</strong> Pharma clinical trial support, securities trading, complex SaaS.</li>
                  <li><strong>Extreme data sensitivity.</strong> Classified government work, certain healthcare research.</li>
                  <li><strong>Very low volume.</strong> Under 5 agents, outsourcer minimums often eat the savings.</li>
                  <li><strong>You already have the infrastructure</strong> and just need to add capacity — sunk-cost logic may keep in-house cheaper for a while.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">When Outsourcing Almost Always Wins</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>24/7 or overnight coverage.</strong> In-house 24/7 nearly triples staffing cost. Outsourcers have the shift infrastructure already built.</li>
                  <li><strong>Seasonal spikes.</strong> E-commerce, tax, insurance open enrollment — your <Link href="/industries/ecommerce-customer-service-outsourcing" className="text-red hover:text-red-dark font-semibold">e-commerce</Link> Q4 or tax season should never be built on permanent headcount.</li>
                  <li><strong>Multilingual coverage.</strong> Hiring a Spanish/Mandarin/Portuguese agent in the US is expensive and slow. <Link href="/solutions/multilingual-call-center-services" className="text-red hover:text-red-dark font-semibold">Multilingual outsourcing</Link> is native.</li>
                  <li><strong>Under-100-agent operations.</strong> Fixed costs of in-house dominate; outsourcer scale wins.</li>
                  <li><strong>Regulated industries where you don&apos;t want to maintain compliance.</strong> <Link href="/industries/healthcare-call-center-services" className="text-red hover:text-red-dark font-semibold">HIPAA</Link>, <Link href="/services/fraud-prevention-cyber-security" className="text-red hover:text-red-dark font-semibold">PCI-DSS</Link>, SOC 2 are expensive to maintain internally.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The Hybrid Model: Often the Right Answer</h2>
                <p>
                  Many successful operations run a small in-house team for complex escalations and VIP accounts, with an outsourcer handling Tier-1 volume, overflow, and after-hours. You keep brand-critical touchpoints in-house and flex the rest. Typical savings vs full in-house: 25–35%, with better coverage.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Quality: The Honest Part of the Comparison</h2>
                <p>
                  Offshore outsourcers have historically scored 12–18% lower on CSAT vs domestic in-house teams. But in 2026, the gap for well-managed <Link href="/solutions/customer-service-outsourcing" className="text-red hover:text-red-dark font-semibold">US-based outsourcers</Link> is typically under 5% — and often inverted because outsourcers invest more in agent training and QA than mid-sized in-house teams can afford.
                </p>
                <p>
                  What matters more than onshore vs. outsourced: vendor selection, KPI alignment, and QA rigor. See our <Link href="/blog/how-to-choose-call-center-partner" className="text-red hover:text-red-dark font-semibold">partner selection guide</Link>.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Decision Framework: Build vs. Buy in 5 Questions</h2>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li>Is call center operations a core competency or cost center for your business?</li>
                  <li>Will you need less than 50 agents, or more than 200?</li>
                  <li>Do you have predictable, 9–5 volume, or spiky / 24/7 demand?</li>
                  <li>Are you in a regulated industry where compliance costs dominate?</li>
                  <li>Can your leadership team spend 10–15 hrs/week managing an internal ops group?</li>
                </ol>
                <p>
                  Three or more &quot;outsourcing-friendly&quot; answers → outsource. Three or more &quot;in-house-friendly&quot; answers → build. Anything in between → hybrid.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Is it cheaper to outsource a call center?</h3>
                <p>
                  For 90% of US businesses under 100 agents, yes — outsourcing saves 30–60% vs in-house when you account for all costs including benefits, facilities, technology, and management.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">At what size does in-house become cheaper?</h3>
                <p>
                  Typically around 200–300+ agents in a single location, where fixed-cost leverage kicks in and you can match outsourcer scale on technology.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Will CX quality suffer if I outsource?</h3>
                <p>
                  Not if you pick a good partner. Top US-based outsourcers routinely match or beat in-house CSAT scores because they invest more in training and QA than most mid-market in-house teams can.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How long does the transition take?</h3>
                <p>
                  A well-run in-house-to-outsourced transition takes 60–90 days for training, shadowing, and phased volume handoff. Rushed transitions (30 days or less) are where CSAT dips happen.
                </p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Can I partially outsource?</h3>
                <p>
                  Yes. The hybrid model — in-house for Tier-2 and VIP, outsourced for Tier-1 and overflow — is the most common structure at mid-market scale.
                </p>

                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">Get a Side-by-Side Cost Analysis</h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    Share your current operation (or planned build) and we&apos;ll build a line-by-line comparison showing what outsourcing with us would cost vs. your in-house model.
                  </p>
                  <LeadCTALink ctaLocation="in_house_vs_outsourced_bottom_cta" leadOffer="In-house vs outsourced cost analysis" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors">
                    Request My Comparison <ArrowRight className="h-4 w-4" />
                  </LeadCTALink>
                </div>
              </article>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div className="rounded-2xl bg-navy p-6">
                  <HeroContactForm
                    ctaLocation="in_house_vs_outsourced_sidebar_form"
                    leadOffer="In-house vs outsourced cost analysis"
                    title="Get a Cost Comparison"
                    description="Tell us your current or planned call center size."
                    submitLabel="Request Comparison"
                  />
                </div>
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog/call-center-outsourcing-cost-per-hour-2026" className="text-sm text-gray-600 hover:text-red transition-colors">Call Center Cost Per Hour in 2026</Link></li>
                    <li><Link href="/blog/call-center-outsourcing-cost" className="text-sm text-gray-600 hover:text-red transition-colors">Call Center Outsourcing Cost Guide</Link></li>
                    <li><Link href="/blog/how-to-choose-call-center-partner" className="text-sm text-gray-600 hover:text-red transition-colors">How to Choose a Call Center Partner</Link></li>
                    <li><Link href="/blog/benefits-us-based-call-center" className="text-sm text-gray-600 hover:text-red transition-colors">Benefits of US-Based Call Centers</Link></li>
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
