import sumar from "./sumador";

const titulo = document.querySelector("#titulo");
const contenido = document.querySelector("#contenido");
const form = document.querySelector("#publicar-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  div.innerHTML = "<p>" + "Titulo: " + titulo + "Detalle: " + contenido + "</p>";
});
