"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative h-[420px] w-full overflow-hidden lg:h-[500px]">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1544957347-2c015a5024ac)",
        }}
      />
      <div className="absolute inset-0 bg-[#2A2624B0]" />

      {/* Content */}
      <div className="relative flex h-full items-center justify-center">
        <motion.div
          className="flex w-full flex-col items-center gap-6 px-5 lg:w-[600px] lg:gap-8 lg:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
            YOUR JOURNEY AWAITS
          </span>
          <h2 className="text-center font-cormorant text-[32px] font-light leading-[1.15] tracking-[-1px] text-text-primary lg:text-5xl">
            Let Lanzarote Untold craft something unforgettable
          </h2>
          <p className="max-w-[280px] text-center font-inter text-sm font-light leading-[1.8] text-text-secondary lg:max-w-[440px] lg:text-base">
            Begin with a complimentary consultation. Tell us about your dream
            Lanzarote experience, and we will make it real.
          </p>
          <Link
            href="/contact"
            className="flex items-center gap-3 bg-gold px-11 py-[18px] font-inter text-xs font-medium tracking-[2px] text-text-dark transition-opacity hover:opacity-80"
          >
            ENQUIRE NOW
            <ArrowRight className="h-4 w-4 text-[#353130]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
