import React from 'react';

const SidebarItem = ({ icon, label }) => {
    const handleItemClick = () => {
        console.log(`Redirection vers la page : ${label}`);
    };
    return (
        <div
            className="sidebar-item"
            onClick={handleItemClick}
            style={{ cursor: 'pointer' }} // Pour être sûr que la petite main s'affiche
        >
            <span className="material-symbols-outlined sidebar-icon">
                {icon}
            </span>
            <span className="sidebar-label">{label}</span>
        </div>
    )
}

export default SidebarItem;