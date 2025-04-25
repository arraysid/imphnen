import type { CollectionConfig } from "payload";

export const Events: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "thumbnail",
      type: "upload",
      relationTo: "media",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "joinUrl",
      type: "text",
      required: true,
    },
    {
      name: "joinCta",
      type: "text",
      required: true,
    },
    {
      name: "startDate",
      type: "date",
      required: true,
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "d MMM yyyy, h:mm a",
        },
      },
    },
    {
      name: "endDate",
      type: "date",
      required: true,
      validate: (value, { data }: { data: { startDate?: string } }) => {
        if (
          value &&
          data.startDate &&
          new Date(value) <= new Date(data.startDate)
        ) {
          return "End date must be after start date";
        }
        return true;
      },
      admin: {
        date: {
          pickerAppearance: "dayAndTime",
          displayFormat: "d MMM yyyy, h:mm a",
        },
      },
    },
  ],
};
