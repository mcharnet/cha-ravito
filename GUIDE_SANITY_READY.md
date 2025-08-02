# ✅ Sanity Configuré avec les Schémas Cha Ravito

## 🎯 **Configuration Terminée**

### ✅ **Schémas par défaut remplacés**

**Anciens schémas supprimés :**
- ❌ `postType.ts` - Articles de blog
- ❌ `categoryType.ts` - Catégories
- ❌ `authorType.ts` - Auteurs
- ❌ `blockContentType.ts` - Contenu de bloc

**Nouveaux schémas Cha Ravito :**
- ✅ `menuItem.ts` - Items du menu (boissons et nourriture)
- ✅ `event.ts` - Événements trail
- ✅ `hero.ts` - Section hero principale
- ✅ `contact.ts` - Informations de contact

### ✅ **Configuration mise à jour**

**Project ID :** `t4r4w8my`
**Dataset :** `production`
**Studio accessible sur :** `http://localhost:3333`

## 📋 **Schémas Disponibles**

### 🍽️ **Menu Item**
- **Nom** - Nom du plat/boisson
- **Description** - Description détaillée
- **Prix** - Prix en euros
- **Catégorie** - Smoothies, Cafés, Jus, Récupération, Bowls, Wraps, Snacks, Salades
- **Type** - Boisson ou Nourriture
- **Image** - Photo du plat/boisson
- **Disponible** - Statut de disponibilité

### 📅 **Événement**
- **Titre** - Nom de l'événement
- **Date** - Date de l'événement
- **Heure** - Horaires
- **Lieu** - Localisation
- **Description** - Détails de l'événement
- **Participants** - Nombre de participants
- **Type** - Course, Atelier, Rencontre
- **Image** - Photo de l'événement
- **Actif** - Statut de l'événement

### 🏠 **Hero Section**
- **Titre principal** - Titre de la page d'accueil
- **Sous-titre** - Description courte
- **Description** - Texte détaillé
- **Image de fond** - Image d'arrière-plan
- **Actif** - Statut de la section

### 📞 **Contact**
- **Adresse** - Adresse du bar
- **Téléphone** - Numéro de contact
- **Email** - Adresse email
- **Horaires d'ouverture** - Horaires par jour
- **Réseaux sociaux** - Facebook, Instagram, Twitter

## 🚀 **Prochaines Étapes**

### **1. Lancer le Studio Sanity**
```bash
# Dans le terminal
npm run dev
```

### **2. Accéder au Studio**
- **URL :** `http://localhost:3333`
- **Interface :** Interface d'administration Sanity
- **Fonctionnalités :** Création, édition, suppression de contenu

### **3. Ajouter du contenu**

#### **Créer un item de menu :**
1. Cliquer sur "Menu Item"
2. Cliquer "Create new"
3. Remplir les champs :
   - **Nom :** "Smoothie Trail Mix"
   - **Description :** "Banane, myrtilles, protéines végétales"
   - **Prix :** "8.50€"
   - **Catégorie :** "Smoothies"
   - **Type :** "Boisson"
   - **Disponible :** ✅

#### **Créer un événement :**
1. Cliquer sur "Événement"
2. Cliquer "Create new"
3. Remplir les champs :
   - **Titre :** "Trail du Matin"
   - **Date :** 15 Janvier 2024
   - **Heure :** "7h00 - 9h00"
   - **Lieu :** "Forêt de Fontainebleau"
   - **Description :** "Course matinale de 10km"
   - **Participants :** 25
   - **Type :** "Course"
   - **Actif :** ✅

#### **Configurer la Hero Section :**
1. Cliquer sur "Section Hero"
2. Cliquer "Create new"
3. Remplir les champs :
   - **Titre principal :** "Votre Ravito après l'effort"
   - **Sous-titre :** "Le lieu idéal pour les passionnés de trail"
   - **Description :** "Découvrez notre espace dédié..."
   - **Actif :** ✅

#### **Configurer les contacts :**
1. Cliquer sur "Informations de Contact"
2. Cliquer "Create new"
3. Remplir les champs :
   - **Adresse :** "123 Rue du Trail, 75000 Paris"
   - **Téléphone :** "01 23 45 67 89"
   - **Email :** "contact@charavito.fr"
   - **Horaires :** Ajouter chaque jour

## 🔄 **Vérification**

### **1. Tester le site**
- **URL :** `http://localhost:3000`
- **Vérifier :** Les données apparaissent dynamiquement
- **Pages :** Menu, Événements, Contact

### **2. Vérifier les données**
- **Menu :** Items de menu avec prix et descriptions
- **Événements :** Liste des événements avec dates
- **Contact :** Informations de contact complètes
- **Hero :** Titre et description personnalisés

## 🎯 **Avantages**

### ✅ **Contenu dynamique**
- **Modification en temps réel** via l'interface Sanity
- **Pas de redéploiement** nécessaire pour changer le contenu
- **Interface intuitive** pour votre amie

### ✅ **Gestion complète**
- **Images optimisées** automatiquement
- **Validation des données** intégrée
- **Versioning** des modifications
- **Collaboration** possible

### ✅ **Performance**
- **CDN intégré** pour les images
- **Requêtes optimisées** avec GROQ
- **Cache intelligent** pour les performances

## 📞 **Support**

### **Problèmes courants :**
1. **Studio ne démarre pas** → Vérifier les dépendances
2. **Données ne s'affichent pas** → Vérifier les requêtes GROQ
3. **Images ne se chargent pas** → Vérifier les permissions CORS

### **Commandes utiles :**
```bash
# Redémarrer le studio
npm run dev

# Nettoyer le cache
rm -rf .next

# Vérifier les logs
npm run dev 2>&1 | grep -i sanity
```

---

**🎉 Sanity est maintenant parfaitement configuré pour Cha Ravito !**

Votre amie peut maintenant gérer tout le contenu du site facilement via l'interface Sanity Studio. 
