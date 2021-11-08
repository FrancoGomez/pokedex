const crearContenedorBiografia = (pokemon, especiePokemon) => {
  const dataPokemon = {
    Species: especiePokemon.genera[7].genus.replace(" Pokémon", ""),
    Height: `${pokemon.height / 10}m`,
    Weight: `${(pokemon.weight / 10).toFixed(1)}kg`,
    Abilities: pokemon.abilities,
    Gender: `${
      especiePokemon.gender_rate !== -1
        ? `♂ ${100 - (especiePokemon.gender_rate / 8) * 100} ♀ ${
            (especiePokemon.gender_rate / 8) * 100
          }`
        : "Genderless"
    }`,
    "Catch Rate": `${((especiePokemon.capture_rate / 255) * 100).toFixed(1)}%`,
  };

  const $contenedorPokemonData = document.createElement("div");
  $contenedorPokemonData.className =
    "modal-informacion-pokemon__contenedor-pokemon-data";
  $contenedorPokemonData.setAttribute("id", "biographyInfo");

  const $tituloPokemonData = document.createElement("h4");
  $tituloPokemonData.className = "titulo-pokemon-data";
  $tituloPokemonData.innerText = "Pokemon Data";

  const $descripcionPokemon = document.createElement("p");
  $descripcionPokemon.className = "descripcion-pokemon";

  let descripcionPokemon = "";

  especiePokemon.flavor_text_entries.forEach((entrada) => {
    if (entrada.language.name === "en") {
      descripcionPokemon = entrada.flavor_text.replaceAll("\n", " ");
    }
  });

  $descripcionPokemon.innerText = descripcionPokemon;

  const $listaDataPokemon = document.createElement("ul");
  $listaDataPokemon.className = "lista-data-pokemon";

  Object.keys(dataPokemon).forEach((data) => {
    const $elementoDataPokemon = document.createElement("li");
    $elementoDataPokemon.className = "elementoDataPokemon";

    const $tituloElemento = document.createElement("h5");
    $tituloElemento.className = "titulo-elemento";
    $tituloElemento.innerText = data;

    $elementoDataPokemon.appendChild($tituloElemento);

    if (data !== "Abilities") {
      const $dataElemento = document.createElement("p");
      $dataElemento.className = "data-elemento-parrafo";
      $dataElemento.innerText = dataPokemon[data];

      $elementoDataPokemon.appendChild($dataElemento);
    } else {
      const $dataElemento = document.createElement("ul");
      $dataElemento.className = "data-elemento";

      pokemon.abilities.forEach((slotAbilidad) => {
        if (slotAbilidad.ability) {
          const $itemDataElemento = document.createElement("li");
          $itemDataElemento.className = "item-data-elemento";
          $itemDataElemento.innerText =
            slotAbilidad.ability.name[0].toUpperCase() +
            slotAbilidad.ability.name.slice(1);

          $dataElemento.appendChild($itemDataElemento);
        }
      });

      $elementoDataPokemon.appendChild($dataElemento);
    }

    $listaDataPokemon.appendChild($elementoDataPokemon);
  });

  $contenedorPokemonData.appendChild($tituloPokemonData);
  $contenedorPokemonData.appendChild($descripcionPokemon);
  $contenedorPokemonData.appendChild($listaDataPokemon);

  return $contenedorPokemonData;
};
