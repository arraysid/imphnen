import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Media } from "@/payload-types";
import { getAllEvents } from "@/repositories/events/get-all-events";
import Image from "next/image";
import Link from "next/link";
import { EVENTS } from "../data";
import { EventCalendar } from "./event-calendar";

export async function EventList() {
  const events = await getAllEvents();

  return (
    <section className="mx-auto max-w-7xl px-4 py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {events.map((event) => (
          <article
            key={event.id}
            className="group relative border-4 border-black bg-white shadow-[8px_8px_0_0_#000] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0_0_#000]"
          >
            <div className="relative h-48 overflow-hidden border-b-4 border-black">
              <Image
                src={(event.thumbnail as Media).url!}
                width={600}
                height={400}
                alt=""
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                <div className="flex items-center gap-2">
                  <div className="border-2 border-white bg-black/80 px-3 py-1">
                    <p className="text-sm font-bold text-white">
                      {new Date(event.endDate).toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                      <span className="ml-1 text-white/60">
                        {new Date(event.endDate).getFullYear()}
                      </span>
                    </p>
                  </div>
                  <span className="flex items-center gap-1 border-2 border-black bg-white/90 px-2 py-1 text-sm font-bold text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {event.location}
                  </span>
                </div>
              </div>
            </div>

            <div className="p-6">
              <h3 className="mb-2 text-2xl leading-tight font-bold">
                {event.title}
              </h3>
              <p className="mb-4 text-gray-700">{event.description}</p>
              <Link
                href={event.joinUrl}
                target={event.joinUrl.startsWith("http") ? "_blank" : "_self"}
                className={cn(
                  buttonVariants({ variant: "reverse" }),
                  "w-full bg-white",
                )}
              >
                {event.joinCta}
              </Link>
            </div>
          </article>
        ))}
      </div>

      {/* Custom Calendar Section */}
      <div className="mt-20 border-4 border-black bg-white shadow-[8px_8px_0_0_#000]">
        <div className="border-b-4 border-black p-6">
          <h2 className="text-3xl font-bold">Event Calendar</h2>
        </div>
        <div className="p-6">
          <EventCalendar events={EVENTS} />
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="inline-block border-4 border-black bg-yellow-100 p-4 text-lg font-bold shadow-[4px_4px_0_0_#000]">
          More events coming soon 🔥
        </p>
      </div>
    </section>
  );
}
