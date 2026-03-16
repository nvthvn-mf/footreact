import React from 'react';
import './App.css';
import Home from './components/Home/Home.jsx';
import Sidebar from "./components/SideBar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import { LanguageProvider } from './contexte/LanguageContexte.jsx';

function App() {
  return (
      <div className="d-flex vh-100 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
        <LanguageProvider>
            <Sidebar />
        </LanguageProvider>
          <main className="flex-grow-1 d-flex">
              <Outlet />
          </main>

      </div>
  );
}

export default App;