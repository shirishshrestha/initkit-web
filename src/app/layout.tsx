import { Navbar } from "@/components/ui/navbar";
import { Footer } from "@/components/ui/footer";
import type { Metadata } from "next";
import { Fira_Code } from "next/font/google";
import "./globals.css";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-fira-code",
});

export const metadata: Metadata = {
  title: "InitKit - Scaffold Production-Ready Web Projects",
  description:
    "A modern CLI tool for scaffolding production-ready web projects with live npm version fetching, multiple frameworks, and best practices built-in.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={firaCode.variable}>
      <body
        className="antialiased bg-black text-white selection:bg-cyan-500/30 selection:text-cyan-200 flex flex-col min-h-screen"
        style={{ fontFamily: "Chillax, system-ui, sans-serif" }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
