import { Outlet, useParams } from 'react-router-dom';
import CompetitionDetailNavBar from './CompetitionDetailNavBar/CompetitionDetailNavBar.jsx';
import './CompetitionDetail.css';

const CompetitionDetail = () => {
    const { name } = useParams();

    return (
        <div className="competition-detail-page">
            <div className="competition-detail-header">
                <h2 className="text-white fw-bold mb-4">{name}</h2>
                <CompetitionDetailNavBar />
            </div>

            <div className="competition-detail-content">
                <Outlet />
            </div>
        </div>
    );
};

export default CompetitionDetail;
