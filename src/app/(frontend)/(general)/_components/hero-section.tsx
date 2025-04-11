"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { FaLocationArrow } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
import { Logo } from "../../_components/logo";
import { Star } from "../../_components/star";

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
      className="relative flex h-[calc(100dvh-5rem)] items-center justify-center px-4"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#C7EAFB] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>

      <Star className="absolute top-5 left-5 lg:top-10 lg:left-10" size={50} />
      <Star
        className="absolute top-5 right-5 lg:top-10 lg:right-10"
        size={50}
      />
      <Star
        className="absolute right-5 bottom-5 lg:right-10 lg:bottom-10"
        size={50}
      />
      <Star
        className="absolute bottom-5 left-5 lg:right-10 lg:bottom-10"
        size={50}
      />

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
          className="flex flex-col items-center gap-4 sm:justify-center lg:flex-row"
        >
          <Button
            size="lg"
            className="flex items-center gap-x-2 bg-white hover:bg-gray-50"
          >
            <FaLocationArrow className="size-5" />
            <span>Create Profile</span>
          </Button>
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
