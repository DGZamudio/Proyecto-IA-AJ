function desplegarMenuCelular() {
    var x = document.getElementById("menu-celulares");
    var opacidad = document.getElementById("opacidad");
    if (x.style.display === "block") {
      x.style.display = "none";
      opacidad.style.display = "none";
    } else {
      window.scrollTo(0, 0); 
      x.style.display = "block";
      opacidad.style.display = "block";
    }
  }