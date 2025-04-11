import { Button } from "@/components/ui/button";
import { FaArrowRight } from "react-icons/fa6";
import { Logo } from "../../_components/logo";

export function HeroSection() {
  return (
    <section className="flex h-[calc(100dvh-5rem)] items-center justify-center border-b-4 bg-[#C7EAFB] px-4">
      <div className="max-w-2xl text-center">
        <Logo />
        <h2 className="outlined text-4xl text-white">
          Join our growing community
        </h2>
        <p className="mb-6 text-lg font-medium text-gray-700">
          Collaborate with passionate developers, engage in exciting events,
          share knowledge, and enjoy quality memes.
        </p>
        <div className="flex justify-center space-x-4">
          <Button className="flex items-center gap-x-2 bg-white">
            <span>What is This</span>
          </Button>
          <Button className="flex items-center gap-x-2 bg-white">
            <span>Join The Cult</span>
            <FaArrowRight className="size-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
