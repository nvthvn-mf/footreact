## Roadmap Sprint 1 Semaine : Projet FootReact

**_Jour 1 : Fondations et Architecture (Le socle)_**  
**Objectif :** Avoir un projet qui tourne, sur lequel tout le monde peut push son code, avec les outils de base prêts.

- **Tâche 1.1 : Initialisation du projet** (Vite + React, Tailwind CSS, création du repo GitHub/GitLab).
  - _Assignation :_ Dev A
  - _Dépendance :_ Aucune.
- **Tâche 1.2 : Mise en place du Routage** (React Router avec des pages vides : Accueil, Ligues, Classements, Équipe).
  - _Assignation :_ Dev B
  - _Dépendance :_ Tâche 1.1.
- **Tâche 1.3 : Configuration du service API & Proxy** (Créer l'instance Axios/Fetch, configurer la clé API football-data.org, et idéalement un petit proxy ou serveur Vite pour éviter les erreurs CORS).
  - _Assignation :_ Dev C
  - _Dépendance :_ Tâche 1.1.

**_Jour 2 : L'Accueil & Les Matchs du jour_**  
**Objectif :** Avoir une page d'accueil qui affiche les matchs d'aujourd'hui.

- **Tâche 2.1 : UI Layout & Carte de Match** (Créer la Navbar, le Footer, et le composant visuel d'un match : Équipe 1 vs Équipe 2, score, heure) -> _Utiliser des fausses données en dur pour l'instant._
  - _Assignation :_ Dev B
  - _Dépendance :_ Tâche 1.1.
- **Tâche 2.2 : Appels API Matchs** (Créer la fonction qui fetch les matchs du jour depuis l'API et formate les données).
  - _Assignation :_ Dev C
  - _Dépendance :_ Tâche 1.3.
- **Tâche 2.3 : Intégration Matchs** (Connecter les données de la Tâche 2.2 dans le composant de la Tâche 2.1).
  - _Assignation :_ Dev A
  - _Dépendance :_ Tâches 2.1 et 2.2 (C'est ici que les travaux se rejoignent).

**_Jour 3 : Les Compétitions et le Classement_**  
**Objectif :** Pouvoir naviguer vers une ligue (ex: Ligue 1) et voir son tableau de classement.

- **Tâche 3.1 : UI Tableau de Classement** (Créer un composant tableau stylisé avec rang, logo équipe, nom, points, diff de buts) -> _Faites-le avec des données factices._
  - _Assignation :_ Dev B
  - _Dépendance :_ Tâche 1.1.
- **Tâche 3.2 : Appels API Compétitions & Competitions** (Créer les fonctions pour récupérer les classements d'une ligue spécifique).
  - _Assignation :_ Dev C
  - _Dépendance :_ Tâche 1.3.
- **Tâche 3.3 : Page Ligue & Intégration** (Créer la page qui affiche le sélecteur de ligues et intègre le tableau de classement réel).
  - _Assignation :_ Dev A
  - _Dépendance :_ Tâches 3.1, 3.2 et 1.2.

**_Jour 4 : Détails des Équipes & Buteurs_**  
**Objectif :** Rendre les équipes cliquables pour voir leurs infos détaillées et afficher les top buteurs.

- **Tâche 4.1 : UI Page Équipe & Top Buteurs** (Design de la page d'une équipe avec son effectif, et design d'une liste de meilleurs buteurs).
  - _Assignation :_ Dev B
  - _Dépendance :_ Tâche 1.1.
- **Tâche 4.2 : Appels API Équipe & Buteurs** (Fonctions pour récupérer l'effectif d'une équipe via son ID et les top scorers d'une ligue).
  - _Assignation :_ Dev C
  - _Dépendance :_ Tâche 1.3.
- **Tâche 4.3 : Routage dynamique & Intégration** (Faire en sorte que cliquer sur une équipe dans le classement amène vers /team/:id avec les vraies données).
  - _Assignation :_ Dev A
  - _Dépendance :_ Tâches 4.1, 4.2 et 3.3.

**_Jour 5 : Optimisation & Limites d'API (Très important)_**  
**Objectif :** L'API gratuite limite à ~10 requêtes/minute. Si vous ne gérez pas ça, l'app va crasher (Erreur 429 Too Many Requests). Il faut protéger l'app.

- **Tâche 5.1 : Mise en cache (Caching)** (Implémenter React Query, ou simplement stocker les résultats de l'API dans le localStorage ou dans un état global (Zustand/Context) pour ne pas refaire l'appel API si on change de page).
  - _Assignation :_ Dev C & Dev A
  - _Dépendance :_ Toutes les tâches API.
- **Tâche 5.2 : Gestion des erreurs et Loaders** (Créer de beaux "Skeletons" de chargement et des messages d'erreur "Veuillez patienter" si la limite d'API est atteinte).
  - _Assignation :_ Dev B
  - _Dépendance :_ Toutes les UI.

**_Jour 6 : Anticipation V2 ou "Polishing"_**  
**Objectif :** Préparer le terrain pour Supabase ou peaufiner l'app existante.

- **Tâche 6.1 (Bonus) : Sauvegarde Locale des Favorites** (Permettre de cliquer sur une étoile à côté d'une équipe pour l'ajouter en favori dans le localStorage du navigateur. C'est la première étape avant Supabase).
  - _Assignation :_ Dev A
  - _Dépendance :_ Tâche 4.3.
- **Tâche 6.2 (Bonus) : Setup Supabase** (Créer le projet Supabase, installer le client JS, préparer la page de Login/Signup avec de la simple UI).
  - _Assignation :_ Dev C
  - _Dépendance :_ Tâche 1.1.
- **Tâche 6.3 : Responsive Mobile** (S'assurer que toute l'app est parfaite sur téléphone, car 90% des apps de foot sont utilisées sur mobile).
  - _Assignation :_ Dev B
  - _Dépendance :_ Toutes les UI.

**_Jour 7 : Déploiement et Tests_**  
**Objectif :** Mettre le site en ligne et chasser les bugs.

- **Tâche 7.1 : Tests croisés** (Dev A teste le travail de Dev B, Dev B teste Dev C, etc. pour trouver les bugs).
  - _Assignation :_ Toute l'équipe
- **Tâche 7.2 : Déploiement** (Héberger le frontend sur Vercel ou Netlify, et configurer les variables d'environnement pour la clé API).
  - _Assignation :_ Dev A ou C
- **Tâche 7.3 : Préparation de la démo / Nettoyage du code** (Supprimer les console.log, rédiger un beau README.md sur Github).
  - _Assignation :_ Toute l'équipe

## 💡 Conseils d'organisation pour votre groupe :

1. **Mockez vos données au début :** Pour que le Dev B (UI) ne soit jamais bloqué par le Dev C (API), faudrait copier-coller un résultat JSON de l'API football-data.org dans un fichier mockData.json. Le Dev B construira ses interfaces autour de ce fichier statique.
2. **Faire des Daily Stand-ups :** Chaque matin, faisons un appel de 10 minutes. 3 questions : _Qu'est-ce que j'ai fait hier ? Qu'est-ce que je fais aujourd'hui ? Est-ce que je suis bloqué par quelqu'un ?_
3. **Git Branches :** Ne codez pas tous sur la branche main. Créez des branches par fonctionnalité (ex: feature/navbar, api/fetch-matches) et faites des Pull Requests (PR).
