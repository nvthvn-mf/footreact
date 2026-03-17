// Les imports de base (React, hooks, librairies essentielles)
import { useLoaderData } from "react-router-dom";

// Tes composants et modules
// Composants enfants
import MatchHeader from './MatchHeader';
import MatchScoreBoard from './MatchScoreBoard';
import MatchH2H from './MatchH2H';
import MatchReferees from './MatchReferees';

// Utilitaires et helpers
import { get } from '../../services/Network';

// Les styles et assets
import './MatchDetails.css';


// eslint-disable-next-line react-refresh/only-export-components
export const matchDetailsLoader = async ({ params }) => {
    try {
        const [matchData, h2hData] = await Promise.all([
            get(`/matches/${params.id}`),
            get(`/matches/${params.id}/head2head`)
        ]);

        return { matchData, h2hData };
        // eslint-disable-next-line no-unused-vars
    } catch (error) {
        throw new Error("Impossible de charger les données du match.");
    }
};

function MatchDetails() {
    // Simulation des données du match principal
    const { matchData, h2hData } = useLoaderData();

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
                    competition={matchData.competition}
                />

                {/* Composant 3 : Head-to-Head (Toute la largeur) */}
                <MatchH2H data={h2hData}/>

                {/* Composant 4 : Les Arbitres (Toute la largeur en dessous) */}
                <MatchReferees
                    referees={matchData.referees}
                />

            </div>
        </div>
    );
}

export default MatchDetails;