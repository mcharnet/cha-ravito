export default {
  name: 'contact',
  title: 'Informations de Contact',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'openingHours',
      title: 'Horaires d\'ouverture',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Jour',
              type: 'string',
              options: {
                list: [
                  'Lundi',
                  'Mardi',
                  'Mercredi',
                  'Jeudi',
                  'Vendredi',
                  'Samedi',
                  'Dimanche',
                ],
              },
            },
            {
              name: 'hours',
              title: 'Horaires',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'socialMedia',
      title: 'Réseaux sociaux',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'address',
      subtitle: 'phone',
    },
  },
}; 
