import { SectionLabel } from "@/presentation/components/ui/SectionLabel";

interface PageHeroProps {
  label: string;
  title: string;
  subtitle?: string;
  backgroundImage: string;
  imagePosition?: string;
  imageSize?: string;
}

export function PageHero({
  label,
  title,
  subtitle,
  backgroundImage,
  imagePosition = "center",
  imageSize = "cover",
}: PageHeroProps) {
  return (
    <section className="relative h-[420px] w-full overflow-hidden lg:h-[600px]">
      {/* Background Image */}
      <div
        className="absolute inset-0"
        style={{ backgroundImage: `url(${backgroundImage})`, backgroundPosition: imagePosition, backgroundSize: imageSize }}
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
      <div className="relative flex h-full flex-col justify-end px-5 pb-10 lg:px-[120px] lg:pb-16">
        <div className="flex flex-col items-center gap-4 text-center lg:items-start lg:gap-5 lg:text-left">
          <SectionLabel withLine>{label}</SectionLabel>
          <h1 className="font-cormorant text-[36px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-[56px]">
            {title}
          </h1>
          {subtitle && (
            <p className="max-w-[500px] font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
