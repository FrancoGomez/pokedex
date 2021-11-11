const $contenedorCartasPokemon = document.querySelector(
    "#contenedor-cartas-pokemon"
);
const $modalPokemon = document.querySelector("#modal-informacion-pokemon");

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

const returnElement = (
    type,
    className,
    id = false,
    innerText = false,
    color = false
) => {
    const $element = document.createElement(type);
    $element.className = className;

    if (id) {
        $element.setAttribute("id", id);
    }

    if (innerText) {
        $element.innerText = innerText;
    }

    if (color) {
        $element.style.color = color;
    }

    return $element;
};

const returnImage = (className, id = false, src) => {
    const $image = document.createElement("img");
    $image.className = className;
    $image.src = src;

    if (id) {
        $image.setAttribute("id", id);
    }

    return $image;
};

const getPokemonImage = (pokemonId) => {
    const imagenUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/${pokemonId}.png`;

    return imagenUrl;
};

const getJapaneseName = (pokemonSpecies) => {
    for (const slot of pokemonSpecies.names) {
        const nameLanguage = slot.language.name;
        const name = slot.name;

        if (nameLanguage === "ja") {
            return name;
        }
    }
};

const hideElement = ($element) => {
    $element.className += " oculto";
};

const showElement = ($element) => {
    $element.className = $element.className.replace(" oculto", "");
};

const resetModalState = () => {
    $modalPokemon.childNodes[0].remove();
    $modalPokemon.childNodes[0].remove();
};

const resetTecnicalContainerState = () => {
    displayedContainer = "biography";

    state.biography = true;
    state.stats = false;
    state.evolutions = false;
};

const appendChilds = ($element, arrayChilds) => {
  for (const $child of arrayChilds) {
    $element.appendChild($child)
  }
}