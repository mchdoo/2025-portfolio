import {defineType} from 'sanity'

export const toolType = defineType({
  type: 'document',
  name: 'tool',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Tool Name',
      description: 'The name of the tool',
      validation: (rule) => rule.required().min(2).max(50),
    },
    {
      type: 'image',
      name: 'Icon',
      description: 'The icon of the tool',
    },
  ],
})
