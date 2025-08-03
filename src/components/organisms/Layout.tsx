'use client';

import { Navigation } from '@/components/molecules/Navigation';
import { Footer } from '@/components/molecules/Footer';

interface LayoutProps {
  children: React.ReactNode;
}

const defaultContactData = {
  phone: "01 23 45 67 89",
  email: "contact@leravito.fr",
  address: "33 rue Molère, 69006 Lyon"
};

const defaultSocialMediaData = {
  platforms: [
    {
      platform: "facebook",
      url: "https://facebook.com/leravito",
      isActive: true
    },
    {
      platform: "instagram", 
      url: "https://instagram.com/leravito",
      isActive: true
    },
    {
      platform: "twitter",
      url: "https://twitter.com/leravito", 
      isActive: true
    }
  ]
};

const defaultOpeningHours = {
  "lundi": "8h00 - 22h00",
  "mardi": "8h00 - 22h00", 
  "mercredi": "8h00 - 22h00",
  "jeudi": "8h00 - 22h00",
  "vendredi": "8h00 - 23h00",
  "samedi": "9h00 - 23h00",
  "dimanche": "9h00 - 22h00"
};

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <Navigation />
      <main>
        {children}
      </main>
      <Footer 
        contactData={defaultContactData}
        socialMediaData={defaultSocialMediaData}
        openingHours={defaultOpeningHours}
      />
    </div>
  );
}; 
