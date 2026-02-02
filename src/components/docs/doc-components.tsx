"use client";

import { motion } from "framer-motion";
import { Check, Copy, Info, AlertCircle, CheckCircle, Zap } from "lucide-react";
import { useState, ReactNode } from "react";
import { cn } from "@/lib/utils";

// Code Block Component
interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "bash",
  filename,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split("\n");

  return (
    <div
      className={cn(
        "relative rounded-xl border border-white/10 bg-zinc-950/80 overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/5 bg-zinc-900/50">
        <div className="flex items-center gap-3">
          {filename && (
            <span className="text-xs text-zinc-400 font-mono">{filename}</span>
          )}
          {!filename && (
            <span className="text-xs text-zinc-500 font-mono">{language}</span>
          )}
        </div>
        <button
          onClick={handleCopy}
          className="p-1.5 rounded-lg hover:bg-white/5 transition-colors group"
          aria-label="Copy code"
        >
          {copied ? (
            <Check className="w-4 h-4 text-green-400" />
          ) : (
            <Copy className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
          )}
        </button>
      </div>
      <div className="overflow-x-auto">
        <pre className="p-4 text-sm leading-relaxed">
          <code className="font-mono text-zinc-100">
            {showLineNumbers ? (
              <table className="w-full border-collapse">
                <tbody>
                  {lines.map((line, i) => (
                    <tr key={i}>
                      <td className="pr-4 text-right text-zinc-600 select-none w-8">
                        {i + 1}
                      </td>
                      <td className="text-zinc-100">{line || "\n"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              code
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}

// Callout Component
interface CalloutProps {
  type?: "info" | "warning" | "success" | "tip" | "danger";
  title?: string;
  children: ReactNode;
  className?: string;
}

export function Callout({
  type = "info",
  title,
  children,
  className,
}: CalloutProps) {
  const styles = {
    info: {
      border: "border-blue-500/30",
      bg: "bg-blue-500/5",
      icon: <Info className="w-5 h-5 text-blue-400" />,
      titleColor: "text-blue-400",
    },
    warning: {
      border: "border-yellow-500/30",
      bg: "bg-yellow-500/5",
      icon: <AlertCircle className="w-5 h-5 text-yellow-400" />,
      titleColor: "text-yellow-400",
    },
    success: {
      border: "border-green-500/30",
      bg: "bg-green-500/5",
      icon: <CheckCircle className="w-5 h-5 text-green-400" />,
      titleColor: "text-green-400",
    },
    tip: {
      border: "border-purple-500/30",
      bg: "bg-purple-500/5",
      icon: <Zap className="w-5 h-5 text-purple-400" />,
      titleColor: "text-purple-400",
    },
    danger: {
      border: "border-red-500/30",
      bg: "bg-red-500/5",
      icon: <AlertCircle className="w-5 h-5 text-red-400" />,
      titleColor: "text-red-400",
    },
  };

  const style = styles[type];

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={cn(
        "rounded-2xl border p-6",
        style.border,
        style.bg,
        className,
      )}
    >
      <div className="flex items-start gap-3">
        <div className="shrink-0 mt-0.5">{style.icon}</div>
        <div className="flex-1 space-y-2">
          {title && (
            <h4 className={cn("font-bold", style.titleColor)}>{title}</h4>
          )}
          <div className="text-zinc-300 text-sm leading-relaxed">
            {children}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Props Table Component
interface PropRow {
  name: string;
  type: string;
  default?: string;
  description: string;
  required?: boolean;
}

interface PropsTableProps {
  props: PropRow[];
  className?: string;
}

export function PropsTable({ props, className }: PropsTableProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-white/5 bg-zinc-900/50 overflow-hidden",
        className,
      )}
    >
      <div className="overflow-x-auto">
        <table className="w-full min-w-160">
          <thead className="bg-zinc-800/50">
            <tr>
              <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-bold text-purple-400">
                Prop
              </th>
              <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-bold text-purple-400">
                Type
              </th>
              <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-bold text-purple-400">
                Default
              </th>
              <th className="text-left py-3 px-3 sm:px-6 text-xs sm:text-sm font-bold text-purple-400">
                Description
              </th>
            </tr>
          </thead>
          <tbody>
            {props.map((prop, index) => (
              <tr
                key={index}
                className="border-t border-white/5 hover:bg-white/2 transition-colors"
              >
                <td className="py-3 px-3 sm:px-6">
                  <div className="flex items-center gap-2">
                    <code className="font-mono text-xs sm:text-sm text-zinc-300">
                      {prop.name}
                    </code>
                    {prop.required && (
                      <span className="text-xs px-1.5 py-0.5 rounded bg-red-500/10 text-red-400 border border-red-500/20">
                        required
                      </span>
                    )}
                  </div>
                </td>
                <td className="py-3 px-3 sm:px-6 font-mono text-xs sm:text-sm text-cyan-400">
                  {prop.type}
                </td>
                <td className="py-3 px-3 sm:px-6 font-mono text-xs sm:text-sm text-zinc-400">
                  {prop.default || "—"}
                </td>
                <td className="py-3 px-3 sm:px-6 text-xs sm:text-sm text-zinc-400">
                  {prop.description}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

// Step Component
interface StepProps {
  number: number;
  title: string;
  children: ReactNode;
  className?: string;
}

export function Step({ number, title, children, className }: StepProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "rounded-2xl border border-white/10 bg-zinc-900/50 p-4 sm:p-8",
        className,
      )}
    >
      <div className="flex flex-col sm:flex-row items-start gap-4">
        <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-linear-to-br from-purple-500 to-pink-500 text-white font-bold shadow-lg shadow-purple-500/30">
          {number}
        </div>
        <div className="flex-1 space-y-3 sm:space-y-4 min-w-0">
          <h3
            className="text-lg sm:text-2xl font-bold text-white"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            {title}
          </h3>
          <div className="text-sm sm:text-base text-zinc-300">{children}</div>
        </div>
      </div>
    </motion.div>
  );
}

// Feature Card Component
interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  className?: string;
}

export function FeatureCard({
  icon,
  title,
  description,
  className,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn(
        "group p-4 sm:p-6 rounded-2xl border border-white/5 bg-zinc-900/50 hover:border-purple-500/30 transition-all",
        className,
      )}
    >
      <div className="space-y-3 sm:space-y-4">
        <div className="inline-flex p-2 sm:p-3 rounded-xl bg-linear-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 text-purple-400">
          {icon}
        </div>
        <div>
          <h3 className="text-base sm:text-lg font-bold text-white mb-2">
            {title}
          </h3>
          <p className="text-sm text-zinc-400 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
}

// Badge Component
interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "success" | "warning" | "info";
  className?: string;
}

export function Badge({
  children,
  variant = "default",
  className,
}: BadgeProps) {
  const variants = {
    default: "bg-zinc-800 text-zinc-300 border-zinc-700",
    success: "bg-green-500/10 text-green-400 border-green-500/20",
    warning: "bg-yellow-500/10 text-yellow-400 border-yellow-500/20",
    info: "bg-blue-500/10 text-blue-400 border-blue-500/20",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center px-2.5 py-1 text-xs font-medium rounded-lg border",
        variants[variant],
        className,
      )}
    >
      {children}
    </span>
  );
}

// Section Heading Component
interface SectionHeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3;
  className?: string;
}

export function SectionHeading({
  children,
  level = 2,
  className,
}: SectionHeadingProps) {
  const sizes = {
    1: "text-4xl md:text-5xl",
    2: "text-3xl md:text-4xl",
    3: "text-2xl md:text-3xl",
  };

  const baseClasses = cn(
    "font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6",
    sizes[level],
    className,
  );

  if (level === 1) {
    return (
      <h1 className={baseClasses} style={{ fontFamily: "var(--font-inter)" }}>
        {children}
      </h1>
    );
  }

  if (level === 3) {
    return (
      <h3 className={baseClasses} style={{ fontFamily: "var(--font-inter)" }}>
        {children}
      </h3>
    );
  }

  return (
    <h2 className={baseClasses} style={{ fontFamily: "var(--font-inter)" }}>
      {children}
    </h2>
  );
}
