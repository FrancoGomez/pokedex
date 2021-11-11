const crearParteInferiorCarta = (name, types) => {
    const $parteInferiorCarta = returnElement("div", "parte-inferior-carta");
    const $pokemonName = returnElement("h2", "nombre-pokemon", false, name);
    const $pokemonTypes = crearParrafoTipos(types);

    $parteInferiorCarta.appendChild($pokemonName);
    $parteInferiorCarta.appendChild($pokemonTypes);

    return $parteInferiorCarta;
};

const crearParrafoTipos = (tipos) => {
    const $contenedorTiposPokemon = returnElement(
        "div",
        "contenedor-tipos-pokemon"
    );

    for (const tipo of tipos) {
        const pokemonType = tipo.type.name;
        const pokemonColor = colorTipos[pokemonType];

        const $typeParagraph = returnElement(
            "p",
            "tipo-pokemon",
            false,
            pokemonType.toUpperCase(),
            pokemonColor
        );

        $contenedorTiposPokemon.appendChild($typeParagraph);
    }

    return $contenedorTiposPokemon;
};
