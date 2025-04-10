import { HeroSection } from "./_components/hero-section";
import { StatsSection } from "./_components/stats-section";

export default async function HomePage() {
  return (
    <main>
      <HeroSection />
      <StatsSection />
    </main>
  );
}
