import { defineType } from "sanity";

export const projectType = defineType({
  type: "document",
  name: "project",
  fields: [
    { name: "image", type: "image" },
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
      validation: (Rule) => Rule.required().min(10).max(200),
    },
    {
      name: "tools",
      type: "array",
      of: [{ type: "reference", to: { type: "tool" } }],
      title: "Tools used",
      description: "What tools were used to create the project",
    },
  ],
});
