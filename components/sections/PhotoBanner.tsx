"use client";

import { useInView } from "@/hooks/useInView";

export function PhotoBanner({ image, video, quote, author }: { image: string; video?: string; quote: string; author?: string }) {
  const { ref, isInView } = useInView(0.1);

  return (
    <section className="relative h-[45vh] min-h-[320px] overflow-hidden">
      {video ? (
        <video preload="metadata"
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 h-full w-full object-cover"
          poster={image}
        >
          <source src={video} type="video/mp4" />
        </video>
      ) : (
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${image})` }}
        />
      )}

      <div className="absolute inset-0 bg-navy/80" />

      <div className="absolute left-[10%] top-1/2 hidden h-px w-[80px] -translate-y-1/2 bg-red lg:block" />
      <div className="absolute right-[10%] top-1/2 hidden h-px w-[80px] -translate-y-1/2 bg-red lg:block" />

      <div className="relative z-10 flex h-full items-center justify-center px-5">
        <div
          ref={ref}
          className={`max-w-3xl text-center ${isInView ? "animate-fade-in-up" : "opacity-0"}`}
        >
          <div className="mx-auto mb-6 h-1 w-12 bg-red" />
          <p className="text-xl font-bold leading-relaxed text-white sm:text-2xl lg:text-3xl">
            {quote}
          </p>
          {author && (
            <p className="mt-6 text-sm font-semibold uppercase tracking-[0.2em] text-red">
              — {author}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
