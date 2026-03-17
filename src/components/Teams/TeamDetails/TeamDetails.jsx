// Les imports de base (React, hooks, librairies essentielles)
import React from 'react'; // Ajouté pour la cohérence avec le modèle du prof
import { useParams } from "react-router-dom";

// Tes composants et modules
// Composants enfants
import PlayerCard from "../../Player/PlayerCard/PlayerCard.jsx";

// Utilitaires et helpers (Hooks et fonctions)
import { useFetch } from "../../../hooks/useFetch.js";
import { parseClubColors } from '../../../utils/ColorMap.js';

// Les styles et assets
import './TeamDetails.css';


const TeamDetails = () => {

    const POSITION_GROUPS = [
        {
            key: 'Goalkeeper',
            label: 'Gardiens',
            icon: 'sports_handball',
            match: (pos) => pos === 'Goalkeeper',
        },
        {
            key: 'Defence',
            label: 'Défenseurs',
            icon: 'shield',
            match: (pos) => ['Defence', 'Centre-Back', 'Left-Back', 'Right-Back'].includes(pos),
        },
        {
            key: 'Midfield',
            label: 'Milieux',
            icon: 'swap_horiz',
            match: (pos) => ['Midfield', 'Central Midfield', 'Defensive Midfield', 'Attacking Midfield'].includes(pos),
        },
        {
            key: 'Offence',
            label: 'Attaquants',
            icon: 'sports_soccer',
            match: (pos) => ['Offence', 'Centre-Forward', 'Left Winger', 'Right Winger'].includes(pos),
        },
    ];

    const { teamId } = useParams();
    const apiUrl = `/teams/${teamId}`;
    const { data: team, isLoading, error } = useFetch(apiUrl);

    if (isLoading) {
        return (
            <div className="text-center p-5">
                <div className="spinner-border" style={{ color: 'var(--color-primary)' }} />
                <p className="text-white mt-3">Chargement de l'équipe...</p>
            </div>
        );
    }

    if (error) {
        return <div className="alert alert-danger">{error}</div>;
    }

    if (!team) {
        return <p className="text-white text-center py-5">Aucune info trouvée.</p>;
    }

    const colors = parseClubColors(team.clubColors);
    const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;

    return (
        <div className="team-detail-page">

            <div className="team-detail-header" style={{ '--team-gradient': gradient }}>
                <div className="team-detail-header-overlay" />
                <div className="team-detail-header-content">

                    <div className="team-detail-identity">
                        <img src={team.crest} alt={team.name} className="team-detail-crest" />
                        <div>
                            <h1 className="team-detail-name">{team.name}</h1>
                            <div className="team-detail-meta">
                                {team.area?.flag && (
                                    <img src={team.area.flag} alt={team.area.name} className="team-detail-flag" />
                                )}
                                <span>{team.area?.name}</span>
                                <span className="meta-separator">•</span>
                                <span>Fondé en {team.founded}</span>
                                <span className="meta-separator">•</span>
                                <span>{team.venue}</span>
                            </div>
                        </div>
                    </div>

                    <div className="team-detail-stats">
                        <div className="team-detail-stat-block">
                            <small className="stat-label">COMPÉTITIONS</small>
                            <div className="competitions-emblems">
                                {team.runningCompetitions?.map(c => (
                                    <img key={c.id} src={c.emblem} alt={c.name} className="competition-emblem-sm" />
                                ))}
                            </div>
                        </div>

                        <div className="team-detail-stat-block">
                            <small className="stat-label">ENTRAÎNEUR</small>
                            <span className="stat-value">{team.coach?.name}</span>
                            <small className="stat-sub">{team.coach?.nationality}</small>
                        </div>

                        <div className="team-detail-stat-block">
                            <small className="stat-label">COULEURS</small>
                            <div className="color-swatches">
                                {colors.map((c, i) => (
                                    <span key={i} className="color-swatch" style={{ backgroundColor: c }} />
                                ))}
                            </div>
                        </div>

                        <div className="team-detail-stat-block">
                            <small className="stat-label">EFFECTIF</small>
                            <span className="stat-value stat-value--big">{team.squad?.length}</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="team-detail-squad">
                {POSITION_GROUPS.map(group => {
                    const players = team.squad?.filter(p => group.match(p.position)) || [];
                    if (!players.length) return null;

                    return (
                        <section key={group.key} className="squad-section">
                            <div className="squad-section-title">
                                <span className="material-symbols-outlined">{group.icon}</span>
                                <h2>{group.label}</h2>
                                <span>{players.length}</span>
                            </div>

                            <div className="squad-grid">
                                {players.map(player => (
                                    <PlayerCard key={player.id} player={player} />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamDetails;