'use client';

import { motion } from 'framer-motion';
import { Heart, Leaf, Users, Award } from 'lucide-react';
import Container from './ui/Container';

const values = [
  {
    icon: <Heart className="h-8 w-8 text-orange-500" />,
    title: "Passion",
    description: "Nous mettons notre passion au service de votre bien-être, en créant des expériences culinaires uniques."
  },
  {
    icon: <Leaf className="h-8 w-8 text-green-500" />,
    title: "Qualité",
    description: "Nous sélectionnons avec soin nos ingrédients pour garantir fraîcheur et qualité dans chaque plat."
  },
  {
    icon: <Users className="h-8 w-8 text-blue-500" />,
    title: "Communauté",
    description: "Le Cha Ravito est plus qu'un restaurant, c'est un lieu de rencontre pour tous les passionnés."
  },
  {
    icon: <Award className="h-8 w-8 text-orange-500" />,
    title: "Excellence",
    description: "Nous visons l'excellence dans chaque détail, du service à la présentation de nos plats."
  }
];

const suppliers = [
  "Fruits et légumes locaux",
  "Viandes de qualité supérieure",
  "Produits bio et équitables",
  "Artisans locaux",
  "Fournisseurs engagés"
];

export default function Values() {
  return (
    <section id="values" className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Histoire */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Notre Histoire
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 leading-relaxed mb-6">
                Le Le Ravito est né de la passion du trail et de la gastronomie. 
                Après des années à courir dans les montagnes, nous avons voulu créer 
                un lieu où les sportifs et les amateurs de bonne cuisine pourraient 
                se retrouver pour partager leurs expériences et se ressourcer.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Notre nom "Le Ravito" évoque les ravitaillements lors des courses 
                de trail, ces moments précieux où l'on reprend des forces. 
                C'est exactement ce que nous vous proposons : un ravitaillement 
                gourmand et bienveillant dans un cadre chaleureux.
              </p>
            </div>
          </div>

          {/* Valeurs */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
              Nos Valeurs
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gray-100 rounded-full mb-4">
                    {value.icon}
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Fournisseurs */}
          <div className="bg-gray-50 rounded-lg p-8">
            <h3 className="text-3xl font-bold text-gray-900 text-center mb-8">
              Nos Fournisseurs
            </h3>
            <div className="max-w-4xl mx-auto">
              <p className="text-xl text-gray-600 text-center mb-8">
                Nous privilégions les partenariats avec des fournisseurs locaux 
                et engagés pour garantir la qualité et soutenir l'économie locale.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {suppliers.map((supplier, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 bg-white rounded-lg p-4 shadow-sm"
                  >
                    <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
                    <span className="text-gray-700">{supplier}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 
