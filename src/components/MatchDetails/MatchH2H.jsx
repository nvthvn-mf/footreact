import React from 'react';
import h2hData from '../../mockData/h2h.json';

function MatchH2H() {
    const { aggregates, matches } = h2hData;
    const total = aggregates.numberOfMatches;

    // Calcul des pourcentages pour la barre visuelle
    const homeWinPct = total > 0 ? (aggregates.homeTeam.wins / total) * 100 : 0;
    const drawPct = total > 0 ? (aggregates.homeTeam.draws / total) * 100 : 0;
    const awayWinPct = total > 0 ? (aggregates.awayTeam.wins / total) * 100 : 0;

    return (
        <div className="p-4 p-md-5 rounded-4 mb-4" style={{ backgroundColor: 'rgba(22, 44, 34, 0.4)', border: '1px solid var(--color-border)' }}>
            <h4 className="fs-5 fw-bold text-white mb-4 d-flex align-items-center gap-2">
                <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>history</span>
                Confrontations directes (H2H)
            </h4>

            {/* --- Section 1 : Statistiques Globales --- */}
            <div className="mb-5">
                <div className="d-flex justify-content-between text-white fw-bold mb-2" style={{ fontSize: '0.9rem' }}>
                    <span>{aggregates.homeTeam.name} ({aggregates.homeTeam.wins})</span>
                    <span style={{ color: 'var(--color-text-muted)' }}>Nuls ({aggregates.homeTeam.draws})</span>
                    <span>{aggregates.awayTeam.name} ({aggregates.awayTeam.wins})</span>
                </div>

                {/* Barre visuelle */}
                <div className="h2h-progress-bar">
                    <div className="h2h-home-wins" style={{ width: `${homeWinPct}%` }}></div>
                    <div className="h2h-draws" style={{ width: `${drawPct}%` }}></div>
                    <div className="h2h-away-wins" style={{ width: `${awayWinPct}%` }}></div>
                </div>

                <p className="text-center m-0 mt-2" style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem' }}>
                    Basé sur les {total} dernières rencontres ({aggregates.totalGoals} buts au total)
                </p>
            </div>

            {/* --- Section 2 : Historique des Matchs --- */}
            <h5 className="fs-6 fw-bold text-white mb-3">Derniers matchs</h5>
            <div className="d-flex flex-column gap-3">
                {matches.map((match) => {
                    const matchDate = new Date(match.utcDate).toLocaleDateString();
                    return (
                        /* Suppression de justify-content-center sur le parent, géré par les enfants maintenant */
                        <div key={match.id} className="h2h-match-row d-flex flex-column flex-md-row align-items-center p-3 gap-3">

                            {/* 1. Date et Compétition (Fixé à gauche) */}
                            {/* flex: '1 1 0%' permet à ce bloc de prendre exactement le même espace que le bloc fantôme */}
                            <div className="text-center text-md-start w-100" style={{ flex: '1 1 0%' }}>
                                <div style={{ color: 'var(--color-text-muted)', fontSize: '0.75rem' }} className="text-uppercase fw-bold mb-1">{matchDate}</div>
                                <div className="text-white text-truncate" style={{ fontSize: '0.8rem', maxWidth: '200px' }}>{match.competition.name}</div>
                            </div>

                            {/* 2. Score et Équipes avec LOGOS (Parfaitement au centre) */}
                            <div className="d-flex align-items-center gap-3 justify-content-center" style={{ flex: '0 0 auto' }}>

                                {/* Équipe Domicile : [Logo] + [Nom] */}
                                <div className="d-flex align-items-center justify-content-end gap-2" style={{ width: '140px' }}>
                                    <img src={match.homeTeam.crest} alt={match.homeTeam.shortName} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                    <span className="text-white fw-semibold text-end text-truncate">{match.homeTeam.shortName}</span>
                                </div>

                                {/* Le Score au centre */}
                                <div className="badge px-3 py-2 fs-6 flex-shrink-0" style={{ backgroundColor: 'var(--color-surface)', border: '1px solid var(--color-border)', color: 'var(--color-primary)' }}>
                                    {match.score.fullTime.home} - {match.score.fullTime.away}
                                </div>

                                {/* Équipe Extérieur : [Nom] + [Logo] */}
                                <div className="d-flex align-items-center justify-content-start gap-2" style={{ width: '140px' }}>
                                    <span className="text-white fw-semibold text-start text-truncate">{match.awayTeam.shortName}</span>
                                    <img src={match.awayTeam.crest} alt={match.awayTeam.shortName} style={{ width: '24px', height: '24px', objectFit: 'contain' }} />
                                </div>

                            </div>

                            {/* 3. Bloc Fantôme (Invisible, équilibre la ligne pour garantir le centrage parfait) */}
                            {/* Invisible sur mobile, mais présent sur ordinateur */}
                            <div className="d-none d-md-block" style={{ flex: '1 1 0%' }}></div>

                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default MatchH2H;