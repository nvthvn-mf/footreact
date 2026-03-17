import './QuickTips.css';

const QuickTips = () => {
    
    // Fonction au clic (pour la future fonctionnalité de notifications)
    const handleEnableAlerts = () => {
        console.log("🔔 Action : Ouverture des paramètres de notifications");
    };

    return (
        <div className="quick-tips-container mb-4" onClick={handleEnableAlerts}>
            <div className="quick-tips-glow"></div>
            <div className="quick-tips-content">
                <h3 className="quick-tips-title">
                    <span className="material-symbols-outlined" style={{ fontSize: '1.125rem' }}>
                        bolt
                    </span>
                    Quick Tip
                </h3>
                
                <p className="quick-tips-text">
                    Vous pouvez configurer des notifications push pour des équipes spécifiques 
                    afin de ne jamais manquer un coup d'envoi !
                </p>
                
                <button className="quick-tips-btn">
                    Activez les alertes 
                    <span className="material-symbols-outlined" style={{ fontSize: '0.875rem' }}>
                        arrow_forward
                    </span>
                </button>
            </div>
        </div>
    );
};

export default QuickTips;