'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Mountain, Coffee, Heart } from 'lucide-react';
import Button from './ui/Button';
import IconCard from './ui/IconCard';
import Container from './ui/Container';
import { useHeroData } from '@/hooks/useSanityData';


// Extracted features data
const features = [
  {
    title: "Boissons Saines",
    description: "Smoothies, jus frais, et boissons énergisantes naturelles",
    icon: <Mountain className="h-8 w-8 text-blue-400" />,
    iconBg: 'blue' as const
  },
  {
    title: "Nutrition Post-Trail",
    description: "Snacks équilibrés et repas récupération",
    icon: <Coffee className="h-8 w-8 text-orange-500" />,
    iconBg: 'orange' as const
  },
  {
    title: "Événements Trail",
    description: "Communauté active et événements réguliers",
    icon: <Heart className="h-8 w-8 text-yellow-400" />,
    iconBg: 'yellow' as const
  }
];

export default function Hero() {
  const { data: heroData, loading, error } = useHeroData();
  
  // Fallback content if no data from Sanity
  const title = heroData?.title || "Votre Ravito après l'effort";
  const subtitle = heroData?.subtitle || "Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante.";

  if (loading) {
    return (
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gray-50">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}></div>
          </div>
        </div>
        <Container className="relative z-10 text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </Container>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background simple */}
      <div className="absolute inset-0 bg-gray-50">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}></div>
        </div>
      </div>

      <Container className="relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
            {title.includes('Ravito') ? title : `${title} <span className="text-orange-500">Ravito</span> après l'effort`}
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            {subtitle}
          </p>
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 + index * 0.1 }}
              >
                <IconCard
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                  iconBg={feature.iconBg}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
        >
          <Button href="/menu" variant="primary" size="lg">
            <span>Découvrir notre menu</span>
            <ArrowRight className="h-5 w-5" />
          </Button>
          <Button href="/reservation" variant="secondary" size="lg">
            Réserver une table
          </Button>
        </motion.div>
      </Container>
    </section>
  );
} 
