import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import contributors from "@/data/contributors.json";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FaArrowRight, FaGithub } from "react-icons/fa6";

export function Contributors() {
  return (
    <>
      <h1 className="my-4 flex items-center justify-center text-4xl font-extrabold underline underline-offset-8">
        OUR CONTRIBUTORS
      </h1>

      <div className="mx-auto grid max-w-5xl gap-4 lg:grid-cols-3">
        {contributors.map((contributor, index) => (
          <Card key={index} className="w-full max-w-sm bg-white">
            <CardContent className="flex flex-col items-center gap-4 p-6">
              <Avatar className="h-20 w-20">
                <AvatarImage
                  src={contributor.avatarUrl}
                  alt={`${contributor.name} avatar`}
                />
                <AvatarFallback>
                  {contributor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="space-y-2 text-center">
                <h2 className="text-xl font-semibold tracking-tight">
                  {contributor.name}
                </h2>
                <Badge className="bg-white font-bold">
                  {contributor.postion}
                </Badge>
                <a
                  href={contributor.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground flex items-center justify-center gap-x-2 text-sm hover:underline hover:underline-offset-4"
                >
                  <FaGithub className="size-5" />
                  github.com/{contributor.githubHandle}
                </a>
                <Link
                  href={`/u/${contributor.username}`}
                  className={cn(
                    buttonVariants({ size: "sm" }),
                    "mx-auto flex w-fit items-center",
                  )}
                >
                  See Profile
                  <FaArrowRight className="size-4" />
                </Link>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  );
}
