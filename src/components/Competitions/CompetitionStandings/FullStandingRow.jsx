// components/Competitions/CompetitionStandings/FullStandingRow.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';

const FullStandingRow = ({ teamData, isHovered, onMouseEnter, onMouseLeave }) => {
    const { position, team, playedGames, won, draw, lost, goalDifference, points, form } = teamData;
    const navigate = useNavigate();

    const isLeader = position === 1;

    const display = isHovered;

    const renderForm = (formString) => {
        if (!formString) return null;
        return formString.split(',').map((result, index) => {
            let bgColor = '#4F5953';
            if (result === 'W') bgColor = '#52FFA8';
            if (result === 'L') bgColor = '#FF5959';

            return (
                <span
                    key={index}
                    className="rounded-circle d-inline-block mx-1"
                    style={{ width: '8px', height: '8px', backgroundColor: bgColor }}
                ></span>
            );
        });
    };

    const teamNameDisplay = display ? team.name.toUpperCase() : team.name;

    const handleRowClick = () => {
        navigate(`/equipes/${team.id}`);
    };

    return (
        <tr
            className={display ? "leader-row clickable-row" : "standard-row clickable-row"}
            onClick={handleRowClick}
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            style={{ cursor: 'pointer' }}
        >
            <td className="text-center py-3 fw-bold">
                {position}
            </td>
            <td className="py-3">
                <div className="d-flex align-items-center">
                    <div className="bg-white rounded-circle d-flex justify-content-center align-items-center me-3" style={{ width: '32px', height: '32px' }}>
                        <img src={team.crest} alt={team.name} style={{ maxWidth: '20px', maxHeight: '20px' }} />
                    </div>

                    <span className={`fw-bold me-2 ${display ? 'text-dark' : 'text-white'}`}>
                        {teamNameDisplay}
                    </span>

                    {/* L'étoile ne reste QUE pour le vrai leader (position 1) */}
                    {isLeader && <i className="bi bi-star-fill fs-6" style={{ color: '#0c1410' }}></i>}
                </div>
            </td>
            <td className={`text-center py-3 fw-semibold ${display ? 'text-dark' : 'text-white'}`}>{playedGames}</td>
            <td className={`text-center py-3 fw-semibold ${display ? 'text-dark' : 'text-white'}`}>{won}</td>
            <td className={`text-center py-3 fw-semibold ${display ? 'text-dark' : 'text-white'}`}>{draw}</td>
            <td className={`text-center py-3 fw-semibold ${display ? 'text-dark' : 'text-white'}`}>{lost}</td>
            <td className={`text-center py-3 fw-semibold ${display ? 'text-dark' : 'text-white'}`}>{goalDifference > 0 ? `+${goalDifference}` : goalDifference}</td>
            <td className={`text-center py-3 fw-bold fs-5 ${display ? 'text-dark' : 'text-white'}`}>{points}</td>
        </tr>
    );
};

export default FullStandingRow;