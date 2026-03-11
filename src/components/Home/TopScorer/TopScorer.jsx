// TopScorer/TopScorer.jsx
import React from 'react';
import './TopScorer.css';
import competitionTopScorer from '../../../mockData/competitionTopScorer.json';

const TopScorer = () => {
    
    // Fonction qui sera déclenchée au clic sur un joueur
    const handlePlayerClick = (playerId, playerName) => {
        console.log(`🔗 Redirection future vers le profil de : ${playerName} (ID: ${playerId})`);
        // Plus tard, tu mettras ici un truc du genre : navigate(`/player/${playerId}`)
    };

    const listTopScorer = competitionTopScorer.scorers.slice(0, 3).map((playerData, index) => {
        const fallbackAvatar = `https://ui-avatars.com/api/?name=${playerData.player.name}&background=162c22&color=00ff88&rounded=true`;

        return (
            // AJOUT : La classe "scorer-row" et l'événement "onClick"
            <div 
                key={playerData.player.id} 
                className="scorer-row d-flex align-items-center gap-3 mb-1"
                onClick={() => handlePlayerClick(playerData.player.id, playerData.player.name)}
            >
                <span className="scorer-rank">{index + 1}</span>

                <div className="scorer-avatar-container">
                    <img 
                        src={fallbackAvatar} 
                        alt={playerData.player.name} 
                        className="scorer-avatar"
                    />
                </div>

                <div className="scorer-info d-flex flex-column">
                    <p className="scorer-name">{playerData.player.name}</p>
                    <p className="scorer-team">{playerData.team.shortName || playerData.team.name}</p>
                </div>

                <span className="scorer-goals">{playerData.goals}</span>
            </div>
        );
    });

    return (
        <div className="top-scorer-wrapper w-100">
            <h3 className="fw-bold text-white mb-3" style={{ fontSize: '1.125rem' }}>
                Top Scorers
            </h3>
            
            <div className="d-flex flex-column">
                {listTopScorer}
            </div>
        </div>
    );
}

export default TopScorer;