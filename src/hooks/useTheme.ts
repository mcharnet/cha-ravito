import { theme, themeClasses } from '@/styles/theme';

export const useTheme = () => {
  return {
    theme,
    classes: themeClasses,
    // Méthodes utilitaires simplifiées
    getSpacing: (size: keyof typeof theme.spacing) => {
      return theme.spacing[size];
    },
  };
}; 
