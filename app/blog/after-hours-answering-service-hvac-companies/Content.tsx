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
          <div>
            <span className="inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold text-white mb-4">
              HVAC OPERATIONS
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              After-Hours Answering Service for HVAC Companies: How to Stop Losing $400+ Jobs After 5pm
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> April 2026</span>
              <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> 13 min read</span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/cc-agent-headset.jpg" alt="After-hours HVAC answering service agent dispatching emergency call" fill sizes="(max-width: 1280px) 100vw, 1280px" className="object-cover" />
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
                  It&apos;s 9:14pm on a Tuesday in July. A homeowner&apos;s AC just died. The bedroom is 84 degrees. Their toddler can&apos;t sleep. They Google &quot;HVAC near me,&quot; tap your listing, and your phone rings. You&apos;re at dinner with your wife. The call goes to voicemail. They hang up — they don&apos;t leave a message — and they tap the next listing. By the time you check your phone at 10:30pm, the job is gone. That call was worth $480 tonight, and probably another $6,800 in equipment replacement next month.
                </p>
                <p>
                  This is the math behind <strong>after-hours answering service for HVAC companies</strong>. It&apos;s not a luxury. It&apos;s the cheapest piece of growth infrastructure you can buy — and most contractors are leaving it on the table because they think voicemail is &quot;fine.&quot; Voicemail is not fine. Voicemail is the sound of money walking next door.
                </p>
                <p>
                  This guide is written for HVAC owners and operations managers running 2-tech to 50-tech shops. We&apos;ll show you the real cost of missed calls, what a proper after-hours dispatch operation looks like, how it ties into ServiceTitan, Housecall Pro, Jobber, or FieldEdge, and how to choose a partner without getting locked into a contract that doesn&apos;t fit how you actually run jobs.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Why After-Hours Calls Cost HVAC Contractors More Than They Think</h2>
                <p>
                  HVAC isn&apos;t a 9-to-5 industry, and the call data proves it. The peak window for residential HVAC emergency calls is <strong>5pm to 10pm on weekdays and Saturday mornings</strong> — the exact hours when people get home from work, crank the thermostat, and discover the system isn&apos;t working. ServiceTitan and Housecall Pro benchmarks consistently show 35–45% of inbound residential demand calls land outside business hours during peak season.
                </p>
                <p>
                  And those calls aren&apos;t low-intent leads. An after-hours caller is, by definition, in pain. Their house is too hot, too cold, smells like gas, or is leaking water. They are not price-shopping. They are looking for the first contractor who will pick up the phone, sound competent, and dispatch a tech. The contractor who answers <strong>first</strong> — not cheapest, not best-reviewed — wins the job 60–70% of the time.
                </p>
                <p>
                  The opportunity cost is brutal because the customer lifetime value compounds. The $480 you lose tonight isn&apos;t just $480. It&apos;s the maintenance plan you would have sold next spring, the duct cleaning, the eventual $9,200 system replacement, and the three neighbors they would have referred. Industry CLV studies put a single residential HVAC customer at $4,500–$12,000 over five years. Voicemail kills all of it.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The Lost-Revenue Math: What Missed Calls Actually Cost Your HVAC Business</h2>
                <p>
                  Let&apos;s do the math on a real shop. Assume you&apos;re a typical residential HVAC contractor doing $1.8M in revenue with one dispatcher who answers the phone 8am–5pm Monday through Friday. Here&apos;s what the after-hours leak looks like:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Weekly inbound calls outside business hours:</strong> 35–60 (peak season)</li>
                  <li><strong>Percentage that go to voicemail and never call back:</strong> 65–75%</li>
                  <li><strong>Net missed booking opportunities per week:</strong> ~25</li>
                  <li><strong>Average booked-job value (residential service):</strong> $385</li>
                  <li><strong>Conversion rate if a live agent answers:</strong> 55–70%</li>
                  <li><strong>Net weekly revenue lost to voicemail:</strong> ~$5,290</li>
                  <li><strong>Annualized:</strong> roughly <strong>$275,000</strong> in missed top-line revenue</li>
                </ul>
                <p>
                  That number doesn&apos;t include replacement equipment sales, maintenance plan attach, or referral revenue. The full leak on a $1.8M shop is closer to $400K–$500K in CLV-adjusted revenue per year.
                </p>
                <p>
                  Industry surveys from Service Roundtable and similar contractor groups consistently find that <strong>roughly 30% of HVAC contractors lose 5 or more bookable jobs per month</strong> purely to slow phone response. At an average ticket of $385, that&apos;s a minimum of $23,000/year in directly lost revenue per shop — and most owners can&apos;t see it because the calls never showed up in their CRM.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">The 9pm Tuesday Problem (and the 6am Saturday Version)</h2>
                <p>
                  Every HVAC owner I&apos;ve ever talked to has tried to solve after-hours coverage in-house first. It almost never works. Here&apos;s why:
                </p>
                <p>
                  <strong>The 9pm Tuesday problem.</strong> Your on-call tech&apos;s phone is ringing. He&apos;s already on a no-heat call across town. His wife is putting the kids down. Two more emergency calls come in while he&apos;s under a furnace with a flashlight in his teeth. He misses both. One of them was a gas-smell call that needed escalation in under five minutes.
                </p>
                <p>
                  <strong>The 6am Saturday version.</strong> A pipe burst in a customer&apos;s utility room over a cold snap. They call. Your dispatcher doesn&apos;t start until 8am. Your on-call tech worked until 11pm last night and you told him to sleep in. Forwarding the line to your cell phone means your cell phone wakes you at 6:04am, and you sound like it. The customer hears it. They hang up.
                </p>
                <p>
                  <strong>The vacation version.</strong> Your dispatcher takes a week off. You forward the line to a part-time receptionist who has never used ServiceTitan, doesn&apos;t know your service area boundaries, and doesn&apos;t know your weekend trip-charge policy. She quotes the wrong rate. The customer cancels Monday morning.
                </p>
                <p>
                  In-house after-hours coverage breaks because phones don&apos;t respect schedules and humans need sleep. You can&apos;t cost-effectively staff a single person to answer 3–8 calls a night. The math only works when call volume is pooled across many contractors — which is exactly what a dedicated <Link href="/solutions/inbound-call-center-services" className="text-red hover:text-red-dark font-semibold">inbound call center service</Link> does.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">What a Real HVAC After-Hours Answering Service Does</h2>
                <p>
                  A proper HVAC after-hours operation is not a voicemail-to-text service and it&apos;s not a generic answering service that reads off a script. The right partner runs a live, trained dispatch desk that does the following on every call:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Answers in under 20 seconds, live, in your company&apos;s name.</strong> Not &quot;answering service for ABC Heating&quot; — just &quot;ABC Heating, this is Maria, how can I help?&quot;</li>
                  <li><strong>Runs scripted emergency triage</strong> to separate true emergencies (gas smell, CO alarm, no heat in winter, water leak) from next-day service (intermittent cooling, weird noise, scheduled maintenance).</li>
                  <li><strong>Dispatches your on-call tech</strong> via SMS + voice call with full job details, customer address, equipment notes, and a callback number.</li>
                  <li><strong>Books non-emergency calls</strong> directly into ServiceTitan, Housecall Pro, Jobber, or FieldEdge with the right job type, dispatch fee, and notes.</li>
                  <li><strong>Sends an SMS confirmation</strong> to the customer with the appointment window or the tech&apos;s ETA.</li>
                  <li><strong>Captures payment authorization</strong> for after-hours trip charges where your policy requires it.</li>
                  <li><strong>Logs every call</strong> with full recording and pushes a transcript + outcome into your CRM by morning.</li>
                </ul>
                <p>
                  That&apos;s the bar. Anything less is a fancy voicemail.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/cc-agent-focus.jpg" alt="HVAC dispatcher coordinating after-hours emergency call" width={800} height={450} className="w-full object-cover" />
                </div>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">In-House vs Outsourced After-Hours: A Real Cost Comparison</h2>
                <p>
                  The decision usually comes down to staffing math. Let&apos;s look at what it actually costs to staff after-hours coverage in-house versus outsourcing it.
                </p>
                <p>
                  <strong>In-house, two-person rotation covering 5pm–8am weeknights + weekends:</strong>
                </p>
                <ul className="space-y-3 my-6">
                  <li>Two dispatch staff at $22/hr blended (base + benefits + payroll tax): ~$95,000–$120,000/year</li>
                  <li>Phone system, headsets, dispatch software seats: ~$3,500/year</li>
                  <li>Training, onboarding, turnover (typical dispatch turnover is 40%+): ~$8,000/year</li>
                  <li>PTO coverage gaps and sick-day risk: high</li>
                  <li><strong>Total realistic in-house cost: $105K–$130K/year</strong></li>
                </ul>
                <p>
                  <strong>Outsourced HVAC after-hours service for the same coverage:</strong>
                </p>
                <ul className="space-y-3 my-6">
                  <li>Per-minute or per-call pricing scaled to actual volume</li>
                  <li>Typical monthly spend for a 2-tech residential shop: $400–$900/month</li>
                  <li>Typical monthly spend for a 10–15 tech shop: $1,200–$2,400/month</li>
                  <li>No PTO gaps, no turnover risk, scales up in storm season</li>
                  <li><strong>Total realistic outsourced cost: $4,800–$28,800/year</strong></li>
                </ul>
                <p>
                  The break-even is brutal. For most shops under $5M in revenue, outsourced after-hours costs 10–20% of in-house and books more jobs because pooled agents are answering live at 2:14am Saturday without complaining about it Monday morning. The only scenario where in-house wins is at $8M+ revenue with a structured dispatch department running its own scheduling — and even those shops typically use an outsourced overflow partner for surge.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">ServiceTitan, Housecall Pro, Jobber, FieldEdge: Integrations That Matter</h2>
                <p>
                  This is the section most contractors skip and then regret. An after-hours partner that can&apos;t book directly into your dispatch software is half useful. They take a message, you read it in the morning, you call the customer back, the customer already booked someone else. You&apos;re back to a fancy voicemail.
                </p>
                <p>
                  Real integration means the agent — at 11:47pm on a Sunday — is logged into your dispatch system and creating the job live, with the right service area, the right job type, the right tech assignment rules, and the right after-hours rate code. Here&apos;s what to ask for by platform:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>ServiceTitan:</strong> direct user seats for agents, location-aware dispatch, capacity planning visibility, custom job types, and the ability to apply trip-charge price book entries. Anything less and the integration is fake.</li>
                  <li><strong>Housecall Pro:</strong> agent logins with scheduling permissions, ability to assign to on-call tech segments, SMS confirmation through the HCP customer record so it doesn&apos;t look like a separate channel.</li>
                  <li><strong>Jobber:</strong> user seats, request-vs-job creation rules, integration with Jobber&apos;s online booking flow so the customer record is unified.</li>
                  <li><strong>FieldEdge / ESC:</strong> direct booking into the dispatch board with job-type and service-agreement awareness for maintenance plan customers.</li>
                </ul>
                <p>
                  Ask the partner to show you, on a screen-share, an agent booking a test job in your software. If they can&apos;t do it without a workaround, they&apos;re not really integrated.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">What &quot;Emergency Triage&quot; Should Sound Like</h2>
                <p>
                  Triage is the difference between a $500/month answering service and a real after-hours dispatch operation. Every HVAC after-hours partner should have a documented triage script that sorts calls into four buckets and acts accordingly:
                </p>
                <p>
                  <strong>Bucket 1 — Life-safety emergency. Escalate to on-call tech immediately, do not wait for callback.</strong>
                </p>
                <ul className="space-y-3 my-6">
                  <li>Smell of natural gas inside the home</li>
                  <li>Carbon monoxide alarm sounding</li>
                  <li>Visible smoke or burning smell from any HVAC equipment</li>
                  <li>Active water flooding from a furnace, boiler, or condensate line</li>
                </ul>
                <p>
                  For these, the script tells the customer to leave the house if needed, call the gas company or 911 first, and the agent dispatches the tech in parallel.
                </p>
                <p>
                  <strong>Bucket 2 — High-priority same-night dispatch.</strong>
                </p>
                <ul className="space-y-3 my-6">
                  <li>No heat in winter (below ~50°F outside)</li>
                  <li>No cooling with vulnerable household members (infants, elderly, medical conditions)</li>
                  <li>Refrigerant leak with active hissing</li>
                  <li>Frozen pipe risk from heating failure</li>
                </ul>
                <p>
                  These get dispatched same-night with tech ETA and trip-charge confirmation up front.
                </p>
                <p>
                  <strong>Bucket 3 — Next-day priority booking.</strong> Intermittent cooling, thermostat issues, water heater not hot enough, system running but underperforming. These get booked into tomorrow morning&apos;s first-available slot.
                </p>
                <p>
                  <strong>Bucket 4 — Routine scheduling.</strong> Maintenance, duct cleaning, quotes for replacement, second opinions. Scheduled into the normal dispatch board within the agent&apos;s permissions.
                </p>
                <p>
                  Speed of triage matters. The bar that good HVAC dispatch partners hit is <strong>under 20 seconds to live answer, under 90 seconds to triage decision, under 4 minutes to dispatch the on-call tech for emergencies</strong>. If you want benchmark numbers across the lead-response space, see our breakdown of <Link href="/blog/60-second-lead-response-service" className="text-red hover:text-red-dark font-semibold">60-second lead response services</Link>.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Bilingual (Spanish) Coverage: Why It&apos;s a Margin Lever for HVAC</h2>
                <p>
                  This is the section most HVAC owners underestimate. Hispanic households represent roughly 18% of US homeowners, but the share is significantly higher in HVAC&apos;s biggest residential markets — Texas, Florida, Arizona, Nevada, Southern California, and parts of the Carolinas. In some metros (Houston, Phoenix, Miami, Riverside) Spanish-preferred households are 30–45% of the residential HVAC customer base.
                </p>
                <p>
                  Here&apos;s what most contractors miss. A Spanish-only caller who reaches an English-only voicemail at 8pm on a Saturday <strong>does not call back the next morning</strong>. They call the next contractor on the list — usually within 90 seconds — and they keep calling until they hit one with Spanish coverage. The contractor with bilingual after-hours service captures that entire segment with almost no competition because most local shops still don&apos;t offer it.
                </p>
                <p>
                  The conversion-rate lift is real. Operators who add Spanish-language after-hours coverage in TX, FL, AZ, and CA markets typically see 12–25% incremental booked-job volume within 60 days. For more on this, see our <Link href="/blog/top-10-multilingual-call-center-companies-usa" className="text-red hover:text-red-dark font-semibold">multilingual call center providers</Link> breakdown.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">What to Look For in an HVAC After-Hours Partner: 10-Point Checklist</h2>
                <ol className="space-y-3 my-6 list-decimal pl-6">
                  <li><strong>US-based or fully bilingual nearshore agents</strong> with neutral, professional accents. Customers can tell when the agent is offshore reading a script — and HVAC trust signals matter.</li>
                  <li><strong>Direct ServiceTitan, Housecall Pro, Jobber, or FieldEdge integration</strong> — not just &quot;we can take a message and email it.&quot;</li>
                  <li><strong>Demonstrable HVAC dispatch experience</strong> — ask for current contractor references in your size range and region.</li>
                  <li><strong>Bilingual (English/Spanish) coverage standard</strong>, not as an upcharge add-on.</li>
                  <li><strong>SMS confirmation to customer</strong> with appointment window and tech name, plus dispatch ticket sent to your on-call tech in under 4 minutes for emergencies.</li>
                  <li><strong>Documented emergency triage script</strong> with the four-bucket logic above, customized to your service area and policies.</li>
                  <li><strong>Full call recording and transcripts</strong> available to you within 24 hours, retained for at least 90 days.</li>
                  <li><strong>Monthly performance reporting</strong> covering call volume, answer rate, average answer speed, conversion rate, and bookings dollar value.</li>
                  <li><strong>No long-term contract lock-in.</strong> Month-to-month or 90-day terms. Anyone asking for 24-month commitments is hiding pricing or service problems.</li>
                  <li><strong>Scalable surge capacity</strong> for storm events — a freeze in Texas or a heat dome in Phoenix multiplies your volume 5–10x overnight, and your partner needs to handle it.</li>
                </ol>
                <p>
                  For a broader view of how the answering service market is structured, see our ranking of the <Link href="/blog/top-10-answering-service-companies-usa" className="text-red hover:text-red-dark font-semibold">top 10 answering service companies in the US</Link>, and the <Link href="/blog/top-10-hvac-home-services-call-center-companies-usa" className="text-red hover:text-red-dark font-semibold">top 10 HVAC and home-services call centers</Link> for vertical specialists.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Pricing: Typical HVAC Answering Service Costs</h2>
                <p>
                  Pricing in this space is usually structured one of three ways. Here&apos;s what 2026 market rates look like for HVAC-specialized after-hours service:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Per-call:</strong> $1.50–$5.00 per inbound call answered. Best for low-volume shops doing fewer than 100 after-hours calls/month.</li>
                  <li><strong>Per-minute:</strong> $1.00–$2.00 per agent-minute. Best for medium-volume shops where call length varies (typical HVAC after-hours call runs 4–7 minutes with triage and booking).</li>
                  <li><strong>Monthly retainer with included minutes:</strong> $400–$2,000/month for 200–1,500 minutes, with overage billed at the per-minute rate. Best for predictable mid-size operations.</li>
                  <li><strong>Dedicated agent seat:</strong> $2,800–$4,500/month for a fractional dedicated agent learning your specific dispatch rules. Worth it above ~$3M revenue.</li>
                </ul>
                <p>
                  The ROI math is the easy part. <strong>One saved residential service call ($385 average ticket) covers a typical month of after-hours service at the low end.</strong> One saved no-heat-in-winter emergency that converts to a system replacement ($6,800–$11,200) pays for two years. Most HVAC owners who switch from voicemail to live after-hours service see net booked revenue increase 8–14% within the first 90 days, with the answering service cost coming in at 0.4–0.9% of revenue.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">How to Onboard in 7 Days</h2>
                <p>
                  A real partner can stand you up in a week. Here&apos;s the realistic timeline:
                </p>
                <ul className="space-y-3 my-6">
                  <li><strong>Day 1–2:</strong> Discovery call. You walk through your service area, on-call rotation, dispatch software, trip-charge policy, after-hours rate codes, escalation contacts, maintenance plan logic, and what an emergency means to you.</li>
                  <li><strong>Day 2–3:</strong> Script approval. The partner drafts the answer script, triage logic, and dispatch protocol. You review and red-line.</li>
                  <li><strong>Day 3–5:</strong> Integration setup. Agent user seats provisioned in ServiceTitan / Housecall Pro / Jobber / FieldEdge. Test job created end-to-end. Phone forwarding configured (typically a conditional forward on no-answer-after-hours, not full forwarding).</li>
                  <li><strong>Day 5–6:</strong> Test calls. You and a couple of staff call in posing as different scenarios (gas smell, no heat, routine booking). The partner records, you review, you adjust.</li>
                  <li><strong>Day 7:</strong> Go live. First live night of coverage with a supervisor monitoring. Daily report sent next morning.</li>
                </ul>
                <p>
                  If a vendor can&apos;t do this in 7–10 business days, they&apos;re either over-promising or running on legacy systems. Walk.
                </p>

                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">Frequently Asked Questions</h2>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How much does an after-hours answering service cost for an HVAC company?</h3>
                <p>For most residential HVAC shops, expect $400–$2,000/month depending on call volume. Per-call pricing runs $1.50–$5.00 and per-minute pricing runs $1.00–$2.00. A typical 2-tech shop pays $500–$900/month; a 10-tech shop pays $1,200–$2,400/month.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Can the same answering service handle plumbing and electrical too?</h3>
                <p>Yes — most HVAC-specialized after-hours partners also cover plumbing and electrical, because those trades have the same emergency triage logic (gas leak, water leak, no power). If you run a combined HVAC/plumbing/electrical shop, ask for a single unified script with trade-specific triage branches. See our <Link href="/blog/top-10-hvac-home-services-call-center-companies-usa" className="text-red hover:text-red-dark font-semibold">home services call center providers</Link> for partners that cover all three.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Are weekend and holiday rates different?</h3>
                <p>Usually no on the answering-service side — most reputable partners charge the same per-minute or per-call rate 24/7/365. What changes is your <strong>customer-facing</strong> trip charge. The agent should know your weekend rate, holiday rate, and which dates count as &quot;observed&quot; holidays so the customer is quoted correctly up front.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Will the answering service really book directly into ServiceTitan?</h3>
                <p>If they&apos;re a real HVAC partner, yes. They&apos;ll have agent user seats in your ServiceTitan tenant, follow your dispatch board rules, and create the job with the right job type, location, tags, and price-book entries. Ask them to demo it on a screen share before you sign.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">How are agents trained on HVAC-specific calls?</h3>
                <p>Good partners run a 2–4 week onboarding for new agents covering HVAC equipment basics (split systems, heat pumps, packaged units, boilers, mini-splits), refrigerant terminology, common failure modes, residential vs commercial dispatch differences, and trade-specific emergency triage. Ongoing QA includes weekly call reviews and monthly retraining on missed-triage incidents.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">What exactly counts as &quot;after-hours&quot;?</h3>
                <p>You define it. Most HVAC contractors set after-hours as 5pm–8am weekdays plus all day Saturday and Sunday plus federal holidays. Some run 24/7 fully outsourced. Some run a hybrid where the partner handles overflow during business hours and full coverage after hours. Your dispatch software&apos;s call-routing rules determine when calls forward to the partner.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">What happens if my on-call tech doesn&apos;t answer the dispatch?</h3>
                <p>The partner should have a documented escalation tree — call the on-call tech, wait 4–6 minutes, escalate to the secondary on-call, then to the owner. Some partners can also dispatch to a backup tech roster you maintain. This should be in the script before you go live.</p>
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">Can the answering service handle commercial HVAC calls too?</h3>
                <p>Yes, but the script needs separate logic. Commercial calls usually involve property managers, building engineers, and service-agreement contracts with priority response SLAs. A partner that handles both residential and commercial HVAC will route commercial calls through a different triage path and confirm the service agreement before quoting trip charges.</p>

                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">Stop Losing $400+ Jobs to Voicemail</h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    US-based, bilingual, ServiceTitan-ready HVAC after-hours dispatch. Tell us your call volume and dispatch software — we&apos;ll send a no-contract proposal, custom triage script draft, and 7-day onboarding plan within 48 hours.
                  </p>
                  <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors">
                    Get a Free HVAC Dispatch Proposal <ArrowRight className="h-4 w-4" />
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
                    <li><Link href="/blog/top-10-hvac-home-services-call-center-companies-usa" className="text-sm text-gray-600 hover:text-red transition-colors">Top 10 HVAC & Home Services Call Centers</Link></li>
                    <li><Link href="/blog/top-10-answering-service-companies-usa" className="text-sm text-gray-600 hover:text-red transition-colors">Top 10 Answering Service Companies</Link></li>
                    <li><Link href="/blog/60-second-lead-response-service" className="text-sm text-gray-600 hover:text-red transition-colors">60-Second Lead Response Service</Link></li>
                    <li><Link href="/blog/top-10-multilingual-call-center-companies-usa" className="text-sm text-gray-600 hover:text-red transition-colors">Top 10 Multilingual Call Centers</Link></li>
                    <li><Link href="/solutions/inbound-call-center-services" className="text-sm text-gray-600 hover:text-red transition-colors">Inbound Call Center Services</Link></li>
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
