import React from 'react';
import './App.css';
import MatchCard from './components/MatchCard/MatchCard';
import LeagueStandings from './components/standings/LeagueStandings.jsx';
// On importe la nouvelle Sidebar
import Sidebar from './components/Sidebar/Sidebar';

const App = () => {
    const matchesData = [
        {
            "competition": { "name": "UEFA Champions League" },
            "utcDate": "2026-03-10T17:45:00Z",
            "status": "TIMED",
            "homeTeam": { "shortName": "Galatasaray", "crest": "https://crests.football-data.org/610.png" },
            "awayTeam": { "shortName": "Liverpool", "crest": "https://crests.football-data.org/64.png" },
            "score": { "fullTime": { "home": null, "away": null } }
        },
        {
            "competition": { "name": "Championship" },
            "utcDate": "2026-03-10T19:45:00Z",
            "status": "FINISHED",
            "homeTeam": { "shortName": "Sheffield Wed", "crest": "https://crests.football-data.org/345.png" },
            "awayTeam": { "shortName": "Watford", "crest": "https://crests.football-data.org/346.png" },
            "score": { "fullTime": { "home": 2, "away": 1 } }
        },
        {
            "competition": { "name": "UEFA Champions League" },
            "utcDate": "2026-03-10T20:00:00Z",
            "status": "TIMED",
            "homeTeam": { "shortName": "Bayern", "crest": "https://crests.football-data.org/5.png" },
            "awayTeam": { "shortName": "Atalanta", "crest": "https://crests.football-data.org/102.png" },
            "score": { "fullTime": { "home": null, "away": null } }
        }
    ];

    return (
        // On utilise "d-flex" pour mettre la Sidebar à côté du contenu
        <div className="d-flex min-vh-100" style={{ backgroundColor: '#0f231a', fontFamily: "'Lexend', sans-serif" }}>

            {/* 1. La Sidebar (fixe à gauche) */}
            <Sidebar />

            {/* 2. Le contenu principal (qui prend le reste de l'espace) */}
            <div className="flex-grow-1 p-4" style={{ overflowY: 'auto' }}>
                <div className="container-fluid">

                    <div className="row g-4">

                        {/* COLONNE GAUCHE : Matches Today */}
                        <div className="col-12 col-xl-8">
                            <h2 className="fw-bold mb-4 text-white">Matches Today</h2>

                            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                                {matchesData.map((match, index) => (
                                    <div className="col" key={index}>
                                        <MatchCard match={match} />
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* COLONNE DROITE : Ton League Standings */}
                        <div className="col-12 col-xl-4 d-flex justify-content-xl-end">
                            <div style={{ width: '100%', maxWidth: '320px' }}>
                                <LeagueStandings />
                            </div>
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
}

export default App;