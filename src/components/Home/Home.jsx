import React from 'react';
import './Home.css';
import Dashboard from '../Dashboard/Dashboard.jsx';
import LeagueStandings from '../Standings/LeagueStandings.jsx';
import TopScorer from '../TopScorer/TopScorer.jsx';
import QuickTips from '../QuickTips/QuickTips.jsx';

function Home() {
  return (

      <div className="container-fluid p-3 p-md-4">
          <div className="row g-4">

              <div className="col-12 col-xl-8">
                  <Dashboard />
              </div>

              <div className="col-12 col-xl-4 d-flex flex-column gap-4">
                  <TopScorer />
                   <QuickTips />
                  <LeagueStandings />
              </div>

          </div>
      </div>
  );
}

export default Home;