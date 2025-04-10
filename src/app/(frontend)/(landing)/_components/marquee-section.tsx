"use client";

import { Marquee } from "@devnomic/marquee";

import "@/styles/marquee.css";

export function MarqueeSection() {
  return (
    <Marquee
      className="bg-secondary-background border-b-8 py-3 md:py-4 [&_.animate-marquee-left]:gap-[35px]! md:[&_.animate-marquee-left]:gap-[50px]!"
      direction="left"
    >
      {Array.from({ length: 8 }).map((_, id) => {
        return (
          <div
            className="flex items-center gap-[35px] md:gap-[50px] [&_span]:text-base sm:[&_span]:text-xl md:[&_span]:text-2xl xl:[&_span]:text-3xl [&_svg]:size-[30px] md:[&_svg]:size-10 lg:[&_svg]:size-[50px]"
            key={id}
          >
            <span className="font-extrabold">MALAS</span>
            <span className="font-extrabold">🥱</span>
            <span className="font-extrabold">IMPHNEN</span>
            <span className="font-extrabold">🥱</span>
          </div>
        );
      })}
    </Marquee>
  );
}
