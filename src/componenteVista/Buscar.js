import React, { useState } from 'react'

export const Buscar = ({ listadoState, setListadoState }) => {
    const [busqueda, setBusqueda] = useState('');
    const [noEcontrado, setNoEncontrado] = useState(false);

    const buscarPeli = (e) => {
        //Crear estado y actualizarlo
        setBusqueda(e.target.value);

        //Filtrar para buscar coincidencias
        let pelis_encontradas = listadoState.filter(pelis => {
            return pelis.titulo.toLowerCase().includes(busqueda.toLocaleLowerCase());
        });

        //Comprobar si hay un resultado
        if (busqueda.length <= 1 || pelis_encontradas <= 0) {
            pelis_encontradas = JSON.parse(localStorage.getItem("pelis"));
            setNoEncontrado(true);
        } else {
            setNoEncontrado(false);
        }

        //Actualizar estado del lsitado principal con lo que logrado filtrar
        setListadoState(pelis_encontradas);
    }

    return (
        <div className="search">
            <h3 className="title">Buscador</h3>
            {(noEcontrado === true && busqueda.length > 1) &&(
                <span className='no-encontrado'> No se encontraron coincidencias</span>
            )}
            <form action="">
                <input
                    type="text"
                    id='search_field'
                    placeholder="Escribe"
                    name='busqueda'
                    autoComplete='off'
                    value={busqueda}
                    onChange={buscarPeli} />
                <button>Buscar</button>
            </form>
        </div>
    )
}
