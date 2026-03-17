// Les imports de base (React, hooks, librairies essentielles)
import React from 'react';

// Tes composants et modules
// Composants parents
import Dashboard from './Dashboard/Dashboard.jsx';
import LeagueStandings from './Standings/LeagueStandings.jsx';
import TopScorer from './TopScorer/TopScorer.jsx';
import QuickTips from './QuickTips/QuickTips.jsx';

// Les styles et assets
import './Home.css';


function Home() {
  return (
      <div className="home-container d-flex flex-column flex-xl-row">

          <div className="home-dashboard-area">
              <Dashboard />
          </div>
            <aside className="home-right-sidebar d-none d-xl-flex flex-column gap-5 p-4 p-xl-5">              <TopScorer />
              <QuickTips />
              <LeagueStandings />
          </aside>

      </div>
  );
}

export default Home;