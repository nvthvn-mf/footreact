import React, { useState } from 'react'; 
import { Link } from 'react-router-dom';
import CompetitionCard from './CompetitionCard/CompetitionCard';
import competitionsData from '../../mockData/competitionsData.json'; 
import './Competitions.css';

const Competitions = () => {
    const allCompetitions = competitionsData.competitions;

    const [activeFilter, setActiveFilter] = useState('all'); // 'all', 'league', 'cup'

    const handleFilterChange = (filterType) => {
        setActiveFilter(filterType);
    };

    const filteredCompetitions = allCompetitions.filter(competition => {
        if (activeFilter === 'all') {
            return true; 
        } else if (activeFilter === 'league') {
            return competition.type === 'LEAGUE';
        } else if (activeFilter === 'cup') {
            return competition.type === 'CUP';
        }
        return true; 
    });

    // Filtrage pour les "Coupes Majeures" (cette section reste séparée)
    const majorCups = allCompetitions.filter(comp => comp.type === 'CUP');


    return (
        <div className="competitions-page d-flex flex-column flex-grow-1 p-4">
            <h2 className="text-white mb-4">Compétitions Mondiales</h2>
            <p className="text-white mb-4">
                Parcourez et analysez des données approfondies des plus grandes scènes de football mondiales.
            </p>

            {/* Section Coupes Majeures (déplacée au-dessus) */}
            {majorCups.length > 0 && (
                <>
                    <h2 className="text-white mt-3 mb-3">Coupes Majeures</h2>
                    <p className="text-white mb-4">
                        Suivi des phases éliminatoires et des tournois de coupe nationaux.
                    </p>
                    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                        {majorCups.map(competition => (
                            <div className="col" key={competition.id}>
                                <CompetitionCard competition={competition} />
                            </div>
                        ))}
                    </div>
                </>
            )}

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
            {/* Suppression de flex-grow-1 et overflow-y-auto ici */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-3">
                {filteredCompetitions.map(competition => (
                    <Link to={`competitions/${competition.id}/classement`}>
                    <div className="col" key={competition.id}>
                        <CompetitionCard competition={competition} />
                    </div>
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default Competitions;