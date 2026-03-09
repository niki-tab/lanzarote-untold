"use client";

import { useState, useRef } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import { useMutation } from "convex/react";
import { api } from "../../../../../convex/_generated/api";
import StarterKit from "@tiptap/starter-kit";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import {
  Bold,
  Italic,
  Heading2,
  Heading3,
  List,
  ListOrdered,
  ImageIcon,
  Link as LinkIcon,
  Undo,
  Redo,
  Quote,
  Sparkles,
  Check,
  X,
} from "lucide-react";

interface RichTextEditorProps {
  content: string;
  onChange: (html: string) => void;
  language?: string;
}

export function RichTextEditor({ content, onChange, language }: RichTextEditorProps) {
  const [isHumanizing, setIsHumanizing] = useState(false);
  const [pendingHtml, setPendingHtml] = useState<string | null>(null);
  const originalHtml = useRef<string | null>(null);
  const generateUploadUrl = useMutation(api.files.generateUploadUrl);

  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit,
      Image.configure({ allowBase64: false }),
      Link.configure({ openOnClick: false }),
    ],
    content,
    onUpdate: ({ editor }) => {
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          "prose-invert min-h-[300px] max-w-none px-4 py-3 font-inter text-sm text-text-primary outline-none",
      },
    },
  });

  if (!editor) return null;

  const addImage = async () => {
    const input = document.createElement("input");
    input.type = "file";
    input.accept = "image/*";
    input.onchange = async () => {
      const file = input.files?.[0];
      if (!file) return;

      try {
        const uploadUrl = await generateUploadUrl();
        const result = await fetch(uploadUrl, {
          method: "POST",
          headers: { "Content-Type": file.type },
          body: file,
        });
        const { storageId } = await result.json();

        // Use object URL as a temporary preview in the editor
        // In production, you'd resolve the storageId to a Convex URL
        const previewUrl = URL.createObjectURL(file);
        editor.chain().focus().setImage({ src: previewUrl }).run();
      } catch {
        // Upload failed
      }
    };
    input.click();
  };

  const addLink = () => {
    const url = window.prompt("URL:");
    if (url) {
      editor.chain().focus().setLink({ href: url }).run();
    }
  };

  const handleHumanize = async () => {
    const html = editor.getHTML();
    if (!html || html === "<p></p>" || !language) return;

    originalHtml.current = html;
    setIsHumanizing(true);
    try {
      const res = await fetch("/api/admin/ai/humanize", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: html, language }),
      });
      if (!res.ok) throw new Error("Failed to humanize");
      const { humanizedContent } = await res.json();
      setPendingHtml(humanizedContent);
    } catch {
      originalHtml.current = null;
    } finally {
      setIsHumanizing(false);
    }
  };

  const acceptChanges = () => {
    if (pendingHtml) {
      editor.commands.setContent(pendingHtml);
      onChange(pendingHtml);
    }
    setPendingHtml(null);
    originalHtml.current = null;
  };

  const rejectChanges = () => {
    setPendingHtml(null);
    originalHtml.current = null;
  };

  const ToolbarButton = ({
    onClick,
    active,
    children,
  }: {
    onClick: () => void;
    active?: boolean;
    children: React.ReactNode;
  }) => (
    <button
      type="button"
      onClick={onClick}
      className={`rounded p-1.5 transition-colors ${
        active
          ? "bg-gold/20 text-gold"
          : "text-text-muted hover:bg-white/5 hover:text-text-secondary"
      }`}
    >
      {children}
    </button>
  );

  return (
    <div className="rounded-lg border border-border bg-dark-bg">
      <div className="flex flex-wrap gap-0.5 border-b border-border px-2 py-1.5">
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBold().run()}
          active={editor.isActive("bold")}
        >
          <Bold size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleItalic().run()}
          active={editor.isActive("italic")}
        >
          <Italic size={16} />
        </ToolbarButton>
        <div className="mx-1 w-px bg-border" />
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 2 }).run()
          }
          active={editor.isActive("heading", { level: 2 })}
        >
          <Heading2 size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() =>
            editor.chain().focus().toggleHeading({ level: 3 }).run()
          }
          active={editor.isActive("heading", { level: 3 })}
        >
          <Heading3 size={16} />
        </ToolbarButton>
        <div className="mx-1 w-px bg-border" />
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          active={editor.isActive("bulletList")}
        >
          <List size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          active={editor.isActive("orderedList")}
        >
          <ListOrdered size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          active={editor.isActive("blockquote")}
        >
          <Quote size={16} />
        </ToolbarButton>
        <div className="mx-1 w-px bg-border" />
        <ToolbarButton onClick={addImage}>
          <ImageIcon size={16} />
        </ToolbarButton>
        <ToolbarButton
          onClick={addLink}
          active={editor.isActive("link")}
        >
          <LinkIcon size={16} />
        </ToolbarButton>
        <div className="mx-1 w-px bg-border" />
        <ToolbarButton onClick={() => editor.chain().focus().undo().run()}>
          <Undo size={16} />
        </ToolbarButton>
        <ToolbarButton onClick={() => editor.chain().focus().redo().run()}>
          <Redo size={16} />
        </ToolbarButton>
      </div>
      {language && !pendingHtml && (
        <div className="flex items-center border-b border-border px-2 py-1.5">
          <button
            type="button"
            onClick={handleHumanize}
            disabled={isHumanizing}
            title="Humanize with AI"
            className={`flex items-center gap-1.5 rounded-md px-3 py-1.5 font-inter text-xs font-medium transition-colors ${
              isHumanizing
                ? "bg-gold/20 text-gold"
                : "bg-gold/10 text-gold hover:bg-gold/20"
            } disabled:opacity-50`}
          >
            <Sparkles size={14} className={isHumanizing ? "animate-pulse" : ""} />
            <span>{isHumanizing ? "Humanizing…" : "Humanize with AI"}</span>
          </button>
        </div>
      )}

      {pendingHtml && (
        <div className="border-b border-gold/30 bg-gold/5">
          <div className="flex items-center justify-between border-b border-gold/20 px-3 py-2">
            <span className="flex items-center gap-1.5 font-inter text-xs font-medium text-gold">
              <Sparkles size={14} />
              AI Suggestion — Review changes below
            </span>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={acceptChanges}
                className="flex items-center gap-1 rounded-md bg-green-600/20 px-3 py-1 font-inter text-xs font-medium text-green-400 transition-colors hover:bg-green-600/30"
              >
                <Check size={14} />
                Accept
              </button>
              <button
                type="button"
                onClick={rejectChanges}
                className="flex items-center gap-1 rounded-md bg-red-600/20 px-3 py-1 font-inter text-xs font-medium text-red-400 transition-colors hover:bg-red-600/30"
              >
                <X size={14} />
                Discard
              </button>
            </div>
          </div>
          <div
            className="prose-invert max-h-[400px] max-w-none overflow-y-auto px-4 py-3 font-inter text-sm text-text-primary"
            dangerouslySetInnerHTML={{ __html: pendingHtml }}
          />
        </div>
      )}

      {!pendingHtml && <EditorContent editor={editor} />}
    </div>
  );
}
