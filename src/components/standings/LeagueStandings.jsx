import React from 'react';

const LeagueStandings = () => {
    const teams = [
        { pos: 1, team: 'Arsenal', p: 31, pts: 74, active: true },
        { pos: 2, team: 'Liverpool', p: 31, pts: 72, active: false },
        { pos: 3, team: 'Man City', p: 31, pts: 71, active: false },
    ];

    return (
        <div style={{ width: '320px' }}>
            <h4 className="text-white mb-4 fw-bold" style={{ letterSpacing: '0.5px' }}>
                League Standings
            </h4>

            <div className="p-3" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                borderRadius: '20px',
                border: '1px solid rgba(255, 255, 255, 0.1)'
            }}>
                <table className="table table-borderless align-middle mb-0" style={{ color: '#a0aec0' }}>
                    <thead className="small text-uppercase" style={{ opacity: 0.6, fontSize: '0.75rem' }}>
                    <tr>
                        <th className="bg-transparent text-white">Pos</th>
                        <th className="bg-transparent text-white">Team</th>
                        <th className="bg-transparent text-center text-white">P</th>
                        <th className="bg-transparent text-center text-white">Pts</th>
                    </tr>
                    </thead>
                    <tbody className="fw-bold">
                    {teams.map((t) => (
                        <tr key={t.pos}>
                            <td className="bg-transparent text-white py-3">{t.pos}</td>
                            <td className="bg-transparent" style={{ color: '#cbd5e0' }}>{t.team}</td>
                            <td className="bg-transparent text-center text-white">{t.p}</td>
                            <td className="bg-transparent text-center" style={{ color: t.active ? '#00ff85' : '#cbd5e0' }}>
                                {t.pts}
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

            <button className="btn w-100 mt-4 py-2 text-uppercase fw-bold" style={{
                color: '#718096',
                backgroundColor: 'transparent',
                border: '1px solid #2d3748',
                borderRadius: '12px',
                fontSize: '0.8rem',
                letterSpacing: '1px',
                transition: 'all 0.3s ease'
            }}>
                View Full Table
            </button>
        </div>
    );
};

export default LeagueStandings;