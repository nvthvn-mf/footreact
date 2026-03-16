function DashboardFilters({ onLeagueChange, activeFilter, onFilterChange, leagues, selectedLeague }) {
  return (
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5">
        
        {/* Filtres de jours */}
        <div className="filter-group d-flex gap-1">
          {['yesterday', 'today', 'tomorrow'].map(f => (
            <button
                key={f}
                className={`filter-btn ${activeFilter === f ? 'active' : ''}`}
                onClick={() => onFilterChange(f)}
            >
              {f === 'yesterday' ? 'Hier' : f === 'today' ? "Aujourd'hui" : 'Demain'}
            </button>
          ))}
        </div>

        {/* Sélecteur de Ligue Dynamique */}
        <div className="sort-container d-flex align-items-center gap-2">
          <span className="material-symbols-outlined fs-5">filter_list</span>
          <select
              className="custom-select"
              onChange={onLeagueChange}
              value={selectedLeague}
          >
            <option value="">Toutes les ligues</option>
            {leagues.map(league => (
                <option key={league.id} value={league.code}>
                    {league.name}
                </option>
            ))}
          </select>
        </div>
      </div>
  );
}
export default DashboardFilters;