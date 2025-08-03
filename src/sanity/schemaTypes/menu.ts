import { defineField, defineType } from 'sanity';

export const menu = defineType({
  name: 'menu',
  title: 'Carte du restaurant',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la carte',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description de la carte',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'categories',
      title: 'Catégories de plats',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nom de la catégorie',
              type: 'string',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description de la catégorie',
              type: 'text',
              rows: 2,
            }),
            defineField({
              name: 'items',
              title: 'Plats de cette catégorie',
              type: 'array',
              of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
            }),
          ],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}); 
