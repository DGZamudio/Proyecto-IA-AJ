function desplegarMasNoticias() {
    var x = document.getElementById("contenedor-noticias-ocultas");
    var y = document.getElementById("flecha-ver-mas");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        y.style.transform = "rotate(180deg)";
    }
}