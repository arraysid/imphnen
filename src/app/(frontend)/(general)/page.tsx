import { HeroSection } from "./_components/hero-section";
import { MarqueeSection } from "./_components/marquee-section";
import { StatsSection } from "./_components/stats-section";

export default async function HomePage() {
  return (
    <main className="mt-20">
      <HeroSection />
      <MarqueeSection />
      <StatsSection />
    </main>
  );
}
