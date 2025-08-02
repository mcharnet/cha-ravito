export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Smoothies', value: 'Smoothies' },
          { title: 'Cafés', value: 'Cafés' },
          { title: 'Jus', value: 'Jus' },
          { title: 'Récupération', value: 'Récupération' },
          { title: 'Bowls', value: 'Bowls' },
          { title: 'Wraps', value: 'Wraps' },
          { title: 'Snacks', value: 'Snacks' },
          { title: 'Salades', value: 'Salades' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Boisson', value: 'boisson' },
          { title: 'Nourriture', value: 'nourriture' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isAvailable',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
}; 
