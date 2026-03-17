import "./DashboardHeader.css";

function DashboardHeader({ onDateChange }) {
  return (
    <header className="d-flex flex-column flex-md-row justify-content-between align-items-md-center gap-4 mb-5">
      
      <h2 className="fw-bold m-0 text-white" style={{ fontSize: "1.5rem" }}>
        Dashboard
      </h2>

      <div className="d-flex align-items-center gap-3">

        {/* Barre de recherche */}
        <div className="search-container d-flex align-items-center">
          <span className="material-symbols-outlined me-2" style={{ color: "#64748b" }}>
            search
          </span>

          <input
            type="text"
            className="search-input"
            placeholder="Search teams, leagues, players..."
          />
        </div>

        {/* Notifications */}
        <button className="icon-btn position-relative border-0">
          <span className="material-symbols-outlined">notifications</span>

          <span
            className="position-absolute top-0 end-0 mt-1 me-1 translate-middle p-1 rounded-circle"
            style={{ backgroundColor: "var(--color-primary)" }}
          ></span>
        </button>

        {/* Calendar */}
        <label className="icon-btn border-0 m-0 position-relative">
          <span className="material-symbols-outlined">calendar_today</span>

          <input
            type="date"
            className="position-absolute opacity-0"
            style={{
              width: "100%",
              height: "100%",
              cursor: "pointer",
              top: 0,
              left: 0
            }}
            onChange={onDateChange}
          />
        </label>

      </div>
    </header>
  );
}

export default DashboardHeader;