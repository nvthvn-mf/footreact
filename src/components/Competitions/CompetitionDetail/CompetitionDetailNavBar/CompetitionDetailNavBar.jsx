import { NavLink, useParams } from 'react-router-dom';
import './CompetititonDetailNavBar.css'


const NAV_ITEMS = [
    { label: 'Classement',      icon: 'format_list_numbered', path: 'classement' },
    { label: 'Équipes',         icon: 'diversity_3',          path: 'equipes' },
    { label: 'Buteurs',         icon: 'sports_soccer',        path: 'buteurs' },
    { label: 'Calendrier',      icon: 'calendar_month',       path: 'calendrier' },
];

const CompetitionDetailNavBar = () => {
    const { id } = useParams();

    return (
        <nav className="competition-detail-navbar">
            {NAV_ITEMS.map(({ label, icon, path }) => (
                <NavLink
                    key={path}
                    to={`/competitions/${id}/${path}`}
                    className={({ isActive }) =>
                        `competition-nav-item ${isActive ? 'active' : ''}`
                    }
                >
                    <span className="material-symbols-outlined competition-nav-icon">
                        {icon}
                    </span>
                    <span className="competition-nav-label">{label}</span>
                </NavLink>
            ))}
        </nav>
    );
};

export default CompetitionDetailNavBar;
