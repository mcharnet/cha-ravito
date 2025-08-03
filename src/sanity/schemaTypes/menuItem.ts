import { defineField, defineType } from 'sanity';

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Plat du menu',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Nom du plat',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description du plat',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'price',
      title: 'Prix',
      type: 'number',
      validation: (Rule) => Rule.required().positive(),
    }),
    defineField({
      name: 'image',
      title: 'Image du plat',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ingredients',
      title: 'Ingrédients',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'allergens',
      title: 'Allergènes',
      type: 'array',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'isVegetarian',
      title: 'Végétarien',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isVegan',
      title: 'Végan',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isGlutenFree',
      title: 'Sans gluten',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'isAvailable',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'description',
      media: 'image',
    },
  },
}); 
