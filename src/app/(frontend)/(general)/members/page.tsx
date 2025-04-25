import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Contributor, Media } from "@/payload-types";
import { getAllContributors } from "@/repositories/contributors/get-all-contributors";
import { Metadata } from "next";
import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaGithub } from "react-icons/fa6";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "IMPHNEN | Members",
};

export default async function Page() {
  const contributors = await getAllContributors();

  const renderGrid = (list: Contributor[]) => (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {list.map((contributor) => (
        <Card key={contributor.id} className="bg-white">
          <CardContent className="p-6">
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Avatar className="border-background h-16 w-16 border-2">
                <AvatarImage
                  src={(contributor.avatar as Media).url!}
                  alt={contributor.name}
                />
                <AvatarFallback>
                  {contributor.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <h3
                  className="truncate text-lg font-semibold"
                  title={contributor.name}
                >
                  {contributor.name}
                </h3>
                <Badge
                  className="text-muted-foreground bg-whtie truncate"
                  title={contributor.role}
                >
                  {contributor.role}
                </Badge>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-x-2">
                {contributor.socialLinks?.map((link, i) => (
                  <Button
                    key={i}
                    variant="neutral"
                    size="icon"
                    className="h-8 w-8"
                    asChild
                  >
                    <Link href={link.url} aria-label={`${link.type} profile`}>
                      {getSocialIcon(link.type)}
                    </Link>
                  </Button>
                ))}
              </div>
              {contributor.profileUrl && (
                <Button
                  size="sm"
                  variant="reverse"
                  className="bg-white"
                  asChild
                >
                  <Link href={`/u/${contributor.profileUrl}`}>
                    Go to Profile
                  </Link>
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );

  return (
    <main className="mt-20">
      <Hero />
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          Our Top Contributors
        </h2>
        <div className="mt-10">{renderGrid(contributors)}</div>
      </div>
    </main>
  );
}

const getSocialIcon = (type: string) => {
  switch (type) {
    case "facebook":
      return <FaFacebook className="h-5 w-5" />;
    case "github":
      return <FaGithub className="h-5 w-5" />;
    case "linkedin":
      return <FaLinkedin className="h-5 w-5" />;
    case "globe":
      return <BiGlobe className="h-5 w-5" />;
    default:
      return <BiGlobe className="h-5 w-5" />;
  }
};

function Hero() {
  return (
    <div className="relative border-b-4 border-dashed px-4 py-16 sm:px-6 lg:px-8">
      <div className="absolute inset-0 [mask-image:linear-gradient(0deg,white,transparent)]" />
      <div className="relative mx-auto max-w-7xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
          Community Members
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-xl">
          Meet our amazing community of contributors, developers, and
          enthusiasts who make our project possible.
        </p>
      </div>
    </div>
  );
}
