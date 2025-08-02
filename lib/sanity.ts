import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 't4r4w8my',
  apiVersion: '2024-01-01',
  useCdn: process.env.NODE_ENV === 'production',
};

export const sanityClient = createClient(config);

const builder = imageUrlBuilder(sanityClient);

export function urlFor(source: unknown) {
  return builder.image(source as any);
}

// Requêtes GROQ pour récupérer les données
export const menuQuery = `
  *[_type == "menuItem" && isAvailable == true] | order(category asc, name asc) {
    _id,
    name,
    description,
    price,
    category,
    type,
    "imageUrl": image.asset->url
  }
`;

export const eventsQuery = `
  *[_type == "event" && isActive == true] | order(date asc) {
    _id,
    title,
    date,
    time,
    location,
    description,
    participants,
    type,
    "imageUrl": image.asset->url
  }
`;

export const heroQuery = `
  *[_type == "hero" && isActive == true][0] {
    title,
    subtitle,
    description,
    "imageUrl": backgroundImage.asset->url
  }
`;

export const contactQuery = `
  *[_type == "contact"][0] {
    address,
    phone,
    email,
    openingHours,
    socialMedia
  }
`; 
