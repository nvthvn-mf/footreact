import React, { useState } from 'react'; // Import useState
import CompetitionCard from './CompetitionCard/CompetitionCard';
import competitionsData from '../../mockData/competitionsData.json'; // Adjust path as needed
import './Competitions.css';

const Competitions = () => {
    // Accède au tableau 'competitions' de l'objet JSON
    const allCompetitions = competitionsData.competitions;

    // État pour gérer le filtre actif
    const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'league', 'cup'

    // Fonction pour gérer le changement de filtre
    const handleFilterChange = (filterType) => {
        setActiveFilter(filterType);
    };

    // Filtrage des compétitions en fonction du filtre actif
    const filteredCompetitions = allCompetitions.filter(competition => {
        if (activeFilter === 'all') {
            return true; // Affiche toutes les compétitions
        } else if (activeFilter === 'league') {
            return competition.type === 'LEAGUE';
        } else if (activeFilter === 'cup') {
            return competition.type === 'CUP';
        }
        return true; // Fallback, devrait afficher toutes les compétitions par défaut
    });

    // Filtrage pour les "Coupes Majeures" (cette section reste séparée)
    const majorCups = allCompetitions.filter(comp => comp.type === 'CUP');


    return (
        <div className="competitions-page d-flex flex-column flex-grow-1 p-4">
            <h2 className="text-white mb-4">Compétitions Mondiales</h2>
            <p className="text-white mb-4">
                Parcourez et analysez des données approfondies des plus grandes scènes de football mondiales.
            </p>
            {/* Navigation pour les catégories */}
            <div className="d-flex gap-3 mb-4">
                <button
                    className={`btn btn-primary-outline ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('all')}
                >
                    Toutes les Compétitions
                </button>
                <button
                    className={`btn btn-primary-outline ${activeFilter === 'league' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('league')}
                >
                    Ligues
                </button>
                <button
                    className={`btn btn-primary-outline ${activeFilter === 'cup' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('cup')}
                >
                    Coupes
                </button>
            </div>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 flex-grow-1 overflow-y-auto mb-3">
                {filteredCompetitions.map(competition => ( // Utilise filteredCompetitions ici
                    <div className="col" key={competition.id}>
                        <CompetitionCard competition={competition} />
                    </div>
                ))}
            </div>

            {/* Section Coupes Majeures (reste inchangée pour l'instant, car elle est une section fixe) */}
            {majorCups.length > 0 && (
                <>
                    <h2 className="text-white mt-3 mb-3">Coupes Majeures</h2>
                    <p className="text-white mb-4">
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