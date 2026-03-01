import { SectionLabel } from "@/presentation/components/ui/SectionLabel";

interface ImageTextSectionProps {
  label: string;
  title: string;
  paragraphs: string[];
  image: string;
  imageAlt: string;
  reversed?: boolean;
  className?: string;
}

export function ImageTextSection({
  label,
  title,
  paragraphs,
  image,
  imageAlt,
  reversed = false,
  className = "",
}: ImageTextSectionProps) {
  return (
    <section className={`flex w-full flex-col gap-10 px-5 py-[30px] lg:flex-row lg:items-center lg:gap-20 lg:px-[120px] lg:py-[120px] ${className}`}>
      {/* Image */}
      <div
        className={`h-[280px] w-full flex-shrink-0 bg-cover bg-center lg:h-[480px] lg:w-1/2 ${reversed ? "lg:order-2" : ""}`}
        style={{ backgroundImage: `url(${image})` }}
        role="img"
        aria-label={imageAlt}
      />

      {/* Text */}
      <div className={`flex flex-col items-center gap-5 text-center lg:items-start lg:text-left lg:w-1/2 lg:gap-6 ${reversed ? "lg:order-1" : ""}`}>
        <SectionLabel withLine>{label}</SectionLabel>
        <h2 className="font-cormorant text-[32px] font-light leading-[1.1] tracking-[-1px] text-text-primary lg:text-5xl">
          {title}
        </h2>
        {paragraphs.map((p, i) => (
          <p
            key={i}
            className="font-inter text-sm font-light leading-[1.8] text-text-secondary lg:text-base"
          >
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
