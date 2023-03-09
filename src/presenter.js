import restriccion from "./restriccionTituloContenido";

const titulo = document.querySelector("#titulo");
const contenido = document.querySelector("#detalle");
const form = document.querySelector("#publicar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = restriccion(titulo.value, contenido.value);
});
