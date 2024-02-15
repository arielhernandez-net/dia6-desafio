const botones = document.querySelectorAll("button");
const caja = document.getElementById("caja");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const colorBoton = boton.style.backgroundColor;
      caja.style.backgroundColor = colorBoton;
    });
  });

  //otra forma de funcionanmiento

/* for (const boton of botones) {
    boton.addEventListener("click", () => {
      const color = boton.style.backgroundColor;
      caja.style.backgroundColor = color;
    });
  }
 */
