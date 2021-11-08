const crearContenedorStats = (pokemon) => {
  const stats = {
    Hp: {
      Min: Number(pokemon.stats[0].base_stat),
      Max: Math.floor(Number(pokemon.stats[0].base_stat) * 2 + 204),
    },
    Attack: {
      Min: Number(pokemon.stats[1].base_stat),
      Max: Math.floor((Number(pokemon.stats[1].base_stat) * 2 + 99) * 1.1),
    },
    Defense: {
      Min: Number(pokemon.stats[2].base_stat),
      Max: Math.floor((Number(pokemon.stats[2].base_stat) * 2 + 99) * 1.1),
    },
    "Sp. Atk": {
      Min: Number(pokemon.stats[3].base_stat),
      Max: Math.floor((Number(pokemon.stats[3].base_stat) * 2 + 99) * 1.1),
    },
    "Sp. Def": {
      Min: Number(pokemon.stats[4].base_stat),
      Max: Math.floor((Number(pokemon.stats[4].base_stat) * 2 + 99) * 1.1),
    },
    Speed: {
      Min: Number(pokemon.stats[5].base_stat),
      Max: Math.floor((Number(pokemon.stats[5].base_stat) * 2 + 99) * 1.1),
    }
  };

  const $contenedorStats = document.createElement("div");
  $contenedorStats.className =
    "modal-informacion-pokemon__contenedor-pokemon-data oculto";
  $contenedorStats.setAttribute("id", "statsInfo");

  const $tituloStats = document.createElement("h4");
  $tituloStats.className = "titulo-stats";
  $tituloStats.innerText = "Base stats";

  const $listaStats = document.createElement("ul");
  $listaStats.className = "lista-stats";

  for (const [key, value] of Object.entries(stats)) {
    const nombreStat = key
    const valorMinimo = value.Min;
    const progreso = Math.floor((value.Min / value.Max) * 100);
    const valorMaximo = value.Max;

    const datos = [nombreStat, valorMinimo, progreso, valorMaximo]

    const $elementoLista = document.createElement('li')
    $elementoLista.className = 'elemento-lista'
    
    for (let i = 0; i < 4; i++) {
      const $datoElementoLista = document.createElement('div')
      $datoElementoLista.className = 'dato-elemento-lista'

      if(datos[i] === progreso) {
        const $barraProgreso = document.createElement('div')
        $barraProgreso.className = 'barra-progreso'
        $barraProgreso.style.width = `${progreso * 2}%`

        $datoElementoLista.appendChild($barraProgreso)
      } else {
        $datoElementoLista.innerText = datos[i]
      }

      $elementoLista.appendChild($datoElementoLista)
    }

    $listaStats.appendChild($elementoLista)
  }

  const $descripcionMedicionStats = document.createElement("p");
  $descripcionMedicionStats.className = "modal-descripcion";
  $descripcionMedicionStats.innerText =
    "Min & Max values are calculated for level 100 Pokemon. Minimum values are based on 0 EVs & 0 IVs, meanwhile Maximum values are based on 252 EVs & 31 IVs.";

  $contenedorStats.appendChild($tituloStats);
  $contenedorStats.appendChild($listaStats);
  $contenedorStats.appendChild($descripcionMedicionStats);

  return $contenedorStats;
};
