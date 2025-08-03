import { defineField, defineType } from 'sanity';

export const hero = defineType({
  name: 'hero',
  title: 'Section Hero',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre principal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'subtitle',
      title: 'Sous-titre / Accroche',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'image',
      title: 'Image principale',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ctaText',
      title: 'Texte du bouton CTA',
      type: 'string',
      initialValue: 'Réserver maintenant',
    }),
    defineField({
      name: 'ctaLink',
      title: 'Lien du bouton CTA',
      type: 'string',
      initialValue: '#reservation',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'image',
    },
  },
}); 
