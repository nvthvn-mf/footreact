# FootReact

Bienvenue sur le dépôt de **FootReact** !

Il s'agit d'une application web "Single Page" (SPA) moderne, développée en React, qui s'inspire d'applications comme OneFootball. Notre objectif est de fournir aux fans de football une interface claire et rapide pour suivre les matchs, les classements et les statistiques de leurs compétitions favorites.

Les données sont propulsées par l'API REST [football-data.org](https://www.football-data.org/).

> **Note :** Pour plus d'informations sur la vision du projet, la liste détaillée des fonctionnalités et l'architecture prévue, veuillez lire le fichier [FOOTREACT.md](./FOOTREACT.md). Vous trouverez également notre planning de sprint dans [ROADMAP.md](./ROADMAP.md).

---

## Stack Technique

- **Frontend :** React + Vite
- **Routage :** React Router
- **Appels API :** Fetch / Axios
- **Stylisation :** (À définir - ex: Tailwind CSS / CSS Modules)
- **Base de données (V2) :** Supabase

---

## Comment lancer le projet en local

Pour faire tourner ce projet sur votre machine, assurez-vous d'avoir [Node.js](https://nodejs.org/) installé, puis suivez ces étapes :

### 1. Cloner le dépôt

Ouvrez votre terminal et clonez le projet :

```bash
git clone https://github.com/nvthvn-mf/footreact
cd footreact
```

### 2. Installer les dépendances

Installez les paquets Node nécessaires au fonctionnement de React :

```bash
npm install
```

### 3. Configurer la clé API

Avant de lancer l'application, vous aurez besoin d'une clé API gratuite sur [football-data.org](https://www.football-data.org/).

1. Créez un fichier nommé `.env` à la racine du projet.
2. Ajoutez-y votre clé de cette manière :
   ```env
   VITE_FOOTBALL_API_KEY=votre_cle_api_ici
   ```

### 4. Lancer le serveur de développement

Démarrez l'application en mode développement :

```bash
npm run dev
```

L'application sera accessible dans votre navigateur, généralement à l'adresse `http://localhost:5173`.

### Logo

ballon : <a href="https://www.flaticon.com/fr/icones-gratuites/football" title="football icônes">Football icônes créées par Freepik - Flaticon</a>
Home : <a href="https://www.flaticon.com/fr/icones-gratuites/domicile" title="domicile icônes">Domicile icônes créées par Freepik - Flaticon</a>
coupe : <a href="https://www.flaticon.com/fr/icones-gratuites/coupe" title="coupe icônes">Coupe icônes créées par Freepik - Flaticon</a>
loupe : <a href="https://www.flaticon.com/fr/icones-gratuites/loupe" title="loupe icônes">Loupe icônes créées par Ayub Irawan - Flaticon</a>

