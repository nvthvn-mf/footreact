import { useParams } from "react-router-dom";
import { useState } from "react";
import { useFetch } from "../../../hooks/useFetch.js";
import { groupByMatchday } from "./matchUtils.js";
import SeasonSummary from "./SeasonSummary/SeasonSummary.jsx";
import MatchdaySelector from "./Matchday/MatchdaySelector/MatchdaySelector.jsx";
import MatchdayMatches from "./Matchday/MatchdayMatches/MatchdayMatches.jsx";
import './CompetitionMatches.css';

const CompetitionMatches = () => {
    const { id } = useParams();
    const { data, isLoading, error } = useFetch(`/competitions/${id}/matches`);
    const [activeMatchday, setActiveMatchday] = useState(null);

    if (isLoading) return (
        <div className="matches-loader">
            <div className="spinner-border" style={{ color: 'var(--color-primary)' }} />
            <p>Chargement des matchs...</p>
        </div>
    );

    if (error) return <div className="alert alert-danger m-4">{error}</div>;

    const matches = data?.matches ?? [];
    if (matches.length === 0) return (
        <p className="text-white text-center py-5">Aucun match trouvé.</p>
    );

    const grouped = groupByMatchday(matches);

    const matchdays= Object.keys(grouped)
        .map(Number)
        .filter(Number.isFinite)
        .sort((a, b) => a - b);

    const currentMatchday = data?.season?.currentMatchday ?? matchdays.at(-1);
    const displayed = activeMatchday ?? currentMatchday;

    return (
        <div className="competition-matches">
            {data?.resultSet && (
                <SeasonSummary
                    resultSet={data.resultSet}
                    currentMatchday={currentMatchday}
                />
            )}
            <MatchdaySelector
                matchdays={matchdays}
                displayed={displayed}
                currentMatchday={currentMatchday}
                onSelect={setActiveMatchday}
            />
            <MatchdayMatches
                matches={grouped[displayed] ?? []}
                displayed={displayed}
            />
        </div>
    );
};

export default CompetitionMatches;
