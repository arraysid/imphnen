"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FaDiscord, FaFacebookF } from "react-icons/fa6";

export function Navbar() {
  return (
    <header className="h-20 border-b-4">
      <nav className="mx-auto flex h-full max-w-5xl items-center justify-between">
        <div className="flex gap-x-6">
          <Link href="/" className="text-xl font-bold">
            Home
          </Link>
          <Link href="/" className="text-xl font-bold">
            Event
          </Link>
          <Link href="/" className="text-xl font-bold">
            Store
          </Link>
        </div>
        <div className="flex gap-x-3">
          <Button size="icon" className="bg-white">
            <FaFacebookF className="size-5" />
          </Button>
          <Button size="icon" className="bg-white">
            <FaDiscord className="size-5" />
          </Button>
        </div>
      </nav>
    </header>
  );
}
