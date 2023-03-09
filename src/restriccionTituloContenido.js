function restriccion(a, b) {
  const titulo = toString(a);
  if ((a === "" && b === "")) {
    return;
  } else {
    if (titulo.length() > 50) {
      alert("El titulo debe tener menos de 51 caracteres");
      return;
    } else {
      return "<p>" + "Titulo: " + a + "Detalle: " + b + "</p>";
    }
  }
}

export default restriccion;
