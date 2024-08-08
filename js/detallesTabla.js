// ------------- Despliegue de Artistas tabla -----------

document.addEventListener("click", (e) => {
  if (e.target.matches(".top_artistas")) {
    e.target.nextElementSibling.classList.toggle("mostrarDesplegable");
  }
  if (e.target.matches(".datosArtistas")) {
    e.target.parentElement.nextElementSibling.classList.toggle(
      "mostrarDesplegable"
    );
  }
});
