// components/Competitions/CompetitionStandings/CompetitionStandings.jsx
import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchCompetitionStandings } from '../../../services/FootballService';
import FullStandingRow from './FullStandingRow';
import './CompetitionStandings.css'; // On va créer ce fichier juste après

// 1. Le Loader
// eslint-disable-next-line react-refresh/only-export-components
export const competitionStandingsLoader = async ({ params }) => {
    return await fetchCompetitionStandings(params.id);
};

// 2. Le Composant
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
                <div className="d-flex justify-content-between align-items-center mb-4">
                    <div className="d-flex align-items-center gap-3">
                        <span className="badge bg-success bg-opacity-25 text-success px-3 py-2 rounded-pill">LIVE</span>
                        <h4 className="text-white m-0 fw-bold">
                            {competition.name} {startYear}/{endYear} Standings
                        </h4>
                    </div>
                    <div className="d-flex gap-2">
                        <button className="btn btn-outline-secondary text-white rounded-pill px-4">
                            <i className="bi bi-download"></i> Export
                        </button>
                    </div>
                </div>

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