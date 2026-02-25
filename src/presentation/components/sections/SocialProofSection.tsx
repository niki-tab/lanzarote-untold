"use client";

import { useEffect, useRef, useState } from "react";
import type { Stat, Testimonial } from "@/domain/types";

function AnimatedStat({ stat }: { stat: Stat }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col items-center gap-2"
    >
      <span
        className={`font-cormorant text-4xl font-light leading-[0.85] text-gold transition-opacity duration-700 lg:text-[52px] ${isVisible ? "opacity-100" : "opacity-0"}`}
      >
        {stat.value}
      </span>
      <span className="font-inter text-[11px] tracking-[1px] text-text-muted lg:text-xs">
        {stat.label}
      </span>
    </div>
  );
}

interface SocialProofSectionProps {
  stats: Stat[];
  testimonials: Testimonial[];
}

export function SocialProofSection({
  stats,
  testimonials,
}: SocialProofSectionProps) {
  return (
    <section className="flex w-full flex-col items-center gap-10 px-8 py-[60px] md:px-20 lg:gap-20 lg:px-20 lg:py-[120px]">
      {/* Stats Row */}
      <div className="grid w-full grid-cols-2 gap-6 border-y border-border py-8 lg:flex lg:justify-around lg:py-10">
        {stats.map((stat) => (
          <AnimatedStat key={stat.id} stat={stat} />
        ))}
      </div>

      {/* Testimonials */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-8">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="flex flex-1 flex-col gap-4 border border-border bg-dark-bg p-6 lg:gap-6 lg:p-10"
          >
            <p className="font-cormorant text-lg italic leading-[1.6] text-text-primary lg:text-xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="flex flex-col gap-1">
              <span className="font-inter text-[13px] font-medium tracking-[1px] text-text-primary">
                {t.authorName}
              </span>
              <span className="font-inter text-xs text-text-muted">
                {t.authorLocation}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
