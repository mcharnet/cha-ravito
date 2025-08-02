'use client';

import { motion } from 'framer-motion';
import { ShoppingBag, Clock, MapPin, Phone } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';

export default function ClickAndCollect() {
  return (
    <section id="click-and-collect" className="py-16 bg-white">
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
              Click & Collect
            </h2>
            <p className="text-xl text-gray-600">
              Commandez en ligne et récupérez votre commande sur place
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-orange-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Comment ça marche ?
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      1
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Commandez en ligne</h4>
                      <p className="text-gray-600">Choisissez vos plats et boissons sur notre site</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      2
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Préparation</h4>
                      <p className="text-gray-600">Nous préparons votre commande avec soin</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold">
                      3
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Récupération</h4>
                      <p className="text-gray-600">Récupérez votre commande au restaurant</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Informations pratiques
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Temps de préparation : 15-20 minutes</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Récupération au restaurant uniquement</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-orange-500" />
                    <span className="text-gray-700">Appelez-nous pour toute question</span>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  <Button variant="primary" size="lg" className="w-full">
                    <ShoppingBag className="h-5 w-5 mr-2" />
                    Commander maintenant
                  </Button>
                  <Button variant="secondary" size="lg" className="w-full">
                    Voir le menu complet
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 
