// ---------- Carrusel Imágenes -----------

const carrusel_imagenes = document.getElementById("carrusel_imagenes");

const flecha_izquierda = document.getElementById("flecha_izq");

const flecha_derecha = document.getElementById("flecha_der");

flecha_izquierda.addEventListener("click", () => {
  carrusel_imagenes.scrollLeft -= carrusel_imagenes.offsetWidth;
});

flecha_derecha.addEventListener("click", () => {
  carrusel_imagenes.scrollLeft += carrusel_imagenes.offsetWidth;
});

// ------------- Fin Carrusel Imágenes ----------------
