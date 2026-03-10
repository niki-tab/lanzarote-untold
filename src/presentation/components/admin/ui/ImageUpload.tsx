"use client";

import { useState, useCallback } from "react";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import { Upload, X } from "lucide-react";

interface ImageUploadProps {
  value?: string | null;
  onChange: (url: string | null, storageId: string | null) => void;
}

export function ImageUpload({ value, onChange }: ImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);

  const handleUpload = useCallback(
    async (file: File) => {
      setUploading(true);
      try {
        const uploadUrl = await generateUploadUrl();
        const result = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });
        const { storageId } = await result.json();

        // Resolve storage ID to URL for preview
        const urlResponse = await fetch(
          `${process.env.NEXT_PUBLIC_CONVEX_URL}/api/storage/${storageId}`
        );
        // Use a simpler approach - construct the URL directly
        // Convex storage URLs follow a pattern, but we'll use the getUrl query
        // For now, create an object URL as preview and pass the storageId
        const previewUrl = URL.createObjectURL(file);
        onChange(previewUrl, storageId);
      } catch {
        // Upload failed silently
      }
      setUploading(false);
    },
    [onChange, generateUploadUrl]
  );

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      setDragOver(false);
      const file = e.dataTransfer.files[0];
      if (file && file.type.startsWith("image/")) {
        handleUpload(file);
      }
    },
    [handleUpload]
  );

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) handleUpload(file);
  };

  if (value) {
    return (
      <div className="relative overflow-hidden rounded-lg border border-border">
        <img
          src={value}
          alt="Featured"
          className="h-48 w-full object-cover"
        />
        <button
          type="button"
          onClick={() => onChange(null, null)}
          className="absolute top-2 right-2 rounded-full bg-black/60 p-1.5 text-white transition-colors hover:bg-black/80"
        >
          <X size={14} />
        </button>
      </div>
    );
  }

  return (
    <label
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
      className={`flex cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed px-4 py-8 transition-colors ${
        dragOver
          ? "border-gold/50 bg-gold/5"
          : "border-border hover:border-gold/30"
      }`}
    >
      <Upload className="mb-2 text-text-muted" size={24} />
      <span className="font-inter text-sm text-text-secondary">
        {uploading ? "Uploading..." : "Drop image or click to upload"}
      </span>
      <span className="mt-1 font-inter text-xs text-text-muted">
        JPG, PNG, WebP (max 5MB)
      </span>
      <input
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
      />
    </label>
  );
}
