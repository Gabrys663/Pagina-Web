// Cambiar de pantalla (como "diapositivas")
const botonesPantalla = document.querySelectorAll("[data-pantalla]");
const pantallas = document.querySelectorAll(".pantalla");

botonesPantalla.forEach((boton) => {
  boton.addEventListener("click", () => {
    const idPantalla = boton.getAttribute("data-pantalla");

    pantallas.forEach((p) => p.classList.remove("activa"));

    const pantallaObjetivo = document.getElementById(idPantalla);
    if (pantallaObjetivo) {
      pantallaObjetivo.classList.add("activa");
    }
  });
});

// Letras de ejemplo (luego aquí ponemos tus canciones reales)
const letras = {
  cancion1: {
    titulo: "Canción 1 - Ejemplo",
    texto: `Esta es una letra de ejemplo
para probar la página de Gabrys & Luna.

Aquí luego pegamos la letra real
de una de tus canciones.`
  },
  cancion2: {
    titulo: "Canción 2 - Ejemplo",
    texto: `Otra letra de ejemplo,
para la segunda canción.

Cuando ya tengas tus letras listas,
solo cambiamos este texto.`
  }
};

const botonesCancion = document.querySelectorAll(".cancion");
const tituloCancion = document.getElementById("titulo-cancion");
const textoCancion = document.getElementById("texto-cancion");

botonesCancion.forEach((boton) => {
  boton.addEventListener("click", () => {
    const id = boton.getAttribute("data-cancion");
    const info = letras[id];

    if (info) {
      tituloCancion.textContent = info.titulo;
      textoCancion.textContent = info.texto;
    }
  });
});
