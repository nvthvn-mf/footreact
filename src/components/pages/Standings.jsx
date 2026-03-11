import React from 'react';
import LeagueStandings from '../Standings/LeagueStandings'; // On réutilise ton composant existant

const Standings = () => {
    return (
        <div className="container-fluid p-4 text-white">
            <h2 className="fw-bold mb-4">Classements détaillés</h2>
            <div className="row">
                <div className="col-12 col-md-6">
                    {/* Tu peux passer différents codes de ligue ici plus tard */}
                    <LeagueStandings leagueCode="PL" />
                </div>
            </div>
        </div>
    );
};

export default Standings;