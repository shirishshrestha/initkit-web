"use client";

import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import Dock from "@/components/ui/dock";
import type { Metadata } from "next";
import { Inter, Fira_Code } from "next/font/google";
import "./globals.css";
import { Home, BookOpen, Github, Star } from "lucide-react";
import { useRouter } from "next/navigation";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
  display: "swap",
});

function DockNav() {
  const router = useRouter();

  const items = [
    {
      icon: <Home size={18} />,
      label: "Home",
      onClick: () => router.push("/"),
    },
    {
      icon: <BookOpen size={18} />,
      label: "Docs",
      onClick: () => router.push("/docs"),
    },
    {
      icon: <Github size={18} />,
      label: "GitHub",
      onClick: () =>
        window.open("https://github.com/shirishshrestha/initkit", "_blank"),
    },
    {
      icon: <Star size={18} />,
      label: "Star on GitHub",
      onClick: () =>
        window.open("https://github.com/shirishshrestha/initkit", "_blank"),
      className: "text-yellow-400",
    },
  ];

  return (
    <Dock items={items} panelHeight={68} baseItemSize={50} magnification={70} />
  );
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <body
        className="antialiased bg-black text-white selection:bg-purple-500/30 selection:text-purple-200 flex flex-col min-h-screen"
        style={{
          fontFamily: "Chillax, var(--font-inter), system-ui, sans-serif",
        }}
      >
        <Navbar />
        {children}
        <Footer />
        <DockNav />
      </body>
    </html>
  );
}
