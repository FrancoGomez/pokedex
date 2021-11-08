const elementosLista = ["Biography", "Stats", "Evolutions"];

let elegido = "biography";

const estado = {
  biography: true,
  stats: false,
  evolutions: false,
};

const crearContenedorInformacionTecnicaPokemon = async (
  pokemon,
  especiePokemon
) => {
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

  cambiarClaseElemento($listaOpcionesInformacion);

  $contenedorInformacionTecnicaPokemon.appendChild($listaOpcionesInformacion);
  $contenedorInformacionTecnicaPokemon.appendChild(
    crearContenedorBiografia(pokemon, especiePokemon)
  );
  $contenedorInformacionTecnicaPokemon.appendChild(
    crearContenedorStats(pokemon)
  );

  const $contenedorEvolucion = await crearContenedorEvolucion(especiePokemon);

  $contenedorInformacionTecnicaPokemon.appendChild($contenedorEvolucion);

  $listaOpcionesInformacion.onclick = (evento) => {
    if (estado[evento.target.id] === false && elegido !== evento.target.id) {
      const $elementoSeleccionado = document.querySelector(`#${elegido}Info`);
      $elementoSeleccionado.className += " oculto";

      const $elementoElegido = document.querySelector(
        `#${evento.target.id}Info`
      );
      $elementoElegido.className = $elementoElegido.className.replace(
        " oculto",
        ""
      );
      estado[elegido] = false;
      elegido = evento.target.id;
      estado[evento.target.id] = true;

      cambiarClaseElemento($listaOpcionesInformacion);
    }
  };

  return $contenedorInformacionTecnicaPokemon;
};

const crearElementoLista = (texto) => {
  const $elementoLista = document.createElement("li");
  $elementoLista.className = "modal-informacion-pokemon__elemento-lista";

  const $botonSeccion = document.createElement("button");

  $botonSeccion.setAttribute("id", texto.toLowerCase());
  $botonSeccion.innerText = texto;

  $elementoLista.appendChild($botonSeccion);

  return $elementoLista;
};

const cambiarClaseElemento = (lista) => {
  for (const $elemento of lista.childNodes) {
    if (estado[$elemento.childNodes[0].id]) {
      $elemento.childNodes[0].className =
        "modal-informacion-pokemon__boton-seccion--seleccionado";
    } else {
      $elemento.childNodes[0].className =
        "modal-informacion-pokemon__boton-seccion";
    }
  }
};
