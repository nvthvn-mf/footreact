import React from "react";
import "./Dashboard.css";

import DashboardHeader from "../DashboardHeader/DashboardHeader.jsx";
import DashboardFilters from "../DashboardFilters/DashboardFilters.jsx";
import MatchCard from "../MatchCard/MatchCard.jsx";

function Dashboard() {

  const handleDateChange = (event) => {
    console.log("Date sélectionnée :", event.target.value);
  };

  const handleLeagueChange = (event) => {
    console.log("🏆 Ligue sélectionnée :", event.target.value);
  };

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
    }
  ];

  return (
    <div className="container-fluid px-4 px-md-5 py-4 w-100">

      <DashboardHeader onDateChange={handleDateChange} />

      <DashboardFilters onLeagueChange={handleLeagueChange} />

      {/* Section match */}
      <div className="d-flex justify-content-between align-items-end mb-4">
        <div>
          <h3 className="fw-bold text-white mb-1" style={{ fontSize: "1.25rem" }}>
            Liste des Matchs 
          </h3>

          <p
            className="mb-0"
            style={{
              color: "var(--color-text-muted)",
              fontSize: "0.875rem"
            }}
          >
            Actualités footballistiques en temps réel du monde entier
          </p>
        </div>

        <div className="d-flex align-items-center gap-2">
          <span
            className="rounded-circle animate-pulse"
            style={{
              width: "8px",
              height: "8px",
              backgroundColor: "var(--color-primary)"
            }}
          ></span>

          <span
            className="text-uppercase fw-bold"
            style={{
              fontSize: "0.75rem",
              color: "var(--color-primary)",
              letterSpacing: "0.05em"
            }}
          >
            {matchesData.length} Live Now
          </span>
        </div>
      </div>

      {/* Grid */}
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