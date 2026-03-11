import React from 'react';

const Teams = () => {
    return (
        <div className="container-fluid p-4 text-white">
            <h2 className="fw-bold mb-4">Équipes</h2>
            <p className="text-secondary">Recherchez vos clubs préférés...</p>
            {/* C'est ici qu'on fera un fetch sur /competitions/{id}/teams */}
        </div>
    );
};

export default Teams;