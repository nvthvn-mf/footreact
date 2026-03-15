
const ScorerRow = ({ scorer, position }) => (
    <tr className="standard-row">
        <td className="text-center py-3 fw-bold">{position}</td>
        <td className="py-3">
            <div className="d-flex align-items-center">
                <div className="player-mini-avatar me-3">
                    {/* On peut aussi mettre une petite photo ici si besoin */}
                </div>
                <span>{scorer.player.name}</span>
            </div>
        </td>
        <td className="text-center text-secondary">{scorer.team.name}</td>
        <td className="text-center py-3 text-success fw-bold">
            {scorer.goals} <span className="small text-secondary">({scorer.penalties || 0})</span>
        </td>
        <td className="text-center py-3">{scorer.assists || 0}</td>
    </tr>
);

export default ScorerRow;