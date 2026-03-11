import React from 'react';
import { NavLink } from 'react-router-dom';

const SidebarItem = ({ icon, label, path }) => {
    return (
        <NavLink
            to={path}
            // NavLink nous donne accès à "isActive" pour savoir si l'URL correspond
            className={({ isActive }) =>
                `sidebar-item ${isActive ? 'active' : ''}`
            }
            style={{
                textDecoration: 'none', // Enlève le soulignement bleu par défaut des liens
                display: 'flex' // Sécurité pour garder ton alignement Flexbox
            }}
        >
            <span className="material-symbols-outlined sidebar-icon">
                {icon}
            </span>
            <span className="sidebar-label">{label}</span>
        </NavLink>
    );
}

export default SidebarItem;