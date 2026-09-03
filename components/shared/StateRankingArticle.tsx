import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Clock, Calendar, ArrowRight, CheckCircle, ExternalLink } from "lucide-react";
import { HeroContactForm } from "@/components/shared/HeroContactForm";
import { buildAEOBlogPostingSchema, buildItemListSchema } from "@/lib/aeo";
import {
  CARD_META,
  PROVIDER_PROFILES,
  statePhoto,
  stateRankingPosts,
  stateRankingSeeds,
} from "@/lib/state-ranking-posts";

/**
 * NY-style ranked-list article for the generated top-10-bpo-companies-{state}
 * pages. Mirrors the hand-built New York/California template — navy hero,
 * 2/3 + sidebar lead form, ranked company cards with strengths/weaknesses,
 * state deep-dive sections, trends grid, CTA and FAQ — driven entirely from
 * the per-state seed data in lib/state-ranking-posts.ts.
 */
/**
 * In-body photo with a caption. These articles ran ~16 minutes of text against
 * two images, which is thin on image search and gives the body copy no visual
 * break. The caption is the point as much as the photo: it is indexable text
 * tied to the section it sits in, and it carries the state name.
 */
function ArticleFigure({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="my-10">
      <div className="relative aspect-[16/8] overflow-hidden rounded-2xl">
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1024px) 800px, 100vw"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-3 text-sm leading-relaxed text-gray-600">
        {caption}
      </figcaption>
    </figure>
  );
}

