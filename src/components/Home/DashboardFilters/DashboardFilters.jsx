import React, { useState } from "react";

function DashboardFilters({ onLeagueChange }) {

  const [selectedDay, setSelectedDay] = useState("today");

  const handleDayClick = (day) => {
    setSelectedDay(day);
  };

  return (
    <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-3 mb-5">

      {/* Slider dates */}
      <div className="filter-group d-flex gap-1">

        <button
          className={`filter-btn ${selectedDay === "yesterday" ? "active" : ""}`}
          onClick={() => handleDayClick("yesterday")}
        >
          Hier
        </button>

        <button
          className={`filter-btn ${selectedDay === "today" ? "active" : ""}`}
          onClick={() => handleDayClick("today")}
        >
          Aujourd'hui
        </button>

        <button
          className={`filter-btn ${selectedDay === "tomorrow" ? "active" : ""}`}
          onClick={() => handleDayClick("tomorrow")}
        >
          Demain
        </button>

      </div>

      {/* Sort */}
      <div className="sort-container d-flex align-items-center gap-2">

        <span className="material-symbols-outlined fs-5">
          sort
        </span>

        <select
          className="custom-select"
          onChange={onLeagueChange}
          defaultValue=""
        >
          <option value="" disabled hidden>
            Sort by: League
          </option>

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