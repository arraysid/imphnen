"use client";

import { Button } from "@/components/ui/button";
import { fredokaFont } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaDiscord, FaFacebookF } from "react-icons/fa6";
import { FiX } from "react-icons/fi";
import { HiMenuAlt4 } from "react-icons/hi";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/events", text: "Events" },
    { href: "/members", text: "Members" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b-4 bg-white">
      <nav className="mx-auto grid h-full max-w-6xl grid-cols-2 items-center px-4 md:grid-cols-3 lg:grid-cols-2 lg:px-0">
        <div className="flex items-center">
          <h1
            className={cn(
              fredokaFont.className,
              "outlined block text-4xl text-white select-none md:hidden",
            )}
          >
            IMPHNEN
          </h1>
          <div className="hidden gap-x-6 md:flex">
            {navLinks.map((link) => (
              <Link
                key={link.text}
                href={link.href}
                className="text-lg font-semibold transition-colors hover:text-gray-600"
              >
                {link.text}
              </Link>
            ))}
          </div>
        </div>

        <div className="hidden justify-center md:flex lg:hidden">
          <Link
            href="/"
            className={cn(
              fredokaFont.className,
              "text-4xl text-black select-none",
            )}
          >
            IMPHNEN
          </Link>
        </div>

        <div className="flex items-center justify-end">
          <div className="hidden gap-x-3 md:flex">
            <Button className="bg-white hover:bg-gray-50">
              <BiDonateHeart className="size-5" />
              Become Sponsor
            </Button>
            <Button size="icon" className="bg-white hover:bg-gray-50">
              <FaFacebookF className="size-5" />
            </Button>
            <Button size="icon" className="bg-white hover:bg-gray-50">
              <FaDiscord className="size-5" />
            </Button>
          </div>
          <motion.button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="rounded-md p-2 hover:bg-gray-100 focus:outline-none md:hidden"
            whileTap={{ scale: 0.95 }}
          >
            <motion.div
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMenuOpen ? (
                <FiX className="size-7" />
              ) : (
                <HiMenuAlt4 className="size-7" />
              )}
            </motion.div>
          </motion.button>
        </div>

        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.2 }}
              className="absolute inset-x-0 top-20 z-50 border-b-4 bg-white shadow-lg md:hidden"
            >
              <div className="flex flex-col gap-y-4 px-4 py-4">
                {navLinks.map((link) => (
                  <Link
                    key={link.text}
                    href={link.href}
                    className="text-lg font-semibold transition-colors hover:text-gray-600"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.text}
                  </Link>
                ))}
                <Button className="w-full bg-white hover:bg-gray-50">
                  <BiDonateHeart className="size-5" />
                  Become Sponsor
                </Button>
                <div className="flex justify-center gap-x-3">
                  <Button size="icon" className="bg-white hover:bg-gray-50">
                    <FaFacebookF className="size-5" />
                  </Button>
                  <Button size="icon" className="bg-white hover:bg-gray-50">
                    <FaDiscord className="size-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
