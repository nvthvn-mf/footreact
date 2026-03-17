// Les imports de base (React, hooks, librairies essentielles)
import { Link } from 'react-router-dom';
import { useFavorites } from '../../../contexte/FavoritesContext'; 
import './CompetitionCard.css';

const CompetitionCard = ({ competition }) => {
  const { id, name, emblem, area, plan, type, currentSeason } = competition;
  const currentMatchday = currentSeason ? currentSeason.currentMatchday : 'N/A';
  
  // Utilisation de notre hook de favoris
  const { isCompetitionFavorite, toggleFavoriteCompetition } = useFavorites();
  const isFavorite = isCompetitionFavorite(id);

  const getBadgeInfo = () => {
    const today = new Date();
    const startDate = currentSeason ? new Date(currentSeason.startDate) : null;
    const endDate = currentSeason ? new Date(currentSeason.endDate) : null;

    if (name.includes('Champions League') || name.includes('European Championship') || name.includes('Copa Libertadores') || name.includes('FIFA World Cup')) {
      return { text: 'HIGHLIGHT', className: 'badge-highlight' };
    }

    if (startDate && endDate) {
      if (today >= startDate && today <= endDate) {
        return { text: 'ACTIVE', className: 'badge-active' };
      } else if (today < startDate) {
        return { text: 'UPCOMING', className: 'badge-upcoming' };
      } else if (today > endDate) {
        return { text: 'OFF-SEASON', className: 'badge-off-season' };
      }
    }

    if (plan === 'TIER_ONE') {
      return { text: 'PREMIUM', className: 'badge-tier-one' };
    }
    return { text: 'FREE', className: 'badge-default' };
  };

  const badge = getBadgeInfo();

  // Fonction pour gérer le clic sur le coeur
  const handleFavoriteClick = (e) => {
      e.preventDefault(); // Empêche la navigation du <Link>
      toggleFavoriteCompetition(competition);
  };

  return (
      <Link
          to={`/competitions/${id}/classement`}
          className="competition-card d-flex flex-column p-3 text-decoration-none"
      >
          <div className="d-flex justify-content-between align-items-start mb-3">
              <img src={emblem} alt={`${name} emblem`} className="competition-emblem" />
              
              <div className="d-flex align-items-center gap-2"> {/* Conteneur pour badge et coeur */}
                  {badge.text && (
                      <span className={`badge ${badge.className}`}>
                          {badge.text}
                      </span>
                  )}
                  {/* Bouton Favori */}
                  <button 
                      onClick={handleFavoriteClick} 
                      className="favorite-btn"
                      aria-label="Toggle favorite"
                  >
                      <span className="material-symbols-outlined" style={{ color: isFavorite ? 'var(--color-primary)' : 'var(--color-text-muted)' }}>
                          {isFavorite ? 'favorite' : 'favorite_border'}
                      </span>
                  </button>
              </div>
          </div>

          <h5 className="competition-name text-white mb-1">{name}</h5>

          <p className="competition-area text-white mb-auto">
              <img src={area.flag} alt={`${area.name} flag`} className="area-flag me-1" />
              {area.name} • {type === 'LEAGUE' ? 'League' : 'Cup'}
          </p>

          <div className="card-separator my-3"></div>

          <div className="d-flex justify-content-between align-items-center">
              <div>
                  <small className="text-white d-block">MATCHDAY</small>
                  <span className="text-white fw-bold">{currentMatchday}</span>
              </div>
              <i className="bi bi-arrow-right text-primary fs-4"></i>
          </div>
      </Link>
  );
};

export default CompetitionCard;