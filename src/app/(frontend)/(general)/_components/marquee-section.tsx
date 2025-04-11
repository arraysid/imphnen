"use client";

import { Marquee } from "@/components/ui/marquee";

export function MarqueeSection() {
  const items = [
    "KEREN NIH BUAT SPONSOR SEBENERNYA",
    "🥱",
    "TAPI MALAS",
    "🥱",
    "AYO SPONSORIN IMPHNEN",
    "🥱",
  ];

  return <Marquee items={items} />;
}
