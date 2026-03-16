import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import FullStandingRow from './FullStandingRow.jsx';
import './CompetitionStandings.css';
import {fetchCompetitionStandings} from "../../../../services/FootballService.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const competitionStandingsLoader = async ({ params }) => {
    return await fetchCompetitionStandings(params.id);
};

const CompetitionStandings = () => {
    const data = useLoaderData();
    const [hoveredTeamId, setHoveredTeamId] = useState(null);

    if (!data.standings || data.standings.length === 0) {
        return (
            <div className="d-flex flex-column align-items-center justify-content-center p-5 mt-4 rounded-4" style={{ backgroundColor: 'rgba(255, 255, 255, 0.05)', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                <span className="material-symbols-outlined text-secondary mb-3" style={{ fontSize: '48px' }}>
                    trophy
                </span>
                <h4 className="text-white fw-bold">Aucun classement classique</h4>
                <p className="text-secondary text-center max-w-500">
                    Cette compétition fonctionne sous forme de matchs à élimination directe (Coupe) ou les données de groupes ne sont pas encore disponibles pour cette saison.
                </p>
            </div>
        );
    }

    // Extraction de la table de classement
    const table = data.standings?.[0]?.table || [];

    return (
        <div className="table-responsive p-3 rounded-4"  >
            <table className="table table-borderless align-middle text-white mb-0 custom-standings-table">
                <thead className="small text-uppercase text-secondary border-bottom border-secondary border-opacity-25">
                <tr>
                    <th className="text-center pb-3">Pos</th>
                    <th className="pb-3">Team</th>
                    <th className="text-center pb-3">MP</th>
                    <th className="text-center pb-3">W</th>
                    <th className="text-center pb-3">D</th>
                    <th className="text-center pb-3">L</th>
                    <th className="text-center pb-3">GD</th>
                    <th className="text-center pb-3">Pts</th>
                </tr>
                </thead>
                <tbody>
                {table.map((teamData) => (
                    <FullStandingRow key={teamData.team.id}
                                     teamData={teamData}
                                     isHovered={hoveredTeamId === teamData.team.id}
                                     onMouseEnter={() => setHoveredTeamId(teamData.team.id)}
                                     onMouseLeave={() => setHoveredTeamId(null)}
                    />
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default CompetitionStandings;