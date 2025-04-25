import type { SelectField, TextField } from "payload";
import { CollectionConfig } from "payload";

const socialLinkFields: Array<SelectField | TextField> = [
  {
    name: "type",
    type: "select",
    options: [
      { label: "Facebook", value: "facebook" },
      { label: "GitHub", value: "github" },
      { label: "LinkedIn", value: "linkedin" },
      { label: "Website", value: "globe" },
    ],
    required: true,
  },
  {
    name: "url",
    type: "text",
    required: true,
  },
];

export const Contributors: CollectionConfig = {
  slug: "contributors",
  labels: { singular: "Contributor", plural: "Contributors" },
  admin: { useAsTitle: "name" },
  access: { read: () => true },
  fields: [
    { name: "name", type: "text", required: true },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Contributor", value: "Contributor" },
        { label: "Admin", value: "Admin" },
      ],
      required: true,
    },
    { name: "avatar", type: "upload", relationTo: "media", required: true },
    { name: "socialLinks", type: "array", fields: socialLinkFields },
    { name: "profileUrl", type: "text" },
  ],
};
