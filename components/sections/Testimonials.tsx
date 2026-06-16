"use client";

import { useInView } from "@/hooks/useInView";
import { Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";

const testimonials = [
  {
    quote:
      "Contact Center USA transformed our customer service operations. We went from missing 30% of calls to 99.8% answer rate within the first month. Their agents feel like part of our team.",
    name: "Sarah Mitchell",
    title: "VP of Operations",
    company: "A Leading Tech Company",
    initials: "SM",
  },
  {
    quote:
      "We needed bilingual support for our growing Hispanic customer base. Contact Center USA delivered fluent Spanish-speaking agents who understood our products perfectly. Sales increased 24%.",
    name: "David Rodriguez",
    title: "CEO",
    company: "A National Ecommerce Brand",
    initials: "DR",
  },
  {
    quote:
      "The flexibility is what sets them apart. During our holiday rush, they scaled from 10 to 85 agents in under a week. No other provider could match that speed.",
    name: "Jennifer Chen",
    title: "Director of CX",
    company: "A Major Retail Chain",
    initials: "JC",
  },
];

export function Testimonials() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="bg-white py-24">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6">
        <SectionHeader
          label="CLIENT SUCCESS STORIES"
          title="Hear From Our Partners"
          subtitle="Real results from real businesses we've helped transform."
        />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`bg-white rounded-2xl p-8 relative border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
              style={{ animationDelay: `${i * 0.15}s` }}
            >
              <div className="absolute top-6 right-8 text-6xl leading-none text-blue/10 font-serif select-none">
                &rdquo;
              </div>

              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className="w-4 h-4 fill-amber-400 text-amber-400"
                  />
                ))}
              </div>

              <p className="text-text-dark text-[15px] leading-relaxed">
                {t.quote}
              </p>

              <div className="mt-6 pt-6 border-t border-gray-100 flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue to-cyan-400 text-white font-bold flex items-center justify-center text-sm">
                  {t.initials}
                </div>
                <div>
                  <div className="text-navy font-bold text-sm">{t.name}</div>
                  <div className="text-text-muted text-xs">
                    {t.title}, {t.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-text-muted text-sm inline-flex items-center gap-1.5">
            <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
            Rated 4.9/5 from 127+ verified reviews
          </p>
        </div>
      </div>
    </section>
  );
}
