import React from 'react';

const CompetitionHeader = ({ competitionName, competitionEmblem, startYear, endYear }) => {
    return (
        <div className="d-flex justify-content-between align-items-center mb-4">
            <div className="d-flex align-items-center gap-3">
                {competitionEmblem && (
                    <div className="bg-white rounded-circle d-flex justify-content-center align-items-center shadow-sm" style={{ width: '48px', height: '48px' }}>
                        <img
                            src={competitionEmblem}
                            alt={`${competitionName} logo`}
                            style={{ maxWidth: '30px', maxHeight: '30px' }}
                        />
                    </div>
                )}                <h4 className="text-white m-0 fw-bold">
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