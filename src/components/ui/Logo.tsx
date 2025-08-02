import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'default' | 'white';
}

export default function Logo({ className = '', size = 'md', variant = 'default' }: LogoProps) {
  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16'
  };

  const textColor = variant === 'white' ? 'text-white' : '';

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Logo SVG avec le coureur */}
      <div className={`${sizeClasses[size]} relative`}>
        <svg
          viewBox="0 0 100 100"
          className="w-full h-full"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Fond du logo */}
          <rect width="100" height="100" fill="#f8f9fa" rx="8"/>
          
          {/* Ligne de piste */}
          <rect x="10" y="85" width="80" height="4" fill="#60a5fa" rx="2"/>
          
          {/* Coureur */}
          <g transform="translate(20, 15)">
            {/* Tête */}
            <circle cx="30" cy="15" r="8" fill="#fbbf24" stroke="#1f2937" strokeWidth="1"/>
            
            {/* Visage souriant */}
            <path d="M26 12 Q30 16 34 12" stroke="#1f2937" strokeWidth="1.5" fill="none"/>
            <circle cx="27" cy="13" r="1" fill="#1f2937"/>
            <circle cx="33" cy="13" r="1" fill="#1f2937"/>
            
            {/* Bandeau */}
            <rect x="22" y="7" width="16" height="3" fill="#60a5fa" rx="1.5"/>
            
            {/* Corps */}
            <rect x="28" y="23" width="4" height="12" fill="#f97316" rx="2"/>
            
            {/* Bras gauche */}
            <rect x="24" y="25" width="3" height="8" fill="#fbbf24" rx="1.5" transform="rotate(-20 25.5 29)"/>
            
            {/* Bras droit avec verre */}
            <rect x="35" y="20" width="3" height="10" fill="#fbbf24" rx="1.5" transform="rotate(30 36.5 25)"/>
            
            {/* Verre de bière */}
            <g transform="translate(38, 15)">
              {/* Verre */}
              <rect x="0" y="0" width="6" height="12" fill="#fef3c7" stroke="#1f2937" strokeWidth="0.5"/>
              {/* Bière */}
              <rect x="0.5" y="2" width="5" height="8" fill="#f59e0b"/>
              {/* Mousse */}
              <rect x="0.5" y="0" width="5" height="2" fill="#ffffff"/>
              {/* Étoiles/étincelles */}
              <circle cx="3" cy="1" r="0.5" fill="#ffffff"/>
              <circle cx="4.5" cy="0.5" r="0.3" fill="#ffffff"/>
              <circle cx="1.5" cy="0.5" r="0.3" fill="#ffffff"/>
            </g>
            
            {/* Jambes */}
            <rect x="26" y="35" width="3" height="12" fill="#60a5fa" rx="1.5"/>
            <rect x="31" y="35" width="3" height="12" fill="#60a5fa" rx="1.5"/>
            
            {/* Chaussures */}
            <ellipse cx="27.5" cy="47" rx="4" ry="2" fill="#3b82f6"/>
            <ellipse cx="32.5" cy="47" rx="4" ry="2" fill="#3b82f6"/>
            
            {/* Shorts */}
            <rect x="26" y="33" width="8" height="4" fill="#60a5fa" rx="2"/>
          </g>
        </svg>
      </div>
      
      {/* Texte LE RAVITO */}
      <div className="flex flex-col">
        <span className={`font-bold text-lg leading-tight ${variant === 'white' ? 'text-white' : 'text-orange-500'}`}>LE</span>
        <span className={`font-bold text-lg leading-tight ${variant === 'white' ? 'text-white' : 'text-blue-500'}`}>RAVITO</span>
      </div>
    </div>
  );
} 
