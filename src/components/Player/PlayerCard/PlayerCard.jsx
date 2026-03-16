import './PlayerCard.css';
import {NATIONALITY_TO_CODE, FLAG_API_BASE} from "../../../utils/CountryCode.js";

const PlayerCard = ({ player }) => {
    const { name, position, nationality } = player;
    const countryCode = NATIONALITY_TO_CODE[nationality];

    return (
        <div className="player-card">
            <div className="player-card-top">
                {/* Avatar placeholder */}
                <div className="player-avatar">
                    <span className="material-symbols-outlined">person</span>
                </div>
            </div>
            <div className="player-card-body">
                <p className="player-name">{name}</p>
                <p className="player-position">{position}</p>
                <div className="player-footer">
                    <span className="player-nationality">
                        {countryCode && (
                            <img
                                src={`${FLAG_API_BASE}/${countryCode}.png`}
                                alt={nationality}
                                className="player-flag"
                            />
                        )}
                        {nationality}
                    </span>
                </div>
            </div>
        </div>
    );
};

export default PlayerCard;
