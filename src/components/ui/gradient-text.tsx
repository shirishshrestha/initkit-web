"use client";

import { CSSProperties } from "react";

interface GradientTextProps {
  colors: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function GradientText({
  colors,
  animationSpeed = 8,
  showBorder = false,
  className = "",
  children,
}: GradientTextProps) {
  const gradientColors = colors.join(", ");

  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(to right, ${gradientColors}, ${colors[0]})`,
    backgroundSize: "200% auto",
    backgroundClip: "text",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    animation: `gradient ${animationSpeed}s linear infinite`,
  };

  const borderStyle: CSSProperties = showBorder
    ? {
        textShadow: `
          -1px -1px 0 ${colors[0]},
          1px -1px 0 ${colors[0]},
          -1px 1px 0 ${colors[0]},
          1px 1px 0 ${colors[0]}
        `,
      }
    : {};

  return (
    <>
      <style jsx>{`
        @keyframes gradient {
          0% {
            background-position: 0% center;
          }
          100% {
            background-position: 200% center;
          }
        }
      `}</style>
      <span className={className} style={{ ...gradientStyle, ...borderStyle }}>
        {children}
      </span>
    </>
  );
}
