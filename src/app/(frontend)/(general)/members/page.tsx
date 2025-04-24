import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Metadata } from "next";
import Link from "next/link";
import { BiGlobe } from "react-icons/bi";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebook, FaGithub } from "react-icons/fa6";

export const metadata: Metadata = {
  title: "IMPHNEN | Members",
};

interface Member {
  id: number;
  name: string;
  role: string;
  avatar: string;
  socialLinks: { type: string; url: string }[];
  profileUrl?: string;
}

export default function Page() {
  const members: Member[] = [
    {
      id: 1,
      name: "Muhammad Alif Ramadhan",
      role: "Community Lead",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [
        { type: "facebook", url: "https://facebook.com" },
        { type: "github", url: "https://github.com" },
      ],
      profileUrl: "/u/muhammad-alif-ramadhan",
    },
    {
      id: 2,
      name: "Muhammad Harun Alrasyid",
      role: "Community Developer",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [
        { type: "facebook", url: "https://facebook.com" },
        { type: "github", url: "https://github.com" },
      ],
      profileUrl: "/u/muhammad-harun-alrasyid",
    },
    {
      id: 3,
      name: "Zidna Fadla",
      role: "Moderator",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [
        { type: "github", url: "https://github.com" },
        { type: "linkedin", url: "https://linkedin.com" },
      ],
      profileUrl: "/u/zidna-fadla",
    },
  ];

  const contributors: Member[] = [
    {
      id: 4,
      name: "Anton Wibowo",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [
        { type: "linkedin", url: "https://linkedin.com" },
        { type: "globe", url: "https://example.com" },
      ],
      profileUrl: "/u/anton-wibowo",
    },
    {
      id: 5,
      name: "Danis Noer",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [{ type: "github", url: "https://github.com" }],
      profileUrl: "/u/danis-noer",
    },
    {
      id: 6,
      name: "Eko Kurniawan",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [{ type: "github", url: "https://github.com" }],
      profileUrl: "/u/eko-kurniawan",
    },
    {
      id: 7,
      name: "Sari Amelia",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [{ type: "linkedin", url: "https://linkedin.com" }],
      profileUrl: "/u/sari-amelia",
    },
    {
      id: 8,
      name: "Yusuf Maulana",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [
        { type: "globe", url: "https://example.com" },
        { type: "github", url: "https://github.com" },
      ],
      profileUrl: "/u/yusuf-maulana",
    },
    {
      id: 9,
      name: "Indah Pratiwi",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [{ type: "linkedin", url: "https://linkedin.com" }],
      profileUrl: "/u/indah-pratiwi",
    },
    {
      id: 10,
      name: "Budi Santoso",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [
        { type: "github", url: "https://github.com" },
        { type: "globe", url: "https://example.com" },
      ],
      profileUrl: "/u/budi-santoso",
    },
    {
      id: 11,
      name: "Rina Azzahra",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [{ type: "linkedin", url: "https://linkedin.com" }],
      profileUrl: "/u/rina-azzahra",
    },
    {
      id: 12,
      name: "Fajar Nugroho",
      role: "Contributor",
      avatar: "/placeholder.svg?height=80&width=80",
      socialLinks: [
        { type: "github", url: "https://github.com" },
        { type: "linkedin", url: "https://linkedin.com" },
      ],
      profileUrl: "/u/fajar-nugroho",
    },
  ];

  const renderGrid = (list: Member[]) => (
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {list.map((m) => (
        <Card key={m.id} className="bg-white">
          <CardContent className="p-6">
            <div className="flex flex-col items-start gap-4 sm:flex-row">
              <Avatar className="border-background h-16 w-16 border-2">
                <AvatarImage src={m.avatar} alt={m.name} />
                <AvatarFallback>
                  {m.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")
                    .slice(0, 2)
                    .toUpperCase()}
                </AvatarFallback>
              </Avatar>
              <div className="min-w-0 flex-1">
                <h3 className="truncate text-lg font-semibold" title={m.name}>
                  {m.name}
                </h3>
                <Badge
                  className="text-muted-foreground bg-whtie truncate"
                  title={m.role}
                >
                  {m.role}
                </Badge>
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex gap-x-2">
                {m.socialLinks.map((link, i) => (
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
              {m.profileUrl && (
                <Button
                  size="sm"
                  variant="reverse"
                  className="bg-white"
                  asChild
                >
                  <Link href={m.profileUrl}>Go to Profile</Link>
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
          Admin & Moderators
        </h2>
        <div className="mt-10">{renderGrid(members)}</div>
        <h2 className="mt-20 text-center text-3xl font-bold tracking-tight">
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
