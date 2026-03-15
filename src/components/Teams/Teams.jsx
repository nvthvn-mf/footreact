import TeamsCard from "./TeamsCard/TeamsCard.jsx";
import './Teams.css';
import {useParams} from "react-router-dom";
import {useFetch} from "../../hooks/useFetch.js";

const Teams = () => {

    const {id} = useParams();

    const apiUrl = `/competitions/${id}/teams`;
    const {data, isLoading, error} = useFetch(apiUrl);

    const teams = data ? data.teams : [];

    return (
        <div className="teams-page d-flex flex-column flex-grow-1 p-4">
            <h2 className="text-white fw-bold mb-4">Équipes</h2>


            {isLoading && (
                <div className="text-center p-5">
                    <div
                        className="spinner-border"
                        style={{color: 'var(--color-primary)'}}
                        role="status">
                    </div>
                    <p className="test-white mt-3"> Chargement des équipes en cours...</p>
                </div>
            )}

            { error && (
                <div className="alert alert-danger" role="alert">
                    {error}
                </div>
            )}

            {!isLoading && !error && teams.length === 0 && (
                <p className="text-white text-center py-5">
                    Aucune équipe trouvée pour cette compétition.
                </p>
            )}

            {!isLoading && !error && teams.length > 0 && (
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 mb-5">
                    {teams.map((team, index) => (
                        <div className="col" key={index}>
                            <TeamsCard team={team} />
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Teams;
