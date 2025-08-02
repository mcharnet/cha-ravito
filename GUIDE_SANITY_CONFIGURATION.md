# Guide de Configuration Sanity - Cha Ravito

## 🎯 Configuration Sanity

### ✅ **Étape 1 : Installation des dépendances**

Les dépendances Sanity sont déjà ajoutées au `package.json` :
- `@sanity/client` - Client pour récupérer les données
- `@sanity/image-url` - Gestion des images

### ✅ **Étape 2 : Configuration du client Sanity**

Le fichier `lib/sanity.ts` est configuré avec :
- Client Sanity configuré
- Requêtes GROQ pour récupérer les données
- Gestion des images

### ✅ **Étape 3 : Hooks avec fallback**

Les hooks dans `src/hooks/useSanityData.ts` :
- **Tentent de récupérer** les données depuis Sanity
- **Utilisent des données de fallback** si Sanity n'est pas configuré
- **Gèrent les erreurs** gracieusement

## 🚀 **Configuration Sanity Studio**

### **1. Installer Sanity CLI**

```bash
# Installer Sanity CLI globalement
npm install -g @sanity/cli

# Vérifier l'installation
sanity --version
```

### **2. Créer un projet Sanity**

```bash
# Initialiser un nouveau projet Sanity
npx sanity init

# Répondre aux questions :
# - Project name: cha-ravito
# - Use the default dataset configuration? Yes
# - Project output path: ./sanity-studio
# - Select project template: Clean project with no predefined schemas
```

### **3. Configurer les variables d'environnement**

Créer ou modifier `.env.local` :

```env
# Variables d'environnement Sanity
NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

**Remplacez `votre-project-id` par votre véritable Project ID Sanity.**

### **4. Créer les schémas Sanity**

Créer les fichiers suivants dans `sanity-studio/schemas/` :

#### **`sanity-studio/schemas/menuItem.ts`**
```typescript
export default {
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Nom',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'price',
      title: 'Prix',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Catégorie',
      type: 'string',
      options: {
        list: [
          { title: 'Smoothies', value: 'Smoothies' },
          { title: 'Cafés', value: 'Cafés' },
          { title: 'Jus', value: 'Jus' },
          { title: 'Récupération', value: 'Récupération' },
          { title: 'Bowls', value: 'Bowls' },
          { title: 'Wraps', value: 'Wraps' },
          { title: 'Snacks', value: 'Snacks' },
          { title: 'Salades', value: 'Salades' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Boisson', value: 'boisson' },
          { title: 'Nourriture', value: 'nourriture' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isAvailable',
      title: 'Disponible',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
};
```

#### **`sanity-studio/schemas/event.ts`**
```typescript
export default {
  name: 'event',
  title: 'Événement',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'date',
      title: 'Date',
      type: 'date',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'time',
      title: 'Heure',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'location',
      title: 'Lieu',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'participants',
      title: 'Nombre de participants',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        list: [
          { title: 'Course', value: 'Course' },
          { title: 'Atelier', value: 'Atelier' },
          { title: 'Rencontre', value: 'Rencontre' },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isActive',
      title: 'Actif',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'date',
      media: 'image',
    },
  },
};
```

#### **`sanity-studio/schemas/hero.ts`**
```typescript
export default {
  name: 'hero',
  title: 'Section Hero',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Titre principal',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Sous-titre',
      type: 'text',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'backgroundImage',
      title: 'Image de fond',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'isActive',
      title: 'Actif',
      type: 'boolean',
      initialValue: true,
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'subtitle',
      media: 'backgroundImage',
    },
  },
};
```

#### **`sanity-studio/schemas/contact.ts`**
```typescript
export default {
  name: 'contact',
  title: 'Informations de Contact',
  type: 'document',
  fields: [
    {
      name: 'address',
      title: 'Adresse',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'phone',
      title: 'Téléphone',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'openingHours',
      title: 'Horaires d\'ouverture',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'day',
              title: 'Jour',
              type: 'string',
              options: {
                list: [
                  'Lundi',
                  'Mardi',
                  'Mercredi',
                  'Jeudi',
                  'Vendredi',
                  'Samedi',
                  'Dimanche',
                ],
              },
            },
            {
              name: 'hours',
              title: 'Horaires',
              type: 'string',
            },
          ],
        },
      ],
    },
    {
      name: 'socialMedia',
      title: 'Réseaux sociaux',
      type: 'object',
      fields: [
        {
          name: 'facebook',
          title: 'Facebook',
          type: 'url',
        },
        {
          name: 'instagram',
          title: 'Instagram',
          type: 'url',
        },
        {
          name: 'twitter',
          title: 'Twitter',
          type: 'url',
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'address',
      subtitle: 'phone',
    },
  },
};
```

#### **`sanity-studio/schemas/index.ts`**
```typescript
import menuItem from './menuItem';
import event from './event';
import hero from './hero';
import contact from './contact';

