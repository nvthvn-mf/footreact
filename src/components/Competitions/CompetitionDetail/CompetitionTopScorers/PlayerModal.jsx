// 1. Les imports de base
import React, { useEffect, useState } from 'react';

// 2. Utilitaires et helpers
import { fetchPlayerPhoto } from "../../../../services/FootballService.jsx";

// 3. Les styles
import './CompetitionTopScorers.css'; // J'ai isolé le CSS pour que ce soit plus propre

const PlayerModal = ({ scorer, onClose }) => {
    const [photo, setPhoto] = useState(null);

    // On charge la photo en asynchrone pour ne pas bloquer l'affichage
    useEffect(() => {
        const getPhoto = async () => {
            const img = await fetchPlayerPhoto(scorer.player.name);
            setPhoto(img);
        };
        getPhoto();
    }, [scorer.player.name]);

    // Formatage des données
    const dob = new Date(scorer.player.dateOfBirth);
    const age = new Date().getFullYear() - dob.getFullYear();
    const formattedDob = dob.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

    // Avatar de secours
    const avatarUrl = photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(scorer.player.name)}&background=102920&color=00ff88&size=150`;

    return (
        <div className="vortex-modal-overlay" onClick={onClose}>
            <div className="stitch-player-card p-4 rounded-4 shadow-lg position-relative" onClick={e => e.stopPropagation()}>

                {/* Bouton Fermer */}
                <button className="stitch-close-btn position-absolute top-0 end-0 m-3" onClick={onClose}>
                    <span className="material-symbols-outlined fs-5">close</span>
                </button>

                {/* En-tête : Avatar avec effet Néon */}
                <div className="d-flex justify-content-center mt-3 mb-3">
                    <div className="stitch-avatar-glow">
                        <img src={avatarUrl} alt={scorer.player.name} className="stitch-player-img" />
                    </div>
                </div>

                {/* En-tête : Infos du joueur */}
                <div className="text-center mb-4">
                    <h3 className="text-white fw-bold mb-1">{scorer.player.name}</h3>
                    <div className="text-vortex-green small fw-bold text-uppercase letter-spacing-1 mb-2">
                        {scorer.player.position || 'OFFENCE'} • {scorer.player.nationality || 'N/A'}
                    </div>
                    <div className="text-secondary small">
                        Age: {age} • Born: {formattedDob}
                    </div>
                </div>

                {/* Grille des Statistiques */}
                <div className="d-flex gap-3 mb-4">
                    <div className="stitch-stat-box flex-fill text-center py-3 rounded-4">
                        <div className="text-secondary small text-uppercase mb-1 fw-bold letter-spacing-1" style={{fontSize: '10px'}}>Goals</div>
                        <div className="text-white h4 mb-0 fw-bold">{scorer.goals}</div>
                    </div>
                    <div className="stitch-stat-box flex-fill text-center py-3 rounded-4">
                        <div className="text-secondary small text-uppercase mb-1 fw-bold letter-spacing-1" style={{fontSize: '10px'}}>Assists</div>
                        <div className="text-white h4 mb-0 fw-bold">{scorer.assists || '0'}</div>
                    </div>
                    <div className="stitch-stat-box flex-fill text-center py-3 rounded-4">
                        <div className="text-secondary small text-uppercase mb-1 fw-bold letter-spacing-1" style={{fontSize: '10px'}}>Matches</div>
                        <div className="text-white h4 mb-0 fw-bold">{scorer.playedMatches || '0'}</div>
                    </div>
                </div>

                {/* Bannière de l'Équipe */}
                <div className="stitch-team-banner d-flex align-items-center justify-content-between p-3 rounded-4 mb-5">
                    <div className="d-flex align-items-center gap-3">
                        <div className="stitch-crest-bg d-flex justify-content-center align-items-center rounded-3">
                            <img src={scorer.team.crest || `https://ui-avatars.com/api/?name=${scorer.team.name}&background=102920&color=fff`} alt={scorer.team.name} className="stitch-team-crest" />
                        </div>
                        <div>
                            <div className="text-white fw-bold" style={{fontSize: '15px'}}>{scorer.team.name}</div>
                            <div className="text-secondary small" style={{fontSize: '12px'}}>Club</div>
                        </div>
                    </div>
                    <div className="text-end">
                        <div className="text-vortex-green h4 mb-0 fw-bold">{scorer.player.shirtNumber || '-'}</div>
                        <div className="text-vortex-green fw-bold text-uppercase" style={{fontSize: '8px', letterSpacing: '1px'}}>Number</div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default PlayerModal;