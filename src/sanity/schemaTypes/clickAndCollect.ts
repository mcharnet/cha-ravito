import { defineField, defineType } from 'sanity';

export const clickAndCollect = defineType({
  name: 'clickAndCollect',
  title: 'Click & Collect',
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
      name: 'isEnabled',
      title: 'Activer le Click & Collect',
      type: 'boolean',
      initialValue: true,
    }),
    defineField({
      name: 'minOrderAmount',
      title: 'Montant minimum de commande (€)',
      type: 'number',
      initialValue: 15,
    }),
    defineField({
      name: 'preparationTime',
      title: 'Temps de préparation (minutes)',
      type: 'number',
      initialValue: 20,
    }),
    defineField({
      name: 'availableItems',
      title: 'Plats disponibles en Click & Collect',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'menuItem' }] }],
    }),
    defineField({
      name: 'phoneNumber',
      title: 'Numéro de téléphone pour Click & Collect',
      type: 'string',
    }),
    defineField({
      name: 'email',
      title: 'Email pour Click & Collect',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
}); 
