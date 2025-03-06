import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { schema } from "./src/sanity/schemaTypes";
import { visionTool } from "@sanity/vision";
import { media } from "sanity-plugin-media";
import { presentationTool } from "sanity/presentation";

export default defineConfig({
  name: "default",
  title: "portfolio",

  projectId: "vdh771pd",
  dataset: "production",

  plugins: [
    structureTool(),
    visionTool(),
    media(),
    presentationTool({
      previewUrl: {
        previewMode: {
          enable: "/api/draft-mode/enable",
          disable: "/api/draft-mode/disable",
        },
      },
    }),
  ],

  schema,
});
