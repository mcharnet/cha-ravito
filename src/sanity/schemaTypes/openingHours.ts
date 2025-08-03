import { defineField, defineType } from 'sanity';

export const openingHours = defineType({
  name: 'openingHours',
  title: 'Horaires d\'ouverture',
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
      rows: 2,
    }),
    defineField({
      name: 'schedule',
      title: 'Horaires par jour',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'day',
              title: 'Jour',
              type: 'string',
              options: {
                list: [
                  { title: 'Lundi', value: 'monday' },
                  { title: 'Mardi', value: 'tuesday' },
                  { title: 'Mercredi', value: 'wednesday' },
                  { title: 'Jeudi', value: 'thursday' },
                  { title: 'Vendredi', value: 'friday' },
                  { title: 'Samedi', value: 'saturday' },
                  { title: 'Dimanche', value: 'sunday' },
                ],
              },
              validation: (Rule) => Rule.required(),
            }),
            defineField({
              name: 'isOpen',
              title: 'Ouvert ce jour',
              type: 'boolean',
              initialValue: true,
            }),
            defineField({
              name: 'openTime',
              title: 'Heure d\'ouverture',
              type: 'string',
              description: 'Format HH:MM (ex: 08:00)',
            }),
            defineField({
              name: 'closeTime',
              title: 'Heure de fermeture',
              type: 'string',
              description: 'Format HH:MM (ex: 22:00)',
            }),
            defineField({
              name: 'breakStart',
              title: 'Début de pause',
              type: 'string',
              description: 'Format HH:MM (ex: 14:00)',
            }),
            defineField({
              name: 'breakEnd',
              title: 'Fin de pause',
              type: 'string',
              description: 'Format HH:MM (ex: 18:00)',
            }),
            defineField({
              name: 'note',
              title: 'Note spéciale',
              type: 'string',
              description: 'Ex: "Fermé le lundi" ou "Ouvert uniquement le soir"',
            }),
          ],
        },
      ],
    }),
    defineField({
      name: 'specialHours',
      title: 'Horaires spéciaux',
      type: 'text',
      rows: 4,
      description: 'Informations sur les jours fériés, événements spéciaux, etc.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}); 
