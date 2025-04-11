import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import about from "@/data/about.json";

export function AboutCard() {
  return (
    <>
      <h1 className="my-4 flex items-center justify-center text-4xl font-extrabold underline underline-offset-8">
        ABOUT US
      </h1>

      <Card className="mx-auto max-w-5xl rounded-2xl bg-white shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">{about.title}</CardTitle>
          <CardDescription className="text-muted-foreground">
            {about.description}
          </CardDescription>
        </CardHeader>
        <CardContent className="text-muted-foreground space-y-4 text-base leading-relaxed">
          {about.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </CardContent>
      </Card>
    </>
  );
}
