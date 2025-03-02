import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'
import {tags} from 'sanity-plugin-tags'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'vdh771pd',
  dataset: 'production',

  plugins: [structureTool(), visionTool(), tags()],

  schema: {
    types: schemaTypes,
  },
})
