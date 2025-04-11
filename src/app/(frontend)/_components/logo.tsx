import { fredokaFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";

export function Logo() {
  return (
    <h1
      className={cn(
        fredokaFont.className,
        "outlined text-9xl text-white select-none",
      )}
    >
      IMPHNEN
    </h1>
  );
}
