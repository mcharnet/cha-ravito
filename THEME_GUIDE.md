# Guide d'utilisation du thème Cha Ravito

## 🎨 Système de thème centralisé

Le projet utilise un système de thème centralisé inspiré de Material-UI pour faciliter les changements de couleurs et maintenir la cohérence visuelle.

## 📁 Structure des fichiers

```
src/
├── styles/
│   └── theme.ts          # Configuration du thème
├── hooks/
│   └── useTheme.ts       # Hook React pour utiliser le thème
└── components/           # Composants utilisant le thème
```

## 🚀 Utilisation du thème

### 1. Importer le hook

```tsx
import { useTheme } from '@/hooks/useTheme';
```

### 2. Utiliser dans un composant

```tsx
export default function MonComposant() {
  const { classes } = useTheme();

  return (
    <div className={`p-4 rounded-lg ${classes.bgPrimary} text-white`}>
      Mon contenu
    </div>
  );
}
```

### 3. Classes disponibles

#### Couleurs de fond
- `classes.bgPrimary` - Fond bleu principal
- `classes.bgSecondary` - Fond vert secondaire  
- `classes.bgAccent` - Fond ambre accent

#### Couleurs de texte
- `classes.textPrimary` - Texte bleu principal
- `classes.textSecondary` - Texte vert secondaire
- `classes.textAccent` - Texte ambre accent

#### Bordures
- `classes.borderPrimary` - Bordure bleue
- `classes.borderSecondary` - Bordure verte
- `classes.borderAccent` - Bordure ambre

#### États hover
- `classes.hoverPrimary` - Hover bleu
- `classes.hoverSecondary` - Hover vert
- `classes.hoverAccent` - Hover ambre

## 🎯 Changer les couleurs

Pour modifier les couleurs du thème, éditez uniquement le fichier `src/styles/theme.ts` :

```tsx
// Dans src/styles/theme.ts
export const theme = {
  colors: {
    primary: {
      600: '#2563eb', // Changez cette couleur
      // ...
    },
    secondary: {
      600: '#16a34a', // Et celle-ci
      // ...
    },
    accent: {
      600: '#d97706', // Et celle-ci
      // ...
    },
  },
  // ...
};
```

## 📋 Exemples d'utilisation

### Bouton avec thème
```tsx
<button className={`px-6 py-3 rounded-lg font-semibold transition-colors ${classes.bgPrimary} ${classes.hoverPrimary} text-white`}>
  Mon bouton
</button>
```

### Carte avec thème
```tsx
<div className={`p-6 rounded-lg shadow-md ${classes.bgSecondary} text-white`}>
  <h3 className={`text-xl font-bold ${classes.textPrimary}`}>Titre</h3>
  <p>Contenu de la carte</p>
</div>
```

### Navigation avec thème
```tsx
<nav className="flex space-x-4">
  <a className={`px-3 py-2 rounded-md transition-colors ${classes.textPrimary} ${classes.hoverPrimary}`}>
    Accueil
  </a>
</nav>
```

## 🔧 Configuration Tailwind

Le thème est intégré dans la configuration Tailwind (`tailwind.config.ts`) pour permettre l'utilisation des classes personnalisées :

```tsx
// Classes disponibles grâce à la configuration
className="bg-primary-600"    // Au lieu de bg-blue-600
className="text-secondary-600" // Au lieu de text-green-600
className="border-accent-600"  // Au lieu de border-amber-600
```

## 🎨 Palette de couleurs actuelles

### Couleurs principales
- **Primary (Bleu)** : `#2563eb` - Navigation, boutons CTA
- **Secondary (Vert)** : `#16a34a` - Éléments nature/trail
- **Accent (Ambre)** : `#d97706` - Café, chaleur

### Échelles de couleurs
Chaque couleur a 10 niveaux (50, 100, 200, ..., 900) pour la flexibilité.

## 📝 Bonnes pratiques

1. **Utilisez toujours le thème** pour les couleurs principales
2. **Évitez les couleurs hardcodées** comme `bg-blue-600`
3. **Centralisez les changements** dans `theme.ts`
4. **Testez les contrastes** lors des changements de couleurs
5. **Documentez les changements** dans le guide

## 🔄 Migration depuis les couleurs hardcodées

Pour migrer un composant existant :

**Avant :**
```tsx
<button className="bg-blue-600 hover:bg-blue-700 text-white">
  Mon bouton
</button>
```

**Après :**
```tsx
const { classes } = useTheme();

<button className={`${classes.bgPrimary} ${classes.hoverPrimary} text-white`}>
  Mon bouton
</button>
```

## 🚀 Avantages du système

- ✅ **Cohérence** : Toutes les couleurs sont centralisées
- ✅ **Maintenabilité** : Changements faciles depuis un seul fichier
- ✅ **Flexibilité** : Support des échelles de couleurs
- ✅ **Type Safety** : TypeScript pour éviter les erreurs
- ✅ **Performance** : Pas de surcharge runtime 
