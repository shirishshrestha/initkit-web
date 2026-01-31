import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { LaserFlow } from "@/components/ui/laser-flow";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Hero />
      <LaserFlow />
      <Features />
    </main>
  );
}
