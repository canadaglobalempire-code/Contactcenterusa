import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { LeadCTALink } from "@/components/shared/LeadCTALink";
import { answerEngineFaqs, priorityServiceLinks } from "@/lib/ai-context";

const featuredAnswers = answerEngineFaqs.slice(0, 4);
const featuredServices = priorityServiceLinks.slice(0, 6);

export function BuyerAnswerSection() {
  return (
    <section className="bg-white py-20 lg:py-28">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div>
            <span className="text-xs font-semibold uppercase tracking-widest text-red">
              Buyer Answers
            </span>
            <h2 className="mt-3 text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Clear Answers Before You Request a Call Center Quote
            </h2>
            <p className="mt-5 text-base leading-relaxed text-gray-700">
              Compare service types, pricing factors, and quote requirements
              before choosing an outsourced support partner.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <LeadCTALink
                ctaLocation="homepage_answer_section_quote_cta"
                leadOffer="Homepage answer section call center quote"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-red px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-red-dark"
              >
                Request a Quote
                <ArrowRight className="h-4 w-4" />
              </LeadCTALink>
              <Link
                href="/answers"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-gray-300 px-6 py-3 text-sm font-bold text-navy transition-colors hover:border-red/40 hover:text-red"
              >
                View Answers
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {featuredServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="flex items-center gap-2 text-sm font-semibold text-navy transition-colors hover:text-red"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-red" />
                  {service.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {featuredAnswers.map((item) => (
              <article key={item.question} className="rounded-lg border border-gray-200 bg-gray-50 p-5">
                <h3 className="text-base font-bold leading-snug text-navy">
                  {item.question}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-gray-700">
                  {item.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
