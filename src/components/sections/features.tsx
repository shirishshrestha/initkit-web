"use client";

import React from "react";
import { MagicBento, BentoCard } from "../ui/magic-bento";
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

export function Features() {
  const mainFeatures = [
    {
      title: "Live Version Fetching",
      description:
        "Automatically fetches the latest package versions from npm registry. No hardcoded or outdated versions - always stay current.",
      icon: <Package className="w-8 h-8 text-cyan-400" />,
      color: "rgba(34, 211, 238, 0.2)",
      colSpan: 2,
    },
    {
      title: "Smart Validation",
      description:
        "Real-time npm package name validation with helpful suggestions and instant feedback as you type.",
      icon: <ShieldCheck className="w-8 h-8 text-green-400" />,
      color: "rgba(74, 222, 128, 0.2)",
      colSpan: 1,
    },
    {
      title: "Lightning Fast",
      description:
        "Blazing-fast project scaffolding powered by official framework CLIs with zero configuration.",
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      color: "rgba(251, 191, 36, 0.2)",
      colSpan: 1,
    },
    {
      title: "Multiple Frameworks",
      description:
        "Support for React, Next.js, Vue, Express, and more. Choose your stack and get started instantly.",
      icon: <Code2 className="w-8 h-8 text-purple-400" />,
      color: "rgba(192, 132, 252, 0.2)",
      colSpan: 1,
    },
    {
      title: "Monorepo Support",
      description:
        "Built-in support for full-stack monorepo architectures with Turborepo and shared packages. Perfect for enterprise applications.",
      icon: <Layers className="w-8 h-8 text-purple-400" />,
      color: "rgba(192, 132, 252, 0.2)",
      colSpan: 1,
    },
    {
      title: "Docker Ready",
      description:
        "Complete Docker orchestration with multi-stage builds and docker-compose for every project.",
      icon: <Container className="w-8 h-8 text-blue-400" />,
      color: "rgba(96, 165, 250, 0.2)",
      colSpan: 1,
    },
    {
      title: "Git Workflow",
      description:
        "Automatic Git initialization with .gitignore, pre-commit hooks, and best practices configured.",
      icon: <GitBranch className="w-8 h-8 text-orange-400" />,
      color: "rgba(251, 146, 60, 0.2)",
      colSpan: 1,
    },
    {
      title: "Production Ready",
      description:
        "ESLint, Prettier, TypeScript, and CI/CD pipelines configured out of the box.",
      icon: <Rocket className="w-8 h-8 text-red-400" />,
      color: "rgba(248, 113, 113, 0.2)",
      colSpan: 2,
    },
    {
      title: "Interactive CLI",
      description:
        "Beautiful 13-question interactive flow with colored output, boxes, and helpful guidance throughout the setup process.",
      icon: <TerminalIcon className="w-8 h-8 text-cyan-400" />,
      color: "rgba(34, 211, 238, 0.2)",
      colSpan: 3,
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

        <MagicBento className="max-w-6xl mx-auto">
          {mainFeatures.map((feature, idx) => (
            <BentoCard
              key={idx}
              className="group min-h-[180px] sm:min-h-[200px] md:min-h-[220px] flex flex-col justify-start items-start hover:scale-[1.02] transition-transform"
              spotlightColor={feature.color}
              colSpan={feature.colSpan as 1 | 2 | 3}
            >
              <div className="mb-4 p-3 bg-zinc-900 rounded-lg border border-zinc-800 group-hover:border-zinc-700 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-zinc-400 leading-relaxed">
                {feature.description}
              </p>
            </BentoCard>
          ))}
        </MagicBento>
      </div>
    </section>
  );
}
