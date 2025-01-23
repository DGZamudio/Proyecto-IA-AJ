function desplegarNoticia() {
    var x = document.getElementById("pop-up");
    var opacidad = document.getElementById("opacidad");
    if (x.style.display === "block") {
      x.style.display = "none";
      opacidad.style.display = "none";
    } else {
      x.style.display = "block";
      opacidad.style.display = "block";
    }
  }

function desplegarNoticia2() {
  var x = document.getElementById("pop-up");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}