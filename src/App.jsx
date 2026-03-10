import './App.css'
import LeagueStandings from './components/standings/LeagueStandings.jsx';

function App() {

  return (
      <div className="app-container">

          <main style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              <LeagueStandings leagueCode="PL" />
          </main>
      </div>
  )
}

export default App
