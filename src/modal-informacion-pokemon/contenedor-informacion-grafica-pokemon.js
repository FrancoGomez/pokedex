const crearContenedorInformacionGraficaPokemon = (pokemon, especiePokemon) => {
  const $contenedorInformacionGraficaPokemon = document.createElement("div");
  $contenedorInformacionGraficaPokemon.className =
    "modal-informacion-pokemon__contenedor-informacion-grafica-pokemon";

  const id = pokemon.id.toString().padStart(3, "0");
  const tipoPokemon = pokemon.types[0].type.name;
  const nombrePokemon = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);
  const nombrePokemonJapones = especiePokemon.names[9].name;

  const $parrafoIdPokemon = crearParrafoIdPokemon(id, tipoPokemon);
  const $tituloNombrePokemon = crearTituloNombrePokemon(
    nombrePokemon,
    tipoPokemon
  );
  const $contenedorPokemon = crearContenedorPokemon(
    nombrePokemonJapones,
    tipoPokemon,
    idPokemon
  );

  $contenedorInformacionGraficaPokemon.appendChild($parrafoIdPokemon);
  $contenedorInformacionGraficaPokemon.appendChild($tituloNombrePokemon);
  $contenedorInformacionGraficaPokemon.appendChild($contenedorPokemon);

  return $contenedorInformacionGraficaPokemon;
};

const crearParrafoIdPokemon = (id, tipoPokemon) => {
  const $parrafoIdPokemon = document.createElement("p");
  $parrafoIdPokemon.className = "modal-informacion-pokemon__parrafo-id-pokemon";

  $parrafoIdPokemon.innerText = `#${id}`;
  $parrafoIdPokemon.style.color = colorTexto[tipoPokemon];

  return $parrafoIdPokemon;
};

const crearTituloNombrePokemon = (nombrePokemon, tipoPokemon) => {
  const $tituloNombrePokemon = document.createElement("h2");
  $tituloNombrePokemon.className =
    "modal-informacion-pokemon__titulo-nombre-pokemon";

  $tituloNombrePokemon.innerText = nombrePokemon;
  $tituloNombrePokemon.style.color = colorTexto[tipoPokemon];

  return $tituloNombrePokemon;
};

const crearContenedorPokemon = (
  nombrePokemonJapones,
  tipoPokemon,
  idPokemon
) => {
  const $contenedorPokemon = document.createElement("div");
  $contenedorPokemon.className =
    "modal-informacion-pokemon__contenedor-imagen-pokemon";

  const $tituloNombrePokemonJapones = crearTituloNombrePokemonJapones(
    nombrePokemonJapones,
    tipoPokemon
  );
  const $imagenPokemonModal = crearImagenPokemonModal(idPokemon);

  $contenedorPokemon.appendChild($tituloNombrePokemonJapones);
  $contenedorPokemon.appendChild($imagenPokemonModal);

  return $contenedorPokemon;
};

const crearTituloNombrePokemonJapones = (nombrePokemonJapones, tipoPokemon) => {
  const $tituloNombrePokemonJapones = document.createElement("h3");
  $tituloNombrePokemonJapones.className =
    "modal-informacion-pokemon__titulo-nombre-pokemon-japones";

  $tituloNombrePokemonJapones.innerText = nombrePokemonJapones;
  $tituloNombrePokemonJapones.style.color = colorTexto[tipoPokemon];

  return $tituloNombrePokemonJapones;
};

const crearImagenPokemonModal = (idPokemon) => {
  const $imagenPokemon = document.createElement("img");
  $imagenPokemon.className = "modal-informacion-pokemon__imagen-pokemon";
  const imagenUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${idPokemon}.png`;
  $imagenPokemon.src = imagenUrl;

  return $imagenPokemon;
};