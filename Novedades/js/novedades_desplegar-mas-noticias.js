function desplegarMasNoticias() {
    var x = document.getElementById("contenedor-noticias-ocultas");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}