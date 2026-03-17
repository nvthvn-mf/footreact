// Les imports de base (React, hooks, librairies essentielles)
import React from 'react';
import { useLoaderData, useNavigate } from "react-router-dom";

// Tes composants et modules
// Composants enfants
import StandingRow from "./StandingRow.jsx";

// Utilitaires et helpers
import { fetchLigue1Standings } from "../../../services/FootballService.jsx";

// Les styles et assets
import './LeagueStandings.css';


// eslint-disable-next-line react-refresh/only-export-components
export const leagueStandingsLoader = async () => {
    return await fetchLigue1Standings();
};

const LeagueStandings = () => {
    const teams = useLoaderData();
    const navigate = useNavigate();
    const ligue1Id = 2015; // ID de la Ligue 1 dans l'API

    return (
        <div className="standings-container">
            <h4 className="text-white mb-4 fw-bold standings-title">
                Classement Ligue 1
            </h4>

            <div className="p-3 standings-box">
                <table className="table table-borderless align-middle mb-0 standings-table">
                    <thead className="small text-uppercase standings-thead">
                    <tr>
                        <th className="bg-transparent text-white">Pos</th>
                        <th className="bg-transparent text-white">Team</th>
                        <th className="bg-transparent text-center text-white">P</th>
                        <th className="bg-transparent text-center text-white">Pts</th>
                    </tr>
                    </thead>
                    <tbody className="fw-bold">
                    {teams.map((t) => (
                        <StandingRow
                            key={t.id}
                            id={t.id}
                            pos={t.pos}
                            team={t.team}
                            p={t.p}
                            pts={t.pts}
                            compId={ligue1Id}
                        />
                    ))}
                    </tbody>
                </table>
            </div>

            <button
                onClick={() => navigate(`/competitions/${ligue1Id}/classement`)}
                className="btn w-100 mt-4 py-2 text-uppercase fw-bold standings-btn"
            >
                Voir Tableau Entier
            </button>
        </div>
    );
};

export default LeagueStandings;