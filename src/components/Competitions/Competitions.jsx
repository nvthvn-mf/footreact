import React from 'react';
import LeagueStandings from '../Home/Standings/LeagueStandings.jsx'; // On réutilise ton composant existant

const Competitions = () => {
    return (
        <div className="container-fluid p-4 text-white">
            <h2 className="fw-bold mb-4">Competition</h2>
            <p className="text-secondary">Suivez l'évolution de vos compétitions.</p>
        </div>
    );
};

export default Competitions;