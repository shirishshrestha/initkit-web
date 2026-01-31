"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Terminal({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [text, setText] = useState("");
  const fullText = "npx initkit my-app";

  useEffect(() => {
    if (isInView) {
      let currentText = "";
      let currentIndex = 0;

      const interval = setInterval(() => {
        if (currentIndex < fullText.length) {
          currentText += fullText[currentIndex];
          setText(currentText);
          currentIndex++;
        } else {
          clearInterval(interval);
        }
      }, 100);

      return () => clearInterval(interval);
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "w-full max-w-lg mx-auto overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl",
        className,
      )}
    >
      <div className="flex items-center gap-2 border-b border-zinc-800 bg-zinc-900/50 px-4 py-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/20" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/20" />
          <div className="h-3 w-3 rounded-full bg-green-500/20" />
        </div>
        <div className="flex items-center gap-1.5 ml-2 text-xs text-zinc-500 font-mono">
          <TerminalIcon className="w-3.5 h-3.5" />
          <span>bash</span>
        </div>
      </div>
      <div className="p-4 font-mono text-sm text-zinc-300 min-h-[140px]">
        <div className="flex items-center gap-2">
          <span className="text-green-400">➜</span>
          <span className="text-cyan-400">~</span>
          <span>{text}</span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            className="h-4 w-2 bg-zinc-500 block"
          />
        </div>
        {text === fullText && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 text-zinc-500"
          >
            <span className="text-green-500">?</span> What type of project do
            you want to create? <br />
            <span className="text-cyan-300">❯ Frontend Only</span>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
}
