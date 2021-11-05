const crearParteInferiorCarta = (nombre, tipos) => {
  const $parteInferiorCarta = document.createElement("div");
  $parteInferiorCarta.className = "parte-inferior-carta";

  $parteInferiorCarta.appendChild(crearNombrePokemon(nombre));
  $parteInferiorCarta.appendChild(crearParrafoTipos(tipos));

  return $parteInferiorCarta;
};

const crearParrafo = (texto, color) => {
  const $tipoPokemon = document.createElement("p");
  $tipoPokemon.innerText = texto.toUpperCase();
  $tipoPokemon.className = "tipo-pokemon";
  $tipoPokemon.style.color = color;

  return $tipoPokemon;
};

const crearNombrePokemon = (nombre) => {
  const $nombrePokemon = document.createElement("h2");

  const nombreConPrimeraMayuscula = nombre[0].toUpperCase() + nombre.slice(1);

  $nombrePokemon.innerText = nombreConPrimeraMayuscula;
  $nombrePokemon.className = "nombre-pokemon";

  return $nombrePokemon;
};

const crearParrafoTipos = (tipos) => {
  const $contenedorTiposPokemon = document.createElement("div");
  $contenedorTiposPokemon.className = "contenedor-tipos-pokemon";

  tipos.forEach((tipo) => {
    const tipoPokemon = tipo.type.name;
    const colorPokemon = colorTipos[tipo.type.name];

    $contenedorTiposPokemon.appendChild(
      crearParrafo(tipoPokemon, colorPokemon)
    );
  });

  return $contenedorTiposPokemon;
};
