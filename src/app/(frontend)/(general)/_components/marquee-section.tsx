"use client";

import { Marquee } from "@/components/ui/marquee";

export function MarqueeSection() {
  const items = [
    "BECOME OUR SPONSOR NOW",
    "|",
    "YOUR BRAND WILL SHOW HERE",
    "|",
  ];

  return <Marquee items={items} />;
}
