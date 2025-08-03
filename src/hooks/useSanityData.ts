import { createClient } from 'next-sanity';

// Client Sanity pour le serveur et le client
const client = createClient({
  projectId: 't4r4w8my',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
});

// Types pour les données Sanity
export interface MenuItemData {
  name: string;
  description?: string;
  price: number;
  image?: {
    asset: {
      _ref: string;
    };
  };
  ingredients?: string[];
  allergens?: string[];
  isVegetarian: boolean;
  isVegan: boolean;
  isGlutenFree: boolean;
  isAvailable: boolean;
}

// Query pour les items de menu
const menuItemsQuery = `*[_type == "menuItem"] {
  _id,
  name,
  description,
  price,
  image,
  ingredients,
  allergens,
  isVegetarian,
  isVegan,
  isGlutenFree,
  isAvailable
}`;

// Fonction pour récupérer les items de menu
export const getMenuItemsData = async (): Promise<MenuItemData[]> => {
  try {
    return await client.fetch<MenuItemData[]>(menuItemsQuery);
  } catch (error) {
    console.error('Erreur lors de la récupération des données menuItems:', error);
    return [];
  }
};

// Fonction pour récupérer toutes les données (version simplifiée)
export const getAllData = async () => {
  try {
    const menuItems = await getMenuItemsData();

    return {
      hero: null,
      reservation: null,
      clickAndCollect: null,
      menu: null,
      menuItems,
      about: null,
      location: null,
      contact: null,
      openingHours: null,
      socialMedia: null,
      settings: null,
    };
  } catch (error) {
    console.error('Erreur lors de la récupération de toutes les données:', error);
    return {
      hero: null,
      reservation: null,
      clickAndCollect: null,
      menu: null,
      menuItems: [],
      about: null,
      location: null,
      contact: null,
      openingHours: null,
      socialMedia: null,
      settings: null,
    };
  }
};

 
