import React from 'react';
import { Link } from 'react-router-dom';
import { useFavorites } from '../../contexte/FavoritesContext';
import './Favorites.css';

const Favorites = () => {
    // On récupère toutes nos données et fonctions depuis le contexte
    const { 
        favoriteTeams, 
        favoriteCompetitions, 
        toggleFavoriteTeam, 
        toggleFavoriteCompetition 
    } = useFavorites();

    return (
        <div className="container-fluid px-4 px-md-5 py-4 w-100 favorites-page">
            
            <div className="d-flex align-items-center gap-3 mb-5">
                <span className="material-symbols-outlined fs-1 text-primary">favorite</span>
                <div>
                    <h2 className="fw-bold m-0 text-white" style={{ fontSize: "1.5rem" }}>
                        Mes Favoris
                    </h2>
                    <p className="text-muted m-0" style={{ fontSize: "0.875rem" }}>
                        Retrouvez ici vos équipes et compétitions préférées
                    </p>
                </div>
            </div>

            {/* --- SECTION COMPÉTITIONS --- */}
            <section className="mb-5">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h3 className="text-white m-0 fs-5">
                        Compétitions <span className="badge-count">{favoriteCompetitions.length}</span>
                    </h3>
                </div>

                {favoriteCompetitions.length === 0 ? (
                    <div className="empty-state">
                        <span className="material-symbols-outlined fs-1 text-muted mb-2">emoji_events</span>
                        <p className="text-muted m-0">Vous n'avez ajouté aucune compétition à vos favoris.</p>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {favoriteCompetitions.map(comp => (
                            <div className="col" key={comp.id}>
                                <div className="favorite-item-card p-3 d-flex align-items-center justify-content-between">
                                    <Link to={`/competitions/${comp.id}/classement`} className="d-flex align-items-center gap-3 text-decoration-none flex-grow-1 overflow-hidden">
                                        <img src={comp.emblem} alt={comp.name} className="favorite-emblem" />
                                        <span className="text-white fw-bold text-truncate">{comp.name}</span>
                                    </Link>
                                    <button 
                                        className="btn btn-link p-0 ms-2 unfavorite-btn"
                                        onClick={() => toggleFavoriteCompetition(comp)}
                                        title="Retirer des favoris"
                                    >
                                        <span className="material-symbols-outlined text-primary">favorite</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

            {/* --- SECTION ÉQUIPES --- */}
            <section className="pb-5">
                <div className="d-flex align-items-center justify-content-between mb-4">
                    <h3 className="text-white m-0 fs-5">
                        Équipes <span className="badge-count">{favoriteTeams.length}</span>
                    </h3>
                </div>

                {favoriteTeams.length === 0 ? (
                    <div className="empty-state">
                        <span className="material-symbols-outlined fs-1 text-muted mb-2">sports_soccer</span>
                        <p className="text-muted m-0">Vous n'avez ajouté aucune équipe à vos favoris.</p>
                    </div>
                ) : (
                    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
                        {favoriteTeams.map(team => (
                            <div className="col" key={team.id}>
                                <div className="favorite-item-card p-3 d-flex align-items-center justify-content-between">
                                    {/* Adapte le lien "/teams/:id" selon la configuration de ton routeur */}
                                    <Link to={`/teams/${team.id}`} className="d-flex align-items-center gap-3 text-decoration-none flex-grow-1 overflow-hidden">
                                        <img src={team.crest} alt={team.name} className="favorite-emblem" />
                                        <span className="text-white fw-bold text-truncate">{team.name}</span>
                                    </Link>
                                    <button 
                                        className="btn btn-link p-0 ms-2 unfavorite-btn"
                                        onClick={() => toggleFavoriteTeam(team)}
                                        title="Retirer des favoris"
                                    >
                                        <span className="material-symbols-outlined text-primary">favorite</span>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </section>

        </div>
    );
};

export default Favorites;