import React from 'react';
import './CompetitionCard.css';

const CompetitionCard = ({ competition }) => {
    // Destructuration mise à jour pour currentMatchday
    const { name, emblem, area, plan, type, currentSeason } = competition;
    const currentMatchday = currentSeason ? currentSeason.currentMatchday : 'N/A';

    // Determine status badge color based on plan
    const getPlanBadgeClass = () => {
        if (plan === 'TIER_ONE') {
            return 'badge-tier-one'; // Utilise une classe spécifique pour TIER_ONE
        }
        // Tu peux ajouter d'autres conditions pour d'autres plans si nécessaire
        return 'badge-default'; // Fallback pour les autres plans
    };

    const getPlanText = () => {
        if (plan === 'TIER_ONE') {
            return 'PREMIUM'; // Ou 'HIGHLIGHT', 'TIER 1'
        }
        // Tu peux ajouter d'autres conditions pour d'autres plans si nécessaire
        return 'FREE'; // Par défaut pour les autres plans
    };

    return (
        <div className="competition-card d-flex flex-column p-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <img src={emblem} alt={`${name} emblem`} className="competition-emblem" />
                {plan && ( // Affiche le badge si un plan est défini
                    <span className={`badge ${getPlanBadgeClass()}`}>
            {getPlanText()}
          </span>
                )}
            </div>
            <h5 className="competition-name text-white mb-1">{name}</h5>

            <p className="competition-area text-muted mb-auto">
                <img src={area.flag} alt={`${area.name} flag`} className="area-flag me-1" />
                {area.name} • {type === 'LEAGUE' ? 'League' : 'Cup'} {/* Utilise le type pour distinguer */}
            </p>
            <div className="d-flex justify-content-between align-items-center mt-3">
                <div>
                    <small className="text-muted d-block">MATCHDAY</small>
                    <span className="text-white">{currentMatchday}</span>
                </div>
                <i className="bi bi-arrow-right text-primary fs-4"></i> {/* Bootstrap icon for arrow */}
            </div>
        </div>
    );
};

export default CompetitionCard;