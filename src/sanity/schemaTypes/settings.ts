import { defineField, defineType } from 'sanity';

export const settings = defineType({
  name: 'settings',
  title: 'Paramètres du site',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Titre du site',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'siteDescription',
      title: 'Description du site',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'favicon',
      title: 'Favicon',
      type: 'image',
    }),
    defineField({
      name: 'maintenanceMode',
      title: 'Mode maintenance',
      type: 'boolean',
      initialValue: false,
    }),
    defineField({
      name: 'maintenanceMessage',
      title: 'Message de maintenance',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'googleAnalyticsId',
      title: 'ID Google Analytics',
      type: 'string',
    }),
    defineField({
      name: 'googleMapsApiKey',
      title: 'Clé API Google Maps',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'siteTitle',
      subtitle: 'siteDescription',
      media: 'logo',
    },
  },
}); 
