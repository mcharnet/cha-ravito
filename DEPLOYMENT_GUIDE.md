# Guide de Déploiement - Le Ravito

## 🚀 Déploiement sur Vercel (Recommandé)

### 1. Préparation

Votre application Next.js est maintenant prête pour le déploiement ! Voici les étapes à suivre :

### 2. Variables d'Environnement

Créez un fichier `.env.local` à la racine du projet avec les variables suivantes :

```bash
# Variables d'environnement pour Sanity CMS
NEXT_PUBLIC_SANITY_PROJECT_ID=your-sanity-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-27

# URL de votre application (à modifier selon votre domaine)
NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
```

### 3. Déploiement sur Vercel

#### Option A : Déploiement via GitHub (Recommandé)

1. **Poussez votre code sur GitHub** :
   ```bash
   git add .
   git commit -m "Préparation pour le déploiement"
   git push origin main
   ```

2. **Connectez-vous à Vercel** :
   - Allez sur [vercel.com](https://vercel.com)
   - Connectez-vous avec votre compte GitHub
   - Cliquez sur "New Project"
   - Importez votre repository GitHub

3. **Configurez les variables d'environnement** :
   - Dans les paramètres du projet Vercel
   - Allez dans "Environment Variables"
   - Ajoutez toutes les variables du fichier `.env.local`

4. **Déployez** :
   - Vercel détectera automatiquement que c'est un projet Next.js
   - Cliquez sur "Deploy"

#### Option B : Déploiement via CLI Vercel

1. **Installez Vercel CLI** :
   ```bash
   npm i -g vercel
   ```

2. **Connectez-vous** :
   ```bash
   vercel login
   ```

3. **Déployez** :
   ```bash
   vercel
   ```

### 4. Configuration Sanity

1. **Créez un projet Sanity** :
   - Allez sur [sanity.io](https://sanity.io)
   - Créez un nouveau projet
   - Notez votre `Project ID`

2. **Configurez les schémas** :
   - Votre projet est déjà configuré avec les schémas Sanity
   - Accédez à votre studio Sanity via `/studio` sur votre site déployé

3. **Ajoutez du contenu** :
   - Créez des documents dans Sanity
   - Les données apparaîtront automatiquement sur votre site

### 5. Autres Plateformes de Déploiement

#### Netlify
```bash
# Build command
npm run build

# Publish directory
.next
```

#### Railway
- Connectez votre repository GitHub
- Railway détectera automatiquement Next.js

#### DigitalOcean App Platform
- Connectez votre repository GitHub
- Sélectionnez Next.js comme framework

### 6. Vérification Post-Déploiement

Après le déploiement, vérifiez :

1. ✅ La page d'accueil se charge
2. ✅ Les images s'affichent correctement
3. ✅ Les liens de navigation fonctionnent
4. ✅ Le formulaire de contact fonctionne
5. ✅ Le studio Sanity est accessible via `/studio`

### 7. Optimisations Recommandées

1. **Images** :
   - Utilisez des images optimisées
   - Configurez les domaines d'images dans `next.config.ts`

2. **Performance** :
   - Activez la compression gzip
   - Utilisez un CDN pour les assets statiques

3. **SEO** :
   - Ajoutez des meta tags appropriés
   - Configurez un sitemap

### 8. Support

En cas de problème :
- Vérifiez les logs de build dans Vercel
- Testez localement avec `npm run build`
- Consultez la documentation Next.js et Sanity

---

🎉 **Félicitations ! Votre application Le Ravito est maintenant prête pour le déploiement !** 
