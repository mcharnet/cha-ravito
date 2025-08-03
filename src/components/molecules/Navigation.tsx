'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/atoms/Button';
import { scrollToSection } from '@/lib/utils';
import { Menu, X } from 'lucide-react';

interface NavigationItem {
  id: string;
  label: string;
  href: string;
}

const navigationItems: NavigationItem[] = [
  { id: 'accueil', label: 'Accueil', href: '/' },
  { id: 'menu', label: 'Menu', href: '/menu' },
  { id: 'evenements', label: 'Événements', href: '/evenements' },
  { id: 'click-collect', label: 'Click & Collect', href: '/click-collect' },
  { id: 'a-propos', label: 'À propos', href: '/a-propos' },
  { id: 'contact', label: 'Contact', href: '/contact' },
  { id: 'reserver', label: 'Réserver', href: '/reserver' },
];

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    if (href.startsWith('#')) {
      scrollToSection(href.replace('#', ''));
    } else {
      window.location.href = href;
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent, href: string) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleNavClick(href);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-sm shadow-lg border-b border-gray-200'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center space-x-3 hover:opacity-80 transition-opacity"
              aria-label="Retour à l'accueil"
            >
              <img 
                src="/logo.png" 
                alt="Le Ravito - Logo" 
                className="h-14 w-auto"
                width="140"
                height="70"
              />
              <span className="text-2xl font-bold text-gray-900 hidden sm:block">LERAVITO</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-center space-x-1">
              {navigationItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.href)}
                  onKeyDown={(e) => handleKeyDown(e, item.href)}
                  className="text-gray-700 hover:text-orange-500 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                  tabIndex={0}
                  aria-label={`Aller à la section ${item.label}`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Fermer le menu' : 'Ouvrir le menu'}
              aria-expanded={isMenuOpen}
              className="p-2"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="lg:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg border-t border-gray-200">
            {navigationItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.href)}
                onKeyDown={(e) => handleKeyDown(e, item.href)}
                className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2 w-full text-left"
                tabIndex={0}
                aria-label={`Aller à la section ${item.label}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}; 
