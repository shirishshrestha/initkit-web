"use client";

import { motion } from "framer-motion";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

interface CodeWindowProps {
  code: string;
  language?: string;
  className?: string;
}

export function CodeWindow({
  code,
  language = "bash",
  className = "",
}: CodeWindowProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.5 }}
      className={`relative text-start rounded-2xl border border-white/10 bg-zinc-900/80 backdrop-blur-xl shadow-2xl overflow-hidden ${className}`}
      style={{
        boxShadow:
          "0 0 80px rgba(168, 85, 247, 0.15), 0 0 40px rgba(236, 72, 153, 0.1)",
      }}
    >
      {/* Window Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-white/5 bg-zinc-900/50">
        <div className="flex items-center gap-2">
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-red-500/80" />
            <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
            <div className="w-3 h-3 rounded-full bg-green-500/80" />
          </div>
          <span className="ml-3 text-xs text-zinc-500 font-mono">
            {language}
          </span>
        </div>
        <button
          onClick={handleCopy}
          className="p-2 rounded-lg hover:bg-white/5 transition-colors group"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          )}
        </button>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm leading-relaxed whitespace-break-spaces">
          <code className="font-mono text-zinc-100">
            {code} <br />
            #skips all prompts and uses best-practice defaults for projects.
          </code>
        </pre>
      </div>

      {/* Glow Effect */}
      <div className="absolute inset-0 bg-linear-to-br from-purple-500/5 via-transparent to-pink-500/5 pointer-events-none" />
    </motion.div>
  );
}
