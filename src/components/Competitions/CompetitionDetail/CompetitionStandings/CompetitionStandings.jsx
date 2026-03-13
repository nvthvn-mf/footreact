import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import { fetchCompetitionStandings } from '../../../../services/FootballService.jsx';
import FullStandingRow from './FullStandingRow.jsx';
import './CompetitionStandings.css';
import CompetitionHeader from "./CompetitionHeader.jsx";
import {usePDF} from "react-to-pdf";
import CompetitionDetailNavBar from "../CompetitionDetailNavBar/CompetitionDetailNavBar.jsx";

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

    const { toPDF, targetRef } = usePDF({
        filename: 'page.pdf',
        page: {
            margin: 10,
            format: 'a4',
            orientation: 'landscape'
        },
        canvas: {
            useCORS: true // Autorise le téléchargement des images (logos) depuis l'API externe
        }
    });

    return (
        <div className="competitions-page-container p-4 flex-grow-1 h-100 overflow-auto">
            <div
                ref={targetRef}
                style={{ backgroundColor: '#0f231a', padding: '10px' }} // Fond sombre pour le PDF
            >

                {/* En-tête */}
                <CompetitionHeader
                    competitionName={competition.name}
                    competitionEmblem={competition.emblem}
                    startYear={startYear}
                    endYear={endYear}
                    onExport={() => toPDF()}
                />

                <div className="mb-4" data-html2canvas-ignore="true">
                    <CompetitionDetailNavBar />
                </div>

                {/* Le Tableau */}
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
            </div>
        </div>
    );
};

export default CompetitionStandings;