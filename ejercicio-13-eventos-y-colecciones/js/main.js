


document.addEventListener("DOMContentLoaded", () => {
  
  /* Punto 2 */
  console.log("Contenido del DOM cargado")


  /* Punto 3 */
  const textArea = document.getElementById('origen')
  //console.dir(textArea)
  textArea.value = `<p>Este contenido <strong>está listo</strong><br>para ser editado y pasarlo abajo.</p>`


  /* Punto 4 */

  textArea.addEventListener('input', () => {
    const coleccionInput = document.getElementsByTagName('input')
    console.log(coleccionInput)

/*     coleccionInput.forEach(inputx => {
      inputx.disabled = 'false'
    }); */
  })

  })  







//textArea.innerHTML = "PRUEBa"