function restriccion(a, b) {
  if (a === "" && b === "") {
    return;
  } else {
    return "<p>" + "Titulo: " + a + "Detalle: " + b + "</p>";
  }
}

export default restriccion;
