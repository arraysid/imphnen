import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Arrow } from "../../_components/arrow";
import { Logo } from "../../_components/logo";

export function FeaturesSection() {
  return (
    <section className="relative mx-auto border-b-4 px-4 py-6 lg:h-[700px]">
      <div className="absolute inset-0 -z-10 h-full w-full bg-[#f0f0f0] bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <div className="flex flex-col items-center pb-16 lg:pt-16">
        <span className="text-center text-3xl font-bold lg:text-4xl">
          Why you should join
        </span>
        <Logo />
      </div>

      <Arrow className="absolute top-80 left-56 hidden rotate-90 lg:block" />
      <Arrow className="absolute top-80 right-56 hidden -rotate-90 lg:block" />

      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-2">
        {contents.map((content) => {
          return (
            <Card key={content.title} className="bg-[#C6EAFA]">
              <CardHeader>
                <CardTitle>{content.title}</CardTitle>
                <CardDescription>{content.description}</CardDescription>
              </CardHeader>
            </Card>
          );
        })}
      </div>
    </section>
  );
}

const contents = [
  {
    title: "Developer Collaboration",
    description: `Connect with like-minded developers to collaborate on projects, share ideas, and solve problems together.`,
  },
  {
    title: "Knowledge Sharing",
    description:
      "Access resources, tutorials, and discussions that help you stay updated with the latest technologies.",
  },
  {
    title: "Exciting Events",
    description:
      "Participate in hackathons, workshops, webinars, and meetups designed to enhance your skills and network.",
  },
  {
    title: "Quality Memes",
    description:
      "Enjoy developer humor and relatable content that makes coding more fun and less stressful.",
  },
];
