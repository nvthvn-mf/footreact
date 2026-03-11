import React from 'react';
import CompetitionCard from './CompetitionCard/CompetitionCard';
import competitionsData from '../../mockData/competitionsData.json'; // Adjust path as needed
import './Competitions.css';

const Competitions = () => {
    // Accède au tableau 'competitions' de l'objet JSON
    const allCompetitions = competitionsData.competitions;

    // Filtrage pour les "Compétitions Mondiales" (toutes les compétitions pour l'instant)
    // Tu pourrais affiner ce filtre si tu veux exclure certains types ou zones
    const globalCompetitions = allCompetitions;

    // Filtrage pour les "Coupes Majeures"
    const majorCups = allCompetitions.filter(comp => comp.type === 'CUP');


    return (
        <div className="competitions-page d-flex flex-column flex-grow-1 p-4">
            <h2 className="text-white mb-4">Compétitions Mondiales</h2>
            <p className="text-muted mb-4">
                Parcourez et analysez des données approfondies des plus grandes scènes de football mondiales.
            </p>

            {/* Navigation pour les catégories - Placeholder pour l'instant */}
            <div className="d-flex gap-3 mb-4">
                <button className="btn btn-primary-outline active">Toutes les Compétitions</button>
                <button className="btn btn-primary-outline">Ligues</button>
                <button className="btn btn-primary-outline">Coupes</button>
                {/* Ajoute d'autres catégories si besoin */}
            </div>

            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 flex-grow-1 overflow-y-auto mb-5">
                {globalCompetitions.map(competition => (
                    <div className="col" key={competition.id}>
                        <CompetitionCard competition={competition} />
                    </div>
                ))}
            </div>

            {/* Section Coupes Majeures */}
            {majorCups.length > 0 && (
                <>
                    <h2 className="text-white mt-5 mb-3">Coupes Majeures</h2>
                    <p className="text-muted mb-4">
                        Suivi des phases éliminatoires et des tournois de coupe nationaux.
                    </p>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
                        {majorCups.map(competition => (
                            <div className="col" key={competition.id}>
                                <CompetitionCard competition={competition} />
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Competitions;