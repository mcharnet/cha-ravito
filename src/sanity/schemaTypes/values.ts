import { defineField, defineType } from 'sanity';

export const values = defineType({
  name: 'values',
  title: 'Valeurs et Histoire',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'story',
      title: 'Notre histoire',
      type: 'text',
      rows: 8,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'mission',
      title: 'Notre mission',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'vision',
      title: 'Notre vision',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Image illustrative',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'story',
      media: 'image',
    },
  },
}); 
