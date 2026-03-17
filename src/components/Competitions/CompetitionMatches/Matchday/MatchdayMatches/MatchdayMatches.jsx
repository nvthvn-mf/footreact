import MatchRow from './MatchRow/MatchRow.jsx';
import './MatchdayMatches.css';

const MatchdayMatches = ({ matches, displayed }) => (
    <div className="matchday-matches">
        <div className="matchday-header">
            <span className="material-symbols-outlined">calendar_month</span>
            <h3>Journée {displayed}</h3>
            <span className="matchday-count">{matches.length} matchs</span>
        </div>

        <div className="matches-list">
            {matches.map(match => (
                <MatchRow key={match.id} match={match} />
            ))}
        </div>
    </div>
);

export default MatchdayMatches;
