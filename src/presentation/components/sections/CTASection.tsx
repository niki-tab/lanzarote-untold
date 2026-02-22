"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function CTASection() {
  return (
    <section className="relative h-[500px] w-full overflow-hidden">
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
          className="flex w-[600px] flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
            YOUR JOURNEY AWAITS
          </span>
          <h2 className="text-center font-cormorant text-5xl font-light leading-[1.15] tracking-[-1px] text-text-primary">
            Let us craft something unforgettable
          </h2>
          <p className="w-[440px] text-center font-inter text-base font-light leading-[1.8] text-text-secondary">
            Begin with a complimentary consultation. Tell us your dreams, and we
            will make them real.
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
