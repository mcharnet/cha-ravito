export default {
  name: 'hero',
  title: 'Section Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isActive',
      title: 'Actif',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage',
    },
  },
}; 
