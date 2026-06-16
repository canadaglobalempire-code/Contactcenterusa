"use client";

import { useInView } from "@/hooks/useInView";

export function AboutHero() {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative overflow-hidden bg-navy py-28 lg:py-36">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <div className="relative mx-auto max-w-[1536px] px-5 text-center lg:px-8">
        <div ref={ref} className={isInView ? "animate-fade-in-up" : "opacity-0"}>
          <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-white/70">
            About Us
          </span>
          <h1 className="mx-auto mt-6 max-w-3xl text-4xl font-bold leading-[1.1] text-white sm:text-5xl lg:text-6xl">
            About Contact Center USA, a{" "}
            <span className="text-red">US-Based Call Center Partner</span>
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-white/60">
            We help businesses launch inbound support, outbound calling,
            customer care, technical support, and BPO programs with trained
            US-based teams.
          </p>
        </div>
      </div>
    </section>
  );
}
