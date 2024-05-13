import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { BrowserRouter } from 'react-router-dom';
import PeliculasProvider from './context/PeliculasContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
    < PeliculasProvider>
    <App />
    </PeliculasProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
