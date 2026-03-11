import React from 'react';
import StandingRow from "./StandingRow.jsx";
import './LeagueStandings.css';

const LeagueStandings = () => {
    const teams = [
        { pos: 1, team: 'Arsenal', p: 31, pts: 74 },
        { pos: 2, team: 'Liverpool', p: 31, pts: 72 },
        { pos: 3, team: 'Man City', p: 31, pts: 71 },
    ];

    return (
        <div className="standings-container">
            <h4 className="text-white mb-4 fw-bold standings-title">
                League Standings
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
                            key={t.pos}
                            pos={t.pos}
                            team={t.team}
                            p={t.p}
                            pts={t.pts}
                            active={t.active}
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