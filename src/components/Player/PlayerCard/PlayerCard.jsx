import './PlayerCard.css';

const FLAG_API = 'https://flagcdn.com/24x18';

const NATIONALITY_TO_CODE = {
    'Belgium': 'be', 'Ukraine': 'ua', 'Spain': 'es', 'France': 'fr',
    'England': 'gb-eng', 'Germany': 'de', 'Brazil': 'br', 'Uruguay': 'uy',
    'Austria': 'at', 'Morocco': 'ma', 'Turkey': 'tr', 'Argentina': 'ar',
};

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
                                src={`${FLAG_API}/${countryCode}.png`}
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
