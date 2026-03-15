const PodiumItem = ({ scorer, rank, isWinner }) => {
    if (!scorer) return null;


    return (
        <div className={`podium-item ${isWinner ? 'first' : rank === 2 ? 'second' : 'third'}`}>
            <div className={`player-avatar-wrapper ${isWinner ? 'winner' : ''}`}>

                {isWinner && <div className="winner-icon">★</div>}

                <span className={`rank-badge ${isWinner ? 'bg-success' : ''}`}>{rank}</span>

            </div>

            <h5 className={`mt-3 mb-0 ${isWinner ? 'fw-bold' : ''}`}>
                {scorer.player.name}
            </h5>
            <p className="text-secondary small">{scorer.team.name}</p>
            <div className={`stats-badge ${isWinner ? 'winner-stats' : 'small'}`}>
                {scorer.goals} BUTS
            </div>
        </div>
    );
};

export default PodiumItem;