'use client';

import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Clock, Heart } from 'lucide-react';

interface SocialMediaPlatform {
  platform: string;
  url: string;
  username?: string;
  isActive: boolean;
}

interface FooterProps {
  contactData?: {
    phone?: string;
    email?: string;
    address?: string;
  };
  socialMediaData?: {
    platforms?: SocialMediaPlatform[];
  };
  openingHours?: {
    [key: string]: string;
  };
}

const getSocialIcon = (platform: string) => {
  switch (platform.toLowerCase()) {
    case 'facebook':
      return <Facebook className="h-5 w-5" />;
    case 'instagram':
      return <Instagram className="h-5 w-5" />;
    case 'twitter':
      return <Twitter className="h-5 w-5" />;
    default:
      return <div className="h-5 w-5 bg-gray-400 rounded" />;
  }
};

export const Footer = ({ contactData, socialMediaData, openingHours }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Section principale */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo et description */}
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center space-x-3">
              <img 
                src="/logo.png" 
                alt="Le Ravito - Logo" 
                className="h-12 w-auto"
                width="120"
                height="60"
              />
              <span className="text-2xl font-bold">LERAVITO</span>
            </div>
            <p className="text-gray-300 text-lg leading-relaxed max-w-md">
              Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante.
            </p>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Contact
            </h3>
            <div className="space-y-4">
              {contactData?.address && (
                <div className="flex items-start space-x-3 text-gray-300">
                  <MapPin className="h-5 w-5 text-orange-400 mt-0.5 flex-shrink-0" />
                  <span className="leading-relaxed">{contactData.address}</span>
                </div>
              )}
              
              {contactData?.phone && (
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="h-5 w-5 text-orange-400" />
                  <a 
                    href={`tel:${contactData.phone}`}
                    className="hover:text-white transition-colors"
                    aria-label={`Appeler ${contactData.phone}`}
                  >
                    {contactData.phone}
                  </a>
                </div>
              )}
              
              {contactData?.email && (
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="h-5 w-5 text-orange-400" />
                  <a 
                    href={`mailto:${contactData.email}`}
                    className="hover:text-white transition-colors"
                    aria-label={`Envoyer un email à ${contactData.email}`}
                  >
                    {contactData.email}
                  </a>
                </div>
              )}
            </div>
          </div>

          {/* Horaires */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">
              Horaires
            </h3>
            <div className="space-y-3">
              {openingHours ? (
                <div className="space-y-2">
                  {Object.entries(openingHours).map(([day, hours]) => (
                    <div key={day} className="flex justify-between text-gray-300">
                      <span className="capitalize">{day}</span>
                      <span>{hours}</span>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="space-y-2 text-gray-300">
                  <div className="flex justify-between">
                    <span>Lundi - Vendredi</span>
                    <span>7h00 - 20h00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Samedi - Dimanche</span>
                    <span>8h00 - 22h00</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="border-t border-gray-800 pt-8 mb-8">
          <div className="flex flex-wrap justify-center gap-8">
            <a href="/menu" className="text-gray-300 hover:text-white transition-colors">
              Menu
            </a>
            <a href="/reserver" className="text-gray-300 hover:text-white transition-colors">
              Réservation
            </a>
            <a href="/click-collect" className="text-gray-300 hover:text-white transition-colors">
              Click & Collect
            </a>
          </div>
        </div>

        {/* Copyright et réseaux sociaux */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-400 text-sm">
              © {currentYear} Le Ravito. Tous droits réservés.
            </p>
            
            {/* Réseaux sociaux */}
            <div className="flex items-center space-x-4">
              {socialMediaData?.platforms?.filter(platform => platform.isActive).map((platform, index) => (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-800 hover:bg-orange-600 p-2 rounded-lg transition-colors duration-200"
                  aria-label={`Suivre Le Ravito sur ${platform.platform}`}
                >
                  {getSocialIcon(platform.platform)}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}; 
