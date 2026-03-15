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