import React from 'react';
import './App.css';
import Home from './components/Home/Home.jsx';
import Sidebar from "./components/SideBar/Sidebar.jsx";
import { Outlet } from "react-router-dom";
import { LanguageProvider } from './contexte/LanguageContexte.jsx';
import { FavoritesProvider } from './contexte/FavoritesContext.jsx'; 

function App() {
  return (
      <FavoritesProvider>
          <LanguageProvider>
              <div className="d-flex vh-100 overflow-hidden" style={{ backgroundColor: 'var(--color-bg-dark)' }}>
                  
                  <Sidebar />
                  
                  <main className="flex-grow-1 d-flex">
                      <Outlet />
                  </main>

              </div>
          </LanguageProvider>
      </FavoritesProvider>
  );
}

export default App;