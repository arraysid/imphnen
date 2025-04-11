import { AboutCard } from "./_components/about-card";
import { Contributors } from "./_components/contributors";

export default function Page() {
  return (
    <main className="mt-24 px-4">
      <AboutCard />
      <Contributors />
    </main>
  );
}
