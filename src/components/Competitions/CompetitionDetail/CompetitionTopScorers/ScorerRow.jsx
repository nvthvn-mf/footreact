import React from 'react';
import { useNavigate } from 'react-router-dom';

const ScorerRow = ({ scorer, position }) => {
    const navigate = useNavigate();

    return (
        <tr
            className="standard-row"
            onClick={() => navigate(`/joueurs/${scorer.player.id}`)}
            style={{ cursor: 'pointer' }} // Change le curseur en petite main
        >
            <td className="text-center py-3 fw-bold">{position}</td>
            <td className="py-3">
                <div className="d-flex align-items-center">
                    <div className="player-mini-avatar me-3">
                        {/* Petite photo optionnelle */}
                    </div>
                    <span>{scorer.player.name}</span>
                </div>
            </td>
            <td className="text-center text-secondary">{scorer.team.name}</td>
            <td className="text-center py-3 text-success fw-bold">
                {scorer.goals} <span className="small text-secondary">({scorer.penalties || 0})</span>
            </td>
            <td className="text-center py-3">{scorer.assists || 0}</td>
        </tr>
    );
};

export default ScorerRow;