import React from 'react';
import './App.css'
import MatchCard from './components/MatchCard/MatchCard';
import LeagueStandings from './components/standings/LeagueStandings.jsx';

function App() {
  // Les données de ton collègue
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
    // Fond global de l'appli correspondant à "background-dark" de ton collègue
    <div className="min-vh-100 p-4" style={{ backgroundColor: '#0f231a', fontFamily: "'Lexend', sans-serif" }}>
      <div className="container-fluid">
        
        {/* Ligne principale Bootstrap pour séparer l'écran en deux parties */}
        <div className="row g-4">
          
          {/* COLONNE GAUCHE : Matches Today (Code du collègue) */}
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

          {/* COLONNE DROITE : League Standings (Ton code) */}
          <div className="col-12 col-xl-4 d-flex justify-content-xl-end">
             <div> {/* Conteneur optionnel pour aligner */}
                <LeagueStandings />
             </div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default App;