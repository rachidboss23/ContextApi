import React, { createContext, useEffect, useState } from "react";

export const PeliculasContext = createContext();

const PeliculasProvider = ({ children }) => {
    const [peliculas, setPeliculas] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetch("https://dragonball-api.com/api/characters?race=Saiyan&affiliation=Z%20fighter");
                const response = await data.json();

                // Imágenes en el orden deseado
                const images = [
                    "https://depor.com/resizer/xjQQIRWQbRxeaPYA4mzr1V7zsDQ=/580x330/smart/filters:format(jpeg):quality(90)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/DAYT2F5NUNB7VPAFKUPHNDXVQA.jpg",
                    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2024/12/vegeta-volvera-protagonizar-portada-serie-roja-dragon-ball-super-perfil-sabio-maduro-4271704.jpg?tf=1200x",
                    "https://www.metro951.com/wp-content/uploads/2015/01/Portada1.jpg",
                    "https://www.mundodeportivo.com/alfabeta/hero/2024/01/gotenks-.jpg?width=1200",
                    "https://www.mdtech.news/u/fotografias/m/2024/3/5/f1280x720-38078_169753_5050.jpg",
                    "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2021/04/dragon-ball-z-bardock-iba-ser-enemigo-goku-principio-2289389.jpg",
                    "https://img.europapress.es/fotoweb/fotonoticia_20170701115654_1200.jpg",
                    "https://i0.wp.com/codigoespagueti.com/wp-content/uploads/2022/06/Dragon-Ball-vegetto-super-saiyajin-4.jpg"
                ];

                // Obtener los personajes y asignarles las imágenes en orden
                const characters = Object.values(response);
                characters.forEach((character, index) => {
                    character.image = images[index % images.length];
                    character.like = false;
                });

                setPeliculas(characters);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };

        fetchData();
    }, []);

    return (
        <PeliculasContext.Provider value={{ peliculas, setPeliculas }}>
            {children}
        </PeliculasContext.Provider>
    );
};

export default PeliculasProvider;
