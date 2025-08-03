import { defineField, defineType } from 'sanity';

export const reservation = defineType({
  name: 'reservation',
  title: 'Section Réservation',
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
      rows: 4,
    }),
    defineField({
      name: 'bookingUrl',
      title: 'URL de réservation externe',
      type: 'url',
      description: 'Lien vers le système de réservation (ex: TheFork, etc.)',
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Numéro de téléphone pour réservation',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email pour réservation',
      type: 'string',
    }),
    defineField({
      name: 'maxGuests',
      title: 'Nombre maximum de personnes par réservation',
      type: 'number',
      initialValue: 8,
    }),
    defineField({
      name: 'advanceBookingDays',
      title: 'Nombre de jours à l\'avance pour réserver',
      type: 'number',
      initialValue: 30,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}); 
