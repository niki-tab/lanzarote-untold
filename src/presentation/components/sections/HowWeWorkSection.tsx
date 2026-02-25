import { MessageCircle, Compass, Sparkles } from "lucide-react";
import type { ProcessStep } from "@/domain/types";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  "message-circle": MessageCircle,
  compass: Compass,
  sparkles: Sparkles,
};

interface HowWeWorkSectionProps {
  steps: ProcessStep[];
}

export function HowWeWorkSection({ steps }: HowWeWorkSectionProps) {
  return (
    <section className="flex w-full flex-col items-center gap-10 px-5 py-[60px] lg:gap-20 lg:px-[120px] lg:py-[120px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-5">
        <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
          THE EXPERIENCE
        </span>
        <h2 className="font-cormorant text-4xl font-light tracking-[-1px] text-text-primary lg:text-5xl">
          Tailored to perfection
        </h2>
        <p className="w-full max-w-[300px] text-center font-inter text-sm font-light leading-[1.8] text-text-muted lg:max-w-[560px] lg:text-base">
          Every journey begins with a conversation. We listen, we understand,
          and then we create something extraordinary.
        </p>
      </div>

      {/* Steps */}
      <div className="flex w-full flex-col gap-4 lg:flex-row lg:gap-10">
        {steps.map((step) => {
          const Icon = iconMap[step.icon];
          return (
            <div
              key={step.id}
              className="flex flex-1 flex-col gap-4 border border-[#5E3E3A] bg-gold p-6 lg:gap-6 lg:p-10"
            >
              <span className="font-cormorant text-4xl font-light leading-[0.85] text-[#221e1c] lg:text-[52px]">
                {step.number}
              </span>
              <h3 className="font-cormorant text-[22px] font-medium text-white lg:text-[26px]">
                {step.title}
              </h3>
              <p className="font-inter text-sm font-light leading-[1.8] text-black">
                {step.description}
              </p>
              {Icon && <Icon className="h-5 w-5 text-white" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
