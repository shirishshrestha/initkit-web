"use client";

import React from "react";
import { motion } from "framer-motion";
import { VariableProximity } from "../ui/shiny-text";
import {
  Package,
  ShieldCheck,
  Layers,
  Container,
  Zap,
  Code2,
  GitBranch,
  Rocket,
  Terminal as TerminalIcon,
} from "lucide-react";

interface Feature {
  title: string;
  description: string;
  icon: React.ReactNode;
  colSpan: string;
  rowSpan?: string;
}

export function Features() {
  const features: Feature[] = [
    {
      title: "Live Version Fetching",
      description:
        "Automatically fetches the latest package versions from npm registry in real-time. No hardcoded or outdated versions - always stay current with the ecosystem.",
      icon: <Package className="w-8 h-8 text-purple-400" />,
      colSpan: "col-span-12 lg:col-span-8",
      rowSpan: "row-span-1",
    },
    {
      title: "Smart Validation",
      description:
        "Real-time npm package name validation with helpful suggestions and instant feedback.",
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    },
    {
      title: "Lightning Fast",
      description:
        "Blazing-fast project scaffolding powered by official framework CLIs.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    },
    {
      title: "Multiple Frameworks",
      description:
        "Support for React, Next.js, Vue, Express, and more. Choose your stack and get started instantly.",
      icon: <Code2 className="w-8 h-8 text-cyan-400" />,
      colSpan: "col-span-12 lg:col-span-8",
    },
    {
      title: "Monorepo Support",
      description:
        "Built-in support for full-stack monorepo architectures with Turborepo and shared packages.",
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    },
    {
      title: "Docker Ready",
      description:
        "Complete Docker orchestration with multi-stage builds and docker-compose.",
      icon: <Container className="w-8 h-8 text-blue-400" />,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    },
    {
      title: "Git Workflow",
      description:
        "Automatic Git initialization with .gitignore, pre-commit hooks, and best practices.",
      icon: <GitBranch className="w-8 h-8 text-orange-400" />,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    },
    {
      title: "Production Ready",
      description:
        "ESLint, Prettier, TypeScript, and CI/CD pipelines configured out of the box for enterprise deployment.",
      icon: <Rocket className="w-8 h-8 text-red-400" />,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-8",
    },
    {
      title: "Interactive CLI",
      description:
        "Beautiful 13-question interactive flow with colored output, intuitive boxes, and helpful guidance throughout the entire setup process.",
      icon: <TerminalIcon className="w-8 h-8 text-pink-400" />,
      colSpan: "col-span-12 sm:col-span-6 lg:col-span-4",
    },
  ];

  return (
    <section className="py-16 sm:py-20 md:py-24 px-4 bg-zinc-950">
      <div className="container mx-auto max-w-7xl">
        <VariableProximity scale={1.05} distance={150}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 sm:mb-12 md:mb-16 bg-clip-text text-transparent bg-gradient-to-b from-white to-zinc-500 px-4">
            Power-Packed Features
          </h2>
        </VariableProximity>

        {/* 12-Column Grid System */}
        <div className="grid grid-cols-12 gap-4 lg:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`group relative ${feature.colSpan} ${feature.rowSpan || ""} p-6 lg:p-8 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300 flex flex-col`}
            >
              {/* Hover gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-4 flex-1">
                <div className="inline-flex p-3 bg-zinc-800/50 rounded-xl border border-zinc-700 group-hover:border-purple-500/30 group-hover:bg-zinc-800 transition-all">
                  {feature.icon}
                </div>

                <div>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm lg:text-base text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
