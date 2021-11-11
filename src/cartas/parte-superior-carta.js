const crearParteSuperiorCarta = (pokemonId, primerTipo) => {
    const $parteSuperiorCarta = returnElement("div", "parte-superior-carta");

    $parteSuperiorCarta.appendChild(crearTextoIdPokemon(pokemonId, primerTipo));
    $parteSuperiorCarta.appendChild(crearContenedorImagenPokemon(pokemonId));

    return $parteSuperiorCarta;
};

const crearTextoIdPokemon = (pokemonId, primerTipo) => {
    const displayedId = pokemonId.toString().padStart(3, "0");
    const textColor = colorTexto[primerTipo];

    const $textoIdPokemon = returnElement(
        "p",
        "texto-id-pokemon",
        false,
        `#${displayedId}`,
        textColor
    );

    return $textoIdPokemon;
};

const crearContenedorImagenPokemon = (pokemonId) => {
    const $contenedorImagenPokemon = returnElement(
        "div",
        "contenedor-imagen-pokemon"
    );
    const $backgroundPokemon = returnElement("div", "fondo-pokemon");
    const $pokemonImage = returnImage(
        "imagen-pokemon",
        false,
        getPokemonImage(pokemonId)
    );

    $contenedorImagenPokemon.appendChild($backgroundPokemon);
    $contenedorImagenPokemon.appendChild($pokemonImage);

    return $contenedorImagenPokemon;
};
