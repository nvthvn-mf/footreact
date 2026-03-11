import React from 'react';
import './Home.css';
import Dashboard from '../Dashboard/Dashboard.jsx';
import LeagueStandings from '../Standings/LeagueStandings.jsx';
import TopScorer from '../TopScorer/TopScorer.jsx';
import QuickTips from '../QuickTips/QuickTips.jsx';

function Home() {
  return (

    <div className="min-vh-100 p-3 p-md-4" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
      <Dashboard />
      <TopScorer />
    <LeagueStandings />   
    <QuickTips />
  </div>
  );
}

export default Home;