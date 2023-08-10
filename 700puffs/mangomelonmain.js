const botonAnterior = document.getElementById("boton-anterior")
const botonSiguiente = document.getElementById("boton-siguiente")
const imagenUno = document.getElementById("imagen-uno")
const imagenDos = document.getElementById("imagen-dos")

imagenDos.style.display = "none"

let imagenActual = 1; // 1 para imagen-uno, 2 para imagen-dos

botonAnterior.addEventListener("click", cambiarImagen);
botonSiguiente.addEventListener("click", cambiarImagen);

function cambiarImagen() {
    if (imagenActual === 1) {
        imagenUno.style.display = "none";
        imagenDos.style.display = "flex";
        imagenActual = 2;
    } else {
        imagenDos.style.display = "none";
        imagenUno.style.display = "flex";
        imagenActual = 1;
    }
}