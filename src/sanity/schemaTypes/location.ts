import { defineField, defineType } from 'sanity';

export const location = defineType({
  name: 'location',
  title: 'Localisation',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'address',
      title: 'Adresse complète',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'city',
      title: 'Ville',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'postalCode',
      title: 'Code postal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'country',
      title: 'Pays',
      type: 'string',
      initialValue: 'France',
    }),
    defineField({
      name: 'coordinates',
      title: 'Coordonnées GPS',
      type: 'object',
      fields: [
        defineField({
          name: 'lat',
          title: 'Latitude',
          type: 'number',
        }),
        defineField({
          name: 'lng',
          title: 'Longitude',
          type: 'number',
        }),
      ],
    }),
    defineField({
      name: 'googleMapsUrl',
      title: 'URL Google Maps',
      type: 'url',
    }),
    defineField({
      name: 'parking',
      title: 'Informations parking',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'accessibility',
      title: 'Accessibilité',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'image',
      title: 'Image du restaurant',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'address',
      media: 'image',
    },
  },
}); 
