interface SectionLabelProps {
  children: React.ReactNode;
  withLine?: boolean;
  className?: string;
}

export function SectionLabel({
  children,
  withLine = false,
  className = "",
}: SectionLabelProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {withLine && <div className="h-px w-10 bg-gold" />}
      <span className="font-inter text-[11px] font-medium tracking-[3px] text-gold">
        {children}
      </span>
    </div>
  );
}
