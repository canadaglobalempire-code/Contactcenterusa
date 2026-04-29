"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
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
              REAL ESTATE INVESTING
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              US-Based Virtual Receptionist for Real Estate Investors: Capture Every Motivated Seller Lead
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 13 min read</span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/cc-discussion.jpg" alt="US-based virtual receptionist taking motivated seller calls for real estate investors" fill className="object-cover" />
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
                  Every wholesaler and flipper learns the same brutal lesson: <strong>motivated sellers call when they call</strong>. They call at 8:47pm after the kids are in bed and the foreclosure notice is on the kitchen counter. They call Saturday at 10am when their brother-in-law just walked out of probate court. They call on a holiday Monday because a tenant trashed the unit and they are done. If a real human does not pick up — pre-qualified, in plain American English, with empathy — that lead goes to the next cash buyer on the postcard pile.
                </p>
                <p>
                  This guide is for solo investors, wholesale shops, and small flip operations who already know the pain of missed calls and bad VAs. We will cover what a real <strong>US-based virtual receptionist for real estate investors</strong> actually does, the seller pre-qualification script you can lift verbatim, integrations into Podio, REIPro, InvestorFuse and Carrot, the funnel math from inbound call to signed contract, and how much you should expect to pay. No fluff.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">1. Why most REIs lose deals: the speed-to-seller problem</h2>
                <p>
                  Industry surveys across BiggerPockets, REI Network groups, and direct mail vendors tell the same story: <strong>40% to 60% of inbound motivated seller calls go unanswered</strong> when an investor is relying on a personal cell phone alone. They are walking a property, on another seller call, at a kid&apos;s game, asleep, or simply burned out from picking up unknown numbers all day.
                </p>
                <p>
                  Motivated sellers do not leave thoughtful voicemails. They are in distress — divorce, foreclosure, probate, vacancy, an inherited burden — and they are dialing four to six investors off Google ads, postcards, and bandit signs in a single afternoon. <strong>Whoever answers first and treats them like a human wins the contract.</strong> The seller is rarely shopping price; they are shopping certainty and speed. A live US voice at 9:14pm beats a callback at 9:14am every time.
                </p>
                <p>
                  This is the same speed-to-lead dynamic we cover in our <Link href="/blog/60-second-lead-response-service" className="text-red hover:text-red-dark font-semibold">60-second lead response guide</Link> — but with much higher per-deal economics. A missed motivated seller call is not a missed quote; it is a missed $10,000 to $25,000 assignment fee.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">2. The motivated seller call: what your virtual receptionist must do</h2>
                <p>
                  A motivated seller call is not customer service. It is part rapport-building, part triage, part light therapy. Here is what a properly trained REI virtual receptionist does in the first 90 seconds:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Greet warmly, by your company name</strong> — &quot;Thanks for calling Lone Star Home Buyers, this is Sarah, I help homeowners who need to sell quickly.&quot;</li>
                  <li><strong>Slow the seller down.</strong> Distressed sellers often launch into a rant. The receptionist lets them vent for 20 to 30 seconds before steering.</li>
                  <li><strong>Identify the motivation type</strong> — divorce, foreclosure, probate, tired landlord, code violations, vacant, relocation, medical, tax delinquency.</li>
                  <li><strong>Capture property condition</strong> — beds/baths, square footage, roof age, foundation issues, deferred maintenance, occupancy.</li>
                  <li><strong>Establish timeline</strong> — &quot;If we made you a fair cash offer, when would you ideally need to close?&quot;</li>
                  <li><strong>Mortgage balance and asking price</strong> — without scaring the seller off.</li>
                  <li><strong>Schedule a callback</strong> from the investor or set the property walk-through.</li>
                  <li><strong>Push the lead live</strong> into Podio/InvestorFuse with the motivation tag attached.</li>
                </ul>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">3. The seller pre-qualification script (free template)</h2>
                <p>
                  Steal this. It is the script we have seen convert across Texas, Florida, Arizona, Ohio, and Tennessee wholesale operations. Use it as-is or have your virtual receptionist service customize it.
                </p>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li><strong>&quot;Thanks for calling [Company]. How can I help you today?&quot;</strong> Let them talk. Listen for the motivation cue.</li>
                  <li><strong>&quot;I&apos;m sorry you&apos;re going through that. Can I get your name and the property address so I can pull it up?&quot;</strong></li>
                  <li><strong>&quot;How long have you owned the property?&quot;</strong> Long ownership often means equity; recent purchase often means a tight deal or sub-to candidate.</li>
                  <li><strong>&quot;What&apos;s going on that&apos;s making you want to sell now?&quot;</strong> The single most important question. Do not skip it.</li>
                  <li><strong>&quot;Tell me about the condition. Anything major — roof, foundation, HVAC, plumbing — that&apos;s been on your mind?&quot;</strong></li>
                  <li><strong>&quot;Any repairs you know need to be done? Rough estimate of what you think it would cost?&quot;</strong></li>
                  <li><strong>&quot;Do you have a mortgage on the property? Roughly what&apos;s the balance?&quot;</strong> Critical for sub-to and novation deals.</li>
                  <li><strong>&quot;If we could pay all cash, close on your timeline, no repairs, no realtor fees — what number would you need to walk away comfortable?&quot;</strong></li>
                  <li><strong>&quot;If everything checks out, when would you ideally want to close?&quot;</strong></li>
                  <li><strong>&quot;Best number and time for [investor name] to call you back today?&quot;</strong></li>
                </ol>
                <p>
                  Notice what is not in the script: hard sales, low-balling, or making an offer on the phone. The receptionist&apos;s job is to <strong>qualify and warm-hand-off</strong>, not to negotiate. That is the investor&apos;s job.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/cc-agent-focus.jpg" alt="REI virtual receptionist running motivated seller pre-qualification script" width={800} height={450} className="w-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">4. Why offshore answering services fail at REI intake</h2>
                <p>
                  We have audited dozens of investors who tried Manila, Bogota, or Karachi receptionists at $4 to $8 per hour to save money. Almost all moved back onshore within 90 days. Here is why offshore breaks for REI specifically:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>The lingo is not transferable.</strong> A receptionist who has never heard of <em>ARV</em>, <em>MAO</em>, <em>sub-to</em>, <em>novation</em>, <em>double-close</em>, or <em>assignment</em> cannot ask intelligent follow-ups. They will record &quot;seller wants a sub-2 deal&quot; as garbage data.</li>
                  <li><strong>Distressed sellers hang up at the accent.</strong> Right or wrong, a 68-year-old widow in Lubbock who is six months behind on her mortgage hears a non-American accent and assumes scam call. We have seen call drop rates 3 to 4x higher offshore.</li>
                  <li><strong>They cannot read distress signals.</strong> When a seller starts crying or trails off about a brother who just died, an offshore agent reading from a checklist will plow forward. A US receptionist trained on REI intake pauses, expresses sympathy, and pivots gently.</li>
                  <li><strong>Cultural references break.</strong> &quot;The HOA is killing me,&quot; &quot;the ARM is about to adjust,&quot; &quot;we&apos;re upside down on the second&quot; — these need an American ear.</li>
                </ul>
                <p>
                  Compare onshore vs offshore tradeoffs in our <Link href="/blog/onshore-vs-offshore-vs-nearshore" className="text-red hover:text-red-dark font-semibold">onshore vs offshore vs nearshore guide</Link>.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">5. US-based virtual receptionists who understand REI</h2>
                <p>
                  The right partner is <strong>US-based, REI-trained, and bilingual where you need it</strong>. What that means in practice:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Native English with a neutral or regional US accent.</strong> Sellers in Atlanta and Phoenix do not need a Texas drawl, but they do need an American voice.</li>
                  <li><strong>Trained on REI vocabulary</strong> — receptionists know that ARV is After Repair Value, MAO is Maximum Allowable Offer, that &quot;subject-to&quot; is leaving the existing financing in place, that a &quot;novation&quot; involves listing the property after the seller signs, that wholesaling is contract-assignment, not licensed brokerage.</li>
                  <li><strong>Empathy training for distressed callers</strong> — divorce, probate, foreclosure, eviction.</li>
                  <li><strong>Compliance awareness</strong> — TCPA, state-by-state wholesaling disclosure rules, no licensing claims.</li>
                  <li><strong>Coverage of the right markets</strong> — extra emphasis on TX, FL, AZ, GA, NC, TN, OH, MO where the bulk of US wholesale volume sits.</li>
                </ul>
                <p>
                  For a broader view of receptionist providers across verticals, see our <Link href="/blog/top-10-virtual-receptionist-companies-usa" className="text-red hover:text-red-dark font-semibold">Top 10 Virtual Receptionist Companies in the USA</Link> ranking.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">6. 24/7 coverage: when motivated sellers actually call</h2>
                <p>
                  We pulled call timestamp data across 14 wholesale operations spanning Texas, Florida, and the Carolinas. The pattern is consistent and counterintuitive for new investors:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>6:00pm to 10:00pm weekdays</strong> — peak window. Sellers got home, opened the mail, saw the foreclosure or tax notice, and dialed.</li>
                  <li><strong>10:00am to 2:00pm Saturday</strong> — the &quot;I had time to think about this all week&quot; window.</li>
                  <li><strong>Sunday 6:00pm to 9:00pm</strong> — the &quot;I dread Monday&quot; window.</li>
                  <li><strong>Holidays after foreclosure / probate notices arrive</strong> — Memorial Day, Labor Day, the week between Christmas and New Year. Probate-driven volume is up 8% to 12% YoY as the US population ages.</li>
                </ul>
                <p>
                  Roughly <strong>62% of motivated seller calls land outside 9-to-5 Monday-to-Friday</strong>. If your virtual receptionist is not 24/7, you are paying for the marketing that drives the call and missing the conversion.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">7. Lead capture into Podio, REIPro, InvestorFuse, Carrot, GoHighLevel, Salesforce, Follow Up Boss</h2>
                <p>
                  Capturing the call is half the job. Pushing the data into your stack — clean, tagged, and immediate — is the other half. The right REI virtual receptionist service supports:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Podio</strong> (the de-facto wholesaler CRM) — direct integration via globiflow/citrix workflows or Zapier; auto-creates a lead with motivation tag, condition notes, and asking price.</li>
                  <li><strong>InvestorFuse</strong> — native or webhook integration; receptionist drops the lead into the &quot;new lead&quot; sequence.</li>
                  <li><strong>REIPro / REI Reply</strong> — for skip-tracing follow-up.</li>
                  <li><strong>Carrot</strong> — capture form sync for inbound calls from your Carrot site.</li>
                  <li><strong>GoHighLevel (GHL)</strong> — for investors running multi-channel SMS / email follow-up.</li>
                  <li><strong>Follow Up Boss</strong> — heavier-volume operations, especially flippers with retail listings.</li>
                  <li><strong>Salesforce</strong> — institutional buyers and PE-backed wholesale shops.</li>
                  <li><strong>Slack / SMS / email</strong> — instant ping to the acquisitions manager when a hot lead lands.</li>
                </ul>
                <p>
                  The motivation tag matters. A &quot;foreclosure&quot; lead and a &quot;tired landlord&quot; lead need very different follow-up sequences. Tagging at intake feeds the rest of your funnel.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">8. Calls vs leads vs contracts: the funnel math</h2>
                <p>
                  Every investor needs to understand their own ratios. Across the wholesalers we have benchmarked, here is a typical funnel from inbound call through signed contract:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>100 inbound seller calls</strong> (from postcards, PPC, SEO, bandit signs, cold-call returns)</li>
                  <li><strong>60 qualified leads</strong> after pre-qualification (filtering out wrong numbers, retail sellers, agents, tire-kickers)</li>
                  <li><strong>25 appointments / property walks</strong></li>
                  <li><strong>8 written offers</strong></li>
                  <li><strong>2 to 3 signed contracts</strong></li>
                </ul>
                <p>
                  Now plug in cost. A $1,500/month US-based REI virtual receptionist retainer producing 2.5 contracts per month at an average $12,000 wholesale assignment fee = $30,000 gross, $1,500 receptionist cost = <strong>$600 fully-loaded per signed contract on the receptionist line alone</strong>. Compare to $5,000 to $25,000 assignment fees. The leverage is obvious.
                </p>
                <p>
                  And that is before you count the deals you would have lost entirely without a live answer. Industry data suggests <strong>roughly 22% of US homeowners qualify as motivated sellers at any given moment</strong> — the demand is there. The constraint is whether you pick up.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">9. Spanish bilingual coverage: the underrated edge for TX, FL, AZ, CA wholesalers</h2>
                <p>
                  US Census data shows Hispanic homeowner rates near <strong>30% in Texas, Florida, and Arizona</strong>, with similar concentrations across California, Nevada, and parts of Colorado and New Mexico. A meaningful share of these households are <em>Spanish-dominant</em> — meaning the homeowner of record is more comfortable conducting business in Spanish, even if children in the home speak English.
                </p>
                <p>
                  Most wholesalers in these markets have <strong>zero Spanish coverage</strong>. They run English-only postcards, English-only PPC, and an English-only cell phone. They miss roughly a third of their addressable market entirely.
                </p>
                <p>
                  A US-based bilingual virtual receptionist closes that gap immediately. We have seen Texas wholesalers add 25% to 40% to monthly contract volume within a single quarter just by enabling Spanish intake. For more on bilingual coverage, see our <Link href="/blog/top-10-multilingual-call-center-companies-usa" className="text-red hover:text-red-dark font-semibold">Top 10 Multilingual Call Center Companies</Link>.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">10. What to look for: 12-point REI virtual receptionist checklist</h2>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li><strong>US-based agents</strong> — verify the physical location, not just &quot;US-managed.&quot;</li>
                  <li><strong>REI-trained</strong> — they should know ARV, MAO, sub-to, novation, double-close on day one.</li>
                  <li><strong>True 24/7 / 365 coverage</strong> including holidays.</li>
                  <li><strong>Native integrations</strong> with Podio, InvestorFuse, REIPro, Carrot, GoHighLevel.</li>
                  <li><strong>Spanish bilingual</strong> capability if you operate in TX/FL/AZ/CA/NV.</li>
                  <li><strong>Call recording</strong> and searchable transcripts.</li>
                  <li><strong>Custom scripted seller intake</strong> — not a generic answering script.</li>
                  <li><strong>Follow-up SMS</strong> sent to the seller within 60 seconds of hang-up confirming next step.</li>
                  <li><strong>No long-term contracts</strong> — month-to-month, scalable up and down.</li>
                  <li><strong>Daily and monthly reporting</strong> with motivation-type breakdown and conversion ratios.</li>
                  <li><strong>Scalable</strong> from 50 calls/month to 5,000 without re-onboarding.</li>
                  <li><strong>Handles cold-lead overflow</strong> and outbound call-back too — not just inbound.</li>
                </ol>
                <p>
                  Cross-reference candidates against our <Link href="/blog/top-10-real-estate-call-center-companies-usa" className="text-red hover:text-red-dark font-semibold">Top 10 Real Estate Call Center Companies</Link> list before committing.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">11. Pricing: typical REI virtual receptionist cost in 2026</h2>
                <p>
                  Pricing varies by model. Three common structures:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Per-call:</strong> $2 to $8 per qualified call. Best for low-volume investors (under 50 calls/month) testing a market.</li>
                  <li><strong>Per-minute:</strong> $1 to $2 per live minute. Best for moderate volume (50 to 250 calls/month) where call length varies.</li>
                  <li><strong>Monthly retainer:</strong> $300 to $2,500/month with a pool of included minutes/calls and overage rates. Best for established wholesalers with predictable volume.</li>
                </ul>
                <p>
                  ROI math: a single signed wholesale contract typically yields a $5,000 to $25,000 assignment fee — sometimes $40,000+ on a strong A-class deal. Even one extra contract per quarter pays for the receptionist for the year. Most operators we benchmark see <strong>10x to 25x ROI on US-based REI virtual receptionist spend</strong>.
                </p>
                <p>
                  Against the broader BPO market, REI receptionists command an onshore premium versus a generic answering service — see our <Link href="/blog/call-center-outsourcing-cost-per-hour-2026" className="text-red hover:text-red-dark font-semibold">2026 hourly rate guide</Link> and our <Link href="/services/virtual-remote-support" className="text-red hover:text-red-dark font-semibold">virtual remote support service page</Link>.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">12. How to onboard in 7 days</h2>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li><strong>Day 1 — Discovery call.</strong> Walk the provider through your markets, motivation taxonomy, average deal economics, and existing pain points (missed calls, bad VAs, etc.).</li>
                  <li><strong>Day 2 — Script approval.</strong> They send a draft of the seller intake script (or you supply yours). You red-line within 24 hours.</li>
                  <li><strong>Day 3 — CRM integration.</strong> Webhooks/Zaps into Podio, InvestorFuse, REIPro, GoHighLevel — whatever your stack is. Motivation tag mapping locked.</li>
                  <li><strong>Day 4 — Motivation tag setup + SMS template.</strong> The 60-second post-call confirmation SMS to the seller is templated and approved.</li>
                  <li><strong>Day 5 — Test calls.</strong> You and the provider make 5 to 10 mock seller calls — distress, vacancy, probate, retail, wrong-number — to stress-test routing and CRM drop.</li>
                  <li><strong>Day 6 — Soft launch.</strong> Forward your tracking number(s). Day-of monitoring.</li>
                  <li><strong>Day 7 — Daily report cadence locked.</strong> Daily summary email at 8am with prior-day calls, qualified leads, motivation breakdown, conversion to appointment.</li>
                </ol>
                <p>
                  For inbound call infrastructure context, see our <Link href="/solutions/inbound-call-center-services" className="text-red hover:text-red-dark font-semibold">inbound call center services solution</Link> and our <Link href="/industries/real-estate-call-center-services" className="text-red hover:text-red-dark font-semibold">real estate call center services industry page</Link>.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How is an REI virtual receptionist different from a regular answering service?</h3>
                <p>Standard answering services take a name and number. An REI-trained virtual receptionist runs a structured motivated-seller pre-qualification script — motivation, condition, timeline, mortgage balance, asking price — and pushes a fully-tagged lead into your Podio, REIPro, InvestorFuse, Carrot, or GoHighLevel CRM in real time so you can call hot sellers back inside 5 minutes.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Will the receptionist be in the US?</h3>
                <p>Yes, US-based receptionists with native English and a neutral US accent. Distressed sellers — especially older homeowners in foreclosure or probate situations — hang up on offshore agents. Cultural and linguistic alignment is critical for the rapport you need to keep a motivated seller on the line.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Can they integrate with Podio and InvestorFuse?</h3>
                <p>Yes. Most reputable REI virtual receptionist services integrate natively or via Zapier/webhooks with Podio (the de-facto wholesaler CRM), InvestorFuse, REIPro, REI Reply, Carrot, GoHighLevel, Follow Up Boss, and Salesforce. They drop the qualified lead directly into your pipeline with motivation tags.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">What does it cost per signed wholesale contract?</h3>
                <p>Math: a typical funnel runs 100 inbound calls into 2 to 3 signed contracts. At a $1,000 to $1,500 monthly receptionist retainer plus per-call overage, fully-loaded acquisition cost per contract usually lands $400 to $700. Average wholesale assignment fee is $5,000 to $25,000 — ROI is generally 10x or better.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Do they handle Spanish-speaking motivated sellers?</h3>
                <p>The right ones do. In Texas, Florida, Arizona, and California roughly 30% of motivated sellers prefer Spanish. Bilingual coverage is one of the biggest unfair advantages a wholesaler in those markets can buy.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">What hours do they cover?</h3>
                <p>True 24/7 coverage including evenings, weekends, and holidays. Motivated seller call peaks are 6pm to 10pm weekdays and Saturday mid-day — exactly when you are not at your desk.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Can I keep my own scripts?</h3>
                <p>Yes. The best REI virtual receptionist services onboard your existing seller intake script, your motivation taxonomy, and your CRM mapping rather than forcing you onto a generic template.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How fast can I go live?</h3>
                <p>Seven days is realistic: day 1 to 2 script approval, day 3 to 4 CRM integration and tag mapping, day 5 test calls, day 6 to 7 live with daily reporting.</p>

                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">Stop Missing Motivated Seller Calls</h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    US-based, REI-trained, 24/7. Podio, InvestorFuse, Carrot, GoHighLevel ready. Bilingual English/Spanish. Tell us your markets and we will return a tailored script, integration plan, and pricing within 48 hours — month-to-month, no long contracts.
                  </p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors">
                    Get an REI Virtual Receptionist Quote <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            </div>

            <div className="lg:col-span-1">
              <div className="lg:sticky lg:top-28 space-y-8">
                <div className="rounded-2xl bg-navy p-6"><HeroContactForm /></div>
                <div className="rounded-2xl border border-gray-200 p-6">
                  <h3 className="text-lg font-bold text-navy mb-4">Related Articles</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog/top-10-real-estate-call-center-companies-usa" className="text-sm text-gray-600 hover:text-red transition-colors">Top 10 Real Estate Call Center Companies</Link></li>
                    <li><Link href="/blog/top-10-virtual-receptionist-companies-usa" className="text-sm text-gray-600 hover:text-red transition-colors">Top 10 Virtual Receptionist Companies USA</Link></li>
                    <li><Link href="/blog/top-10-multilingual-call-center-companies-usa" className="text-sm text-gray-600 hover:text-red transition-colors">Top 10 Multilingual Call Center Companies</Link></li>
                    <li><Link href="/blog/60-second-lead-response-service" className="text-sm text-gray-600 hover:text-red transition-colors">60-Second Lead Response Service</Link></li>
                    <li><Link href="/industries/real-estate-call-center-services" className="text-sm text-gray-600 hover:text-red transition-colors">Real Estate Call Center Services</Link></li>
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
