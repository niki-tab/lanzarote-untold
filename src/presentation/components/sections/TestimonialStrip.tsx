interface TestimonialStripProps {
  quote: string;
  author: string;
  location: string;
}

export function TestimonialStrip({
  quote,
  author,
  location,
}: TestimonialStripProps) {
  return (
    <section className="flex w-full flex-col items-center gap-6 px-5 py-[60px] lg:gap-8 lg:px-[120px] lg:py-[120px]">
      <div className="h-px w-16 bg-gold" />
      <blockquote className="max-w-[800px] text-center font-cormorant text-2xl italic leading-[1.5] text-text-primary lg:text-[32px]">
        &ldquo;{quote}&rdquo;
      </blockquote>
      <div className="flex flex-col items-center gap-1">
        <span className="font-inter text-[13px] font-medium tracking-[1px] text-text-primary">
          {author}
        </span>
        <span className="font-inter text-xs text-text-muted">{location}</span>
      </div>
      <div className="h-px w-16 bg-gold" />
    </section>
  );
}
