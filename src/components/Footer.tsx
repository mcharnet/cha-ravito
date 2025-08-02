import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from 'lucide-react';
import Container from './ui/Container';
import Logo from './ui/Logo';

const footerLinks = {
  services: [
    { name: 'Menu', href: '#menu' },
    { name: 'Réservation', href: '#reservation' },
    { name: 'Click & Collect', href: '#click-and-collect' },
  ],
  company: [
    { name: 'À propos', href: '#values' },
    { name: 'Contact', href: '#contact' },
    { name: 'Nous trouver', href: '#location' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/legal' },
    { name: 'Politique de confidentialité', href: '/privacy' },
    { name: 'CGV', href: '/terms' },
  ],
};

const socialLinks = [
  { name: 'Facebook', href: 'https://facebook.com/charavito', icon: Facebook },
  { name: 'Instagram', href: 'https://instagram.com/charavito', icon: Instagram },
  { name: 'Twitter', href: 'https://twitter.com/charavito', icon: Twitter },
];

const contactInfo = [
  { icon: MapPin, text: '33 rue Molière, 69006 Lyon, France' },
  { icon: Phone, text: '+33 4 50 00 00 00' },
  { icon: Mail, text: 'contact@charavito.fr' },
];

const openingHours = [
  { day: 'Lundi - Vendredi', hours: '7h00 - 20h00' },
  { day: 'Samedi - Dimanche', hours: '8h00 - 22h00' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <Container>
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Logo et description */}
            <div className="lg:col-span-1">
              <div className="mb-4">
                <Logo size="sm" variant="white" />
              </div>
              <p className="text-gray-300 mb-4">
                Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <Link
                    key={social.name}
                    href={social.href}
                    className="text-gray-400 hover:text-orange-400 transition-colors duration-200"
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-3">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <info.icon className="h-5 w-5 text-orange-400 mt-0.5" />
                    <span className="text-gray-300 text-sm">{info.text}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Horaires */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Horaires</h3>
              <div className="space-y-2">
                {openingHours.map((schedule, index) => (
                  <div key={index} className="flex justify-between">
                    <span className="text-gray-300 text-sm">{schedule.day}</span>
                    <span className="text-white text-sm font-medium">{schedule.hours}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Liens rapides */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Liens rapides</h3>
              <div className="space-y-2">
                {footerLinks.services.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    className="block text-gray-300 hover:text-orange-400 transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="py-6 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Le Ravito. Tous droits réservés.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-400 hover:text-orange-400 transition-colors duration-200 text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
} 
