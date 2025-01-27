function desplegarMenuLateral() {
    var x = document.getElementById("menu-lateral");
    var opacidad = document.getElementById("opacidad");
    if (x.style.display === "block") {
      x.style.display = "none";
      opacidad.style.display = "none";
    } else {
      x.style.display = "block";
      opacidad.style.display = "block";
    }
  }