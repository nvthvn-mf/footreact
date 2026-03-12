import {parseClubColors} from "../../../utils/ColorMap.js";

const TeamsCard = ({ team }) => {

    const {name, crest, founded , venue, clubColors} = team;

    const colors = parseClubColors(clubColors);
    const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;
    return (
        <div
            className="team-card d-flex flex-column p3"
            style={{background: gradient}}
        >
            <div className="d-flex justify-content-between align-items-start mb-3">
                <img src={crest} alt={`${name} logo`} className=".competition-emblem" />
                <h5>{name}</h5>
                <h5>Found in {founded}</h5>
                <h5>stadium name : {venue}</h5>
            </div>
        </div>

    );
}

export default TeamsCard;