export function StateRankingArticle({ slug }: { slug: string }) {
  const seed = stateRankingSeeds[slug];
  const post = stateRankingPosts[slug];
  const { state, abbr } = seed;
  const consentLabel = seed.consent === "all-party" ? "all-party (two-party) consent" : "one-party consent";

  const companies = PROVIDER_PROFILES.map((p) => ({ ...p, ...CARD_META[p.rank] }));

  const keyTakeaways = [
    `${state} follows ${consentLabel} for call recording — ${seed.consent === "all-party" ? "a disclosure must open every call, and a national one-party script creates real exposure" : "recording is legally simple, so the differentiators are elsewhere"}`,
    seed.regulatory.body[0].split(". ").slice(0, 2).join(". ") + ".",
    `Primary talent markets: ${seed.metros} — and they are not interchangeable on cost or capability`,
    seed.costContext[0].split(". ")[0] + ".",
    `Continuity matters here: ${seed.continuity.body[0].split(". ")[0].toLowerCase().replace(/^./, (c) => c.toUpperCase())}.`,
  ];

  const rankingCriteria = [
    `${consentLabel.charAt(0).toUpperCase() + consentLabel.slice(1)} handling — a documented ${state} disclosure script, not a national default`,
    "100% domestic US delivery with native language fluency and cultural alignment",
    "Compliance evidence on request — HIPAA BAAs, PCI-DSS controls, SOC 2, TCPA consent records",
    `Experience in ${state}'s dominant sectors: ${seed.industries.map((i) => i.name.toLowerCase()).join(", ")}`,
    `Scheduling aligned to ${seed.timezone}`,
    "Technology depth — real-time integration with leading CRMs, EHRs and dispatch platforms",
    "Elastic capacity for seasonal surges with committed, pre-priced overflow",
    "Transparent terms — month-to-month options without multi-year lock-in",
    `Geographic delivery flexibility across ${seed.metroRows.map((m) => m[0]).slice(0, 4).join(", ")} and beyond`,
    "References from organizations of your size, not just flagship logos",
  ];

  const url = `https://contactcenterusa.com/blog/${slug}`;
  const modified = new Date(`${post.dateModified}T00:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric", month: "long", day: "numeric", timeZone: "UTC",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildAEOBlogPostingSchema({
              url,
              headline: `Top 10 BPO Companies in ${state} (2026 Rankings)`,
              description: post.description,
              datePublished: post.datePublished,
              dateModified: post.dateModified,
              image: `https://contactcenterusa.com${post.image}`,
              keywords: post.keywords,
              category: post.category,
            })
          ).replace(/</g, "\\u003c"),
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            buildItemListSchema(
              `Top 10 BPO Companies in ${state} (2026)`,
              companies.map((c) => ({
                rank: c.rank,
                name: c.name,
                url: c.rank === 7 ? "https://contactcenterusa.com" : `https://${c.website.replace(/^https?:\/\//, "")}`,
              }))
            )
          ).replace(/</g, "\\u003c"),
        }}
      />

      {/* HERO */}
      <section className="bg-navy pt-40 pb-20 lg:pb-28">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <Link href="/blog" className="mb-6 inline-flex items-center gap-2 text-sm text-white/50 hover:text-white">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mb-6" />
          <span className="mb-5 inline-block rounded-full bg-red px-3 py-1 text-xs font-semibold uppercase text-white">
            {state} BPO Rankings
          </span>
          <h1 className="max-w-4xl text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Top 10 BPO Companies in {state} (2026 Rankings)
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-white/50">
            <span>By the Contact Center USA editorial team</span>
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" /> Updated {modified}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" /> {post.readTime}</span>
          </div>
          <div className="relative mt-10 aspect-[21/8] max-h-[480px] w-full overflow-hidden rounded-2xl">
            <Image
              src={post.image}
              alt={post.imageAlt}
              fill
              priority
              fetchPriority="high"
              quality={62}
              sizes="(max-width: 1536px) 100vw, 1280px"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* CONTENT + SIDEBAR */}
      <section className="py-16">
        <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
            {/* Main content */}
            <div className="lg:col-span-2">
              {post.intro.map((p, i) => (
                <p key={i} className={`${i === 0 ? "" : "mt-4 "}text-lg leading-relaxed text-gray-700`}>{p}</p>
              ))}

              {/* Key takeaways */}
              <div className="mt-8 rounded-2xl border border-gray-100 bg-gray-50 p-6">
                <h2 className="text-lg font-bold text-navy">Key Takeaways</h2>
                <ul className="mt-3 space-y-2">
                  {keyTakeaways.map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                      <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* How we ranked */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">
                How We Ranked the Top {state} BPO Companies
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                A {state} ranking cannot be built from a generic BPO checklist. The state&apos;s industry mix,
                its {consentLabel} recording standard, its labor market and its continuity profile drive a
                {" "}{state}-specific methodology:
              </p>
              <ul className="mt-4 space-y-3">
                {rankingCriteria.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>

              {/* Company cards */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">
                The Top 10 BPO Companies in {state} (2026)
              </h2>
              <p className="mt-4 rounded-xl border border-gray-200 bg-gray-50 p-4 text-sm leading-relaxed text-gray-600">
                <strong className="text-navy">Disclosure:</strong> Contact Center USA is the publisher of
                this ranking and appears in it at #7. We have not placed ourselves first. Every other
                entry links out to the provider&apos;s own site so you can verify the claims yourself.
              </p>

              {companies.map((company, i) => (
                <div
                  key={company.rank}
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

                  <p className="mt-4 leading-relaxed text-gray-700">{company.overview}</p>

                  <div className="mt-6">
                    <h4 className="text-sm font-bold uppercase tracking-wide text-navy">Services:</h4>
                    <div className="mt-3 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {company.capabilities.map((cap, j) => (
                        <div key={j} className="flex items-start gap-2">
                          <CheckCircle className="mt-0.5 h-4 w-4 flex-shrink-0 text-red" />
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
                    <div className="rounded-xl border border-green-100 bg-green-50 p-4 text-sm">
                      <strong className="text-navy">Strengths:</strong>{" "}
                      <span className="text-gray-700">{company.strengths}</span>
                    </div>
                    <div className="rounded-xl border border-red/20 bg-red/[0.04] p-4 text-sm">
                      <strong className="text-navy">Weaknesses:</strong>{" "}
                      <span className="text-gray-700">{company.weaknesses}</span>
                    </div>
                  </div>

                  <div className="mt-4 rounded-xl bg-gray-50 p-4 text-sm">
                    <strong className="text-navy">Why They Stand Out:</strong>{" "}
                    <span className="text-gray-700">{company.highlight}</span>
                  </div>

                  {company.rank === 7 ? (
                    <Link href="/contact" className="mt-4 inline-flex items-center gap-1.5 text-sm font-bold text-red hover:underline">
                      Get a Free {state} Quote <ArrowRight className="h-3.5 w-3.5" />
                    </Link>
                  ) : (
                    <a
                      href={`https://${company.website.replace(/^https?:\/\//, "")}`}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red hover:underline"
                    >
                      Visit Website <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  )}
                </div>
              ))}

              <ArticleFigure
                src="/images/cc-team-collab.jpg"
                alt={`BPO agent team supporting ${state} businesses`}
                caption={`Contact Center USA (#7) staffs ${state} programs with 100% US-based agents scheduled to ${seed.timezone}, on month-to-month terms.`}
              />

              {/* Which providers fit */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">
                Which of These Providers Actually Fit {state}
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">{seed.providerFit}</p>
              <p className="mt-4 leading-relaxed text-gray-700">
                Full national profiles of all ten providers are on our{" "}
                <Link href="/blog/top-10-bpo-companies-in-usa" className="font-semibold text-red hover:underline">
                  Top 10 BPO Companies in the USA
                </Link>{" "}
                ranking. The rest of this page focuses on what changes when the program is in {state}.
              </p>

              {/* Why the state runs on BPO */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">
                What Makes {state} a Distinct Contact Center Market
              </h2>
              {seed.economy.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-gray-700">{p}</p>
              ))}

              <ArticleFigure
                src={statePhoto(slug, 2)}
                alt={`Contact center floor serving ${state} metro markets`}
                caption={`Primary ${state} talent markets: ${seed.metros}. The metro a program lands in changes both what it costs and what it can do.`}
              />

              {/* Metro comparison */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">
                {state} Metros Compared: Where the Talent Actually Is
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                Provider capability in {state} is not evenly distributed, and the metro a program is placed in
                changes both what it costs and what it can do.
              </p>
              <div className="mt-6 overflow-x-auto rounded-2xl border border-gray-200">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-50 text-left">
                      <th className="p-4 font-bold text-navy">Metro</th>
                      <th className="p-4 font-bold text-navy">What It Does</th>
                      <th className="p-4 font-bold text-navy">The Talent Pool</th>
                    </tr>
                  </thead>
                  <tbody>
                    {seed.metroRows.map(([metro, role, talent], i) => (
                      <tr key={i} className="border-t border-gray-100">
                        <td className="p-4 font-semibold text-navy">{metro}</td>
                        <td className="p-4 text-gray-700">{role}</td>
                        <td className="p-4 text-gray-700">{talent}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Labor market */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">{seed.labor.heading}</h2>
              {seed.labor.body.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-gray-700">{p}</p>
              ))}
              {seed.labor.bullets && (
                <ul className="mt-4 space-y-3">
                  {seed.labor.bullets.map((b, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle className="mt-0.5 h-5 w-5 flex-shrink-0 text-red" />
                      <span className="text-gray-700">{b}</span>
                    </li>
                  ))}
                </ul>
              )}

              <ArticleFigure
                src={statePhoto(slug, 3)}
                alt={`Quality team reviewing ${state} call recording consent procedures`}
                caption={`${state} follows ${consentLabel}. A partner should be able to show you the ${state} disclosure script its agents read, not a national default.`}
              />

              {/* Compliance */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">
                {state}-Specific Compliance: Recording Consent and Beyond
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                <strong>{state} follows {consentLabel}.</strong> {seed.consentDetail}
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                This is not a mere technicality. Recording-consent violations carry substantial legal
                liabilities, and the statutory exposure sits with your business, not only the vendor. When
                evaluating any {state} BPO partner, verify how their agents deliver the recording disclosure
                and ensure call logs maintain audit-ready consent timestamps.
              </p>
              <h3 className="mt-8 text-xl font-bold text-navy">{seed.regulatory.heading}</h3>
              {seed.regulatory.body.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-gray-700">{p}</p>
              ))}

              {/* Industries */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">
                Top {state} Industries That Hire BPOs
              </h2>
              {seed.industryDetail.map((p, i) => (
                <p key={i} className="mt-4 leading-relaxed text-gray-700">{p}</p>
              ))}
              <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {seed.industries.map((ind, i) => (
                  <Link key={i} href={ind.href} className="rounded-xl border border-gray-100 bg-white p-5 transition-colors hover:border-red/30">
                    <h3 className="font-bold text-navy">{ind.name}</h3>
                    <p className="mt-2 text-sm text-gray-700">{ind.note}</p>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-red">
                      {ind.name} Call Center Services <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </Link>
                ))}
              </div>

              <ArticleFigure
                src={statePhoto(slug, 4)}
                alt={`US-based agents handling ${state} industry programs`}
                caption={`${state} BPO demand concentrates in ${seed.industries.map((i) => i.name.toLowerCase()).slice(0, 3).join(", ")} — sectors where industry-specific training and compliance decide the shortlist.`}
              />

              {/* Local vs national */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">
                Local {state} Provider vs. Distributed Nationwide Partner
              </h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                {state} buyers frequently weigh an in-state boutique provider against a distributed nationwide
                US partner. While local providers offer geographic proximity, they concentrate labor-market and
                continuity risk in a single facility — meaning a local storm or power outage takes your customer
                support offline. {seed.continuity.body[0]}
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                A nationwide US partner schedules dedicated teams to {seed.timezone}, recruits from the full
                national talent pool, and provides multi-site redundancy so your lines never go down during
                local disruptions. {seed.continuity.body[1]}
              </p>

              {/* Conclusion */}
              <h2 className="mt-12 text-2xl font-bold text-navy sm:text-3xl">Conclusion</h2>
              <p className="mt-4 leading-relaxed text-gray-700">
                The <strong>{state} BPO market</strong> rewards buyers who choose on evidence rather than on
                rate. {seed.costContext[seed.costContext.length - 1]}
              </p>
              <p className="mt-4 leading-relaxed text-gray-700">
                Global Empire Corporation tops our 2026 {state} ranking for full-service delivery, and{" "}
                <Link href="/" className="font-semibold text-red hover:underline">Contact Center USA</Link> (#7)
                remains the US-only partner of choice — 100% domestic agents, month-to-month terms, a documented{" "}
                {state} {consentLabel} script, and scheduling aligned to {seed.timezone}. Pair this ranking with
                our <Link href={seed.locationHref} className="font-semibold text-red hover:underline">{state} call
                center services</Link> page to scope a program against your own call volumes.
              </p>

              {/* Routes equity from these pages to the national rankings, which are the
                  formats that actually earn clicks on this site. */}
              <p className="mt-4 leading-relaxed text-gray-700">
                If your program is vertical-specific rather than {state}-specific, our national
                rankings go deeper on provider fit:{" "}
                <Link href="/blog/top-15-healthcare-bpo-companies-usa" className="font-semibold text-red hover:underline">healthcare BPO companies</Link>,{" "}
                <Link href="/blog/top-15-insurance-bpo-companies-usa" className="font-semibold text-red hover:underline">insurance BPO companies</Link>,{" "}
                <Link href="/blog/top-10-appointment-setting-companies-usa" className="font-semibold text-red hover:underline">appointment setting companies</Link>, and{" "}
                <Link href="/blog/top-10-customer-service-outsourcing-companies-usa" className="font-semibold text-red hover:underline">customer service outsourcing companies</Link>.
              </p>

              {/* CTA */}
              <div className="mt-12 rounded-2xl bg-navy p-8 text-center">
                <h3 className="text-2xl font-bold text-white">
                  Ready to Outsource Your {state} Customer Service?
                </h3>
                <p className="mx-auto mt-3 max-w-lg text-white/60">
                  Contact Center USA delivers 100% US-based support with a documented {state} recording
                  disclosure, {seed.timezone} scheduling, and month-to-month terms. Get a free {state} quote
                  today.
                </p>
                <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-lg bg-red px-8 py-4 text-[15px] font-semibold text-white hover:bg-red-dark">
                  Get a Free {state} Quote <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              {/* FAQ */}
              <h2 className="mt-16 text-2xl font-bold text-navy sm:text-3xl">Frequently Asked Questions</h2>
              {post.faqs.map((faq, i) => (
                <div key={i} className="mt-6 border-b border-gray-100 pb-6">
                  <h3 className="text-lg font-bold text-navy">{faq.question}</h3>
                  <p className="mt-2 leading-relaxed text-gray-700">{faq.answer}</p>
                </div>
              ))}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="space-y-6 lg:sticky lg:top-28">
                <HeroContactForm
                  ctaLocation={`${slug.replace(/-/g, "_")}_sidebar_form`}
                  leadOffer={`${state} BPO quote`}
                  title={`Get a ${abbr} BPO Quote`}
                  description="Tell us your program size, channels, and timeline."
                  submitLabel="Compare Options"
                />

                <div className="rounded-2xl border border-gray-100 bg-white p-6">
                  <h3 className="font-bold text-navy">Related Articles</h3>
                  <ul className="mt-4 space-y-3">
                    {post.related.map((article, i) => (
                      <li key={i}>
                        <Link href={article.href} className="text-sm text-gray-700 transition-colors hover:text-red">
                          {article.label} →
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
