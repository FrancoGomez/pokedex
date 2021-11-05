const colorTipos = {
  bug: "rgb(114, 159, 63)",
  dragon: "rgb(241, 110, 87)",
  fairy: "rgb(253, 185, 233)",
  fire: "rgb(253, 125, 36)",
  ghost: "rgb(123, 98, 163)",
  ground: "rgb(171, 152, 66)",
  normal: "rgb(164, 172, 175)",
  psychic: "rgb(243, 102, 185)",
  steel: "rgb(158, 183, 184)",
  dark: "rgb(72, 87, 91)",
  electric: "rgb(248, 208, 48)",
  fighting: "rgb(213, 103, 35)",
  flying: "rgb(61, 199, 239)",
  grass: "rgb(155, 204, 80)",
  ice: "rgb(81, 196, 231)",
  poison: "rgb(185, 127, 201)",
  rock: "rgb(163, 140, 33)",
  water: "rgb(69, 146, 196)",
};

const crearCartaPokemon = (pokemon) => {
  const $carta = document.createElement("div");
  $carta.className = "carta";

  const colorPrimerTipo = colorTipos[pokemon.types[0].type.name];
  $carta.style.backgroundColor = colorPrimerTipo;

  $carta.appendChild(crearParteSuperiorCarta(pokemon.id));
  $carta.appendChild(
    crearParteInferiorCarta(pokemon.species.name, pokemon.types)
  );

  $carta.appendChild(crearEnvolvedorCarta(pokemon.id));

  return $carta;
};

const crearEnvolvedorCarta = (pokemonId) => {
  const $envolvedorCarta = document.createElement("div");
  $envolvedorCarta.className = "envolvedor-carta";
  $envolvedorCarta.setAttribute("id", pokemonId);

  return $envolvedorCarta;
};
