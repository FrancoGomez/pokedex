const crearContenedorBiografia = (pokemon, pokemonSpecies) => {
    const dataPokemon = obtenerDataPokemon(pokemon, pokemonSpecies);

    const $contenedorPokemonData = returnElement(
        "div",
        "modal-informacion-pokemon__contenedor-pokemon-data",
        "biographyInfo"
    );
    const $titlePokemonData = returnElement(
        "h4",
        "titulo-pokemon-data",
        false,
        "Pokemon Data"
    );
    const $pokemonDescription = returnElement(
        "p",
        "descripcion-pokemon",
        false,
        returnPokemonDescription(pokemonSpecies)
    );
    const $dataPokemonList = createDataPokemonList(dataPokemon, pokemon);

    $contenedorPokemonData.appendChild($titlePokemonData);
    $contenedorPokemonData.appendChild($pokemonDescription);
    $contenedorPokemonData.appendChild($dataPokemonList);

    return $contenedorPokemonData;
};

const returnPokemonDescription = (pokemonSpecies) => {
    const textEntries = pokemonSpecies.flavor_text_entries;

    for (const entry of textEntries) {
        if (entry.language.name === "en") {
            const description = entry.flavor_text
                .replaceAll("\n", " ")
                .replaceAll("POKéMON", "Pokémon");

            return description;
        }
    }
};

const createDataPokemonList = (dataPokemon, pokemon) => {
    const dataPokemonKeys = Object.keys(dataPokemon);

    const $dataPokemonList = returnElement("ul", "lista-data-pokemon");

    for (const data of dataPokemonKeys) {
        const $dataPokemonElement = createListItem(data, dataPokemon, pokemon);

        $dataPokemonList.appendChild($dataPokemonElement);
    }

    return $dataPokemonList;
};

const createListItem = (data, dataPokemon, pokemon) => {
    const $dataPokemonElement = returnElement("li", "elemento-data-pokemon");

    const $elementTitle = returnElement("h5", "titulo-elemento", false, data);
    $dataPokemonElement.appendChild($elementTitle);

    if (data !== "Abilities") {
        const $dataElement = returnElement(
            "p",
            "data-elemento-parrafo",
            false,
            dataPokemon[data]
        );

        $dataPokemonElement.appendChild($dataElement);
    } else {
        const $dataElement = createDataList(pokemon);

        $dataPokemonElement.appendChild($dataElement);
    }

    return $dataPokemonElement;
};

const createDataList = (pokemon) => {
    const pokemonAbilities = pokemon.abilities;

    const $dataElement = returnElement("ul", "data-elemento");

    for (const abilitySlot of pokemonAbilities) {
        const ability = abilitySlot.ability;
        const abilityName = abilitySlot.ability.name;

        if (ability) {
            const $elementDataItem = returnElement(
                "li",
                "item-data-elemento",
                false,
                abilityName
            );
            $dataElement.appendChild($elementDataItem);
        }
    }

    return $dataElement;
};

const obtenerDataPokemon = (pokemon, especiePokemon) => {
    const dataPokemon = {
        Species: especiePokemon.genera[7].genus.replace(" Pokémon", ""),
        Height: `${pokemon.height / 10}m`,
        Weight: `${(pokemon.weight / 10).toFixed(1)}kg`,
        Abilities: pokemon.abilities,
        Gender: `${
            especiePokemon.gender_rate !== -1
                ? `♂ ${100 - (especiePokemon.gender_rate / 8) * 100}% ♀ ${
                      (especiePokemon.gender_rate / 8) * 100
                  }%`
                : "Genderless"
        }`,
        "Catch Rate": `${((especiePokemon.capture_rate / 255) * 100).toFixed(
            1
        )}%`,
    };

    return dataPokemon;
};
