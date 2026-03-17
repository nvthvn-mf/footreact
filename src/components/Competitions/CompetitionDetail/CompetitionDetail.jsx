// Les imports de base (React, hooks, librairies essentielles)
import { useLoaderData, Outlet } from 'react-router-dom';

// Les bibliothèques tierces
import { usePDF } from "react-to-pdf";

// Tes composants et modules
// Composants parents/enfants
import CompetitionHeader from "./CompetitionHeader.jsx";
import CompetitionDetailNavBar from "./CompetitionDetailNavBar/CompetitionDetailNavBar.jsx";

// Utilitaires et helpers
import { fetchCompetitionStandings } from "../../../services/FootballService.jsx";

// Les styles et assets
import './CompetitionStandings/CompetitionStandings.css';


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