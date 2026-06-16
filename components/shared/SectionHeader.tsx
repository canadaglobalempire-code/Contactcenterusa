"use client";

import { useInView } from "@/hooks/useInView";

interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeaderProps) {
  const { ref, isInView } = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`mb-12 ${centered ? "text-center" : ""} ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
    >
      {label && (
        <span
          className={`text-xs font-semibold uppercase tracking-widest ${
            light ? "text-blue-300" : "text-blue"
          }`}
        >
          {label}
        </span>
      )}
      <h2
        className={`mt-2 text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? "text-white" : "text-navy"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p
          className={`mt-4 text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${
            light ? "text-gray-300" : "text-text-muted"
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
