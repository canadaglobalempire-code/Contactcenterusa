"use client";

import { useInView } from "@/hooks/useInView";
import Image from "next/image";
import { Shield, Award, Star } from "lucide-react";

const certifications = [
  { label: "SOC 2", Icon: Shield },
  { label: "HIPAA", Icon: Shield },
  { label: "PCI DSS", Icon: Shield },
  { label: "BBB A+", Icon: Award },
  { label: "Clutch Top BPO", Icon: Award },
  { label: "ISO 27001", Icon: Star },
];

export function SocialProofBar() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="w-full bg-white py-16">
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6">
        <div ref={ref} className={isInView ? "animate-fade-in-up" : "opacity-0"}>
          <p className="text-center text-sm font-semibold uppercase tracking-widest text-text-muted mb-10">
            Trusted by Industry Leaders
          </p>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {certifications.map((cert) => (
              <div
                key={cert.label}
                className="flex flex-col items-center gap-2 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 cursor-default"
              >
                <cert.Icon className="w-10 h-10 text-gray-600" />
                <span className="text-xs font-medium text-gray-600">
                  {cert.label}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 flex items-center justify-center gap-3">
            {[
              "/images/hero-agent-1.jpg",
              "/images/hero-agent-2.jpg",
              "/images/hero-agent-3.jpg",
              "/images/agents-working.jpg",
              "/images/agent-smiling.jpg",
            ].map((src, i) => (
              <div key={i} className="relative h-14 w-14 overflow-hidden rounded-full border-2 border-white shadow-md" style={{ marginLeft: i > 0 ? "-8px" : "0" }}>
                <Image src={src} alt={`Contact Center USA team member ${i + 1}`} fill sizes="56px" className="object-cover" />
              </div>
            ))}
            <span className="ml-2 text-sm font-medium text-text-muted">
              500+ trained agents ready to serve
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
