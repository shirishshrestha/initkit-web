"use client";

import Link from "next/link";
import { Terminal, Github, Heart } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-zinc-800 bg-zinc-950 py-12 px-4">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-cyan-500" />
          <span className="font-bold text-white">InitKit</span>
          <span className="text-zinc-500 text-sm ml-2">
            © {new Date().getFullYear()}
          </span>
        </div>

        <div className="flex items-center gap-1 text-zinc-500 text-sm">
          <span>Built with</span>
          <Heart className="w-3 h-3 text-red-500 fill-red-500" />
          <span>by</span>
          <a
            href="https://github.com/shirishshrestha"
            className="text-white hover:underline"
          >
            Shirish Shrestha
          </a>
        </div>

        <div className="flex items-center gap-6">
          <Link
            href="https://github.com/shirishshrestha/initkit"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.npmjs.com/package/initkit"
            className="text-zinc-400 hover:text-white transition-colors font-mono text-sm hover:underline"
          >
            npm
          </Link>
        </div>
      </div>
    </footer>
  );
}
