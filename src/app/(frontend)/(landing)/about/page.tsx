import { AboutCard } from "./_components/about-card";
import { Contributors } from "./_components/contributors";

export default function Page() {
  return (
    <main className="px-4">
      <AboutCard />
      <Contributors />
    </main>
  );
}
