import React from 'react';
import { useLoaderData, Outlet } from 'react-router-dom';
import './CompetitionStandings/CompetitionStandings.css'; // On garde ton CSS
import { usePDF } from "react-to-pdf";
import CompetitionDetailNavBar from "./CompetitionDetailNavBar/CompetitionDetailNavBar.jsx";
import CompetitionHeader from "./CompetitionHeader.jsx";
import {fetchCompetitionStandings} from "../../../services/FootballService.jsx";


// eslint-disable-next-line react-refresh/only-export-components
export const competitionDetailLoader = async ({ params }) => {
    return await fetchCompetitionStandings(params.id);
};

const CompetitionDetail = () => {
    const data = useLoaderData();
    const competition = data.competition;
    const season = data.season;

    const startYear = season?.startDate?.substring(0, 4);
    const endYear = season?.endDate?.substring(2, 4);

    const { toPDF, targetRef } = usePDF({
        filename: `Classement_${competition.name}.pdf`,
        page: { margin: 10, format: 'a4', orientation: 'landscape' },
    });

    return (
        <div className="competitions-page-container p-4 flex-grow-1 h-100 overflow-auto">
            <div
                ref={targetRef}
                style={{ backgroundColor: '#0f231a', padding: '10px' }}
            >
                {/* 1. Ton En-tête (Fixe pour toutes les pages de la compétition) */}
                <CompetitionHeader
                    competitionName={competition.name}
                    competitionEmblem={competition.emblem}
                    startYear={startYear}
                    endYear={endYear}
                    onExport={() => toPDF()}
                />

                {/* 2. La barre de navigation (Fixe) */}
                <div className="mb-4" data-html2canvas-ignore="true">
                    <CompetitionDetailNavBar />
                </div>

                <Outlet />
            </div>
        </div>
    );
};

export default CompetitionDetail;