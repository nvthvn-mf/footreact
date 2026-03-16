import React, {useState} from 'react';
import { useLoaderData } from 'react-router-dom';
import PodiumItem from './PodiumItem'; // Si tu les sépares en fichiers
import ScorerRow from './ScorerRow';
import './CompetitionTopScorers.css';
import PlayerModal from "./PlayerModal.jsx";

const CompetitionTopScorers = () => {
    const { scorers } = useLoaderData();
    const [selectedPlayerId, setSelectedPlayerId] = useState(null);

    if (!scorers || scorers.length === 0) return <div className="text-white p-4">Aucune donnée disponible.</div>;

    const podium = scorers.slice(0, 3);
    const others = scorers.slice(3, 10);

    return (
        <div className="top-scorers-container mt-4 ">

            {/* Section Podium : On réorganise pour que le 1er soit au milieu visuellement */}
            <div className="podium-section d-flex justify-content-center align-items-end mb-5 gap-4">
                <PodiumItem scorer={podium[1]} rank={2} onSelect={setSelectedPlayerId} />
                <PodiumItem scorer={podium[0]} rank={1} isWinner={true} onSelect={setSelectedPlayerId} />
                <PodiumItem scorer={podium[2]} rank={3} onSelect={setSelectedPlayerId} />
            </div>

            {/* Section Liste */}
            <div className="standings-board p-4 rounded-4">
                <div className="table-responsive">
                    <table className="table table-borderless align-middle text-white mb-0 custom-standings-table overflow-auto">
                        <thead className="small text-uppercase text-secondary border-bottom border-secondary border-opacity-25">
                        <tr>
                            <th className="text-center pb-3">Pos</th>
                            <th className="pb-3">Joueur</th>
                            <th className="pb-3 text-center">Équipe</th>
                            <th className="text-center pb-3">Buts (Pen)</th>
                            <th className="text-center pb-3">Passes D.</th>
                        </tr>
                        </thead>
                        <tbody>
                        {others.map((s, index) => (
                            <ScorerRow
                                key={s.player.id}
                                scorer={s}
                                position={index + 4}
                                onSelect={setSelectedPlayerId}
                            />
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
            {selectedPlayerId && (
                <PlayerModal
                    playerId={selectedPlayerId}
                    onClose={() => setSelectedPlayerId(null)}
                />
            )}
        </div>
    );
};

export default CompetitionTopScorers;