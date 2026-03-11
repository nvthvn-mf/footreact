import React from 'react';
import './CompetitionCard.css';

const CompetitionCard = ({ competition }) => {
  const { name, emblem, area, plan, type, currentSeason } = competition;
  const currentMatchday = currentSeason ? currentSeason.currentMatchday : 'N/A';

  const getBadgeInfo = () => {
    const today = new Date();
    const startDate = currentSeason ? new Date(currentSeason.startDate) : null;
    const endDate = currentSeason ? new Date(currentSeason.endDate) : null;

    // Prioritize specific competition names for "HIGHLIGHT"
    if (name.includes('Champions League') || name.includes('European Championship') || name.includes('Copa Libertadores') || name.includes('FIFA World Cup')) {
      return { text: 'HIGHLIGHT', className: 'badge-highlight' };
    }

    // Determine ACTIVE/OFF-SEASON/UPCOMING based on current season dates
    if (startDate && endDate) {
      if (today >= startDate && today <= endDate) {
        return { text: 'ACTIVE', className: 'badge-active' };
      } else if (today < startDate) {
        return { text: 'UPCOMING', className: 'badge-upcoming' };
      } else if (today > endDate) {
        return { text: 'OFF-SEASON', className: 'badge-off-season' };
      }
    }

    // Fallback to plan if no specific status or date-based status
    if (plan === 'TIER_ONE') {
      return { text: 'PREMIUM', className: 'badge-tier-one' };
    }
    return { text: 'FREE', className: 'badge-default' };
  };

  const badge = getBadgeInfo();

  return (
    <div className="competition-card d-flex flex-column p-3">
      <div className="d-flex justify-content-between align-items-start mb-3">
        <img src={emblem} alt={`${name} emblem`} className="competition-emblem" />
        {badge.text && (
          <span className={`badge ${badge.className}`}>
            {badge.text}
          </span>
        )}
      </div>
      <h5 className="competition-name text-white mb-1">{name}</h5>

      <p className="competition-area text-white mb-auto"> {/* Revert to text-white */}
        <img src={area.flag} alt={`${area.name} flag`} className="area-flag me-1" />
        {area.name} • {type === 'LEAGUE' ? 'League' : 'Cup'}
      </p>

      {/* Separator */}
      <div className="card-separator my-3"></div>

      <div className="d-flex justify-content-between align-items-center">
        <div>
          <small className="text-white d-block">MATCHDAY</small> {/* Revert to text-white */}
          <span className="text-white fw-bold">{currentMatchday}</span> {/* Added fw-bold */}
        </div>
        <i className="bi bi-arrow-right text-primary fs-4"></i>
      </div>
    </div>
  );
};

export default CompetitionCard;