// 1. Les imports de base (React, hooks, librairies essentielles)
import React from "react";
import { createBrowserRouter } from "react-router-dom";

// 3. Tes composants et modules
// Composants Parents / Layout
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";

// Composants de Compétition
import Competitions from "./components/Competitions/Competitions.jsx";
import CompetitionDetail from "./components/Competitions/CompetitionDetail/CompetitionDetail.jsx";
import CompetitionStandings from "./components/Competitions/CompetitionDetail/CompetitionStandings/CompetitionStandings.jsx";
import CompetitionTopScorers from "./components/Competitions/CompetitionDetail/CompetitionTopScorers/CompetitionTopScorers.jsx";
import CompetitionDetailNavBar from "./components/Competitions/CompetitionDetail/CompetitionDetailNavBar/CompetitionDetailNavBar.jsx";

// Composants d'Équipes et Matchs
import Teams from "./components/Teams/Teams.jsx";
import TeamDetails from "./components/Teams/TeamDetails/TeamDetails.jsx";
import MatchDetails from "./components/MatchDetails/MatchDetails.jsx";

// Composants de Joueurs et Favoris
import Players from "./components/Players/Players.jsx";
import PlayerProfile from "./components/Players/PlayerProfile/PlayerProfile.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import TopScorer from "./components/Home/TopScorer/TopScorer.jsx";

// Utilitaires et helpers (Loaders et Services)
import { leagueStandingsLoader } from "./components/Home/Standings/LeagueStandings.jsx";
import { competitionStandingsLoader } from "./components/Competitions/CompetitionDetail/CompetitionStandings/CompetitionStandings.jsx";
import { competitionDetailLoader } from "./components/Competitions/CompetitionDetail/CompetitionDetail.jsx";
import { matchDetailsLoader } from "./components/MatchDetails/MatchDetails.jsx";
import { playerProfileLoader, topScorersLoader } from "./services/FootballService.jsx";
import CompetitionMatches from "./components/Competitions/CompetitionMatches/CompetitionMatches.jsx";

// 4. Les styles et assets
// (Pas de fichier CSS spécifique importé ici)

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                index: true,
                element: <Home />,
                loader: leagueStandingsLoader,
            },
            {
                path: "competitions",
                element: <Competitions />,
            },
            {
                path: "competitions/:id",
                element: <CompetitionDetail />,
                loader: competitionDetailLoader,
                children: [
                    {
                        path: "classement",
                        element: <CompetitionStandings />,
                        loader: competitionStandingsLoader,
                    },
                    {
                        path: "equipes",
                        element: <Teams />,
                    },
                    {
                        path: "equipes/:teamId",
                        element: <TeamDetails />,
                    },
                    {
                        path: "buteurs",
                        element: <CompetitionTopScorers />,
                        loader: topScorersLoader,
                    },
                    {
                        path: "resultats",
                        element: <div className="p-4 text-white">Résultats à venir</div>,
                    },
                    {
                        path: "calendrier",
                        element: <CompetitionMatches />
                    }
                ]
            },
            {
                path: "equipes",
                element: <Teams />,
            },
            {
                path: "joueurs",
                element: <Players />,
            },
            {
                path: "favoris",
                element: <Favorites />,
            },
            {
                path: "actualites",
                element: (
                    <div className="container-fluid p-4 text-white">
                        <h2 className="fw-bold mb-4">Actualités</h2>
                        <p className="text-secondary">Dernières news du monde du foot.</p>
                    </div>
                ),
            },
            {
                path: "competition/teams",
                element: <Teams />,
            },
            {
                // path: "competition/:name" // Le ":" indique que le name est dynamique
            },
            {
                path: "matches/:id",
                element: <MatchDetails/>,
                loader: matchDetailsLoader,
                errorElement: <div className="p-5 text-white">Erreur lors du chargement de la page.</div> // React Router gère les erreurs automatiquement
            },
            {
                path: "joueurs/:id",
                element: <PlayerProfile />, // Ton nouveau composant designé par Stitch
                loader: playerProfileLoader, // Le loader qui récupère les stats + photo
                errorElement: <div className="p-5 text-white">Joueur introuvable.</div>
            }


        ],
    },
]);

export default router;