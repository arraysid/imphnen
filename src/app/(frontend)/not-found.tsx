import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import "@/styles/globals.css";
import { Metadata } from "next";
import { FaArrowLeft } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "Page Not Found",
};

export default function NotFound() {
  return (
    <div className="flex h-[100dvh] flex-col items-center justify-center gap-y-2.5">
      <h2 className="text-4xl font-extrabold">Halaman Imlang</h2>
      <h3 className="text-lg font-semibold">Cari afaan v:ank?</h3>
      <Link href="/" className={cn(buttonVariants(), "h-12 bg-white")}>
        <FaArrowLeft className="size-5" />
        Ayok Pulank ke Roemah
      </Link>
    </div>
  );
}
