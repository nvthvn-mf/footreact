import React, { useState, useEffect } from 'react'; // 1. On importe les hooks nécessaires
import StandingRow from "./StandingRow.jsx";
import './LeagueStandings.css';

const LeagueStandings = ({ leagueCode = 'FL1' }) => {
    const [teams, setTeams] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchStandings = async () => {
        try {
            const response = await fetch(`/api/competitions/${leagueCode}/standings`, {
                headers: {
                    'X-Auth-Token': import.meta.env.VITE_FOOTBALL_API_KEY
                }
            });

            if (!response.ok) {
                throw new Error(`Erreur HTTP: ${response.status}`);
            }

            const data = await response.json();

            const formattedTeams = data.standings[0].table.slice(0, 5).map(item => ({
                pos: item.position,
                team: item.team.shortName,
                p: item.playedGames,
                pts: item.points
            }));

            setTeams(formattedTeams);
            setLoading(false);
        } catch (error) {
            console.error("Erreur lors de la récupération du classement :", error);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchStandings();
    }, [leagueCode]);

    return (
        <div className="standings-container">
            <h4 className="text-white mb-4 fw-bold standings-title">
                Classement Ligue 1
            </h4>

            <div className="p-3 standings-box">
                {loading ? (
                    <div className="text-center text-white p-3">
                        <div className="spinner-border spinner-border-sm text-success me-2" role="status"></div>
                        Chargement...
                    </div>
                ) : (
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
                            />
                        ))}
                        </tbody>
                    </table>
                )}
            </div>

            <button className="btn w-100 mt-4 py-2 text-uppercase fw-bold standings-btn">
                View Full Table
            </button>
        </div>
    );
};

export default LeagueStandings;