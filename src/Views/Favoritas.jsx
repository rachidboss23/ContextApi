import React, { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";
import Tarjeta from "../Components/Tarjeta";

const Favoritas = () => {
    const { peliculas } = useContext(PeliculasContext);

    return (
        <div className="row">
            {peliculas && peliculas
                .filter(pelicula => pelicula.like)
                .map(pelicula => (
                    <Tarjeta key={pelicula.id} pelicula={pelicula} />
                ))}
        </div>
    );
};

export default Favoritas;

