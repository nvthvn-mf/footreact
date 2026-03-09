# Football App

## 1. Fiche Projet : Application Football (Type OneFootball)

- **Nom de code :** FootReact
- **Concept :** Application web "Single Page" (SPA) moderne permettant de suivre les résultats, les calendriers et les classements des principales compétitions de football.
- **Cible :** Fans de football, parieurs amateurs et amateurs de statistiques.
- **Stack Technique Actuelle :** React (Frontend), Fetch/Axios (Appels API), React Router (Navigation), Tailwind CSS ou CSS Modules (Design moderne).
- **Stack Technique Future (V2) :** Supabase (Authentification et Base de données relationnelle).
- **Source de données :** API REST football-data.org.

---

## 2. Fonctionnalités réalisables avec football-data.org (Phase 1)

L'API nous donne accès aux compétitions, matchs, équipes, joueurs et classements. Voici ce que nous pouvons construire dès maintenant :

- **Le Hub des Matchs (Page d'accueil) :** Affichage des matchs du jour. Nous pouvons filtrer par statut : "En direct", "À venir", "Terminés".
- **Explorateur de Compétitions :** Une page listant les grandes ligues (Ligue 1, Premier League, Champions League, etc.) avec leur logo (fourni par l'API).
- **Classements Détaillés :** Tableaux de classement par ligue, incluant les points, matchs joués, victoires, nuls, défaites, et la différence de buts.
- **Fiches d'Équipes :** En cliquant sur une équipe, l'utilisateur découvre son effectif actuel, son entraîneur, son calendrier à venir et ses derniers résultats.
- **Zone des Buteurs :** Un classement des meilleurs buteurs (Top Scorers) pour chaque compétition majeure.
- **Détails d'un Match :** Une vue spécifique pour un match montrant le score, les équipes, la date, le stade et les arbitres (selon la disponibilité des données).

---

## 3. Évolutions avec Supabase (Phase 2)

Une fois que notre application React affiche correctement les données publiques, l'intégration de Supabase la rendra interactive et personnalisée pour chaque utilisateur.

- **Comptes Utilisateurs :** Inscription et connexion via email ou Google.
- **Système de Favoris :** Possibilité de "liker" ou suivre des équipes, des joueurs ou des ligues spécifiques.
- **Dashboard Personnalisé :** Une page d'accueil qui se modifie pour n'afficher que les matchs et actualités des équipes favorites de l'utilisateur connecté.
- **Espace Social :** Un système de commentaires ou de mini-pronostics sur les matchs à venir, stocké dans la base de données Supabase.

---

## 4. Points de vigilance techniques (La réalité du terrain)

- **Les erreurs CORS :** Souvent, football-data.org bloque les requêtes directes depuis un navigateur. Il est fort probable que nous devions créer un petit proxy (par exemple avec les API routes de Next.js, ou un mini serveur Node.js) pour masquer notre clé API et contourner ce blocage.

- **Gestion des limites d'API :** La version gratuite étant limitée, nous devrons utiliser des outils comme React Query (ou gérer intelligemment notre `useEffect`) pour mettre les données en cache et éviter de faire une requête à chaque fois qu'un utilisateur change de page.

- **L'absence d'images d'action :** L'API fournit les écussons des clubs et des compétitions, mais pas de photos de joueurs ou de matchs. Notre design devra s'adapter à une interface très "data-driven" (basée sur la typographie, les couleurs des clubs et de belles interfaces minimalistes).
