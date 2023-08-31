import React, { useEffect, useState } from 'react'
import { Editar } from './Editar';

export const Listado = ({ listadoState, setListadoState }) => {

    // const [listadoState, setListadoState] = useState([]);

    const [editar, setEditar] = useState(0);
    useEffect(() => {
        console.log("componentes del listado de peliculas cargando!!");
        conseguirPeliculas();

    }, []);

    const conseguirPeliculas = () => {
        let peliculas = JSON.parse(localStorage.getItem("pelis"));

        setListadoState(peliculas);
        return peliculas
    }

    const borrarPeli = (id) => {
        //conseguir la peliculas almacenadas
        let pelis_almacenadas = conseguirPeliculas();

        //filtrar esas peliculas para que elimine del array lo que se quiere
        let nuevo_array_peliculas = pelis_almacenadas.filter(peli => peli.id !== parseInt(id));
        // Actualizar estado del listado
        setListadoState(nuevo_array_peliculas);
        //Actualizar los datos en el local storage
        localStorage.setItem('pelis', JSON.stringify(nuevo_array_peliculas));
    }

    return (
        <>
            {/* Condicion si no hay peliculas*/}
            {listadoState != null ?
                // hacemos que la carga de datos en las tarjetas sea dinamica
                listadoState.map(peli => {
                    return (
                        <article key={peli.id} className="peli-item">
                            <h3 className="title">{peli.titulo}</h3>
                            <p className="descripcion">{peli.descripcion}</p>

                            <button className="edit" onClick={() => setEditar(peli.id)}>Editar</button>
                            <button className="delete" onClick={() => borrarPeli(peli.id)}>Borrar</button>
                            {/* Aparece formulario editor */}
                            {editar === peli.id && (
                                <Editar
                                    peli={peli}
                                    conseguirPeliculas={conseguirPeliculas}
                                    setEditar= {setEditar}
                                    setListadoState={setListadoState}
                                />
                            )}
                        </article>
                    );
                })
                : <h2>No hay peliculas para mostrar</h2>
            }

        </>
    )
}

