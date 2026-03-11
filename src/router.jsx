import { createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import Home from "./components/Home/Home.jsx";
import Standings from "./components/pages/Standings.jsx";
import Teams from "./components/pages/Teams.jsx";
import Players from "./components/pages/Players.jsx";
import Favoris from "./components/pages/Favoris.jsx";
import Profile from "./components/pages/Profile.jsx";

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
                element: <Standings />,
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
                element: <Favoris />,
            },
            {
                path: "actualites",
                element: (
                    <div className="p-4 text-white">
                        <h1>Actualités</h1>
                        <p>Dernières news du monde du foot.</p>
                    </div>
                ),
            },
            {
                path: "profil",
                element: <Profile />
            }
        ],
    },
]);

export default router;