// Les imports de base (React, hooks, librairies essentielles)
import { useEffect, useState } from 'react';

// Tes composants et modules
// Utilitaires et helpers (Services)
import { get } from '../../../../services/Network';
import { fetchPlayerPhoto } from "../../../../services/FootballService.jsx";

// Les styles et assets
import './CompetitionTopScorers.css';


const PlayerModal = ({ playerId, onClose }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async () => {
            setLoading(true);
            const person = await get(`/persons/${playerId}`);
            const stats = await get(`/persons/${playerId}/matches?limit=5`);
            const photo = await fetchPlayerPhoto(person.name);
            setData({ person, stats, photo });
            setLoading(false);
        };
        loadData();
    }, [playerId]);

    if (loading) return null; // Ou un petit spinner

    const age = new Date().getFullYear() - new Date(data.person.dateOfBirth).getFullYear();

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content-custom" onClick={e => e.stopPropagation()}>
                <button className="close-btn" onClick={onClose}>&times;</button>

                <div className="player-hero-section d-flex align-items-center">
                    <img src={data.photo || 'default.png'} className="player-modal-img" alt="" />
                    <div className="ms-4">
                        <h2 className="fw-bold">{data.person.name}</h2>
                        <p className="text-success">{data.person.position} | {data.person.nationality}</p>
                        <p>Âge : {age} ans</p>
                    </div>
                </div>
                {/* Tu peux rajouter les stats ici comme dans ton design PlayerProfile */}
            </div>
        </div>
    );
};

export default PlayerModal;