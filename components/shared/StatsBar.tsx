"use client";

import { useInView } from "@/hooks/useInView";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  prefix?: string;
  decimals?: number;
}

interface StatsBarProps {
  stats: Stat[];
}

export function StatsBar({ stats }: StatsBarProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`mx-auto max-w-[1536px] px-5 lg:px-8 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      <div className="grid grid-cols-2 gap-6 rounded-2xl bg-gray-50 p-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <div key={stat.label} className="text-center">
            <div className="text-3xl font-bold text-navy sm:text-4xl">
              <AnimatedCounter
                target={stat.value}
                suffix={stat.suffix}
                prefix={stat.prefix}
                decimals={stat.decimals}
              />
            </div>
            <div className="mt-1 text-sm text-gray-600">{stat.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
