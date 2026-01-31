"use client";

import {
  CodeBlock,
  Callout,
  PropsTable,
  Step,
  FeatureCard,
  Badge,
  SectionHeading,
} from "@/components/docs/doc-components";
import { Terminal, Zap, Box, Settings, Rocket, Package } from "lucide-react";
import { useState } from "react";

export default function DocsPage() {
  const [activeSection, setActiveSection] = useState("quick-start");

  const sections = [
    { id: "quick-start", label: "Quick Start" },
    { id: "features", label: "Features" },
    { id: "cli-options", label: "CLI Options" },
    { id: "advanced-usage", label: "Advanced Usage" },
    { id: "templates", label: "Templates" },
    { id: "troubleshooting", label: "Troubleshooting" },
  ];

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  const cliOptions = [
    {
      name: "--template",
      type: "string",
      description:
        "Specify template: 'react', 'vue', 'nextjs', 'express', or 'fullstack'",
    },
    {
      name: "--packageManager",
      type: "string",
      description: "Choose package manager: 'npm', 'yarn', 'pnpm', or 'bun'",
    },
    {
      name: "--git",
      type: "boolean",
      default: "true",
      description: "Initialize a Git repository",
    },
    {
      name: "--skip-install",
      type: "boolean",
      description: "Skip automatic dependency installation",
    },
  ];

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Laser Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(168,85,247,0.05),transparent_70%)]" />
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-purple-500/20 to-transparent" />
        <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-pink-500/20 to-transparent" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-20 flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 flex-shrink-0">
          <div className="sticky top-24 rounded-2xl border border-white/10 bg-zinc-900/50 backdrop-blur-sm p-6">
            <h3 className="text-sm font-bold text-zinc-400 mb-4 uppercase tracking-wider">
              On This Page
            </h3>
            <nav className="space-y-2">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all ${
                    activeSection === section.id
                      ? "bg-purple-500/20 text-purple-400 border border-purple-500/30"
                      : "text-zinc-400 hover:text-white hover:bg-white/5"
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <div className="flex-1 max-w-4xl">
          {/* Hero Section */}
          <div className="mb-16">
            <div className="flex items-center gap-2 mb-4">
              <Badge variant="info">v1.1.0</Badge>
              <Badge variant="success">Stable</Badge>
            </div>
            <h1
              className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              InitKit Documentation
            </h1>
            <p className="text-xl text-zinc-400 max-w-3xl leading-relaxed">
              The fastest way to bootstrap modern web projects. InitKit provides
              intelligent scaffolding for React, Vue, Next.js, Express, and
              full-stack applications with best practices built-in.
            </p>
          </div>

          {/* Quick Start Section */}
          <section id="quick-start" className="mb-20 scroll-mt-24">
            <SectionHeading>Quick Start</SectionHeading>
            <div className="space-y-6">
              <Step number={1} title="Install InitKit">
                <p className="mb-4">
                  Get started with InitKit using your preferred package manager:
                </p>
                <CodeBlock
                  code="npx initkit my-app"
                  language="bash"
                  filename="Terminal"
                />
                <Callout type="tip" title="Pro Tip" className="mt-4">
                  You don&apos;t need to install InitKit globally. Just run{" "}
                  <code className="text-purple-400 font-mono text-sm">
                    npx initkit
                  </code>{" "}
                  and you&apos;re ready to go!
                </Callout>
              </Step>

              <Step number={2} title="Choose Your Stack">
                <p className="mb-4">
                  InitKit will guide you through an interactive setup:
                </p>
                <CodeBlock
                  code={`? What type of project do you want to create?
› Frontend Only
  Backend Only
  Full-Stack Application
  Node.js Library/Package

? Select your frontend framework:
› React
  Vue
  Next.js
  Svelte`}
                  language="bash"
                  filename="Interactive Prompts"
                />
              </Step>

              <Step number={3} title="Start Building">
                <p className="mb-4">
                  Navigate to your project and start the development server:
                </p>
                <CodeBlock
                  code={`cd my-app\nnpm run dev`}
                  language="bash"
                  filename="Terminal"
                />
                <Callout type="success" title="Success!" className="mt-4">
                  Your project is now running at{" "}
                  <strong>http://localhost:3000</strong>
                </Callout>
              </Step>
            </div>
          </section>

          {/* Features Section */}
          <section id="features" className="mb-20 scroll-mt-24">
            <SectionHeading>Features</SectionHeading>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <FeatureCard
                icon={<Terminal className="w-6 h-6" />}
                title="Interactive CLI"
                description="Beautiful terminal UI guides you through setup with intelligent defaults and validations."
              />
              <FeatureCard
                icon={<Zap className="w-6 h-6" />}
                title="Lightning Fast"
                description="Optimized templates with minimal dependencies. Get up and running in seconds, not minutes."
              />
              <FeatureCard
                icon={<Box className="w-6 h-6" />}
                title="Multiple Templates"
                description="Choose from React, Vue, Next.js, Express, or full-stack configurations."
              />
              <FeatureCard
                icon={<Settings className="w-6 h-6" />}
                title="Smart Defaults"
                description="ESLint, Prettier, TypeScript, and Git configured out of the box."
              />
              <FeatureCard
                icon={<Rocket className="w-6 h-6" />}
                title="Production Ready"
                description="Industry best practices and optimizations baked into every template."
              />
              <FeatureCard
                icon={<Package className="w-6 h-6" />}
                title="Package Manager Agnostic"
                description="Works seamlessly with npm, yarn, pnpm, or bun."
              />
            </div>
          </section>

          {/* CLI Options Section */}
          <section id="cli-options" className="mb-20 scroll-mt-24">
            <SectionHeading>CLI Options</SectionHeading>
            <p className="text-zinc-400 mb-6">
              Customize your project setup with these command-line options:
            </p>
            <PropsTable props={cliOptions} />
            <div className="mt-6">
              <CodeBlock
                code="npx initkit my-app --template nextjs --packageManager pnpm --git"
                language="bash"
                filename="Example: Create Next.js project with pnpm"
              />
            </div>
          </section>

          {/* Advanced Usage Section */}
          <section id="advanced-usage" className="mb-20 scroll-mt-24">
            <SectionHeading>Advanced Usage</SectionHeading>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Using a Specific Template
                </h3>
                <CodeBlock
                  code="npx initkit my-app --template react --packageManager yarn"
                  language="bash"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Skip Dependency Installation
                </h3>
                <CodeBlock
                  code="npx initkit my-app --skip-install"
                  language="bash"
                />
                <Callout type="info" title="Note" className="mt-4">
                  Use{" "}
                  <code className="text-purple-400 font-mono text-sm">
                    --skip-install
                  </code>{" "}
                  to defer package installation. Useful for CI/CD pipelines or
                  when you want to review dependencies first.
                </Callout>
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-4">
                  Disable Git Initialization
                </h3>
                <CodeBlock code="npx initkit my-app --no-git" language="bash" />
              </div>
            </div>
          </section>

          {/* Templates Section */}
          <section id="templates" className="mb-20 scroll-mt-24">
            <SectionHeading>Available Templates</SectionHeading>
            <div className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">React</h3>
                  <Badge variant="success">Popular</Badge>
                </div>
                <p className="text-zinc-400 mb-4">
                  Modern React setup with Vite, TypeScript, ESLint, and
                  Prettier. Includes routing, state management setup, and
                  component examples.
                </p>
                <CodeBlock
                  code="npx initkit my-react-app --template react"
                  language="bash"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">Next.js</h3>
                  <Badge variant="success">Popular</Badge>
                </div>
                <p className="text-zinc-400 mb-4">
                  Production-ready Next.js with App Router, TypeScript, Tailwind
                  CSS, and optimized configurations.
                </p>
                <CodeBlock
                  code="npx initkit my-nextjs-app --template nextjs"
                  language="bash"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">Express</h3>
                </div>
                <p className="text-zinc-400 mb-4">
                  Backend API with Express, TypeScript, middleware, and database
                  setup. Includes authentication and error handling.
                </p>
                <CodeBlock
                  code="npx initkit my-backend --template express"
                  language="bash"
                />
              </div>

              <div className="rounded-2xl border border-white/10 bg-zinc-900/50 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-white">Full-Stack</h3>
                  <Badge variant="info">Monorepo</Badge>
                </div>
                <p className="text-zinc-400 mb-4">
                  Complete full-stack setup with frontend and backend in a
                  monorepo structure. Perfect for unified deployment.
                </p>
                <CodeBlock
                  code="npx initkit my-fullstack-app --template fullstack"
                  language="bash"
                />
              </div>
            </div>
          </section>

          {/* Troubleshooting Section */}
          <section id="troubleshooting" className="mb-20 scroll-mt-24">
            <SectionHeading>Troubleshooting</SectionHeading>
            <div className="space-y-6">
              <Callout type="warning" title="Permission Errors">
                If you encounter permission errors on Unix systems, try running
                with{" "}
                <code className="text-yellow-400 font-mono text-sm">sudo</code>{" "}
                or ensure your user has proper npm permissions.
              </Callout>
              <Callout type="info" title="Network Issues">
                If package installation fails due to network issues, try using a
                different package manager or check your proxy settings.
              </Callout>
              <Callout type="danger" title="Node Version">
                InitKit requires Node.js 18.0.0 or higher. Run{" "}
                <code className="text-red-400 font-mono text-sm">
                  node --version
                </code>{" "}
                to check your version.
              </Callout>
            </div>
          </section>

          {/* Footer CTA */}
          <div className="mt-20 p-10 rounded-3xl border border-purple-500/30 bg-gradient-to-br from-purple-500/10 to-pink-500/10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to build something amazing?
            </h2>
            <p className="text-zinc-300 mb-6">
              Get started with InitKit today and experience the fastest way to
              scaffold modern web projects.
            </p>
            <CodeBlock code="npx initkit my-app" language="bash" />
          </div>
        </div>
      </div>
    </div>
  );
}
