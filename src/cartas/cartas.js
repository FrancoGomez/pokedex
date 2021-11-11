const crearCartaPokemon = (pokemon) => {
    const firstTypePokemon = pokemon.types[0].type.name;
    const pokemonId = pokemon.id;
    const pokemonName = pokemon.species.name;
    const pokemonTypes = pokemon.types;
    const colorFirstType = colorTipos[firstTypePokemon];

    const $carta = returnElement("div", "carta");
    $carta.style.backgroundColor = colorFirstType;

    const $parteSuperiorCarta = crearParteSuperiorCarta(
        pokemonId,
        firstTypePokemon
    );
    const $parteInferiorCarta = crearParteInferiorCarta(
        pokemonName,
        pokemonTypes
    );
    const $envolvedorCarta = returnElement(
        "div",
        "envolvedor-carta",
        pokemonId
    );

    appendChilds($carta, [
        $parteSuperiorCarta,
        $parteInferiorCarta,
        $envolvedorCarta,
    ]);

    return $carta;
};
