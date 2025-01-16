function desplegarMasNoticias() {
    var x = document.getElementById("contenedor-mas-noticias");
    var y = document.getElementById("apartado-mas-noticias");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.classList.remove("apartado-mas-noticias2");
        y.classList.add("apartado-mas-noticias");
    } else {
        x.style.display = "block";
        y.classList.remove("apartado-mas-noticias");
        y.classList.add("apartado-mas-noticias2");
    }
}