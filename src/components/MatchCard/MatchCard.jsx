import React from 'react';

function MatchCard({ match }) {

  const league = match.competition.name;
  const homeTeam = match.homeTeam;
  const awayTeam = match.awayTeam;
  const homeScore = match.score.fullTime.home;
  const awayScore = match.score.fullTime.away;
  const status = match.status;

  // Formatage de l'heure (ex: "2026-03-10T17:45:00Z" devient "18:45")
  const matchTime = new Date(match.utcDate).toLocaleTimeString([], {
    hour: '2-digit',
    minute: '2-digit'
  });

  const isFinished = status === 'FINISHED';
  const displayStatus = isFinished ? 'FT' : matchTime;

  const colors = {
    surface: '#162c22',
    border: '#223d31',
    textMuted: '#64748b',
    primary: '#00ff88',
    white: '#ffffff',
    bgDark: '#0f231a'
  };

  return (
    <div 
      className="card h-100 shadow-sm transition" 
      style={{ 
        backgroundColor: colors.surface, 
        borderColor: colors.border, 
        color: colors.white, 
        borderRadius: '1rem',
        cursor: 'pointer'
      }}
    >
      <div className="card-body d-flex flex-column p-4">
        
        {/* En-tête : Ligue & Statut */}
        <div className="d-flex justify-content-between align-items-center mb-4">
          <span 
            className="text-uppercase fw-bold text-truncate" 
            style={{ fontSize: '0.65rem', color: colors.textMuted, letterSpacing: '0.05em', maxWidth: '70%' }}
          >
            {league}
          </span>
          <span 
            className="badge rounded-pill" 
            style={{ backgroundColor: colors.bgDark, color: colors.textMuted, border: `1px solid ${colors.border}` }}
          >
            {isFinished ? 'FT' : 'TIMED'}
          </span>
        </div>

        {/* Équipes & Scores */}
        <div className="d-flex flex-column gap-3 mb-4">
          {/* Équipe Domicile */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center" 
                style={{ width: '32px', height: '32px', backgroundColor: colors.bgDark, border: `1px solid ${colors.border}`, padding: '4px' }}
              >
                <img src={homeTeam.crest} alt={homeTeam.shortName} className="img-fluid object-fit-contain" />
              </div>
              <span className="fw-semibold" style={{ fontSize: '0.9rem' }}>{homeTeam.shortName}</span>
            </div>
            <span className="fw-bold fs-5">
              {homeScore !== null ? homeScore : '-'}
            </span>
          </div>

          {/* Équipe Extérieur */}
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center gap-3">
              <div 
                className="rounded-circle d-flex align-items-center justify-content-center" 
                style={{ width: '32px', height: '32px', backgroundColor: colors.bgDark, border: `1px solid ${colors.border}`, padding: '4px' }}
              >
                <img src={awayTeam.crest} alt={awayTeam.shortName} className="img-fluid object-fit-contain" />
              </div>
              <span className="fw-semibold" style={{ fontSize: '0.9rem' }}>{awayTeam.shortName}</span>
            </div>
            <span className="fw-bold fs-5">
              {awayScore !== null ? awayScore : '-'}
            </span>
          </div>
        </div>

        {/* Pied de carte */}
        <div 
          className="d-flex justify-content-between align-items-center mt-auto pt-3" 
          style={{ borderTop: `1px solid ${colors.border}` }}
        >
          <span className="text-uppercase fw-bold" style={{ fontSize: '0.75rem', color: colors.textMuted }}>
            {displayStatus}
          </span>
          <span style={{ color: colors.textMuted }}>→</span>
        </div>

      </div>
    </div>
  );
}

export default MatchCard;