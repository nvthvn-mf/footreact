import React from 'react';

const StandingRow = ({ pos, team, p, pts, active }) => {
    return (
        <tr key={pos}>
            <td className="bg-transparent text-white py-3">{pos}</td>
            <td className="bg-transparent" style={{ color: '#cbd5e0' }}>{team}</td>
            <td className="bg-transparent text-center text-white">{p}</td>
            <td className="bg-transparent text-center" style={{ color: active ? '#00ff85' : '#cbd5e0' }}>
                {pts}
            </td>
        </tr>
    )
}

export default StandingRow;