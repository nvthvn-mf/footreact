// Les imports de base (React, hooks, librairies essentielles)
import React from 'react';
import { Link, useParams } from "react-router-dom";

// Tes composants et modules
// Composants enfants
import TeamsCard from "./TeamsCard/TeamsCard.jsx";

// Utilitaires et helpers (Hooks)
import { useFetch } from "../../hooks/useFetch.js";

// Les styles et assets
import './Teams.css';


const Teams = () => {

    const {id: competitionId} = useParams();
    const apiUrl = `/competitions/${competitionId}/teams`;
    const {data, isLoading, error} = useFetch(apiUrl);

    const teams = data ? data.teams : [];

    return (
        <div className="teams-page d-flex flex-column flex-grow-1 p-4">
            <h2 className="text-white fw-bold mb-4">Équipes</h2>


            {isLoading && (
                <div className="text-center p-5">
                    <div
                        className="spinner-border"
                        style={{color: 'var(--color-primary)'}}
                        role="status">
                    </div>
                    <p className="test-white mt-3"> Chargement des équipes en cours...</p>
                </div>
            )}

            { error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {!isLoading && !error && teams.length === 0 && (
                <p className="text-white text-center py-5">
                    Aucune équipe trouvée pour cette compétition.
                </p>
            )}

            {!isLoading && !error && teams.length > 0 && (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                    {teams.map((team) => (
                        <div className="col" key={team.id}>
                            <Link
                                to={`/competitions/${competitionId}/equipes/${team.id}`}
                                style={{ textDecoration: "none" }}>
                                <TeamsCard team={team} competitionId={competitionId}/>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Teams;
