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
      type: "row",
      fields: [
        {
          name: "title",
          type: "text",
          required: true,
          admin: { width: "50%" },
        },
        {
          name: "thumbnail",
          type: "upload",
          relationTo: "media",
          required: true,
          admin: { width: "50%" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "location",
          type: "text",
          required: true,
          admin: { width: "50%" },
        },
        {
          name: "description",
          type: "textarea",
          required: true,
          admin: { width: "50%" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "joinUrl",
          type: "text",
          required: true,
          admin: { width: "50%" },
        },
        {
          name: "joinCta",
          type: "text",
          required: true,
          admin: { width: "50%" },
        },
      ],
    },
    {
      type: "row",
      fields: [
        {
          name: "startDate",
          type: "date",
          required: true,
          admin: {
            width: "50%",
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
          validate: (value, { data }: { data: { startDate?: string } }) =>
            value &&
            data.startDate &&
            new Date(value) <= new Date(data.startDate)
              ? "End date must be after start date"
              : true,
          admin: {
            width: "50%",
            date: {
              pickerAppearance: "dayAndTime",
              displayFormat: "d MMM yyyy, h:mm a",
            },
          },
        },
      ],
    },
  ],
};
