import './SeasonSummary.css';

const SeasonSummary = ({ resultSet, currentMatchday }) => (

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
);

export default SeasonSummary;
