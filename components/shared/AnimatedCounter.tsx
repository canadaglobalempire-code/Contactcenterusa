"use client";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  decimals?: number;
}

/**
 * Renders the final value on the server and on the first client render so the
 * real number is always present in the HTML (no 0 -> target count-up that
 * leaves zeros in the static markup). Kept as a component with the same props
 * shape as the previous animated version; the animation, at most, goes from
 * this number to itself.
 */
export function AnimatedCounter({
  target,
  suffix = "",
  prefix = "",
  decimals = 0,
}: AnimatedCounterProps) {
  return (
    <span>
      {prefix}
      {decimals > 0 ? target.toFixed(decimals) : Math.round(target)}
      {suffix}
    </span>
  );
}
