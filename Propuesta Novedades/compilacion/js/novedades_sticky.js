const menu = document.getElementById("contenido-header-navegacion");
const fecha = document.getElementById("calendario-header")

const stickyOffset = menu.offsetTop;

window.addEventListener("scroll", () => {
    const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

    if (scrollTop > stickyOffset) {
      menu.classList.add("sticky");
      fecha.classList.add("sticky");
    } else {
      menu.classList.remove("sticky");
      fecha.classList.remove("sticky");
    }
});
