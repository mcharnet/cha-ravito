import { defineField, defineType } from 'sanity';

export const contact = defineType({
  name: 'contact',
  title: 'Contact',
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
      name: 'phone',
      title: 'Numéro de téléphone principal',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Adresse email',
      type: 'string',
      validation: (Rule) => Rule.required().email(),
    }),
    defineField({
      name: 'emergencyPhone',
      title: 'Numéro d\'urgence',
      type: 'string',
    }),
    defineField({
      name: 'contactFormEnabled',
      title: 'Activer le formulaire de contact',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'responseTime',
      title: 'Délai de réponse (heures)',
      type: 'number',
      initialValue: 24,
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'phone',
    },
  },
}); 
