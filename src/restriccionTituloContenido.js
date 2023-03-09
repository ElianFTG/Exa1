function restriccion(a, b) {
  const titulo = String(a);
  const contenido = String(b);
  if ((a === "" && b === "")) {
    alert("El titulo y el Detalle estan vacios, por favor ingrese algo en las casillas");
    return;
  } else {
    if (titulo.length() > 50) {
      alert("El titulo debe tener menos de 51 caracteres");
      return;
    } else {
      if (contenido.length() > 150) {
        alert("El detalle debe tener menos de 151 caracteres");
        return;
      } else {
        return "<p>" + "Titulo: " + a + "Detalle: " + b + "</p>";
      }
    }
  }
}

export default restriccion;
