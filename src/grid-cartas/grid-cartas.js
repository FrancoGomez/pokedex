const $contenedorCartasPokemon = document.querySelector(
  "#contenedor-cartas-pokemon"
);

const crearGridCartas = () => {
  const $gridCartas = document.createElement("div");
  $gridCartas.className = "grid-cartas";
  $gridCartas.id = "grid-cartas";

  return $gridCartas;
};

const crearPokemonEnGrid = (listaPokemon) => {
  const $gridCartas = crearGridCartas();

  listaPokemon.forEach((pokemon) => {
    $gridCartas.appendChild(crearCartaPokemon(pokemon));
  });

  $contenedorCartasPokemon.appendChild($gridCartas);
};
