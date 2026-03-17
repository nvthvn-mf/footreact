import {useEffect, useState} from "react";
import {fetchPlayerPhoto} from "../../../../services/FootballService.jsx";

const PodiumItem = ({ scorer, rank, isWinner, onSelect }) => {
    // État pour stocker la vraie photo
    const [photo, setPhoto] = useState(null);

    // Chargement asynchrone de la photo TheSportsDB
    useEffect(() => {
        const loadPhoto = async () => {
            if (scorer && scorer.player.name) {
                const imgUrl = await fetchPlayerPhoto(scorer.player.name);
                setPhoto(imgUrl);
            }
        };
        loadPhoto();
    }, [scorer]);

    if (!scorer) return null;

    const playerPhoto = photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(scorer.player.name)}&background=172b22&color=00ff85&bold=true`;
    return (
        <div
            onClick={() => onSelect(scorer.player.id)}
            className={`podium-item text-white ${isWinner ? 'first' : rank === 2 ? 'second' : 'third'}`}
            style={{ cursor: 'pointer', textDecoration: 'none' }}
        >
            <div className={`player-avatar-wrapper ${isWinner ? 'winner' : ''}`}>
                {isWinner && <div className="winner-icon">★</div>}
                <img src={playerPhoto} alt={scorer.player.name} className="player-img" />
                <span className={`rank-badge ${isWinner ? 'bg-success' : ''}`}>{rank}</span>
            </div>

            <h5 className={`mt-3 mb-0 ${isWinner ? 'fw-bold' : ''}`}>
                {scorer.player.name}
            </h5>

            <p className="text-secondary small">{scorer.team.name}</p>

            <div className={`stats-badge ${isWinner ? 'winner-stats' : 'small'}`}>
                {scorer.goals} BUTS
            </div>
        </div>
    );
};

export default PodiumItem;