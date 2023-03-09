function restriccion(a, b) {
  const titulo = String(a);
  const contenido = String(b);
  if ((a === "" && b === "")) {
    return;
  } else {
    if (titulo.length() > 50) {
      
      return alert("El titulo debe tener menos de 51 caracteres");
    } else {
      if (contenido.length() > 150) {
        
        return alert("El detalle debe tener menos de 151 caracteres");
      } else {
        return "<p>" + "Titulo: " + a + " " + "Detalle: " + b + "</p>";
      }
    }
  }
}

export default restriccion;
