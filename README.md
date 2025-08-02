# Cha Ravito - Site Vitrine

## 🏃‍♀️ Concept

Site vitrine pour un futur bar/café spécialisé dans le trail running. Le lieu propose des boissons saines, de la nourriture équilibrée et organise des événements pour la communauté trail.

## 🛠️ Technologies

- **Next.js 15** - Framework React avec App Router
- **TypeScript** - Typage statique
- **Tailwind CSS** - Framework CSS utilitaire
- **Framer Motion** - Animations fluides
- **Lucide React** - Icônes modernes

## 📁 Structure du Projet

```
cha-ravito/
├── src/
│   ├── app/                 # Pages Next.js (App Router)
│   │   ├── globals.css      # Styles globaux
│   │   ├── layout.tsx       # Layout racine
│   │   ├── page.tsx         # Page d'accueil
│   │   ├── menu/            # Page menu
│   │   ├── events/          # Page événements
│   │   └── contact/         # Page contact
│   ├── components/          # Composants React
│   │   ├── ui/             # Composants UI réutilisables
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   ├── Container.tsx
│   │   │   ├── Hero.tsx
│   │   │   └── IconCard.tsx
│   │   ├── Header.tsx       # En-tête du site
│   │   ├── Footer.tsx       # Pied de page
│   │   ├── Hero.tsx         # Section hero principale
│   │   ├── MenuCard.tsx     # Carte d'item de menu
│   │   └── EventCard.tsx    # Carte d'événement
│   ├── hooks/               # Hooks React personnalisés
│   │   └── useSanityData.ts # Hooks pour les données
│   ├── lib/                 # Utilitaires
│   │   └── utils.ts         # Fonctions utilitaires
│   └── styles/              # Configuration du thème
│       └── theme.ts         # Système de thème centralisé
├── tailwind.config.ts       # Configuration Tailwind
├── next.config.ts           # Configuration Next.js
└── package.json             # Dépendances
```

## 🎨 Système de Design

### Couleurs
- **Bleu** (`primary`) : Couleur principale, moderne et fiable
- **Vert** (`secondary`) : Nature, santé, bien-être
- **Ambre** (`accent`) : Énergie, chaleur, convivialité

### Composants UI
- **Button** : Boutons avec variantes (primary, secondary, outline)
- **Card** : Cartes avec ombres et bordures
- **Container** : Conteneurs responsifs
- **Hero** : Sections hero réutilisables
- **IconCard** : Cartes avec icônes

## 🚀 Installation

```bash
# Cloner le projet
git clone [url-du-repo]
cd cha-ravito

# Installer les dépendances
npm install

# Démarrer le serveur de développement
npm run dev
```

Le site sera accessible sur `http://localhost:3000`

## 📄 Pages Disponibles

### 🏠 Page d'Accueil (`/`)
- Hero section avec titre dynamique
- Features avec icônes (boissons, nutrition, événements)
- Design responsive et animations

### 🍽️ Page Menu (`/menu`)
- Section boissons (smoothies, cafés, jus, récupération)
- Section nourriture (bowls, wraps, snacks, salades)
- Cartes avec prix et descriptions
- États de chargement

### 📅 Page Événements (`/events`)
- Liste des événements trail
- Section communauté
- Newsletter signup
- Filtrage par type d'événement

### 📞 Page Contact (`/contact`)
- Informations de contact
- Formulaire de contact
- Horaires d'ouverture
- Carte interactive (placeholder)

## ✨ Fonctionnalités

### 🎯 Design
- **Responsive** : Mobile-first, tablet, desktop
- **Animations** : Transitions fluides avec Framer Motion
- **Accessibilité** : Navigation clavier, contrastes appropriés
- **Performance** : Optimisé avec Next.js 15

### 🧩 Composants
- **Modulaires** : Réutilisables et configurables
- **Typés** : TypeScript pour la sécurité
- **Optimisés** : Lazy loading, code splitting

### 📱 Responsive
- **Mobile** : 375px - 768px
- **Tablet** : 768px - 1024px
- **Desktop** : 1024px+

## 🚀 Déploiement

### Vercel (Recommandé)
```bash
# Installer Vercel CLI
npm i -g vercel

# Déployer
vercel
```

### Autres Plateformes
- **Netlify** : Compatible Next.js
- **Railway** : Déploiement simple
- **VPS** : Configuration manuelle

## 🔧 Scripts Disponibles

```bash
npm run dev      # Serveur de développement
npm run build    # Build de production
npm run start    # Serveur de production
npm run lint     # Vérification du code
```

## 📊 Optimisations

### Performance
- **Images optimisées** : Next.js Image component
- **Code splitting** : Chargement à la demande
- **Bundle analysis** : Monitoring de la taille
- **Caching** : Headers appropriés

### SEO
- **Meta tags** : Titres et descriptions
- **Structured data** : Données structurées
- **Sitemap** : Génération automatique
- **Open Graph** : Partage social

## 🤝 Contribution

1. **Fork** le projet
2. **Créer** une branche feature
3. **Commiter** les changements
4. **Pousser** vers la branche
5. **Ouvrir** une Pull Request

## 📝 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

---

**Cha Ravito** - Le lieu idéal pour les passionnés de trail ! 🏃‍♀️☕
