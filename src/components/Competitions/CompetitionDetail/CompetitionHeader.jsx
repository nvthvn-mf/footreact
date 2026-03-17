const CompetitionHeader = ({ competitionName, competitionEmblem, startYear, endYear, onExport }) => {


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
                )}
                <h4 className="text-white m-0 fw-bold">
                    {competitionName} {startYear}/{endYear}
                </h4>
            </div>
            <div className="d-flex gap-2" data-html2canvas-ignore="true">
                <button
                    className="btn-custom-export d-flex align-items-center gap-2 px-4 py-2"
                    onClick={onExport}
                >
                    <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>
                        download
                    </span>
                    Export
                </button>
            </div>
        </div>
    );
};

export default CompetitionHeader;