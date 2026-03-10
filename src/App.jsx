import React from 'react';
import MatchCard from './components/MatchCard/MatchCard';
function App() {
  
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
      "score": { "fullTime": { "home": 2, "away": 1 } } // Faux score pour l'exemple
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
    // Fond global de l'appli correspondant à "background-dark"
    <div className="min-vh-100 p-4" style={{ backgroundColor: '#0f231a', fontFamily: "'Lexend', sans-serif" }}>
      <div className="container-fluid">
        
        <h2 className="fw-bold mb-4 text-white">Matches Today</h2>
        
        {/* GRILLE RESPONSIVE BOOTSTRAP */}
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          
          {matchesData.map((match, index) => (
            <div className="col" key={index}>
              <MatchCard match={match} />
            </div>
          ))}

        </div>

      </div>
    </div>
  );
}

export default App;