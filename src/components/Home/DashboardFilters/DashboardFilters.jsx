// src/components/Home/DashboardFilters/DashboardFilters.jsx
import React from 'react';

function DashboardFilters({ onLeagueChange, activeFilter, onFilterChange }) {
  return (
      <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5">

        {/* Filtres de jours */}
        <div className="filter-group d-flex gap-1">
          <button
              className={`filter-btn ${activeFilter === 'yesterday' ? 'active' : ''}`}
              onClick={() => onFilterChange('yesterday')}
          >
            Hier
          </button>
          <button
              className={`filter-btn ${activeFilter === 'today' ? 'active' : ''}`}
              onClick={() => onFilterChange('today')}
          >
            Aujourd'hui
          </button>
          <button
              className={`filter-btn ${activeFilter === 'tomorrow' ? 'active' : ''}`}
              onClick={() => onFilterChange('tomorrow')}
          >
            Demain
          </button>
        </div>

        {/* Sélecteur de Ligue (Sort by) */}
        <div className="sort-container d-flex align-items-center gap-2">
          <span className="material-symbols-outlined fs-5">sort</span>
          <select
              className="custom-select"
              onChange={onLeagueChange}
              defaultValue=""
          >
            <option value="" disabled hidden>Sort by: League</option>
            <option value="CL">Champions League</option>
            <option value="PL">Premier League</option>
            <option value="PD">La Liga</option>
            <option value="FL1">Ligue 1</option>
          </select>
        </div>
      </div>
  );
}

export default DashboardFilters;