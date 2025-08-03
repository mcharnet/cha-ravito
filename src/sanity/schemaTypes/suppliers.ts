import { defineField, defineType } from 'sanity';

export const suppliers = defineType({
  name: 'suppliers',
  title: 'Nos Fournisseurs',
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
      title: 'Description générale',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'suppliers',
      title: 'Liste des fournisseurs',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            defineField({
              name: 'name',
              title: 'Nom du fournisseur',
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
              name: 'category',
              title: 'Catégorie',
              type: 'string',
              options: {
                list: [
                  { title: 'Viandes', value: 'meat' },
                  { title: 'Poissons', value: 'fish' },
                  { title: 'Légumes', value: 'vegetables' },
                  { title: 'Fruits', value: 'fruits' },
                  { title: 'Boissons', value: 'drinks' },
                  { title: 'Épices', value: 'spices' },
                  { title: 'Autre', value: 'other' },
                ],
              },
            }),
            defineField({
              name: 'logo',
              title: 'Logo du fournisseur',
              type: 'image',
            }),
            defineField({
              name: 'website',
              title: 'Site web du fournisseur',
              type: 'url',
            }),
            defineField({
              name: 'location',
              title: 'Localisation',
              type: 'string',
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
