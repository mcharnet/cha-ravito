import { defineField, defineType } from 'sanity';

export const about = defineType({
  name: 'about',
  title: 'Section À propos',
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
      rows: 6,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image de la section',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'values',
      title: 'Nos valeurs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'title',
              title: 'Titre de la valeur',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 3,
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'icon',
              title: 'Icône',
              type: 'string',
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'image',
    },
  },
}); 
