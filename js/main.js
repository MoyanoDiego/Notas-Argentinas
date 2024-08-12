window.onload = function () {
  // ----------MENU RESPONSIVO -----------------

  /*  VARIABLES GLOBALES */
  const nav = document.getElementById("nav_links");
  const navlinks = document.querySelectorAll(".nav_links li");
  const bur = document.getElementById("bmenu");

  /*----------------- MENU RESPONSIVE -------------------------- */
  function deslizar() {
    //Toggle NAV
    nav.classList.toggle("nav-active");

    //Links animados
    navlinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `aparecer 0.5s ease forwards ${
          index / 4 + 0.3
        }s`;
      }
    });

    //Animación menu burguer
    bur.classList.toggle("barras");
  }

  document.getElementById("bmenu").onclick = () => {
    deslizar();
  };

  // ESCONDER MENU AL DAR CLICK EN BOTON
  document.addEventListener("click", (e) => {
    if (e.target.matches(".elemNav a")) {
      nav.classList.toggle("nav-active");
      //Links animados
      navlinks.forEach((link, index) => {
        if (link.style.animation) {
          link.style.animation = "";
        } else {
          link.style.animation = `aparecer 0.5s ease forwards ${
            index / 4 + 0.3
          }s`;
        }
      });

      //Animación menu burguer
      bur.classList.toggle("barras");
    }
  });
};

function bienvenido() {
  let email = document.getElementById("email").value;
  let contenedorFormulario = document.querySelector(".contenedor-formulario");
  let ventanaModal = document.querySelector(".pantallaCompleta");
  let emailUsuario = document.querySelector(".emailUsuario");

  ventanaModal.style.display = "block";
  emailUsuario.innerHTML = `${email}`;
  contenedorFormulario.style.display = "none";
}
