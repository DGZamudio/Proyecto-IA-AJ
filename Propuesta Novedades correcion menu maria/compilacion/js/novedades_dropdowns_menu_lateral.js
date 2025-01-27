function desplegarOrigenes() {
    var x = document.getElementById("contenedor-filtro-origenes");
    var y = document.getElementById("flecha-origenes");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        y.style.transform = "rotate(180deg)";
    }
}

function desplegarTemas() {
    var x = document.getElementById("contenedor-filtro-temas");
    var y = document.getElementById("flecha-temas");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        y.style.transform = "rotate(180deg)";
    }
}

function desplegarTematicas() {
    var x = document.getElementById("contenedor-contenido-temas");
    var y = document.getElementById("flecha-tematicas");

    if (x.style.display === "block") {
        x.style.display = "none";
        y.style.transform = "rotate(0deg)";
    } else {
        x.style.display = "block";
        y.style.transform = "rotate(180deg)";
    }
}