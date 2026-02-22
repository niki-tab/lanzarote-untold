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
    <section className="flex w-full flex-col items-center gap-20 px-[120px] py-[120px]">
      {/* Header */}
      <div className="flex flex-col items-center gap-5">
        <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
          THE EXPERIENCE
        </span>
        <h2 className="font-cormorant text-5xl font-light tracking-[-1px] text-text-primary">
          Tailored to perfection
        </h2>
        <p className="w-[560px] text-center font-inter text-base font-light leading-[1.8] text-text-muted">
          Every journey begins with a conversation. We listen, we understand,
          and then we create something extraordinary.
        </p>
      </div>

      {/* Steps */}
      <div className="flex w-full gap-10">
        {steps.map((step) => {
          const Icon = iconMap[step.icon];
          return (
            <div
              key={step.id}
              className="flex flex-1 flex-col gap-6 rounded-[20px] border border-card-border bg-card-bg p-10"
            >
              <span className="font-cormorant text-[52px] font-light leading-[0.85] text-[#C9A96240]">
                {step.number}
              </span>
              <h3 className="font-cormorant text-[26px] font-medium text-text-primary">
                {step.title}
              </h3>
              <p className="font-inter text-sm font-light leading-[1.8] text-card-desc">
                {step.description}
              </p>
              {Icon && <Icon className="h-5 w-5 text-gold" />}
            </div>
          );
        })}
      </div>
    </section>
  );
}
