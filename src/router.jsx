import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Competitions from "./components/Competitions/Competitions.jsx";
import Teams from "./components/Teams/Teams.jsx";
import Players from "./components/Players/Players.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import Profile from "./components/Profile/Profile.jsx";
import React from "react";
import CompetitionDetailNavBar
    from "./components/Competitions/CompetitionDetail/CompetitionDetailNavBar/CompetitionDetailNavBar.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />, // App contient la Sidebar et l'Outlet (le Layout)
        children: [
            {
                index: true, // Notion 16 : C'est la page par défaut (Accueil)
                element: <Home />,
            },
            {
                path: "competitions",
                element: <Competitions />,
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
                path: "profil",
                element: <Profile />
            },
            {
                path: "competition/teams",
                element: <Teams />,
            },
            {
               // path: "competition/:name" // Le ":" indique que le name est dynamique
            },
            {
                path : "competitions/name/navBar",
                element: <CompetitionDetailNavBar />
            }

        ],
    },
]);

export default router;