import { defineField, defineType } from 'sanity';

export const socialMedia = defineType({
  name: 'socialMedia',
  title: 'Réseaux Sociaux',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Titre de la section',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'platforms',
      title: 'Plateformes sociales',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'platform',
              title: 'Plateforme',
              type: 'string',
              options: {
                list: [
                  { title: 'Facebook', value: 'facebook' },
                  { title: 'Instagram', value: 'instagram' },
                  { title: 'Twitter/X', value: 'twitter' },
                  { title: 'TikTok', value: 'tiktok' },
                  { title: 'LinkedIn', value: 'linkedin' },
                  { title: 'YouTube', value: 'youtube' },
                  { title: 'TripAdvisor', value: 'tripadvisor' },
                  { title: 'TheFork', value: 'thefork' },
                  { title: 'Google My Business', value: 'google' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'url',
              title: 'URL du profil',
              type: 'url',
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'username',
              title: 'Nom d\'utilisateur',
              type: 'string',
            }),
            defineField({
              name: 'isActive',
              title: 'Actif',
              type: 'boolean',
              initialValue: true,
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
