// 1. Les imports de base (React, hooks, librairies essentielles)
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

// 3. Tes composants et modules
// Utilitaires et helpers (Configuration)
import router from './router';

// 4. Les styles et assets
import './index.css';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
