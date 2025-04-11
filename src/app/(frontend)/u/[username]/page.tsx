import { buttonVariants } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import userSample from "@/data/arraysid.json";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import { FaLocationArrow } from "react-icons/fa";

export const metadata: Metadata = {
  title: userSample.name,
};

export default function Page() {
  return (
    <div className="text-foreground relative mx-auto h-full w-[700px] max-w-full p-8 md:p-16 xl:w-[1400px]">
      <div className="mb-12 w-full xl:fixed xl:mb-0 xl:w-[500px]">
        <img
          className="border-border h-28 w-28 rounded-full border-2 xl:h-[184px] xl:w-[184px]"
          src={userSample.avatar}
          alt="profile picture"
        />
        <div className="mt-8">
          <h2 className="font-heading text-3xl sm:text-[44px]">
            {userSample.name}
          </h2>
          <p className="font-base mt-6 text-base sm:text-xl">
            {userSample.bio}
          </p>
        </div>
      </div>
      <div className="justify-end xl:flex">
        <div
          id="grid-container"
          className="text-foreground grid w-full grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-10 md:grid-cols-3 xl:w-1/2 xl:pb-16"
        >
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>

      <footer className="text-muted-foreground fixed bottom-4 left-1/2 flex -translate-x-1/2 flex-col gap-2 text-xs">
        Want to create your own IMPHNEN Profile? Checkout for update
        <a
          href="https://app.imphnen.com"
          target="_blank"
          className={cn(
            buttonVariants({ variant: "reverse" }),
            "mx-auto w-fit",
          )}
        >
          <FaLocationArrow className="size-5" />
          app.imphnen.com
        </a>
      </footer>
    </div>
  );
}
