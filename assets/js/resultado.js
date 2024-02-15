const valor1 = document.getElementById("valor1");
const valor2 = document.getElementById("valor2");
const sumarBtn = document.getElementById("btn-sumar");
const restarBtn = document.getElementById("btn-restar");

sumarBtn.addEventListener("click", sumar);
restarBtn.addEventListener("click", restar);

function sumar() {
    let resultado = parseInt(valor1.value) + parseInt(valor2.value);
    const sumaResultado = document.querySelector(".resultado");
    sumaResultado.innerHTML = `<p>El resultado es ${resultado}</p>`;
}
function restar() {
    let resultado = parseInt(valor1.value) - parseInt(valor2.value);
    const resultadoResta = resultado < -1 ? 0 : resultado;
    const restaResultado = document.querySelector(".resultado");
    restaResultado.innerHTML = `<p>El resultado es ${resultadoResta}</p>`;
}