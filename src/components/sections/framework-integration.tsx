"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function FrameworkIntegration() {
  const frameworks = [
    {
      name: "React",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
      description: "Vite or CRA with TypeScript support",
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "Next.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      description: "App Router with latest features",
      color: "from-gray-700 to-gray-900",
      invert: true,
    },
    {
      name: "Vue.js",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
      description: "Vue 3 with Composition API",
      color: "from-green-500 to-emerald-500",
    },
    {
      name: "TypeScript",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
      description: "Full TypeScript support out of the box",
      color: "from-blue-600 to-blue-800",
    },
    {
      name: "Tailwind CSS",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
      description: "Utility-first CSS framework",
      color: "from-cyan-400 to-blue-500",
    },
    {
      name: "Express",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
      description: "Fast, unopinionated backend framework",
      color: "from-gray-600 to-gray-800",
      invert: true,
    },
  ];

  return (
    <section className="py-24 px-4 bg-black relative overflow-hidden">
      {/* Grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:4rem_4rem]" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400">
            Framework Integration
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Seamlessly integrated with the most popular frameworks and tools in
            the ecosystem.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {frameworks.map((framework, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.05 }}
              className="group relative p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${framework.color} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity blur-xl`}
              />

              <div className="relative z-10 space-y-4">
                <div className="w-16 h-16 mx-auto relative">
                  <img
                    src={framework.logo}
                    alt={framework.name}
                    className={`w-full h-full object-contain ${framework.invert ? "invert" : ""} group-hover:scale-110 transition-transform`}
                  />
                </div>

                <div className="text-center">
                  <h3 className="font-bold text-white mb-2">
                    {framework.name}
                  </h3>
                  <p className="text-xs text-zinc-400">
                    {framework.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Integration highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 grid md:grid-cols-3 gap-6"
        >
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-purple-400 mb-3">
              Official CLIs
            </h4>
            <p className="text-sm text-zinc-400">
              Uses framework-official CLIs like create-react-app,
              create-next-app ensuring latest best practices.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-pink-400 mb-3">
              Auto-Detection
            </h4>
            <p className="text-sm text-zinc-400">
              Intelligent framework detection and compatibility checks before
              installation begins.
            </p>
          </div>
          <div className="p-6 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm">
            <h4 className="text-lg font-bold text-cyan-400 mb-3">
              Version Locking
            </h4>
            <p className="text-sm text-zinc-400">
              Optional version pinning for reproducible builds across teams and
              environments.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
