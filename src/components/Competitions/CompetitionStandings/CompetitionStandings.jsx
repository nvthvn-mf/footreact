import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchCompetitionStandings } from '../../../services/FootballService';
import FullStandingRow from './FullStandingRow';
import './CompetitionStandings.css';
import CompetitionHeader from "./CompetitionHeader.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const competitionStandingsLoader = async ({ params }) => {
    return await fetchCompetitionStandings(params.id);
};

const CompetitionStandings = () => {
    const data = useLoaderData();
    const [hoveredTeamId, setHoveredTeamId] = useState(null);

    const competition = data.competition;
    const season = data.season;
    const table = data.standings?.[0]?.table || [];

    const startYear = season?.startDate?.substring(0, 4);
    const endYear = season?.endDate?.substring(2, 4);

    return (
        <div className="p-4 flex-grow-1">
            <div className="standings-board p-4 rounded-4">

                {/* En-tête */}
                <CompetitionHeader
                    competitionName={competition.name}
                    startYear={startYear}
                    endYear={endYear}
                />

                {/* Le Tableau */}
                <div className="table-responsive" style={{ overflowX: 'auto' }}>
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
                            <th className="text-center pb-3">Form</th>
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
            </div>
        </div>
    );
};

export default CompetitionStandings;