const imagen = document.getElementById("boton-like");

imagen.addEventListener("click", () => {
  imagen.src = imagen.src.includes("./compilacion/images/like-svgrepo-com.svg") ? "./compilacion/images/fill-like-svgrepo-com.png" : "./compilacion/images/like-svgrepo-com.svg";
});