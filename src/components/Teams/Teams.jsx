import React from 'react';
import PLTeams from '../../mockData/PLTeams.json'
import TeamsCard from "./TeamsCard/TeamsCard.jsx";
import './Teams.css';

const Teams = () => {
    const allTeams = PLTeams.teams;
    return (
        <div className="teams-page d-flex flex-column flex-grow-1 p-4">
            <h2 className="text-white fw-bold mb-4">Équipes</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                {allTeams.map((team, index) => (
                    <div className="col" key={index}>
                        <TeamsCard team={team} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Teams;
