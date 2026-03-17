import { useNavigate } from "react-router-dom"; // Import du hook de navigation

const StandingRow = ({ pos, team, p, pts, id, compId }) => {
    const navigate = useNavigate();

    const handleRowClick = () => {
        // Redirection programmatique vers l'ID de l'équipe
        navigate(`/competitions/${compId}/equipes/${id}`);
    };

    return (
        <tr className="standing-row-clickable" onClick={handleRowClick}>
            <td className="bg-transparent text-white py-3">{pos}</td>
            <td className="bg-transparent team-name-cell">{team}</td>
            <td className="bg-transparent text-center text-white">{p}</td>
            <td className="bg-transparent text-center pts-cell pts-inactive">
                {pts}
            </td>
        </tr>
    );
};

export default StandingRow;