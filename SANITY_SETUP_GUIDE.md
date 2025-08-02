# Guide de Configuration Sanity - Le Ravito

## 🎯 Objectif
Activer Sanity CMS pour remplacer les données statiques par des données dynamiques.

## 📋 Étapes de Configuration

### 1. Créer un projet Sanity

1. **Allez sur [sanity.io](https://sanity.io)**
2. **Créez un compte** (si vous n'en avez pas)
3. **Créez un nouveau projet** :
   - Nom : "Le Ravito"
   - Dataset : "production"
   - Template : "Clean project with no predefined schemas"

### 2. Configurer les Variables d'Environnement

Dans votre fichier `.env.local`, ajoutez :

```bash
NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2025-01-27
```

**Pour trouver votre Project ID :**
- Dans votre projet Sanity, allez dans "Settings" > "API"
- Copiez le "Project ID"

### 3. Ajouter du Contenu dans Sanity

#### A. Éléments du Menu

1. **Allez dans votre studio Sanity** (votre-site.com/studio)
2. **Créez des "Menu Item"** avec :
   - **Nom** : "Smoothie Énergie Trail"
   - **Description** : "Banane, myrtilles, protéines végétales et spiruline"
   - **Prix** : "8,50 €"
   - **Catégorie** : "Smoothies"
   - **Type** : "Boisson"
   - **Disponible** : ✅

3. **Ajoutez d'autres éléments** :
   - Café Bio Équitable (Cafés, Boisson)
   - Jus Vert Récupération (Jus, Boisson)
   - Bowl Acaï Post-Trail (Bowls, Nourriture)
   - Sandwich Trail Complet (Wraps, Nourriture)
   - Barres Énergétiques Maison (Snacks, Nourriture)

#### B. Données de Contact

1. **Créez un document "Contact"** avec :
   - **Adresse** : "123 Rue du Trail, 75000 Paris, France"
   - **Téléphone** : "01 23 45 67 89"
   - **Email** : "contact@charavito.fr"
   - **Horaires d'ouverture** :
     - Lundi - Vendredi : 7h - 20h
     - Samedi : 8h - 22h
     - Dimanche : 8h - 18h

#### C. Données du Hero

1. **Créez un document "Hero"** avec :
   - **Titre** : "Votre Ravito après l'effort"
   - **Sous-titre** : "Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante."

#### D. Événements

1. **Créez des "Event"** avec :
   - **Titre** : "Trail du Matin"
   - **Description** : "Course matinale dans les collines"
   - **Date** : "2024-02-15"
   - **Heure** : "07:00"
   - **Lieu** : "Parc de la Butte"
   - **Participants** : 25
   - **Type** : "Course"

### 4. Vérifier l'Intégration

1. **Redémarrez votre serveur de développement** :
   ```bash
   npm run dev
   ```

2. **Vérifiez que les données apparaissent** :
   - Page d'accueil : données du hero
   - Page menu : éléments du menu
   - Page contact : informations de contact
   - Page événements : liste des événements

### 5. Activer les Vraies Requêtes Sanity

Une fois que vous avez configuré Sanity, les hooks utiliseront automatiquement les vraies données au lieu des données statiques.

## 🔧 Dépannage

### Problème : "Sanity non configuré"
- Vérifiez que vos variables d'environnement sont correctes
- Assurez-vous que votre Project ID est valide
- Vérifiez que vous avez du contenu dans Sanity

### Problème : Données ne s'affichent pas
- Vérifiez la console du navigateur pour les erreurs
- Assurez-vous que les documents sont publiés dans Sanity
- Vérifiez que les schémas correspondent aux requêtes

### Problème : Images ne s'affichent pas
- Configurez les domaines d'images dans `next.config.ts`
- Assurez-vous que les images sont uploadées dans Sanity

## 🚀 Déploiement

Après avoir configuré Sanity :

1. **Ajoutez les variables d'environnement** dans Vercel
2. **Redéployez** votre application
3. **Vérifiez** que tout fonctionne en production

---

🎉 **Félicitations ! Votre application Le Ravito utilise maintenant Sanity CMS !** 
