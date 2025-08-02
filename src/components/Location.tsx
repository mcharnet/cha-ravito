'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';
import Container from './ui/Container';
import { useContactData } from '@/hooks/useSanityData';

export default function Location() {
  const { data: contactData, loading, error } = useContactData();
  return (
    <section id="location" className="py-16 bg-gray-50">
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
              Nous Trouver
            </h2>
            <p className="text-xl text-gray-600">
              Venez nous rendre visite dans notre établissement
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
                  Informations pratiques
                </h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Adresse</h4>
                      <p className="text-gray-600">
                        {contactData?.address || '33 rue Molière, 69006 Lyon, France'}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Horaires</h4>
                      <p className="text-gray-600">
                        {contactData?.openingHours ? 
                          contactData.openingHours.map((day: any) => `${day.day}: ${day.hours}`).join('\n') :
                          'Lundi - Vendredi : 7h00 - 20h00\nSamedi - Dimanche : 8h00 - 22h00'
                        }
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Phone className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Téléphone</h4>
                      <p className="text-gray-600">
                        <a href={`tel:${contactData?.phone || '+33450000000'}`} className="hover:text-orange-500 transition-colors">
                          {contactData?.phone || '+33 4 50 00 00 00'}
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <Mail className="h-6 w-6 text-orange-500 mt-1" />
                    <div>
                      <h4 className="font-semibold text-gray-900">Email</h4>
                      <p className="text-gray-600">
                        <a href={`mailto:${contactData?.email || 'contact@charavito.fr'}`} className="hover:text-orange-500 transition-colors">
                          {contactData?.email || 'contact@charavito.fr'}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-semibold text-gray-900 mb-3">Accès</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li>• Parking gratuit disponible</li>
                    <li>• Accessible en transport en commun</li>
                    <li>• À 5 minutes du centre-ville</li>
                    <li>• Proche des sentiers de trail</li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Carte Google Maps */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <div className="h-96 w-full">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2783.1234567890123!2d4.8473!3d45.7640!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f4ea516bc8e9c9%3A0x1234567890abcdef!2zMzMgcnVlIE1vbGnDqHJlLCA2OTAwNiBMeW9uLCBGcmFuY2U!5e0!3m2!1sfr!2sfr!4v1234567890123"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Le Ravito - Localisation"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Bouton d'action */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <a
              href="https://maps.google.com/?q=33+rue+Molière+69006+Lyon+France"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600 transition-colors"
            >
              <MapPin className="h-5 w-5 mr-2" />
              Itinéraire Google Maps
            </a>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 
