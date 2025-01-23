function desplegarSuscripcion() {
    var x = document.getElementById("pop-up-suscribirse");
    var opacidad = document.getElementById("opacidad");
    if (x.style.display === "flex") {
      x.style.display = "none";
      opacidad.style.display = "none";
    } else {
      x.style.display = "flex";
      opacidad.style.display = "block";
    }
  }