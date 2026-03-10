import React from 'react';
import './MatchCard.css';

function MatchCard({ match }) {
  const league = match.competition.name;
  const homeTeam = match.homeTeam;
  const awayTeam = match.awayTeam;
  const homeScore = match.score.fullTime.home;
  const awayScore = match.score.fullTime.away;
  const status = match.status;

  const matchTime = new Date(match.utcDate).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const isFinished = status === 'FINISHED';
  const displayStatus = isFinished ? 'FT' : matchTime;

  return (
    <div className="card h-100 shadow-sm match-card">
      <div className="card-body d-flex flex-column p-4">
        
        {/* En-tête : Ligue & Statut */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span className="text-uppercase fw-bold text-truncate match-card-league">
            {league}
          </span>
          <span className="badge rounded-pill match-card-badge">
            {isFinished ? 'FT' : 'TIMED'}
          </span>
        </div>

        {/* Équipes & Scores */}
        <div className="d-flex flex-column gap-3 mb-4">
          {/* Équipe Domicile */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center match-card-logo-container">
                <img src={homeTeam.crest} alt={homeTeam.shortName} className="img-fluid object-fit-contain" />
              </div>
              <span className="fw-semibold match-card-team-name">{homeTeam.shortName}</span>
            </div>
            <span className="fw-bold fs-5">
              {homeScore !== null ? homeScore : '-'}
            </span>
          </div>

          {/* Équipe Extérieur */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div className="rounded-circle d-flex align-items-center justify-content-center match-card-logo-container">
                <img src={awayTeam.crest} alt={awayTeam.shortName} className="img-fluid object-fit-contain" />
              </div>
              <span className="fw-semibold match-card-team-name">{awayTeam.shortName}</span>
            </div>
            <span className="fw-bold fs-5">
              {awayScore !== null ? awayScore : '-'}
            </span>
          </div>
        </div>

        {/* Pied de carte */}
        <div className="d-flex justify-content-between align-items-center mt-auto pt-3 match-card-footer">
          <span className="text-uppercase fw-bold match-card-footer-text">
            {displayStatus}
          </span>
          <span className="match-card-footer-arrow">→</span>
        </div>

      </div>
    </div>
  );
}

export default MatchCard;