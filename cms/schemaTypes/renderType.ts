import {defineField, defineType} from 'sanity'

export const renderType = defineType({
  name: 'renderType',
  type: 'document',
  fields: [
    defineField({
      name: 'image',
      type: 'image',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tags',
      type: 'tags',
      options: {
        includeFromRelated: 'myTags',
      },
    }),
  ],
})
