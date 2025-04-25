import { getAllEvents } from "@/repositories/events/get-all-events";
import { Metadata } from "next";
import { EventHero } from "./_components/event-hero";
import { EventList } from "./_components/event-list";

export const revalidate = 3600;
export const dynamic = "force-static";

export const metadata: Metadata = {
  title: "IMPHNEN | Events",
};

export default async function Page() {
  const events = await getAllEvents();

  return (
    <main className="mt-24">
      <EventHero />
      <EventList events={events} />
    </main>
  );
}
