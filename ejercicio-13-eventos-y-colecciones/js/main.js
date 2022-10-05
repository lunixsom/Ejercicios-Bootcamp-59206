document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("origen");
  const coleccionInput = document.querySelectorAll("input");
  const botonAMinusculas = document.querySelector("button");
  const divDestino = document.getElementById("destino");
  const contenedorInputsSuperiores = document.querySelector("body");
  const botonReemplazar = document.getElementById('btn-reemplazar')

  let contenidoOrigen = textArea.value;

  /* Punto 2 */
  console.log("Contenido del DOM cargado");

  /* Punto 3 */
  //console.dir(textArea)
  textArea.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`;

  /* Punto 4 */
  textArea.addEventListener("input", () => {
    botonAMinusculas.disabled = false;

    coleccionInput.forEach((input) => {
      input.disabled = false;
    });
  });

  /* Punto 5 */

  function cualBotonEs(unBoton) {
    switch (unBoton.value) {
      case "Agregar":
        agregarNvecesADivDestino();
        break;
      case "Agregar 5 veces":
        agregarNvecesADivDestino(5);
        break;
      case "Agregar 10 veces":
        agregarNvecesADivDestino(10);
        break;
      case "Agregar n veces":
        cantidad = prompt("Inserta cantidad:");
        agregarNvecesADivDestino(cantidad);
        break;

      default:
        break;
    }
  }

  function agregarNvecesADivDestino(cant = 1) {
    for (let i = 0; i < cant; i++) {
      contenidoOrigen += textArea.value;
    }

    divDestino.innerHTML = contenidoOrigen;
    console.log(divDestino);
  }

  botonReemplazar.addEventListener('click', () => {
    contenidoOrigen = textArea.value
    //console.log(contenidoOrigen)
    divDestino.innerHTML = contenidoOrigen 

  })

/*     coleccionInput[0].addEventListener("click", () => {
    contenidoOrigen = ''
    //divDestino.value =  contenidoOrigen
    //console.log(divDestino.textContent)
    divDestino.innerHTML = contenidoOrigen
    //console.log(contenidoOrigen)
  })
 */
  contenedorInputsSuperiores.addEventListener("click", (e) => {
    if (e.target.className === "btn-agregar") {
      cualBotonEs(e.target);
    } else {
      e.preventDefault();
    }
  });
});
