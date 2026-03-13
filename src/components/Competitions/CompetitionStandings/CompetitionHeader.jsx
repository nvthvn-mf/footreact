import React from 'react';

const CompetitionHeader = ({ competitionName, startYear, endYear }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center gap-3">
                <span className="badge bg-success bg-opacity-25 text-success px-3 py-2 rounded-pill">LIVE</span>
                <h4 className="text-white m-0 fw-bold">
                    {competitionName} {startYear}/{endYear} Standings
                </h4>
            </div>
            <div className="d-flex gap-2">
                <button className="btn btn-outline-secondary text-white rounded-pill px-4">
                    <i className="bi bi-download"></i> Export
                </button>
            </div>
        </div>
    );
};

export default CompetitionHeader;