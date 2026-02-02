"use client";

import { Terminal } from "../ui/terminal";
import GradientText from "../ui/gradient-text";
import { ShinyText } from "../ui/shiny-text";
import { CodeWindow } from "../ui/code-window";
import { LaserFlow } from "../ui/laser-flow";
import { ArrowRight, Copy, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const exampleCode = `npx initkit my-awesome-app --yes`;

interface HeroProps {
  version?: string;
}

export function Hero({ version = "1.2.5" }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyCommand = () => {
    navigator.clipboard.writeText(exampleCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="relative lg:min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8  py-32 pt-40 overflow-hidden">
      {/* LaserFlow Background */}
      <div className="absolute inset-0 z-0">
        <LaserFlow
          color="#A855F7"
          horizontalBeamOffset={0.2}
          verticalBeamOffset={-0.12}
          fogIntensity={0.1}
          wispDensity={1}
          flowSpeed={0.3}
          horizontalSizing={0.8}
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/20 to-black/60 z-0" />

      <div className="container relative z-10 mx-auto max-w-7xl text-center space-y-12">
        {/* Version Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-300 backdrop-blur-sm"
        >
          <Sparkles className="w-4 h-4 mr-2 animate-pulse" />v{version} – Now
          with Advanced CLI Features!
        </motion.div>

        {/* Hero Content */}
        <div className="space-y-8 max-w-5xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight px-2"
          >
            <GradientText
              colors={["#5227FF", "#FF9FFC", "#B19EEF", "#5227FF"]}
              animationSpeed={8}
              showBorder={false}
            >
              Scaffold Production-Ready Web Projects in Seconds
            </GradientText>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="text-base sm:text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto leading-relaxed px-4"
          >
            The modern CLI tool with{" "}
            <ShinyText
              text="live npm version fetching"
              speed={4}
              className="text-purple-400"
            />
            , smart validation, and best practices built-in for React, Next.js,
            Backend apps and more.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 px-4 pt-4 mb-0 lg:mb-auto"
        >
          <button
            onClick={copyCommand}
            className="group relative flex items-center gap-2 rounded-xl bg-zinc-900/80 border border-purple-500/30 px-6 py-4 text-zinc-200 hover:bg-zinc-800/80 hover:border-purple-400/50 transition-all font-mono text-sm w-full sm:w-auto justify-center backdrop-blur-sm shadow-lg shadow-purple-500/10"
          >
            <span className="text-purple-400">$</span> npx initkit latest
            <Copy className="w-4 h-4 ml-2 text-zinc-400 group-hover:text-purple-300 transition-colors" />
            {copied && (
              <span className="absolute -top-10 left-1/2 -translate-x-1/2 text-xs bg-purple-600 text-white px-3 py-1 rounded-lg">
                Copied!
              </span>
            )}
          </button>
          <a
            href="https://www.npmjs.com/package/initkit"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-xl bg-linear-to-r from-purple-600 to-pink-600 text-white px-8 py-4 font-semibold hover:from-purple-500 hover:to-pink-500 transition-all w-full sm:w-auto justify-center shadow-lg shadow-purple-500/30"
          >
            <svg className="w-5 h-5" viewBox="0 0 780 250" fill="currentColor">
              <path d="M240,250h100v-50h100V0H240V250z M340,50h50v100h-50V50z M480,0v200h100V50h50v150h50V50h50v150h50V0H480z M0,200h100V50h50v150h50V0H0V200z" />
            </svg>
            View on npm
          </a>
        </motion.div>

        {/* Code Window */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="hidden lg:grid lg:grid-cols-2 gap-8 lg:mt-20 max-w-6xl mx-auto pt-8  "
        >
          <CodeWindow
            code={exampleCode}
            language="bash"
            className="hidden lg:block h-fit"
          />
          <div className="hidden lg:block">
            <Terminal className="w-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
