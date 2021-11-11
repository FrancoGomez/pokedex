const elementosLista = ["Biography", "Stats", "Evolutions"];
let displayedContainer = "biography";

const state = {
    biography: true,
    stats: false,
    evolutions: false,
};

const crearContenedorInformacionTecnicaPokemon = async (
    pokemon,
    especiePokemon
) => {
    const $contenedorInformacionTecnica = returnElement(
        "div",
        "modal-informacion-pokemon__contenedor-informacion-tecnica-pokemon"
    );
    const $listaOpcionesInformacion = returnElement(
        "ul",
        "modal-informacion-pokemon__lista-opciones-informacion"
    );
    const $contenedorBiografia = crearContenedorBiografia(
        pokemon,
        especiePokemon
    );
    const $contenedorStats = crearContenedorStats(pokemon);
    const $contenedorEvolucion = await crearContenedorEvolucion(especiePokemon);

    for (const elemento of elementosLista) {
        const $elementoLista = returnElement(
            "li",
            "modal-informacion-pokemon__elemento-lista"
        );
        const $botonSection = returnElement(
            "button",
            "modal-informacion-pokemon__boton-seccion",
            elemento.toLowerCase(),
            elemento
        );

        $elementoLista.appendChild($botonSection);
        $listaOpcionesInformacion.appendChild($elementoLista);
    }

    changeClassButton($listaOpcionesInformacion);

    $contenedorInformacionTecnica.appendChild($listaOpcionesInformacion);
    $contenedorInformacionTecnica.appendChild($contenedorBiografia);
    $contenedorInformacionTecnica.appendChild($contenedorStats);
    $contenedorInformacionTecnica.appendChild($contenedorEvolucion);

    $listaOpcionesInformacion.onclick = (evento) => {
        const $listButton = evento.target;

        if (
            state[$listButton.id] === false &&
            displayedContainer !== $listButton.id
        ) {
            const $sectionContainer = document.querySelector(
                `#${displayedContainer}Info`
            );
            const $displayedContainer = document.querySelector(
                `#${$listButton.id}Info`
            );

            $sectionContainer.className += " oculto";
            $displayedContainer.className =
                $displayedContainer.className.replace(" oculto", "");

            state[displayedContainer] = false;
            state[$listButton.id] = true;
            displayedContainer = $listButton.id;

            changeClassButton($listaOpcionesInformacion);
        }
    };

    return $contenedorInformacionTecnica;
};

const changeClassButton = (list) => {
    for (const $listItem of list.childNodes) {
        const $listButton = $listItem.childNodes[0];

        if (state[$listButton.id]) {
            $listButton.className += "--seleccionado";
        } else {
            $listButton.className = $listButton.className.replace(
                "--seleccionado",
                ""
            );
        }
    }
};
