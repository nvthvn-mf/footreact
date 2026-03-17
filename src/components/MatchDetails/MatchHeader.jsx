function MatchHeader({ area, competition, matchday, status }) {
    // Formatage du statut en français
    const getStatusBadge = () => {
        if (status === 'FINISHED') return <span className="badge bg-secondary text-uppercase">Terminé</span>;
        if (status === 'IN_PLAY' || status === 'PAUSED') return <span className="badge text-uppercase" style={{ backgroundColor: 'var(--color-primary)', color: 'var(--color-bg-dark)' }}>En cours</span>;
        return <span className="badge text-uppercase" style={{ backgroundColor: 'var(--color-border)', color: 'var(--color-primary)' }}>À venir</span>;
    };

    return (
        <div className="d-flex align-items-center gap-3 mb-4 pb-3 border-bottom" style={{ borderColor: 'var(--color-border) !important' }}>
            {getStatusBadge()}
            <h2 className="m-0 fs-5 fw-semibold text-white">
                {area.name} • {competition.name} {matchday ? `• Journée ${matchday}` : ''}
            </h2>
        </div>
    );
}

export default MatchHeader;