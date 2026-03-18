import React, { createContext, useState, useEffect, useContext } from 'react';

const FavoritesContext = createContext();

//Hook personnalisé pour l'utiliser facilement dans les composants
// eslint-disable-next-line react-refresh/only-export-components
export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
    
    // Initialisation des équipes depuis le localStorage
    const [favoriteTeams, setFavoriteTeams] = useState(() => {
        const saved = localStorage.getItem('favoriteTeams');
        return saved ? JSON.parse(saved) : [];
    });

    // Initialisation des compétitions depuis le localStorage
    const [favoriteCompetitions, setFavoriteCompetitions] = useState(() => {
        const saved = localStorage.getItem('favoriteCompetitions');
        return saved ? JSON.parse(saved) : [];
    });

    // Sauvegarde automatique des équipes est ajoutée/retirée
    useEffect(() => {
        localStorage.setItem('favoriteTeams', JSON.stringify(favoriteTeams));
    }, [favoriteTeams]);

    // Sauvegarde automatique à chaque fois qu'une compétition est ajoutée/retirée
    useEffect(() => {
        localStorage.setItem('favoriteCompetitions', JSON.stringify(favoriteCompetitions));
    }, [favoriteCompetitions]);

    // Fonction pour liker/disliker une équipe
    const toggleFavoriteTeam = (team) => {
        setFavoriteTeams(prev => {
            const isFavorite = prev.some(t => t.id === team.id);
            if (isFavorite) {
                return prev.filter(t => t.id !== team.id); // Retire des favoris
            } else {
                // Ajoute aux favoris
                return [...prev, { id: team.id, name: team.name, crest: team.crest , competitionId: team.competitionId}];
            }
        });
    };

    // Fonction pour liker/disliker une compétition
    const toggleFavoriteCompetition = (competition) => {
        setFavoriteCompetitions(prev => {
            const isFavorite = prev.some(c => c.id === competition.id);
            if (isFavorite) {
                return prev.filter(c => c.id !== competition.id); // Retire des favoris
            } else {
                // Ajoute aux favoris (on adapte les propriétés selon ton API)
                return [...prev, { id: competition.id, name: competition.name, emblem: competition.emblem }];
            }
        });
    };

    // Fonctions utilitaires pour vérifier si un item est déjà liké (pratique pour l'icône de cœur)
    const isTeamFavorite = (teamId) => favoriteTeams.some(t => t.id === teamId);
    const isCompetitionFavorite = (compId) => favoriteCompetitions.some(c => c.id === compId);

    return (
        <FavoritesContext.Provider value={{
            favoriteTeams,
            favoriteCompetitions,
            toggleFavoriteTeam,
            toggleFavoriteCompetition,
            isTeamFavorite,
            isCompetitionFavorite
        }}>
            {children}
        </FavoritesContext.Provider>
    );
};