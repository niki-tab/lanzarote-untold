"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { SectionLabel } from "@/presentation/components/ui/SectionLabel";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  faqs: FAQ[];
  label?: string;
  title?: string;
}

function FAQItem({ question, answer }: FAQ) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between py-6 text-left"
      >
        <span className="font-cormorant text-xl font-medium text-text-primary lg:text-2xl">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 flex-shrink-0 text-gold transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        />
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ${open ? "max-h-[500px] pb-6" : "max-h-0"}`}
      >
        <p className="font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base">
          {answer}
        </p>
      </div>
    </div>
  );
}

export function FAQSection({
  faqs,
  label = "FREQUENTLY ASKED",
  title = "Common questions",
}: FAQSectionProps) {
  return (
    <section className="flex w-full flex-col gap-10 px-5 py-[60px] lg:gap-16 lg:px-[120px] lg:py-[120px]">
      <div className="flex flex-col gap-4 lg:gap-5">
        <SectionLabel withLine>{label}</SectionLabel>
        <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          {title}
        </h2>
      </div>
      <div className="flex flex-col border-t border-border">
        {faqs.map((faq, i) => (
          <FAQItem key={i} question={faq.question} answer={faq.answer} />
        ))}
      </div>
    </section>
  );
}
