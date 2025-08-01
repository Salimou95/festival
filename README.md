# 📱 Festival App
 
Application mobile développée avec **React Native** et **expo-router** pour présenter les différentes fonctionnalités d’un festival : programmation, plan interactif, filtres par scène, billets et informations pratiques.
 
---
 
## 👥 Composition du groupe
 
- Lucas MACEDO FERNANDES – @Lubi2003
- Salimou DIABY – @Salimou95
- Keziah SAMBA – @KeziahSAMBA
 
---
 
## 🔧 Fonctionnalités implémentées
 
### 🗺️ Plan interactif avec Leaflet / Maps
 
- Intégration d'une carte **Leaflet** grâce à [`react-native-leaflet-view`](https://github.com/Reggie3/react-native-leaflet-view).
- Affichage d’une **carte centrée sur la ville d’Albi** avec **marqueur géolocalisé**.
- Pour la **version web**, l’extension `react-native-leaflet-view` générant des erreurs, une solution alternative a été mise en place avec **[`react-native-maps`](https://github.com/react-native-maps/react-native-maps)**.
- Ainsi, la carte reste fonctionnelle avec pointeur sur toutes les plateformes.
 
### 🎤 Filtrage des artistes par scène
 
- Dans l’écran **Programmation**, affichage de tous les artistes après sélection d'une scène.
- Ajout d’un **champ de saisie** permettant de **filtrer les artistes par leur nom** dynamiquement.
 
### 🧭 Menu déroulant « Comment venir ? »
 
- Utilisation de [`react-native-collapsible`](https://github.com/oblador/react-native-collapsible) pour créer un **menu accordéon**.
- Intégration dans l’écran **Menu** avec une section dédiée aux **modes d’accès au festival** (voiture, transports en commun, etc.).
- Animation fluide pour une meilleure expérience utilisateur.

## ⚠️ Important : configuration de l’API locale

> Pour que l’application fonctionne correctement avec l’API en local, vous devez **remplacer l’adresse IP** dans le fichier suivant :

```
festival/app/(tabs)/programmation.tsx
```

### 📌 Lignes concernées (17 à 19) :

```ts
Promise.all([
  fetch("http://192.168.1.20:3000/programme").then((r) => r.json()),
  fetch("http://192.168.1.20:3000/artists").then((r) => r.json()),
  fetch("http://192.168.1.20:3000/stages").then((r) => r.json()),
])
```

👉 **Remplacez `192.168.1.20` par votre propre adresse IP locale**, visible avec la commande :

```bash
ipconfig   # sur Windows
ifconfig   # sur Mac/Linux
```

Cela permet d'établir la communication avec le backend en local.

---

## 📦 Technologies utilisées
 
- `React Native`
- `expo-router`
- `react-native-leaflet-view`
- `react-native-collapsible`
- `expo-image`
- `@expo/vector-icons`
- `react-native-gesture-handler`
 
---
 
## 🛠️ Lancer le projet en local
 
```bash
# Installer les dépendances
npm install
 
# Démarrer le projet avec Expo
npx expo start
