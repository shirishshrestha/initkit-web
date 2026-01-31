"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface FallingTextProps {
  text: string;
  className?: string;
  delay?: number;
  duration?: number;
}

export function FallingText({
  text,
  className,
  delay = 0,
  duration = 0.5,
}: FallingTextProps) {
  const words = text.split(" ");

  return (
    <div
      className={cn("flex flex-wrap justify-center gap-x-2 gap-y-1", className)}
    >
      {words.map((word, wordIndex) => (
        <motion.span
          key={`${word}-${wordIndex}`}
          initial={{ opacity: 0, y: -50, rotateX: -90 }}
          animate={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{
            duration,
            delay: delay + wordIndex * 0.1,
            ease: [0.33, 1, 0.68, 1],
          }}
          className="inline-block"
          style={{ perspective: "1000px" }}
        >
          {word}
        </motion.span>
      ))}
    </div>
  );
}
