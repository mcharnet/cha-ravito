# Le Ravito - Site Vitrine

Site vitrine moderne pour le bar/café "Le Ravito" spécialisé dans le thème du sport, notamment le running.

## 🚀 Fonctionnalités

- **Design moderne et responsive** avec TailwindCSS
- **Architecture atomique** (atomes → molécules → organismes → pages)
- **CMS Sanity** pour la gestion de contenu dynamique
- **Navigation fluide** avec ancres vers les sections
- **Formulaire de réservation** intégré
- **Click & Collect** fonctionnel
- **Carte interactive** avec catégories
- **Intégration Google Maps**
- **SEO optimisé** avec métadonnées complètes
- **Tests unitaires** avec Jest et React Testing Library
- **Tests e2e** avec Playwright
- **Performance optimisée** avec Next.js 15

## 🎨 Design System

### Couleurs principales
- **Orange vif** (`#f97316`) - Couleur principale du logo
- **Bleu clair** (`#60a5fa`) - Couleur secondaire du logo
- **Accent** (`#fbbf24`) - Couleur d'accent

### Typographie
- **Inter** - Police principale
- **Poppins** - Police d'affichage

## 📁 Structure du projet

```
src/
├── app/                    # Pages Next.js
├── components/             # Composants React
│   ├── atoms/             # Composants de base
│   ├── molecules/          # Composants composés
│   └── organisms/          # Sections complètes
├── hooks/                  # Hooks personnalisés
├── lib/                    # Utilitaires et configuration
├── sanity/                 # Schémas Sanity CMS
│   └── schemaTypes/        # Types de contenu
└── tests/                  # Tests
    └── e2e/               # Tests end-to-end
```

## 🛠️ Technologies utilisées

- **Next.js 15** - Framework React
- **TypeScript** - Typage statique
- **TailwindCSS** - Framework CSS
- **Sanity CMS** - Gestion de contenu
- **React Query** - Gestion d'état serveur
- **Framer Motion** - Animations
- **Jest** - Tests unitaires
- **Playwright** - Tests e2e
- **Lucide React** - Icônes

## 🚀 Installation

1. **Cloner le repository**
```bash
git clone https://github.com/votre-username/cha-ravito.git
cd cha-ravito
```

2. **Installer les dépendances**
```bash
npm install
```

3. **Configuration Sanity**
```bash
# Créer un fichier .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=t4r4w8my
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=votre_token_api
```

4. **Lancer le serveur de développement**
```bash
npm run dev
```

5. **Ouvrir le CMS Sanity**
```bash
npm run sanity:dev
```

## 📝 Configuration Sanity

### Schémas de contenu

Le site utilise les schémas Sanity suivants :

- **Hero** - Section d'accueil
- **Reservation** - Formulaire de réservation
- **ClickAndCollect** - Fonctionnalité Click & Collect
- **Menu** - Carte du restaurant
- **MenuItem** - Plats individuels
- **About** - Section à propos
- **Location** - Localisation et contact
- **Contact** - Informations de contact
- **OpeningHours** - Horaires d'ouverture
- **SocialMedia** - Réseaux sociaux
- **Settings** - Paramètres du site

### Ajouter du contenu

1. Accéder au CMS Sanity : `http://localhost:3000/studio`
2. Créer les documents pour chaque section
3. Remplir les champs requis
4. Publier les modifications

## 🧪 Tests

### Tests unitaires
```bash
# Lancer tous les tests
npm test

# Mode watch
npm run test:watch

# Avec couverture
npm run test:coverage
```

### Tests e2e
```bash
# Lancer les tests e2e
npm run test:e2e

# Interface graphique
npm run test:e2e:ui

# Mode debug
npm run test:e2e:debug
```

## 🏗️ Architecture des composants

### Atomes (Composants de base)
- `Button` - Boutons avec variantes
- `Input` - Champs de saisie
- `Textarea` - Zones de texte
- `Card` - Conteneurs
- `LoadingSpinner` - Indicateur de chargement

### Molécules (Composants composés)
- `Navigation` - Navigation principale
- `HeroSection` - Section d'accueil

### Organismes (Sections complètes)
- `ReservationSection` - Formulaire de réservation

## 🎯 Fonctionnalités principales

### 1. Navigation
- Menu responsive avec ancres
- Navigation au clavier
- Smooth scroll vers les sections

### 2. Réservation
- Formulaire complet avec validation
- Intégration avec systèmes externes
- Gestion des disponibilités

### 3. Click & Collect
- Commande en ligne
- Gestion des temps de préparation
- Suivi des commandes

### 4. Carte
- Catégories de plats
- Informations nutritionnelles
- Filtres (végétarien, végan, sans gluten)

### 5. Localisation
- Intégration Google Maps
- Informations d'accessibilité
- Horaires d'ouverture

## 🔧 Configuration avancée

### Variables d'environnement

```env
# Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=t4r4w8my
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=votre_token_api

# Google Maps
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=votre_clé_api

# Analytics
NEXT_PUBLIC_GA_ID=votre_id_google_analytics
```

### Déploiement

#### Vercel (Recommandé)
1. Connecter le repository GitHub
2. Configurer les variables d'environnement
3. Déployer automatiquement

#### Autres plateformes
```bash
# Build de production
npm run build

# Démarrer le serveur de production
npm start
```

## 📊 Performance

- **Lighthouse Score** : 95+ sur tous les critères
- **Core Web Vitals** : Optimisés
- **SEO** : Métadonnées complètes
- **Accessibilité** : WCAG 2.1 AA

## 🤝 Contribution

1. Fork le projet
2. Créer une branche feature (`git checkout -b feature/AmazingFeature`)
3. Commit les changements (`git commit -m 'Add some AmazingFeature'`)
4. Push vers la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 📞 Support

Pour toute question ou support :
- Email : contact@charavito.fr
- GitHub Issues : [Créer une issue](https://github.com/votre-username/cha-ravito/issues)

## 🙏 Remerciements

- [Next.js](https://nextjs.org/) - Framework React
- [Sanity](https://www.sanity.io/) - CMS headless
- [TailwindCSS](https://tailwindcss.com/) - Framework CSS
- [Playwright](https://playwright.dev/) - Tests e2e
- [Jest](https://jestjs.io/) - Tests unitaires 
