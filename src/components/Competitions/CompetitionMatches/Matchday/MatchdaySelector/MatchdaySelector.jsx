import './MatchdaySelector.css';

const MatchdaySelector = ({ matchdays, displayed, currentMatchday, onSelect }) => (
    <div className="matchday-selector">
        <button
            className="matchday-nav-btn"
            onClick={() => onSelect(Math.max(matchdays[0], displayed - 1))}
            disabled={displayed <= matchdays[0]}
        >
            <i className="bi bi-chevron-left" />
        </button>

        <div className="matchday-tabs">
            {matchdays.map(day => (
                <button
                    key={day}
                    className={[
                        'matchday-tab',
                        displayed === day    ? 'active'  : '',
                        day === currentMatchday ? 'current' : '',
                    ].join(' ')}
                    onClick={() => onSelect(day)}
                >
                    J{day}
                </button>
            ))}
        </div>

        <button
            className="matchday-nav-btn"
            onClick={() => onSelect(Math.min(matchdays[matchdays.length - 1], displayed + 1))}
            disabled={displayed >= matchdays[matchdays.length - 1]}
        >
            <i className="bi bi-chevron-right" />
        </button>
    </div>
);

export default MatchdaySelector;
