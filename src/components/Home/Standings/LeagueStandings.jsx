import StandingRow from "./StandingRow.jsx";
import './LeagueStandings.css';
import {fetchLigue1Standings} from "../../../services/FootballService.jsx";
import {useLoaderData} from "react-router-dom";

export const leagueStandingsLoader = async () => {
    return await fetchLigue1Standings();
};

const LeagueStandings = () => {
    const teams = useLoaderData();

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
                        />
                    ))}
                    </tbody>
                </table>
            </div>

            <button className="btn w-100 mt-4 py-2 text-uppercase fw-bold standings-btn">
                View Full Table
            </button>
        </div>
    );
};

export default LeagueStandings;