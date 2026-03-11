import React from 'react';
import './App.css';
import Sidebar from "./components/SideBar/Sidebar.jsx";
import { Outlet } from "react-router-dom";

function App() {
  
  return (

      <div className="d-flex min-vh-100" style={{ backgroundColor: 'var(--color-bg-dark)' }}>

          <Sidebar />

          <main className="flex-grow-1" style={{ overflowY: 'auto' }}>
              <Outlet />
          </main>

      </div>
  );

}

export default App;