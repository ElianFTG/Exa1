function restriccion(a, b) {
  const titulo = String(a);
  const contenido = String(b);
  if ((a === "" && b === "")) {
    return;
  } else {
    if (titulo.length() > 50) {
      return;
    } else {
      if (contenido.length() > 150) {
        return;
      } else {
        return "<p>" + "Titulo: " + a + " " + "Detalle: " + b + "</p>";
      }
    }
  }
}

export default restriccion;
