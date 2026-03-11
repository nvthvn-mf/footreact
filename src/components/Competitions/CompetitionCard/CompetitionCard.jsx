import React from 'react';
import './CompetitionCard.css';

const CompetitionCard = ({ competition }) => {
    const { name, emblem, area, currentMatchday, status, plan } = competition;

    // Determine status badge color based on status or plan
    const getStatusBadgeClass = () => {
        if (status === 'ACTIVE') {
            return 'badge-active';
        }
        if (status === 'OFF-SEASON') {
            return 'badge-off-season';
        }
        if (plan === 'TIER_ONE') { // Assuming TIER_ONE is for highlighted/premium leagues
            return 'badge-highlight';
        }
        return 'badge-default'; // Fallback
    };

    const getStatusText = () => {
        if (status === 'ACTIVE') {
            return 'ACTIVE';
        }
        if (status === 'OFF-SEASON') {
            return 'OFF-SEASON';
        }
        if (plan === 'TIER_ONE') {
            return 'HIGHLIGHT'; // Or whatever makes sense for TIER_ONE
        }
        return '';
    };


    return (
        <div className="competition-card d-flex flex-column p-3">
            <div className="d-flex justify-content-between align-items-start mb-3">
                <img src={emblem} alt={`${name} emblem`} className="competition-emblem" />
                {status || plan ? (
                    <span className={`badge ${getStatusBadgeClass()}`}>
            {getStatusText()}
          </span>
                ) : null}
            </div>
            <h5 className="competition-name text-white mb-1">{name}</h5>
            <p className="competition-area text-muted mb-auto">
                <img src={area.flag} alt={`${area.name} flag`} className="area-flag me-1" />
                {area.name} • {plan === 'TIER_ONE' ? 'UEFA' : 'FIFA'} {/* Placeholder for league type */}
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