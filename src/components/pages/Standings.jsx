import React from 'react';
import LeagueStandings from '../Standings/LeagueStandings'; // On réutilise ton composant existant

const Standings = () => {
    return (
        <div className="container-fluid p-4 text-white">
            <h2 className="fw-bold mb-4">Classements</h2>
            <p className="text-secondary">Suivez l'évolution de vos compétitions.</p>
        </div>
    );
};

export default Standings;