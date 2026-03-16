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
        if (activeFilter === 'all') return true; 
        if (activeFilter === 'league') return competition.type === 'LEAGUE';
        if (activeFilter === 'cup') return competition.type === 'CUP';
        return true; 
    });

    // Filtrage pour les "Coupes Majeures"
    const majorCups = allCompetitions.filter(comp => comp.type === 'CUP');

    return (
<div className="competitions-page d-flex flex-column p-4">            
            {/* --- NOUVEL EN-TÊTE HERO --- */}
            <div className="competitions-hero">
                <div className="hero-content">
                    <div className="hero-badge">
                        <span className="dot pulse"></span>
                        Données en direct
                    </div>
                    <h1 className="hero-title">
                        Compétitions <span className="text-highlight">Mondiales</span>
                    </h1>
                    <p className="hero-subtitle">
                        Parcourez et analysez des données approfondies des plus grandes scènes de football mondiales. 
                        Suivi en temps réel des statistiques et classements.
                    </p>
                </div>
                <div className="hero-visual">
                    <span className="material-symbols-outlined large-icon">public</span>
                </div>
            </div>

            {/* --- SECTION COUPES MAJEURES --- */}
            {majorCups.length > 0 && (
                <>
                    <h2 className="text-white mt-3 mb-3">Coupes Majeures</h2>
                    <p className="text-muted mb-4">
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

            {/* --- NAVIGATION POUR LES CATÉGORIES (Filtres stylisés) --- */}
            <div className="filter-nav">
                <button
                    className={`filter-btn ${activeFilter === 'all' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('all')}
                >
                    Toutes les Compétitions
                </button>
                <button
                    className={`filter-btn ${activeFilter === 'league' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('league')}
                >
                    Ligues
                </button>
                <button
                    className={`filter-btn ${activeFilter === 'cup' ? 'active' : ''}`}
                    onClick={() => handleFilterChange('cup')}
                >
                    Coupes
                </button>
            </div>

            {/* --- GRILLE DES COMPÉTITIONS FILTRÉES --- */}
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-3">
                {filteredCompetitions.map(competition => (
                    <div className="col" key={competition.id}>
                        <CompetitionCard competition={competition} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Competitions;