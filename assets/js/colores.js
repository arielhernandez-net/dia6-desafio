const botones = document.querySelectorAll("button");
const caja = document.getElementById("caja");

botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const colorBoton = boton.style.backgroundColor;
      caja.style.backgroundColor = colorBoton;
    });
  });
