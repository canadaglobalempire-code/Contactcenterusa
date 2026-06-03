"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, Download } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

export default function Content() {
  return (
    <>
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-4">
              BUYER&apos;S TOOLKIT
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              How to Write a Call Center RFP (Free Template + Checklist)
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 15 min read</span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/cc-team-plan.jpg" alt="Call center RFP planning" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl leading-relaxed">
                  A bad <strong>call center RFP</strong> produces three proposals you can&apos;t compare, a 90-day vendor selection cycle, and a partner who doesn&apos;t actually do what you need. A good RFP produces apples-to-apples bids in 2–3 weeks and a partner who scales with you for 5+ years.
                </p>
                <p>
                  This guide gives you the complete structure, the exact 25 sections to include, and a downloadable template. We&apos;ve also added the scoring rubric that top BPO buyers use to evaluate responses — because writing the RFP is only half the work.
                </p>

                <div className="my-10 rounded-2xl border-2 border-red/20 bg-red/5 p-6">
                  <div className="flex items-start gap-4">
                    <Download className="h-6 w-6 flex-shrink-0 text-red mt-1" />
                    <div>
                      <h3 className="text-lg font-bold text-navy mb-2">Grab the Free Template</h3>
                      <p className="text-sm text-gray-700 mb-3">
                        25-section RFP template + vendor scoring rubric (Word + Excel). Delivered to your inbox in 60 seconds.
                      </p>
                      <Link href="/contact" className="inline-flex items-center gap-2 text-sm font-semibold text-red hover:text-red-dark">
                        Send me the template <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                </div>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The 5 Phases of a Call Center RFP</h2>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li><strong>Internal discovery</strong> (2 weeks): Understand your own requirements before asking vendors.</li>
                  <li><strong>RFP drafting</strong> (1 week): Write using the template below.</li>
                  <li><strong>Vendor shortlisting &amp; distribution</strong> (1 week): Send to 4–6 qualified vendors.</li>
                  <li><strong>Response + Q&amp;A window</strong> (3 weeks): Allow time for quality responses.</li>
                  <li><strong>Evaluation, demos, site visits</strong> (2–3 weeks): Pick your partner.</li>
                </ol>
                <p>Total: 9–10 weeks. Shorter is possible but rushes compromise quality.</p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The 25 Sections Every Call Center RFP Should Include</h2>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Part 1: Company &amp; Engagement Context</h3>
                <ol className="space-y-2 my-6 list-decimal pl-6">
                  <li><strong>Executive summary:</strong> Who you are, why you&apos;re issuing this RFP, and what you&apos;re looking for.</li>
                  <li><strong>Company overview:</strong> Industry, size, products, customer base.</li>
                  <li><strong>Project timeline:</strong> RFP dates, selection target, go-live target.</li>
                  <li><strong>Engagement model:</strong> Replacement, overflow, new buildout, or hybrid.</li>
                  <li><strong>Point of contact + response logistics:</strong> Email, Q&amp;A window, submission format.</li>
                </ol>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Part 2: Requirements &amp; Volume</h3>
                <ol start={6} className="space-y-2 my-6 list-decimal pl-6">
                  <li><strong>Services in scope:</strong> <Link href="/solutions/inbound-call-center-services" className="text-red hover:text-red-dark font-semibold">Inbound</Link>, <Link href="/solutions/outbound-call-center-services" className="text-red hover:text-red-dark font-semibold">outbound</Link>, chat, email, social, SMS.</li>
                  <li><strong>Call volume:</strong> Monthly contacts by channel, peak-to-trough ratio, forecast growth.</li>
                  <li><strong>Coverage hours:</strong> Time zones, weekends, holidays, 24x7?</li>
                  <li><strong>Language requirements:</strong> English, Spanish, others.</li>
                  <li><strong>Agent tier expectations:</strong> Tier-1 only, or Tier-1/2/3 specialization.</li>
                  <li><strong>Typical customer journey:</strong> What does a typical call look like from IVR to resolution?</li>
                </ol>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Part 3: Performance &amp; Quality</h3>
                <ol start={12} className="space-y-2 my-6 list-decimal pl-6">
                  <li><strong>KPI targets:</strong> AHT, CSAT, FCR, QA score, abandon rate, SLA.</li>
                  <li><strong>Quality assurance methodology:</strong> Calibration cadence, scoring framework, dispute process.</li>
                  <li><strong>Reporting requirements:</strong> Real-time dashboards, weekly QBRs, monthly BI.</li>
                  <li><strong>Service level agreements (SLAs) and penalties.</strong></li>
                </ol>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Part 4: Technology &amp; Integration</h3>
                <ol start={16} className="space-y-2 my-6 list-decimal pl-6">
                  <li><strong>CCaaS / telephony platform:</strong> Genesys, Five9, NICE, Talkdesk — which do you support?</li>
                  <li><strong>CRM integrations:</strong> Salesforce, HubSpot, Zendesk, custom.</li>
                  <li><strong>AI &amp; automation:</strong> Agent-assist, transcription, <Link href="/services/ai-call-center-automation" className="text-red hover:text-red-dark font-semibold">AI deflection</Link>.</li>
                  <li><strong>Data security &amp; compliance:</strong> SOC 2, HIPAA, PCI, GDPR, CCPA.</li>
                </ol>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Part 5: People &amp; Operations</h3>
                <ol start={20} className="space-y-2 my-6 list-decimal pl-6">
                  <li><strong>Hiring &amp; training:</strong> Sourcing, onboarding, ongoing training, nesting.</li>
                  <li><strong>Attrition &amp; tenure:</strong> 12-month agent tenure rate, historical attrition.</li>
                  <li><strong>Site locations &amp; WFH mix:</strong> Where will agents physically be?</li>
                  <li><strong>Business continuity:</strong> DR sites, redundancy, COVID-era lessons.</li>
                </ol>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Part 6: Commercial &amp; Contract</h3>
                <ol start={24} className="space-y-2 my-6 list-decimal pl-6">
                  <li><strong>Pricing model:</strong> Per-hour, per-minute, per-FTE, performance-based. Request a rate card.</li>
                  <li><strong>Commercial terms:</strong> Contract length, termination, volume commitments, escalators.</li>
                </ol>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The 5 Questions That Separate Serious Vendors from Wannabes</h2>
                <p>
                  Add these to your RFP. Vague responses = red flag.
                </p>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li>&quot;Show us your last 12 months of CSAT, FCR, and QA scores for 3 clients in our industry.&quot;</li>
                  <li>&quot;Walk us through how you handle a Tier-1 agent who misses SLA targets for 30 days straight.&quot;</li>
                  <li>&quot;Describe a client you lost in the last 24 months and why.&quot;</li>
                  <li>&quot;Who will actually run our account day-to-day? We want names and resumes.&quot;</li>
                  <li>&quot;If call volume drops 40% in one quarter, what happens to pricing and staffing?&quot;</li>
                </ol>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/hd-office-team.jpg" alt="Team reviewing vendor proposals" width={800} height={450} className="w-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Vendor Scoring Rubric (Weight Out of 100)</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>Experience in your industry (15%):</strong> Years, client logos, case studies.</li>
                  <li><strong>People &amp; delivery quality (20%):</strong> Tenure, attrition, training depth.</li>
                  <li><strong>Technology &amp; integrations (15%):</strong> Platform fit, AI capability, reporting.</li>
                  <li><strong>Commercial terms (15%):</strong> Price, flexibility, total cost.</li>
                  <li><strong>Security &amp; compliance (10%):</strong> Certifications, audit history.</li>
                  <li><strong>References &amp; case studies (10%):</strong> Actual client outcomes.</li>
                  <li><strong>Cultural fit &amp; responsiveness (10%):</strong> Did they listen? Did they ask good questions?</li>
                  <li><strong>Innovation &amp; roadmap (5%):</strong> AI, automation, and continuous improvement.</li>
                </ul>

                <h2 className="text-2xl function-bold text-navy mt-12 mb-4">RFP Mistakes That Cost You Good Partners</h2>
                <ul className="space-y-3 my-6">
                  <li><strong>Over-specifying solutions instead of problems.</strong> Tell vendors what outcome you want, not what tech you want them to use.</li>
                  <li><strong>Hiding your volume.</strong> Vague volumes produce vague quotes. Share the data.</li>
                  <li><strong>Distributing to 15 vendors.</strong> Top providers won&apos;t respond seriously to a cattle call. Stick to 4–6.</li>
                  <li><strong>Skipping the site visit or reference call.</strong> Paper-only evaluations miss too much.</li>
                  <li><strong>Optimizing only for price.</strong> The cheapest RFP usually produces the most expensive engagement.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How long should a call center RFP be?</h3>
                <p>Typically 15–30 pages. Shorter risks missing details; longer signals you&apos;re over-engineering.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How many vendors should I include?</h3>
                <p>4–6 pre-qualified providers. Use <Link href="/blog/top-10-bpo-companies-in-usa" className="text-red hover:text-red-dark font-semibold">top-10 BPO lists</Link> or our industry-specific rankings to shortlist.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Should I share my current vendor&apos;s pricing?</h3>
                <p>No. Share your current cost-per-contact or total annual spend only. Sharing exact rate cards anchors every response to that number.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Do I need an RFP if I&apos;m under 20 agents?</h3>
                <p>A lightweight RFQ (Request for Quote) is enough. Use the template but skip Parts 4 and 5 in depth.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Should I use an RFP consultant?</h3>
                <p>If the engagement is over $2M/year or your internal team has no RFP experience, yes. For most mid-market buys, a good template (like ours) is enough.</p>

                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">Skip the RFP. Get a Direct Quote.</h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    Not every buyer needs a 10-week RFP. If you know what you need, share your scope and we&apos;ll send a complete line-item proposal within 48 hours.
                  </p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors">
                    Request a Direct Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>

            <div className="lg:col-span-1">
              <div className="space-y-8">
                <div className="rounded-2xl bg-navy p-6"><HeroContactForm /></div>
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog/how-to-choose-call-center-partner" className="text-sm text-gray-600 hover:text-red transition-colors">How to Choose a Call Center Partner</Link></li>
                    <li><Link href="/blog/call-center-outsourcing-cost-per-hour-2026" className="text-sm text-gray-600 hover:text-red transition-colors">Call Center Cost Per Hour 2026</Link></li>
                    <li><Link href="/blog/in-house-vs-outsourced-call-center" className="text-sm text-gray-600 hover:text-red transition-colors">In-House vs Outsourced</Link></li>
                    <li><Link href="/blog/call-center-kpis" className="text-sm text-gray-600 hover:text-red transition-colors">Top 10 Call Center KPIs</Link></li>
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
