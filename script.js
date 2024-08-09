function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
  const projectOverlay = document.querySelector(".project-overlay");

  if (projectOverlay) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Añadir la clase de animación cuando el overlay entra en el viewport
            projectOverlay.classList.add("animate");
          } else {
            // Eliminar la clase de animación cuando el overlay sale del viewport
            projectOverlay.classList.remove("animate");
          }
        });
      },
      {
        threshold: [0], // Ajusta el umbral si es necesario
      }
    );

    observer.observe(projectOverlay);
  }
});
