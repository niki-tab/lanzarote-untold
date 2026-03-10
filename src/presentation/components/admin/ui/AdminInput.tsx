interface AdminInputProps {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  type?: string;
  required?: boolean;
  disabled?: boolean;
}

export function AdminInput({
  label,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  disabled,
}: AdminInputProps) {
  return (
    <div>
      <label className="mb-1.5 block font-inter text-xs font-medium tracking-wide text-text-muted">
        {label.toUpperCase()}
        {required && <span className="text-gold">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        className="w-full rounded-lg border border-border bg-dark-bg px-4 py-2.5 font-inter text-sm text-text-primary outline-none transition-colors focus:border-gold/50 disabled:opacity-50"
      />
    </div>
  );
}
