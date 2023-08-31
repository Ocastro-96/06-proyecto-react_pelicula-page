import React, { useState } from 'react'
import { GuardarEnStorage } from '../helpers/GuardarEnStorage';

export const Crear = ({setListadoState}) => {
    const tituloComponente = "Añadir Pelicula"
    const [pelicula, setPelicula] = useState({
        titulo: '',
        descripcion: ''
    });
    // desestructuracion de un Objeto
    const { titulo, descripcion } = pelicula;

    const conseguirDatosForm = e => {
        e.preventDefault();
        let target = e.target;
        let titulo = target.titulo.value;
        let descripcion = target.descripcion.value;

        //Creamos un objeto
        let peli = {
            id: new Date().getTime(),
            titulo,
            descripcion
        }

        //guardar el estado de la variable
        setPelicula(peli);

        //Actualizar el estado del listado principal
        setListadoState(elementos =>{
            return[...elementos, peli]
        });

        //guardar en el almacenameinto local
        GuardarEnStorage("pelis", peli);
        GuardarEnStorage("copi_de_datos", peli);

        
    }

    return (
        <div>
            <div className="add">
                <h3 className="title"> {tituloComponente} </h3>
                {(titulo && descripcion) && "Ha creado la pelicula: " + titulo}
                <form onSubmit={conseguirDatosForm}>
                    <input type="text"
                        id='titulo'
                        name='titulo'
                        placeholder="Titulo" 
                        required/>

                    <textarea
                        id="descripcion"
                        name="descripcion"
                        cols="30"
                        rows="10"
                        placeholder="Descipcion"
                        required></textarea>

                    <input
                        type="submit"
                        id='save'
                        value="Guardar" />
                </form>
            </div>
        </div>
    )
}
