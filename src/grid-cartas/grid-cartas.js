const $contenedorCartasPokemon = document.querySelector(
  "#contenedor-cartas-pokemon"
);

const crearGridCartas = () => {
  const $gridCartas = document.createElement("div");
  $gridCartas.className = "grid-cartas grid-columns";
  $gridCartas.id = "grid-cartas";

  $contenedorCartasPokemon.appendChild($gridCartas);

  $gridCartas.onclick = (evento) => {
    console.log(evento.target);
  };
};

const crearPokemonEnGrid = async (cantidadPokemon) => {
  const $gridCartas = document.querySelector("#grid-cartas");

  index = $gridCartas.childNodes.length;

  for (let i = 0; i < cantidadPokemon; i++) {
    const idPokemon = i + 1;

    const pokemon = await (
      await fetch(`https://pokeapi.co/api/v2/pokemon/${idPokemon}`)
    ).json();
    const $carta = crearCartaPokemon(pokemon);
    $gridCartas.appendChild($carta);
  }
};
