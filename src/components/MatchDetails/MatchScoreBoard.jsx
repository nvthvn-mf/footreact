import { Link } from 'react-router-dom';

function MatchScoreBoard({ homeTeam, awayTeam, score, status, utcDate, competition }) {
    const isFinished = status === 'FINISHED';

    // Si le match n'est pas fini, on affiche l'heure au lieu du score
    const matchTime = new Date(utcDate).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    const displayStatus = isFinished ? 'Score Final' : 'Coup d\'envoi';

    console.log("Competition ID : "+competition.id)
    console.log("Equipe ID : "+homeTeam.id)

    return (
        <div className="score-board-card p-4 p-md-5 mb-4">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-center position-relative z-1 max-w-7xl mx-auto">

                {/* Équipe Domicile */}
                <div className="d-flex flex-column align-items-center gap-3">
                    <div className="team-crest-container">
                        <Link to={`/competitions/${competition.id}/equipes/${homeTeam.id}`}>
                        <img src={homeTeam.crest} alt={homeTeam.name} className="img-fluid" style={{ maxHeight: '80px' }} />
                         </Link>
                    </div>
                    <div className="text-center">
                        <h3 className="fs-4 fw-bold text-white m-0">{homeTeam.shortName}</h3>
                        <p className="text-uppercase fw-bold mt-1" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>Domicile</p>
                    </div>
                </div>

                {/* Section Score / Heure */}
                <div className="d-flex flex-column align-items-center my-4 my-md-0">
                    <div className="badge rounded-pill mb-3 px-3 py-2 text-uppercase tracking-widest" style={{ backgroundColor: 'rgba(0, 255, 136, 0.1)', color: 'var(--color-primary)', letterSpacing: '0.2em' }}>
                        {displayStatus}
                    </div>

                    <div className="d-flex align-items-center gap-4">
            <span className={isFinished ? "score-glow" : "fs-1 fw-bold text-white"}>
              {isFinished ? score.fullTime.home : matchTime}
            </span>
                        {isFinished && <span className="fs-1 fw-bold text-secondary">:</span>}
                        {isFinished && (
                            <span className="score-glow">
                {score.fullTime.away}
              </span>
                        )}
                    </div>

                    {/* Score à la mi-temps (affiché uniquement si dispo) */}
                    {isFinished && score.halfTime.home !== null && (
                        <div className="mt-3 px-3 py-1 rounded" style={{ backgroundColor: 'var(--color-border)', fontSize: '0.8rem', color: 'var(--color-text-muted)' }}>
                            Mi-temps : {score.halfTime.home} - {score.halfTime.away}
                        </div>
                    )}
                </div>

                {/* Équipe Extérieur */}
                <div className="d-flex flex-column align-items-center gap-3">
                    <div className="team-crest-container">
                        <Link to={`/competitions/${competition.id}/equipes/${awayTeam.id}`}>
                        <img src={awayTeam.crest} alt={awayTeam.name} className="img-fluid" style={{ maxHeight: '80px' }} />
                        </Link>
                    </div>
                    <div className="text-center">
                        <h3 className="fs-4 fw-bold text-white m-0">{awayTeam.shortName}</h3>
                        <p className="text-uppercase fw-bold mt-1" style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', letterSpacing: '0.1em' }}>Extérieur</p>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default MatchScoreBoard;