"use client";

import { Terminal } from "../ui/terminal";
import { FallingText } from "../ui/falling-text";
import { ShinyText } from "../ui/shiny-text";
import { ArrowRight, Copy } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Hero() {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText("npx initkit latest");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center px-4 py-20 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-zinc-950 to-zinc-950 z-0" />

      <div className="container relative z-10 mx-auto max-w-6xl text-center space-y-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1 text-sm text-zinc-400 backdrop-blur-sm"
        >
          <span className="flex h-2 w-2 rounded-full bg-cyan-500 mr-2 animate-pulse" />
          v1.1.0 Released
        </motion.div>

        <div className="space-y-4 max-w-4xl mx-auto">
          <FallingText
            text="Scaffold Production-Ready Web Projects in Seconds"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 tracking-tight px-2"
            delay={0.2}
          />
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto leading-relaxed px-4"
          >
            The modern CLI tool with{" "}
            <ShinyText text="live npm version fetching" speed={4} />, smart
            validation, and best practices built-in for React, Next.js, and
            Full-Stack apps.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4"
        >
          <button
            onClick={copyCommand}
            className="group relative flex items-center gap-2 rounded-lg bg-zinc-900 border border-zinc-800 px-4 py-3 text-zinc-300 hover:bg-zinc-800 transition-colors font-mono text-sm w-full sm:w-auto justify-center"
          >
            <span className="text-cyan-400">$</span> npx initkit latest
            <Copy className="w-4 h-4 ml-2 text-zinc-500 group-hover:text-white transition-colors" />
            {copied && (
              <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs bg-zinc-800 text-white px-2 py-1 rounded">
                Copied!
              </span>
            )}
          </button>
          <button className="flex items-center gap-2 rounded-lg bg-white text-black px-6 py-3 font-semibold hover:bg-gray-200 transition-colors w-full sm:w-auto justify-center">
            Get Started <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="pt-12">
          <Terminal className="max-w-2xl mx-auto" />
        </div>
      </div>
    </section>
  );
}
