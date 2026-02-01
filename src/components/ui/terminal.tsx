"use client";

import { cn } from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export function Terminal({ className }: { className?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [currentStep, setCurrentStep] = useState(0);

  const steps = [
    { type: "command", text: "npx initkit my-app", delay: 0 },
    { type: "output", text: "", delay: 500 },
    { type: "question", text: "Let's set up your project!", delay: 800 },
    {
      type: "prompt",
      text: "? What type of project do you want to create?",
      delay: 1200,
    },
    {
      type: "option",
      text: "  \u276f Frontend Only",
      delay: 1400,
      active: true,
    },
    { type: "option", text: "    Backend Only", delay: 1500 },
    { type: "option", text: "    Node.js Library/Package", delay: 1600 },
  ];

  useEffect(() => {
    if (isInView) {
      steps.forEach((step, index) => {
        setTimeout(() => {
          setCurrentStep(index + 1);
        }, step.delay);
      });
    }
  }, [isInView]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={cn(
        "w-full text-start max-w-lg mx-auto overflow-hidden rounded-xl border border-zinc-800 bg-zinc-950 shadow-2xl",
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
          <TerminalIcon className="w-3 h-3" />
          <span>bash</span>
        </div>
      </div>
      <div className="p-6 font-mono text-sm min-h-60">
        {steps.slice(0, currentStep).map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "mb-2",
              step.type === "command" && "text-cyan-400",
              step.type === "output" && "text-zinc-500",
              step.type === "question" && "text-purple-400 font-bold mt-3",
              step.type === "prompt" && "text-green-400 mt-2",
              step.type === "option" && "text-zinc-300",
              step.active && "text-cyan-300 font-semibold",
            )}
          >
            {step.type === "command" && (
              <span>
                <span className="text-green-400">\user</span> {step.text}
              </span>
            )}
            {step.type !== "command" && step.text}
            {step.type === "option" &&
              currentStep === steps.length &&
              step.active && <span className="animate-pulse">|</span>}
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
