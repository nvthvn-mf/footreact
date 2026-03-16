import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './PlayerProfile.css';

const PlayerProfile = () => {
    const { person, stats, photo } = useLoaderData();
    const aggregations = stats.aggregations;

    // Fonction pour calculer l'âge
    const age = new Date().getFullYear() - new Date(person.dateOfBirth).getFullYear();

    return (
        <div className="player-profile-page text-white p-4">
            {/* SECTION EN-TÊTE */}
            <div className="player-hero-section d-flex align-items-end mb-5">
                <div className="player-main-img-wrapper">
                    <img src={photo || 'default-player.png'} alt={person.name} className="player-main-img" />
                    <div className="player-number-overlay">{person.shirtNumber || 'N/A'}</div>
                </div>

                <div className="player-main-info ms-4 flex-grow-1">
                    <div className="d-flex gap-2 mb-2">
                        <span className="badge bg-success-soft text-success text-uppercase">{person.position}</span>
                        <span className="text-secondary">| 🏳️ {person.nationality}</span>
                    </div>
                    <h1 className="display-3 fw-bold m-0">{person.name}</h1>
                    <div className="d-flex align-items-center gap-3 mt-2">
                        <img src={person.currentTeam?.crest} width="30" alt="club" />
                        <span className="fs-5">{person.currentTeam?.name}</span>
                    </div>
                    <div className="d-flex gap-4 mt-3 text-secondary border-top border-secondary pt-3 border-opacity-25">
                        <div>ÂGE : <span className="text-white fw-bold">{age}</span></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayerProfile;