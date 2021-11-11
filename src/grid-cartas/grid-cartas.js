const crearGridCartas = () => {
    const $gridCartas = returnElement("div", "grid-cartas", "grid-cartas");

    $contenedorCartasPokemon.appendChild($gridCartas);

    $gridCartas.onclick = (evento) => {
        const pokemonId = evento.target.id;

        $modalPokemon.className = $modalPokemon.className.replace(
            " oculto",
            ""
        );
        mostrarInformacionPokemon(pokemonId);

        $contenedorCartasPokemon.className += " oculto";
    };
};

const crearPokemonEnGrid = async (cantidadPokemon) => {
    const $gridCartas = document.querySelector("#grid-cartas");

    for (let i = 0; i < cantidadPokemon; i++) {
        const pokemonId = i + 1;
        const pokemonUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonId}`;

        const pokemon = await (await fetch(pokemonUrl)).json();
        const $carta = crearCartaPokemon(pokemon);

        $gridCartas.appendChild($carta);
    }
};
