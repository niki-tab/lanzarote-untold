interface AdminSelectOption {
  value: string;
  label: string;
}

interface AdminSelectProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  options: AdminSelectOption[];
  placeholder?: string;
}

export function AdminSelect({
  label,
  value,
  onChange,
  options,
  placeholder,
}: AdminSelectProps) {
  return (
    <div>
      <label className="mb-1.5 block font-inter text-xs font-medium tracking-wide text-text-muted">
        {label.toUpperCase()}
      </label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded-lg border border-border bg-dark-bg px-4 py-2.5 font-inter text-sm text-text-primary outline-none transition-colors focus:border-gold/50"
      >
        {placeholder && <option value="">{placeholder}</option>}
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
