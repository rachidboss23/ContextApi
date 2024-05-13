import React, { useContext } from "react";
import { PeliculasContext } from "../context/PeliculasContext";

const Tarjeta = ({ pelicula }) => {
    const { peliculas, setPeliculas } = useContext(PeliculasContext);

    const agregarFavorito = (id) => {
        const peliculasActualizadas = peliculas.map(p => {
            if (p.id === id) {
                return { ...p, like: !p.like };
            }
            return p;
        });
        setPeliculas(peliculasActualizadas);
    };

    return (
        <div className="col-md-4 mt-5">
            <div className="card">
                <img src={pelicula.image} className="card-img-top" alt={pelicula.name} />
                <div className="card-body">
                    <h5 className="card-title">{pelicula.name}</h5>
                    <p className="card-text">
                        <strong>Ki:</strong> {pelicula.ki}
                    </p>
                    <button onClick={() => agregarFavorito(pelicula.id)} className="btn btn-primary">
                        {pelicula.like ? "Eliminar" : "Agregar"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Tarjeta;

