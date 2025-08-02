'use client';

import { motion } from 'framer-motion';
import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import Container from './ui/Container';

const socialLinks = [
  {
    name: 'Facebook',
    icon: <Facebook className="h-8 w-8" />,
    url: 'https://facebook.com/charavito',
    color: 'bg-blue-600 hover:bg-blue-700'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="h-8 w-8" />,
    url: 'https://instagram.com/charavito',
    color: 'bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600'
  },
  {
    name: 'Twitter',
    icon: <Twitter className="h-8 w-8" />,
    url: 'https://twitter.com/charavito',
    color: 'bg-blue-400 hover:bg-blue-500'
  },
  {
    name: 'YouTube',
    icon: <Youtube className="h-8 w-8" />,
    url: 'https://youtube.com/charavito',
    color: 'bg-red-600 hover:bg-red-700'
  }
];

export default function SocialMedia() {
  return (
    <section id="social-media" className="py-16 bg-white">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Suivez-nous
          </h2>
                      <p className="text-xl text-gray-600 mb-12">
              Restez connectés avec la communauté Le Ravito
            </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${social.color} text-white rounded-lg p-6 transition-all duration-300 transform hover:scale-105 hover:shadow-lg`}
              >
                <div className="flex flex-col items-center space-y-3">
                  {social.icon}
                  <span className="font-semibold">{social.name}</span>
                </div>
              </motion.a>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-gray-50 rounded-lg p-8"
          >
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Notre Communauté
            </h3>
            <p className="text-gray-600 mb-6">
              Rejoignez notre communauté de passionnés de trail et de bonne cuisine. 
              Partagez vos expériences, découvrez nos événements et restez informés 
              de nos dernières nouveautés.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">500+</div>
                <div className="text-gray-600">Followers Instagram</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">200+</div>
                <div className="text-gray-600">Membres Facebook</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-500 mb-2">50+</div>
                <div className="text-gray-600">Événements organisés</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
} 
