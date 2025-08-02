'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, Clock, MapPin } from 'lucide-react';
import Container from './ui/Container';
import Button from './ui/Button';
import { useContactData } from '@/hooks/useSanityData';

export default function Contact() {
  const { data: contactData, loading, error } = useContactData();
  
  if (loading) {
    return (
      <section id="contact" className="py-16 bg-gray-50">
        <Container>
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">Chargement des informations...</p>
          </div>
        </Container>
      </section>
    );
  }
  
  return (
    <section id="contact" className="py-16 bg-gray-50">
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
              Contact & Horaires
            </h2>
            <p className="text-xl text-gray-600">
              Nous sommes là pour vous accueillir
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informations de contact */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Contactez-nous
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphone</h4>
                      <a href={`tel:${contactData?.phone || '+33450000000'}`} className="text-gray-600 hover:text-orange-500 transition-colors">
                        {contactData?.phone || '+33 4 50 00 00 00'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <a href={`mailto:${contactData?.email || 'contact@charavito.fr'}`} className="text-gray-600 hover:text-orange-500 transition-colors">
                        {contactData?.email || 'contact@charavito.fr'}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <a href={`https://maps.google.com/?q=${encodeURIComponent(contactData?.address || '33 rue Molière, 69006 Lyon')}`}
                         target="_blank" 
                         rel="noopener noreferrer"
                         className="text-gray-600 hover:text-orange-500 transition-colors">
                        {contactData?.address || '33 rue Molière, 69006 Lyon'}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <Button variant="primary" size="lg" className="w-full">
                    Nous envoyer un message
                  </Button>
                </div>
              </div>
            </motion.div>

            {/* Horaires d'ouverture */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="bg-white rounded-lg shadow-lg p-8">
                <div className="flex items-center space-x-3 mb-6">
                  <Clock className="h-6 w-6 text-orange-500" />
                  <h3 className="text-2xl font-bold text-gray-900">
                    Horaires d'ouverture
                  </h3>
                </div>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Lundi - Vendredi</span>
                    <span className="text-gray-600">7h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="font-medium text-gray-900">Samedi - Dimanche</span>
                    <span className="text-gray-600">8h00 - 22h00</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-orange-50 rounded-lg">
                  <h4 className="font-semibold text-gray-900 mb-2">
                    Informations importantes
                  </h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li>• Réservation recommandée le weekend</li>
                    <li>• Fermeture exceptionnelle les jours fériés</li>
                    <li>• Service continu de 7h00 à 20h00</li>
                    <li>• Dernière commande 30 min avant fermeture</li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
} 
