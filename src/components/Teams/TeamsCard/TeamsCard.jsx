import { parseClubColors } from "../../../utils/ColorMap.js";
import './TeamsCard.css';

const TeamsCard = ({ team }) => {
    const { name, crest, founded, venue, clubColors, area } = team;

    const colors = parseClubColors(clubColors);
    const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;

    return (
        <div className="team-card d-flex flex-column p-3" style={{ '--team-gradient': gradient }}>

            <div className="team-card-gradient-bg" />

            <div className="team-card-content d-flex flex-column h-100">

                <div className="d-flex justify-content-between align-items-start mb-3">
                    <img src={crest} alt={`${name} crest`} className="team-emblem" />
                    <span className="badge badge-colors">
                        {clubColors}
                    </span>
                </div>

                <h5 className="team-name mb-1">{name}</h5>

                <p className="team-area mb-auto">
                    {area?.flag && (
                        <img src={area.flag} alt={`${area.name} flag`} className="area-flag me-1" />
                    )}
                    {area?.name} • Since {founded}
                </p>

                <div className="card-separator my-3" />

                <div className="d-flex justify-content-between align-items-center">
                    <div>
                        <small className="label-muted d-block">STADIUM</small>
                        <span className="fw-bold text-white">{venue}</span>
                    </div>
                    <i className="bi bi-arrow-right fs-4 arrow-icon" />
                </div>
            </div>
        </div>
    );
};

export default TeamsCard;
