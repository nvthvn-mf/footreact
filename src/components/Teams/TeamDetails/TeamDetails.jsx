import { parseClubColors } from '../../../utils/ColorMap.js';
import teamDetails from '../../../mockData/teamDetails.json';
import PlayerCard from "../../Player/PlayerCard/PlayerCard.jsx";
import './TeamDetails.css';

const TeamDetails = () => {

    const POSITION_GROUPS = [
        {
            key: 'Goalkeeper',
            label: 'Gardiens',
            icon: 'sports_handball',
            match: (pos) => pos === 'Goalkeeper',
        },
        {
            key: 'Defence',
            label: 'Défenseurs',
            icon: 'shield',
            match: (pos) => ['Defence', 'Centre-Back', 'Left-Back', 'Right-Back'].includes(pos),
        },
        {
            key: 'Midfield',
            label: 'Milieux',
            icon: 'swap_horiz',
            match: (pos) => ['Midfield', 'Central Midfield', 'Defensive Midfield', 'Attacking Midfield'].includes(pos),
        },
        {
            key: 'Offence',
            label: 'Attaquants',
            icon: 'sports_soccer',
            match: (pos) => ['Offence', 'Centre-Forward', 'Left Winger', 'Right Winger'].includes(pos),
        },
    ];

    const { name, crest, founded, venue, clubColors, area, coach, squad, runningCompetitions } = teamDetails;

    const colors = parseClubColors(clubColors);
    const gradient = `linear-gradient(135deg, ${colors.join(', ')})`;


    return (
        <div className="team-detail-page">

            {/* ── HEADER ── */}
            <div className="team-detail-header" style={{ '--team-gradient': gradient }}>
                <div className="team-detail-header-overlay" />
                <div className="team-detail-header-content">

                    {/* Crest + identité */}
                    <div className="team-detail-identity">
                        <img src={crest} alt={name} className="team-detail-crest" />
                        <div>
                            <h1 className="team-detail-name">{name}</h1>
                            <div className="team-detail-meta">
                                {area?.flag && (
                                    <img src={area.flag} alt={area.name} className="team-detail-flag" />
                                )}
                                <span>{area?.name}</span>
                                <span className="meta-separator">•</span>
                                <span>Fondé en {founded}</span>
                                <span className="meta-separator">•</span>
                                <span>{venue}</span>
                            </div>
                        </div>
                    </div>

                    {/* Infos secondaires */}
                    <div className="team-detail-stats">

                        {/* Compétitions en cours */}
                        <div className="team-detail-stat-block">
                            <small className="stat-label">COMPÉTITIONS</small>
                            <div className="competitions-emblems">
                                {runningCompetitions.map(c => (
                                    <img key={c.id} src={c.emblem} alt={c.name} title={c.name} className="competition-emblem-sm" />
                                ))}
                            </div>
                        </div>

                        {/* Coach */}
                        <div className="team-detail-stat-block">
                            <small className="stat-label">ENTRAÎNEUR</small>
                            <span className="stat-value">{coach.name}</span>
                            <small className="stat-sub">{coach.nationality}</small>
                        </div>

                        {/* Couleurs */}
                        <div className="team-detail-stat-block">
                            <small className="stat-label">COULEURS</small>
                            <div className="color-swatches">
                                {colors.map((c, i) => (
                                    <span key={i} className="color-swatch" style={{ backgroundColor: c }} />
                                ))}
                            </div>
                            <small className="stat-sub">{clubColors}</small>
                        </div>

                        {/* Effectif */}
                        <div className="team-detail-stat-block">
                            <small className="stat-label">EFFECTIF</small>
                            <span className="stat-value stat-value--big">{squad.length}</span>
                            <small className="stat-sub">joueurs</small>
                        </div>
                    </div>
                </div>
            </div>

            {/* ── SQUAD PAR POSTE ── */}
            <div className="team-detail-squad">
                {POSITION_GROUPS.map(group => {
                    const players = squad.filter(p => group.match(p.position));
                    if (players.length === 0) return null;

                    return (
                        <section key={group.key} className="squad-section">
                            <div className="squad-section-title">
                                <span className="material-symbols-outlined squad-section-icon">
                                    {group.icon}
                                </span>
                                <h2>{group.label}</h2>
                                <span className="squad-section-count">{players.length}</span>
                            </div>

                            <div className="squad-grid">
                                {players.map(player => (
                                    <PlayerCard
                                        key={player.id}
                                        player={player}
                                        teamColors={colors}
                                    />
                                ))}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
}

export default TeamDetails;