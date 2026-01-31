"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, BookOpen, Zap, Code, Terminal as TerminalIcon, Copy } from "lucide-react";
import Link from "next/link";

interface Section {
  id: string;
  title: string;
  icon: React.ReactNode;
}

const sections: Section[] = [
  { id: "getting-started", title: "Getting Started", icon: <Zap className="w-4 h-4" /> },
  { id: "features", title: "Features", icon: <BookOpen className="w-4 h-4" /> },
  { id: "frameworks", title: "Frameworks", icon: <Code className="w-4 h-4" /> },
  { id: "cli", title: "CLI Reference", icon: <TerminalIcon className="w-4 h-4" /> },
  { id: "examples", title: "Usage Examples", icon: <Code className="w-4 h-4" /> },
];

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("getting-started");

  return (
    <div className="min-h-screen bg-zinc-950 text-white pt-24 pb-12">
      <div className="container mx-auto max-w-7xl px-4">
        {/* Breadcrumbs */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-sm text-zinc-400 mb-8"
        >
          <Link href="/" className="hover:text-cyan-400 transition-colors">
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">Documentation</span>
        </motion.nav>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="w-full lg:w-64 lg:sticky lg:top-24 lg:h-[calc(100vh-8rem)] overflow-y-auto"
          >
            <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-4 backdrop-blur-sm">
              <h3 className="text-sm font-semibold text-zinc-400 mb-3 uppercase tracking-wider">
                Contents
              </h3>
              <nav className="space-y-1">
                {sections.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => setActiveSection(section.id)}
                    className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${
                      activeSection === section.id
                        ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                        : "text-zinc-400 hover:text-white hover:bg-zinc-800/50"
                    }`}
                  >
                    {section.icon}
                    {section.title}
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.main
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex-1 min-w-0"
          >
            <AnimatePresence mode="wait">
              {activeSection === "getting-started" && <GettingStarted key="getting-started" />}
              {activeSection === "features" && <Features key="features" />}
              {activeSection === "frameworks" && <Frameworks key="frameworks" />}
              {activeSection === "cli" && <CLIReference key="cli" />}
              {activeSection === "examples" && <Examples key="examples" />}
            </AnimatePresence>
          </motion.main>
        </div>
      </div>
    </div>
  );
}

// Section Components
function GettingStarted() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="prose prose-invert prose-cyan max-w-none"
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
        Getting Started
      </h1>
      
      <div className="space-y-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Installation</h2>
          <p className="text-zinc-400 mb-4">Install InitKit globally using npm:</p>
          <pre className="bg-black rounded-lg p-4 overflow-x-auto">
            <code className="text-cyan-400 font-mono text-sm">npm install -g initkit</code>
          </pre>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h2 className="text-2xl font-bold mb-4 text-white">Create Your First Project</h2>
          <div className="space-y-4">
            <div>
              <p className="text-zinc-400 mb-2">Interactive mode with step-by-step prompts:</p>
              <pre className="bg-black rounded-lg p-4 overflow-x-auto">
                <code className="text-cyan-400 font-mono text-sm">initkit</code>
              </pre>
            </div>
            <div>
              <p className="text-zinc-400 mb-2">Quick start with project name:</p>
              <pre className="bg-black rounded-lg p-4 overflow-x-auto">
                <code className="text-cyan-400 font-mono text-sm">initkit my-awesome-app</code>
              </pre>
            </div>
            <div>
              <p className="text-zinc-400 mb-2">Skip all prompts and use sensible defaults:</p>
              <pre className="bg-black rounded-lg p-4 overflow-x-auto">
                <code className="text-cyan-400 font-mono text-sm">initkit my-app --yes</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
          <h3 className="text-xl font-bold mb-3 text-cyan-400">Why InitKit?</h3>
          <ul className="space-y-2 text-zinc-300">
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span><strong>CLI-First Architecture</strong> - Uses official framework CLIs for latest best practices</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span><strong>Always Up-to-Date</strong> - Leverages official CLIs to ensure latest configurations</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span><strong>Production Ready</strong> - ESLint, Prettier, Git hooks, and CI/CD pipelines out of the box</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-cyan-400 mt-1">•</span>
              <span><strong>Automatic Rollback</strong> - Failed installations clean up automatically</span>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

function Features() {
  const features = [
    {
      title: "Project Types",
      items: ["Frontend Only - React, Vue, Next.js apps", "Backend Only - Express, NestJS, Fastify servers", "Node.js Library - Publishable npm packages"],
    },
    {
      title: "Development Tools",
      items: ["ESLint with recommended rules", "Prettier opinionated formatting", "Husky Git hooks", "Jest/Vitest testing", "Docker multi-stage builds"],
    },
    {
      title: "Styling Solutions",
      items: ["Tailwind CSS", "CSS Modules", "Styled Components", "Emotion", "Sass/SCSS", "Plain CSS"],
    },
    {
      title: "Additional Libraries",
      items: ["Redux Toolkit", "Zustand", "TanStack Query", "React Router", "Framer Motion", "ShadCN UI"],
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
        Features
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature, idx) => (
          <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="text-xl font-bold mb-4 text-cyan-400">{feature.title}</h3>
            <ul className="space-y-2">
              {feature.items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-zinc-300">
                  <span className="text-cyan-400 mt-1">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function Frameworks() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
        Supported Frameworks
      </h1>

      <div className="space-y-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Frontend Frameworks</h3>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <h4 className="font-bold text-cyan-400 mb-2">React + Vite</h4>
              <p className="text-sm text-zinc-400">Fast HMR, modern build tool</p>
            </div>
            <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <h4 className="font-bold text-cyan-400 mb-2">Next.js</h4>
              <p className="text-sm text-zinc-400">App Router with TypeScript</p>
            </div>
            <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <h4 className="font-bold text-cyan-400 mb-2">Vue.js + Vite</h4>
              <p className="text-sm text-zinc-400">Progressive framework</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Backend Frameworks</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700">
              <h4 className="font-bold text-cyan-400 mb-2">Express.js</h4>
              <p className="text-sm text-zinc-400">Minimalist & flexible</p>
            </div>
            <div className="p-4 rounded-lg bg-zinc-800/50 border border-zinc-700 opacity-60">
              <h4 className="font-bold text-zinc-400 mb-2">NestJS (Coming Soon)</h4>
              <p className="text-sm text-zinc-500">Enterprise TypeScript</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Databases</h3>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            <div className="p-3 rounded-lg bg-zinc-800/50 text-center">
              <p className="font-semibold text-cyan-400">PostgreSQL</p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-800/50 text-center">
              <p className="font-semibold text-cyan-400">MySQL</p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-800/50 text-center">
              <p className="font-semibold text-cyan-400">MongoDB</p>
            </div>
            <div className="p-3 rounded-lg bg-zinc-800/50 text-center">
              <p className="font-semibold text-cyan-400">SQLite</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function CLIReference() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
        CLI Reference
      </h1>

      <div className="space-y-6">
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
          <h3 className="text-2xl font-bold mb-4 text-white">Commands</h3>
          <div className="space-y-4">
            <div className="border-l-4 border-cyan-500 pl-4">
              <code className="text-cyan-400 font-mono">initkit [project-name] [options]</code>
              <p className="text-zinc-400 mt-2">Create a new project (default command)</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4">
              <code className="text-cyan-400 font-mono">initkit list</code>
              <p className="text-zinc-400 mt-2">List available templates and frameworks</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4">
              <code className="text-cyan-400 font-mono">initkit info</code>
              <p className="text-zinc-400 mt-2">Display CLI information and version</p>
            </div>
            <div className="border-l-4 border-cyan-500 pl-4">
              <code className="text-cyan-400 font-mono">initkit --help</code>
              <p className="text-zinc-400 mt-2">Show help with examples</p>
            </div>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 overflow-x-auto">
          <h3 className="text-2xl font-bold mb-4 text-white">Options</h3>
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-zinc-700">
                <th className="text-left py-2 text-cyan-400">Option</th>
                <th className="text-left py-2 text-cyan-400">Alias</th>
                <th className="text-left py-2 text-cyan-400">Description</th>
              </tr>
            </thead>
            <tbody className="text-zinc-300">
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono">--version</td>
                <td className="py-2 font-mono">-v</td>
                <td className="py-2">Output the current version</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono">--template</td>
                <td className="py-2 font-mono">-t</td>
                <td className="py-2">Specify template (react, vue, express)</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono">--yes</td>
                <td className="py-2 font-mono">-y</td>
                <td className="py-2">Skip prompts, use defaults</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono">--typescript</td>
                <td className="py-2 font-mono">--ts</td>
                <td className="py-2">Use TypeScript</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono">--no-git</td>
                <td className="py-2 font-mono">-</td>
                <td className="py-2">Skip Git initialization</td>
              </tr>
              <tr className="border-b border-zinc-800">
                <td className="py-2 font-mono">--package-manager</td>
                <td className="py-2 font-mono">-p</td>
                <td className="py-2">Use npm, yarn, pnpm, or bun</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </motion.div>
  );
}

function Examples() {
  const examples = [
    {
      title: "React + TypeScript + Tailwind",
      command: "initkit my-react-app",
      description: "Select: Frontend Only → React → TypeScript → Tailwind CSS → ESLint + Prettier",
    },
    {
      title: "Next.js with TypeScript",
      command: "initkit nextjs-app",
      description: "Select: Frontend Only → Next.js → TypeScript → Tailwind CSS",
    },
    {
      title: "Express Backend API",
      command: "initkit api-server",
      description: "Select: Backend Only → Express → JavaScript → MVC structure",
    },
    {
      title: "Quick Start with Defaults",
      command: "initkit quick-app --yes",
      description: "Creates a React + Vite app with TypeScript + Tailwind CSS",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-zinc-500">
        Usage Examples
      </h1>

      <div className="grid gap-6">
        {examples.map((example, idx) => (
          <div key={idx} className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6">
            <h3 className="text-xl font-bold mb-3 text-cyan-400">{example.title}</h3>
            <pre className="bg-black rounded-lg p-4 mb-3 overflow-x-auto">
              <code className="text-cyan-400 font-mono text-sm">{example.command}</code>
            </pre>
            <p className="text-zinc-400 text-sm">{example.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-8 rounded-xl border border-cyan-500/20 bg-cyan-500/5 p-6">
        <h3 className="text-xl font-bold mb-3 text-cyan-400">Interactive Prompt Flow</h3>
        <p className="text-zinc-300 mb-3">
          InitKit uses an intelligent 13-question flow that adapts based on your project type:
        </p>
        <ol className="list-decimal list-inside space-y-2 text-zinc-300 text-sm">
          <li>Project Type (Frontend, Backend, or Library)</li>
          <li>Project Name (with real-time validation)</li>
          <li>Framework Selection</li>
          <li>Language (TypeScript or JavaScript)</li>
          <li>Folder Structure</li>
          <li>TypeScript Strictness</li>
          <li>Styling Solution</li>
          <li>Additional Libraries</li>
          <li>Development Features</li>
          <li>Package Manager</li>
          <li>Git Initialization</li>
        </ol>
      </div>
    </motion.div>
  );
}
