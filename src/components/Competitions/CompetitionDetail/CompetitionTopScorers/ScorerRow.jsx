import {useEffect, useState} from "react";
import {fetchPlayerPhoto} from "../../../../services/FootballService.jsx";

const ScorerRow = ({ scorer, position, onSelect }) => {

    const [photo, setPhoto] = useState(null);

    // Chargement asynchrone de la photo TheSportsDB pour chaque ligne
    useEffect(() => {
        const loadPhoto = async () => {
            if (scorer && scorer.player.name) {
                const imgUrl = await fetchPlayerPhoto(scorer.player.name);
                setPhoto(imgUrl);
            }
        };
        loadPhoto();
    }, [scorer]);

    // Avatar de secours
    const playerPhoto = photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(scorer.player.name)}&background=172b22&color=00ff85&bold=true`;

    return (
        <tr
            className="standard-row"
            onClick={() => onSelect(scorer.player.id)}
            style={{ cursor: 'pointer' }} // Change le curseur en petite main
        >
            <td className="text-center py-3 fw-bold">{position}</td>
            <td className="py-3">
                <div className="d-flex align-items-center">
                    <div className="me-3" style={{ width: '36px', height: '36px', flexShrink: 0 }}>
                        <img
                            src={playerPhoto}
                            alt={scorer.player.name}
                            style={{ width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover', border: '1px solid rgba(0,255,133,0.3)' }}
                        />
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