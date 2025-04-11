import { Card } from "@/components/ui/card";
import { fredokaFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import Image from "next/image";

export function EventSection() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 md:py-16 lg:py-24">
      <h1
        className={cn(
          fredokaFont.className,
          "outlined text-6xl text-white select-none lg:text-9xl",
        )}
      >
        GATHERING EVENT
      </h1>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {[1, 2, 3].map((item) => (
          <Card
            key={item}
            className="group relative overflow-hidden rounded-xl transition-shadow"
          >
            <div className="aspect-square overflow-hidden">
              <Image
                src={`/event-${item}.jpg`}
                alt={`Event ${item} photo`}
                fill
                className="pointer-events-none object-cover transition-transform duration-300 select-none"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </div>
          </Card>
        ))}
      </div>

      <h1
        className={cn(
          fredokaFont.className,
          "outlined hidden text-4xl text-white select-none lg:flex lg:text-8xl",
        )}
      >
        IMPHNEN.COM/EVENT
      </h1>
    </section>
  );
}
