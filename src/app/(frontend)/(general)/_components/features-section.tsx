import { Card } from "@/components/ui/card";
import { FaHandsClapping } from "react-icons/fa6";
import { ImSmile } from "react-icons/im";
import { PiPersonSimpleThrowDuotone } from "react-icons/pi";
import { TbBrain } from "react-icons/tb";
import { Arrow } from "../../_components/arrow";
import { Logo } from "../../_components/logo";

export function FeaturesSection() {
  return (
    <section className="relative mx-auto border-b-4 px-4 py-6 lg:h-[900px]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#f0f0f0] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="flex flex-col items-center pb-16 lg:pt-16">
        <span className="text-center text-3xl font-bold lg:text-4xl">
          Why you should join
        </span>
        <Logo />
      </div>

      <Arrow className="absolute top-96 left-56 hidden rotate-90 lg:block" />
      <Arrow className="absolute top-96 right-56 hidden -rotate-90 lg:block" />

      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-2">
        {contents.map((feature, index) => {
          return (
            <Card key={index} className="bg-white p-6 text-left">
              <span>{feature.icon}</span>
              <h3 className="text-xl font-semibold">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

const contents = [
  {
    icon: (
      <div className="flex size-10 items-center justify-center rounded-full border-2 bg-[#CDFE90]">
        <FaHandsClapping className="size-6" />
      </div>
    ),
    title: "Collaboration & Hackatons",
    description: `Connect with like-minded developers to collaborate on projects, share ideas, and solve problems together.`,
  },
  {
    icon: (
      <div className="flex size-10 items-center justify-center rounded-full border-2 bg-[#80D8FF]">
        <TbBrain className="size-6" />
      </div>
    ),
    title: "Knowledge Sharing",
    description:
      "Access resources, tutorials, and discussions that help you stay updated with the latest technologies.",
  },
  {
    icon: (
      <div className="flex size-10 items-center justify-center rounded-full border-2 bg-[#EA81FD]">
        <PiPersonSimpleThrowDuotone className="size-6" />
      </div>
    ),
    title: "Exciting Events",
    description:
      "Participate in hackathons, workshops, webinars, and meetups designed to enhance your skills and network.",
  },
  {
    icon: (
      <div className="flex size-10 items-center justify-center rounded-full border-2 bg-[#FF80AB]">
        <ImSmile className="size-6" />
      </div>
    ),
    title: "Quality Memes",
    description:
      "Enjoy developer humor and relatable content that makes coding more fun and less stressful.",
  },
];
