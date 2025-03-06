import type { SchemaTypeDefinition } from "sanity";
import { projectType } from "./projectType";
import { toolType } from "./toolType";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, toolType],
};
