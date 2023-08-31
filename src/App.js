import { Buscar } from "./componenteVista/Buscar";
import { Listado } from "./componenteVista/Listado";
import { Crear } from "./componenteVista/Crear";
import { EncabezadoPrin } from "./componenteVista/EncabezadoPrin";
import { NavBarVistaPrin } from "./componenteVista/NavBarVistaPrin";
import { PiePaginaVistaPrin } from "./componenteVista/PiePaginaVistaPrin";
import { useState } from "react";

function App() {
  const [listadoState, setListadoState] = useState([]);

  return (
    <div className="layout">
      {/* encabezado */}
      <EncabezadoPrin />

      {/* barra de navegacion */}
      <NavBarVistaPrin />

      {/* contenido principal */}
      <section className="content">
        {/* aqui va el listado de peliculas */}
        <Listado
          listadoState={listadoState}
          setListadoState={setListadoState} />
      </section>

      {/* barra lateral */}
      <aside className="lateral">
        {/* Buscador */}
        <Buscar
          listadoState={listadoState}
          setListadoState={setListadoState} />

        {/* Crear */}
        <Crear setListadoState={setListadoState} />
      </aside>

      {/* pie de pagina */}
      <PiePaginaVistaPrin />
    </div>
  );
}

export default App;
