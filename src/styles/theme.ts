// Configuration du thème centralisé pour Le Ravito
export const theme = {
  colors: {
    // Couleurs principales - Couleurs exactes du logo LE RAVITO
    primary: {
      50: '#fff7ed',
      100: '#ffedd5',
      200: '#fed7aa',
      300: '#fdba74',
      400: '#fb923c',
      500: '#f97316', // Orange vif du logo - corps du coureur
      600: '#ea580c',
      700: '#c2410c',
      800: '#9a3412',
      900: '#7c2d12',
    },
    secondary: {
      50: '#eff6ff',
      100: '#dbeafe',
      200: '#bfdbfe',
      300: '#93c5fd',
      400: '#60a5fa', // Bleu clair du logo - shorts, bandeau, chaussures
      500: '#3b82f6',
      600: '#2563eb',
      700: '#1d4ed8',
      800: '#1e40af',
      900: '#1e3a8a',
    },
    accent: {
      50: '#fefce8',
      100: '#fef9c3',
      200: '#fef08a',
      300: '#fde047',
      400: '#facc15',
      500: '#fbbf24', // Jaune/Beige du logo - peau et tête
      600: '#f59e0b',
      700: '#d97706',
      800: '#b45309',
      900: '#92400e',
    },
    // Couleurs neutres
    neutral: {
      50: '#f8f9fa', // Gris clair du fond du logo
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
    // Couleurs sémantiques
    success: '#16a34a',
    warning: '#f59e0b',
    error: '#dc2626',
    info: '#2563eb',
  },
  // Espacements
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    '2xl': '3rem',
    '3xl': '4rem',
  },
  // Typographie
  typography: {
    fontFamily: {
      sans: ['Inter', 'system-ui', 'sans-serif'],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
  },
  // Ombres
  shadows: {
    sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
    md: '0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)',
    lg: '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)',
  },
  // Bordures
  borderRadius: {
    sm: '0.25rem',
    md: '0.375rem',
    lg: '0.5rem',
    xl: '0.75rem',
    '2xl': '1rem',
    full: '9999px',
  },
  // Transitions
  transitions: {
    fast: '150ms ease-in-out',
    normal: '200ms ease-in-out',
    slow: '300ms ease-in-out',
  },
} as const;

// Types TypeScript pour le thème
export type Theme = typeof theme;
export type ThemeColors = typeof theme.colors;
export type ColorScale = keyof typeof theme.colors.primary;

// Fonctions utilitaires pour le thème
export const getSpacing = (size: keyof typeof theme.spacing) => {
  return theme.spacing[size];
};

// Classes CSS utilitaires basées sur le thème (utiliser les classes Tailwind standard)
export const themeClasses = {
  // Couleurs de fond - utiliser les classes Tailwind standard
  bgPrimary: 'bg-orange-500',
  bgSecondary: 'bg-blue-400',
  bgAccent: 'bg-yellow-400',
  
  // Couleurs de texte
  textPrimary: 'text-orange-500',
  textSecondary: 'text-blue-400',
  textAccent: 'text-yellow-400',
  
  // Bordures
  borderPrimary: 'border-orange-500',
  borderSecondary: 'border-blue-400',
  borderAccent: 'border-yellow-400',
  
  // Hover states
  hoverPrimary: 'hover:bg-orange-600',
  hoverSecondary: 'hover:bg-blue-500',
  hoverAccent: 'hover:bg-yellow-500',
} as const; 
