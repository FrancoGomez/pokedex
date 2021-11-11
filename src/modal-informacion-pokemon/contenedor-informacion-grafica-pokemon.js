const crearContenedorInformacionGraficaPokemon = (pokemon, especiePokemon) => {
    const displayedId = pokemon.id.toString().padStart(3, "0");
    const tipoPokemon = pokemon.types[0].type.name;
    const nombrePokemon = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
    const japaneseName = getJapaneseName(especiePokemon);

    const $contenedorInformacionGraficaPokemon = returnElement(
        "div",
        "modal-informacion-pokemon__contenedor-informacion-grafica-pokemon"
    );

    const colorFondoModal = colorTipos[pokemon.types[0].type.name];

    $modalPokemon.style.backgroundColor = colorFondoModal;

    const $botonAtras = crearBotonAtras(tipoPokemon);
    const $parrafoIdPokemon = returnElement(
        "p",
        "modal-informacion-pokemon__parrafo-id-pokemon",
        false,
        `#${displayedId}`,
        colorTexto[tipoPokemon]
    );
    const $tituloNombrePokemon = crearTituloNombrePokemon(
        nombrePokemon,
        tipoPokemon
    );
    const $contenedorPokemon = crearContenedorPokemon(
        japaneseName,
        tipoPokemon,
        pokemon.id
    );

    $contenedorInformacionGraficaPokemon.appendChild($botonAtras);
    $contenedorInformacionGraficaPokemon.appendChild($contenedorPokemon);
    $contenedorInformacionGraficaPokemon.appendChild($tituloNombrePokemon);
    $contenedorInformacionGraficaPokemon.appendChild($parrafoIdPokemon);

    return $contenedorInformacionGraficaPokemon;
};

const crearBotonAtras = (tipoPokemon) => {
    const $botonAtras = returnElement(
        "button",
        "modal__boton-atras",
        false,
        "Go back",
        colorTexto[tipoPokemon]
    );

    $botonAtras.onclick = () => {
        resetModalState();
        resetTecnicalContainerState();
        hideElement($modalPokemon);
        showElement($contenedorCartasPokemon);
    };

    return $botonAtras;
};

const crearTituloNombrePokemon = (nombrePokemon, tipoPokemon) => {
    const $tituloNombrePokemon = returnElement(
        "h2",
        "modal-informacion-pokemon__titulo-nombre-pokemon",
        false,
        nombrePokemon,
        colorTexto[tipoPokemon]
    );

    return $tituloNombrePokemon;
};

const crearContenedorPokemon = (
    nombrePokemonJapones,
    tipoPokemon,
    pokemonId
) => {
    const $contenedorPokemon = document.createElement("div");
    $contenedorPokemon.className =
        "modal-informacion-pokemon__contenedor-imagen-pokemon";

    const $tituloNombrePokemonJapones = crearTituloNombrePokemonJapones(
        nombrePokemonJapones,
        tipoPokemon
    );
    const $imagenPokemonModal = returnImage(
        "modal-informacion-pokemon__imagen-pokemon",
        false,
        getPokemonImage(pokemonId)
    );

    $contenedorPokemon.appendChild($tituloNombrePokemonJapones);
    $contenedorPokemon.appendChild($imagenPokemonModal);

    return $contenedorPokemon;
};

const crearTituloNombrePokemonJapones = (nombrePokemonJapones, tipoPokemon) => {
    const $tituloNombrePokemonJapones = returnElement(
        "h3",
        "modal-informacion-pokemon__titulo-nombre-pokemon-japones",
        false,
        nombrePokemonJapones,
        colorTexto[tipoPokemon]
    );

    return $tituloNombrePokemonJapones;
};
