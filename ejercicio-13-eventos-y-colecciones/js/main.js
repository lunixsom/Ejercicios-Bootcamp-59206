document.addEventListener("DOMContentLoaded", () => {
  const textArea = document.getElementById("origen");
  const coleccionInput = document.querySelectorAll("input");
  const botonAMinusculas = document.querySelector("button");
  const divDestino = document.getElementById("destino");

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

  function agregarNvecesADivDestino(cant = 1) {
    let contenidoOrigen = "";

    for (let i = 0; i < cant; i++) {
      contenidoOrigen += textArea.value;
    }

    divDestino.innerHTML = contenidoOrigen;
    console.log(divDestino);
  }

  coleccionInput[0].addEventListener("click", () => {
    agregarNvecesADivDestino();
  });
});
