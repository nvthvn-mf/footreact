import {STATUS_CONFIG, formatTime} from "../../../matchUtils.js";
import './MatchRow.css';
import {Link} from "react-router-dom";

const MatchRow = ({ match }) => {
    const { homeTeam, awayTeam, score, status, utcDate } = match;
    const statusInfo = STATUS_CONFIG[status] ?? { label: status, className: 'status-scheduled' };
    const isFinished = status === 'FINISHED';
    const isLive     = status === 'IN_PLAY' || status === 'PAUSED';
    const homeWin    = score.winner === 'HOME_TEAM';
    const awayWin    = score.winner === 'AWAY_TEAM';

    return (
        <Link to={`/matches/${match.id}`} style={{textDecoration: 'none'}}>
            <div className={`match-row ${isLive ? 'match-row--live' : ''}`}>

                <div className="match-team match-team--home">
                <span className={`team-name ${homeWin ? 'team-name--winner' : ''}`}>
                    {homeTeam.shortName}
                </span>
                    <img src={homeTeam.crest} alt={homeTeam.name} className="team-crest-sm" />
                </div>

                <div className="match-center">
                    {isFinished || isLive ? (
                        <div className="match-score">
                            <span className={homeWin ? 'score--winner' : ''}>{score.fullTime.home}</span>
                            <span className="score-sep">–</span>
                            <span className={awayWin ? 'score--winner' : ''}>{score.fullTime.away}</span>
                        </div>
                    ) : (
                        <div className="match-time">{formatTime(utcDate)}</div>
                    )}
                    <span className={`match-status ${statusInfo.className}`}>{statusInfo.label}</span>
                    {isLive && <span className="live-dot" />}
                </div>

                <div className="match-team match-team--away">
                    <img src={awayTeam.crest} alt={awayTeam.name} className="team-crest-sm" />
                    <span className={`team-name ${awayWin ? 'team-name--winner' : ''}`}>
                    {awayTeam.shortName}
                </span>
                </div>
            </div>
        </Link>
    );
};

export default MatchRow;
