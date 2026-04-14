"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";

export default function CallCenterKPIsContent() {
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
              BEST PRACTICES
            </span>
            <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
              Top 10 KPIs Every Outsourced Call Center Should Track
            </h1>
            <div className="mt-4 flex items-center gap-4 text-sm text-white/50">
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" /> April 2026
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" /> 11 min read
              </span>
            </div>
            <div className="relative mt-10 aspect-[21/9] overflow-hidden rounded-2xl">
              <Image src="/images/hd-agents-row.jpg" alt="Row of call center agents tracking performance metrics and KPIs" fill className="object-cover" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content + Sidebar */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <article className="prose prose-lg max-w-none text-gray-700 leading-relaxed">
                <p className="text-xl leading-relaxed">
                  Measuring performance is the cornerstone of any successful <strong>call center outsourcing</strong> relationship. Without clear KPIs (key performance indicators), you are flying blind, unable to assess whether your outsourcing partner is delivering value or underperforming. This guide covers the 10 most critical call center metrics, explains why each matters, provides industry benchmarks, and shows you how to use these KPIs to drive continuous improvement.
                </p>

                <p>
                  According to ICMI research, <strong>only 37% of businesses</strong> track more than five call center KPIs regularly, and just 22% have formal dashboards shared between the outsourcing client and provider. Companies that implement comprehensive KPI tracking and regular performance reviews see <strong>28% higher customer satisfaction</strong> and <strong>19% lower cost per contact</strong> compared to those that rely on informal quality assessment. The data is clear: what gets measured gets managed, and what gets managed gets improved.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/hd-agents-working.jpg" alt="Call center agents working diligently while performance KPIs are tracked" width={800} height={450} className="w-full object-cover" />
                </div>

                {/* H2: Why KPIs Matter */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  Why Call Center KPIs Matter
                </h2>

                <p>
                  KPIs serve multiple critical functions in an outsourced call center relationship:
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Accountability and Transparency
                </h3>
                <p>
                  KPIs establish objective standards for performance, removing subjectivity from evaluation. When you and your outsourcing partner agree on specific metrics and targets, both parties have a clear understanding of expectations. This transparency builds trust and enables constructive performance conversations. Without defined KPIs, disagreements about quality become opinion-based rather than data-driven.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Continuous Improvement
                </h3>
                <p>
                  Tracking KPIs over time reveals trends, identifies areas for improvement, and validates the impact of changes. A sudden dip in first-call resolution might indicate a training gap. A gradual increase in average handle time could suggest growing product complexity. Without consistent measurement, these signals go undetected until they become costly problems.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Financial Governance
                </h3>
                <p>
                  Many outsourcing contracts include SLA-based pricing with bonuses for exceeding targets and penalties for underperformance. KPIs are the foundation of this financial governance structure. They protect your investment by ensuring you pay for performance, not just presence. <Link href="/services/customer-experience-analytics" className="text-red hover:text-red-dark font-semibold">CX analytics</Link> platforms make it easier than ever to track, visualize, and report on these metrics in real time.
                </p>

                {/* H2: Top 10 KPIs */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  The Top 10 Call Center KPIs
                </h2>

                {/* KPI 1 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  1. First Call Resolution (FCR)
                </h3>
                <p>
                  <strong>What it measures:</strong> The percentage of customer issues resolved during the first contact, without requiring a callback, transfer, or follow-up.
                </p>
                <p>
                  <strong>Why it matters:</strong> FCR is widely considered the single most important call center metric. Research from SQM Group shows that for every 1% improvement in FCR, there is a <strong>1% improvement in customer satisfaction</strong>. Customers who have their issue resolved on the first call are <strong>2.3 times more likely</strong> to remain loyal to the brand.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> 70-75% average; world-class performers achieve 85%+
                </p>
                <p>
                  <strong>How to improve:</strong> Invest in agent training and knowledge bases, empower agents to make decisions without escalation, ensure agents have access to complete customer history through integrated <Link href="/services/contact-center-software-solutions" className="text-red hover:text-red-dark font-semibold">contact center software</Link>, and analyze repeat call patterns to identify systemic issues.
                </p>

                {/* KPI 2 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  2. Customer Satisfaction Score (CSAT)
                </h3>
                <p>
                  <strong>What it measures:</strong> Customer satisfaction with a specific interaction, typically collected through a post-call survey on a 1-5 or 1-10 scale.
                </p>
                <p>
                  <strong>Why it matters:</strong> CSAT directly correlates with customer retention, word-of-mouth referrals, and lifetime value. A single negative experience can undo months of positive interactions. American Express found that <strong>33% of customers</strong> consider switching companies after just one poor service experience.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> 75-85% satisfaction rate; top performers exceed 90%
                </p>
                <p>
                  <strong>How to improve:</strong> Focus on agent soft skills training, reduce wait times, ensure accurate resolution, follow up on negative surveys to recover relationships, and analyze low-scoring interactions for coaching opportunities.
                </p>

                {/* KPI 3 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  3. Net Promoter Score (NPS)
                </h3>
                <p>
                  <strong>What it measures:</strong> Customer loyalty and willingness to recommend your brand, measured on a 0-10 scale where 9-10 are promoters, 7-8 are passives, and 0-6 are detractors. NPS = % promoters minus % detractors.
                </p>
                <p>
                  <strong>Why it matters:</strong> NPS is a leading indicator of business growth. Companies with NPS scores above 50 grow at more than <strong>twice the rate</strong> of those with lower scores. It captures the emotional and relational impact of customer service interactions beyond simple satisfaction.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> +20 to +30 average; excellent is +50 to +70
                </p>
                <p>
                  <strong>How to improve:</strong> Focus on exceeding expectations rather than just meeting them, train agents to build genuine rapport, implement proactive service, and close the loop with detractors to understand and address their concerns.
                </p>

                {/* KPI 4 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  4. Average Handle Time (AHT)
                </h3>
                <p>
                  <strong>What it measures:</strong> The average duration of a customer interaction, including talk time, hold time, and after-call work (wrap-up).
                </p>
                <p>
                  <strong>Why it matters:</strong> AHT directly impacts staffing requirements, costs, and customer experience. Excessively long handle times indicate inefficiency, while aggressively short times may mean agents are rushing through calls and not resolving issues properly. The goal is to optimize AHT without sacrificing quality.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> 4-6 minutes for general customer service; 8-15 minutes for technical support; 2-3 minutes for simple inquiries
                </p>
                <p>
                  <strong>How to improve:</strong> Provide agents with efficient tools and unified desktops, create streamlined processes for common issues, use <Link href="/services/ai-call-center-automation" className="text-red hover:text-red-dark font-semibold">AI-powered agent assist</Link> for real-time suggestions, and invest in ongoing product training to reduce information search time.
                </p>

                {/* KPI 5 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  5. Service Level
                </h3>
                <p>
                  <strong>What it measures:</strong> The percentage of calls answered within a defined threshold, typically expressed as X% of calls answered in Y seconds (e.g., 80/20 means 80% of calls answered within 20 seconds).
                </p>
                <p>
                  <strong>Why it matters:</strong> Service level is the primary metric for workforce planning and reflects how accessible your support is. Poor service levels mean customers wait too long, increasing frustration and abandonment. Overstaffing to achieve unrealistically high service levels wastes money.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> 80% of calls answered within 20 seconds (80/20) is the most common standard; some industries target 90/15 for premium service
                </p>
                <p>
                  <strong>How to improve:</strong> Optimize workforce scheduling using historical call pattern data, implement callback options for callers in queue, use IVR self-service to deflect simple inquiries, and ensure accurate call forecasting to match staffing with demand.
                </p>

                {/* KPI 6 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  6. Abandonment Rate
                </h3>
                <p>
                  <strong>What it measures:</strong> The percentage of callers who hang up before reaching an agent.
                </p>
                <p>
                  <strong>Why it matters:</strong> Every abandoned call is a customer whose needs went unmet. Abandoned callers may try again (increasing call volume), switch to a competitor, or leave negative reviews. High abandonment rates indicate inadequate staffing, poor IVR design, or excessively long hold times.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> 5-8% is average; best-in-class achieve under 3%
                </p>
                <p>
                  <strong>How to improve:</strong> Offer callback options instead of long holds, provide estimated wait times so customers can make informed decisions, optimize IVR flows to resolve simple issues without an agent, and monitor real-time queue metrics to activate overflow capacity during unexpected spikes.
                </p>

                {/* KPI 7 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  7. Average Speed of Answer (ASA)
                </h3>
                <p>
                  <strong>What it measures:</strong> The average time callers wait in the queue before being connected to an agent, typically measured in seconds.
                </p>
                <p>
                  <strong>Why it matters:</strong> ASA directly impacts customer perception of your service quality. Research shows customer satisfaction drops significantly when wait times exceed 60 seconds. Each additional 30 seconds of wait time reduces CSAT by approximately <strong>2-3 percentage points</strong>. ASA is closely related to service level but provides a different perspective by showing the average wait rather than the percentage within threshold.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> 20-30 seconds average; under 15 seconds for premium service
                </p>
                <p>
                  <strong>How to improve:</strong> Align staffing with call arrival patterns, implement skills-based routing for efficient agent utilization, leverage <Link href="/services/omnichannel-contact-center-solutions" className="text-red hover:text-red-dark font-semibold">omnichannel deflection</Link> to reduce phone volume, and monitor real-time adherence to ensure scheduled agents are available.
                </p>

                {/* KPI 8 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  8. Quality Assurance Score
                </h3>
                <p>
                  <strong>What it measures:</strong> A composite score evaluating the quality of customer interactions based on criteria such as greeting, active listening, accuracy, compliance, resolution, and professionalism. Typically scored on a 100-point scale through call monitoring and evaluation.
                </p>
                <p>
                  <strong>Why it matters:</strong> QA scores provide the most detailed view of agent performance and interaction quality. Unlike outcome-based metrics like CSAT and FCR, QA evaluations assess the process of the interaction, catching issues that customers might not report but that affect overall experience quality.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> 80-85% average; top performers consistently score 90%+
                </p>
                <p>
                  <strong>How to improve:</strong> Calibrate QA scoring regularly to ensure consistency across evaluators, share scorecards with agents for transparency, focus coaching on the lowest-scoring behaviors, use AI-powered quality monitoring to evaluate 100% of interactions rather than the typical 2-5% sample, and tie QA performance to agent incentives.
                </p>

                {/* KPI 9 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  9. Agent Utilization Rate
                </h3>
                <p>
                  <strong>What it measures:</strong> The percentage of an agent&apos;s paid time spent handling customer interactions (talk time + after-call work) versus available but idle time.
                </p>
                <p>
                  <strong>Why it matters:</strong> Agent utilization directly impacts cost efficiency. Low utilization means you are paying for idle time. Excessively high utilization (above 90%) leads to agent burnout, increased errors, and higher turnover. Finding the optimal balance is critical for both cost management and service quality.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> 75-85% is the target range; above 85% risks burnout, below 70% indicates overstaffing
                </p>
                <p>
                  <strong>How to improve:</strong> Use workforce management tools for accurate forecasting and scheduling, implement call blending (inbound and outbound) to fill idle periods, assign productive off-phone tasks during slow times, and regularly review scheduling efficiency against actual call arrival patterns.
                </p>

                {/* KPI 10 */}
                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  10. Cost Per Contact
                </h3>
                <p>
                  <strong>What it measures:</strong> The total cost of handling a single customer interaction, calculated by dividing total operating costs by the number of contacts handled.
                </p>
                <p>
                  <strong>Why it matters:</strong> Cost per contact is the ultimate efficiency metric, combining all operational factors into a single number. It allows you to compare the cost-effectiveness of different channels (phone vs. chat vs. email), evaluate the ROI of technology investments, and benchmark your outsourcing partner against industry standards.
                </p>
                <p>
                  <strong>Industry benchmark:</strong> $3.50-$8.00 for phone calls; $2.00-$5.00 for chat; $1.50-$4.00 for email. <Link href="/solutions/customer-service-outsourcing" className="text-red hover:text-red-dark font-semibold">US-based customer service</Link> providers typically fall in the mid-to-upper range but deliver higher quality.
                </p>
                <p>
                  <strong>How to improve:</strong> Increase first-call resolution to reduce repeat contacts, leverage self-service and automation for simple inquiries, optimize agent scheduling and utilization, invest in training to reduce handle times, and negotiate volume-based pricing with your outsourcing partner.
                </p>

                {/* H2: How to Measure */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  How to Measure and Report on KPIs
                </h2>

                <p>
                  Collecting KPI data is only valuable if you have the right processes for analysis, reporting, and action. Here is a framework for effective KPI management:
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Establish a Reporting Cadence
                </h3>
                <ul className="space-y-3 my-6">
                  <li><strong>Real-time dashboards:</strong> Service level, ASA, abandonment rate, and queue depth should be monitored in real time by your outsourcing partner&apos;s operations team and shared via live dashboards.</li>
                  <li><strong>Daily reports:</strong> Key volume metrics, service level achievement, and any SLA breaches should be reported daily, especially during the first 90 days of a new program.</li>
                  <li><strong>Weekly summaries:</strong> Comprehensive performance reports covering all 10 KPIs with trend analysis and commentary on any significant changes.</li>
                  <li><strong>Monthly business reviews:</strong> In-depth performance review meetings with root cause analysis for any underperformance, improvement action plans, and strategic recommendations.</li>
                  <li><strong>Quarterly strategic reviews:</strong> Executive-level reviews assessing the overall partnership, ROI, and strategic alignment with business objectives.</li>
                </ul>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Build Effective Dashboards
                </h3>
                <p>
                  Your KPI dashboard should provide an at-a-glance view of performance against targets. Use color coding (green for target met, yellow for within tolerance, red for below target) and trend indicators to quickly identify areas needing attention. Modern <Link href="/services/customer-experience-analytics" className="text-red hover:text-red-dark font-semibold">CX analytics platforms</Link> offer customizable dashboards that combine data from multiple sources including telephony, CRM, surveys, and quality systems.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Drive Action from Data
                </h3>
                <p>
                  Data without action is wasted. For every KPI that falls below target, your outsourcing partner should provide a root cause analysis within 48 hours and an improvement plan within one week. Assign clear ownership for each improvement action, set milestones, and track progress. The best outsourcing relationships are characterized by a shared commitment to data-driven continuous improvement.
                </p>

                <div className="my-10 overflow-hidden rounded-2xl">
                  <Image src="/images/team-thumbsup.jpg" alt="Call center team celebrating successful KPI achievement" width={800} height={450} className="w-full object-cover" />
                </div>

                {/* H2: Industry Benchmarks */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  Industry Benchmarks by Sector
                </h2>

                <p>
                  KPI targets should be calibrated to your specific industry. Here are benchmark ranges for key sectors:
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Healthcare
                </h3>
                <p>
                  <Link href="/industries/healthcare-call-center-services" className="text-red hover:text-red-dark font-semibold">Healthcare call centers</Link> prioritize accuracy and compliance above speed. FCR targets of 72-80% reflect the complexity of medical inquiries. CSAT standards are high at 88-92% given the sensitive nature of healthcare interactions. Compliance with HIPAA adds quality dimensions that are not captured by standard metrics.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Financial Services
                </h3>
                <p>
                  <Link href="/industries/financial-services-call-center" className="text-red hover:text-red-dark font-semibold">Financial services</Link> call centers balance security, accuracy, and speed. FCR targets of 75-82% reflect the need for careful verification procedures. AHT tends to be higher (5-8 minutes) due to compliance requirements. <Link href="/services/fraud-prevention-cyber-security" className="text-red hover:text-red-dark font-semibold">Fraud detection</Link> metrics are additional KPIs unique to this sector.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  E-Commerce and Retail
                </h3>
                <p>
                  <Link href="/industries/ecommerce-customer-service-outsourcing" className="text-red hover:text-red-dark font-semibold">E-commerce</Link> call centers focus on speed and efficiency given the typically high volume and transactional nature of interactions. Service level targets of 80/20 or better are standard. AHT targets of 3-5 minutes reflect the relatively simple nature of order inquiries and returns processing. Seasonal variation in volume requires sophisticated workforce management.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Technology and SaaS
                </h3>
                <p>
                  <Link href="/industries/saas-technology-support" className="text-red hover:text-red-dark font-semibold">Technology companies</Link> typically have longer handle times (8-15 minutes) and prioritize FCR and CSAT over speed metrics. <Link href="/solutions/technical-support-outsourcing" className="text-red hover:text-red-dark font-semibold">Technical support</Link> tiers add complexity, with Tier 1 handling 60-70% of issues and escalating the rest to specialized teams. Knowledge base utilization rate is an additional KPI that reflects agent training effectiveness.
                </p>

                {/* FAQ Section */}
                <h2 className="text-2xl font-bold text-navy mt-12 mb-4">
                  Frequently Asked Questions
                </h2>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  How many KPIs should I track for my outsourced call center?
                </h3>
                <p>
                  Focus on 5-7 primary KPIs for SLA and governance purposes, but monitor 10-15 supporting metrics for comprehensive performance management. Tracking too many KPIs at the same priority level dilutes focus and makes it difficult to drive improvement. Choose your primary KPIs based on your business priorities: if customer experience is paramount, lead with CSAT and FCR. If cost efficiency is the priority, lead with cost per contact and agent utilization.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  How often should I review call center KPIs?
                </h3>
                <p>
                  Operational metrics like service level and abandonment rate should be monitored in real time. Quality and satisfaction metrics should be reviewed weekly. Comprehensive performance reviews should occur monthly with your outsourcing partner&apos;s leadership. Strategic reviews covering ROI, partnership health, and long-term planning should happen quarterly.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  What happens when KPIs are consistently below target?
                </h3>
                <p>
                  First, conduct a thorough root cause analysis with your outsourcing partner. Common causes include inadequate training, insufficient staffing, technology limitations, or process gaps. Develop a corrective action plan with specific milestones and deadlines. If performance does not improve within 60-90 days despite reasonable remediation efforts, consider whether the provider is the right fit. Persistent underperformance despite clear feedback and support is a sign of deeper capability issues.
                </p>

                <h3 className="text-xl font-semibold text-navy mt-8 mb-3">
                  Should KPI targets change over time?
                </h3>
                <p>
                  Yes. KPI targets should be reviewed and adjusted quarterly or semi-annually. During the initial 90-day ramp period, targets are typically set 5-10% below long-term goals to account for the learning curve. As the program matures, targets should progressively increase. Industry benchmarks also shift over time as customer expectations evolve and technology enables higher performance. Your targets should reflect both your competitive ambitions and realistic improvement trajectories.
                </p>

                {/* CTA */}
                <div className="mt-16 rounded-2xl bg-navy p-8 lg:p-12 text-center">
                  <h2 className="text-2xl font-bold text-white lg:text-3xl">
                    Get a Call Center Performance Audit
                  </h2>
                  <p className="mt-4 text-white/60 max-w-2xl mx-auto">
                    Our team will benchmark your current call center performance against industry standards and identify your biggest opportunities for improvement.
                  </p>
                  <Link
                    href="/contact"
                    className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-6 py-3 text-sm font-semibold text-white hover:bg-red-dark transition-colors"
                  >
                    Request a Free Audit <ArrowRight className="h-4 w-4" />
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
                      <Link href="/blog/inbound-vs-outbound-call-centers" className="text-sm text-gray-600 hover:text-red transition-colors">
                        Inbound vs Outbound Call Centers: Which Is Right?
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/how-to-choose-call-center-partner" className="text-sm text-gray-600 hover:text-red transition-colors">
                        How to Choose the Right Call Center Outsourcing Partner
                      </Link>
                    </li>
                    <li>
                      <Link href="/blog/call-center-outsourcing-cost" className="text-sm text-gray-600 hover:text-red transition-colors">
                        Call Center Outsourcing Cost: Complete 2026 Guide
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
