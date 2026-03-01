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
      {withLine && <div className="hidden h-px w-10 bg-gold lg:block" />}
      <span className="font-inter text-[9px] font-medium tracking-[3px] text-gold lg:text-[11px]">
        {children}
      </span>
    </div>
  );
}
