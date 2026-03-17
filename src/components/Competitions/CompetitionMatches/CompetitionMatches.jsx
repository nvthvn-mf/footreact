import { useParams } from "react-router-dom";
import { useFetch } from "../../../hooks/useFetch.js";
import { useState } from "react";
import './CompetitionMatches.css';

const STATUS_CONFIG = {
    FINISHED:   { label: 'Terminé',    className: 'status-finished' },
    IN_PLAY:    { label: 'En cours',   className: 'status-live' },
    PAUSED:     { label: 'Mi-temps',   className: 'status-live' },
    SCHEDULED:  { label: 'Programmé',  className: 'status-scheduled' },
    POSTPONED:  { label: 'Reporté',    className: 'status-postponed' },
    CANCELLED:  { label: 'Annulé',     className: 'status-postponed' },
    TIMED:      { label: 'Programmé',  className: 'status-scheduled' },
};

const formatDate = (utcDate) => {
    return new Date(utcDate).toLocaleDateString('fr-FR', {
        weekday: 'short', day: 'numeric', month: 'short', hour: '2-digit', minute: '2-digit',
    });
};

// Groupe les matchs par journée
const groupByMatchday = (matches) => {
    return matches.reduce((acc, match) => {
        const day = match.matchday;
        if (!acc[day]) acc[day] = [];
        acc[day].push(match);
        return acc;
    }, {});
};

const MatchRow = ({ match }) => {
    const { homeTeam, awayTeam, score, status, utcDate, referees } = match;
    const statusInfo = STATUS_CONFIG[status] || { label: status, className: 'status-scheduled' };
    const isFinished = status === 'FINISHED';
    const isLive = status === 'IN_PLAY' || status === 'PAUSED';
    const homeWin = score.winner === 'HOME_TEAM';
    const awayWin = score.winner === 'AWAY_TEAM';

    return (
        <div className={`match-row ${isLive ? 'match-row--live' : ''}`}>

            {/* Équipe domicile */}
            <div className="match-team match-team--home">
                <span className={`team-name ${homeWin ? 'team-name--winner' : ''}`}>
                    {homeTeam.shortName}
                </span>
                <img src={homeTeam.crest} alt={homeTeam.name} className="team-crest-sm" />
            </div>

            {/* Score / heure */}
            <div className="match-center">
                {isFinished || isLive ? (
                    <div className="match-score">
                        <span className={homeWin ? 'score--winner' : ''}>{score.fullTime.home}</span>
                        <span className="score-sep">–</span>
                        <span className={awayWin ? 'score--winner' : ''}>{score.fullTime.away}</span>
                    </div>
                ) : (
                    <div className="match-time">{formatDate(utcDate).split(' ').slice(-1)[0]}</div>
                )}
                <span className={`match-status ${statusInfo.className}`}>{statusInfo.label}</span>
                {isLive && <span className="live-dot" />}
            </div>

            {/* Équipe extérieure */}
            <div className="match-team match-team--away">
                <img src={awayTeam.crest} alt={awayTeam.name} className="team-crest-sm" />
                <span className={`team-name ${awayWin ? 'team-name--winner' : ''}`}>
                    {awayTeam.shortName}
                </span>
            </div>
        </div>
    );
};

const CompetitionMatches = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFetch(`/competitions/${id}/matches`);
    const [activeMatchday, setActiveMatchday] = useState(null);

    if (isLoading) {
        return (
            <div className="matches-loader">
                <div className="spinner-border" style={{ color: 'var(--color-primary)' }} />
                <p>Chargement des matchs...</p>
            </div>
        );
    }

    if (error) return <div className="alert alert-danger m-4">{error}</div>;

    const matches = data?.matches ?? [];
    if (matches.length === 0) {
        return <p className="text-white text-center py-5">Aucun match trouvé.</p>;
    }

    const grouped = groupByMatchday(matches);
    const matchdays = Object.keys(grouped).map(Number).sort((a, b) => a - b);
    const currentMatchday = data?.season?.currentMatchday ?? matchdays[matchdays.length - 1];

    // Journée affichée : celle sélectionnée ou la journée courante par défaut
    const displayed = activeMatchday ?? currentMatchday;

    const resultSet = data?.resultSet;

    return (
        <div className="competition-matches">

            {/* ── Résumé de saison ── */}
            {resultSet && (
                <div className="season-summary">
                    <div className="season-stat">
                        <span className="season-stat-value">{resultSet.count}</span>
                        <span className="season-stat-label">Matchs total</span>
                    </div>
                    <div className="season-stat">
                        <span className="season-stat-value" style={{ color: 'var(--color-primary)' }}>
                            {resultSet.played}
                        </span>
                        <span className="season-stat-label">Joués</span>
                    </div>
                    <div className="season-stat">
                        <span className="season-stat-value">{resultSet.count - resultSet.played}</span>
                        <span className="season-stat-label">Restants</span>
                    </div>
                    <div className="season-stat">
                        <span className="season-stat-value">J{currentMatchday}</span>
                        <span className="season-stat-label">Journée en cours</span>
                    </div>
                </div>
            )}

            {/* ── Sélecteur de journée ── */}
            <div className="matchday-selector">
                <button
                    className="matchday-nav-btn"
                    onClick={() => setActiveMatchday(Math.max(matchdays[0], displayed - 1))}
                    disabled={displayed <= matchdays[0]}
                >
                    <i className="bi bi-chevron-left" />
                </button>

                <div className="matchday-tabs">
                    {matchdays.map(day => (
                        <button
                            key={day}
                            className={`matchday-tab ${displayed === day ? 'active' : ''} ${day === currentMatchday ? 'current' : ''}`}
                            onClick={() => setActiveMatchday(day)}
                        >
                            J{day}
                        </button>
                    ))}
                </div>

                <button
                    className="matchday-nav-btn"
                    onClick={() => setActiveMatchday(Math.min(matchdays[matchdays.length - 1], displayed + 1))}
                    disabled={displayed >= matchdays[matchdays.length - 1]}
                >
                    <i className="bi bi-chevron-right" />
                </button>
            </div>

            {/* ── Liste des matchs de la journée ── */}
            <div className="matchday-matches">
                <div className="matchday-header">
                    <span className="material-symbols-outlined">calendar_month</span>
                    <h3>Journée {displayed}</h3>
                    <span className="matchday-count">{grouped[displayed]?.length} matchs</span>
                </div>

                <div className="matches-list">
                    {(grouped[displayed] ?? []).map(match => (
                        <MatchRow key={match.id} match={match} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CompetitionMatches;
