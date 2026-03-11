import React from 'react';
import './App.css';
import Home from './components/Home/Home.jsx';
import Sidebar from "./components/SideBar/Sidebar.jsx";

function App() {
  return (
      // vh-100 et overflow-hidden verrouillent la taille de la fenêtre
      <div className="d-flex vh-100 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-dark)' }}>

          <Sidebar />

          {/* Le main prend tout l'espace restant, sans scroller lui-même */}
          <main className="flex-grow-1 d-flex">
              <Home />
          </main>

      </div>
  );
}

export default App;