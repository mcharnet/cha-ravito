'use client';

import { motion } from 'framer-motion';
import { Coffee, Utensils, Wine } from 'lucide-react';
import Container from './ui/Container';

const detailedMenu = {
  boissons: {
    title: "Boissons",
    icon: <Coffee className="h-6 w-6 text-orange-500" />,
    categories: [
      {
        name: "Smoothies & Jus",
        items: [
          { name: "Smoothie Vert", price: "6.50€", description: "Épinards, banane, pomme, gingembre" },
          { name: "Smoothie Rouge", price: "6.50€", description: "Framboises, fraises, yaourt grec" },
          { name: "Jus Orange Pressé", price: "4.50€", description: "Oranges fraîches pressées" },
          { name: "Jus Carotte-Gingembre", price: "5.00€", description: "Carottes, gingembre, citron" }
        ]
      },
      {
        name: "Café & Thés",
        items: [
          { name: "Espresso", price: "2.50€", description: "Café italien authentique" },
          { name: "Cappuccino", price: "3.50€", description: "Café, lait mousseux" },
          { name: "Thé Vert Matcha", price: "4.00€", description: "Thé vert japonais traditionnel" },
          { name: "Infusion Détox", price: "3.50€", description: "Menthe, citron, gingembre" }
        ]
      },
      {
        name: "Boissons Énergisantes",
        items: [
          { name: "Boisson Post-Trail", price: "5.50€", description: "Électrolytes, vitamines, protéines" },
          { name: "Kombucha Maison", price: "4.50€", description: "Fermentation naturelle" },
          { name: "Eau Coco Fraîche", price: "4.00€", description: "Coco fraîche pressée" }
        ]
      }
    ]
  },
  plats: {
    title: "Plats",
    icon: <Utensils className="h-6 w-6 text-blue-400" />,
    categories: [
      {
        name: "Salades & Bowls",
        items: [
          { name: "Bowl Trail Runner", price: "12.50€", description: "Quinoa, poulet, avocat, légumes" },
          { name: "Salade César Healthy", price: "10.50€", description: "Laitue, parmesan, croûtons, vinaigrette" },
          { name: "Bowl Buddha", price: "11.00€", description: "Riz complet, tofu, légumes, sauce tahini" }
        ]
      },
      {
        name: "Sandwiches & Burgers",
        items: [
          { name: "Sandwich Poulet Avocat", price: "8.50€", description: "Pain complet, poulet grillé, avocat" },
          { name: "Burger Végétarien", price: "9.50€", description: "Steak de légumes, fromage, salade" },
          { name: "Panini Saumon", price: "10.00€", description: "Saumon fumé, fromage frais, concombre" }
        ]
      },
      {
        name: "Plats Chauds",
        items: [
          { name: "Soupe du Jour", price: "7.50€", description: "Soupe maison selon saison" },
          { name: "Pasta Primavera", price: "11.50€", description: "Pâtes, légumes de saison, parmesan" },
          { name: "Risotto Champignons", price: "12.00€", description: "Riz arborio, champignons, parmesan" }
        ]
      }
    ]
  },
  desserts: {
    title: "Desserts",
    icon: <Wine className="h-6 w-6 text-yellow-400" />,
    categories: [
      {
        name: "Pâtisseries",
        items: [
          { name: "Brownie Chocolat", price: "4.50€", description: "Chocolat noir, noix de pécan" },
          { name: "Muffin Myrtilles", price: "3.50€", description: "Myrtilles fraîches, pâte moelleuse" },
          { name: "Cookie Chocolat", price: "2.50€", description: "Chocolat noir, pépites" }
        ]
      },
      {
        name: "Glaces & Sorbets",
        items: [
          { name: "Glace Vanille", price: "3.50€", description: "Vanille de Madagascar" },
          { name: "Sorbet Citron", price: "3.00€", description: "Citron frais pressé" },
          { name: "Glace Chocolat", price: "3.50€", description: "Chocolat noir intense" }
        ]
      },
      {
        name: "Fruits & Healthy",
        items: [
          { name: "Assiette Fruits Frais", price: "5.50€", description: "Fruits de saison variés" },
          { name: "Yogurt Parfait", price: "6.00€", description: "Yaourt grec, granola, fruits" },
          { name: "Smoothie Bowl", price: "7.50€", description: "Smoothie épais, granola, fruits" }
        ]
      }
    ]
  }
};

export default function MenuDetailed() {
  return (
    <section id="menu-detailed" className="py-16 bg-white">
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
              Menu Complet
            </h2>
            <p className="text-xl text-gray-600">
              Découvrez notre carte complète avec prix et descriptions
            </p>
          </div>

          <div className="space-y-16">
            {Object.entries(detailedMenu).map(([key, section], sectionIndex) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: sectionIndex * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center space-x-3 mb-8">
                  {section.icon}
                  <h3 className="text-3xl font-bold text-gray-900">{section.title}</h3>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  {section.categories.map((category, categoryIndex) => (
                    <div key={categoryIndex} className="bg-gray-50 rounded-lg p-6">
                      <h4 className="text-xl font-semibold text-gray-900 mb-4">{category.name}</h4>
                      <div className="space-y-4">
                        {category.items.map((item, itemIndex) => (
                          <div key={itemIndex} className="border-b border-gray-200 pb-3 last:border-b-0">
                            <div className="flex justify-between items-start mb-1">
                              <h5 className="font-medium text-gray-900">{item.name}</h5>
                              <span className="font-bold text-orange-500">{item.price}€</span>
                            </div>
                            <p className="text-sm text-gray-600">{item.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
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
            className="text-center mt-12 bg-orange-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Informations importantes
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-gray-600">
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Ingrédients</h4>
                <p>Tous nos ingrédients sont frais et de saison</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Allergies</h4>
                <p>Informez-nous de vos allergies alimentaires</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 mb-2">Portions</h4>
                <p>Portions généreuses pour sportifs</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 
