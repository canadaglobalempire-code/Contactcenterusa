"use client";

import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

/**
 * Renders the real figure in the server HTML, so crawlers, AI readers and
 * visitors without JavaScript read "98%" rather than "0%". The count-up only
 * runs for counters that start below the fold, where the reset to 0 is never
 * seen, and never for visitors who prefer reduced motion.
 */
export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [count, setCount] = useState(target);

  useEffect(() => {
    const el = ref.current;
    if (!el || typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const { top, bottom } = el.getBoundingClientRect();
    if (top < window.innerHeight && bottom > 0) return;

    let frame = 0;
    let startTime: number | undefined;
    const animate = (timestamp: number) => {
      startTime ??= timestamp;
      const progress = Math.min((timestamp - startTime) / (duration * 1000), 1);
      setCount((1 - Math.pow(1 - progress, 3)) * target);
      if (progress < 1) frame = requestAnimationFrame(animate);
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        cancelAnimationFrame(frame);
        frame = requestAnimationFrame(animate);
      },
      { rootMargin: "-100px 0px" }
    );

    // Out of view: start from zero so the count-up plays when it scrolls in.
    frame = requestAnimationFrame(() => setCount(0));
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      setCount(target);
    };
  }, [target, duration]);

  return (
    <span ref={ref}>
      {prefix}
      {decimals > 0 ? count.toFixed(decimals) : Math.round(count)}
      {suffix}
    </span>
  );
}
