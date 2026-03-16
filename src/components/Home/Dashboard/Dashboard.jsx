import React, {useState} from "react";
import "./Dashboard.css";

import DashboardHeader from "../DashboardHeader/DashboardHeader.jsx";
import DashboardFilters from "../DashboardFilters/DashboardFilters.jsx";
import MatchCard from "../MatchCard/MatchCard.jsx";
import {useFetch} from '../../../hooks/useFetch';
import {Link} from "react-router-dom";

function Dashboard() {

    const [activeFilter, setActiveFilter] = useState("today");

    const getDateString = (offsetDays) => {
        const date = new Date();
        date.setDate(date.getDate() + offsetDays);
        console.log(date.toISOString().split('T')[0], 'Date récupéré : ')
        return date.toISOString().split('T')[0];
    };

    // On associe notre filtre au bon décalage de jour
    const dateMap = {
        yesterday: getDateString(-1),
        today: getDateString(0),
        tomorrow: getDateString(1)
    };

    const apiUrl = `/matches?date=${dateMap[activeFilter]}`;

    const {data, isLoading, error} = useFetch(apiUrl);
    const matches = data ? data.matches : [];

    const handleDateChange = (event) => {
        console.log("Date sélectionnée :", event.target.value);
    };

    const handleLeagueChange = (event) => {
        console.log("Ligue sélectionnée :", event.target.value);
    };

    return (
        <div className="container-fluid px-4 px-md-5 py-4 w-100">

            <DashboardHeader onDateChange={handleDateChange}/>

            <DashboardFilters onLeagueChange={handleLeagueChange} activeFilter={activeFilter}
                              onFilterChange={setActiveFilter}/>

            {/* Section match (En-tête) */}
            <div className="d-flex justify-content-between align-items-end mb-4">
                <div>
                    <h3 className="fw-bold text-white mb-1" style={{fontSize: "1.25rem"}}>
                        Liste des Matchs
                    </h3>
                    <p className="mb-0"
                       style={{
                           color: "var(--color-text-muted)",
                           fontSize: "0.875rem"
                       }}
                    >
                        Actualités footballistiques en temps réel du monde entier
                    </p>
                </div>

                <div className="d-flex align-items-center gap-2">
                    <span
                        className="rounded-circle animate-pulse"
                        style={{
                            width: "8px",
                            height: "8px",
                            backgroundColor: "var(--color-primary)"
                        }}
                    ></span>

                    <span
                        className="text-uppercase fw-bold"
                        style={{
                            fontSize: "0.75rem",
                            color: "var(--color-primary)",
                            letterSpacing: "0.05em"
                        }}
                    >

                        {matches.length} Today
                    </span>
                </div>
            </div>

            {/* --- GESTION DE L'AFFICHAGE DU CONTENU --- */}

            {/* 1. État de chargement (Spinner) */}
            {isLoading && (
                <div className="text-center py-5">
                    <div className="spinner-border" style={{color: 'var(--color-primary)'}} role="status"></div>
                    <p className="text-white mt-3">Chargement des matchs en cours...</p>
                </div>
            )}

            {/* 2. État d'erreur */}
            {error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {/* 3. État vide (Aucun match retourné par l'API) */}
            {!isLoading && !error && matches.length === 0 && (
                <p className="text-white text-center py-5">Aucun match prévu aujourd'hui.</p>
            )}

            {/* 4. Affichage de la Grille avec les vraies données */}
            {!isLoading && !error && matches.length > 0 && (
                <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4 pb-5">
                    {matches.map((match) => (
                        <Link to={`/matches/${match.id}`} key={match.id} style={{ textDecoration: 'none' }}>
                            <div className="col" key={match.id}>
                                <MatchCard match={match}/>
                            </div>
                        </Link>
                    ))}
                </div>
            )}

        </div>
    );
}

export default Dashboard;