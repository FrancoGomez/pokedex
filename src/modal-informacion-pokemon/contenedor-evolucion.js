const crearContenedorEvolucion = async (especiePokemon) => {
  const $contenedorEvolucion = document.createElement("div");
  $contenedorEvolucion.className =
    "modal-informacion-pokemon__contenedor-pokemon-data evolution oculto";
  $contenedorEvolucion.setAttribute("id", "evolutionsInfo");

  const urlCadenaEvolucion = especiePokemon.evolution_chain.url;

  const cadenaEvolucionJSON = await (await fetch(urlCadenaEvolucion)).json();

  const urlPrimeraEvolucion = [];

  const urlSegundaEvolucion = [];

  const urlTerceraEvolucion = [];

  urlPrimeraEvolucion.push(
    cadenaEvolucionJSON.chain.species.url.replace("-species", "")
  );

  if (cadenaEvolucionJSON.chain.evolves_to.length > 0) {
    cadenaEvolucionJSON.chain.evolves_to.forEach(async (elemento) => {
      urlSegundaEvolucion.push(elemento.species.url.replace("-species", ""));
    });

    if (cadenaEvolucionJSON.chain.evolves_to[0].evolves_to.length > 0) {
      cadenaEvolucionJSON.chain.evolves_to[0].evolves_to.forEach((elemento) => {
        urlTerceraEvolucion.push(elemento.species.url.replace("-species", ""));
      });
    }
  }

  const primeraEvolucion = await devolverPokemonArray(urlPrimeraEvolucion);
  const segundaEvolucion = await devolverPokemonArray(urlSegundaEvolucion);
  const terceraEvolucion = await devolverPokemonArray(urlTerceraEvolucion);

  $contenedorEvolucion.appendChild(
    devolverListaPokemon([primeraEvolucion, segundaEvolucion, terceraEvolucion])
  );

  return $contenedorEvolucion;
};

const devolverPokemonArray = async (arrayUrl) => {
  const arrayPokemon = [];

  if (arrayUrl.length > 0) {
    for (const url of arrayUrl) {
      const pokemon = await (await fetch(url)).json();

      arrayPokemon.push(pokemon);
    }

    return arrayPokemon;
  }
};

const devolverListaPokemon = (arrayEvoluciones) => {
  const $listaPokemon = document.createElement("ul");
  $listaPokemon.className = "modal__lista-pokemon";
  let cantidadFlechas = 0;

  for (const evolucion of arrayEvoluciones) {
    if (evolucion !== undefined) {
      cantidadFlechas++;
      let contadorFlechas = 0;

      if (contadorFlechas !== cantidadFlechas - 1) {
        const $elementoFlecha = document.createElement("li");
        $elementoFlecha.className = "modal__elemento-flecha";
        $elementoFlecha.innerText = "▼";

        $listaPokemon.appendChild($elementoFlecha);
      }

      const $elementoPokemon = devolverElementosPokemon(evolucion);

      $listaPokemon.appendChild($elementoPokemon);
    }
  }

  return $listaPokemon;
};

const devolverElementosPokemon = (evolucion) => {
  const $elementoPokemon = document.createElement("li");
  $elementoPokemon.className = "modal__elemento-pokemon";

  for (const pokemon of evolucion) {
    const $contenedorPokemon = devolverContenedorPokemon(pokemon);

    $elementoPokemon.appendChild($contenedorPokemon);
  }

  return $elementoPokemon;
};

const devolverContenedorPokemon = (pokemon) => {
  const $contenedorPokemon = document.createElement("div");
  $contenedorPokemon.className = "modal__contenedor-pokemon";

  const $imagenPokemon = document.createElement("img");
  $imagenPokemon.className = "modal__imagen-pokemon";
  const imagenUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemon.id}.png`;
  $imagenPokemon.src = imagenUrl;
  $imagenPokemon.style.backgroundColor = colorTipos[pokemon.types[0].type.name];

  const $nombrePokemon = document.createElement("h4");
  $nombrePokemon.className = "modal__nombre-pokemon";
  const pokemonName =
    pokemon.name[0].toUpperCase() +
    pokemon.name.slice(1)
  const pokemonId = pokemon.id.toString().padStart(3, "0");
  $nombrePokemon.innerText = `${pokemonName} #${pokemonId}`;

  const $contenedorTipoPokemon = document.createElement("div");
  $contenedorTipoPokemon.className = "modal__contenedor-tipo-pokemon";

  const $tipoPokemon = document.createElement("p");
  $tipoPokemon.className = "modal__tipo-pokemon";
  $tipoPokemon.innerText = pokemon.types[0].type.name;

  $contenedorPokemon.appendChild($imagenPokemon);
  $contenedorPokemon.appendChild($nombrePokemon);

  for (const tipo of pokemon.types) {
    const $tipoPokemon = document.createElement("p");
    $tipoPokemon.className = "modal__tipo-pokemon";
    const tipoPokemon = tipo.type.name;
    $tipoPokemon.innerText = tipoPokemon.toUpperCase();
    $tipoPokemon.style.color = colorTipos[tipoPokemon];

    $contenedorTipoPokemon.appendChild($tipoPokemon);
  }

  $contenedorPokemon.appendChild($contenedorTipoPokemon);

  return $contenedorPokemon;
};
