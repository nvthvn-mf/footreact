import React from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className="sidebar-container">
            {/* Header: Logo et Nom */}
            <div className="sidebar-header">
                <div className="logo-box">
                    <span className="material-symbols-outlined" style={{ fontSize: '24px' }}>
                        sports_soccer
                    </span>
                </div>
                <div>
                    <h1 className="logo-text">FootReact</h1>
                    <p className="logo-subtext">Match Day Hub</p>
                </div>
            </div>

            {/* Menu principal */}
            <nav className="sidebar-menu">
                <SidebarItem icon="home" label="Accueil" />
                <SidebarItem icon="trophy" label="Compétitions" />
                <SidebarItem icon="diversity_3" label="Équipes" />
                <SidebarItem icon="person" label="Joueurs" />
                <SidebarItem icon="bookmark_heart" label="Favoris" />
                <SidebarItem icon="newspaper" label="Actualités" />
            </nav>

            {/* Footer: Profil Utilisateur */}
            <div className="sidebar-footer">
                <div className="user-info">
                    <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>
                        account_circle
                    </span>
                    <div className="user-details">
                        <span className="user-name">Alex Johnson</span>
                        <span className="user-status">Premium Member</span>
                    </div>
                </div>
                <i className="bi bi-gear settings-icon"></i>
            </div>
        </div>
    );
};

export default Sidebar;