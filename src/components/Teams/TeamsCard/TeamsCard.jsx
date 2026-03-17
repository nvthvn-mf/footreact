import React from 'react';
import { parseClubColors } from "../../../utils/ColorMap.js";
import { useFavorites } from '../../../contexte/FavoritesContext';
import './TeamsCard.css';

const TeamsCard = ({ team, competitionId }) => {
    const { id, name, crest, founded, venue, clubColors, area } = team; 

    // Utilisation de notre hook de favoris
    const { isTeamFavorite, toggleFavoriteTeam } = useFavorites();
    const isFavorite = isTeamFavorite(id);

    const colors = parseClubColors(clubColors);
    const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;

    // Fonction pour gérer le clic sur le coeur
    const handleFavoriteClick = (e) => {
        e.stopPropagation(); // Empêche l'événement de remonter si la carte est cliquable plus tard
        e.preventDefault();
        toggleFavoriteTeam({ ...team, competitionId });
    };

    return (
        <div className="team-card d-flex flex-column p-3" style={{ '--team-gradient': gradient }}>

            <div className="team-card-gradient-bg" />

            <div className="team-card-content d-flex flex-column h-100">

                <div className="d-flex justify-content-between align-items-start mb-3">
                    <img src={crest} alt={`${name} crest`} className="team-emblem" />
                    
                    <div className="d-flex align-items-center gap-2"> {/* Conteneur pour badge et coeur */}
                        <span className="badge badge-colors">
                            {clubColors}
                        </span>
                        {/* Bouton Favori */}
                        <button 
                            onClick={handleFavoriteClick} 
                            className="favorite-btn"
                            aria-label="Toggle favorite team"
                        >
                            <span className="material-symbols-outlined" style={{ color: isFavorite ? 'var(--color-primary)' : 'rgba(255,255,255,0.5)' }}>
                                {isFavorite ? 'favorite' : 'favorite_border'}
                            </span>
                        </button>
                    </div>
                </div>

                <h5 className="team-name mb-1">{name}</h5>

                <p className="team-area mb-auto">
                    {area?.flag && (
                        <img src={area.flag} alt={`${area.name} flag`} className="area-flag me-1" />
                    )}
                    {area?.name} • Since {founded}
                </p>

                <div className="card-separator my-3" />

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <small className="label-muted d-block">STADIUM</small>
                        <span className="fw-bold text-white">{venue}</span>
                    </div>
                    <i className="bi bi-arrow-right fs-4 arrow-icon" />
                </div>
            </div>
        </div>
    );
};

export default TeamsCard;