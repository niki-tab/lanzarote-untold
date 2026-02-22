"use client";

import { motion } from "framer-motion";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";
import { Button } from "@/presentation/components/ui/Button";

export function HeroSection() {
  return (
    <section className="relative h-[780px] w-full overflow-hidden">
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
      <div className="relative flex h-full flex-col justify-end pb-20 pl-[120px]">
        <motion.div
          className="flex w-[700px] flex-col gap-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <SectionLabel withLine>LANZAROTE, CANARY ISLANDS</SectionLabel>

          <h1 className="font-cormorant text-[72px] font-light leading-[1.05] tracking-[-1px] text-text-primary">
            Your journey,
            <br />
            entirely yours
          </h1>

          <p className="w-[540px] font-inter text-base font-light leading-[1.8] text-text-secondary">
            Bespoke travel experiences crafted around your desires. Private
            villas, hidden coves, volcanic trails, and Michelin-starred dining -
            all curated by those who call this island home.
          </p>

          <div className="flex items-center gap-5">
            <Button href="/contact" variant="primary">
              BEGIN YOUR JOURNEY
            </Button>
            <Button href="/experiences" variant="secondary">
              VIEW EXPERIENCES
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
