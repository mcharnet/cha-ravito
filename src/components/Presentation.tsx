'use client';

import { motion } from 'framer-motion';
import Container from './ui/Container';

export default function Presentation() {
  return (
    <section id="presentation" className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-4xl mx-auto"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Bienvenue au <span className="text-orange-500">Le Ravito</span>
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Votre point de rencontre après l'effort. Nous vous proposons des boissons saines, 
            une cuisine fraîche et un accueil chaleureux dans un cadre convivial. 
            Que vous veniez de terminer votre trail ou que vous souhaitiez simplement 
            vous détendre, le Le Ravito est l'endroit idéal pour recharger vos batteries.
          </p>
        </motion.div>
      </Container>
    </section>
  );
} 
