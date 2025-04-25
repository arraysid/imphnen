import { payload } from "@/lib/payload";
import { cache } from "react";

export const getAllEvents = cache(async () => {
  const { docs: events } = await payload.find({
    collection: "events",
    sort: "-startDate",
  });

  return events;
});
