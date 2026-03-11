import React from 'react';
import MatchCard from "../MatchCard/MatchCard";
import './Dashboard.css'; 


function Dashboard() {

  const handleDateChange = (event) => {
    console.log("Date sélectionnée :", event.target.value);
  };

  const handleLeagueChange = (event) => {
    console.log("🏆 Ligue sélectionnée :", event.target.value);
  };

  // Fausses données pour l'exemple
  const matchesData = [
    {
      competition: { name: "UEFA Champions League" },
      utcDate: "2026-03-10T17:45:00Z",
      status: "TIMED",
      homeTeam: { shortName: "Galatasaray", crest: "https://crests.football-data.org/610.png" },
      awayTeam: { shortName: "Liverpool", crest: "https://crests.football-data.org/64.png" },
      score: { fullTime: { home: null, away: null } }
    },
    {
      competition: { name: "Championship" },
      utcDate: "2026-03-10T19:45:00Z",
      status: "FINISHED",
      homeTeam: { shortName: "Sheffield Wed", crest: "https://crests.football-data.org/345.png" },
      awayTeam: { shortName: "Watford", crest: "https://crests.football-data.org/346.png" },
      score: { fullTime: { home: 2, away: 1 } }
    },
    {
      competition: { name: "Championship" },
      utcDate: "2026-03-10T19:45:00Z",
      status: "TIMED",
      homeTeam: { shortName: "Wrexham", crest: "https://crests.football-data.org/404.png" },
      awayTeam: { shortName: "Hull City", crest: "https://crests.football-data.org/322.png" },
      score: { fullTime: { home: null, away: null } }
    },
    {
      competition: { name: "UEFA Champions League" },
      utcDate: "2026-03-10T20:00:00Z",
      status: "TIMED",
      homeTeam: { shortName: "Atalanta", crest: "https://crests.football-data.org/102.png" },
      awayTeam: { shortName: "Bayern", crest: "https://crests.football-data.org/5.png" },
      score: { fullTime: { home: null, away: null } }
    }
  ];

  return (
    <div className="container-fluid px-4 px-md-5 py-4 w-100">
      
      {/* === HEADER (Titre + Barre de recherche) === */}
      <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4 mb-5">
        <h2 className="fw-bold m-0 text-white" style={{ fontSize: '1.5rem' }}>Dashboard</h2>
        
        <div className="d-flex align-items-center gap-3">
          {/* Barre de recherche */}
          <div className="search-container d-flex align-items-center">
            <span className="material-symbols-outlined me-2" style={{ color: '#64748b' }}>search</span>
            <input type="text" className="search-input" placeholder="Search teams, leagues, players..." />
          </div>
          
          {/* Bouton Notification */}
          <button className="icon-btn position-relative border-0">
            <span className="material-symbols-outlined">notifications</span>

            <span className="position-absolute top-0 end-0 mt-1 me-1 translate-middle p-1 rounded-circle" style={{ backgroundColor: 'var(--color-primary)' }}></span>
          </button>
          
          {/* Bouton Calendrier Interactif */}
          <label className="icon-btn border-0 m-0 position-relative">
            <span className="material-symbols-outlined">calendar_today</span>
            {/* Input caché qui s'ouvre au clic sur le label */}
            <input 
              type="date" 
              className="position-absolute opacity-0" 
              style={{ width: '100%', height: '100%', cursor: 'pointer', top: 0, left: 0 }}
              onChange={handleDateChange}
            />
          </label>
        </div>
      </header>

      {/* === FILTRES === */}
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5">
        
        {/* Filtres de jours */}
        <div className="filter-group d-flex gap-1">
          <button className="filter-btn">Hier</button>
          <button className="filter-btn active">Aujourd'hui</button>
          <button className="filter-btn">Demain</button>
        </div>
        
        {/* Sélecteur de Ligue (Sort by) */}
        <div className="sort-container d-flex align-items-center gap-2">
          <span className="material-symbols-outlined fs-5">sort</span>
          <select 
            className="custom-select" 
            onChange={handleLeagueChange}
            defaultValue=""
          >
            <option value="" disabled hidden>Sort by: League</option>
            {/* Plus tard, on générera ces options dynamiquement avec l'API */}
            <option value="CL">Champions League</option>
            <option value="PL">Premier League</option>
            <option value="PD">La Liga</option>
            <option value="FL1">Ligue 1</option>
          </select>
        </div>
      </div>

      {/* === SOUS-TITRE MATCHS === */}
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h3 className="fw-bold text-white mb-1" style={{ fontSize: '1.25rem' }}>Matches Today</h3>
          <p className="mb-0" style={{ color: 'var(--color-text-muted)', fontSize: '0.875rem' }}>
            Real-time football updates from around the world
          </p>
        </div>
        
        {/* J'ai remis le petit indicateur vert Live comme sur le design ! */}
        <div className="d-flex align-items-center gap-2">
          <span className="rounded-circle animate-pulse" style={{ width: '8px', height: '8px', backgroundColor: 'var(--color-primary)' }}></span>
          <span className="text-uppercase fw-bold" style={{ fontSize: '0.75rem', color: 'var(--color-primary)', letterSpacing: '0.05em' }}>
           {matchesData.length} Live Now
          </span>
        </div>
      </div>

      {/* === GRILLE DES CARTES === */}
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 pb-5">
        {matchesData.map((match, index) => (
          <div className="col" key={index}>
            <MatchCard match={match} />
          </div>
        ))}
      </div>

    </div>
  );
}

export default Dashboard;