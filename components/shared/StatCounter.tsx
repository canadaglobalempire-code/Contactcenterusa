"use client";

import { useEffect, useRef, useState } from "react";

interface StatCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

/**
 * A stat figure for inner pages that renders the real value in the server
 * HTML, so crawlers, AI readers and visitors without JavaScript read "98%"
 * rather than "0%". The count-up only runs for figures that start below the
 * fold, where the reset to 0 is never seen, and never for visitors who prefer
 * reduced motion.
 *
 * AnimatedCounter (which starts at 0) is left as it is because the homepage
 * uses it, and the owner has approved the homepage exactly as it renders.
 */
export function StatCounter({
  target,
  suffix = "",
  prefix = "",
  duration = 2,
  decimals = 0,
}: StatCounterProps) {
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
