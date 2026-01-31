"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Terminal, Star } from "lucide-react";

export function Navbar() {
  const pathname = usePathname();

  const links = [
    { href: "/", label: "Home" },
    { href: "/docs", label: "Documentation" },
    { href: "https://github.com/shirishshrestha/initkit", label: "GitHub" },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 100, damping: 20 }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-center p-4 pointer-events-none"
    >
      <nav className="pointer-events-auto flex items-center gap-6 rounded-full border border-zinc-800 bg-zinc-900/80 px-6 py-3 backdrop-blur-md shadow-lg">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-white mr-4"
        >
          <Terminal className="w-5 h-5 text-cyan-500" />
          <span>InitKit</span>
        </Link>

        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "text-sm transition-colors hover:text-cyan-400",
              pathname === link.href ? "text-cyan-400" : "text-zinc-400",
            )}
            target={link.href.startsWith("http") ? "_blank" : undefined}
          >
            {link.label}
          </Link>
        ))}

        <Link
          href="https://github.com/shirishshrestha/initkit"
          target="_blank"
          className="flex items-center gap-1.5 text-sm px-3 py-1.5 rounded-full bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 hover:bg-yellow-400/20 transition-all"
        >
          <Star className="w-4 h-4 fill-yellow-400" />
          <span>Star</span>
        </Link>
      </nav>
    </motion.header>
  );
}
