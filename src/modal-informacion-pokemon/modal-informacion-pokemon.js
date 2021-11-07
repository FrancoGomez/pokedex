const $modalInformacionPokemon = document.querySelector(
  "#modal-informacion-pokemon"
);

const colorTexto = {
  bug: "white",
  dragon: "white",
  fairy: "black",
  fire: "white",
  ghost: "white",
  ground: "black",
  normal: "black",
  psychic: "white",
  steel: "black",
  dark: "white",
  electric: "black",
  fighting: "white",
  flying: "black",
  grass: "black",
  ice: "black",
  poison: "white",
  rock: "white",
  water: "white",
};

const idPokemon = Math.floor(Math.random() * 898);

const mostrarInformacionPokemon = async (idPokemon) => {
  const pokemon = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
  ).json();
  const especiePokemon = await (
    await fetch(`https://pokeapi.co/api/v2/pokemon-species/${idPokemon}`)
  ).json();

  const $contenedorInformacionGraficaPokemon =
    crearContenedorInformacionGraficaPokemon(pokemon, especiePokemon, $modalInformacionPokemon);
  const $contenedorInformacionTecnicaPokemon =
    crearContenedorInformacionTecnicaPokemon(pokemon, especiePokemon);

  $modalInformacionPokemon.appendChild($contenedorInformacionGraficaPokemon);
  $modalInformacionPokemon.appendChild($contenedorInformacionTecnicaPokemon);
};

mostrarInformacionPokemon(idPokemon);
