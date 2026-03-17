export const STATUS_CONFIG = {
    FINISHED:  { label: 'Terminé',   className: 'status-finished' },
    IN_PLAY:   { label: 'En cours',  className: 'status-live' },
    PAUSED:    { label: 'Mi-temps',  className: 'status-live' },
    SCHEDULED: { label: 'Programmé', className: 'status-scheduled' },
    POSTPONED: { label: 'Reporté',   className: 'status-postponed' },
    CANCELLED: { label: 'Annulé',    className: 'status-postponed' },
    TIMED:     { label: 'Programmé', className: 'status-scheduled' },
};

export const formatTime = (utcDate) =>
    new Date(utcDate).toLocaleTimeString('fr-FR', {
        hour: '2-digit', minute: '2-digit',
    });

export const groupByMatchday = (matches) =>
    matches.reduce((acc, match) => {
        const day = match.matchday;
        if (!acc[day]) acc[day] = [];
        acc[day].push(match);
        return acc;
    }, {});
