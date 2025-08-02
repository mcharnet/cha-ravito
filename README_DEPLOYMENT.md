# 🚀 Déploiement Rapide - Le Ravito

## Déploiement en 5 minutes

### 1. Préparer le repository
```bash
git add .
git commit -m "Ready for deployment"
git push origin main
```

### 2. Déployer sur Vercel
1. Allez sur [vercel.com](https://vercel.com)
2. Connectez-vous avec GitHub
3. Cliquez "New Project"
4. Importez votre repository `cha-ravito`
5. Cliquez "Deploy"

### 3. Configurer les variables d'environnement
Dans les paramètres Vercel > Environment Variables, ajoutez :

```
NEXT_PUBLIC_SANITY_PROJECT_ID=your-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-27
NEXT_PUBLIC_SITE_URL=https://your-app.vercel.app
```

### 4. Configurer Sanity
1. Créez un projet sur [sanity.io](https://sanity.io)
2. Copiez votre Project ID
3. Mettez à jour la variable `NEXT_PUBLIC_SANITY_PROJECT_ID`

### 5. Vérifier le déploiement
- ✅ Site accessible
- ✅ Studio Sanity sur `/studio`
- ✅ Toutes les pages fonctionnent

---

**Votre site Le Ravito est maintenant en ligne ! 🎉** 
