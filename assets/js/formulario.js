const formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validar);

function reset() {
    formulario.reset();
}

function validar(evento) {
    const nombre = document.getElementById("nombre").value;
    const asunto = document.getElementById("asunto").value;
    const mensaje = document.getElementById("mensaje").value;
    const regex = /^[a-zA-Z]+$/;
    let valido = true;
    evento.preventDefault();

    if (!regex.test(nombre)) {
        const errorNombre = document.querySelector(".errorNombre");
        errorNombre.innerHTML = `<p>El nombre es requerido</p>`;
        valido = false;
    } else {
        const errorNombre = document.querySelector(".errorNombre");
        errorNombre.innerHTML = "";
    }
  
    if (!regex.test(asunto)) {
        const errorAsunto = document.querySelector(".errorAsunto");
        errorAsunto.innerHTML = `<p>El asunto es requerido</p>`;
        valido = false;
    } else {
        const errorAsunto = document.querySelector(".errorAsunto");
        errorAsunto.innerHTML = "";
    }
  
    if (!regex.test(mensaje)) {
        const errorMensaje = document.querySelector(".errorMensaje");
        errorMensaje.innerHTML = `<p>El mensaje es requerido</p>`;
        valido = false;
    } else {
        const errorMensaje = document.querySelector(".errorMensaje");
        errorMensaje.innerHTML = "";
    }

    if (valido) {
        const elementoExito = document.querySelector(".resultado");
        elementoExito.innerHTML = `<p>Mensaje enviado con éxito!!!</p>`;
    } else {
        const elementoError = document.querySelector(".resultado");
        elementoError.innerHTML = "";
    }
    reset();
  }
