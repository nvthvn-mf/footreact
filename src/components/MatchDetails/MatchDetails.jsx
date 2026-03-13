import React from 'react';
import './MatchDetails.css';
import MatchHeader from './MatchHeader';
import MatchScoreBoard from './MatchScoreBoard';
import MatchH2H from './MatchH2H';
import MatchReferees from './MatchReferees';

import matchData from '../../mockData/matchDetails.json';

function MatchDetails() {
    // Simulation des données du match principal

    return (
        <div className="container-fluid px-4 px-md-5 py-4 w-100 min-vh-100 overflow-auto" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
            <div className="max-w-7xl mx-auto" style={{ maxWidth: '1000px' }}>

                {/* Composant 1 : En-tête */}
                <MatchHeader
                    area={matchData.area}
                    competition={matchData.competition}
                    matchday={matchData.matchday}
                    status={matchData.status}
                />

                {/* Composant 2 : Le grand affichage du score */}
                <MatchScoreBoard
                    homeTeam={matchData.homeTeam}
                    awayTeam={matchData.awayTeam}
                    score={matchData.score}
                    status={matchData.status}
                    utcDate={matchData.utcDate}
                />

                {/* Composant 3 : Head-to-Head (Toute la largeur) */}
                <MatchH2H />

                {/* Composant 4 : Les Arbitres (Toute la largeur en dessous) */}
                <MatchReferees
                    referees={matchData.referees}
                />

            </div>
        </div>
    );
}

export default MatchDetails;