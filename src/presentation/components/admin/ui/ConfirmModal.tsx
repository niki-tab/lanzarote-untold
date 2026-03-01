"use client";

interface ConfirmModalProps {
  open: boolean;
  title: string;
  message: string;
  confirmLabel?: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function ConfirmModal({
  open,
  title,
  message,
  confirmLabel = "Delete",
  onConfirm,
  onCancel,
}: ConfirmModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <div className="w-full max-w-sm rounded-xl border border-border bg-footer-bg p-6">
        <h3 className="mb-2 font-cormorant text-xl font-medium text-text-primary">
          {title}
        </h3>
        <p className="mb-6 font-inter text-sm font-light text-text-secondary">
          {message}
        </p>
        <div className="flex justify-end gap-3">
          <button
            onClick={onCancel}
            className="rounded-lg border border-border px-4 py-2 font-inter text-sm text-text-secondary transition-colors hover:bg-white/5"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            className="rounded-lg bg-red-500/20 px-4 py-2 font-inter text-sm text-red-400 transition-colors hover:bg-red-500/30"
          >
            {confirmLabel}
          </button>
        </div>
      </div>
    </div>
  );
}
