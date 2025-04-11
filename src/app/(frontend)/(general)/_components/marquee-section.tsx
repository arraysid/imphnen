"use client";

import { Marquee } from "@/components/ui/marquee";

export function MarqueeSection() {
  const items = ["IMPHNEN", "🥱", "MALAS", "🥱"];

  return <Marquee items={items} />;
}
