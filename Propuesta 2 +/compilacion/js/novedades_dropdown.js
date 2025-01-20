const box = document.getElementById("dropdown-activacion");
const hoverElements = document.querySelectorAll('.dropdown-navegacion');

hoverElements.forEach(hover => {
  hover.addEventListener('mouseenter', () => {
    box.style.display = 'flex'; 
  });
});

box.addEventListener('mouseleave', () => {
    box.style.display = 'none'; 
  });