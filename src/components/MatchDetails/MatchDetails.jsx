import React from 'react';
import './MatchDetails.css';
import MatchHeader from './MatchHeader';
import MatchScoreBoard from './MatchScoreBoard';
import MatchH2H from './MatchH2H';
import MatchReferees from './MatchReferees';
import { get } from '../../services/Network';
import {useLoaderData} from "react-router-dom";

export const matchDetailsLoader = async ({ params }) => {
    try {
        // params.id correspond à ":id" dans le routeur
        const data = await get(`/matches/${params.id}`);
        return data;
    } catch (error) {
        throw new Error("Impossible de charger les détails du match.");
    }
};

function MatchDetails() {
    // Simulation des données du match principal
    const matchData = useLoaderData();

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