import { defineType } from "sanity";

export const projectType = defineType({
  type: "document",
  name: "project",
  fields: [
    { name: "image", type: "array", of: [{ type: "image" }] },
    {
      name: "title",
      type: "string",
      title: "Title",
      description: "The title of the artwork",
      validation: (Rule) => Rule.required().min(2).max(50),
    },
    {
      name: "description",
      type: "array",
      of: [{ type: "block" }],
      title: "Description",
      description: "A brief description of the project",
      validation: (Rule) => Rule.required(),
    },
    {
      name: "links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "url", type: "url" },
            { name: "label", type: "string" },
          ],
        },
      ],
    },
    {
      name: "type",
      type: "array",
      of: [
        {
          type: "string",
          options: { list: ["design", "development", "opus", "video"] },
        },
      ],
      title: "Type",
      description: "What type of project this one is",
    },
  ],
});
