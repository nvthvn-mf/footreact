import React from 'react';
import './App.css';
import Home from './components/Home/Home.jsx';
import Sidebar from "./components/SideBar/Sidebar.jsx";

function App() {
  return (
      <div className="d-flex vh-100 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-dark)' }}>

          <Sidebar />
          <main className="flex-grow-1 d-flex">
              <Home />
          </main>

      </div>
  );
}

export default App;