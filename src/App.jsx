import './App.css'
import LeagueStandings from './components/standings/LeagueStandings.jsx';

function App() {

  return (
      <div className="app-container">
          {/* Ton menu latéral et ton dashboard iront ici */}

          <main style={{ padding: '20px', display: 'flex', justifyContent: 'flex-end' }}>
              {/* On affiche la brique de classement */}
              <LeagueStandings leagueCode="PL" />
          </main>
      </div>
  )
}

export default App
