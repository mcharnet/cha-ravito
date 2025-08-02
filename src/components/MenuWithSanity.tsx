'use client';

import { motion } from 'framer-motion';
import { Coffee, Utensils } from 'lucide-react';
import Image from 'next/image';
import { useMenuData } from '@/hooks/useSanityData';

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
import Button from './ui/Button';
import Container from './ui/Container';

const categoryIcons = {
  'Smoothies': <Coffee className="h-8 w-8 text-orange-500" />,
  'Cafés': <Coffee className="h-8 w-8 text-orange-500" />,
  'Jus': <Coffee className="h-8 w-8 text-orange-500" />,
  'Récupération': <Coffee className="h-8 w-8 text-orange-500" />,
  'Bowls': <Utensils className="h-8 w-8 text-blue-400" />,
  'Wraps': <Utensils className="h-8 w-8 text-blue-400" />,
  'Snacks': <Utensils className="h-8 w-8 text-blue-400" />,
  'Salades': <Utensils className="h-8 w-8 text-blue-400" />,
};

export default function MenuWithSanity() {
  const { data: menuItems, loading, error } = useMenuData();

  if (loading) {
    return (
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement du menu...</p>
          </div>
        </Container>
      </section>
    );
  }

  if (!menuItems || menuItems.length === 0) {
    return (
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <p className="text-gray-600">Aucun élément de menu disponible</p>
          </div>
        </Container>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <p className="text-red-600">Erreur lors du chargement du menu</p>
          </div>
        </Container>
      </section>
    );
  }

  // Grouper les items par catégorie
  const groupedItems = menuItems?.reduce((acc: Record<string, MenuItem[]>, item: MenuItem) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as Record<string, MenuItem[]>) || {};

  return (
    <section className="py-16 bg-gray-50">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Notre Carte
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez notre sélection de plats et boissons fraîches
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(groupedItems).map(([category, items], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="text-center mb-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    {categoryIcons[category as keyof typeof categoryIcons] || <Utensils className="h-8 w-8 text-gray-500" />}
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900">{category}</h3>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {(items as MenuItem[]).map((item: MenuItem, itemIndex) => (
                    <motion.div
                      key={item._id}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: itemIndex * 0.1 }}
                      viewport={{ once: true }}
                      className="bg-white rounded-lg shadow-lg overflow-hidden"
                    >
                      {item.image && (
                        <div className="w-full h-48 overflow-hidden bg-gray-200 flex items-center justify-center">
                          <span className="text-gray-500">Image à venir</span>
                        </div>
                      )}
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="font-medium text-gray-900 text-lg">{item.name}</h4>
                          <span className="font-bold text-orange-500 text-lg">{item.price}€</span>
                        </div>
                        <p className="text-sm text-gray-600">{item.description}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button href="/click-and-collect" variant="primary" size="lg" className="mr-4">
              Commander en ligne
            </Button>
            <Button href="/reservation" variant="secondary" size="lg">
              Réserver une table
            </Button>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 
