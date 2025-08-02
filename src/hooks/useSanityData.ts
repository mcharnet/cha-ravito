'use client';

import { useState, useEffect } from 'react';
import { client } from '@/sanity/lib/client';
import { menuItemsQuery, contactDataQuery, heroDataQuery, eventsQuery } from '@/sanity/lib/queries';

// Types pour les données Sanity
interface ContactData {
  address?: string;
  phone?: string;
  email?: string;
  openingHours?: Array<{ day: string; hours: string }>;
}

interface HeroData {
  title?: string;
  subtitle?: string;
}

// Hook pour les données de contact
export const useContactData = () => {
  const [data, setData] = useState<ContactData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Éviter l'exécution côté serveur
    if (typeof window === 'undefined') return;
    
    const fetchContactData = async () => {
      try {
        setLoading(true);
        
        // Tentative de récupération depuis Sanity
        try {
          const contactData = await client.fetch(contactDataQuery);
          if (contactData) {
            setData(contactData);
            return;
          }
        } catch (sanityError) {
          console.log('Sanity non configuré, utilisation des données statiques');
        }
        
        // Fallback avec des données statiques
        const fallbackData: ContactData = {
          address: "123 Rue du Trail\n75000 Paris, France",
          phone: "01 23 45 67 89",
          email: "contact@charavito.fr",
          openingHours: [
            { day: "Lundi - Vendredi", hours: "7h - 20h" },
            { day: "Samedi", hours: "8h - 22h" },
            { day: "Dimanche", hours: "8h - 18h" }
          ]
        };
        
        setData(fallbackData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  return { data, loading, error };
};

// Hook pour les données du hero
export const useHeroData = () => {
  const [data, setData] = useState<HeroData | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Éviter l'exécution côté serveur
    if (typeof window === 'undefined') return;
    
    const fetchHeroData = async () => {
      try {
        setLoading(true);
        
        // Tentative de récupération depuis Sanity
        try {
          const heroData = await client.fetch(heroDataQuery);
          if (heroData) {
            setData(heroData);
            return;
          }
        } catch (sanityError) {
          console.log('Sanity non configuré, utilisation des données statiques');
        }
        
        // Fallback avec des données statiques
        const fallbackData: HeroData = {
          title: "Votre Ravito après l'effort",
          subtitle: "Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante."
        };
        
        setData(fallbackData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchHeroData();
  }, []);

  return { data, loading, error };
};

// Types pour les événements
interface Event {
  _id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  participants: number;
  type: string;
  image?: {
    asset: {
      _ref: string;
    };
  };
}

// Hook pour les données des événements
export const useEventsData = () => {
  const [data, setData] = useState<Event[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Éviter l'exécution côté serveur
    if (typeof window === 'undefined') return;
    
    const fetchEventsData = async () => {
      try {
        setLoading(true);
        // Tentative de récupération depuis Sanity
        try {
          const eventsData = await client.fetch(eventsQuery);
          if (eventsData && eventsData.length > 0) {
            setData(eventsData);
            return;
          }
        } catch (sanityError) {
          console.log('Sanity non configuré, utilisation des données statiques');
        }
        
        // Fallback avec des données statiques
        const fallbackData: Event[] = [
          {
            _id: '1',
            title: 'Trail du Matin',
            description: 'Course matinale dans les collines',
            date: '2024-02-15',
            time: '07:00',
            location: 'Parc de la Butte',
            participants: 25,
            type: 'Course'
          },
          {
            _id: '2',
            title: 'Atelier Nutrition',
            description: 'Apprenez à optimiser votre alimentation pour le trail',
            date: '2024-02-20',
            time: '18:30',
            location: 'Le Ravito',
            participants: 15,
            type: 'Atelier'
          }
        ];
        
        setData(fallbackData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement des données');
      } finally {
        setLoading(false);
      }
    };

    fetchEventsData();
  }, []);

  return { data, loading, error };
};

// Types pour les éléments du menu
interface MenuItem {
  _id: string;
  name: string;
  description: string;
  price: string;
  category: string;
  type: 'boisson' | 'nourriture';
  image?: {
    asset: {
      _ref: string;
    };
  };
  isAvailable: boolean;
}

// Hook pour les données du menu
export const useMenuData = () => {
  const [data, setData] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Éviter l'exécution côté serveur
    if (typeof window === 'undefined') return;
    
    const fetchMenuData = async () => {
      try {
        setLoading(true);
        
        // Tentative de récupération depuis Sanity
        try {
          const menuData = await client.fetch(menuItemsQuery);
          if (menuData && menuData.length > 0) {
            setData(menuData);
            return;
          }
        } catch (sanityError) {
          console.log('Sanity non configuré, utilisation des données statiques');
        }
        
        // Fallback avec des données statiques
        const fallbackData: MenuItem[] = [
          {
            _id: '1',
            name: 'Smoothie Énergie Trail',
            description: 'Banane, myrtilles, protéines végétales et spiruline',
            price: '8,50 €',
            category: 'Smoothies',
            type: 'boisson',
            isAvailable: true
          },
          {
            _id: '2',
            name: 'Café Bio Équitable',
            description: 'Café d\'altitude, torréfaction douce',
            price: '3,50 €',
            category: 'Cafés',
            type: 'boisson',
            isAvailable: true
          },
          {
            _id: '3',
            name: 'Jus Vert Récupération',
            description: 'Épinards, pomme, gingembre et citron',
            price: '6,00 €',
            category: 'Jus',
            type: 'boisson',
            isAvailable: true
          },
          {
            _id: '4',
            name: 'Bowl Acaï Post-Trail',
            description: 'Acaï, granola maison, fruits frais et noix',
            price: '12,00 €',
            category: 'Bowls',
            type: 'nourriture',
            isAvailable: true
          },
          {
            _id: '5',
            name: 'Sandwich Trail Complet',
            description: 'Pain complet, poulet grillé, avocat et légumes',
            price: '9,50 €',
            category: 'Wraps',
            type: 'nourriture',
            isAvailable: true
          },
          {
            _id: '6',
            name: 'Barres Énergétiques Maison',
            description: 'Dattes, noix, graines et chocolat noir',
            price: '4,50 €',
            category: 'Snacks',
            type: 'nourriture',
            isAvailable: true
          }
        ];
        
        setData(fallbackData);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erreur lors du chargement du menu');
      } finally {
        setLoading(false);
      }
    };

    fetchMenuData();
  }, []);

  return { data, loading, error };
}; 
