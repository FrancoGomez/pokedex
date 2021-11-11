const crearContenedorStats = (pokemon) => {
    const description =
        "Min & Max values are calculated for level 100 Pokemon. Minimum values are based on 0 EVs & 0 IVs, meanwhile Maximum values are based on 252 EVs & 31 IVs.";

    const $contenedorStats = returnElement(
        "div",
        "modal-informacion-pokemon__contenedor-pokemon-data oculto",
        "statsInfo"
    );
    const $tituloStats = returnElement(
        "h4",
        "titulo-stats",
        false,
        "Base stats"
    );
    const $listaStats = returnListWithPokemonStats(pokemon);
    const $descripcionMedicionStats = returnElement(
        "p",
        "modal-descripcion",
        false,
        description
    );

    $contenedorStats.appendChild($tituloStats);
    $contenedorStats.appendChild($listaStats);
    $contenedorStats.appendChild($descripcionMedicionStats);

    returnListWithPokemonStats(pokemon);

    return $contenedorStats;
};

const returnListWithPokemonStats = (pokemon) => {
    const $listaStats = returnElement("ul", "lista-stats");

    for (const slot of pokemon.stats) {
        const nameStat = slot.stat.name.replace("-", " ");
        const minimumValue = slot.base_stat;
        const maximumValue =
            nameStat === "hp"
                ? Math.floor(slot.base_stat * 2 + 204)
                : Math.floor(slot.base_stat * 2 + 99 * 1.1);
        const progress = Math.floor((minimumValue / maximumValue) * 100);

        const $elementoLista = returnElement("li", "elemento-lista");

        const $nameStat = returnElement(
            "div",
            "dato-elemento-lista",
            false,
            nameStat
        );
        const $minimumValue = returnElement(
            "div",
            "dato-elemento-lista",
            false,
            minimumValue
        );
        const $progressBar = returnElement("div", "dato-elemento-lista");

        const $progress = returnElement("div", "barra-progreso");
        $progress.style.width = `${progress * 2}%`;

        const $maximumValue = returnElement(
            "div",
            "dato-elemento-lista",
            false,
            maximumValue
        );

        $progressBar.appendChild($progress);
        $elementoLista.appendChild($nameStat);
        $elementoLista.appendChild($minimumValue);
        $elementoLista.appendChild($progressBar);
        $elementoLista.appendChild($maximumValue);

        $listaStats.appendChild($elementoLista);
    }

    return $listaStats;
};