export const schemaTypes = [menuItem, event, hero, contact];
```

### **5. Configurer Sanity Studio**

Modifier `sanity-studio/sanity.config.ts` :

```typescript
import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { visionTool } from '@sanity/vision';
import { schemaTypes } from './schemas';

export default defineConfig({
  name: 'default',
  title: 'Cha Ravito CMS',
  projectId: 'votre-project-id', // Remplacez par votre Project ID
  dataset: 'production',
  basePath: '/studio',
  plugins: [deskTool(), visionTool()],
  schema: {
    types: schemaTypes,
  },
});
```

### **6. Lancer le studio Sanity**

```bash
# Dans le dossier sanity-studio
cd sanity-studio
sanity dev
```

Le studio sera accessible sur : `http://localhost:3333`

## 📝 **Ajouter du contenu**

### **1. Créer des items de menu**

1. Aller sur `http://localhost:3333`
2. Cliquer sur "Menu Item"
3. Créer un nouvel item :
   - **Nom** : "Smoothie Trail Mix"
   - **Description** : "Banane, myrtilles, protéines végétales, lait d'amande"
   - **Prix** : "8.50€"
   - **Catégorie** : "Smoothies"
   - **Type** : "Boisson"
   - **Disponible** : ✅

### **2. Créer des événements**

1. Cliquer sur "Événement"
2. Créer un nouvel événement :
   - **Titre** : "Trail du Matin"
   - **Date** : 15 Janvier 2024
   - **Heure** : "7h00 - 9h00"
   - **Lieu** : "Forêt de Fontainebleau"
   - **Description** : "Course matinale de 10km en forêt, suivie d'un petit-déjeuner récupération au bar."
   - **Participants** : 25
   - **Type** : "Course"
   - **Actif** : ✅

### **3. Configurer la section Hero**

1. Cliquer sur "Section Hero"
2. Créer une nouvelle section :
   - **Titre principal** : "Votre Ravito après l'effort"
   - **Sous-titre** : "Le lieu idéal pour les passionnés de trail : boissons saines, nourriture équilibrée et une communauté vibrante."
   - **Description** : "Découvrez notre espace dédié aux coureurs de trail, où chaque détail est pensé pour votre récupération et votre bien-être."
   - **Actif** : ✅

### **4. Configurer les informations de contact**

1. Cliquer sur "Informations de Contact"
2. Créer une nouvelle entrée :
   - **Adresse** : "123 Rue du Trail, 75000 Paris"
   - **Téléphone** : "01 23 45 67 89"
   - **Email** : "contact@charavito.fr"
   - **Horaires** : Ajouter chaque jour avec ses horaires

## 🔄 **Vérifier les changements**

1. Retourner sur `http://localhost:3000`
2. Rafraîchir les pages
3. Vérifier que le contenu apparaît dynamiquement

## 🚀 **Déploiement**

### **Variables d'environnement pour la production**

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=votre-project-id
NEXT_PUBLIC_SANITY_DATASET=production
```

### **Build de production**

```bash
npm run build
npm start
```

## 🐛 **Dépannage**

### **Problème : Site ne se charge pas**
```bash
# Nettoyer le cache
rm -rf .next
npm run dev
```

### **Problème : Erreurs Sanity**
```bash
# Vérifier les variables d'environnement
echo $NEXT_PUBLIC_SANITY_PROJECT_ID
echo $NEXT_PUBLIC_SANITY_DATASET
```

### **Problème : Studio Sanity ne démarre pas**
```bash
# Réinstaller Sanity CLI
npm uninstall -g @sanity/cli
npm install -g @sanity/cli
```

## 📞 **Support**

Si vous rencontrez des problèmes :
1. Vérifier les logs dans le terminal
2. Contrôler les variables d'environnement
3. Nettoyer le cache Next.js
4. Redémarrer les serveurs

---

**Le site est maintenant prêt avec Sanity CMS intégré !** 🎉 
