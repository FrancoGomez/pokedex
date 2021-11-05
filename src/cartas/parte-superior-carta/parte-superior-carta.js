const crearParteSuperiorCarta = (pokemonId) => {
  const $parteSuperiorCarta = document.createElement("div");
  $parteSuperiorCarta.className = "parte-superior-carta";

  $parteSuperiorCarta.appendChild(crearTextoIdPokemon(pokemonId));
  $parteSuperiorCarta.appendChild(crearContenedorImagenPokemon(pokemonId));

  return $parteSuperiorCarta;
};

const crearTextoIdPokemon = (pokemonId) => {
  const $textoIdPokemon = document.createElement("p");

  const id = pokemonId.toString().padStart(3, "0");

  $textoIdPokemon.innerText = `#${id}`;
  $textoIdPokemon.className = "texto-id-pokemon";

  return $textoIdPokemon;
};

const crearContenedorImagenPokemon = (pokemonId) => {
  const $contenedorImagenPokemon = document.createElement("div");
  $contenedorImagenPokemon.className = "contenedor-imagen-pokemon";

  $contenedorImagenPokemon.appendChild(crearFondoPokemon());
  $contenedorImagenPokemon.appendChild(crearImagenPokemon(pokemonId));

  return $contenedorImagenPokemon;
};

const crearFondoPokemon = () => {
  const $fondoPokemon = document.createElement("div");
  $fondoPokemon.className = "fondo-pokemon";

  return $fondoPokemon;
};

const crearImagenPokemon = (pokemonId) => {
  const $imagenPokemon = document.createElement("img");
  const imagenUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;

  $imagenPokemon.src = imagenUrl;
  $imagenPokemon.className = "imagen-pokemon";

  return $imagenPokemon;
};
