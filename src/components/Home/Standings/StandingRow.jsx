import React from 'react';
import {Link} from "react-router-dom";

const StandingRow = ({ pos, team, p, pts }) => {
    const handleRowClick = () => {
        console.log(`Redirection vers la page de l'équipe : ${team}`);
    };
    return (
        <tr className="standing-row-clickable" onClick={handleRowClick}>
            <td className="bg-transparent text-white py-3">{pos}</td>
            <td className="bg-transparent team-name-cell">
                <Link to={`/equipes/${team.id}`} className="team-link">
                    {team}
                </Link>
            </td>
            <td className="bg-transparent text-center text-white">{p}</td>
            <td className="bg-transparent text-center pts-cell pts-inactive">
                {pts}
            </td>
        </tr>
    )
}

export default StandingRow;