const mostrarInformacionPokemon = async (idPokemon) => {
    const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${idPokemon}`;
    const especiePokemonUrl = `https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`;

    const pokemon = await (await fetch(pokemonUrl)).json();
    const especiePokemon = await (await fetch(especiePokemonUrl)).json();

    const $contenedorInformacionGraficaPokemon =
        crearContenedorInformacionGraficaPokemon(
            pokemon,
            especiePokemon,
            $modalPokemon
        );
    const $contenedorInformacionTecnicaPokemon =
        await crearContenedorInformacionTecnicaPokemon(pokemon, especiePokemon);

    $modalPokemon.appendChild($contenedorInformacionGraficaPokemon);
    $modalPokemon.appendChild($contenedorInformacionTecnicaPokemon);
};
