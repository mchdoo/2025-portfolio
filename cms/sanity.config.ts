import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schema} from '../src/sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: 'vdh771pd',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema,
})
