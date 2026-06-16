"use client";

import { useInView } from "@/hooks/useInView";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface RelatedItem {
  title: string;
  desc: string;
  href: string;
}

interface RelatedServicesProps {
  heading?: string;
  items: RelatedItem[];
}

export function RelatedServices({ heading = "Related Services", items }: RelatedServicesProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-[1536px] px-5 lg:px-8">
        <h2
          className={`text-center text-2xl font-bold text-navy sm:text-3xl ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          {heading}
        </h2>
        <div ref={ref} className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={item.title}
              className={isInView ? "animate-fade-in-up" : "opacity-0"}
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <Link
                href={item.href}
                className="group block rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <h3 className="text-lg font-bold text-navy">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-700">{item.desc}</p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-red transition-all group-hover:gap-3">
                  Learn More <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
