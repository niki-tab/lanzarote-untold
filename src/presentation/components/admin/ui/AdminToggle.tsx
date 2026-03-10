"use client";

interface AdminToggleProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

export function AdminToggle({ label, checked, onChange }: AdminToggleProps) {
  return (
    <label className="flex cursor-pointer items-center gap-3">
      <button
        type="button"
        role="switch"
        aria-checked={checked}
        onClick={() => onChange(!checked)}
        className={`relative h-6 w-11 rounded-full transition-colors ${
          checked ? "bg-gold" : "bg-border"
        }`}
      >
        <span
          className={`absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white transition-transform ${
            checked ? "translate-x-5" : "translate-x-0"
          }`}
        />
      </button>
      <span className="font-inter text-sm text-text-secondary">{label}</span>
    </label>
  );
}
