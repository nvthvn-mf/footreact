import React from 'react';

function MatchExtraInfo({ referees }) {
    return (
        <div className="row g-4">
            {/* Colonne Arbitres & Infos */}
            <div className="col-12 col-md-6">
                <div className="p-4 rounded-4 h-100" style={{ backgroundColor: 'rgba(22, 44, 34, 0.4)', border: '1px solid var(--color-border)' }}>
                    <h4 className="fs-6 fw-bold text-white mb-4 d-flex align-items-center gap-2">
                        <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>sports</span>
                        Informations du Match
                    </h4>

                    {referees && referees.length > 0 ? (
                        <ul className="list-unstyled m-0">
                            {referees.map((ref, index) => (
                                <li key={index} className="d-flex justify-content-between align-items-center p-3 mb-2 rounded-3" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
                                    <span className="text-white fw-medium">{ref.name}</span>
                                    <span className="badge" style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-text-muted)' }}>{ref.type}</span>
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p style={{ color: 'var(--color-text-muted)' }}>Aucun arbitre assigné pour le moment.</p>
                    )}
                </div>
            </div>

            {/* Colonne Confrontations (Head 2 Head) */}
            <div className="col-12 col-md-6">
                <div className="p-4 rounded-4 h-100" style={{ backgroundColor: 'rgba(22, 44, 34, 0.4)', border: '1px solid var(--color-border)' }}>
                    <h4 className="fs-6 fw-bold text-white mb-4 d-flex align-items-center gap-2">
                        <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>history</span>
                        Face-à-Face (H2H)
                    </h4>

                    <div className="d-flex align-items-center justify-content-center h-50">
                        <p className="text-center m-0" style={{ color: 'var(--color-text-muted)' }}>
                            Les statistiques détaillées des confrontations seront affichées ici. <br/>
                            <small>(Nécessite un appel API spécifique à /matches/id/head2head)</small>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MatchExtraInfo;