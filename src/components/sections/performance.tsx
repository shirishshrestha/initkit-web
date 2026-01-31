"use client";

import { motion } from "framer-motion";
import { Zap, Gauge, Cpu, HardDrive } from "lucide-react";

export function Performance() {
  const metrics = [
    {
      icon: <Zap className="w-8 h-8 text-yellow-400" />,
      title: "Lightning Fast",
      value: "< 30s",
      description: "Average project scaffold time",
    },
    {
      icon: <Gauge className="w-8 h-8 text-purple-400" />,
      title: "Zero Config",
      value: "100%",
      description: "Framework best practices",
    },
    {
      icon: <Cpu className="w-8 h-8 text-pink-400" />,
      title: "Optimized",
      value: "50%",
      description: "Faster than alternatives",
    },
    {
      icon: <HardDrive className="w-8 h-8 text-cyan-400" />,
      title: "Lightweight",
      value: "< 5MB",
      description: "Total package size",
    },
  ];

  return (
    <section className="py-24 px-4 bg-gradient-to-b from-black via-zinc-950 to-black relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent" />

      <div className="container mx-auto max-w-7xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-pink-400 to-purple-400">
            Built for Performance
          </h2>
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto">
            Engineered for speed, efficiency, and developer experience. Every
            millisecond counts.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative p-8 rounded-2xl border border-white/5 bg-zinc-900/50 backdrop-blur-sm hover:border-purple-500/30 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />

              <div className="relative z-10 space-y-4">
                <div className="inline-flex p-3 rounded-xl bg-zinc-800/50 border border-white/5">
                  {metric.icon}
                </div>

                <div>
                  <h3 className="text-4xl font-bold text-white mb-1">
                    {metric.value}
                  </h3>
                  <h4 className="text-lg font-semibold text-purple-400 mb-2">
                    {metric.title}
                  </h4>
                  <p className="text-sm text-zinc-400">{metric.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional performance highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            Performance Features
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-zinc-300">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Parallel Installation
                </h4>
                <p className="text-sm text-zinc-400">
                  Multi-threaded package installation for blazing speed
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-pink-400 mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">Smart Caching</h4>
                <p className="text-sm text-zinc-400">
                  Intelligent template caching reduces repeat setup time
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-purple-400 mt-2" />
              <div>
                <h4 className="font-semibold text-white mb-1">
                  Minimal Dependencies
                </h4>
                <p className="text-sm text-zinc-400">
                  Lean dependency tree keeps your projects lightweight
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
