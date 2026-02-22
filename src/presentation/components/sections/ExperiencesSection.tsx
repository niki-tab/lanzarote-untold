"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Experience } from "@/domain/types";

interface ExperiencesSectionProps {
  experiences: Experience[];
}

function ExperienceCard({
  experience,
  size,
}: {
  experience: Experience;
  size: "large" | "small";
}) {
  const isLarge = size === "large";

  return (
    <Link
      href={experience.slug}
      className="group relative flex overflow-hidden rounded-[20px]"
      style={{ height: "100%" }}
    >
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
        style={{ backgroundImage: `url(${experience.image})` }}
      />
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(to bottom, #2A262400 ${isLarge ? "30%" : "20%"}, ${isLarge ? "#2A2624CC" : "#2A2624CC"} 100%)`,
        }}
      />
      <div className="relative mt-auto flex flex-col gap-2 p-8">
        <span className="font-inter text-[10px] font-medium tracking-[2px] text-gold">
          {experience.category}
        </span>
        <h3
          className={`font-cormorant font-normal leading-[1.15] text-text-primary ${isLarge ? "text-[28px]" : "text-2xl"}`}
        >
          {experience.title}
        </h3>
      </div>
    </Link>
  );
}

export function ExperiencesSection({ experiences }: ExperiencesSectionProps) {
  const [main, ...rest] = experiences;

  return (
    <section className="flex w-full flex-col gap-[60px] px-[120px] py-[120px]">
      {/* Header */}
      <div className="flex w-full items-end justify-between">
        <div className="flex flex-col gap-5">
          <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
            SIGNATURE EXPERIENCES
          </span>
          <h2 className="font-cormorant text-5xl font-light leading-[1.1] tracking-[-1px] text-text-primary">
            Curated for the
            <br />
            discerning traveler
          </h2>
        </div>
        <Link
          href="/experiences"
          className="flex items-center gap-2 font-inter text-[13px] tracking-[1px] text-gold transition-opacity hover:opacity-80"
        >
          View all experiences
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>

      {/* Grid */}
      <div className="flex h-[460px] w-full gap-6">
        {/* Left - Large Card */}
        <div className="flex h-full flex-1 flex-col gap-6">
          <ExperienceCard experience={main} size="large" />
        </div>

        {/* Right - 2 Stacked Cards */}
        <div className="flex h-full flex-1 flex-col gap-6">
          {rest.map((exp) => (
            <ExperienceCard key={exp.id} experience={exp} size="small" />
          ))}
        </div>
      </div>
    </section>
  );
}
