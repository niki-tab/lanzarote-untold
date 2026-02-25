import { SectionLabel } from "@/presentation/components/ui/SectionLabel";

interface Feature {
  title: string;
  description: string;
}

interface FeatureGridProps {
  label: string;
  title: string;
  features: Feature[];
}

export function FeatureGrid({ label, title, features }: FeatureGridProps) {
  return (
    <section className="flex w-full flex-col gap-10 px-5 py-[60px] lg:gap-16 lg:px-[120px] lg:py-[120px]">
      {/* Header */}
      <div className="flex flex-col gap-4 lg:gap-5">
        <SectionLabel withLine>{label}</SectionLabel>
        <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          {title}
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
        {features.map((feature, i) => (
          <div
            key={i}
            className="flex flex-col gap-4 border border-border bg-dark-bg p-6 lg:p-10"
          >
            <h3 className="font-cormorant text-[22px] font-medium text-text-primary lg:text-[26px]">
              {feature.title}
            </h3>
            <p className="font-inter text-sm font-light leading-[1.8] text-text-secondary">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
