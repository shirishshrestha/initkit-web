import { Hero } from "@/components/sections/hero";
import { Features } from "@/components/sections/features";
import { Performance } from "@/components/sections/performance";
import { FrameworkIntegration } from "@/components/sections/framework-integration";
import { Customization } from "@/components/sections/customization";
import { getInitkitVersion } from "@/lib/actions/npm";

export default async function Home() {
  const version = await getInitkitVersion();

  return (
    <main className="min-h-screen bg-black text-white">
      <Hero version={version} />
      <Features />
      <Performance />
      <FrameworkIntegration />
      <Customization />
    </main>
  );
}
