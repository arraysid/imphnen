import { payload } from "@/lib/payload";
import { cache } from "react";

export const getAllContributors = cache(async () => {
  const { docs: contributors } = await payload.find({
    collection: "contributors",
    sort: "createdAt",
  });

  return contributors;
});
