"use client";

import { useState } from "react";

export function CopyPromptButton({ content }: { content: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="rounded-lg btn-primary px-4 py-2 text-sm font-semibold text-primary-foreground"
    >
      {copied ? "Copiado ✓" : "Copiar prompt"}
    </button>
  );
}
