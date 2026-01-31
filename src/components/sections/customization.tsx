"use client";

import { motion } from "framer-motion";
import { Settings, Palette, Package2, FileCode } from "lucide-react";

export function Customization() {
  const customizations = [
    {
      icon: <Settings className="w-6 h-6" />,
      title: "Configuration Templates",
      description:
        "Pre-configured ESLint, Prettier, and TypeScript configs tailored to your stack",
      features: ["Strict mode", "Relaxed mode", "Custom rules"],
    },
    {
      icon: <Palette className="w-6 h-6" />,
      title: "Styling Solutions",
      description:
        "Choose from multiple styling approaches based on your preference",
      features: [
        "Tailwind CSS",
        "CSS Modules",
        "Styled Components",
        "Sass/SCSS",
      ],
    },
    {
      icon: <Package2 className="w-6 h-6" />,
      title: "Library Bundles",
      description:
        "Add popular libraries with compatible configurations automatically",
      features: [
        "State management",
        "Data fetching",
        "UI components",
        "Animation libraries",
      ],
    },
    {
      icon: <FileCode className="w-6 h-6" />,
      title: "Project Structure",
      description:
        "Flexible folder structures following industry best practices",
      features: ["Feature-based", "Layer-based", "Domain-driven", "Monorepo"],
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-zinc-950/50 to-black relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Deep Customization
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Tailor every aspect of your project setup. From configuration to
            structure, it's your way.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {customizations.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10">
                <div className="inline-flex p-3 rounded-xl bg-gradient-to-br from-purple-500/20 to-pink-500/20 border border-purple-500/30 mb-6 text-purple-400">
                  {item.icon}
                </div>

                <h3 className="text-2xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-zinc-400 mb-6">{item.description}</p>

                <ul className="space-y-2">
                  {item.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-center gap-2 text-sm text-zinc-300"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-purple-400 to-pink-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Code example */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl border border-purple-500/20 bg-zinc-900/80 backdrop-blur-sm"
        >
          <h3 className="text-xl font-bold text-white mb-4">
            Example: Custom Configuration
          </h3>
          <pre className="text-sm text-zinc-300 overflow-x-auto">
            <code>{`// .initkitrc.json
{
  "defaults": {
    "typescript": true,
    "packageManager": "pnpm",
    "styling": "tailwind",
    "linting": { "strict": true },
    "git": { "hooks": true }
  },
  "templates": {
    "my-stack": {
      "framework": "next",
      "features": ["docker", "ci-github"]
    }
  }
}`}</code>
          </pre>
          <p className="mt-4 text-sm text-zinc-400">
            Save your preferences and reuse them across projects with custom
            configuration files.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
