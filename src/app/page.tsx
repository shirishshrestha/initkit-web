import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Performance } from "@/components/sections/performance";
import { FrameworkIntegration } from "@/components/sections/framework-integration";
import { Customization } from "@/components/sections/customization";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <Features />
      <Performance />
      <FrameworkIntegration />
      <Customization />
    </main>
  );
}
