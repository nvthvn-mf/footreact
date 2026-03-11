// TopScorer/TopScorer.jsx
import React from 'react';
import './TopScorer.css';
import competitionTopScorer from '../../mockData/competitionTopScorer.json';

const TopScorer = () => {
    const listTopScorer = competitionTopScorer.scorers.slice(0, 3).map((playerData, index) => {
        
        //Si on n'a pas la photo, on génère une image avec les initiales du joueur via l'API ui-avatars,
        // avec nos couleurs (fond sombre, texte vert fluo)
        const fallbackAvatar = `https://ui-avatars.com/api/?name=${playerData.player.name}&background=162c22&color=00ff88&rounded=true`;

        return (
            <div key={playerData.player.id} className="d-flex align-items-center gap-3 mb-3">
                
                {/* 1. Le Rang (Index + 1 car l'index commence à 0) */}
                <span className="scorer-rank">{index + 1}</span>

                {/* 2. L'Avatar du joueur */}
                <div className="scorer-avatar-container">
                    <img 
                        src={fallbackAvatar} 
                        alt={playerData.player.name} 
                        className="scorer-avatar"
                    />
                </div>

                {/* 3. Infos : Nom du joueur & Nom de l'équipe empilés */}
                <div className="scorer-info d-flex flex-column">
                    <p className="scorer-name">{playerData.player.name}</p>
                    {/* On privilégie le shortName de l'équipe s'il existe, pour que ce soit plus joli */}
                    <p className="scorer-team">{playerData.team.shortName || playerData.team.name}</p>
                </div>

                {/* 4. Le nombre de buts */}
                <span className="scorer-goals">{playerData.goals}</span>
                
            </div>
        );
    });

    return (
        <div className="top-scorer-wrapper w-100">
            {/* Titre de la section comme sur le design */}
            <h3 className="fw-bold text-white mb-4" style={{ fontSize: '1.125rem' }}>
                Top Scorers
            </h3>
            
            {/* Conteneur de la liste */}
            <div className="d-flex flex-column">
                {listTopScorer}
            </div>
        </div>
    );
}

export default TopScorer;