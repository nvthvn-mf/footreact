import React from 'react';
import { useLoaderData } from 'react-router-dom';
import PodiumItem from './PodiumItem'; // Si tu les sépares en fichiers
import ScorerRow from './ScorerRow';
import './CompetitionTopScorers.css';

const CompetitionTopScorers = () => {
    const { scorers } = useLoaderData();

    if (!scorers || scorers.length === 0) return <div className="text-white p-4">Aucune donnée disponible.</div>;

    const podium = scorers.slice(0, 3);
    const others = scorers.slice(3, 8);

    return (
        <div className="top-scorers-container mt-4">

            {/* Section Podium : On réorganise pour que le 1er soit au milieu visuellement */}
            <div className="podium-section d-flex justify-content-center align-items-end mb-5">
                <PodiumItem scorer={podium[1]} rank={2} />
                <PodiumItem scorer={podium[0]} rank={1} isWinner={true} />
                <PodiumItem scorer={podium[2]} rank={3} />
            </div>

            {/* Section Liste */}
            <div className="standings-board p-4 rounded-4">
                <table className="table table-borderless align-middle text-white mb-0 custom-standings-table">
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
                        />
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default CompetitionTopScorers;