import { fredokaFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <h1
      className={cn(
        fredokaFont.className,
        "outlined text-7xl text-white select-none lg:text-9xl",
      )}
    >
      IMPHNEN
    </h1>
  );
}
