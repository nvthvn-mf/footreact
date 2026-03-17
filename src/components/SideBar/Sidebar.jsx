import React, {useContext, useEffect, useState} from 'react';
import SidebarItem from './SidebarItem';
import './Sidebar.css';
import { useNavigate } from 'react-router-dom';
import LanguageContext from '../../contexte/LanguageContexte'
import UserProfile from "../Profile/UserProfile.jsx";

const Sidebar = () => {
    const { language, setLanguage } = useContext(LanguageContext);
    const navigate = useNavigate();

    const [userName, setUserName] = useState(() => {
        const savedUser = JSON.parse(localStorage.getItem('userProfile'));
        return savedUser?.firstName ? `${savedUser.firstName} ${savedUser.lastName}` : "Alex Johnson";
    });

    const [isModalOpen, setIsModalOpen] = useState(false);

    // Fonction appelée par la modale quand on sauvegarde
    const handleProfileUpdate = (newName) => {
        setUserName(newName);
        setIsModalOpen(false); // On ferme la modale
    };

    const toggle = () => {
        setLanguage(language === "fr" ? "en" : "fr");
    };

    return (
        <div className="sidebar-container">
            {/* Header */}
            <div className="sidebar-header clickable" onClick={() => navigate("/")}>
                <div className="logo-box">
                    <span className="material-symbols-outlined">sports_soccer</span>
                </div>
                <div>
                    <h1 className="logo-text">FootReact</h1>
                    <p className="logo-subtext">Match Day Hub</p>
                </div>
            </div>

            {/* Menu principal (optimisé) */}
            <nav className="sidebar-menu">
                <SidebarItem 
                    icon="home" 
                    label={language === "fr" ? "Accueil" : "Home"} 
                    path="/" 
                />
                <SidebarItem 
                    icon="trophy" 
                    label={language === "fr" ? "Compétitions" : "Competitions"} 
                    path="/competitions" 
                />
            </nav>

            {/* LE SLIDER DE LANGUE */}
            <div className="lang-toggle-wrapper">
                <span className={`lang-text ${language === 'fr' ? 'active' : ''}`}>FR</span>
                <label className="lang-switch">
                    <input 
                        type="checkbox" 
                        onChange={toggle} 
                        checked={language === "en"} 
                    />
                    <span className="lang-slider"></span>
                </label>
                <span className={`lang-text ${language === 'en' ? 'active' : ''}`}>EN</span>
            </div>

            {/* Footer */}
            <div className="sidebar-footer clickable" onClick={() => setIsModalOpen(true)}>
                <div className="user-info">
                    <span className="material-symbols-outlined" style={{ fontSize: '40px' }}>
                        account_circle
                    </span>
                    <div className="user-details">
                        <span className="user-name">{userName}</span>
                        <span className="user-status">Premium Member</span>
                    </div>
                </div>
                <i className="bi bi-gear settings-icon"></i>
            </div>
            {isModalOpen && (
                <UserProfile
                    onClose={() => setIsModalOpen(false)}
                    onSave={handleProfileUpdate}
                />
            )}
        </div>
    );
};

export default Sidebar;