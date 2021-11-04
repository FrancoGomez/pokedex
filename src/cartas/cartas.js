const crearCartaPokemon = (pokemon) => {
  const $carta = document.createElement("div");
  $carta.className = "carta";

  const $parteSuperiorCarta = document.createElement("div");
  $parteSuperiorCarta.className = "parte-superior-carta";

  const $parteInferiorCarta = document.createElement("div");
  $parteInferiorCarta.className = "parte-inferior-carta";

  $carta.appendChild($parteSuperiorCarta);
  $carta.appendChild($parteInferiorCarta);

  return $carta;
};
