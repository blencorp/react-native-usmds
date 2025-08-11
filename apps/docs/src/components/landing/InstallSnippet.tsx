"use client";

import { useState } from "react";
import { Copy, Check } from "lucide-react"; // icons

const installCommand = `# Using npm
npx usmds init

# Using yarn
yarn usmds init`;

export default function InstallSnippet() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(installCommand).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="relative bg-gray-100 text-gray-800 p-4 rounded text-sm overflow-x-auto">
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 p-2 text-gray-400 hover:text-white transition-colors"
        aria-label="Copy to clipboard"
      >
        {copied ? <Check size={16} /> : <Copy size={16} />}
      </button>
      <pre className="whitespace-pre-wrap">
        <code className="language-bash">{installCommand}</code>
      </pre>
    </div>
  );
}
