const elementosLista = ["Biography", "Stats", "Evolutions"];

const crearContenedorInformacionTecnicaPokemon = (pokemon, especiePokemon) => {
  const $contenedorInformacionTecnicaPokemon = document.createElement("div");
  $contenedorInformacionTecnicaPokemon.className =
    "modal-informacion-pokemon__contenedor-informacion-tecnica-pokemon";

  const $listaOpcionesInformacion = document.createElement("ul");
  $listaOpcionesInformacion.className =
    "modal-informacion-pokemon__lista-opciones-informacion";

  elementosLista.forEach((elemento, index) => {
    const $elementoLista = crearElementoLista(elemento, index);

    $listaOpcionesInformacion.appendChild($elementoLista);
  });

  $contenedorInformacionTecnicaPokemon.appendChild($listaOpcionesInformacion);
  $contenedorInformacionTecnicaPokemon.appendChild(
    crearContenedorPokemonData(pokemon, especiePokemon)
  );

  return $contenedorInformacionTecnicaPokemon;
};

const crearElementoLista = (texto, index) => {
  const $elementoLista = document.createElement("li");
  $elementoLista.className = "modal-informacion-pokemon__elemento-lista";

  const $botonSeccion = document.createElement("button");

  if (index === 0) {
    $botonSeccion.className =
      "modal-informacion-pokemon__boton-seccion--seleccionado";
  } else {
    $botonSeccion.className = "modal-informacion-pokemon__boton-seccion";
  }

  $botonSeccion.innerText = texto;

  $elementoLista.appendChild($botonSeccion);

  return $elementoLista;
};
