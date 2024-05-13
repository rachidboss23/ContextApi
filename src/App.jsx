import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Favoritas from './Views/Favoritas';
import Home from './Views/Home';
import Navbar from './Components/Navbar';
import PeliculasProvider from './context/PeliculasContext';

const App = () => {
    return (
        <PeliculasProvider>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/favoritas" element={<Favoritas />} />
            </Routes>
        </PeliculasProvider>
    );
}

export default App;


