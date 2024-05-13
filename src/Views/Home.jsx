import React, { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import Tarjeta from "../Components/Tarjeta";

const Home = () => {
    const { peliculas } = useContext(PeliculasContext);

    return (
        <div className="row">
            {peliculas.map(pelicula => (
                <Tarjeta key={pelicula.id} pelicula={pelicula} />
            ))}
        </div>
    );
};

export default Home;


