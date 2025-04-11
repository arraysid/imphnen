"use client";

import { Button } from "@/components/ui/button";
import { AnimatePresence, motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { BiDonateHeart } from "react-icons/bi";
import { FaDiscord, FaFacebookF } from "react-icons/fa6";
import { FiMenu, FiX } from "react-icons/fi";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
    exit: { y: -20, opacity: 0 },
  };

  const navLinks = [
    { href: "/", text: "Home" },
    { href: "/about", text: "About" },
    { href: "/event", text: "Event" },
    { href: "/merchandise", text: "Merchandise" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-20 border-b-4 bg-white">
      <nav className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Desktop Navigation */}
        <div className="hidden gap-x-6 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.text}
              href={link.href}
              className="text-xl font-bold transition-colors hover:text-gray-600"
            >
              {link.text}
            </Link>
          ))}
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-x-4">
          {/* Desktop Buttons */}
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

          {/* Mobile Hamburger Button */}
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
                <FiX className="h-6 w-6" />
              ) : (
                <FiMenu className="h-6 w-6" />
              )}
            </motion.div>
          </motion.button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="exit"
              variants={menuVariants}
              transition={{ duration: 0.2 }}
              className="absolute top-20 right-0 left-0 z-50 border-b-4 bg-white shadow-lg md:hidden"
            >
              <div className="px-4 py-2">
                <div className="flex flex-col gap-y-4 pb-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.text}
                      href={link.href}
                      className="text-xl font-bold transition-colors hover:text-gray-600"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {link.text}
                    </Link>
                  ))}
                  <div className="mt-4 flex flex-col gap-y-3">
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
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
