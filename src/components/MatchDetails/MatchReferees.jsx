import React from 'react';

function MatchReferees({ referees }) {
    return (
        <div className="p-4 p-md-5 rounded-4 mb-4" style={{ backgroundColor: 'rgba(22, 44, 34, 0.4)', border: '1px solid var(--color-border)' }}>
            <h4 className="fs-5 fw-bold text-white mb-4 d-flex align-items-center gap-2">
                <span className="material-symbols-outlined" style={{ color: 'var(--color-primary)' }}>sports</span>
                Officiels du Match
            </h4>

            {referees && referees.length > 0 ? (
                <div className="row g-3">
                    {referees.map((ref, index) => (
                        /* On utilise une grille pour les afficher côte à côte s'il y en a plusieurs */
                        <div className="col-12 col-md-4" key={index}>
                            <div className="d-flex flex-column p-3 rounded-3" style={{ backgroundColor: 'var(--color-bg-dark)', border: '1px solid var(--color-border)' }}>
                                <span className="text-white fw-medium mb-1">{ref.name}</span>
                                <span style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                  {ref.type === 'REFEREE' ? 'Arbitre Principal' : ref.type}
                </span>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="m-0" style={{ color: 'var(--color-text-muted)' }}>Aucun arbitre assigné pour le moment.</p>
            )}
        </div>
    );
}

export default MatchReferees;