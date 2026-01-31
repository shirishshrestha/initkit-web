"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ShinyTextProps {
  text: string;
  className?: string;
  speed?: number;
}

export function ShinyText({ text, className, speed = 5 }: ShinyTextProps) {
  return (
    <motion.span
      className={cn(
        "relative inline-block bg-gradient-to-r from-zinc-400 via-white to-zinc-400 bg-clip-text text-transparent bg-[length:200%_auto]",
        className,
      )}
      animate={{
        backgroundPosition: ["0% center", "200% center"],
      }}
      transition={{
        duration: speed,
        repeat: Infinity,
        ease: "linear",
      }}
    >
      {text}
    </motion.span>
  );
}

interface VariableProximityProps {
  children: React.ReactNode;
  className?: string;
  scale?: number;
  distance?: number;
}

export function VariableProximity({
  children,
  className,
  scale = 1.1,
  distance = 200,
}: VariableProximityProps) {
  const ref = React.useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const scaleX = useSpring(
    useTransform(x, [-distance, 0, distance], [1, scale, 1]),
    springConfig,
  );
  const scaleY = useSpring(
    useTransform(y, [-distance, 0, distance], [1, scale, 1]),
    springConfig,
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set(e.clientX - centerX);
    y.set(e.clientY - centerY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ scaleX, scaleY }}
      className={cn("cursor-pointer", className)}
    >
      {children}
    </motion.div>
  );
}
