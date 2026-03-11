import React from 'react';
import './App.css';
import MatchCard from './components/MatchCard/MatchCard';
import LeagueStandings from './components/Standings/LeagueStandings.jsx';
import TopScorer from './components/TopScorer/TopScorer';
import Home from './components/Home/Home.jsx';
import Sidebar from "./components/SideBar/Sidebar.jsx";

function App() {
  
  return (

      <div className="d-flex min-vh-100" style={{ backgroundColor: 'var(--color-bg-dark)' }}>

          <Sidebar />

          <main className="flex-grow-1" style={{ overflowY: 'auto' }}>
              <Home />
          </main>

      </div>
  );

}

export default App;