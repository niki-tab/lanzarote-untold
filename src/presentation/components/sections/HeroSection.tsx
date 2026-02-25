"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";
import { Button } from "@/presentation/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative h-[520px] w-full overflow-hidden lg:h-[780px]">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1588613877465-89cb8a91d363)",
        }}
      />

      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to bottom, #2A262400 0%, #2A262480 50%, #2A2624E0 80%, #2A2624 100%)",
        }}
      />

      {/* Content */}
      <div className="relative flex h-full flex-col justify-end pb-10 pl-8 md:pl-20 lg:pb-20 lg:pl-20">
        <motion.div
          className="flex w-full flex-col gap-6 lg:w-[700px] lg:gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel withLine>LANZAROTE, CANARY ISLANDS</SectionLabel>

          <h1 className="font-cormorant text-[44px] font-light leading-[1.05] tracking-[-1px] text-text-primary lg:text-[72px]">
            Private & exclusive
            <br />
            experiences in Lanzarote
          </h1>

          <p className="w-full max-w-[300px] font-inter text-sm font-light leading-[1.8] text-text-secondary lg:max-w-[540px] lg:text-base">
            Luxury Lanzarote experiences crafted around your desires. Private
            tours, hidden coves, volcanic trails, and Michelin-starred dining —
            all curated by those who call this island home.
          </p>

          <div className="flex flex-col gap-3 pr-5 md:flex-row md:items-center md:gap-5 md:pr-0">
            <Button href="/contact" variant="primary" className="w-full justify-center md:w-auto">
              BEGIN YOUR JOURNEY
            </Button>
            <Button href="/experiences" variant="secondary" className="w-full justify-center md:w-auto">
              VIEW EXPERIENCES
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
