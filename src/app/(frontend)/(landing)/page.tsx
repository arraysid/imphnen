import { HeroSection } from "./_components/hero-section";
import { MarqueeSection } from "./_components/marquee-section";
import { StatsSection } from "./_components/stats-section";

export default async function HomePage() {
  return (
    <main>
      <HeroSection />
      <MarqueeSection />
      <section className="grid h-[60dvh] border-b-4 lg:grid-cols-2">
        <div className="border-r-4 border-b-4"></div>
        <div className="border-b-4"></div>
        <div className="border-r-4"></div>
        <div></div>
      </section>
      <StatsSection />
    </main>
  );
}
