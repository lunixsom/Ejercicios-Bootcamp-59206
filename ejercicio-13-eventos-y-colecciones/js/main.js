document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("origen");
  const coleccionInput = document.querySelectorAll("input");
  const btnAMinusculas = document.querySelector("button");
  const divDestino = document.getElementById("destino");
  const contenedorInputsSuperiores = document.querySelector("body");
  const btnReemplazar = document.getElementById("btn-reemplazar");
  const btnVaciar = document.getElementsByClassName('btn-vaciar')[0]
  const btnAMayuculas = document.getElementsByClassName('btn-convertir-a-mayusculas')[0]

  let contenidoOrigen = textArea.value;

  /* Punto 2 */
  console.log("Contenido del DOM cargado");

  /* Punto 3 */
  //console.dir(textArea)
  textArea.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`;

  /* Punto 4 */
  textArea.addEventListener("input", () => {
    btnAMinusculas.disabled = false;

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
      contenidoOrigen += `${textArea.value} `;
    }

    divDestino.innerHTML = contenidoOrigen;
    console.log(divDestino);
  }

  btnReemplazar.addEventListener("click", () => {
    contenidoOrigen = textArea.value;
    divDestino.innerHTML = contenidoOrigen;
  });

  contenedorInputsSuperiores.addEventListener("click", (e) => {
    if (e.target.className === "btn-agregar") {
      cualBotonEs(e.target);
    } else {
      e.preventDefault();
    }
  });

  /* Punto 6 */

  btnVaciar.addEventListener('click', () => {
    divDestino.innerHTML = ''
  })

  btnAMayuculas.addEventListener('click', () => {
     divDestino.innerHTML =  contenidoOrigen.toUpperCase()
  })

  btnAMinusculas.addEventListener('click', () => {
    divDestino.innerHTML =  contenidoOrigen.toLowerCase()
 })

});
