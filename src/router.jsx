// 1. Les imports de base (React, hooks, librairies essentielles)
import React from "react";
import { createBrowserRouter } from "react-router-dom";

// Composants Parents / Layout
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";

// Composants de Compétition
import Competitions from "./components/Competitions/Competitions.jsx";
import CompetitionDetail from "./components/Competitions/CompetitionDetail/CompetitionDetail.jsx";
import CompetitionStandings from "./components/Competitions/CompetitionDetail/CompetitionStandings/CompetitionStandings.jsx";
import CompetitionTopScorers from "./components/Competitions/CompetitionDetail/CompetitionTopScorers/CompetitionTopScorers.jsx";

// Composants d'Équipes et Matchs
import Teams from "./components/Teams/Teams.jsx";
import Players from "./components/Players/Players.jsx";
import TeamDetails from "./components/Teams/TeamDetails/TeamDetails.jsx";
import {leagueStandingsLoader} from "./components/Home/Standings/LeagueStandings.jsx";
import {
competitionStandingsLoader
} from "./components/Competitions/CompetitionDetail/CompetitionStandings/CompetitionStandings.jsx";
import MatchDetails from "./components/MatchDetails/MatchDetails.jsx";
import PlayerProfile from "./components/Players/PlayerProfile/PlayerProfile.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";

// Utilitaires et helpers (Loaders et Services)
import { competitionDetailLoader } from "./components/Competitions/CompetitionDetail/CompetitionDetail.jsx";
import { matchDetailsLoader } from "./components/MatchDetails/MatchDetails.jsx";
import { playerProfileLoader, topScorersLoader } from "./services/FootballService.jsx";
import CompetitionMatches from "./components/Competitions/CompetitionMatches/CompetitionMatches.jsx";

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
                path: "/favorites",
                element: <Favorites />
            },
            {
                path: "competition/teams",
                element: <Teams />,
            },
            {
                path: "matches/:id",
                element: <MatchDetails/>,
                loader: matchDetailsLoader,
                errorElement: <div className="p-5 text-white">Erreur lors du chargement de la page.</div>
            },
            {
                path: "joueurs/:id",
                element: <PlayerProfile />,
                loader: playerProfileLoader,
                errorElement: <div className="p-5 text-white">Joueur introuvable.</div>
            }


        ],
    },
]);

export default router;