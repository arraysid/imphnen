"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa6";
import { Logo } from "../../_components/logo";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
};

const childVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex h-[calc(100dvh-5rem)] items-center justify-center border-b-4 bg-[#C7EAFB] px-4 md:h-[calc(100dvh-6rem)]"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mx-auto max-w-2xl px-4 text-center"
      >
        <motion.div variants={childVariants}>
          <Logo />
        </motion.div>

        <motion.h2
          variants={childVariants}
          className="outlined mt-1 text-3xl text-white md:text-4xl lg:text-4xl"
        >
          Join our growing community
        </motion.h2>

        <motion.p
          variants={childVariants}
          className="my-4 text-xl font-medium text-gray-700 md:text-2xl"
        >
          Collaborate with developers, engage in exciting events, share
          knowledge, and enjoy quality memes.
        </motion.p>

        <motion.div
          variants={childVariants}
          className="flex flex-col items-center gap-4 sm:justify-center"
        >
          <Button
            size="lg"
            className="flex items-center gap-x-2 bg-white hover:bg-gray-50"
          >
            <span>Join Community</span>
            <FaArrowRight className="size-5" />
          </Button>
        </motion.div>
      </motion.div>
    </motion.section>
  );
}
