const crearContenedorInformacionTecnicaPokemon = () => {
  const $contenedorInformacionTecnicaPokemon = document.createElement("div");
  $contenedorInformacionTecnicaPokemon.className =
    "modal-informacion-pokemon__contenedor-informacion-tecnica-pokemon";

  const $listaOpcionesInformacion = document.createElement("ul");
  $listaOpcionesInformacion.className = "lista-opciones-informacion";

  return $contenedorInformacionTecnicaPokemon;
};